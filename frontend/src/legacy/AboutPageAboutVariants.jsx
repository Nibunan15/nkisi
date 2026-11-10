/* Converted verbatim from ui_kits/website/AboutPageAboutVariants.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
const {Button,Badge}=window.NKisiDesignSystem_91614a;
const W=1280,H=800;
const eb={font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'};
const sec={position:'relative',width:W,height:H,overflow:'hidden',background:'var(--ink-950)',boxSizing:'border-box'};
const mono={font:'700 14px/1 var(--font-mono)',color:'var(--fg-accent)'};
const HEAD='We are a leading consulting firm in India under startups.';
const P=['N’kisi Global Consulting is a transformation-driven consulting firm focused on enhancing people, performance, and organizational excellence. We specialize in leadership development, corporate training, HR consulting, business strategy, and experiential learning solutions.','Our approach combines strategic thinking, behavioral science, and practical business insights to help organizations, professionals, and institutions achieve sustainable growth and measurable impact.','With a strong commitment towards transformation and performance excellence, we empower individuals and organizations to adapt, lead, and thrive in an evolving business environment.'];
const VISION='To become a globally recognized consulting and transformation partner that empowers organizations and individuals to achieve excellence through strategic thinking, leadership, and human potential development.';
const MISSION=['Drive organizational growth through innovative consulting and performance-driven learning solutions.','Develop leaders, teams, and professionals with the mindset, skills, and execution capabilities the modern business world needs.','Bridge the gap between knowledge, strategy, and real-world execution through transformational interventions.','Create sustainable impact by enabling people and organizations to perform at their highest potential.'];
const icoC={};const Ico=({n,s=16})=>{const key=n+s;if(!(key in icoC)){const k=n.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join('');const ic=window.lucide&&lucide.icons&&lucide.icons[k];icoC[key]=ic?lucide.createElement(ic).outerHTML.replace(/width="24"/,'width="'+s+'"').replace(/height="24"/,'height="'+s+'"'):''}return <span style={{width:s,height:s,display:'inline-flex',flex:'none'}} dangerouslySetInnerHTML={{__html:icoC[key]}}></span>};
const IcoBox=({n,s=20,b=44})=><span style={{width:b,height:b,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-subtle)',color:'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)'}}><Ico n={n} s={s}/></span>;
function usePtr(){const ref=React.useRef();const [p,setP]=React.useState({x:0,y:0,on:false});return [ref,p,{onPointerMove:e=>{const r=ref.current.getBoundingClientRect();setP({x:((e.clientX-r.left)/r.width-.5)*2,y:((e.clientY-r.top)/r.height-.5)*2,on:true})},onPointerLeave:()=>setP({x:0,y:0,on:false})}];}
function useAuto(n,ms,hold){const [a,setA]=React.useState(0);React.useEffect(()=>{if(hold)return;const id=setInterval(()=>setA(x=>(x+1)%n),ms);return()=>clearInterval(id)},[hold,n,ms]);return [a,setA];}
const AP_DOTS=Array.from({length:34},(_,i)=>({l:(i*37.3)%100,d:(i*1.37)%9,s:6+(i*2.3)%8,z:1+(i%3)}));
const Ambient=()=><div aria-hidden="true" style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden'}}>
<style>{'@keyframes apIn{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}@keyframes apFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}@keyframes apRise{from{transform:translateY(0);opacity:0}15%{opacity:.8}to{transform:translateY(-820px);opacity:0}}@keyframes apSweep{from{transform:translateX(-40%) skewX(-18deg)}to{transform:translateX(260%) skewX(-18deg)}}@keyframes apGlow{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:.9;transform:scale(1.12)}}@keyframes apFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}'}</style>
<div style={{position:'absolute',right:'8%',top:'18%',width:620,height:620,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.13),transparent 70%)',animation:'apGlow 7s ease-in-out infinite'}}></div>
<div style={{position:'absolute',top:0,bottom:0,left:0,width:'28%',background:'linear-gradient(90deg,transparent,rgba(68,224,226,.05),transparent)',animation:'apSweep 9s linear infinite'}}></div>
{AP_DOTS.map((d,i)=><span key={i} style={{position:'absolute',left:d.l+'%',bottom:-10,width:d.z+1,height:d.z+1,background:'#44E0E2',boxShadow:'0 0 8px #44E0E2',animation:`apRise ${d.s}s ${d.d}s linear infinite`}}></span>)}
</div>;
const In=({d=0,children,style})=><div style={{animation:`apIn .9s ${d}s cubic-bezier(.2,.8,.2,1) both`,...style}}>{children}</div>;
const Tabs3=({items,a,set})=><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{items.map((l,i)=><button key={l} onClick={()=>set(i)} style={{all:'unset',cursor:'pointer',padding:'10px 14px',whiteSpace:'nowrap',border:'1px solid '+(a===i?'var(--teal-400)':'var(--border-1)'),background:a===i?'var(--accent-subtle)':'transparent',color:a===i?'var(--fg-1)':'var(--fg-3)',font:'600 14px/1 var(--font-sans)',display:'flex',gap:8}}><span style={{fontFamily:'var(--font-mono)',color:'var(--fg-accent)'}}>0{i+1}</span>{l}</button>)}</div>;
const MissionList=({size=15})=><ol style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:12}}>{MISSION.map((m,i)=><li key={i} style={{display:'grid',gridTemplateColumns:'30px minmax(0,1fr)',gap:8,color:'var(--fg-2)',fontSize:size,lineHeight:1.5}}><span style={{...mono,fontSize:13,paddingTop:3}}>0{i+1}</span>{m}</li>)}</ol>;

/* 1a — Rotating triangular prism: Who we are · Vision · Mission */
const FACES=[['Who we are','users'],['Our vision','eye'],['Our mission','target']];
function ApPrism(){const [hold,setHold]=React.useState(false);const [a,setA]=useAuto(3,4800,hold);const [ref,p,on]=usePtr();const turns=React.useRef(0);const last=React.useRef(0);
if(a!==last.current){const d=((a-last.current)%3+3)%3;turns.current+=d===2?-1:d;last.current=a}
const FW=560,FH=500,AP=FW/(2*Math.tan(Math.PI/3));
const face=(i,body)=><div key={i} style={{position:'absolute',inset:0,transform:`rotateY(${i*120}deg) translateZ(${AP}px)`,backfaceVisibility:'hidden',background:'var(--surface-1)',border:'1px solid '+(a===i?'var(--teal-400)':'var(--border-1)'),padding:40,boxSizing:'border-box',display:'flex',flexDirection:'column',gap:18,overflow:'hidden'}}>
<img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{position:'absolute',right:-50,bottom:-60,width:240,opacity:.07}}/>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><IcoBox n={FACES[i][1]}/><span style={mono}>0{i+1} / 03</span></div><span style={{font:'var(--text-h2)',color:'var(--fg-1)'}}>{FACES[i][0]}</span>{body}</div>;
return <section ref={ref} {...on} style={{...sec,display:'grid',gridTemplateColumns:'440px minmax(0,1fr)',gap:40,padding:'80px 96px',alignItems:'center'}}>
<Ambient/>
<div style={{display:'flex',flexDirection:'column',gap:24}}><In><span style={eb}>About us</span></In><In d={.12}><h2 style={{margin:0,font:'var(--text-display)',fontSize:48,lineHeight:1.06,color:'var(--fg-1)',textWrap:'balance'}}>{HEAD}</h2></In>
<In d={.26}><p style={{margin:0,color:'var(--fg-2)',font:'var(--text-body-lg)'}}>{P[1]}</p></In>
<In d={.4}><Tabs3 items={FACES.map(f=>f[0])} a={a} set={i=>{setHold(true);setA(i)}}/></In></div>
<div onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} style={{position:'relative',height:600,perspective:1800,animation:'apIn 1.2s .2s cubic-bezier(.2,.8,.2,1) both, apFloat 6s 1.4s ease-in-out infinite'}}>
<div style={{position:'absolute',left:'50%',bottom:10,width:520,height:60,marginLeft:-260,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.2),transparent)'}}></div>
<div style={{position:'absolute',left:'50%',top:'50%',width:FW,height:FH,margin:`${-FH/2}px ${-FW/2}px`,transformStyle:'preserve-3d',transform:`translateZ(${-AP}px) rotateX(${-4-p.y*6}deg) rotateY(${-turns.current*120+p.x*14}deg)`,transition:'transform 1.1s cubic-bezier(.65,0,.25,1)'}}>
{face(0,<><p style={{margin:0,color:'var(--fg-2)',fontSize:16.5,lineHeight:1.6}}>{P[0]}</p><p style={{margin:0,color:'var(--fg-3)',fontSize:15,lineHeight:1.55}}>{P[2]}</p></>)}
{face(1,<p style={{margin:0,font:'var(--text-h3)',fontSize:24,lineHeight:1.4,color:'var(--fg-1)'}}>{VISION}</p>)}
{face(2,<MissionList/>)}
</div></div></section>;}

