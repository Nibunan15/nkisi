/* Converted verbatim from ui_kits/website/FounderBirdReveal.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
/* Founder bird → portrait reveal. Asset spec: assets/founder-bird/african-grey-flight.webm (VP9 + alpha) and/or .mov (HEVC + alpha, Safari).
   Clip: bird filmed in place, facing right, ~3.5s — flapping flight (0–2.5s) then landing + wing fold (2.5–3.5s), holds last frame. */
const BASE=()=>window.NK_ASSET_BASE||'../../';
const SRC=[['assets/founder-bird/african-grey-flight.webm','video/webm; codecs="vp9"'],['assets/founder-bird/african-grey-flight.mov','video/mp4; codecs="hvc1"'],['assets/founder-bird/african-grey.mp4','video/mp4',true]];
const TINT=true;
/* Turns a video frame into a keyed (green-screen removed) and N'kisi-teal-tinted canvas */
function makeVideoBird(v,key){const W0=v.videoWidth,H0=v.videoHeight,sc=Math.min(1,520/W0);const w=Math.round(W0*sc),h=Math.round(H0*sc);const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d',{willReadFrequently:true});
const ramp=[[8,50,56],[16,101,112],[29,177,186],[105,231,231],[234,252,252]];const tint=l=>{const x=l*4,i=Math.min(3,Math.floor(x)),f=x-i,a=ramp[i],b=ramp[i+1];return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f,a[2]+(b[2]-a[2])*f]};
const update=()=>{g.clearRect(0,0,w,h);g.drawImage(v,0,0,w,h);if(!key&&!TINT)return;let d;try{d=g.getImageData(0,0,w,h)}catch(e){return}const px=d.data;for(let i=0;i<px.length;i+=4){let r=px[i],gg=px[i+1],b=px[i+2],a=px[i+3];if(key){const m=gg-Math.max(r,b);if(m>40){px[i+3]=0;continue}if(m>12){a=a*(1-(m-12)/28);gg=Math.max(r,b)}}if(TINT){const l=(r*.3+gg*.55+b*.15)/255;const red=r>gg*1.5&&r>b*1.5&&r>110;const t=tint(red?Math.min(1,l+.45):l);r=t[0];gg=t[1];b=t[2]}px[i]=r;px[i+1]=gg;px[i+2]=b;px[i+3]=a}g.putImageData(d,0,0)};
update();return {kind:'video',el:c,w,h,video:v,update}}
const STAND_IN='assets/nkisi-mark.png';
const T={fly:2500,land:3500,hi:3700,meet:5200,pause:7000,dis:8400,pIn:8100,pOut:9200,glowOut:10400};
const KEY='nk-founder-reveal-done';
const nextF=(cb)=>{let done=false;const id=requestAnimationFrame(n=>{if(done)return;done=true;clearTimeout(to);cb(n)});const to=setTimeout(()=>{if(done)return;done=true;cancelAnimationFrame(id);cb(performance.now())},50);return ()=>{done=true;cancelAnimationFrame(id);clearTimeout(to)}};
const cl=x=>Math.max(0,Math.min(1,x)),lerp=(a,b,u)=>a+(b-a)*u,easeOut=x=>1-Math.pow(1-x,3);


