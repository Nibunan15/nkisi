/* Converted verbatim from ui_kits/website/ServicesScroll.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
/* Services page — full GSAP scroll experience: pinned hero scrub, horizontal pinned service track, reveal-on-scroll for the rest. */
(()=>{
const SS_CSS=`
.ss-prog{position:fixed;left:0;top:0;height:3px;width:100%;background:#44E0E2;transform-origin:left;transform:scaleX(0);z-index:60;box-shadow:0 0 12px rgba(68,224,226,.6)}
.ss-hero{position:relative;height:auto;min-height:min(640px,calc(100vh - 64px));overflow:hidden;background:var(--ink-950);border-bottom:1px solid var(--border-1)}
.ss-grid{position:absolute;inset:-20%;background-image:linear-gradient(rgba(68,224,226,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(68,224,226,.07) 1px,transparent 1px);background-size:64px 64px;pointer-events:none}
.ss-hglow{position:absolute;right:-10%;top:10%;width:70vw;height:70vw;max-width:900px;max-height:900px;border-radius:50%;background:radial-gradient(closest-side,rgba(68,224,226,.16),transparent 70%);pointer-events:none}
.ss-mark{position:absolute;right:var(--gutter);top:50%;width:min(32vw,380px);margin-top:calc(min(32vw,380px) * -.55);pointer-events:none;filter:drop-shadow(0 0 40px rgba(68,224,226,.25))}
.ss-hin{position:relative;min-height:inherit;padding-top:56px!important;padding-bottom:104px!important;max-width:1280px;margin:0 auto;padding:0 var(--gutter);display:flex;flex-direction:column;justify-content:center;gap:22px;box-sizing:border-box}
.ss-crumb{display:flex;gap:8px;align-items:center;font:var(--text-label);color:var(--fg-3)}.ss-crumb a{color:var(--fg-3);text-decoration:none}
.ss-eb{font:var(--text-eyebrow);letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--fg-accent);max-width:560px}
.ss-h1{margin:0;font:var(--text-display);font-size:clamp(56px,10vw,148px);line-height:.92;letter-spacing:var(--ls-display);color:var(--fg-1)}
.ss-wd{display:inline-block;white-space:nowrap}.ss-ch{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.04em}.ss-ch>span{display:inline-block}
.ss-chips{display:flex;gap:8px;flex-wrap:wrap;max-width:820px;margin-top:10px}
.ss-chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid var(--border-1);background:var(--surface-1);color:var(--fg-2);text-decoration:none;white-space:nowrap;font:600 14px/1.2 var(--font-sans);cursor:pointer}.ss-chip:hover{border-color:var(--teal-400);color:var(--fg-1)}.ss-chip b{font:700 12px var(--font-mono);color:var(--fg-accent)}
.ss-hint{position:absolute;left:var(--gutter);bottom:28px;display:flex;align-items:center;gap:12px;font:700 11px var(--font-mono);letter-spacing:.14em;color:var(--fg-3)}.ss-hint i{display:block;width:1px;height:40px;background:linear-gradient(#44E0E2,transparent)}
.ss-tw{position:relative;display:inline-block;align-self:flex-start}.ss-sw{position:absolute;left:0;top:0;font:var(--text-display);font-size:clamp(56px,10vw,148px);line-height:.92;letter-spacing:var(--ls-display);white-space:nowrap;color:transparent;background:linear-gradient(100deg,transparent 40%,rgba(68,224,226,.95) 50%,transparent 60%);background-size:300% 100%;background-position:120% 0;-webkit-background-clip:text;background-clip:text;pointer-events:none}
.ss-acc{display:block;width:min(420px,60%);height:2px;background:linear-gradient(90deg,#44E0E2,rgba(68,224,226,0));transform-origin:left;margin-top:-4px}
.ss-orb{position:absolute;right:calc(var(--gutter) - min(4vw,48px));top:50%;width:min(42vw,500px);aspect-ratio:1;transform:translateY(-50%);pointer-events:none}.ss-orb svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.ss-orb .dot{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px;border-radius:50%;background:#44E0E2;box-shadow:0 0 14px #44E0E2}
.ss-ch>span{will-change:transform}.ss-chip{will-change:transform}
.ss-hstrips-old{position:absolute;inset:0;display:flex;pointer-events:none;opacity:.32}.ss-hstrips i{flex:1;display:block;position:relative;overflow:hidden;background-size:cover;background-position:center;transform-origin:50% 100%}.ss-hstrips i:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,14,15,.35),rgba(7,14,15,.95))}
.ss-hline{position:absolute;left:0;right:0;height:1px;background:rgba(68,224,226,.22);transform-origin:left;pointer-events:none}
.ss-cur{position:absolute;width:420px;height:420px;margin:-210px 0 0 -210px;border-radius:50%;background:radial-gradient(closest-side,rgba(68,224,226,.14),transparent 70%);pointer-events:none;left:0;top:0}
.ss-dots{display:flex;gap:6px}.ss-dots button{all:unset;cursor:pointer;width:22px;height:4px;background:var(--border-1);transition:background .3s,width .3s}.ss-dots button.on{background:#44E0E2;width:40px}
.ss-t .w{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.06em}.ss-t .w>span{display:inline-block}
.ss-mq{position:relative;overflow:hidden;border-top:1px solid var(--border-1);border-bottom:1px solid var(--border-1);background:var(--ink-950);padding:28px 0}
.ss-mq .r{display:flex;white-space:nowrap;width:max-content;will-change:transform}
.ss-mq .r span{display:inline-flex;align-items:center;gap:28px;padding-right:28px;font:700 clamp(40px,6vw,88px)/1 var(--font-display,serif);letter-spacing:-.02em;color:transparent;-webkit-text-stroke:1px rgba(68,224,226,.4)}
.ss-mq .r span:nth-child(even){color:var(--fg-1);-webkit-text-stroke:0}
.ss-mq .r span i{display:block;width:14px;height:14px;background:#44E0E2;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);flex:none}
.ss-hint i{animation:ssPulse 1.8s ease-in-out infinite;transform-origin:top}@keyframes ssPulse{0%,100%{transform:scaleY(.3);opacity:.4}50%{transform:scaleY(1);opacity:1}}
.ss-cy{position:relative;height:calc(100vh - 64px);min-height:640px;overflow:hidden;background:var(--ink-950);display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);align-items:center;gap:32px;padding:0 var(--gutter);box-sizing:border-box}
.ss-cy .bgw{position:absolute;left:58%;top:50%;transform:translate(-50%,-50%);font:700 clamp(120px,19vw,300px)/1 var(--font-display,serif);letter-spacing:-.03em;color:transparent;-webkit-text-stroke:1px rgba(68,224,226,.12);white-space:nowrap;pointer-events:none}
.ss-cy .bgw span{display:inline-block}
.ss-cy .glw{position:absolute;left:62%;top:50%;width:760px;height:760px;margin:-380px 0 0 -380px;border-radius:50%;background:radial-gradient(closest-side,rgba(68,224,226,.16),transparent 70%);pointer-events:none}
.ss-cy .det{position:relative;z-index:3;min-height:420px}
.ss-cy .it{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:18px;visibility:hidden}
.ss-cy .stage{position:relative;height:100%;perspective:1500px;min-width:0;overflow:visible;display:flex;align-items:center;justify-content:center;z-index:2}
.ss-cy .ring{position:relative;width:var(--cw,280px);height:calc(var(--cw,280px) * 1.357);transform-style:preserve-3d;will-change:transform}
.ss-cy .cd{position:absolute;inset:0;overflow:hidden;border:1px solid rgba(68,224,226,.3);background:#13201f;cursor:pointer;box-shadow:0 30px 60px rgba(0,0,0,.5)}
.ss-cy .floor{position:absolute;left:50%;top:50%;width:min(620px,100%);height:120px;margin:calc(var(--cw,280px) * .8) 0 0 calc(min(620px,100%) / -2);border-radius:50%;background:radial-gradient(closest-side,rgba(68,224,226,.22),transparent 70%);pointer-events:none}
.ss-cy .ring-ln{position:absolute;left:50%;top:50%;width:min(640px,100%);height:150px;margin:calc(var(--cw,280px) * .7) 0 0 calc(min(640px,100%) / -2);border-radius:50%;border:1px dashed rgba(68,224,226,.28);pointer-events:none}
.ss-cy .cnum{position:absolute;left:4%;top:9%;z-index:1;font:700 clamp(90px,11vw,160px)/1 var(--font-display,serif);color:transparent;-webkit-text-stroke:1px rgba(68,224,226,.4);overflow:hidden;height:1em;pointer-events:none}.ss-cy .cnum span{display:block}
.ss-cy .pbar{position:absolute;left:12%;right:12%;bottom:13%;height:2px;background:var(--border-1);z-index:3}.ss-cy .pbar i{position:absolute;inset:0;background:#44E0E2;transform-origin:left;transform:scaleX(0);box-shadow:0 0 12px rgba(68,224,226,.6)}
.ss-cy .cd .sh{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(234,252,252,.22) 48%,transparent 62%);background-size:260% 100%;pointer-events:none;mix-blend-mode:screen}
.ss-cy .cd img{position:absolute;left:-15%;top:0;width:130%;height:100%;object-fit:cover;display:block}
.ss-cy .cd .lb{position:absolute;left:0;right:0;bottom:0;padding:48px 16px 14px;background:linear-gradient(transparent,rgba(7,14,15,.92));display:flex;justify-content:space-between;gap:8px;font:700 11px/1.3 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:#fff}
.ss-cy .cd .lb b{color:#44E0E2;font-weight:700}
.ss-cy .cd.on{border-color:#44E0E2;box-shadow:0 0 60px rgba(68,224,226,.35),0 30px 60px rgba(0,0,0,.5)}
.ss-cy .rail{position:absolute;left:calc(440px + var(--gutter) + 32px);right:var(--gutter);bottom:4%;z-index:4;display:flex;justify-content:center;gap:18px;flex-wrap:wrap}
.ss-cy .rail button{all:unset;cursor:pointer;display:flex;align-items:center;gap:10px;font:700 11px var(--font-mono);letter-spacing:.08em;color:var(--fg-3);white-space:nowrap}
.ss-cy .rail button i{display:block;width:18px;height:2px;background:var(--border-2);transition:width .35s,background .35s}
.ss-cy .rail button.on{color:var(--fg-1)}.ss-cy .rail button.on i{width:40px;background:#44E0E2}
.ss-cy .rail button span{display:none}
@media(max-width:899px){.ss-cy{height:auto;min-height:0;grid-template-columns:minmax(0,1fr);padding:64px var(--gutter)}.ss-cy .stage{height:auto;perspective:none}.ss-cy .ring{width:100%;height:auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;transform:none!important}.ss-cy .cd{position:relative;aspect-ratio:3/4;transform:none!important;opacity:1!important}.ss-cy .det{min-height:0}.ss-cy .it{position:relative;top:auto;transform:none;visibility:visible;margin-bottom:32px}.ss-cy .it:not(:first-child){display:none}.ss-cy .rail,.ss-cy .bgw{display:none}}
.ss-hz{position:relative;height:calc(100vh - 64px);min-height:600px;overflow:hidden;background:var(--ink-950)}
.ss-bar{position:absolute;left:0;right:0;top:0;z-index:5;display:flex;align-items:center;gap:20px;padding:22px var(--gutter);box-sizing:border-box}
.ss-bar .lbl{font:var(--text-eyebrow);letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--fg-accent);white-space:nowrap}
.ss-bar .ln{flex:1;height:1px;background:var(--border-1);position:relative}.ss-bar .ln span{position:absolute;inset:0;background:#44E0E2;transform-origin:left;transform:scaleX(0)}
.ss-bar{pointer-events:auto}.ss-bar .ct{font:700 14px var(--font-mono);color:var(--fg-1);white-space:nowrap}.ss-bar .ct em{font-style:normal;color:var(--fg-3)}
.ss-track{display:flex;height:100%;will-change:transform}
.ss-pn{position:relative;flex:none;width:min(88vw,1240px);height:100%;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:56px;align-items:center;padding:96px 64px 64px var(--gutter);box-sizing:border-box;border-right:1px solid var(--border-1)}
.ss-num{position:absolute;left:calc(var(--gutter) - 12px);bottom:-20px;font:700 clamp(160px,22vw,300px)/1 var(--font-display,serif);color:transparent;-webkit-text-stroke:1px rgba(68,224,226,.16);pointer-events:none;letter-spacing:-.04em}
.ss-tx{position:relative;display:flex;flex-direction:column;gap:18px;min-width:0}
.ss-meta{display:flex;align-items:center;gap:14px}.ss-meta .n{font:700 15px/1 var(--font-mono);color:var(--fg-accent)}.ss-meta .k{padding:5px 10px;border:1px solid var(--border-1);font:700 11px var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-2)}
.ss-ic{width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:var(--accent-subtle);color:var(--fg-accent);clip-path:var(--clip-chamfer-sm)}
.ss-t{margin:0;font:var(--text-h1);font-size:clamp(32px,3.6vw,52px);line-height:1.05;color:var(--fg-1);text-wrap:balance}
.ss-d{margin:0;font:var(--text-body-lg);font-size:18px;color:var(--fg-2);max-width:480px;text-wrap:pretty}
.ss-imw{position:relative;aspect-ratio:4/3;overflow:hidden;clip-path:var(--clip-chamfer-lg,var(--clip-chamfer-sm));background:#13201f}
.ss-imw img{position:absolute;left:-10%;top:0;width:120%;height:100%;object-fit:cover;display:block}
.ss-imw:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(7,14,15,.55));pointer-events:none}
.ss-end{flex:none;width:min(60vw,720px);height:100%;display:flex;flex-direction:column;justify-content:center;gap:22px;padding:96px var(--gutter);box-sizing:border-box}
.ss-end h3{margin:0;font:var(--text-display);font-size:clamp(40px,5vw,72px);line-height:1;color:var(--fg-1);text-wrap:balance}
@media(max-width:899px){.ss-hz{height:auto;min-height:0}.ss-bar{display:none}.ss-track{flex-direction:column;height:auto}.ss-pn{width:100%;height:auto;grid-template-columns:minmax(0,1fr);gap:28px;padding:64px var(--gutter);border-right:0;border-bottom:1px solid var(--border-1)}.ss-pn .ss-imw{order:-1}.ss-num{font-size:140px;bottom:auto;top:20px;right:var(--gutter);left:auto}.ss-end{width:100%;padding:64px var(--gutter)}.ss-mark{opacity:.25}}
`;
function ServicesScroll(){const NK=window.NK,{Button}=window.NKisiDesignSystem_91614a,Ico=NK.Ico,S=NK.SERVICES;
const root=React.useRef(),jump=React.useRef(()=>{});
React.useEffect(()=>{const el=root.current;if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);
const ctx=gsap.context(()=>{const q=s=>el.querySelectorAll(s),one=s=>el.querySelector(s);
gsap.to(one('.ss-prog'),{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:0,end:'max',scrub:.3}});
const intro=gsap.timeline({defaults:{ease:'expo.out'}});
intro.fromTo(q('.ss-orb circle'),{scale:.3,opacity:0,transformOrigin:'50% 50%'},{scale:1,opacity:1,duration:1.6,stagger:.12,ease:'expo.out'},0)
.fromTo(one('.ss-grid'),{opacity:0,scale:1.2},{opacity:1,scale:1,duration:2,ease:'expo.out'},0)
.fromTo(q('.ss-hline'),{scaleX:0},{scaleX:1,duration:1.4,stagger:.12,ease:'expo.inOut'},.1)
.fromTo(q('.ss-h1 .ss-ch>span'),{yPercent:115,rotate:10},{yPercent:0,rotate:0,duration:1.1,stagger:.04},.5)
.fromTo([one('.ss-eb')],{opacity:0,y:16},{opacity:1,y:0,duration:.8,stagger:.08},'<.2')
.fromTo(one('.ss-acc'),{scaleX:0},{scaleX:1,duration:1.1,ease:'expo.inOut'},'<.3')
.fromTo(q('.ss-chip'),{opacity:0,y:24,clipPath:'inset(0 100% 0 0)'},{opacity:1,y:0,clipPath:'inset(0 0% 0 0)',duration:.8,stagger:.06},'<.2')
.fromTo(one('.ss-sw'),{backgroundPosition:'120% 0'},{backgroundPosition:'-20% 0',duration:1.4,ease:'power2.inOut'},'-=.6')
.fromTo(one('.ss-mark'),{opacity:0,scale:.7,rotate:-18},{opacity:.9,scale:1,rotate:0,duration:1.6},.3)
;
const mm=gsap.matchMedia();
mm.add('(min-width:900px) and (prefers-reduced-motion: no-preference)',()=>{
const hero=one('.ss-hero'),cx=gsap.quickTo(one('.ss-cur'),'x',{duration:.6,ease:'power3'}),cy=gsap.quickTo(one('.ss-cur'),'y',{duration:.6,ease:'power3'}),mx=gsap.quickTo(one('.ss-mark'),'x',{duration:1,ease:'power3'}),my=gsap.quickTo(one('.ss-mark'),'y',{duration:1,ease:'power3'}),hx=gsap.quickTo(one('.ss-h1'),'x',{duration:1,ease:'power3'});
gsap.to(one('.ss-orb .o1'),{rotation:360,svgOrigin:'0 0',duration:80,ease:'none',repeat:-1});gsap.to(one('.ss-orb .o2'),{rotation:-360,svgOrigin:'0 0',duration:14,ease:'none',repeat:-1});
const dot=one('.ss-orb .dot'),orb=one('.ss-orb'),da={a:0};gsap.to(da,{a:Math.PI*2,duration:9,ease:'none',repeat:-1,onUpdate:()=>{const r=orb.clientWidth*.375;gsap.set(dot,{x:Math.cos(da.a)*r,y:Math.sin(da.a)*r*.98})}});
const wave=gsap.timeline({repeat:-1,repeatDelay:5,delay:4});wave.to(q('.ss-h1 .ss-ch>span'),{yPercent:-14,duration:.3,stagger:.04,ease:'power2.out'}).to(q('.ss-h1 .ss-ch>span'),{yPercent:0,duration:.7,stagger:.04,ease:'elastic.out(1,.45)'},.3).fromTo(one('.ss-sw'),{backgroundPosition:'120% 0'},{backgroundPosition:'-20% 0',duration:1.3,ease:'power2.inOut'},0);
gsap.to(one('.ss-mark'),{yPercent:-4,duration:3,ease:'sine.inOut',yoyo:true,repeat:-1,delay:1.6});
const lt=q('.ss-h1 .ss-ch>span');lt.forEach((c,i)=>c.parentNode.addEventListener('pointerenter',()=>{gsap.timeline().to(c,{yPercent:-28,color:'#44E0E2',duration:.22,ease:'power2.out'}).to(c,{yPercent:0,color:'',duration:.6,ease:'elastic.out(1,.4)'});[lt[i-1],lt[i+1]].forEach(n=>n&&gsap.timeline().to(n,{yPercent:-12,duration:.22,ease:'power2.out'}).to(n,{yPercent:0,duration:.6,ease:'elastic.out(1,.4)'}))}));
q('.ss-chip').forEach(c=>{const xq=gsap.quickTo(c,'x',{duration:.4,ease:'power3'}),yq=gsap.quickTo(c,'y',{duration:.4,ease:'power3'});c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();xq((e.clientX-r.left-r.width/2)*.25);yq((e.clientY-r.top-r.height/2)*.35)});c.addEventListener('pointerleave',()=>{xq(0);yq(0)})});
const ebEl=one('.ss-eb'),ebT=ebEl.textContent,GLX='ABCDEFGHJKLMNPQRSTUVWXYZ#%&';const eo={p:0};intro.fromTo(eo,{p:0},{p:1,duration:1.1,ease:'none',onUpdate:()=>ebEl.textContent=[...ebT].map((c,i)=>c===' '||i<eo.p*ebT.length?c:GLX[Math.floor(Math.random()*GLX.length)]).join(''),onComplete:()=>ebEl.textContent=ebT},.7);
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;cx(x);cy(y);gsap.to(orb,{x:(x/r.width-.5)*-30,y:(y/r.height-.5)*-24,duration:1,ease:'power3',overwrite:'auto'});mx((x/r.width-.5)*-50);my((y/r.height-.5)*-36);hx((x/r.width-.5)*18)});
const IR={immediateRender:false};
gsap.timeline({scrollTrigger:{trigger:hero,start:'top 64px',end:'+=100%',scrub:1,pin:true,anticipatePin:1}})
.fromTo(one('.ss-grid'),{yPercent:0,scale:1},{yPercent:-12,scale:1.15,ease:'none',...IR},0)
.fromTo(q('.ss-orb circle'),{scale:1},{scale:i=>2.2+i*.6,opacity:0,transformOrigin:'50% 50%',ease:'power1.in',...IR},0)
.fromTo(q('.ss-h1 .ss-ch>span'),{yPercent:0,opacity:1,rotate:0},{yPercent:i=>-60-(i%4)*30,rotate:i=>(i%2?1:-1)*12,opacity:0,stagger:{each:.02,from:'center'},ease:'power2.in',...IR},0)
.fromTo(one('.ss-mark'),{scale:1,rotate:0,opacity:.9,xPercent:0},{scale:2.6,rotate:24,opacity:.08,xPercent:-40,ease:'power1.in',...IR},0)
.fromTo(q('.ss-chip'),{x:0,y:0,opacity:1},{x:i=>(i%2?1:-1)*(120+i*30),y:i=>-30-i*12,opacity:0,stagger:.02,ease:'power2.in',...IR},0)
.fromTo([one('.ss-eb'),one('.ss-acc'),one('.ss-sw')],{opacity:1,y:0},{opacity:0,y:-30,ease:'power2.in',...IR},0)
.fromTo(q('.ss-hline'),{scaleX:1},{scaleX:0,transformOrigin:'right',ease:'power2.in',...IR},.2);
if(one('.ss-track')){const track=one('.ss-track'),dist=()=>track.scrollWidth-window.innerWidth;
const hz=gsap.to(track,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:one('.ss-hz'),start:'top 64px',end:()=>'+='+dist(),scrub:1,pin:true,anticipatePin:1,invalidateOnRefresh:true,snap:{snapTo:v=>{const d=dist();const pts=[...q('.ss-pn'),one('.ss-end')].map(p=>Math.min(1,p.offsetLeft/d));return gsap.utils.snap(pts,v)},duration:{min:.25,max:.7},delay:.1,ease:'power2.inOut'},onUpdate:s=>{gsap.set(one('.ss-bar .ln span'),{scaleX:s.progress});const i=Math.min(S.length,Math.floor(s.progress*S.length*.999)+1);one('.ss-bar .ct b').textContent='0'+i;q('.ss-dots button').forEach((b,j)=>b.classList.toggle('on',j===i-1));const v=gsap.utils.clamp(-8,8,s.getVelocity()/260);imgSkew(v)}}});
const imgSkew=gsap.quickTo(q('.ss-imw img'),'skewX',{duration:.5,ease:'power3'});
jump.current=i=>{const st=hz.scrollTrigger,p=q('.ss-pn')[i];const f=Math.min(1,p.offsetLeft/dist());window.scrollTo({top:st.start+f*(st.end-st.start)+2,behavior:'smooth'})};
q('.ss-pn').forEach(p=>{const ca={containerAnimation:hz};
gsap.fromTo(p.querySelector('.ss-imw'),{clipPath:'inset(0% 100% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:p,...ca,start:'left 92%',end:'left 30%',scrub:true}});
gsap.fromTo(p.querySelector('.ss-imw img'),{xPercent:-8,scale:1.15},{xPercent:8,scale:1,ease:'none',scrollTrigger:{trigger:p,...ca,start:'left right',end:'right left',scrub:true}});
gsap.fromTo(p.querySelector('.ss-num'),{xPercent:40},{xPercent:-40,ease:'none',scrollTrigger:{trigger:p,...ca,start:'left right',end:'right left',scrub:true}});
gsap.fromTo(p.querySelectorAll('.ss-tx>*:not(.ss-t)'),{opacity:0,y:40},{opacity:1,y:0,duration:.8,stagger:.08,ease:'expo.out',scrollTrigger:{trigger:p,...ca,start:'left 70%',toggleActions:'play none none reverse'}});
gsap.fromTo(p.querySelectorAll('.ss-t .w>span'),{yPercent:110},{yPercent:0,duration:.9,stagger:.06,ease:'expo.out',scrollTrigger:{trigger:p,...ca,start:'left 65%',toggleActions:'play none none reverse'}});
gsap.fromTo(p.querySelector('.ss-ic'),{rotate:-90,scale:.4},{rotate:0,scale:1,duration:.8,ease:'back.out(2)',scrollTrigger:{trigger:p,...ca,start:'left 65%',toggleActions:'play none none reverse'}});
gsap.fromTo(p,{opacity:.35},{opacity:1,ease:'none',scrollTrigger:{trigger:p,...ca,start:'left 95%',end:'left 45%',scrub:true}});
gsap.fromTo(p.querySelector('.ss-tx'),{x:0},{x:-80,opacity:.3,ease:'none',immediateRender:false,scrollTrigger:{trigger:p,...ca,start:'right 60%',end:'right 5%',scrub:true}});
const im=p.querySelector('.ss-imw'),rx=gsap.quickTo(im,'rotationY',{duration:.6,ease:'power3'}),ry=gsap.quickTo(im,'rotationX',{duration:.6,ease:'power3'});gsap.set(im,{transformPerspective:900});
im.addEventListener('pointermove',e=>{const r=im.getBoundingClientRect();rx(((e.clientX-r.left)/r.width-.5)*10);ry(-((e.clientY-r.top)/r.height-.5)*8)});im.addEventListener('pointerleave',()=>{rx(0);ry(0)})});
gsap.fromTo(q('.ss-end>*'),{opacity:0,x:60},{opacity:1,x:0,duration:.9,stagger:.1,ease:'expo.out',scrollTrigger:{trigger:one('.ss-end'),containerAnimation:hz,start:'left 75%',toggleActions:'play none none reverse'}});}
});
mm.add('(max-width:899px), (prefers-reduced-motion: reduce)',()=>{jump.current=i=>{const p=q('.ss-pn')[i];window.scrollTo({top:p.getBoundingClientRect().top+scrollY-64,behavior:'smooth'})};
q('.ss-pn').forEach(p=>gsap.fromTo(p.querySelectorAll('.ss-imw,.ss-tx>*'),{opacity:0,y:36},{opacity:1,y:0,duration:.8,stagger:.08,ease:'expo.out',scrollTrigger:{trigger:p,start:'top 80%'}}))});
const cy=one('.ss-cy');if(cy){const N=S.length,cds=[...cy.querySelectorAll('.cd')],its=[...cy.querySelectorAll('.it')],rb=[...cy.querySelectorAll('.rail button')],ring=cy.querySelector('.ring'),bgw=cy.querySelector('.bgw span');let act=-1;
const show=(i,dir)=>{if(i===act)return;const prev=act;act=i;cds.forEach((c,j)=>c.classList.toggle('on',j===i));const cn=cy.querySelector('.cnum span');gsap.timeline().to(cn,{yPercent:-100*dir,duration:.25,ease:'power2.in'}).add(()=>cn.textContent='0'+(i+1)).fromTo(cn,{yPercent:100*dir},{yPercent:0,duration:.5,ease:'expo.out'});rb.forEach((b,j)=>b.classList.toggle('on',j===i));
if(prev>=0){const o=its[prev];gsap.to(o.querySelectorAll(':scope>*'),{y:-30*dir,opacity:0,duration:.35,stagger:.03,ease:'power2.in',overwrite:true,onComplete:()=>gsap.set(o,{visibility:'hidden'})})}
const n=its[i];gsap.set(n,{visibility:'visible'});gsap.fromTo(n.querySelectorAll(':scope>*:not(.ss-t)'),{y:40*dir,opacity:0},{y:0,opacity:1,duration:.7,stagger:.06,delay:.15,ease:'expo.out',overwrite:true});
gsap.fromTo(n.querySelectorAll('.ss-t .w>span'),{yPercent:110*dir},{yPercent:0,duration:.8,stagger:.05,delay:.2,ease:'expo.out',overwrite:true});
gsap.fromTo(n.querySelector('.ss-ic'),{rotate:-90*dir,scale:.4},{rotate:0,scale:1,duration:.7,delay:.15,ease:'back.out(2)',overwrite:true});
if(prev<0||S[prev].k!==S[i].k){gsap.timeline().to(bgw,{yPercent:-60*dir,opacity:0,duration:.3,ease:'power2.in'}).add(()=>bgw.textContent=S[i].k).fromTo(bgw,{yPercent:60*dir,opacity:0},{yPercent:0,opacity:1,duration:.6,ease:'expo.out'})}};
const step=360/N;let R=0;const fit=()=>{const sw=cy.querySelector('.stage').clientWidth||600;const cw=Math.max(170,Math.min(280,sw/2.25));cy.style.setProperty('--cw',cw+'px');R=Math.round(cw/2/Math.tan(Math.PI/N)*1.08);cds.forEach((c,i)=>c.style.transform='rotateY('+(i*step)+'deg) translateZ('+R+'px)')};fit();addEventListener('resize',()=>{fit();face(cur.r);ring.style.transform='translateZ('+(-R)+'px) rotateX(-6deg) rotateY('+cur.r+'deg)'});const cur={r:0};
cds.forEach((c,i)=>{c.style.transformOrigin='50% 50%';c.style.transform='rotateY('+(i*step)+'deg) translateZ('+R+'px)'});
const imgs=cds.map(c=>c.querySelector('img')),shs=cds.map(c=>c.querySelector('.sh'));const face=rot=>{cds.forEach((c,i)=>{const a=((i*step+rot)%360+540)%360-180,f=Math.cos(a*Math.PI/180),fp=Math.max(0,f),sn=Math.sin(a*Math.PI/180);c.style.transform='rotateY('+(i*step)+'deg) translateZ('+R+'px) scale('+(.84+.16*fp).toFixed(3)+')';c.style.opacity=(.14+.86*fp).toFixed(3);c.style.filter='brightness('+(.4+.6*fp).toFixed(3)+')';c.style.pointerEvents=f>.3?'auto':'none';imgs[i].style.transform='translateX('+(sn*-11).toFixed(2)+'%)';shs[i].style.backgroundPosition=(50+sn*120).toFixed(1)+'% 0'})};
const pb=gsap.quickSetter(cy.querySelector('.pbar i'),'scaleX');let jumping=false;const mmc=gsap.matchMedia();
mmc.add('(min-width:900px) and (prefers-reduced-motion: no-preference)',()=>{const st={r:0};
const tl=gsap.timeline({scrollTrigger:{trigger:cy,start:'top 64px',end:'+='+(N*65)+'%',scrub:1,pin:true,anticipatePin:1,snap:{snapTo:v=>jumping?v:gsap.utils.snap(1/(N-1),v),inertia:false,duration:{min:.25,max:.6},delay:.15,ease:'power2.inOut'},onUpdate:s=>{const i=Math.round(s.progress*(N-1));show(i,s.direction||1);pb(s.progress)}}});
tl.fromTo(st,{r:0},{r:-(N-1)*step,ease:'none',onUpdate:()=>{cur.r=st.r;ring.style.transform='translateZ('+(-R)+'px) rotateX(-6deg) rotateY('+st.r+'deg)';face(st.r)}},0)
.fromTo(cy.querySelector('.bgw'),{xPercent:-46},{xPercent:-54,ease:'none'},0);
gsap.timeline({scrollTrigger:{trigger:cy,start:'top 80%'}}).fromTo(cy.querySelector('.stage'),{scale:.6,opacity:0},{scale:1,opacity:1,duration:1.2,ease:'expo.out'}).fromTo(cy.querySelectorAll('.rail button'),{opacity:0,x:20},{opacity:1,x:0,duration:.5,stagger:.05,ease:'power3.out'},'<.3').fromTo(cy.querySelector('.ring-ln'),{scale:.4,opacity:0},{scale:1,opacity:1,duration:1.2,ease:'expo.out'},'<');
gsap.to(cy.querySelector('.ring-ln'),{rotation:360,duration:60,ease:'none',repeat:-1});
const fl={y:0};gsap.to(fl,{y:1,duration:2.6,ease:'sine.inOut',yoyo:true,repeat:-1,onUpdate:()=>ring.style.marginTop=(fl.y*-12).toFixed(2)+'px'});
const tx=gsap.quickTo(cy.querySelector('.stage'),'rotationX',{duration:.8,ease:'power3'}),ty=gsap.quickTo(cy.querySelector('.stage'),'rotationY',{duration:.8,ease:'power3'});
cy.addEventListener('pointermove',e=>{const r=cy.getBoundingClientRect();ty(((e.clientX-r.left)/r.width-.5)*10);tx(-((e.clientY-r.top)/r.height-.5)*8)});
jump.current=i=>{const t=tl.scrollTrigger,to=t.start+(i/(N-1))*(t.end-t.start)+1,o={y:window.scrollY};jumping=true;gsap.killTweensOf(o);gsap.to(o,{y:to,duration:Math.min(1.4,.5+Math.abs(to-o.y)/2400),ease:'power2.inOut',onUpdate:()=>window.scrollTo(0,o.y),onComplete:()=>{setTimeout(()=>jumping=false,250)}})};
ring.style.transform='translateZ('+(-R)+'px) rotateX(-6deg) rotateY(0deg)';face(0);show(0,1)});
mmc.add('(max-width:899px), (prefers-reduced-motion: reduce)',()=>{show(0,1);jump.current=i=>window.scrollTo({top:cy.getBoundingClientRect().top+scrollY-64,behavior:'smooth'})})}
const mqr=one('.ss-mq .r'),mqt=gsap.to(mqr,{xPercent:-50,duration:38,ease:'none',repeat:-1});
ScrollTrigger.create({trigger:one('.ss-mq'),start:'top bottom',end:'bottom top',onUpdate:s=>{const v=s.getVelocity()/300;mqt.timeScale(gsap.utils.clamp(-6,6,1+v));gsap.to(mqr,{skewX:gsap.utils.clamp(-10,10,-v*2),duration:.4,overwrite:'auto'})}});
gsap.fromTo(one('.ss-mq'),{clipPath:'inset(0 50% 0 50%)'},{clipPath:'inset(0 0% 0 0%)',ease:'expo.inOut',duration:1.2,scrollTrigger:{trigger:one('.ss-mq'),start:'top 90%'}});
const rest=one('.ss-rest');if(rest)[...rest.children].forEach(sec=>{gsap.fromTo(sec,{opacity:0,y:60,clipPath:'inset(8% 4% 0% 4%)'},{opacity:1,y:0,clipPath:'inset(0% 0% 0% 0%)',duration:1.2,ease:'expo.out',scrollTrigger:{trigger:sec,start:'top 85%'}});const kids=sec.querySelectorAll('h2,h3,p,img,a,button');if(kids.length)gsap.fromTo(kids,{opacity:0,y:24},{opacity:1,y:0,duration:.7,stagger:.04,ease:'power3.out',scrollTrigger:{trigger:sec,start:'top 75%'}})});
},el);
const r=()=>ScrollTrigger.refresh();const imgs=[...el.querySelectorAll('img')];imgs.forEach(i=>i.complete||i.addEventListener('load',r,{once:true}));setTimeout(r,400);
return()=>ctx.revert()},[]);
const split=t=>t.split(' ').map((w,j)=><React.Fragment key={j}>{j?' ':''}<span className="ss-wd">{[...w].map((c,k)=><span key={k} className="ss-ch"><span>{c}</span></span>)}</span></React.Fragment>);
return <div ref={root}><style>{SS_CSS}</style><div className="ss-prog"></div>
<section className="ss-hero"><div className="ss-orb"><svg viewBox="-200 -200 400 400"><circle className="o1" r="190" fill="none" stroke="rgba(68,224,226,.28)" strokeWidth="1" strokeDasharray="2 10"></circle><circle className="o2" r="150" fill="none" stroke="rgba(68,224,226,.45)" strokeWidth="1" strokeDasharray="120 820"></circle><circle className="o3" r="110" fill="none" stroke="rgba(68,224,226,.18)" strokeWidth="1"></circle></svg><i className="dot"></i></div><div className="ss-grid"></div><div className="ss-hglow"></div><div className="ss-cur"></div><span className="ss-hline" style={{top:'8%'}}></span><span className="ss-hline" style={{top:'78%'}}></span><img className="ss-mark" src="https://nkisi.in/wp-content/uploads/2024/07/cropped-NKISI_Trans-White-wt-1024x932.png" alt=""/>
<div className="ss-hin"><span className="ss-eb">Bringing the best version of the organization &amp; individuals</span>
<div className="ss-tw"><h1 className="ss-h1">{split('Our Services')}</h1><span className="ss-sw" aria-hidden="true">Our Services</span></div><span className="ss-acc"></span>
<div className="ss-chips">{S.map((w,i)=><a key={w.t} className="ss-chip" href={'#svc-'+i} onClick={e=>{e.preventDefault();jump.current(i)}}><b>0{i+1}</b>{w.t}</a>)}</div></div></section>
<section className="ss-cy" id="services"><div className="glw"></div><div className="bgw"><span>Consulting</span></div>
<div className="det">{S.map((w,i)=><div key={w.t} className="it"><div className="ss-meta"><span className="n">0{i+1} / 0{S.length}</span><span className="k">{w.k}</span></div><span className="ss-ic"><Ico n={w.i} s={26}/></span><h2 className="ss-t">{w.t.split(' ').map((x,j)=><React.Fragment key={j}>{j?' ':''}<span className="w"><span>{x}</span></span></React.Fragment>)}</h2><p className="ss-d">{w.d}</p><div><Button variant="secondary" onClick={()=>NK.go('contact')} iconRight={<Ico n="arrow-right"/>}>Enquire about this service</Button></div></div>)}</div>
<div className="stage"><span className="cnum"><span>01</span></span><div className="floor"></div><div className="ring-ln"></div><div className="ring">{S.map((w,i)=><div key={w.t} className="cd" onClick={()=>jump.current(i)}><img src={w.img} alt={w.t}/><span className="sh"></span><span className="lb"><span>{w.t}</span><b>0{i+1}</b></span></div>)}</div><div className="pbar"><i></i></div></div>
<div className="rail">{S.map((w,i)=><button key={w.t} onClick={()=>jump.current(i)} aria-label={w.t}><span>{w.k}</span>0{i+1}<i></i></button>)}</div></section>
<div className="ss-mq" aria-hidden="true"><div className="r">{[...S,...S].map((w,i)=><span key={i}>{w.t}<i></i></span>)}</div></div>
<div className="ss-rest"><NK.Clients/><NK.CtaBand/></div></div>}
window.ServicesScroll=ServicesScroll;
})();
