/* Converted verbatim from ui_kits/website/HomeAboutVariants.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
const {Button}=window.NKisiDesignSystem_91614a;
const W=1280,H=760;
const HA_H="We are a leading consulting firm in India under startups.";
const HA_P=["N’kisi Global Consulting is a transformation-driven consulting firm focused on enhancing people, performance, and organizational excellence.","Our approach combines strategic thinking, behavioral science, and practical business insights to help organizations, professionals, and institutions achieve sustainable growth and measurable impact.","With a strong commitment towards transformation and performance excellence, we empower individuals and organizations to adapt, lead, and thrive in an evolving business environment."];
const eb={font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'};
const sec={position:'relative',width:W,height:H,overflow:'hidden',background:'var(--ink-950)',boxSizing:'border-box'};
const icoCache={};const Ico=({n,s=16})=>{const key=n+s;if(!(key in icoCache)){const k=n.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join('');const ic=window.lucide&&lucide.icons&&lucide.icons[k];icoCache[key]=ic?lucide.createElement(ic).outerHTML.replace(/width="24"/,'width="'+s+'"').replace(/height="24"/,'height="'+s+'"'):''}return <span style={{width:s,height:s,display:'inline-flex'}} dangerouslySetInnerHTML={{__html:icoCache[key]}}></span>};
function useT(run=true){const [t,setT]=React.useState(0);React.useEffect(()=>{if(!run)return;let id,to,dead=false;const t0=performance.now();const step=()=>{if(dead)return;setT(performance.now()-t0);let done=false;id=requestAnimationFrame(()=>{done=true;clearTimeout(to);step()});to=setTimeout(()=>{if(!done){cancelAnimationFrame(id);step()}},60)};step();return()=>{dead=true;cancelAnimationFrame(id);clearTimeout(to)}},[run]);return t;}
function Ctas({onRead,onServices}){return <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button size="lg" onClick={onRead}>Read more about us</Button><Button size="lg" variant="secondary" onClick={onServices}>Our services</Button></div>;}
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=x=>1-Math.pow(1-clamp(x),3);

/* 1a — Words light up one by one, key phrases fill with teal */
const HA_KEYS=['people,','performance,','organizational','excellence.','strategic','thinking,','behavioral','science,','sustainable','growth','measurable','impact.'];
function HaReveal(){const [rk,setRk]=React.useState(0);const t=useT();const words=(HA_P[0]+' '+HA_P[1]).split(' ');const LOOP=11000;const lt=(t+rk)%LOOP;const p=clamp((lt-600)/7600);const n=p*words.length;const img=ease((lt-200)/1400);
return <section style={{...sec,display:'grid',gridTemplateColumns:'360px minmax(0,1fr)',gap:72,padding:'88px 96px',alignItems:'center'}}>
<div style={{display:'flex',flexDirection:'column',gap:24}}><span style={eb}>About us</span>
<div style={{position:'relative',width:300,height:340,clipPath:`inset(${(1-img)*100}% 0 0 0)`,transform:`translateY(${Math.sin(t/1400)*6}px)`}}><div style={{position:'absolute',inset:0,background:'var(--surface-1)',border:'1px solid var(--border-1)',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))'}}></div><img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="N'kisi parrot" style={{position:'absolute',left:40,top:30,width:220}}/></div>
<span style={{font:'var(--text-label)',color:'var(--fg-3)',maxWidth:300}}>{HA_H}</span></div>
<div style={{display:'flex',flexDirection:'column',gap:40}}>
<p style={{margin:0,font:'500 36px/1.32 var(--font-display, serif)',letterSpacing:'-.01em',display:'flex',flexWrap:'wrap',columnGap:'.28em',rowGap:2}}>{words.map((w,i)=>{const on=clamp(n-i);const key=HA_KEYS.includes(w);return <span key={i} style={{position:'relative',whiteSpace:'nowrap',color:on>0?(key?'#04191A':'var(--fg-1)'):'var(--fg-1)',opacity:.16+on*.84,transition:'color .3s',padding:key?'0 .12em':0,margin:key?'0 -.12em':0}}>{key&&<span style={{position:'absolute',inset:'.12em 0 .06em',background:'var(--teal-400)',transformOrigin:'left',transform:`scaleX(${on})`,zIndex:0}}></span>}<span style={{position:'relative'}}>{w}</span></span>})}</p>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}><Ctas/><button onClick={()=>setRk(k=>k+LOOP-lt)} style={{all:'unset',cursor:'pointer',font:'var(--text-label)',color:'var(--fg-3)',display:'flex',gap:6,alignItems:'center'}}>↻ Replay</button></div>
<div style={{height:2,background:'var(--border-1)'}}><div style={{height:'100%',width:p*100+'%',background:'var(--teal-400)'}}></div></div></div>
</section>;}