/* Procedural African Grey — drawn every frame on an offscreen canvas with genuinely flapping, splaying and folding wings. Used when no video clip is present. */
const PW=420,PH=420;
function featherScallops(c,cx,cy,rx,ry,rows,alpha){c.save();c.beginPath();c.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);c.clip();c.strokeStyle='rgba(255,255,255,'+alpha+')';c.lineWidth=1.1;const st=9;for(let r=0;r<rows;r++){const y=cy-ry+r*st+4;for(let x=cx-rx+(r%2?st/2:0);x<cx+rx;x+=st){c.beginPath();c.arc(x,y,st*.55,Math.PI*.15,Math.PI*.85);c.stroke()}}c.restore()}
function drawWing(c,ang,splay,fold,far){c.save();c.translate(far?20:8,far?-26:-16);c.rotate(ang*Math.PI/180);
const dk=far?.62:1;const col=(r,g,b)=>'rgb('+Math.round(r*dk)+','+Math.round(g*dk)+','+Math.round(b*dk)+')';
const sd=(55-47*fold)*Math.PI/180;
for(let j=5;j>=0;j--){c.save();c.translate(-8-j*11,8);c.rotate(-Math.PI+sd+j*.03);c.beginPath();c.moveTo(0,-5);c.quadraticCurveTo(22,-6,36,0);c.quadraticCurveTo(22,6,0,5);c.closePath();c.fillStyle=col(16,101,112);c.fill();c.strokeStyle=col(29,177,186);c.lineWidth=.8;c.stroke();c.restore()}
for(let i=6;i>=0;i--){const sp=(i-3)*splay*8.5+(1-fold)*6;c.save();c.translate(-58-i*4,2+i*.8);c.rotate(Math.PI-sp*Math.PI/180);const L=(68+i*7)*(0.86+0.14*(1-fold));c.beginPath();c.moveTo(0,-6);c.quadraticCurveTo(L*.55,-8,L,-.5);c.quadraticCurveTo(L*.55,7,0,6);c.closePath();const g=c.createLinearGradient(0,0,L,0);g.addColorStop(0,col(21,130,141));g.addColorStop(1,col(12,74,82));c.fillStyle=g;c.fill();c.strokeStyle=col(29,177,186);c.lineWidth=.7;c.stroke();c.beginPath();c.moveTo(2,0);c.lineTo(L*.92,-.3);c.strokeStyle=col(105,231,231);c.lineWidth=.5;c.stroke();c.restore()}
c.beginPath();c.moveTo(6,-14);c.quadraticCurveTo(-48,-28,-100,-9);c.lineTo(-96,14);c.quadraticCurveTo(-46,26,6,17);c.closePath();const g=c.createLinearGradient(0,-15,0,15);g.addColorStop(0,col(68,224,226));g.addColorStop(1,col(29,177,186));c.fillStyle=g;c.fill();
c.save();c.clip();c.strokeStyle='rgba(255,255,255,'+(far?.08:.16)+')';c.lineWidth=1;for(let r=0;r<3;r++)for(let x=-92+(r%2?5:0);x<4;x+=10){c.beginPath();c.arc(x,-12+r*9,6,Math.PI*.15,Math.PI*.85);c.stroke()}c.restore();c.restore()}
function drawParrot(c,st){c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,PW,PH);c.save();c.translate(210,262+st.bob);c.rotate(st.pitch*Math.PI/180);
drawWing(c,st.farAng,st.splay,st.fold,true);
c.beginPath();c.moveTo(-46,-2);c.lineTo(-92,6+st.tail);c.quadraticCurveTo(-100,22+st.tail,-94,38+st.tail);c.lineTo(-44,24);c.closePath();const tg=c.createLinearGradient(-50,0,-104,0);tg.addColorStop(0,'#69E7E7');tg.addColorStop(1,'#BAF4F4');c.fillStyle=tg;c.fill();c.strokeStyle='rgba(16,101,112,.45)';c.lineWidth=.7;for(let k=1;k<5;k++){c.beginPath();c.moveTo(-48,2+k*4.6);c.lineTo(-95,6+k*7.5+st.tail);c.stroke()}
if(st.legs>.02){c.strokeStyle='#2A3B3E';c.lineCap='round';c.lineWidth=5;const L=16*st.legs;[[2,0],[16,2]].forEach(([x,o])=>{c.beginPath();c.moveTo(x,32);c.lineTo(x+o,32+L);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(x+o-7,34+L);c.lineTo(x+o+8,34+L);c.stroke();c.lineWidth=5})}
c.save();c.rotate(-12*Math.PI/180);const bg=c.createLinearGradient(0,-38,0,38);bg.addColorStop(0,'#15828D');bg.addColorStop(.6,'#1DB1BA');bg.addColorStop(1,'#44E0E2');c.beginPath();c.ellipse(0,0,56,39,0,0,Math.PI*2);c.fillStyle=bg;c.fill();featherScallops(c,0,0,56,39,9,.15);c.restore();
c.save();c.translate(40,-18);c.rotate(st.head*Math.PI/180);c.translate(-40,18);
c.beginPath();c.ellipse(42,-22,26,24,-.5,0,Math.PI*2);c.fillStyle='#1DB1BA';c.fill();
const hg=c.createRadialGradient(56,-44,4,58,-38,34);hg.addColorStop(0,'#69E7E7');hg.addColorStop(1,'#1DB1BA');c.beginPath();c.arc(58,-38,32,0,Math.PI*2);c.fillStyle=hg;c.fill();featherScallops(c,58,-38,32,32,7,.18);
c.beginPath();c.ellipse(72,-42,17,12.5,-.15,0,Math.PI*2);c.fillStyle='#EAFCFC';c.fill();
c.beginPath();c.arc(73,-43,5.6,0,Math.PI*2);c.fillStyle='#BAF4F4';c.fill();c.beginPath();c.arc(73.8,-43,2.8,0,Math.PI*2);c.fillStyle='#0C1618';c.fill();c.beginPath();c.arc(75,-44.4,1.1,0,Math.PI*2);c.fillStyle='#fff';c.fill();
c.beginPath();c.moveTo(84,-54);c.bezierCurveTo(106,-56,114,-34,104,-14);c.lineTo(99,-19);c.bezierCurveTo(101,-30,94,-38,84,-34);c.closePath();const bk=c.createLinearGradient(84,-56,104,-14);bk.addColorStop(0,'#1C2B2E');bk.addColorStop(1,'#0C1618');c.fillStyle=bk;c.fill();c.beginPath();c.moveTo(87,-53);c.bezierCurveTo(99,-54,106,-46,107,-36);c.strokeStyle='rgba(255,255,255,.28)';c.lineWidth=1.2;c.stroke();
c.beginPath();c.moveTo(85,-32);c.quadraticCurveTo(96,-28,92,-17);c.lineTo(84,-24);c.closePath();c.fillStyle='#132022';c.fill();
c.restore();
drawWing(c,st.nearAng,st.splay,st.fold,false);
c.restore()}
function makeProcBird(){const cv=document.createElement('canvas');cv.width=PW;cv.height=PH;const c=cv.getContext('2d');let ph=0,lt=0;
const st={nearAng:60,farAng:66,splay:.6,fold:0,legs:0,pitch:-6,bob:0,head:0,tail:0};
return {kind:'proc',el:cv,w:PW,h:PH,update(t){const dt=Math.min(50,t-lt);lt=t;
if(t<T.fly){const u=t/T.fly;ph+=dt/1000*2*Math.PI*(5.2-1.6*u);const sn=Math.sin(ph);st.nearAng=44+50*sn;st.farAng=50+46*Math.sin(ph-.35);st.splay=.35+.65*Math.max(0,-Math.cos(ph));st.fold=0;st.legs=0;st.pitch=-7+3*sn-4*u;st.bob=-4*sn;st.head=0;st.tail=3*Math.sin(ph+1)}
else if(t<T.land){const u=(t-T.fly)/(T.land-T.fly);
if(u<.45){ph+=dt/1000*2*Math.PI*3.4;const sn=Math.sin(ph);st.nearAng=48+58*sn;st.farAng=54+52*Math.sin(ph-.35);st.splay=.6+.4*Math.max(0,-Math.cos(ph));st.pitch=-14-6*u/.45;st.bob=-3*sn;st.fold=0}
else{const f=easeOut((u-.45)/.55);st.fold=f;st.nearAng=lerp(st.nearAng,-6,Math.min(1,dt*.012+f*.08));st.farAng=lerp(st.farAng,-2,Math.min(1,dt*.012+f*.08));st.splay=lerp(st.splay,0,Math.min(1,dt*.01));st.pitch=lerp(-20,0,f);st.bob=0}
st.legs=cl(u/.4);st.tail=lerp(st.tail,0,.1)}
else{const u=cl((t-T.land)/(T.pause-T.land));const wv=t>T.hi&&t<T.meet?Math.sin(cl((t-T.hi)/(T.meet-T.hi))*Math.PI):0;st.fold=1-wv*.6;st.nearAng=-6+wv*(80+18*Math.sin(t/120));st.farAng=-2;st.splay=wv*.6;st.legs=1;st.pitch=0;st.bob=0;st.head=Math.sin(u*Math.PI*3)*7*(1-u*.4);st.tail=Math.sin(u*Math.PI*2)*1.5}
drawParrot(c,st)}};}

