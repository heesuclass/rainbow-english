/* Rainbow English Games - offline service worker */
const VERSION='rainbow-v4';
const CORE=['./','./common.css','./common.js','./index.html','./spy.html','./escape.html','./raid.html','./rain.html','./board.html','./thinkso.html','./culture.html',
  './manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
const FONT_HOSTS=['fonts.googleapis.com','fonts.gstatic.com','hangeul.pstatic.net','cdn.jsdelivr.net'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!=='rainbow-fonts').map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(FONT_HOSTS.includes(u.hostname)){ // fonts: cache first, fill on first online visit
    e.respondWith(caches.open('rainbow-fonts').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;
      try{const r=await fetch(e.request);if(r.ok||r.type==='opaque')c.put(e.request,r.clone());return r}catch(err){return new Response('',{status:504})}}));return;}
  if(u.origin!==location.origin)return;
  // app files: network first when online (to get updates), cache fallback offline
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}return r})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
});
