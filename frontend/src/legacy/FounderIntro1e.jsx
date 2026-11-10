/* Converted verbatim from ui_kits/website/FounderIntro1e.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
/* About page · Founder section — 1e "Decode" GSAP intro (from FounderIntroGSAP.html). Needs gsap + ScrollTrigger loaded globally. */
(()=>{
const P='#nkf1e ';
const CSS=[
'{position:relative;overflow:hidden;background:var(--ink-950)}',
'.fi{position:relative;max-width:1280px;margin:0 auto;min-height:720px;display:grid;grid-template-columns:minmax(0,400px) minmax(0,1fr);gap:clamp(40px,5vw,80px);padding:clamp(64px,8vw,112px) var(--gutter,clamp(24px,6vw,88px));align-items:center;box-sizing:border-box}',
'.frame{position:relative;width:100%;max-width:400px;aspect-ratio:3/4;justify-self:center;z-index:2}',
'.photo{position:absolute;inset:0;overflow:hidden;background:#13201f;color:var(--fg-3)}',
'.slc{position:absolute;inset:0;overflow:hidden}.slc image-slot{position:absolute;inset:0;width:100%;height:100%;display:block}',
'.slc .fl{position:absolute;inset:0;background:linear-gradient(90deg,rgba(68,224,226,0),rgba(68,224,226,.75),rgba(234,252,252,.9));opacity:0;pointer-events:none;mix-blend-mode:screen}',
'.veil{position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(68,224,226,.13) 0 1px,transparent 1px 4px),linear-gradient(rgba(8,26,28,.82),rgba(8,26,28,.92))}',
'.scan{position:absolute;left:-10%;right:-10%;height:2px;background:#44E0E2;box-shadow:0 0 18px #44E0E2;pointer-events:none;z-index:5;opacity:0}',
'.scan .trail{position:absolute;left:10%;right:10%;bottom:2px;height:70px;background:linear-gradient(to top,rgba(68,224,226,.28),rgba(68,224,226,0));pointer-events:none}',
'.corner{position:absolute;width:22px;height:22px;border-color:#44E0E2;border-style:solid;border-width:0;pointer-events:none;z-index:6}',
'.hud{position:absolute;font:700 11px var(--font-mono);letter-spacing:.12em;color:var(--fg-accent);white-space:nowrap;pointer-events:none;z-index:6}.hud b{font-weight:700;color:var(--fg-1)}.hud-t{left:0;top:-36px}.hud-b{left:0;bottom:-36px}.hud-r{right:0;bottom:-36px}',
'.gl{position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(68,224,226,.16);transform-origin:left;pointer-events:none}',
'.glow{position:absolute;left:-160px;top:20px;width:800px;height:800px;border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(closest-side,rgba(68,224,226,.18),transparent 70%)}',
'.copy{position:relative;z-index:4;display:flex;flex-direction:column;gap:22px;min-width:0}',
'.eb{font:var(--text-eyebrow);letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--fg-accent);display:flex;gap:12px;align-items:center}.eb i{display:block;width:40px;height:1px;background:var(--teal-400)}',
'.nm{position:relative;margin:0;font:var(--text-display);font-size:clamp(44px,5.6vw,78px);line-height:1;letter-spacing:var(--ls-display);color:var(--fg-1)}',
'.wd{display:inline-block;white-space:nowrap}.ch{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.06em}.ch>span{display:inline-block;transform-origin:50% 100%}',
'.caret{position:absolute;left:0;top:.08em;width:.07em;height:.86em;background:#44E0E2;box-shadow:0 0 14px #44E0E2;opacity:0;pointer-events:none}',
'.role{font:700 13px var(--font-mono);letter-spacing:.12em;color:var(--fg-3)}',
'.q{margin:0;font:var(--text-h2);font-size:clamp(22px,2.2vw,28px);color:var(--fg-1);text-wrap:balance}.q .w{display:inline-block}',
'.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--border-1);border:1px solid var(--border-1)}',
'.st{min-width:0;background:var(--ink-950);padding:18px 18px 16px;display:flex;flex-direction:column;gap:8px}.st b{font:700 clamp(22px,2.6vw,34px)/1 var(--font-display,serif);white-space:nowrap;color:var(--teal-400)}.st span{font:700 11px/1.35 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-3)}',
'.creds{display:flex;flex-wrap:wrap;gap:8px}.creds span{padding:8px 12px;border:1px solid var(--border-1);font:600 13px var(--font-sans);color:var(--fg-2)}',
'.ctas{display:flex;gap:12px;flex-wrap:wrap}.cta{height:48px;padding:0 22px;display:inline-flex;align-items:center;font:700 15px var(--font-sans);text-decoration:none;background:var(--teal-400);color:#04191A}.cta:hover{color:#04191A;background:var(--teal-300)}.cta.s{background:transparent;color:var(--fg-1);border:1px solid var(--border-2)}.cta.s:hover{color:var(--fg-1);border-color:var(--teal-400)}'
].map(r=>r[0]==='{'?'#nkf1e'+r:r.split('}').filter(Boolean).map(x=>P+x+'}').join('')).join('\n')+'\n@media(max-width:1100px){#nkf1e .fi{grid-template-columns:minmax(0,1fr);gap:64px}#nkf1e .frame{max-width:360px}}';
const COR=['left:-14px;top:-14px;border-top-width:2px;border-left-width:2px','right:-14px;top:-14px;border-top-width:2px;border-right-width:2px','left:-14px;bottom:-14px;border-bottom-width:2px;border-left-width:2px','right:-14px;bottom:-14px;border-bottom-width:2px;border-right-width:2px'];
const SL=Array.from({length:8},(_,i)=>`<div class="slc" style="clip-path:inset(${i*12.5}% 0 ${100-(i+1)*12.5-.3}% 0)"><image-slot id="founder-photo" shape="rect" fit="cover" placeholder="${i===3?"Drop Ajith's portrait":''}"></image-slot><i class="fl"></i></div>`).join('');
const sp=w=>'<span class="wd">'+[...w].map(c=>'<span class="ch"><span>'+c+'</span></span>').join('')+'</span>';
const HTML=`<div class="glow"></div><div class="gl"></div><div class="fi">
<div class="frame"><div class="photo slices">${SL}</div><div class="veil"></div><div class="scan"><span class="trail"></span></div>${COR.map(c=>`<span class="corner hc" style="${c}"></span>`).join('')}<span class="hud hud-t">N’KISI / FOUNDER-001</span><span class="hud hud-b">SCAN <b class="sv">000</b>%</span><span class="hud hud-r">MATCH <b class="mv">0</b>%</span></div>
<div class="copy"><div class="eb"><i></i><span>About the founder</span></div><h2 class="nm">${'Ajith Selvaraju'.split(' ').map(sp).join(' ')}<span class="caret"></span></h2><span class="role">FOUNDER &amp; CEO · N’KISI GLOBAL CONSULTING</span><blockquote class="q">${'“Clarity in thinking creates excellence in execution.”'.split(' ').map(w=>'<span class="w">'+w+'</span>').join(' ')}</blockquote><div class="stats"><div class="st"><b data-to="12000" data-suf="+">12,000+</b><span>Individuals trained</span></div><div class="st"><b data-to="2020" data-from="1990" data-raw="1">2020</b><span>Founded N’kisi</span></div><div class="st"><b data-to="2023" data-from="1990" data-raw="1">2023</b><span>TN Startup Award · Title Winner</span></div></div><div class="creds"><span>IIPE, Canada — Certified Trainer</span><span>Life Academy — GOAL Facilitator</span><span>MBA · Knowledge Business School</span><span>PSG College of Technology</span></div><div class="ctas"><a class="cta" href="#founder">Read founder’s profile</a><a class="cta s" href="contact.html">Work with Ajith</a></div></div></div>`;
const GL='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@';const rnd=()=>GL[Math.floor(Math.random()*GL.length)];
const fmt=(b,v)=>(b.dataset.raw?Math.round(v):Math.round(v).toLocaleString('en-IN'))+(b.dataset.suf||'');
function textTL(c){const $=s=>c.querySelectorAll(s);const tl=gsap.timeline();
tl.fromTo($('.eb i'),{scaleX:0},{scaleX:1,transformOrigin:'left',duration:.6,ease:'expo.out'})
.fromTo($('.eb span'),{opacity:0,x:-10},{opacity:1,x:0,duration:.5},'<.1')
.add(gsap.to({},{duration:.9}),'<.05')
.fromTo($('.role'),{opacity:0,letterSpacing:'.42em'},{opacity:1,letterSpacing:'.12em',duration:1,ease:'expo.out'},'-=.6')
.fromTo($('.q .w'),{opacity:0,y:14,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.6,stagger:.05,ease:'power3.out'},'-=.6')
.fromTo($('.st'),{opacity:0,y:24},{opacity:1,y:0,duration:.6,stagger:.1,ease:'power3.out'},'-=.3');
$('.st b').forEach((b,i)=>{const from=+(b.dataset.from||0),o={v:from};b.textContent=fmt(b,from);tl.to(o,{v:+b.dataset.to,duration:1.5,ease:'power2.out',onUpdate:()=>b.textContent=fmt(b,o.v)},i?'<.12':'<')});
tl.fromTo($('.creds span'),{opacity:0,x:-16},{opacity:1,x:0,duration:.45,stagger:.07,ease:'power2.out'},'-=1.1')
.fromTo($('.cta'),{opacity:0,y:16},{opacity:1,y:0,duration:.5,stagger:.08,ease:'back.out(1.8)'},'-=.3');return tl}
function decode(tl,els,dur,pos){els.forEach(e=>{e.dataset.c=e.dataset.c||e.textContent});const o={p:0};tl.fromTo(o,{p:0},{p:1,duration:dur,ease:'none',onUpdate:()=>els.forEach(e=>{const t=e.dataset.c,k=o.p*t.length;e.textContent=[...t].map((c,i)=>c===' '||i<k?c:rnd()).join('')}),onComplete:()=>els.forEach(e=>e.textContent=e.dataset.c)},pos)}
function decodeName(tl,c,pos){const nm=c.querySelector('.nm'),cr=nm.querySelector('.caret'),fg=getComputedStyle(nm).color,chs=[...nm.querySelectorAll('.ch>span')];
chs.forEach(e=>{e.dataset.c=e.dataset.c||e.textContent;e.textContent=e.dataset.c;const w=e.parentNode;w.style.width='';w.style.width=w.getBoundingClientRect().width+'px';w.style.textAlign='center'});
const ps=chs.map(e=>{const w=e.parentNode;return [w.offsetLeft+w.offsetWidth+6,w.offsetTop]});
tl.addLabel('nm',pos).fromTo(cr,{opacity:0,x:ps[0][0]-30,y:ps[0][1]},{opacity:1,duration:.08},'nm');let end=0;
chs.forEach((e,i)=>{const o={p:0},st=i*.07+Math.random()*.05,d=.3+Math.random()*.2;end=Math.max(end,st+d);let last=-1;
tl.fromTo(e,{opacity:0,y:-8,color:'#44E0E2',scale:1},{opacity:1,y:0,duration:.18,ease:'power2.out'},'nm+='+st)
.fromTo(o,{p:0},{p:1,duration:d,ease:'none',onStart:()=>gsap.set(cr,{x:ps[i][0],y:ps[i][1]}),onUpdate:()=>{const k=o.p<1?Math.floor(o.p*7):99;if(k===last)return;last=k;e.textContent=k===99?e.dataset.c:rnd()},onComplete:()=>{e.textContent=e.dataset.c}},'nm+='+st)
.fromTo(e,{scale:1.3},{scale:1,duration:.45,ease:'back.out(3)',immediateRender:false},'nm+='+(st+d))
.to(e,{color:fg,duration:.5,ease:'power2.out',clearProps:'color'},'<')});
tl.to(cr,{opacity:0,duration:.12,repeat:3,yoyo:true},'nm+='+end).set(cr,{opacity:0})
.to(nm,{keyframes:[{textShadow:'-4px 0 0 rgba(68,224,226,.9), 4px 0 0 rgba(186,244,244,.6)',x:3,duration:.05},{textShadow:'3px 0 0 rgba(68,224,226,.9), -3px 0 0 rgba(186,244,244,.6)',x:-2,duration:.05},{textShadow:'0px 0 0 rgba(68,224,226,0), 0px 0 0 rgba(186,244,244,0)',x:0,duration:.1}]},'nm+='+(end+.15))}
function build(root){const $=q=>root.querySelectorAll(q),one=q=>root.querySelector(q),sl=$('.slc'),scan=one('.scan'),veil=one('.veil'),c=one('.copy'),sv=one('.sv'),mv=one('.mv');
const tl=gsap.timeline({paused:true}),cnt={s:0};sv.textContent='000';mv.textContent='0';
tl.fromTo(one('.gl'),{scaleX:0},{scaleX:1,duration:1,ease:'expo.inOut'})
.fromTo($('.hc'),{opacity:0,scale:2.2},{opacity:1,scale:1,duration:.6,stagger:.06,ease:'expo.out'},'-=.6')
.fromTo($('.hud'),{opacity:0,y:6},{opacity:1,y:0,duration:.4,stagger:.08},'<.2')
.addLabel('hudIn')
.fromTo(veil,{clipPath:'inset(0% 0% 0% 0%)',opacity:0},{clipPath:'inset(0% 0% 0% 0%)',opacity:1,duration:.3},'<')
.fromTo(sl,{xPercent:i=>i%2?110:-110,opacity:0,skewX:i=>i%2?-24:24},{xPercent:0,opacity:1,skewX:0,duration:.9,stagger:.06,ease:'expo.out'},'<')
.fromTo($('.slc .fl'),{opacity:1,scaleX:i=>i%2?-1:1},{opacity:0,duration:.7,stagger:.06,ease:'power2.out'},'<.15')
.to(sl,{xPercent:()=>gsap.utils.random(-4,4),duration:.06,repeat:5,yoyo:true,ease:'none'})
.to(sl,{xPercent:0,duration:.2,ease:'power2.out'})
.fromTo(scan,{top:'0%',opacity:1},{top:'100%',opacity:1,duration:1.5,ease:'power2.inOut'},'+=.1')
.to(veil,{clipPath:'inset(100% 0% 0% 0%)',duration:1.5,ease:'power2.inOut'},'<')
.to(cnt,{s:100,duration:1.5,ease:'power2.inOut',onUpdate:()=>{sv.textContent=String(Math.round(cnt.s)).padStart(3,'0');mv.textContent=Math.round(Math.min(100,cnt.s*1.04))}},'<')
.to(scan,{opacity:0,duration:.25})
.fromTo(one('.glow'),{opacity:0,scale:.8},{opacity:1,scale:1,duration:1.4,ease:'expo.out'},'<')
.to($('.hc'),{keyframes:[{x:i=>i%2?8:-8,y:i=>i<2?-8:8,duration:.25,ease:'power2.out'},{x:0,y:0,duration:.5,ease:'back.out(2.5)'}]},'<')
.fromTo(sl,{filter:'brightness(1.6)'},{filter:'brightness(1)',duration:.6,ease:'power2.out',stagger:{each:.03,from:'end'}},'<')
.fromTo(one('.slices'),{scale:1.08},{scale:1,duration:1.4,ease:'expo.out'},'<')
.addLabel('txt','-=1.6').add(textTL(c),'txt');
decodeName(tl,c,'txt+=.2');decode(tl,[c.querySelector('.role')],1.2,'txt+=.7');decode(tl,[one('.hud-t'),c.querySelector('.eb span')],.8,'hudIn');return tl}
function Founder1e(){const ref=React.useRef();
React.useEffect(()=>{if(!document.getElementById('nkf1e-css')){const st=document.createElement('style');st.id='nkf1e-css';st.textContent=CSS;document.head.appendChild(st)}
const root=ref.current;if(!window.gsap){return}if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);let tl,stt,dead=false;
const go=()=>{if(dead)return;tl=build(root);tl.pause(0);if(matchMedia('(prefers-reduced-motion: reduce)').matches){tl.progress(1);return}
if(window.ScrollTrigger)stt=ScrollTrigger.create({trigger:root,start:'top 65%',once:true,onEnter:()=>tl.play(0)});else tl.play(0)};
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>requestAnimationFrame(go));
return()=>{dead=true;tl&&tl.kill();stt&&stt.kill()}},[]);
return <div id="founder"><section id="nkf1e" ref={ref} dangerouslySetInnerHTML={{__html:HTML}}></section></div>}
window.Founder1e=Founder1e;
})();
