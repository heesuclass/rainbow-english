/* Rainbow English Games - common engine */
(function(){
const W = (en,ko,e)=>({en,ko,e});
const S = (en,ko)=>({en,ko});
const THEMES = {
  l11:{name:'Lesson 11',ko:'11과 I Think It Looks Bright',e:'🤔',
    words:[W('dark','어두운','🌑'),W('bright','밝은','☀️'),W('soft','부드러운','🍰'),W('hard','딱딱한','🪨'),W('safe','안전한','🦺'),
      W('dangerous','위험한','⚠️'),W('boring','지루한','🥱'),W('interesting','흥미로운','🤩'),W('fun','재미있는','🎉'),W('cheap','값이 싼','🏷️'),
      W('clever','영리한','🧠'),W('quiet','조용한','🤫'),W('pretty','예쁜','🌸'),W('skirt','치마','👗'),W('board game','보드게임','🎲'),
      W('ride','놀이기구','🎢'),W('zoo','동물원','🦁'),W('condition','상태, 환경','🏚️')],
    sents:[S('The sky looks dark.','하늘이 어두워 보여.'),S('What do you think?','너는 어떻게 생각하니?'),S('I think so, too.','나도 그렇게 생각해.'),
      S("I don't think so.",'나는 그렇게 생각하지 않아.'),S('I think it looks bright.','나는 그게 밝아 보인다고 생각해.'),S('This cake looks soft.','이 케이크는 부드러워 보여.'),
      S('This ride looks safe.','이 놀이기구는 안전해 보여.'),S('This sport looks dangerous.','이 운동은 위험해 보여.'),S('This movie looks interesting.','이 영화는 흥미로워 보여.'),
      S('This board game looks boring.','이 보드게임은 지루해 보여.'),S('I think Tom Sawyer is clever.','나는 톰 소여가 영리하다고 생각해.'),S("Wow! It's cheap.",'와! 싸다.'),
      S('I think zoos are good for animals.','나는 동물원이 동물들에게 좋다고 생각해.'),S('Zoo animals live in bad conditions.','동물원 동물들은 나쁜 환경에서 살아.'),
      S('They need to live in quiet places.','그들은 조용한 곳에서 살아야 해.')],
    qa:[['A: This room looks dark. What do you think?\nB: I don\'t think so. I think it looks ___.','bright'],
      ['A: The sky looks bright. What do you think?\nB: I don\'t think so. I think it looks ___.','dark'],
      ['A: This bread looks hard. What do you think?\nB: I don\'t think so. I think it looks ___.','soft'],
      ['A: This cake looks soft. What do you think?\nB: I don\'t think so. I think it looks ___.','hard'],
      ['A: This ride looks dangerous. What do you think?\nB: I don\'t think so. I think it looks ___.','safe'],
      ['A: This sport looks safe. What do you think?\nB: I don\'t think so. I think it looks ___.','dangerous'],
      ['A: This movie looks boring. What do you think?\nB: I don\'t think so. I think it looks ___.','interesting'],
      ['A: This board game looks fun. What do you think?\nB: I don\'t think so. I think it looks ___.','boring'],
      ['A: The sky looks dark. What do you think?\nB: (동의할 때) ___','I think so, too.'],
      ['A: This cake looks soft. What do you think?\nB: (동의하지 않을 때) ___',"I don't think so."]],
    hints:['It looks ___.','I think it is ___.','It is the opposite of ___.','You can see it in ___.']},
  l12:{name:'Lesson 12',ko:'12과 Do You Know Anything About Jige?',e:'🏯',
    words:[W('jige','지게','🎒'),W('gat','갓','🎩'),W('hanok','한옥','🏠'),W('pansori','판소리','🎤'),W('minhwa','민화','🖼️'),
      W('yunnori','윷놀이','🎲'),W('tteokguk','떡국','🍲'),W('traditional','전통적인','🏯'),W('carry','나르다','📦'),W('culture','문화','🎎'),
      W('holiday','휴일, 명절','🎉'),W('soup','수프, 국','🥣'),W('bean','콩','🫘'),W('afraid','두려워하는','😨'),W('public','공공의','🏙️'),
      W('street','거리','🛣️'),W('Internet','인터넷','💻'),W('call','부르다','📣'),W('puppy','강아지','🐶'),W('museum','박물관','🏛️')],
    sents:[S('Do you know anything about jige?','너는 지게에 대해 알고 있니?'),S("Yes, I do. It's a traditional Korean carrier.",'응, 알아. 그것은 한국의 전통 운반 도구야.'),
      S("No, I don't. I have no idea.",'아니, 몰라. 전혀 모르겠어.'),S("It's a traditional Korean hat.",'그것은 한국의 전통 모자야.'),S("It's a traditional Korean house.",'그것은 한국의 전통 집이야.'),
      S("It's traditional Korean music.",'그것은 한국의 전통 음악이야.'),S("It's a traditional Korean painting.",'그것은 한국의 전통 그림이야.'),S("It's a traditional Korean board game.",'그것은 한국의 전통 보드게임이야.'),
      S("It's a traditional Korean soup with rice cakes.",'그것은 떡이 들어간 한국의 전통 국이야.'),S('You can carry heavy things with it.','그것으로 무거운 물건을 나를 수 있어.'),
      S('Public art is not in a museum.','공공 미술은 박물관 안에 있지 않아.'),S("It's outside for everyone.",'그것은 모두를 위해 밖에 있어.'),
      S("Don't be afraid! It can't move.",'무서워하지 마! 그것은 움직이지 못해.'),S('Cloud Gate looks like a big bean.','클라우드 게이트는 큰 콩처럼 생겼어.'),S("It's a holiday in Mexico.",'그것은 멕시코의 휴일이야.')],
    qa:[['Do you know anything about gat?','It\'s a traditional Korean hat.'],['Do you know anything about hanok?','It\'s a traditional Korean house.'],
      ['Do you know anything about jige?','It\'s a traditional Korean carrier.'],['Do you know anything about pansori?','It\'s traditional Korean music.'],
      ['Do you know anything about minhwa?','It\'s a traditional Korean painting.'],['Do you know anything about yunnori?','It\'s a traditional Korean board game.'],
      ['Do you know anything about tteokguk?','It\'s a traditional Korean soup with rice cakes.'],['Do you know anything about Cinco de Mayo?','It\'s a holiday in Mexico.'],
      ['Do you know anything about public art?','It\'s outside for everyone.']],
    hints:["It's a traditional Korean ___.",'You can ___ with it.','You can see it in ___.','It looks like ___.']},
  jobs:{name:'Jobs & Dreams',ko:'장래 희망',e:'🧑‍🚀',
    words:[W('doctor','의사','🩺'),W('chef','요리사','👨‍🍳'),W('pilot','조종사','✈️'),W('singer','가수','🎤'),W('scientist','과학자','🔬'),
      W('police officer','경찰관','👮'),W('firefighter','소방관','🚒'),W('vet','수의사','🐶'),W('artist','화가','🎨'),W('writer','작가','✍️'),
      W('farmer','농부','🌾'),W('soccer player','축구 선수','⚽'),W('teacher','선생님','🧑‍🏫'),W('astronaut','우주 비행사','🧑‍🚀'),W('baker','제빵사','🥐'),W('game designer','게임 디자이너','🎮')],
    sents:[S('What do you want to be?','너는 무엇이 되고 싶니?'),S('I want to be a doctor.','나는 의사가 되고 싶어.'),S('I want to help sick people.','나는 아픈 사람들을 돕고 싶어.'),
      S('I like cooking, so I want to be a chef.','나는 요리를 좋아해서 요리사가 되고 싶어.'),S('She wants to be a pilot.','그녀는 조종사가 되고 싶어 해.'),S('What do you want to do in the future?','너는 미래에 무엇을 하고 싶니?'),S('I want to be a game designer.','나는 게임 디자이너가 되고 싶어.')],
    hints:['This person works in a ___.','This person can ___.','This person helps ___.','This person wears ___.']},
  places:{name:'Places & Directions',ko:'길 찾기',e:'🗺️',
    words:[W('library','도서관','📚'),W('hospital','병원','🏥'),W('bank','은행','🏦'),W('museum','박물관','🏛️'),W('post office','우체국','📮'),
      W('park','공원','🌳'),W('bakery','빵집','🥖'),W('police station','경찰서','🚓'),W('school','학교','🏫'),W('restaurant','식당','🍽️'),
      W('bookstore','서점','📖'),W('market','시장','🛒'),W('zoo','동물원','🦁'),W('hotel','호텔','🏨'),W('swimming pool','수영장','🏊')],
    sents:[S('Where is the library?','도서관은 어디에 있니?'),S('Go straight and turn left.','앞으로 쭉 가서 왼쪽으로 돌아.'),S('It is next to the bank.','그것은 은행 옆에 있어.'),
      S('It is between the park and the school.','그것은 공원과 학교 사이에 있어.'),S('Turn right at the corner.','모퉁이에서 오른쪽으로 돌아.'),S('How can I get to the museum?','박물관에 어떻게 가니?'),S('It is across from the hospital.','그것은 병원 맞은편에 있어.')],
    hints:['You can ___ there.','You can see ___ there.','It is big / small.','I go there on ___.']},
  health:{name:'Health',ko:'건강·아플 때',e:'🤒',
    words:[W('headache','두통','🤕'),W('cold','감기','🤧'),W('fever','열','🤒'),W('toothache','치통','🦷'),W('stomachache','배탈','🤢'),
      W('cough','기침','😷'),W('medicine','약','💊'),W('rest','휴식','🛌'),W('water','물','💧'),W('doctor','의사','🩺'),W('sleep','잠','😴'),W('vegetables','채소','🥦')],
    sents:[S("What's wrong?",'어디가 아프니?'),S('I have a headache.','나는 머리가 아파.'),S('You should take some medicine.','너는 약을 먹어야 해.'),
      S('You should get some rest.','너는 좀 쉬어야 해.'),S('I have a fever.','나는 열이 나.'),S('You should drink warm water.','따뜻한 물을 마셔야 해.'),S('You should go see a doctor.','병원에 가 봐야 해.')],
    hints:['It is good / bad for you.','You feel ___.','You need ___.','It is in your ___.']},
  past:{name:'Last Weekend',ko:'지난 주말·과거',e:'🏕️',
    words:[W('went camping','캠핑을 갔다','🏕️'),W('played soccer','축구를 했다','⚽'),W('watched a movie','영화를 봤다','🎬'),W('visited my grandma','할머니 댁에 갔다','👵'),
      W('read a book','책을 읽었다','📚'),W('cooked dinner','저녁을 요리했다','🍳'),W('went swimming','수영하러 갔다','🏊'),W('rode a bike','자전거를 탔다','🚲'),
      W('made a cake','케이크를 만들었다','🎂'),W('cleaned my room','방을 청소했다','🧹'),W('went shopping','쇼핑하러 갔다','🛍️'),W('took pictures','사진을 찍었다','📷')],
    sents:[S('What did you do yesterday?','너는 어제 무엇을 했니?'),S('I went camping with my family.','나는 가족과 캠핑을 갔어.'),S('I watched a movie last weekend.','나는 지난 주말에 영화를 봤어.'),
      S('Did you play soccer?','너는 축구를 했니?'),S('Yes, I did.','응, 했어.'),S('How was your weekend?','주말 어땠어?'),S('It was really fun.','정말 재미있었어.')],
    hints:['I did it at ___.','I did it with ___.','It was fun / boring.','I used a ___.']},
  compare:{name:'Comparing',ko:'비교하기',e:'🦒',
    words:[W('taller','더 키가 큰','🦒'),W('faster','더 빠른','🐆'),W('bigger','더 큰','🐘'),W('smaller','더 작은','🐭'),W('stronger','더 힘센','💪'),
      W('heavier','더 무거운','🏋️'),W('longer','더 긴','🐍'),W('older','나이가 더 많은','👴'),W('younger','더 어린','👶'),W('shorter','더 짧은/작은','📏'),W('slower','더 느린','🐢'),W('higher','더 높은','🏔️')],
    sents:[S('Who is taller?','누가 더 키가 크니?'),S('Mina is taller than Jiho.','미나가 지호보다 키가 더 커.'),S('The cheetah is faster than the lion.','치타가 사자보다 더 빨라.'),
      S('Which is bigger?','어느 것이 더 크니?'),S('The elephant is bigger than the dog.','코끼리가 개보다 더 커.'),S('My bag is heavier than yours.','내 가방이 네 것보다 더 무거워.'),S('The turtle is slower than the rabbit.','거북이가 토끼보다 더 느려.')],
    hints:['A ___ is ___er than a ___.','It is the opposite of ___.','Think of an animal: ___.']},
  feelings:{name:'Feelings & Why',ko:'감정과 이유',e:'😄',
    words:[W('happy','행복한','😄'),W('sad','슬픈','😢'),W('angry','화난','😠'),W('worried','걱정되는','😟'),W('excited','신이 난','🤩'),
      W('tired','피곤한','😫'),W('bored','지루한','🥱'),W('nervous','긴장한','😬'),W('proud','자랑스러운','😎'),W('surprised','놀란','😲'),W('sleepy','졸린','😴'),W('scared','무서운','😱')],
    sents:[S('Why are you happy?','너는 왜 행복하니?'),S('Because I got a present.','왜냐하면 선물을 받았거든.'),S('I am nervous because I have a test.','나는 시험이 있어서 긴장돼.'),
      S('Why are you sad?','너는 왜 슬프니?'),S('Because I lost my dog.','왜냐하면 강아지를 잃어버렸거든.'),S('I am excited because it is my birthday.','내 생일이라서 신이 나.'),S('You look tired today.','너 오늘 피곤해 보여.')],
    hints:['I feel this when ___.','My face looks ___.','It is a good / bad feeling.']},
  plans:{name:'Plans',ko:'계획 말하기',e:'⛄',
    words:[W('go hiking','등산 가다','⛰️'),W('visit Jeju','제주도에 가다','🏝️'),W('learn taekwondo','태권도를 배우다','🥋'),W('go to the beach','해변에 가다','🏖️'),
      W('make a snowman','눈사람을 만들다','⛄'),W('practice the piano','피아노를 연습하다','🎹'),W('go fishing','낚시하러 가다','🎣'),W('ride a roller coaster','롤러코스터를 타다','🎢'),
      W('plant a tree','나무를 심다','🌱'),W('bake cookies','쿠키를 굽다','🍪'),W('go skiing','스키 타러 가다','⛷️'),W('see a concert','콘서트를 보다','🎶')],
    sents:[S('What are you going to do this winter?','이번 겨울에 무엇을 할 거니?'),S('I am going to go hiking.','나는 등산을 갈 거야.'),S('I am going to visit Jeju.','나는 제주도에 갈 거야.'),
      S('What will you do this weekend?','이번 주말에 무엇을 할 거니?'),S('I will learn taekwondo.','나는 태권도를 배울 거야.'),S('That sounds fun!','그거 재미있겠다!'),S('I am going to bake cookies with my mom.','나는 엄마와 쿠키를 구울 거야.')],
    hints:['I need ___ for it.','I can do it in ___ (season).','I do it at / in ___.']},
};

function loadCustom(){
  try{const c=JSON.parse(localStorage.getItem('rb_custom')||'null'); if(c&&c.words&&c.words.length>=4) return c;}catch(e){}
  return null;
}
function encodeBank(b){return btoa(unescape(encodeURIComponent(JSON.stringify(b))))}
function decodeBank(s){return JSON.parse(decodeURIComponent(escape(atob(s))))}
// import from URL hash  #bank=...
try{
  const m=location.hash.match(/bank=([^&]+)/);
  if(m){const b=decodeBank(decodeURIComponent(m[1])); if(b&&b.words){localStorage.setItem('rb_custom',JSON.stringify(b)); setTimeout(()=>toast('⭐ 우리반 단어장을 불러왔어요!'),400);} }
}catch(e){}

function themeList(){
  const list=Object.entries(THEMES).map(([id,t])=>({id,...t}));
  const c=loadCustom();
  if(c) list.unshift({id:'custom',name:c.name||'Our Class',ko:'⭐ 우리반 단어장',e:'⭐',words:c.words,sents:c.sents||[],hints:['It is ___.','It has ___.','You can ___ with it.']});
  list.push({id:'l1112',name:'Lesson 11+12',ko:'11·12과 복습',e:'🌈'});list.push({id:'all',name:'Mix All',ko:'6학년 전체 섞기',e:'🎲'});
  return list;
}
function getTheme(id){
  if(id==='l1112'){const a=THEMES.l11,b=THEMES.l12;return {id,name:'Lesson 11+12',ko:'11·12과 복습',e:'🌈',words:[...a.words,...b.words],sents:[...a.sents,...b.sents],qa:[...a.qa,...b.qa],hints:[...a.hints.slice(0,2),...b.hints.slice(0,2)]}}
  if(id==='all'){
    const words=[],sents=[];
    Object.values(THEMES).forEach(t=>{words.push(...t.words);sents.push(...t.sents)});
    const seen=new Set();
    return {id:'all',name:'Mix All',ko:'전체 섞기',e:'🌈',words:words.filter(w=>!seen.has(w.en)&&seen.add(w.en)),sents,hints:['It is ___.','It has ___.','You can ___.']};
  }
  if(id==='custom'){const t=themeList().find(x=>x.id==='custom'); if(t) return t;}
  const t=THEMES[id]||THEMES.l11; return {id:id in THEMES?id:'l11',...t};
}
function themePicker(el,onPick,selected){
  const list=themeList();
  el.innerHTML='<div class="theme-grid">'+list.map(t=>`<button class="theme-btn ${t.id===selected?'on':''}" data-id="${t.id}"><span class="e">${t.e}</span><span class="en">${t.name}</span><small>${t.ko}</small></button>`).join('')+'</div>';
  el.querySelectorAll('.theme-btn').forEach(b=>b.onclick=()=>{
    el.querySelectorAll('.theme-btn').forEach(x=>x.classList.remove('on'));b.classList.add('on');sfx('click');
    try{localStorage.setItem('rb_lastTheme',b.dataset.id)}catch(e){}
    onPick&&onPick(b.dataset.id);
  });
}
function lastTheme(){try{const t=localStorage.getItem('rb_lastTheme'); if(t&&themeList().some(x=>x.id===t)) return t;}catch(e){} return 'l11'}

const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const sample=(a,n)=>shuffle(a).slice(0,n);
const pick=a=>a[Math.random()*a.length|0];
const fmtTime=s=>{s=Math.max(0,Math.round(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};

/* ---------- speech ---------- */
let voice=null;
function pickVoice(){
  if(!('speechSynthesis' in window)) return;
  const vs=speechSynthesis.getVoices().filter(v=>/^en[-_]/i.test(v.lang));
  voice=vs.find(v=>/US/i.test(v.lang)&&/Google|Samantha|Zira|Aria|Jenny/i.test(v.name))||vs.find(v=>/en[-_]US/i.test(v.lang))||vs[0]||null;
}
if('speechSynthesis' in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice;}
function speak(text,rate){
  if(!('speechSynthesis' in window)){toast('이 기기는 읽어주기를 지원하지 않아요');return}
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';if(voice)u.voice=voice;u.rate=rate||0.85;u.pitch=1.05;speechSynthesis.speak(u);}catch(e){}
}

/* ---------- sound effects (WebAudio, offline) ---------- */
let AC=null,muted=false;
try{muted=localStorage.getItem('rb_mute')==='1'}catch(e){}
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume();return AC}
function tone(f,t0,dur,type,vol,f2){const c=ac();if(!c)return;const o=c.createOscillator(),g=c.createGain();o.type=type||'sine';
  o.frequency.setValueAtTime(f,c.currentTime+t0);if(f2)o.frequency.exponentialRampToValueAtTime(f2,c.currentTime+t0+dur);
  g.gain.setValueAtTime(0.0001,c.currentTime+t0);g.gain.exponentialRampToValueAtTime(vol||0.2,c.currentTime+t0+0.01);
  g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+t0+dur);o.connect(g).connect(c.destination);o.start(c.currentTime+t0);o.stop(c.currentTime+t0+dur+0.05)}
function noise(t0,dur,vol){const c=ac();if(!c)return;const b=c.createBuffer(1,c.sampleRate*dur,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);
  const s=c.createBufferSource(),g=c.createGain();g.gain.value=vol||0.25;s.buffer=b;s.connect(g).connect(c.destination);s.start(c.currentTime+t0)}
function sfx(n){
  if(muted)return;
  switch(n){
    case 'click':tone(660,0,.06,'square',.06);break;
    case 'ok':tone(660,0,.1,'triangle',.25);tone(990,.09,.18,'triangle',.25);break;
    case 'bad':tone(220,0,.25,'sawtooth',.15,110);break;
    case 'hit':noise(0,.18,.35);tone(180,0,.15,'square',.15,60);break;
    case 'crit':noise(0,.25,.45);tone(900,0,.12,'square',.15,1800);tone(1400,.1,.2,'triangle',.2);break;
    case 'win':[523,659,784,1047].forEach((f,i)=>tone(f,i*.12,.25,'triangle',.25));tone(1319,.5,.5,'triangle',.25);break;
    case 'lose':[392,330,262,196].forEach((f,i)=>tone(f,i*.18,.3,'sawtooth',.12));break;
    case 'tick':tone(1200,0,.03,'square',.05);break;
    case 'pop':tone(400,0,.08,'sine',.25,900);break;
    case 'unlock':tone(300,0,.08,'square',.15);tone(600,.08,.08,'square',.15);tone(1200,.16,.3,'triangle',.25);break;
    case 'flip':tone(500,0,.05,'triangle',.12,800);break;
    case 'event':[784,659,784,1047].forEach((f,i)=>tone(f,i*.08,.15,'square',.12));break;
  }
}
function toggleMute(btn){muted=!muted;try{localStorage.setItem('rb_mute',muted?'1':'0')}catch(e){};if(btn)btn.textContent=muted?'🔇':'🔊'}

/* ---------- ui helpers ---------- */
function toast(msg){let t=document.getElementById('rb-toast');if(!t){t=document.createElement('div');t.id='rb-toast';document.body.appendChild(t)}
  t.textContent=msg;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),2200)}