/* 1b — Exploded glass layers */
function ApLayers(){const [ref,p,on]=usePtr();const [open,setOpen]=React.useState(false);const ex=open?1:0;
const L=[['Our mission',<MissionList size={14}/>,'target'],['Our vision',<p style={{margin:0,color:'var(--fg-1)',fontSize:17,lineHeight:1.5}}>{VISION}</p>,'eye'],['Who we are',<p style={{margin:0,color:'var(--fg-2)',fontSize:16,lineHeight:1.6}}>{P[0]}</p>,'users']];
return <section ref={ref} {...on} style={{...sec,display:'grid',gridTemplateColumns:'420px minmax(0,1fr)',gap:40,padding:'80px 96px',alignItems:'center'}}>
<Ambient/>
<div style={{display:'flex',flexDirection:'column',gap:24,zIndex:2}}><In><span style={eb}>About us</span></In><In d={.12}><h2 style={{margin:0,font:'var(--text-display)',fontSize:48,lineHeight:1.06,color:'var(--fg-1)',textWrap:'balance'}}>{HEAD}</h2></In><In d={.26}><p style={{margin:0,color:'var(--fg-2)',font:'var(--text-body-lg)'}}>{P[1]}</p></In>
<In d={.4} style={{display:'flex',gap:12,alignItems:'center'}}><Button onClick={()=>setOpen(o=>!o)}>{open?'Stack layers':'Explode layers'}</Button><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>or hover the stack</span></In></div>
<div onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} style={{position:'relative',height:640,perspective:1700,animation:'apIn 1.2s .2s cubic-bezier(.2,.8,.2,1) both, apFloat 7s 1.4s ease-in-out infinite'}}>
<div style={{position:'absolute',left:'50%',top:'50%',width:500,height:340,margin:'-170px -250px',transformStyle:'preserve-3d',transform:`rotateX(${50-p.y*8-ex*12}deg) rotateZ(${-28+p.x*10}deg)`,transition:'transform .9s cubic-bezier(.2,.8,.2,1)'}}>
{L.map(([t,body,ic],i)=><div key={t} style={{position:'absolute',inset:0,boxSizing:'border-box',padding:28,display:'flex',flexDirection:'column',gap:14,background:i===2?'rgba(22,36,38,.96)':'rgba(16,28,30,.72)',backdropFilter:'blur(6px)',border:'1px solid '+(i===2?'var(--teal-400)':'rgba(68,224,226,.35)'),boxShadow:'0 30px 60px rgba(0,0,0,.45)',transform:`translateZ(${i*(26+ex*130)}px)`,animation:open?'none':`apIn 1s ${.3+i*.18}s cubic-bezier(.2,.8,.2,1) both`,transition:`transform .9s ${i*.06}s cubic-bezier(.2,.8,.2,1)`}}>
<div style={{display:'flex',alignItems:'center',gap:12}}><IcoBox n={ic} b={38} s={18}/><span style={{font:'var(--text-h3)',color:'var(--fg-1)'}}>{t}</span><span style={{...mono,marginLeft:'auto'}}>L{3-i}</span></div>
<div style={{opacity:i===2||open?1:.25,transition:'opacity .6s'}}>{body}</div></div>)}
<div style={{position:'absolute',inset:-40,border:'1px dashed rgba(68,224,226,.2)',transform:'translateZ(-30px)'}}></div>
</div></div></section>;}