/* Photo-real sprite bird from the user's turnaround sheet. Flight: the wing is cut from the side render and flapped around the shoulder; then it lands and turns to face the visitor. */
const SPR={W:460,H:560,ox:92,oy:150,piv:[182,150],wing:[[192,138],[206,176],[202,232],[178,266],[132,292],[90,316],[40,342],[6,352],[22,300],[56,222],[92,166],[138,136]]};
function loadSpriteBird(){const names=[['90',0],['60',1],['30',1],['0',0]];return Promise.all(names.map(([a])=>new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src=BASE()+'assets/founder-bird/parrot-'+a+'.png'}))).then(imgs=>{
const {W,H,ox,oy,piv}=SPR;const c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');
const wc=document.createElement('canvas');wc.width=276;wc.height=410;const wg=wc.getContext('2d');wg.beginPath();SPR.wing.forEach(([x,y],i)=>i?wg.lineTo(x,y):wg.moveTo(x,y));wg.closePath();wg.save();wg.clip();wg.drawImage(imgs[0],0,0);wg.restore();
const fc=document.createElement('canvas');fc.width=276;fc.height=410;const fg=fc.getContext('2d');fg.drawImage(wc,0,0);fg.globalCompositeOperation='source-atop';fg.fillStyle='rgba(8,24,40,.45)';fg.fillRect(0,0,276,410);
const draw=(k,a)=>{if(a<=0)return;g.save();g.globalAlpha=a;g.translate(ox,oy);if(names[k][1]){g.translate(276,0);g.scale(-1,1)}g.drawImage(imgs[k],0,0);g.restore()};
const wing=(img,ang,len,spread,al)=>{for(let j=spread?2:0;j>=0;j--){g.save();g.globalAlpha=al*(j?.55:1);g.translate(ox+piv[0],oy+piv[1]);g.rotate((ang+j*spread)*Math.PI/180);g.scale(len,1);g.drawImage(img,-piv[0],-piv[1]);g.restore()}};
const t0=T.land+150,step=230;let ph=0,lt=0;
return {kind:'sprite',el:c,w:W,h:H,update(t){const dt=Math.min(50,t-lt);lt=t;g.clearRect(0,0,W,H);
let ang=0,lift=0,flying=false;
if(t<T.fly){flying=true;const u=t/T.fly;ph+=dt/1000*2*Math.PI*(4.2-1.2*u);const sn=Math.sin(ph);ang=48+58*sn;lift=(sn+1)/2}
else if(t<T.land){const u=(t-T.fly)/(T.land-T.fly);if(u<.5){flying=true;ph+=dt/1000*2*Math.PI*3;const sn=Math.sin(ph);ang=(60+62*sn)*(1-u*.6);lift=(sn+1)/2}else{flying=true;const f=(u-.5)/.5;ang=Math.max(0,(ang||40)*(1-f));ang=40*(1-f)*(1-f);lift=0}}
if(flying&&ang>1){wing(fc,ang*.92-6,1.05+.1*lift,0,1);draw(0,1);wing(wc,ang,1.08+.12*lift,7*lift,1);return}
if(t<t0){draw(0,1);return}const f=(t-t0)/step;if(f>=3){draw(3,1);return}const k=Math.floor(f),u=f-k;const e=u<.5?0:(u-.5)*2;draw(k,1-e);draw(k+1,e)}}}).catch(()=>null)}
function loadBird(){return new Promise(res=>{
const addS=src=>new Promise(ok=>{const e=document.createElement('script');e.src=src;e.onload=()=>ok(true);e.onerror=()=>ok(false);document.head.appendChild(e)});
const fallback=async()=>{try{const to=new Promise(ok=>setTimeout(()=>ok(false),5000));if(!window.THREE)await Promise.race([addS('https://unpkg.com/three@0.149.0/build/three.min.js'),to]);if(window.THREE&&!window.NkBird3D)await Promise.race([addS('/legacy/FounderBird3D.js?v=9'),to]);if(window.THREE&&window.NkBird3D){const b=window.NkBird3D(window.THREE,{T});b.update(0);return res(b)}}catch(e){console.warn('3D bird unavailable',e)}const b=makeProcBird();b.update(0);res(b)};
const v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='auto';
const cands=SRC.filter(([,t])=>v.canPlayType(t));const fb0=fallback;const fallbackS=()=>fb0();if(!cands.length)return fallbackS();let ci=0;const tryNext=()=>{if(ci>=cands.length)return fallbackS();const pick=cands[ci++];
let done=false;const end=ok=>{if(done)return;done=true;clearTimeout(to);if(ok)res(makeVideoBird(v,!!pick[2]));else{v.removeAttribute('src');tryNext()}};
const to=setTimeout(()=>end(false),1500);
v.addEventListener('loadeddata',()=>end(true),{once:true});v.addEventListener('error',()=>end(false),{once:true});
v.src=BASE()+pick[0];};tryNext();});}