/* 1b — 3D card deck: Who we are · Our approach · Our commitment */
const HA_CARDS=[['01','Who we are','users',HA_P[0]],['02','Our approach','compass',HA_P[1]],['03','Our commitment','target',HA_P[2]]];
function HaDeck({fluid,onRead,onServices}){const fx=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const [front,setFront]=React.useState(0);const [leaving,setLeaving]=React.useState(-1);const [hover,setHover]=React.useState(false);
const next=React.useCallback(()=>{setLeaving(l=>{if(l>=0)return l;setTimeout(()=>{setFront(f=>(f+1)%3);setLeaving(-1)},520);return front})},[front]);
React.useEffect(()=>{if(hover)return;const id=setInterval(next,3800);return()=>clearInterval(id)},[next,hover]);
return <section id={fluid?'about':undefined} style={{...sec,...(fluid?{width:'100%',height:'auto',padding:'112px '+fx,gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,440px),1fr))'}:{padding:'88px 96px',gridTemplateColumns:'minmax(0,1fr) 560px'}),display:'grid',gap:64,alignItems:'center'}}>
<div style={{display:'flex',flexDirection:'column',gap:24}}><span style={eb}>About us</span><h2 style={{margin:0,font:'var(--text-display)',fontSize:fluid?'clamp(36px,4.4vw,54px)':54,lineHeight:1.06,color:'var(--fg-1)',textWrap:'balance'}}>{HA_H}</h2>
<div style={{display:'flex',gap:10,marginTop:8}}>{HA_CARDS.map(([n,l],i)=><button key={n} onClick={()=>{setFront(i);setLeaving(-1)}} style={{all:'unset',cursor:'pointer',padding:'10px 14px',border:'1px solid '+(front===i?'var(--teal-400)':'var(--border-1)'),color:front===i?'var(--fg-1)':'var(--fg-3)',font:'600 14px/1 var(--font-sans)',display:'flex',gap:8,whiteSpace:'nowrap'}}><span style={{fontFamily:'var(--font-mono)',color:'var(--fg-accent)'}}>{n}</span>{l}</button>)}</div>
<div style={{marginTop:12}}><Ctas onRead={onRead} onServices={onServices}/></div></div>
<div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={next} style={{position:'relative',height:fluid?480:440,width:'100%',maxWidth:560,justifySelf:'end',marginTop:fluid?60:0,perspective:1400,cursor:'pointer'}}>
{HA_CARDS.map(([n,l,ic,txt],i)=>{const r=(i-front+3)%3;const out=leaving===i;const tf=out?'translateX(-62%) translateY(40px) rotateY(-38deg) rotateZ(-8deg)':`translateY(${-r*30}px) translateZ(${-r*90}px) rotateX(${r*3}deg)`;
return <article key={n} style={{position:'absolute',inset:0,transformStyle:'preserve-3d',transform:tf,opacity:out?0:1-r*.22,zIndex:out?4:3-r,transition:'transform .55s cubic-bezier(.2,.8,.2,1), opacity .55s',background:r===0?'var(--surface-1)':'#132022',border:'1px solid '+(r===0?'var(--teal-400)':'var(--border-1)'),padding:40,display:'flex',flexDirection:'column',gap:20,boxSizing:'border-box',boxShadow:'0 30px 60px rgba(0,0,0,.45)',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))',overflow:'hidden'}}>
<img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{position:'absolute',right:-40,bottom:-50,width:260,opacity:.08}}/>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{font:'700 64px/1 var(--font-display, serif)',color:'var(--teal-400)'}}>{n}</span><span style={{width:52,height:52,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-subtle)',color:'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)'}}><Ico n={ic} s={24}/></span></div>
<span style={{font:'var(--text-h2)',color:'var(--fg-1)'}}>{l}</span>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:19,lineHeight:1.55,color:'var(--fg-2)',textWrap:'pretty'}}>{txt}</p>
<span style={{marginTop:'auto',font:'var(--text-label)',color:'var(--fg-3)'}}>{r===0?'Click for next →':''}</span></article>})}
</div></section>;}

