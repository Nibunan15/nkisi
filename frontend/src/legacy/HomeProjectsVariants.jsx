/* Converted verbatim from ui_kits/website/HomeProjectsVariants.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
const {Button,Badge}=window.NKisiDesignSystem_91614a;
const W=1280,H=800;
const eb={font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'};
const h2s={margin:0,font:'var(--text-display)',fontSize:52,lineHeight:1.05,letterSpacing:'var(--ls-display)',color:'var(--fg-1)'};
const sec={position:'relative',width:W,height:H,overflow:'hidden',background:'var(--ink-950)',boxSizing:'border-box'};
const mono={font:'700 14px/1 var(--font-mono)',color:'var(--fg-accent)'};
const PJ=[['Confederation of Indian Industry (CII)','Corporate Team Building Activity for 12+ companies around Tamil Nadu','Corporate'],['Christ University, Bengaluru','Branding workshop for Graduates','Academic'],['Milton Roy India Pvt Ltd, Chennai','Corporate Team Building Activity for 120 Employees','Corporate'],['New Horizon College of Engineering, Bengaluru','Outbound Training for 180 students','Academic'],['Knowledge Institute of Technology, Salem','Freshers Induction Program for 550+ students','Academic'],['SRM University, Chennai','Branding Workshop','Academic'],['Kongu Business School, Erode','Ad-Strategies Workshop','Academic'],['One School of Business','Marketing Workshop','Academic'],['Velalar College of Engineering & Technology','Branding workshop','Academic'],['Sri Krishna College of Engineering','Guest Lecture','Academic'],['Shri Shanmugha College of Engineering','Freshers Induction Program','Academic'],['Nandha College of Engineering, Erode','Guest Lecture','Academic'],['Gnanamani College of Technology','Soft skill Training','Academic'],['Muthayammal Engineering College, Namakkal','Workshop','Academic'],["Idhaya Women's College",'Guest Lecture','Academic'],['St. Francis College, Bengaluru','Guest Lecture','Academic'],['National College','Guest Lecture','Academic']];
const N=PJ.length;const pad2=i=>String(i+1).padStart(2,'0');
function useT(){const [t,setT]=React.useState(0);React.useEffect(()=>{let id,to,dead=false;const t0=performance.now();const step=()=>{if(dead)return;setT(performance.now()-t0);let done=false;id=requestAnimationFrame(()=>{done=true;clearTimeout(to);step()});to=setTimeout(()=>{if(!done){cancelAnimationFrame(id);step()}},60)};step();return()=>{dead=true;cancelAnimationFrame(id);clearTimeout(to)}},[]);return t;}
const Head=({compact,onAll})=><div style={{display:'flex',flexDirection:'column',gap:14}}><span style={eb}>About projects</span><h2 style={{...h2s,fontSize:compact?44:52}}>Our Latest Works</h2>{!compact&&<span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>17 projects · corporate &amp; academic partners across India</span>}<div style={{marginTop:6}}><Button onClick={onAll}>View all projects →</Button></div></div>;
const Kind=({k})=><Badge tone={k==='Corporate'?'accent':'neutral'}>{k}</Badge>;

/* 1a — Warp tunnel: projects fly toward you */
const LANES=[[-400,-150],[400,-110],[-360,170],[380,180]];
function HpWarp(){const t=useT();const acc=React.useRef({v:0,last:0,speed:1});const [hov,setHov]=React.useState(-1);const a=acc.current;const dt=Math.min(60,t-a.last);a.last=t;a.speed+=((hov>=0?0:1)-a.speed)*.08;a.v+=dt*.28*a.speed;
const L=3000,gap=L/N;let front=0,best=1e9;
const cards=PJ.map((p,i)=>{const z=-2600+((a.v+i*gap)%L);const [lx,ly]=LANES[i%4];const op=Math.max(0,Math.min(1,(z+2600)/700))*Math.max(0,Math.min(1,(420-z)/260));if(z<200&&z>-1400&&Math.abs(z+300)<best){best=Math.abs(z+300);front=i}return {p,i,z,lx,ly,op}});
const f=hov>=0?hov:front;
return <section style={{...sec,perspective:900}}>
<div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%,rgba(68,224,226,.10),transparent 60%)'}}></div>
<div style={{position:'absolute',left:'50%',top:'52%',transformStyle:'preserve-3d'}}>
{cards.sort((x,y)=>x.z-y.z).map(({p,i,z,lx,ly,op})=><div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(-1)} style={{position:'absolute',left:-150,top:-80,width:300,height:160,boxSizing:'border-box',padding:20,display:'flex',flexDirection:'column',gap:10,background:i===f?'var(--surface-1)':'rgba(17,30,32,.92)',border:'1px solid '+(i===f?'var(--teal-400)':'var(--border-1)'),transform:`translate3d(${lx}px,${ly}px,${z}px)`,opacity:op,boxShadow:i===f?'0 0 50px rgba(68,224,226,.25)':'none',cursor:'pointer'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={mono}>{pad2(i)}</span><Kind k={p[2]}/></div>
<span style={{font:'var(--text-h3)',fontSize:18,color:'var(--fg-1)',lineHeight:1.2}}>{p[1]}</span>
<span style={{marginTop:'auto',color:'var(--fg-3)',fontSize:13}}>{p[0]}</span></div>)}
</div>
<div style={{position:'absolute',left:96,top:72,padding:'28px 32px',background:'rgba(7,14,15,.82)',border:'1px solid var(--border-1)',backdropFilter:'blur(6px)'}}><Head compact/></div>
<div style={{position:'absolute',right:96,bottom:64,width:420,padding:'22px 26px',background:'rgba(7,14,15,.86)',border:'1px solid var(--teal-400)',display:'flex',flexDirection:'column',gap:8}}>
<div style={{display:'flex',justifyContent:'space-between'}}><span style={{...eb,fontSize:11}}>Now passing</span><span style={mono}>{pad2(f)} / {N}</span></div>
<span key={f} style={{font:'var(--text-h3)',color:'var(--fg-1)',animation:'hpFade .4s ease-out'}}>{PJ[f][0]}</span><span style={{color:'var(--fg-2)',fontSize:15}}>{PJ[f][1]}</span></div>
<span style={{position:'absolute',left:96,bottom:64,font:'var(--text-label)',color:'var(--fg-3)'}}>Hover a card to stop the stream</span>
</section>;}

