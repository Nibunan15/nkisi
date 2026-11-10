/* Converted verbatim from ui_kits/website/HomeFounderVariants.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
const {Button,Badge}=window.NKisiDesignSystem_91614a;
const W=1280,H=800;
const eb={font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'};
const sec={position:'relative',width:W,height:H,overflow:'hidden',background:'var(--ink-950)',boxSizing:'border-box'};
const mono={font:'700 14px/1 var(--font-mono)',color:'var(--fg-accent)'};
const icoC={};const Ico=({n,s=16})=>{const key=n+s;if(!(key in icoC)){const k=n.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join('');const ic=window.lucide&&lucide.icons&&lucide.icons[k];icoC[key]=ic?lucide.createElement(ic).outerHTML.replace(/width="24"/,'width="'+s+'"').replace(/height="24"/,'height="'+s+'"'):''}return <span style={{width:s,height:s,display:'inline-flex',flex:'none'}} dangerouslySetInnerHTML={{__html:icoC[key]}}></span>};
const IcoBox=({n,s=20,b=44})=><span style={{width:b,height:b,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-subtle)',color:'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)'}}><Ico n={n} s={s}/></span>;
function useT(){const [t,setT]=React.useState(0);React.useEffect(()=>{let id,to,dead=false;const t0=performance.now();const step=()=>{if(dead)return;setT(performance.now()-t0);let done=false;id=requestAnimationFrame(()=>{done=true;clearTimeout(to);step()});to=setTimeout(()=>{if(!done){cancelAnimationFrame(id);step()}},60)};step();return()=>{dead=true;cancelAnimationFrame(id);clearTimeout(to)}},[]);return t;}
function usePtr(){const ref=React.useRef();const [p,setP]=React.useState({x:0,y:0,on:false});const on={onPointerMove:e=>{const r=ref.current.getBoundingClientRect();setP({x:((e.clientX-r.left)/r.width-.5)*2,y:((e.clientY-r.top)/r.height-.5)*2,on:true})},onPointerLeave:()=>setP({x:0,y:0,on:false})};return [ref,p,on];}
const Photo=({style})=><div style={{position:'relative',background:'var(--surface-2, #1A2A2C)',overflow:'hidden',...style}}><image-slot id="founder-photo" placeholder="Drop Ajith's photo here"></image-slot></div>;
const QUOTE='“Clarity in thinking creates excellence in execution.”';
const CREDS=[['award','IIPE, Canada','Design & Facilitation of Experiential Learning'],['badge-check','Life Academy','Certified “GOAL” facilitator'],['graduation-cap','Knowledge Business School','MBA — Finance & Marketing'],['school','PSG College of Technology','Proud alumnus'],['trophy','Tamil Nadu Startup Award 2023','Title Winner']];
const NameBlock=({size=56})=><div style={{display:'flex',flexDirection:'column',gap:12}}><span style={eb}>About the founder</span><h2 style={{margin:0,font:'var(--text-display)',fontSize:size,lineHeight:1.02,letterSpacing:'var(--ls-display)',color:'var(--fg-1)'}}>Ajith Selvaraju</h2><span style={{font:'var(--text-label)',color:'var(--fg-3)',letterSpacing:'.1em'}}>FOUNDER &amp; CEO</span></div>;
const Ctas=({onMore,onWork})=><div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button onClick={onMore}>Read founder's profile</Button><Button variant="secondary" onClick={onWork}>Work with Ajith</Button></div>;

/* 1a — Credentials orbit the portrait in 3D */
function HfOrbit(){const t=useT();const [ref,p,on]=usePtr();
return <section ref={ref} {...on} style={{...sec,display:'grid',gridTemplateColumns:'640px minmax(0,1fr)',gap:40,padding:'72px 96px',alignItems:'center'}}>
<div style={{position:'relative',height:640,perspective:1400}}>
<div style={{position:'absolute',inset:0,transformStyle:'preserve-3d',transform:`rotateX(${-p.y*6}deg) rotateY(${p.x*10}deg)`,transition:'transform .3s ease-out'}}>
<div style={{position:'absolute',left:'50%',top:'50%',width:620,height:150,margin:'-75px -310px',borderRadius:'50%',border:'1px solid rgba(68,224,226,.25)',transform:'translateY(40px) rotateX(72deg)'}}></div>
{CREDS.map(([ic,t1,t2],i)=>{const a=t*.00035+i*Math.PI*2/CREDS.length;const z=Math.sin(a);const x=Math.cos(a)*300,y=z*60+40;const s=.78+(z+1)*.14;return <div key={t1} style={{position:'absolute',left:'50%',top:'50%',width:250,marginLeft:-125,marginTop:-32,transform:`translate(${x}px,${y}px) scale(${s})`,zIndex:z>0?5:1,opacity:.35+(z+1)*.33,filter:z>0?'none':'blur(1px)',display:'flex',alignItems:'center',gap:12,padding:'12px 14px',background:'rgba(20,32,34,.92)',border:'1px solid '+(z>.6?'var(--teal-400)':'var(--border-1)'),boxShadow:'0 14px 30px rgba(0,0,0,.4)'}}><IcoBox n={ic} b={38} s={18}/><span style={{display:'flex',flexDirection:'column',gap:3,minWidth:0}}><span style={{color:'var(--fg-1)',fontWeight:700,fontSize:14,lineHeight:1.2}}>{t1}</span><span style={{color:'var(--fg-3)',fontSize:12,lineHeight:1.25}}>{t2}</span></span></div>})}
<div style={{position:'absolute',left:'50%',top:'50%',width:300,height:390,margin:'-205px -150px',zIndex:3,transform:`translateY(${Math.sin(t/1600)*8}px)`}}>
<div style={{position:'absolute',inset:-14,border:'1px solid var(--teal-400)',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))',opacity:.6}}></div>
<Photo style={{position:'absolute',inset:0,clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))'}}/>
<span style={{position:'absolute',left:-18,bottom:28,padding:'10px 14px',background:'var(--teal-400)',color:'#04191A',font:'700 13px/1 var(--font-sans)',letterSpacing:'.04em',boxShadow:'0 10px 30px rgba(68,224,226,.3)'}}>12,000+ individuals</span></div>
</div></div>
<div style={{display:'flex',flexDirection:'column',gap:24}}><NameBlock/>
<blockquote style={{margin:0,padding:'20px 0 0',borderTop:'1px solid var(--border-1)',font:'var(--text-h2)',color:'var(--fg-1)',textWrap:'balance'}}>{QUOTE}</blockquote>
<p style={{margin:0,font:'var(--text-body-lg)',color:'var(--fg-2)'}}>In 2020 he founded the N’kisi Institute of Training — now N’kisi Global Consulting — and has worked with over 12,000+ individuals through workshops, consulting and capability-building programs across India.</p><Ctas onMore={onMore} onWork={onWork}/></div>
</section>;}