/* 1c — Cursor spotlight reveals the lit layer */
function HaLayer({lit}){const key=lit?{color:'#04191A',background:'var(--teal-400)',padding:'0 .14em'}:{};
return <div style={{position:'absolute',inset:0,padding:'96px 96px',display:'grid',gridTemplateColumns:'minmax(0,1fr) 380px',gap:48,alignItems:'center',boxSizing:'border-box'}}>
<div style={{display:'flex',flexDirection:'column',gap:28}}><span style={{...eb,color:lit?'var(--fg-accent)':'var(--fg-3)'}}>About us</span>
<h2 style={{margin:0,font:'var(--text-display)',fontSize:64,lineHeight:1.04,letterSpacing:'var(--ls-display)',color:lit?'var(--fg-1)':'#2A3B3D',textWrap:'balance'}}>We are a <span style={key}>leading</span> consulting firm in India under <span style={key}>startups.</span></h2>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:21,lineHeight:1.55,color:lit?'var(--fg-2)':'#253436',maxWidth:640}}>A transformation-driven firm focused on enhancing <b style={{color:lit?'var(--teal-300, #7DECEC)':'inherit'}}>people</b>, <b style={{color:lit?'var(--teal-300, #7DECEC)':'inherit'}}>performance</b>, and <b style={{color:lit?'var(--teal-300, #7DECEC)':'inherit'}}>organizational excellence</b>.</p></div>
<img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{width:340,justifySelf:'center',opacity:lit?1:.07,filter:lit?'drop-shadow(0 0 40px rgba(68,224,226,.35))':'grayscale(1)'}}/></div>;}
function HaSpot(){const root=React.useRef(),litRef=React.useRef(),ring=React.useRef();const m=React.useRef({x:0,y:0,on:false,cx:640,cy:380,r:0});
const t=useT();const q=m.current;const tx=q.on?q.x:640+Math.sin(t/1700)*420,ty=q.on?q.y:380+Math.sin(t/1100)*170;q.cx+=(tx-q.cx)*.12;q.cy+=(ty-q.cy)*.12;q.r+=((q.on?230:190)-q.r)*.08;
const mask=`radial-gradient(circle ${q.r}px at ${q.cx}px ${q.cy}px, #000 55%, transparent 100%)`;
return <section ref={root} onPointerMove={e=>{const r=root.current.getBoundingClientRect();q.x=(e.clientX-r.left)/r.width*W;q.y=(e.clientY-r.top)/r.height*H;q.on=true}} onPointerLeave={()=>{q.on=false}} style={{...sec,cursor:'none'}}>
<HaLayer/>
<div ref={litRef} style={{position:'absolute',inset:0,WebkitMaskImage:mask,maskImage:mask}}><HaLayer lit/></div>
<div ref={ring} style={{position:'absolute',left:q.cx-q.r,top:q.cy-q.r,width:q.r*2,height:q.r*2,borderRadius:'50%',border:'1px solid rgba(68,224,226,.25)',pointerEvents:'none'}}></div>
<div style={{position:'absolute',left:96,bottom:56,display:'flex',gap:24,alignItems:'center',zIndex:2}}><Ctas/><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>Move your cursor to light up the story</span></div>
</section>;}

