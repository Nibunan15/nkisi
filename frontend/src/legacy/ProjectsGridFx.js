/* Converted verbatim from ui_kits/website/ProjectsGridFx.js — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
/* Projects grid — GSAP scroll reveals, column parallax, 3D hover tilt + spotlight, Flip on filter. */
(()=>{
const css=`#projects .pj-card{position:relative;overflow:hidden;transform-style:preserve-3d;will-change:transform;transition:border-color .3s}
#projects .pj-card:hover{border-color:rgba(68,224,226,.55)!important}
#projects .pj-glow{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .3s;background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(68,224,226,.16),transparent 70%)}
#projects .pj-card:hover .pj-glow{opacity:1}
#projects .pj-line{position:absolute;left:24px;right:24px;height:1px;background:#44E0E2;transform:scaleX(0);transform-origin:left;pointer-events:none}
#projects .pj-ttl .w{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.08em}#projects .pj-ttl .w>span{display:inline-block}
#projects .pj-grid{perspective:1400px}`;
let st;const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function split(root){root.querySelectorAll('.pj-ttl:not([data-s])').forEach(t=>{t.dataset.s=1;t.innerHTML=t.textContent.split(' ').map(w=>'<span class="w"><span>'+w+'</span></span>').join(' ')})}
function hover(c){if(c._h)return;c._h=1;const rx=gsap.quickTo(c,'rotationX',{duration:.5,ease:'power3'}),ry=gsap.quickTo(c,'rotationY',{duration:.5,ease:'power3'}),z=gsap.quickTo(c,'z',{duration:.5,ease:'power3'});
c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%');ry((x-.5)*12);rx(-(y-.5)*10);z(30)});
c.addEventListener('pointerleave',()=>{rx(0);ry(0);z(0)})}
function reveal(cards){const RMv=RM();cards.forEach(c=>{if(c._r)return;c._r=1;hover(c);const ttl=c.querySelectorAll('.pj-ttl .w>span'),num=c.querySelector('.pj-num'),bd=c.querySelector('.pj-bdg'),org=c.querySelector('.pj-org'),ln=c.querySelector('.pj-line');
if(RMv)return;const n=+num.dataset.n,o={v:0};
const tl=gsap.timeline({paused:true});tl.fromTo(c,{opacity:0,y:90,rotationX:-28,transformOrigin:'50% 0%'},{opacity:1,y:0,rotationX:0,duration:1,ease:'expo.out'})
.fromTo(ttl,{yPercent:110},{yPercent:0,duration:.8,stagger:.04,ease:'expo.out'},'<.15')
.to(o,{v:n,duration:.8,ease:'power2.out',onUpdate:()=>num.textContent=String(Math.round(o.v)).padStart(2,'0')},'<')
.fromTo(bd,{opacity:0,x:20},{opacity:1,x:0,duration:.6,ease:'expo.out'},'<.1')
.fromTo(ln,{scaleX:0},{scaleX:1,duration:.8,ease:'expo.inOut'},'<.1')
.fromTo(org,{opacity:0,y:12},{opacity:1,y:0,duration:.6,ease:'power3.out'},'<.3');
gsap.set(c,{opacity:0});c._tl=tl});
ScrollTrigger.batch(cards.filter(c=>c._tl&&!c._b).map(c=>(c._b=1,c)),{start:'top 88%',once:true,onEnter:b=>b.forEach((c,i)=>gsap.delayedCall(i*.09,()=>c._tl.play()))})}
function parallax(grid){if(RM())return;grid._px&&grid._px.forEach(t=>t.kill());const cards=[...grid.querySelectorAll('.pj-card')];if(innerWidth<900){grid._px=[];return}
const cols=Math.round(grid.clientWidth/cards[0].offsetWidth)||3;grid._px=cards.map((c,i)=>{const col=i%cols,amt=(col-(cols-1)/2)*-26;return gsap.fromTo(c.querySelector('.pj-in'),{y:-amt},{y:amt,ease:'none',scrollTrigger:{trigger:c,start:'top bottom',end:'bottom top',scrub:true}})})}
window.nkProjectsFx={
init(sec){if(!window.gsap||!sec)return;gsap.registerPlugin(ScrollTrigger);window.Flip&&gsap.registerPlugin(Flip);if(!document.getElementById('pj-css')){const s=document.createElement('style');s.id='pj-css';s.textContent=css;document.head.appendChild(s)}
const head=sec.querySelector('.pj-head'),grid=sec.querySelector('.pj-grid');split(sec);
if(!RM())gsap.fromTo(head.children,{opacity:0,y:30},{opacity:1,y:0,duration:.9,stagger:.12,ease:'expo.out',scrollTrigger:{trigger:head,start:'top 90%'}});
reveal([...sec.querySelectorAll('.pj-card')]);parallax(grid);let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>parallax(grid),250)})},
capture(sec){if(!window.Flip||!sec)return;st=Flip.getState(sec.querySelectorAll('.pj-card'));sec.querySelectorAll('.pj-card').forEach(c=>{c._tl&&c._tl.progress(1)})},
play(sec){if(!sec)return;const cards=[...sec.querySelectorAll('.pj-card')];split(sec);cards.forEach(c=>{if(!c._r){c._r=1;hover(c)}gsap.set(c,{opacity:1})});
if(window.Flip&&st&&!RM()){Flip.from(st,{targets:cards,duration:.7,ease:'power3.inOut',stagger:.02,absolute:true,onEnter:els=>gsap.fromTo(els,{opacity:0,scale:.85,rotationX:-20},{opacity:1,scale:1,rotationX:0,duration:.6,ease:'expo.out',stagger:.03}),onComplete:()=>{parallax(sec.querySelector('.pj-grid'));ScrollTrigger.refresh()}})}else{parallax(sec.querySelector('.pj-grid'));ScrollTrigger.refresh()}st=null}};
})();