/* 1b — Journey as rising 3D steps */
const STEPS=[['school','Alumnus','PSG College of Technology'],['graduation-cap','MBA, Finance & Marketing','Knowledge Business School'],['briefcase','Industry experience','NLC India, Ninjacart, JSW Steels, Innovalus, CII, City Union Bank, Amazon India'],['flag','2020 · Founded','N’kisi Institute of Training'],['trophy','2023 · Title Winner','Tamil Nadu Startup Award'],['sparkles','Today','N’kisi Global Consulting — 12,000+ individuals reached']];
function HfCube({x,y,w,h,on,n}){const f={position:'absolute',boxSizing:'border-box',border:'1px solid rgba(68,224,226,'+(on?.8:.3)+')',transition:'all .9s cubic-bezier(.2,.8,.2,1)'};
return <div style={{position:'absolute',left:x,top:y,width:w,height:w,transformStyle:'preserve-3d'}}>
<div style={{...f,left:0,top:w,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:on?'#1E6E70':'#163F41'}}></div>
<div style={{...f,left:w,top:0,width:h,height:w,transformOrigin:'left',transform:'rotateY(-90deg)',background:on?'#175A5C':'#0F3233'}}></div>
<div style={{...f,left:0,top:0,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:'#0B2526'}}></div>
<div style={{...f,left:0,top:0,width:h,height:w,transformOrigin:'left',transform:'rotateY(-90deg)',background:'#0B2526'}}></div>
<div style={{...f,left:0,top:0,width:w,height:w,transform:`translateZ(${h}px)`,background:on?'var(--teal-400)':'#1D4547',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:on?'0 0 40px rgba(68,224,226,.5)':'none'}}><span style={{transform:'rotateZ(40deg)',font:'700 22px/1 var(--font-mono)',color:on?'#04191A':'var(--fg-2)'}}>{n}</span></div></div>;}
function HfSteps(){const [a,setA]=React.useState(0);const [hold,setHold]=React.useState(false);const [ref,p,on]=usePtr();const [up,setUp]=React.useState(false);
React.useEffect(()=>{const t=setTimeout(()=>setUp(true),200);return()=>clearTimeout(t)},[]);
React.useEffect(()=>{if(hold)return;const id=setInterval(()=>setA(x=>(x+1)%STEPS.length),3200);return()=>clearInterval(id)},[hold]);
const s=STEPS[a];
return <section ref={ref} {...on} style={{...sec,display:'grid',gridTemplateColumns:'470px minmax(0,1fr)',gap:20,padding:'72px 96px'}}>
<div style={{display:'flex',flexDirection:'column',gap:24,position:'relative',zIndex:2}}>
<div style={{display:'flex',gap:18,alignItems:'center'}}><Photo style={{width:96,height:112,flex:'none',clipPath:'var(--clip-chamfer-sm)'}}/><NameBlock size={46}/></div>
<blockquote style={{margin:0,font:'var(--text-h3)',color:'var(--fg-2)',fontStyle:'italic'}}>{QUOTE}</blockquote>
<div key={a} style={{marginTop:8,padding:28,background:'var(--surface-1)',border:'1px solid var(--teal-400)',display:'flex',flexDirection:'column',gap:14,animation:'hfFade .55s cubic-bezier(.2,.8,.2,1)'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}><IcoBox n={s[0]}/><span style={mono}>STEP {String(a+1).padStart(2,'0')} / 06</span></div>
<span style={{font:'var(--text-h2)',color:'var(--fg-1)'}}>{s[1]}</span><span style={{color:'var(--fg-2)',fontSize:17,lineHeight:1.5,minHeight:52}}>{s[2]}</span></div>
<div style={{display:'flex',gap:6}}>{STEPS.map((_,i)=><button key={i} onClick={()=>{setHold(true);setA(i)}} style={{all:'unset',cursor:'pointer',flex:1,height:4,background:i<=a?'var(--teal-400)':'var(--border-1)',transition:'background .4s'}}></button>)}</div>
<div style={{marginTop:'auto'}}><Ctas/></div></div>
<div style={{position:'relative',perspective:1600}}>
<div style={{position:'absolute',left:60,top:150,width:640,height:420,transformStyle:'preserve-3d',transform:`rotateX(${58-p.y*6}deg) rotateZ(${-40+p.x*10}deg)`,transition:'transform .4s ease-out',backgroundImage:'linear-gradient(rgba(68,224,226,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(68,224,226,.12) 1px,transparent 1px)',backgroundSize:'40px 40px'}}>
{STEPS.map((_,i)=><div key={i} onMouseEnter={()=>{setHold(true);setA(i)}} onMouseLeave={()=>setHold(false)}><HfCube x={20+i*100} y={150} w={90} h={up?30+i*42+(i===a?24:0):2} on={i===a} n={String(i+1).padStart(2,'0')}/></div>)}
</div>
<span style={{position:'absolute',right:0,bottom:24,font:'var(--text-label)',color:'var(--fg-3)'}}>Hover a step · each level is a milestone</span></div>
</section>;}

/* 1c — Layered 3D portrait card + depth quote */
function HfDepth(){const [ref,p,on]=usePtr();const [k,setK]=React.useState(0);const words=QUOTE.split(' ');
return <section ref={ref} {...on} style={{...sec,display:'grid',gridTemplateColumns:'420px minmax(0,1fr)',gap:80,padding:'80px 96px',alignItems:'center'}}>
<div style={{perspective:1200}}>
<div style={{position:'relative',height:540,transformStyle:'preserve-3d',transform:`rotateX(${-p.y*12}deg) rotateY(${p.x*16}deg)`,transition:p.on?'transform .12s ease-out':'transform .8s cubic-bezier(.2,.8,.2,1)'}}>
<div style={{position:'absolute',inset:0,border:'1px solid var(--teal-400)',transform:'translateZ(-50px) translate(24px,24px)',opacity:.5}}></div>
<Photo style={{position:'absolute',inset:0,border:'1px solid var(--border-1)'}}/>
<div style={{position:'absolute',left:-24,right:40,bottom:32,padding:'18px 20px',background:'rgba(12,22,24,.92)',border:'1px solid var(--border-1)',transform:'translateZ(70px)',display:'flex',flexDirection:'column',gap:4,boxShadow:'0 20px 40px rgba(0,0,0,.45)',pointerEvents:'none'}}><span style={{font:'var(--text-h3)',color:'var(--fg-1)'}}>Ajith Selvaraju</span><span style={{font:'var(--text-label)',color:'var(--fg-3)',letterSpacing:'.08em'}}>FOUNDER &amp; CEO · N'KISI</span></div>
<div style={{position:'absolute',right:-28,top:36,padding:'12px 14px',background:'var(--teal-400)',color:'#04191A',transform:'translateZ(110px)',display:'flex',gap:8,alignItems:'center',font:'700 13px/1.2 var(--font-sans)',boxShadow:'0 16px 36px rgba(68,224,226,.35)',pointerEvents:'none'}}><Ico n="trophy" s={18}/><span>TN Startup Award<br/>2023 · Title Winner</span></div>
<div style={{position:'absolute',left:28,top:-22,padding:'8px 12px',background:'var(--ink-950)',border:'1px solid var(--teal-400)',transform:'translateZ(90px)',...mono,pointerEvents:'none'}}>12,000+ individuals</div>
</div></div>
<div style={{display:'flex',flexDirection:'column',gap:32}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={eb}>About the founder</span><button onClick={()=>setK(x=>x+1)} style={{all:'unset',cursor:'pointer',font:'var(--text-label)',color:'var(--fg-3)'}}>↻ Replay</button></div>
<div style={{perspective:1000}}><p key={k} style={{margin:0,font:'600 60px/1.08 var(--font-display, serif)',letterSpacing:'-.015em',color:'var(--fg-1)',display:'flex',flexWrap:'wrap',columnGap:'.25em',transformStyle:'preserve-3d',transform:`rotateY(${p.x*-8}deg) rotateX(${p.y*6}deg)`,transition:'transform .3s ease-out'}}>{words.map((w,i)=>{const hot=/Clarity|excellence/.test(w);return <span key={i} style={{display:'inline-block',whiteSpace:'nowrap',color:hot?'var(--teal-400)':'var(--fg-1)',transform:`translateZ(${(i%3)*30}px)`,animation:`hfWord .9s ${.15+i*.09}s cubic-bezier(.2,.8,.2,1) both`}}>{w}</span>})}</p></div>
<p style={{margin:0,font:'var(--text-body-lg)',color:'var(--fg-2)',maxWidth:620}}>An internationally certified trainer in Design &amp; Facilitation of Experiential Learning (IIPE, Canada) and a certified GOAL facilitator. He founded N’kisi in 2020 to help people and organizations perform at their highest potential.</p>
<Ctas/></div></section>;}

/* 1d v2 — Credential hand: cards deal out in a 3D arc over the portrait */
const FAN_A=[-34,-17,0,17,34];
function HfFan({fluid,onMore,onWork}){const fx=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const [ref,p,on]=usePtr();const t=useT();const [dealt,setDealt]=React.useState(false);const [a,setA]=React.useState(0);const [hold,setHold]=React.useState(false);const [g,setG]=React.useState({x:50,y:50});
React.useEffect(()=>{setDealt(false);const id=setTimeout(()=>setDealt(true),350);return()=>clearTimeout(id)},[]);
React.useEffect(()=>{if(hold||!dealt)return;const id=setInterval(()=>setA(x=>(x+1)%CREDS.length),3000);return()=>clearInterval(id)},[hold,dealt]);
const replay=()=>{setDealt(false);setTimeout(()=>setDealt(true),500)};
const c=CREDS[a];
return <section ref={ref} {...on} id={fluid?'founder':undefined} className={fluid?'hf-sec':undefined} style={{...sec,...(fluid?{width:'100%',height:'auto',padding:'96px '+fx}:{padding:'56px 96px 56px 40px'}),display:'grid',gridTemplateColumns:'680px minmax(0,1fr)',gap:24,alignItems:'center'}}>
<div className={fluid?'hf-fan':undefined} style={{position:'relative',width:680,height:700,perspective:1600,marginLeft:fluid?-56:0}}>
<div style={{position:'absolute',left:340,top:540,width:620,height:620,margin:-310,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.14),transparent 70%)'}}></div>
<div style={{position:'absolute',inset:0,transformStyle:'preserve-3d',transform:`rotateX(${-p.y*7}deg) rotateY(${p.x*12}deg)`,transition:p.on?'transform .15s ease-out':'transform .8s cubic-bezier(.2,.8,.2,1)'}}>
<svg width="680" height="700" style={{position:'absolute',left:0,top:0,overflow:'visible',transform:'translateZ(-40px)',pointerEvents:'none'}}><path d="M 147 310 A 300 300 0 0 1 533 310" fill="none" stroke="rgba(68,224,226,.22)" strokeDasharray="2 6" strokeWidth="1.5"/></svg>
{CREDS.map(([ic,t1,t2],i)=>{const act=dealt&&i===a;const ang=dealt?FAN_A[i]:0;
return <div key={t1} onMouseEnter={()=>{setHold(true);setA(i)}} onMouseLeave={()=>setHold(false)} onPointerMove={act?e=>{const r=e.currentTarget.getBoundingClientRect();setG({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}:undefined}
style={{position:'absolute',left:245,top:120,width:190,height:250,boxSizing:'border-box',padding:20,display:'flex',flexDirection:'column',gap:12,background:act?'var(--surface-1)':'#111E20',border:'1px solid '+(act?'var(--teal-400)':'var(--border-1)'),boxShadow:act?'0 30px 60px rgba(0,0,0,.55), 0 0 40px rgba(68,224,226,.22)':'0 18px 40px rgba(0,0,0,.45)',transformOrigin:'50% 420px',transform:`rotateZ(${ang}deg) translateY(${dealt?(act?-34:0):230}px) translateZ(${act?70:-Math.abs(i-2)*14}px) scale(${act?1.06:1})`,opacity:dealt?1:0,transition:`transform .9s ${dealt?i*.11:0}s cubic-bezier(.2,.8,.2,1), opacity .5s ${dealt?i*.11:0}s, border-color .3s, background .3s, box-shadow .4s`,cursor:'pointer',overflow:'hidden'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><IcoBox n={ic} b={40} s={18}/><span style={{...mono,fontSize:12,color:act?'var(--fg-accent)':'var(--fg-3)'}}>0{i+1}</span></div>
<span style={{font:'var(--text-h3)',fontSize:17,color:act?'var(--fg-1)':'var(--fg-2)',lineHeight:1.2}}>{t1}</span>
<span style={{color:'var(--fg-3)',fontSize:13,lineHeight:1.4}}>{t2}</span>
<span style={{marginTop:'auto',height:3,background:'var(--border-1)',position:'relative'}}>{act&&!hold&&<span key={'p'+a} style={{position:'absolute',left:0,top:0,bottom:0,background:'var(--teal-400)',animation:'hsBar 3s linear forwards'}}></span>}</span>
{act&&<span style={{position:'absolute',inset:0,pointerEvents:'none',background:`radial-gradient(circle at ${g.x}% ${g.y}%, rgba(255,255,255,.14), transparent 50%)`}}></span>}</div>})}
<div style={{position:'absolute',left:215,top:385,width:250,height:300,transform:`translateZ(110px) translateY(${Math.sin(t/1700)*6}px)`,boxShadow:'0 40px 80px rgba(0,0,0,.6)'}}>
<div style={{position:'absolute',inset:-10,border:'1px solid rgba(68,224,226,.5)',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))'}}></div>
<Photo style={{position:'absolute',inset:0,clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))'}}/>
<span style={{position:'absolute',right:-22,bottom:26,padding:'10px 14px',background:'var(--teal-400)',color:'#04191A',font:'700 13px/1 var(--font-sans)',boxShadow:'0 12px 30px rgba(68,224,226,.35)',pointerEvents:'none'}}>12,000+ individuals</span></div>
</div>
<button onClick={replay} style={{all:'unset',cursor:'pointer',position:'absolute',left:56,bottom:8,font:'var(--text-label)',color:'var(--fg-3)'}}>↻ Deal again · hover a card</button></div>
<div style={{display:'flex',flexDirection:'column',gap:22}}><NameBlock/>
<blockquote style={{margin:0,font:'var(--text-h2)',fontSize:26,color:'var(--fg-1)',textWrap:'balance'}}>{QUOTE}</blockquote>
<div style={{padding:'22px 24px',background:'var(--surface-1)',border:'1px solid var(--border-1)',display:'flex',flexDirection:'column',gap:12}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{...eb,fontSize:11}}>Credential spotlight</span><span style={{...mono,fontSize:12}}>0{a+1} / 0{CREDS.length}</span></div>
<div key={a} style={{display:'flex',gap:14,alignItems:'center',animation:'hfFade .5s cubic-bezier(.2,.8,.2,1)'}}><IcoBox n={c[0]}/><div style={{display:'flex',flexDirection:'column',gap:4}}><span style={{font:'var(--text-h3)',fontSize:19,color:'var(--fg-1)'}}>{c[1]}</span><span style={{color:'var(--fg-2)',fontSize:15}}>{c[2]}</span></div></div>
<div style={{display:'flex',gap:6,marginTop:4}}>{CREDS.map((_,i)=><button key={i} onClick={()=>{setHold(true);setA(i)}} aria-label={CREDS[i][1]} style={{all:'unset',cursor:'pointer',flex:1,height:4,background:i===a?'var(--teal-400)':'var(--border-1)',transition:'background .3s'}}></button>)}</div></div>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:16,color:'var(--fg-2)'}}>Experience with NLC India, Ninjacart, JSW Steels, Innovalus, CII, City Union Bank and Amazon India. Founded N’kisi in 2020.</p>
<Ctas/></div>
</section>;}

window.HfFan=HfFan;window.HOME_FOUNDER_VARIANTS=[['1a','Credential orbit',HfOrbit,'Five credentials orbit the portrait on a tilted 3D ellipse, passing in front of and behind it; the scene tilts with the cursor.'],['1b','Journey steps',HfSteps,'His journey — PSG → MBA → industry → founded 2020 → award 2023 → today — as rising 3D steps. Auto-advances; hover a step.'],['1c','Depth portrait',HfDepth,'A layered 3D portrait card (name plate, award, reach badges at different depths) tilts with the cursor beside a depth-staggered quote.'],['1d','Credential hand',HfFan,'Five credential cards deal out of the portrait into a 3D arc like a hand of cards. The active one lifts with glow and glare and drives the spotlight panel; auto-cycles, hover a card to pick, scene tilts with the cursor.']];
})();