/* 1d — Our approach as an equation: three inputs converge into impact */
const HA_IN=[['brain','Strategic thinking'],['activity','Behavioral science'],['briefcase','Practical business insights']];
function HaFormula(){const [rk,setRk]=React.useState(0);const t=useT();const LOOP=10000;const lt=(t+rk)%LOOP;
const nodeY=[250,365,480],RX=860,RY=365;
const paths=nodeY.map(y=>`M 470 ${y} C 640 ${y}, 680 ${RY}, ${RX-110} ${RY}`);
const res=ease((lt-3000)/900);const fadeOut=lt>9300?1-ease((lt-9300)/700):1;
return <section style={{...sec,padding:'72px 96px'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:40}}><div style={{display:'flex',flexDirection:'column',gap:14,maxWidth:620}}><span style={eb}>About us · Our approach</span><h2 style={{margin:0,font:'var(--text-display)',fontSize:44,lineHeight:1.08,color:'var(--fg-1)',textWrap:'balance'}}>{HA_H}</h2></div><button onClick={()=>setRk(k=>k+LOOP-lt)} style={{all:'unset',cursor:'pointer',font:'var(--text-label)',color:'var(--fg-3)',marginTop:8}}>↻ Replay</button></div>
<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position:'absolute',left:0,top:0,pointerEvents:'none',opacity:fadeOut}}>
{paths.map((d,i)=>{const pr=ease((lt-1300-i*250)/1200);return <g key={i}><path d={d} fill="none" stroke="rgba(68,224,226,.18)" strokeWidth="1"/><path d={d} fill="none" stroke="#44E0E2" strokeWidth="2" pathLength="1" strokeDasharray="1" strokeDashoffset={1-pr}/>{pr>=1&&<circle r="4" fill="#E6FFFF"><animateMotion dur={(1.6+i*.3)+'s'} repeatCount="indefinite" path={d}/></circle>}</g>})}
</svg>
{HA_IN.map(([ic,l],i)=>{const e=ease((lt-300-i*300)/700);return <div key={l} style={{position:'absolute',left:96,top:nodeY[i]-36,width:374,height:72,display:'flex',alignItems:'center',gap:16,padding:'0 20px',boxSizing:'border-box',background:'var(--surface-1)',border:'1px solid var(--border-1)',opacity:e*fadeOut,transform:`perspective(900px) rotateY(${(1-e)*-70}deg) translateX(${(1-e)*-40}px)`,transformOrigin:'left'}}>
<span style={{width:40,height:40,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-subtle)',color:'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)'}}><Ico n={ic} s={20}/></span><span style={{font:'600 19px var(--font-sans)',color:'var(--fg-1)'}}>{l}</span><span style={{marginLeft:'auto',font:'700 22px var(--font-mono)',color:'var(--fg-accent)'}}>{i<2?'+':'='}</span></div>})}
<div style={{position:'absolute',left:RX-110,top:RY-150,width:360,height:300,boxSizing:'border-box',padding:32,display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:10,background:'var(--teal-400)',color:'#04191A',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))',opacity:res*fadeOut,transform:`scale(${.8+res*.2}) rotateZ(${(1-res)*-4}deg)`,boxShadow:`0 0 ${60*res}px rgba(68,224,226,.35)`}}>
<img src={(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png'} alt="" style={{position:'absolute',right:18,top:18,width:96,filter:'brightness(0) saturate(100%)',opacity:.22}}/>
<span style={{font:'700 13px/1 var(--font-sans)',letterSpacing:'.14em',textTransform:'uppercase'}}>Result</span><span style={{font:'700 34px/1.1 var(--font-display, serif)'}}>Sustainable growth &amp; measurable impact</span></div>
<div style={{position:'absolute',left:96,right:96,bottom:56,display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:40}}><p style={{margin:0,maxWidth:600,font:'var(--text-body-lg)',fontSize:17,color:'var(--fg-2)',opacity:ease((lt-4000)/800)*fadeOut}}>{HA_P[1]}</p><Ctas/></div>
</section>;}

window.HaDeck=HaDeck;window.HOME_ABOUT_VARIANTS=[['1a','Word-by-word reveal',HaReveal,'The about copy lights up word by word; key phrases fill with teal highlights while the parrot card wipes in.'],['1b','3D card deck',HaDeck,'Who we are · Our approach · Our commitment as a 3D deck that auto-flips; click to advance, hover to pause.'],['1c','Cursor spotlight',HaSpot,'A dark, dim layer — your cursor is a spotlight that reveals the lit story and parrot. Drifts on its own when idle.'],['1d','Approach equation',HaFormula,'Strategic thinking + behavioral science + business insights draw lines that converge into “Sustainable growth & measurable impact”.']];
})();