function confetti(ms){
  let cv=document.getElementById('rb-confetti');if(!cv){cv=document.createElement('canvas');cv.id='rb-confetti';document.body.appendChild(cv)}
  const x=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;
  const cols=['#ffd23f','#ff5da2','#3ddcff','#2ee59d','#ff8a3d','#8b5cff','#fff'];
  const P=Array.from({length:160},()=>({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.6,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,r:5+Math.random()*7,c:pick(cols),a:Math.random()*6,va:(Math.random()-.5)*.3}));
  const end=Date.now()+(ms||2800);
  (function f(){x.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.05;p.a+=p.va;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});
    if(Date.now()<end)requestAnimationFrame(f);else x.clearRect(0,0,cv.width,cv.height)})();
}
function fullscreen(){const d=document.documentElement;if(!document.fullscreenElement){(d.requestFullscreen||d.webkitRequestFullscreen||function(){}).call(d)}else{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}
function topbar(title,sub){
  const el=document.createElement('div');el.className='topbar';
  el.innerHTML=`<a class="icon-btn" href="index.html" title="처음으로">🏠</a><div class="ttl">${title}${sub?`<small>${sub}</small>`:''}</div>
  <button class="icon-btn" id="rb-mute">${muted?'🔇':'🔊'}</button><button class="icon-btn" id="rb-fs" title="전체화면">⛶</button>`;
  el.querySelector('#rb-mute').onclick=e=>toggleMute(e.currentTarget);el.querySelector('#rb-fs').onclick=fullscreen;
  return el;
}
const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function board(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}}
function saveBoard(key,arr){try{localStorage.setItem(key,JSON.stringify(arr.slice(0,20)))}catch(e){}}
/* misspelling generator */
function misspell(w){
  const vowels='aeiou';const s=w.split('');const tries=[];
  for(let k=0;k<12&&tries.length<4;k++){const a=s.slice();const r=Math.random();
    const idx=[...a.keys()].filter(i=>/[a-z]/.test(a[i]));if(idx.length<3)break;const i=pick(idx.slice(1));
    if(r<.35&&i<a.length-1&&/[a-z]/.test(a[i+1])){[a[i],a[i+1]]=[a[i+1],a[i]]}
    else if(r<.7&&vowels.includes(a[i])){a[i]=pick(vowels.replace(a[i],'').split(''))}
    else if(r<.85){a.splice(i,0,a[i])}else{a.splice(i,1)}
    const t=a.join('');if(t!==w&&!tries.includes(t))tries.push(t)}
  return tries;
}
/* PWA: offline service worker (works on http/https hosting such as GitHub Pages) */
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)&&!/claudeusercontent|claude\.ai/.test(location.hostname)){
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
window.RB={THEMES,themeList,getTheme,themePicker,lastTheme,shuffle,sample,pick,fmtTime,speak,sfx,toast,confetti,topbar,fullscreen,$,esc,board,saveBoard,misspell,encodeBank,decodeBank,loadCustom,toggleMute};
})();