function useFounderReveal(secRef,tgtRef,opts){const always=opts&&opts.always;
const cvRef=React.useRef(),portRef=React.useRef(),glowRef=React.useRef();
const [standIn,setStandIn]=React.useState(false);
const [state,setState]=React.useState(()=>{if(always)return 'idle';try{return sessionStorage.getItem(KEY)&&!location.hash.includes('replay-founder')?'done':'idle'}catch(e){return 'idle'}});
React.useEffect(()=>{if(state==='done')return;const sec=secRef.current;if(!sec)return;
let raf=0,dead=false,io=null,started=false;const birdP=loadBird();
const setP=(o,s)=>{const el=portRef.current;if(el){el.style.opacity=o;el.style.transform=`scale(${s})`}};
const setG=o=>{if(glowRef.current)glowRef.current.style.opacity=o};
const finish=()=>{if(!always){try{sessionStorage.setItem(KEY,'1')}catch(e){}}if(!dead)setState('done')};
const revealOnly=()=>{const el=portRef.current;if(el){el.style.transition='opacity .9s ease-out, transform .9s ease-out';requestAnimationFrame(()=>setP(1,1))}setTimeout(finish,950)};
const run=async()=>{
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return revealOnly();
setState('running');const bird=await birdP;if(dead)return;if(!bird)return revealOnly();
setStandIn(false);
if(bird.kind==='video'){try{bird.video.currentTime=0;bird.video.play().catch(()=>{})}catch(e){}}
await new Promise(r=>nextF(r));const cv=cvRef.current;if(!cv||dead)return revealOnly();
const ctx=cv.getContext('2d');const dpr=Math.min(2,window.devicePixelRatio||1);const tmp=document.createElement('canvas');const tctx=tmp.getContext('2d');
let parts=null,snapW=0,snapH=0,maxD=1;const t0=performance.now();const st0={h:[]};
const frame=now=>{if(dead)return;try{const t=now-t0;
const sr=sec.getBoundingClientRect(),tr=tgtRef.current.getBoundingClientRect();const W=sr.width,H=sr.height;
if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr)}
ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
const tx=tr.left-sr.left+tr.width/2;let ty=tr.top-sr.top+tr.height*(bird.kind==='proc'?.42:bird.kind==='3d'?.46:.52);
if(bird.update&&t<T.pause+20)bird.update(t);
const bw=bird.kind==='sprite'?Math.min(tr.width*.92,330)*460/276:bird.kind==='3d'?Math.min(tr.width*1.25,460):bird.kind==='proc'?Math.min(tr.width*1.0,360):Math.min(tr.width*.66,280),bh=bw*bird.h/bird.w;
if(bird.kind==='sprite')ty=tr.top-sr.top+tr.height*.47-bh*(75/560);let x=tx,y=ty,rot=0,sc=1,sy=1;
if(t<T.fly){const u=easeOut(t/T.fly);const sx=-bw,sy=Math.max(bh*.6,ty-H*.3),cx=lerp(sx,tx,.45),cy=sy-Math.min(140,H*.14);
x=(1-u)*(1-u)*sx+2*(1-u)*u*cx+u*u*tx;y=(1-u)*(1-u)*sy+2*(1-u)*u*cy+u*u*ty;
const k=1-u;rot=-10*k+Math.sin(t/170)*2.5*k;y+=Math.sin(t/240)*7*k;sc=lerp(.78,1,u);}
else if(t<T.land){const u=(t-T.fly)/(T.land-T.fly);if(bird.kind==='sprite')sy=1-.06*Math.exp(-5*u)*Math.cos(u*Math.PI*3);y=ty+9*Math.exp(-4.5*u)*Math.sin(u*Math.PI*2.5);rot=3*Math.exp(-5*u)*Math.sin(u*Math.PI*3);}
else if(t<T.pause){const u=(t-T.land)/(T.pause-T.land);rot=bird.kind==='sprite'?0:Math.sin(u*Math.PI*2)*1.6;if(bird.kind==='sprite'){sy=1+Math.sin(t/420)*.006;if(t>T.meet&&t<T.meet+500){const k=(t-T.meet)/500;y=ty-6*Math.sin(k*Math.PI)}}}
const drawBird=c=>{if(bird.kind==='sprite'&&t<T.fly){const hist=st0.h;for(let k=hist.length-1;k>=0;k--){const [hx,hy]=hist[k];c.save();c.globalAlpha=.1*(1-k/hist.length);c.translate(hx,hy);c.rotate(rot*Math.PI/180);c.scale(sc,sc);c.drawImage(bird.el,-bw/2,-bh/2,bw,bh);c.restore()}}c.save();c.translate(x,y+bh/2*(1-sy));c.rotate(rot*Math.PI/180);c.scale(sc,sc*sy);c.drawImage(bird.el,-bw/2,-bh/2,bw,bh);c.restore()};
if(bird.kind==='sprite'){st0.h.unshift([x,y]);if(st0.h.length>6)st0.h.pop();if(t>=T.fly)st0.h.length=0}
if(t>=T.fly-300&&t<T.dis){const a=cl((t-T.fly+300)/600)*(t<T.pause?1:cl(1-(t-T.pause)/(T.dis-T.pause)));ctx.save();ctx.globalAlpha=a*.5;ctx.fillStyle='rgba(0,0,0,1)';ctx.filter='blur(8px)';ctx.beginPath();ctx.ellipse(tx,ty+bh*(bird.kind==='proc'?.24:bird.kind==='3d'?.2:bird.kind==='sprite'?.4375:.5),bw*.22,6,0,0,Math.PI*2);ctx.fill();ctx.restore()}
if(t<T.pause){drawBird(ctx);
const say=(txt,a0,a1)=>{if(t<a0||t>a1)return;const fi=cl((t-a0)/220),fo=cl((a1-t)/220),al=Math.min(fi,fo);if(al<=0)return;const fs=Math.max(15,Math.min(22,bw*.06));ctx.save();ctx.font='700 '+fs+'px '+(getComputedStyle(document.documentElement).getPropertyValue('--font-sans')||'sans-serif');const tw=ctx.measureText(txt).width,pw=fs*.9,bh2=fs*2.1,w2=tw+pw*2;const tR=tr.right-sr.left;let bx=bird.kind==='sprite'?x-w2*.35:x+bw*.18,by=y-bh*(bird.kind==='sprite'?.17:.42)-bh2-fs*.8;bx=Math.max(12,Math.min(bx,tR-w2+fs,W-w2-12));by=Math.max(12,by);const sc2=.85+.15*easeOut(fi);ctx.globalAlpha=al;ctx.translate(bx,by+bh2);ctx.scale(sc2,sc2);ctx.translate(-bx,-(by+bh2));ctx.shadowColor='rgba(68,224,226,.45)';ctx.shadowBlur=22;ctx.fillStyle='#44E0E2';ctx.beginPath();if(ctx.roundRect)ctx.roundRect(bx,by,w2,bh2,4);else ctx.rect(bx,by,w2,bh2);ctx.fill();ctx.shadowBlur=0;ctx.beginPath();{const tx2=Math.max(bx+fs*.6,Math.min(x-fs*.5,bx+w2-fs*1.6));ctx.moveTo(tx2,by+bh2-1);ctx.lineTo(tx2+fs*.3,by+bh2+fs*.75);ctx.lineTo(tx2+fs*1.1,by+bh2-1);}ctx.closePath();ctx.fill();ctx.fillStyle='#04191A';ctx.textBaseline='middle';ctx.fillText(txt,bx+pw,by+bh2/2+1);ctx.restore()};
say('Hi!',T.hi,T.meet-260);say('Meet our founder →',T.meet,T.pause-120)}
else if(t<T.dis+400){
if(!parts){snapW=Math.round(bw*dpr);snapH=Math.round(bh*dpr);tmp.width=snapW;tmp.height=snapH;tctx.drawImage(bird.el,0,0,snapW,snapH);
let data=null;try{data=tctx.getImageData(0,0,snapW,snapH).data}catch(e){}
const step=Math.max(2,Math.round(bw/95));maxD=Math.hypot(bw/2,bh);parts=[];
if(data)for(let py=0;py<bh;py+=step)for(let px=0;px<bw;px+=step){const i=(Math.floor(py*dpr)*snapW+Math.floor(px*dpr))*4;const al=data[i+3];if(al<40)continue;
const ox=px-bw/2,oy=py-bh/2;const d=cl((bird.kind==='sprite'?Math.hypot(ox,oy-bh*.4):Math.hypot(ox+bw*.2,oy-bh*.16))/maxD+(Math.random()-.5)*.12);const len=Math.hypot(ox,oy)||1;const sp=.012+Math.random()*.03;
parts.push({ox,oy,d,r:data[i],g:data[i+1],b:data[i+2],a:al/255,vx:ox/len*sp+(Math.random()-.5)*.012,vy:oy/len*sp-.018-Math.random()*.012,s:step*.8,life:650+Math.random()*450,ph:Math.random()*6.28,glint:Math.random()<.14})}}
const dur=T.dis-T.pause,p=(t-T.pause)/dur,front=p*1.25;
if(front<1.05){tctx.setTransform(1,0,0,1,0,0);tctx.clearRect(0,0,snapW,snapH);tctx.globalCompositeOperation='source-over';tctx.drawImage(bird.el,0,0,snapW,snapH);
const R=front*maxD*dpr,soft=14*dpr,gx=snapW*(bird.kind==='3d'?.36:bird.kind==='sprite'?.5:.3),gy=snapH*(bird.kind==='3d'?.55:bird.kind==='sprite'?.94:.66);const g=tctx.createRadialGradient(gx,gy,0,gx,gy,R+soft);g.addColorStop(0,'rgba(0,0,0,1)');g.addColorStop(cl((R-soft)/(R+soft)),'rgba(0,0,0,1)');g.addColorStop(1,'rgba(0,0,0,0)');
tctx.globalCompositeOperation='destination-out';tctx.fillStyle=g;tctx.fillRect(0,0,snapW,snapH);tctx.globalCompositeOperation='source-over';
ctx.drawImage(tmp,x-bw/2,y-bh/2,bw,bh)}
const cap=cl((T.dis+400-t)/400);
for(const q of parts){const rel=t-(T.pause+q.d/1.25*dur);if(rel<0)continue;const k=rel/q.life;if(k>=1)continue;
const px=x+q.ox+q.vx*rel+Math.sin(rel/260+q.ph)*3,py=y+q.oy+q.vy*rel;const fa=q.a*(1-k)*(1-k)*cap;if(fa<.02)continue;
const m=cl(k*1.4)*.55;ctx.globalAlpha=fa;ctx.fillStyle=`rgb(${Math.round(lerp(q.r,190,m))},${Math.round(lerp(q.g,246,m))},${Math.round(lerp(q.b,247,m))})`;const s=q.s*(1-k*.4);ctx.fillRect(px-s/2,py-s/2,s,s);
if(q.glint){ctx.globalCompositeOperation='lighter';ctx.globalAlpha=fa*.35;ctx.fillStyle='#9FF4F5';ctx.fillRect(px-s,py-s,s*2,s*2);ctx.globalCompositeOperation='source-over'}}
ctx.globalAlpha=1;}
if(t>=T.pIn){const u=easeOut(cl((t-T.pIn)/(T.pOut-T.pIn)));setP(u,lerp(.94,1,u));setG(t<T.pIn+500?cl((t-T.pIn)/500):cl(1-(t-T.pIn-500)/(T.glowOut-T.pIn-500)))}
if(t>=T.glowOut){setP(1,1);setG(0);ctx.clearRect(0,0,W,H);parts=null;if(bird.kind==='video')bird.video.pause();return finish()}
raf=nextF(frame)}catch(e){console.warn('founder reveal:',e);setP(1,1);setG(0);finish()}};
raf=nextF(frame)};
const ok=e=>e.isIntersecting&&(e.intersectionRatio>=.3||e.intersectionRect.height>=Math.min(window.innerHeight*.35,e.boundingClientRect.height*.3));
const go=()=>{if(started)return;started=true;if(io){io.disconnect();io=null}window.removeEventListener('scroll',chk,true);window.removeEventListener('resize',chk);run()};
const chk=()=>{const r=sec.getBoundingClientRect();const vis=Math.min(r.bottom,window.innerHeight)-Math.max(r.top,0);if(vis>0&&(vis>=r.height*.3||vis>=window.innerHeight*.35))go()};
io=new IntersectionObserver(es=>{if(es.some(ok))go()},{threshold:[0,.05,.1,.15,.2,.25,.3,.4,.5,.75,1]});io.observe(sec);window.addEventListener('scroll',chk,{passive:true,capture:true});window.addEventListener('resize',chk);setTimeout(chk,200);
return()=>{dead=true;if(typeof raf==='function')raf();if(io)io.disconnect();window.removeEventListener('scroll',chk,true);window.removeEventListener('resize',chk)}},[]);
return {cvRef,portRef,glowRef,state,standIn};}
window.useFounderReveal=useFounderReveal;window.NkProcBird=makeProcBird;window.NkSpriteBird=loadSpriteBird;window.NK_BIRD_T=T;
})();