/* 1b — Flip board: rows are 3D prisms that roll to the next project */
const ROWS=6,RH=68;
function HpBoard(){const [c,setC]=React.useState(0);const [hold,setHold]=React.useState(false);
React.useEffect(()=>{if(hold)return;const id=setInterval(()=>setC(x=>x+1),3200);return()=>clearInterval(id)},[hold]);
const proj=(r,k)=>(r+k*ROWS)%N;
return <section style={{...sec,padding:'72px 96px',display:'flex',flexDirection:'column',gap:36}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24}}><Head compact/><div style={{display:'flex',gap:8}}><button onClick={()=>{setHold(true);setC(x=>Math.max(0,x-1))}} style={hpArrow}>↑</button><button onClick={()=>{setHold(true);setC(x=>x+1)}} style={hpArrow}>↓</button></div></div>
<div onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} style={{border:'1px solid var(--border-1)',background:'#0A1314'}}>
<div style={{display:'grid',gridTemplateColumns:'80px minmax(0,1.3fr) minmax(0,1.2fr) 140px',gap:20,padding:'14px 24px',borderBottom:'1px solid var(--border-1)',font:'700 11px/1 var(--font-mono)',letterSpacing:'.14em',color:'var(--fg-3)'}}><span>NO.</span><span>ORGANIZATION</span><span>PROGRAM</span><span>SECTOR</span></div>
{Array.from({length:ROWS}).map((_,r)=><div key={r} style={{height:RH,perspective:700,borderBottom:r<ROWS-1?'1px solid var(--border-1)':'none'}}>
<div style={{position:'relative',height:'100%',transformStyle:'preserve-3d',transform:`translateZ(-${RH/2}px) rotateX(${c*90}deg)`,transition:`transform .8s ${r*.07}s cubic-bezier(.6,-0.2,.25,1.25)`}}>
{[0,1,2,3].map(face=>{const k=c+((face-(c%4)+4)%4);const p=PJ[proj(r,k)];const idx=proj(r,k);return <div key={face} style={{position:'absolute',inset:0,backfaceVisibility:'hidden',transform:`rotateX(${-face*90}deg) translateZ(${RH/2}px)`,display:'grid',gridTemplateColumns:'80px minmax(0,1.3fr) minmax(0,1.2fr) 140px',gap:20,alignItems:'center',padding:'0 24px',background:'#0E1A1B'}}>
<span style={{...mono,fontSize:18}}>{pad2(idx)}</span><span style={{font:'600 18px/1.25 var(--font-sans)',color:'var(--fg-1)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[0]}</span><span style={{color:'var(--fg-2)',fontSize:15,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[1]}</span><span><Kind k={p[2]}/></span></div>})}
</div></div>)}
</div>
<span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>Rows roll to the next set every few seconds · hover to hold · arrows to flip</span>
</section>;}
const hpArrow={all:'unset',cursor:'pointer',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-2)',color:'var(--fg-1)',font:'600 18px var(--font-sans)'};

/* 1c — Isometric slab stack: active project slides out */
const STACK=PJ.slice(0,6);
function HpSlab({i,on,w,d,h,z}){const f={position:'absolute',boxSizing:'border-box',border:'1px solid rgba(68,224,226,'+(on?.9:.3)+')'};const p=STACK[i];
return <div style={{position:'absolute',left:0,top:0,width:w,height:d,transformStyle:'preserve-3d',transform:`translate3d(${on?150:0}px,${on?-40:0}px,${z+(on?22:0)}px)`,transition:'transform .8s cubic-bezier(.2,.8,.2,1)'}}>
<div style={{...f,left:0,top:d,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:on?'#1E6E70':'#143A3C',display:'flex',alignItems:'center',padding:'0 12px'}}><span style={{font:'700 11px/1 var(--font-mono)',color:on?'#E6FFFF':'var(--fg-3)',transform:'scaleY(-1)'}}>{pad2(i)}</span></div>
<div style={{...f,left:w,top:0,width:h,height:d,transformOrigin:'left',transform:'rotateY(-90deg)',background:on?'#175A5C':'#0E2E30'}}></div>
<div style={{...f,left:0,top:0,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:'#0A2123'}}></div>
<div style={{...f,left:0,top:0,width:h,height:d,transformOrigin:'left',transform:'rotateY(-90deg)',background:'#0A2123'}}></div>
<div style={{...f,left:0,top:0,width:w,height:d,transform:`translateZ(${h}px)`,background:on?'var(--teal-400)':'#173F41',padding:22,display:'flex',flexDirection:'column',justifyContent:'space-between',color:on?'#04191A':'var(--fg-2)',boxShadow:on?'0 0 60px rgba(68,224,226,.4)':'none',transition:'background .5s'}}>
<span style={{font:'700 13px/1 var(--font-mono)'}}>{pad2(i)} · {p[2].toUpperCase()}</span><span style={{font:'700 24px/1.15 var(--font-display, serif)'}}>{p[0]}</span></div></div>;}
function HpStack(){const [a,setA]=React.useState(0);const [hold,setHold]=React.useState(false);const ref=React.useRef();const [pt,setPt]=React.useState({x:0,y:0});
React.useEffect(()=>{if(hold)return;const id=setInterval(()=>setA(x=>(x+1)%STACK.length),3000);return()=>clearInterval(id)},[hold]);
const p=STACK[a];
return <section ref={ref} onPointerMove={e=>{const r=ref.current.getBoundingClientRect();setPt({x:((e.clientX-r.left)/r.width-.5)*2,y:((e.clientY-r.top)/r.height-.5)*2})}} style={{...sec,padding:'72px 96px',display:'grid',gridTemplateColumns:'440px minmax(0,1fr)',gap:20}}>
<div style={{display:'flex',flexDirection:'column',gap:28,position:'relative',zIndex:2}}><Head compact/>
<div onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} style={{display:'flex',flexDirection:'column'}}>{STACK.map((s,i)=><button key={i} onMouseEnter={()=>setA(i)} onClick={()=>setA(i)} style={{all:'unset',cursor:'pointer',display:'grid',gridTemplateColumns:'36px minmax(0,1fr)',gap:10,padding:'12px 0',borderTop:'1px solid var(--border-1)'}}><span style={{...mono,color:i===a?'var(--fg-accent)':'var(--fg-3)',paddingTop:3}}>{pad2(i)}</span><span style={{display:'flex',flexDirection:'column',gap:4}}><span style={{font:'600 17px/1.3 var(--font-sans)',color:i===a?'var(--fg-1)':'var(--fg-3)'}}>{s[0]}</span>{i===a&&<span style={{color:'var(--fg-2)',fontSize:14,animation:'hpFade .4s ease-out'}}>{s[1]}</span>}</span></button>)}</div></div>
<div style={{position:'relative',perspective:1800}}>
<div style={{position:'absolute',left:120,top:200,width:360,height:220,transformStyle:'preserve-3d',transform:`rotateX(${58-pt.y*5}deg) rotateZ(${-36+pt.x*8}deg)`,transition:'transform .4s ease-out'}}>
<div style={{position:'absolute',left:-80,top:-80,width:620,height:380,border:'1px solid rgba(68,224,226,.15)',backgroundImage:'linear-gradient(rgba(68,224,226,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(68,224,226,.08) 1px,transparent 1px)',backgroundSize:'40px 40px'}}></div>
{STACK.map((_,i)=><HpSlab key={i} i={i} on={i===a} w={360} d={220} h={22} z={(STACK.length-1-i)*36}/>)}
</div>
<div style={{position:'absolute',right:0,bottom:20,display:'flex',gap:10,alignItems:'center'}}><Kind k={p[2]}/><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>{p[1]}</span></div></div>
</section>;}

/* 1d — Tilted infinite wall of projects */
function HpWall({fluid,onAll}){const fx=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const rows=[0,1,2,3].map(r=>PJ.filter((_,i)=>i%4===r).map((p,j)=>[p,PJ.indexOf(p)]));
return <section id={fluid?'projects':undefined} className={fluid?'hp-sec':undefined} style={{...sec,...(fluid?{width:'100%',borderTop:'1px solid var(--border-1)',borderBottom:'1px solid var(--border-1)'}:{})}}>
<div style={{position:'absolute',left:'50%',top:'50%',width:2000,marginLeft:-760,marginTop:-430,transform:'perspective(1600px) rotateX(26deg) rotateY(-14deg) rotateZ(-10deg)',transformStyle:'preserve-3d',display:'flex',flexDirection:'column',gap:18}}>
{rows.map((row,r)=>{const items=[...row,...row,...row];return <div key={r} className="hp-row" style={{display:'flex',width:'max-content',gap:18,transformStyle:'preserve-3d',animation:`${r%2?'hpR':'hpL'} ${38+r*6}s linear infinite`}}>{[...items,...items].map(([p,i],k)=><div key={k} className="hp-tile" style={{width:330,height:160,flex:'none',boxSizing:'border-box',padding:20,display:'flex',flexDirection:'column',gap:10,background:p[2]==='Corporate'?'#123A3C':'var(--surface-1)',border:'1px solid '+(p[2]==='Corporate'?'var(--teal-400)':'var(--border-1)'),transition:'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s',cursor:'pointer'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={mono}>{pad2(i)}</span><Kind k={p[2]}/></div><span style={{font:'var(--text-h3)',fontSize:18,color:'var(--fg-1)',lineHeight:1.2}}>{p[1]}</span><span style={{marginTop:'auto',color:'var(--fg-3)',fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p[0]}</span></div>)}</div>})}
</div>
<div style={{position:'absolute',inset:0,pointerEvents:'none',background:'linear-gradient(90deg,var(--ink-950) 0%,rgba(7,14,15,.85) 28%,rgba(7,14,15,0) 55%),linear-gradient(0deg,var(--ink-950),rgba(7,14,15,0) 22%),linear-gradient(180deg,var(--ink-950),rgba(7,14,15,0) 18%)'}}></div>
<div style={{position:'absolute',left:fx,top:'50%',transform:'translateY(-50%)',maxWidth:420}}><Head onAll={onAll}/></div>
<span className="hp-hint" style={{position:'absolute',right:fx,bottom:40,font:'var(--text-label)',color:'var(--fg-3)'}}>Hover a row to pause · tiles lift on hover</span>
</section>;}

window.HpWall=HpWall;window.HOME_PROJECTS_VARIANTS=[['1a','Warp tunnel',HpWarp,'All 17 projects stream toward you through a 3D tunnel in four lanes; the nearest one is captioned. Hover a card to slow the stream to a stop.'],['1b','Flip board',HpBoard,'A departure-board table whose rows are 3D prisms — every few seconds they roll in a cascade to the next set of projects.'],['1c','Slab stack',HpStack,'Six headline projects as an isometric stack of slabs; the active one slides out glowing teal. Hover the list to pick.'],['1d','Tilted wall',HpWall,'An endless, tilted 3D wall of project tiles drifting in alternating directions behind the heading; corporate work highlighted in teal.']];
})();