/* 1c — Book: pages turn in 3D */
const PAGES=[['Who we are',P[0]],['Our approach',P[1]],['Our commitment',P[2]],['Our vision',VISION]];
function ApBook(){const [hold,setHold]=React.useState(false);const [a,setA]=useAuto(PAGES.length+1,3600,hold);const [ref,p,on]=usePtr();
const PW=440,PH=540;
return <section ref={ref} {...on} style={{...sec,display:'flex',flexDirection:'column',alignItems:'center',padding:'56px 96px',gap:24}}>
<Ambient/>
<In style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12,textAlign:'center',position:'relative'}}><span style={eb}>About us</span><h2 style={{margin:0,font:'var(--text-display)',fontSize:40,lineHeight:1.08,color:'var(--fg-1)',maxWidth:820}}>{HEAD}</h2></In>
<div onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} style={{position:'relative',width:PW*2,height:PH,perspective:2200,cursor:'pointer',animation:'apIn 1.2s .25s cubic-bezier(.2,.8,.2,1) both, apFloat 8s 1.5s ease-in-out infinite'}} onClick={()=>setA(x=>(x+1)%(PAGES.length+1))}>
<div style={{position:'absolute',inset:0,transformStyle:'preserve-3d',transform:`rotateX(${16-p.y*6}deg) rotateY(${p.x*8}deg)`,transition:'transform .4s ease-out'}}>
<div style={{position:'absolute',left:0,top:0,width:PW,height:PH,background:'#0F1C1E',border:'1px solid var(--border-1)',boxSizing:'border-box',padding:40,display:'flex',flexDirection:'column',gap:18}}><span style={eb}>Our mission</span><MissionList size={15}/></div>
<div style={{position:'absolute',left:PW,top:0,width:PW,height:PH,background:'#0F1C1E',border:'1px solid var(--border-1)',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center'}}><img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{width:230,opacity:.9}}/></div>
{PAGES.map(([t,txt],i)=>{const turned=i<a;return <div key={t} style={{position:'absolute',left:PW,top:0,width:PW,height:PH,transformOrigin:'left center',transformStyle:'preserve-3d',transform:`rotateY(${turned?-180:0}deg) translateZ(${turned?i*1.5:(PAGES.length-i)*1.5}px)`,transition:'transform 1.2s cubic-bezier(.65,0,.25,1)',zIndex:turned?i:PAGES.length-i}}>
<div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',WebkitBackfaceVisibility:'hidden',background:'var(--surface-1)',border:'1px solid var(--teal-400)',boxSizing:'border-box',padding:44,display:'flex',flexDirection:'column',gap:20,boxShadow:'inset 30px 0 40px -30px rgba(0,0,0,.6)'}}><span style={mono}>0{i+1} / 0{PAGES.length}</span><span style={{font:'var(--text-h2)',color:'var(--fg-1)'}}>{t}</span><p style={{margin:0,color:'var(--fg-2)',fontSize:i===3?21:18,lineHeight:1.6,font:i===3?'var(--text-h3)':undefined}}>{txt}</p><span style={{marginTop:'auto',font:'var(--text-label)',color:'var(--fg-3)'}}>Click to turn →</span></div>
<div style={{position:'absolute',inset:0,backfaceVisibility:'hidden',WebkitBackfaceVisibility:'hidden',transform:'rotateY(180deg)',background:'#132325',border:'1px solid var(--border-1)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'inset -30px 0 40px -30px rgba(0,0,0,.6)'}}><img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{width:150,opacity:.12}}/></div></div>})}
</div></div>
<div style={{display:'flex',gap:6}}>{Array.from({length:PAGES.length+1}).map((_,i)=><button key={i} onClick={()=>{setHold(true);setA(i)}} style={{all:'unset',cursor:'pointer',width:36,height:4,background:i===a?'var(--teal-400)':'var(--border-1)'}}></button>)}</div>
</section>;}

const apArrow={all:'unset',cursor:'pointer',width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-2)',color:'var(--fg-1)',font:'600 16px var(--font-sans)',background:'rgba(7,14,15,.6)'};
/* 1d v2 — Mission orbit: pillars orbit the parrot core, energy beam to the active one */
function useClock(){const [t,setT]=React.useState(0);React.useEffect(()=>{let id,to,dead=false;const t0=performance.now();const step=()=>{if(dead)return;setT(performance.now()-t0);let done=false;id=requestAnimationFrame(()=>{done=true;clearTimeout(to);step()});to=setTimeout(()=>{if(!done){cancelAnimationFrame(id);step()}},60)};step();return()=>{dead=true;cancelAnimationFrame(id);clearTimeout(to)}},[]);return t;}
const MI_ICONS=['trending-up','users','git-merge','sparkles'];
const MI_TITLES=['Drive growth','Develop leaders','Bridge the gap','Sustain impact'];
function ApTurntable({fluid}){const fx=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const [hold,setHold]=React.useState(false);const [a,setA]=useAuto(4,4200,hold);const [ref,p,on]=usePtr();const t=useClock();
const ang=React.useRef(0),lt=React.useRef(0);{const base=-a*90;const cur=ang.current;const tg=base+360*Math.round((cur-base)/360);const dt=Math.max(0,t-lt.current);lt.current=t;ang.current=dt>200?tg:cur+(tg-cur)*(1-Math.pow(.012,dt/1000));}
const RX=300,RZ=150,CX=380,CY=360;const prog=hold?0:((t%4200)/4200);
const pos=MISSION.map((_,i)=>{const th=(i*90+ang.current+p.x*14)*Math.PI/180;const x=Math.sin(th)*RX,z=Math.cos(th)*RZ;const d=(z+RZ)/(2*RZ);return {i,x,z,d}});
const act=pos[a];
return <section ref={ref} {...on} id={fluid?'about':undefined} className={fluid?'ap-sec':undefined} style={{...sec,...(fluid?{width:'100%',height:'auto',minHeight:H,padding:'96px '+fx}:{padding:'72px 96px'}),display:'grid',gridTemplateColumns:'430px minmax(0,1fr)',gap:20,alignItems:'center'}}>
<Ambient/>
<div className={fluid?'ap-copy':undefined} style={{display:'flex',flexDirection:'column',gap:22,zIndex:2}}>
<In><span style={eb}>About us · Our mission</span></In>
<In d={.12}><h2 style={{margin:0,font:'var(--text-display)',fontSize:42,lineHeight:1.06,color:'var(--fg-1)',textWrap:'balance'}}>{HEAD}</h2></In>
<In d={.26}><div style={{position:'relative',overflow:'hidden',padding:'26px 26px 24px',background:'linear-gradient(160deg,rgba(68,224,226,.10),rgba(68,224,226,.02) 60%),var(--surface-1)',border:'1px solid rgba(68,224,226,.28)',display:'flex',flexDirection:'column',gap:12}}><span aria-hidden="true" style={{position:'absolute',right:14,top:-26,font:'700 150px/1 var(--font-display, serif)',color:'rgba(68,224,226,.12)',pointerEvents:'none'}}>“</span><span style={{display:'flex',gap:10,alignItems:'center'}}><IcoBox n="eye" b={32} s={15}/><span style={{...eb,fontSize:11,whiteSpace:'nowrap'}}>Our vision</span></span><p style={{position:'relative',margin:0,color:'var(--fg-1)',font:'500 17px/1.55 var(--font-sans)',textWrap:'pretty'}}>{VISION}</p></div></In>
<In d={.4}><div style={{display:'flex',flexDirection:'column'}}>{MISSION.map((m,i)=>{const on=i===a;return <button key={i} onMouseEnter={()=>{setHold(true);setA(i)}} onMouseLeave={()=>setHold(false)} onClick={()=>setA(i)} style={{all:'unset',cursor:'pointer',position:'relative',display:'grid',gridTemplateColumns:'40px minmax(0,1fr) auto',gap:14,alignItems:'start',padding:on?'16px 14px':'14px 14px',borderTop:'1px solid var(--border-1)',background:on?'rgba(68,224,226,.06)':'transparent',transition:'background .3s, padding .3s'}}>
<span style={{width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',background:on?'#44E0E2':'var(--accent-subtle)',color:on?'#04191A':'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)',transition:'background .3s,color .3s'}}><Ico n={MI_ICONS[i]} s={17}/></span>
<span style={{display:'flex',flexDirection:'column',gap:6}}><span style={{font:'600 18px/1.25 var(--font-sans)',paddingTop:7,color:on?'var(--fg-1)':'var(--fg-2)',transition:'color .3s'}}>{MI_TITLES[i]}</span>
<span style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows .5s cubic-bezier(.2,.8,.2,1)'}}><span style={{overflow:'hidden',color:'var(--fg-2)',fontSize:14.5,lineHeight:1.5}}>{m}</span></span></span>
<span style={{...mono,fontSize:12,paddingTop:10,color:on?'var(--fg-accent)':'var(--fg-3)'}}>0{i+1}</span>{on&&<span style={{position:'absolute',left:0,top:-1,height:2,width:(hold?100:prog*100)+'%',background:'var(--teal-400)',boxShadow:'0 0 10px rgba(68,224,226,.6)'}}></span>}</button>})}</div></In></div>
<div className={fluid?'ap-orbit':undefined} style={{position:'relative',width:760,height:660,justifySelf:fluid?'end':'auto',animation:'apIn 1.2s .2s cubic-bezier(.2,.8,.2,1) both'}}>
<span key={'w'+a} aria-hidden="true" style={{position:'absolute',left:CX-200,top:CY-330,width:400,textAlign:'center',font:'700 260px/1 var(--font-display, serif)',color:'transparent',WebkitTextStroke:'1px rgba(68,224,226,.16)',animation:'apFade .8s ease-out',pointerEvents:'none'}}>0{a+1}</span>
<svg width="760" height="660" style={{position:'absolute',left:0,top:0,overflow:'visible',pointerEvents:'none'}}>
<defs><radialGradient id="apCore"><stop offset="0" stopColor="rgba(68,224,226,.35)"/><stop offset="1" stopColor="rgba(68,224,226,0)"/></radialGradient><linearGradient id="apBeam" x1="0" x2="1"><stop offset="0" stopColor="#44E0E2" stopOpacity=".9"/><stop offset="1" stopColor="#44E0E2" stopOpacity=".1"/></linearGradient></defs>
<ellipse cx={CX} cy={CY+150} rx={RX+70} ry={RZ*.55+30} fill="url(#apCore)" opacity=".5"/>
{[0,1,2].map(k=><ellipse key={k} cx={CX} cy={CY+150} rx={RX+20+k*36} ry={(RZ+20+k*36)*.42} fill="none" stroke="rgba(68,224,226,.28)" strokeWidth="1" strokeDasharray={k===1?'3 9':'none'} strokeDashoffset={-t/40} opacity={1-k*.28}/>)}
{(()=>{const x0=CX,y0=CY-110,cx1=CX+act.x*.4,cy1=CY-20,x2=CX+act.x,y2=CY+60+act.z*.42-150-24;const pt=u=>[(1-u)*(1-u)*x0+2*(1-u)*u*cx1+u*u*x2,(1-u)*(1-u)*y0+2*(1-u)*u*cy1+u*u*y2];return <g opacity={act.d}><path d={`M ${x0} ${y0} Q ${cx1} ${cy1} ${x2} ${y2}`} fill="none" stroke="url(#apBeam)" strokeWidth="2" strokeDasharray="6 8" strokeDashoffset={-t/18}/>{[0,.33,.66].map(o=>{const u=((t/1400)+o)%1;const [px,py]=pt(u);return <circle key={o} cx={px} cy={py} r={3.5-u*1.5} fill="#E6FFFF" style={{filter:'drop-shadow(0 0 6px #44E0E2)'}} opacity={1-u*.6}/>})}</g>})()}
{pos.map(({i,x,z,d})=><circle key={'n'+i} cx={CX+x} cy={CY+150+z*.42} r={i===a?6:3.5} fill={i===a?'#44E0E2':'rgba(68,224,226,.5)'} style={{filter:i===a?'drop-shadow(0 0 10px #44E0E2)':'none'}} opacity={.35+d*.65}/>)}
</svg>
{[...pos].sort((x,y)=>x.z-y.z).map(({i,x,z,d})=>{const on=i===a;const sc=.62+d*.42;const bob=Math.sin(t/900+i*1.7)*6;
return <React.Fragment key={i}>
{i===pos.slice().sort((x,y)=>x.z-y.z)[2].i&&<div style={{position:'absolute',left:CX-110,top:CY-290,width:220,height:240,display:'flex',alignItems:'center',justifyContent:'center',zIndex:20,perspective:800,transform:`translate(${p.x*-14}px,${Math.sin(t/1400)*10+p.y*-10}px)`}}>
<span style={{position:'absolute',width:200,height:200,borderRadius:'50%',border:'1px solid rgba(68,224,226,.45)',transform:`scale(${1+((t/2200)%1)*.6})`,opacity:1-((t/2200)%1)}}></span>
<span style={{position:'absolute',width:200,height:200,borderRadius:'50%',border:'1px solid rgba(68,224,226,.45)',transform:`scale(${1+(((t+1100)/2200)%1)*.6})`,opacity:1-(((t+1100)/2200)%1)}}></span>
<img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="N'kisi" style={{width:190,position:'relative',transform:`rotateY(${p.x*18}deg) rotateX(${p.y*-10}deg)`,transition:'transform .3s ease-out',filter:'drop-shadow(0 0 36px rgba(68,224,226,.45))'}}/></div>}
<div onClick={()=>{setHold(true);setA(i)}} style={{position:'absolute',left:CX+x-115,top:CY+60+z*.42-150+bob-(on?24:0),width:230,height:250,boxSizing:'border-box',padding:20,display:'flex',flexDirection:'column',gap:12,transform:`perspective(1200px) scale(${sc}) rotateY(${-x/RX*32}deg)`,transformOrigin:'50% 100%',zIndex:Math.round(d*10)+(z>0?21:0),opacity:.25+d*.75,filter:d<.4?'blur(1.5px)':'none',background:on?'var(--surface-1)':'#0F1C1E',border:'1px solid '+(on?'var(--teal-400)':'var(--border-1)'),boxShadow:on?'0 0 60px rgba(68,224,226,.28), 0 30px 60px rgba(0,0,0,.5)':'0 20px 40px rgba(0,0,0,.45)',cursor:'pointer',overflow:'hidden',transition:'background .4s, border-color .4s, box-shadow .4s, top .5s'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><IcoBox n={MI_ICONS[i]} b={40} s={18}/>
<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="var(--border-1)" strokeWidth="2"/>{on&&<circle cx="20" cy="20" r="16" fill="none" stroke="#44E0E2" strokeWidth="2" strokeDasharray={100.5} strokeDashoffset={100.5*(1-(hold?1:prog))} transform="rotate(-90 20 20)"/>}<text x="20" y="24.5" textAnchor="middle" fill={on?'#44E0E2':'#6B7F81'} style={{font:'700 12px var(--font-mono)'}}>0{i+1}</text></svg></div>
<span style={{font:'var(--text-h3)',fontSize:20,color:'var(--fg-1)'}}>{MI_TITLES[i]}</span>
<span style={{color:on?'var(--fg-2)':'var(--fg-3)',fontSize:13.5,lineHeight:1.5}}>{MISSION[i]}</span>
{on&&<span style={{position:'absolute',inset:0,pointerEvents:'none',background:'linear-gradient(115deg,transparent 30%,rgba(255,255,255,.08) 45%,transparent 60%)',backgroundSize:'250% 100%',backgroundPosition:`${100-((t/30)%250)}% 0`}}></span>}
</div></React.Fragment>})}
<div style={{position:'absolute',right:0,bottom:0,display:'flex',gap:10,alignItems:'center',zIndex:40}}><button onClick={()=>{setHold(true);setA((a+3)%4)}} aria-label="Previous mission" style={apArrow}>←</button><span style={{...mono,minWidth:64,textAlign:'center',whiteSpace:'nowrap'}}>0{a+1} / 04</span><button onClick={()=>{setHold(true);setA((a+1)%4)}} aria-label="Next mission" style={apArrow}>→</button></div>
</div></section>;}

window.ApTurntable=ApTurntable;window.ABOUTPAGE_ABOUT_VARIANTS=[['1a','Rotating prism',ApPrism,'A 3D triangular prism with three faces — Who we are · Our vision · Our mission. Auto-rotates; tabs jump; tilts with the cursor.'],['1b','Exploded layers',ApLayers,'Who we are, Vision and Mission as stacked glass layers in isometric 3D — hover (or the button) explodes them apart in depth.'],['1c','Turning book',ApBook,'The story as a 3D book: pages turn to Who we are → Approach → Commitment → Vision, revealing the mission spread. Click to turn.'],['1d','Mission orbit',ApTurntable,'Four mission cards orbit the glowing parrot core on a 3D ellipse with depth blur; an animated energy beam links the parrot to the active mission. Auto-advances with a progress ring; hover the list or a card to pick.']];
})();
