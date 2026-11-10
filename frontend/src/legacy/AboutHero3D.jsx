/* Converted verbatim from ui_kits/website/AboutHero3D.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
const AhButton=window.NKisiDesignSystem_91614a.Button;
const AH_W=1280,AH_H=760;
function ahUsePointer(ref){const p=React.useRef({x:0,y:0,tx:0,ty:0,mx:-9999,my:-9999});
React.useEffect(()=>{const el=ref.current;if(!el)return;const mv=e=>{const r=el.getBoundingClientRect();const q=p.current;q.tx=(e.clientX-r.left)/r.width*2-1;q.ty=(e.clientY-r.top)/r.height*2-1;q.mx=e.clientX;q.my=e.clientY};const lv=()=>{const q=p.current;q.tx=0;q.ty=0;q.mx=-9999;q.my=-9999};el.addEventListener('pointermove',mv);el.addEventListener('pointerleave',lv);return()=>{el.removeEventListener('pointermove',mv);el.removeEventListener('pointerleave',lv)}},[]);return p;}
function ahLoop(fn){const f=React.useRef(fn);f.current=fn;React.useEffect(()=>{let id,to,dead=false;const t0=performance.now();const next=()=>{let done=false;id=requestAnimationFrame(()=>{done=true;clearTimeout(to);tick()});to=setTimeout(()=>{if(!done){cancelAnimationFrame(id);tick()}},60)};const tick=()=>{if(dead)return;f.current(performance.now()-t0);next()};next();return()=>{dead=true;cancelAnimationFrame(id);clearTimeout(to)}},[]);}
const ahEase=(q)=>{q.x+=(q.tx-q.x)*.06;q.y+=(q.ty-q.y)*.06};

function AhCopy({max=540,title="We are a leading consulting firm in India under startups.",size=56,onServices,onContact,homeHref}){return <div style={{display:'flex',flexDirection:'column',gap:22,maxWidth:max,position:'relative',zIndex:2}}>

<span style={{font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'}}>About us</span>
<h1 style={{margin:0,font:'var(--text-display)',fontSize:size,lineHeight:1.05,letterSpacing:'var(--ls-display)',color:'var(--fg-1)',textWrap:'balance'}}>{title}</h1>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:18,color:'var(--fg-2)',textWrap:'pretty'}}>N’kisi Global Consulting is a transformation-driven consulting firm focused on enhancing people, performance, and organizational excellence.</p>
<div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:6}}><AhButton size="lg" onClick={onServices}>Our services</AhButton><AhButton size="lg" variant="secondary" onClick={onContact}>Work with us</AhButton></div></div>;}

/* 1a — Gyroscope of practices orbiting the parrot */
const AH_RINGS=[{tilt:'rotateX(74deg)',size:580,dur:46,labels:['Leadership','Strategy','HR consulting','Brand','Outbound training','Transformation']},{tilt:'rotateX(74deg) rotateY(60deg)',size:470,dur:30,rev:1,labels:['Vision','Mission','Excellence']},{tilt:'rotateY(76deg) rotateX(18deg)',size:370,dur:22,labels:['','','','']}];
function AhGyro(){const root=React.useRef(),stage=React.useRef();const p=ahUsePointer(root);
ahLoop(t=>{const q=p.current;ahEase(q);if(stage.current)stage.current.style.transform=`rotateX(${-q.y*14+Math.sin(t/2400)*4}deg) rotateY(${q.x*20+Math.sin(t/3100)*6}deg)`});
return <section ref={root} style={{position:'relative',width:AH_W,height:AH_H,overflow:'hidden',background:'var(--ink-950)',display:'flex',alignItems:'center',padding:'0 96px',boxSizing:'border-box'}}>
<AhCopy/>
<div style={{position:'absolute',right:20,top:'50%',width:640,height:640,marginTop:-320,perspective:1400}}>
<div style={{position:'absolute',left:'50%',top:'50%',width:420,height:420,margin:-210,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.18),transparent)'}}></div>
<div ref={stage} style={{position:'absolute',inset:0,transformStyle:'preserve-3d'}}>
{AH_RINGS.map((r,ri)=><div key={ri} style={{position:'absolute',left:'50%',top:'50%',width:r.size,height:r.size,margin:-r.size/2,transformStyle:'preserve-3d',transform:r.tilt}}>
<div data-anim="1" style={{position:'absolute',inset:0,borderRadius:'50%',border:`1px solid rgba(68,224,226,${.55-ri*.12})`,transformStyle:'preserve-3d',animation:`ahSpin ${r.dur}s linear infinite${r.rev?' reverse':''}`}}>
{r.labels.map((l,i)=><div key={i} style={{position:'absolute',left:'50%',top:'50%',transformStyle:'preserve-3d',transform:`rotateZ(${i/r.labels.length*360}deg) translateX(${r.size/2}px)`}}>
<span style={{position:'absolute',width:10,height:10,left:-5,top:-5,background:'var(--teal-400)',boxShadow:'0 0 14px var(--teal-400)'}}></span>
{l&&<span style={{position:'absolute',left:14,top:-10,whiteSpace:'nowrap',font:'600 15px var(--font-sans)',color:'var(--fg-1)',letterSpacing:'.02em'}}>{l}</span>}</div>)}
</div></div>)}
<img src="assets/nkisi-mark.png" alt="N'kisi parrot" style={{position:'absolute',left:'50%',top:'50%',width:230,marginLeft:-115,marginTop:-150,transform:'translateZ(0)'}}/>
</div>
<div style={{position:'absolute',left:'50%',bottom:40,width:360,height:40,marginLeft:-180,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(0,0,0,.6),transparent)'}}></div>
</div></section>;}

/* 1b — Extruded 3D wordmark that follows the cursor */
const AH_LAYERS=26;
const ahMix=(a,b,t)=>`rgb(${a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(',')})`;
function AhExtrude(){const root=React.useRef(),stage=React.useRef();const p=ahUsePointer(root);
ahLoop(t=>{const q=p.current;ahEase(q);if(stage.current)stage.current.style.transform=`rotateX(${10-q.y*16}deg) rotateY(${Math.sin(t/1800)*10+q.x*24}deg)`});
const word="N'KISI";
return <section ref={root} style={{position:'relative',width:AH_W,height:AH_H,overflow:'hidden',background:'var(--ink-950)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'56px 96px 72px',boxSizing:'border-box'}}>

<div style={{perspective:1100,height:300,display:'flex',alignItems:'center',justifyContent:'center'}}>
<div ref={stage} style={{position:'relative',transformStyle:'preserve-3d',font:'700 260px/1 var(--font-display, "Zilla Slab")',letterSpacing:'-.02em'}}>
<span style={{visibility:'hidden'}}>{word}</span>
{Array.from({length:AH_LAYERS}).map((_,i)=>{const k=AH_LAYERS-1-i;const t=k/(AH_LAYERS-1);return <span key={i} aria-hidden="true" style={{position:'absolute',inset:0,transform:`translateZ(${-k*3}px)`,color:k===0?'#E6EEEE':ahMix([68,224,226],[6,30,32],t),textShadow:k===0?'0 0 40px rgba(68,224,226,.25)':'none'}}>{word}</span>})}
</div></div>
<div style={{display:'grid',gridTemplateColumns:'minmax(0,1.1fr) minmax(0,1fr)',gap:64,alignItems:'end'}}>
<div style={{display:'flex',flexDirection:'column',gap:16}}><span style={{font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'}}>About us</span><h1 style={{margin:0,font:'var(--text-display)',fontSize:46,lineHeight:1.08,color:'var(--fg-1)',textWrap:'balance'}}>We are a leading consulting firm in India under startups.</h1></div>
<div style={{display:'flex',flexDirection:'column',gap:20}}><p style={{margin:0,font:'var(--text-body-lg)',fontSize:18,color:'var(--fg-2)',textWrap:'pretty'}}>N’kisi Global Consulting is a transformation-driven consulting firm focused on enhancing people, performance, and organizational excellence.</p><div style={{display:'flex',gap:12}}><AhButton size="lg">Our services</AhButton><AhButton size="lg" variant="secondary">Work with us</AhButton></div></div></div>
</section>;}

/* 1c — Isometric impact columns rising from a grid floor */
const AH_STATS=[['160+','Institutions served',150,60,60],['30,000+','Lives touched',260,300,60],['40+','Industry experts',110,60,300],['4.6/5','Client rating',200,300,300]];
function AhCuboid({x,y,w,h,num,label,delay}){const tr=`transform 1.6s cubic-bezier(.2,.8,.2,1) ${delay}s, height 1.6s cubic-bezier(.2,.8,.2,1) ${delay}s, width 1.6s cubic-bezier(.2,.8,.2,1) ${delay}s`;const f={position:'absolute',transition:tr,boxSizing:'border-box',border:'1px solid rgba(68,224,226,.35)'};
return <div style={{position:'absolute',left:x,top:y,width:w,height:w,transformStyle:'preserve-3d'}}>
<div style={{...f,left:0,top:0,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:'#0E3132'}}></div>
<div style={{...f,left:0,top:w,width:w,height:h,transformOrigin:'top',transform:'rotateX(90deg)',background:'#1E5F61'}}></div>
<div style={{...f,left:0,top:0,width:h,height:w,transformOrigin:'left',transform:'rotateY(-90deg)',background:'#123C3D'}}></div>
<div style={{...f,left:w,top:0,width:h,height:w,transformOrigin:'left',transform:'rotateY(-90deg)',background:'#164B4C'}}></div>
<div style={{...f,left:0,top:0,width:w,height:w,transform:`translateZ(${h}px)`,background:'var(--teal-400)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:4,color:'#04191A'}}><span style={{transform:'rotateZ(45deg)',display:'flex',flexDirection:'column',alignItems:'center',gap:2}}><b style={{font:'700 26px/1 var(--font-display, serif)'}}>{num}</b><span style={{font:'700 11px/1.2 var(--font-sans)',textTransform:'uppercase',letterSpacing:'.08em',textAlign:'center'}}>{label}</span></span></div>
</div>;}
function AhIso(){const root=React.useRef(),stage=React.useRef();const p=ahUsePointer(root);const [up,setUp]=React.useState(false);
React.useEffect(()=>{const t=setTimeout(()=>setUp(true),250);return()=>clearTimeout(t)},[]);
ahLoop(t=>{const q=p.current;ahEase(q);if(stage.current)stage.current.style.transform=`rotateX(${58-q.y*8}deg) rotateZ(${-45+q.x*18+Math.sin(t/2600)*5}deg)`});
return <section ref={root} onClick={()=>{setUp(false);setTimeout(()=>setUp(true),700)}} style={{position:'relative',width:AH_W,height:AH_H,overflow:'hidden',background:'var(--ink-950)',display:'flex',alignItems:'center',padding:'0 96px',boxSizing:'border-box'}}>
<AhCopy max={500} size={52}/>
<div style={{position:'absolute',right:40,top:60,width:640,height:640,perspective:1600}}>
<div ref={stage} style={{position:'absolute',left:40,top:120,width:560,height:560,transformStyle:'preserve-3d',backgroundImage:'linear-gradient(rgba(68,224,226,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(68,224,226,.16) 1px,transparent 1px)',backgroundSize:'40px 40px',border:'1px solid rgba(68,224,226,.3)'}}>
{AH_STATS.map(([n,l,h,x,y],i)=><AhCuboid key={n} x={x} y={y} w={200} h={up?h:2} num={n} label={l} delay={i*.15}/>)}
</div></div>
<span style={{position:'absolute',right:40,bottom:28,font:'var(--text-label)',color:'var(--fg-3)'}}>Click to replay</span>
</section>;}

/* 1d — Particle parrot v3: parrot → speech bubble → wave, hover links, click to burst */
const AH_STAGES=[['Intelligence','N’kisi — the parrot that thinks'],['Communication','950 words, used in context'],['Adaptability','Flexing with an evolving world']];
const AH_HOLD=5200,AH_MORPH=1900,AH_CYCLE=AH_HOLD+AH_MORPH;
function AhParticles({fluid,onServices,onContact,homeHref}){const padX=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const edge=fluid?'max(0px, calc((100% - var(--container)) / 2))':'0px';const root=React.useRef(),cv=React.useRef();const p=ahUsePointer(root);const pts=React.useRef([]),dust=React.useRef([]),off=React.useRef(0),burst=React.useRef(0),last=React.useRef(-1);const [st,setSt]=React.useState(0);const [pr,setPr]=React.useState(0);const CW=700,CH=700,N=7000;
React.useEffect(()=>{const sample=(draw,w,h,k,keep)=>{const o=document.createElement('canvas');o.width=w;o.height=h;const c=o.getContext('2d');draw(c);const d=c.getImageData(0,0,w,h).data;const out=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;if(d[i+3]<120)continue;out.push({x:(x-w/2)*k,y:(y-h/2)*k,r:d[i],g:d[i+1],b:d[i+2]})}for(let i=out.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[out[i],out[j]]=[out[j],out[i]]}return out};
const ready=parrot=>{const word=sample(c=>{c.fillStyle='#fff';c.strokeStyle='#fff';c.lineWidth=16;c.lineJoin='round';c.beginPath();c.moveTo(60,20);c.lineTo(540,20);c.quadraticCurveTo(580,20,580,60);c.lineTo(580,300);c.quadraticCurveTo(580,340,540,340);c.lineTo(230,340);c.lineTo(130,420);c.lineTo(150,340);c.lineTo(60,340);c.quadraticCurveTo(20,340,20,300);c.lineTo(20,60);c.quadraticCurveTo(20,20,60,20);c.closePath();c.stroke();c.textAlign='center';c.textBaseline='middle';c.font='700 150px "Zilla Slab", Georgia, serif';c.fillText('950',300,160);c.font='700 46px "Manrope", sans-serif';c.fillText('WORDS',300,266)},600,440,.92);const ga=Math.PI*(3-Math.sqrt(5));const out=[];
const pk=parrot.k;for(let i=0;i<N;i++){const P=parrot[i%parrot.length],W=word[i%word.length];const lum=(P.r*.3+P.g*.59+P.b*.11)/255;const yy=1-(i/(N-1))*2,rr=Math.sqrt(1-yy*yy),th=ga*i;const R=195;const ph=Math.acos(Math.random()*2-1),t2=Math.random()*6.283,R0=520+Math.random()*320;
out.push({T:[[P.x,P.y,(lum-.5)*-22+(Math.random()-.5)*4],[W.x,W.y-20,(Math.random()-.5)*24],null],u:((i%112)/111-.5)*660,v:(((i/112)|0)/62-.5)*440,C:[[Math.min(255,P.r*.92+22)|0,Math.min(255,P.g*.92+22)|0,Math.min(255,P.b*.92+22)|0],[68,224,226],[40+(i%112)*1.3|0,170+(i%112)*.6|0,200]],s0:[R0*Math.sin(ph)*Math.cos(t2),R0*Math.sin(ph)*Math.sin(t2),R0*Math.cos(ph)],dl:Math.random(),n:Math.random()*2-1,ox:0,oy:0,vx:0,vy:0})}pts.current=out;pts.pk=pk};
dust.current=Array.from({length:180},()=>[(Math.random()-.5)*1400,(Math.random()-.5)*900,(Math.random()-.5)*900,Math.random()]);
const img=new Image();img.onload=()=>{try{let par=null;for(let w=220;w>=60;w-=4){const h=Math.round(w*img.height/img.width);const k=Math.min(540/w,560/h);const o=document.createElement('canvas');o.width=w;o.height=h;const c=o.getContext('2d');c.drawImage(img,0,0,w,h);const d=c.getImageData(0,0,w,h).data;const pts2=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;if(d[i+3]<110)continue;pts2.push({x:(x-w/2+.5)*k,y:(y-h/2+.5)*k,r:d[i],g:d[i+1],b:d[i+2]})}if(pts2.length<=N){par=pts2;par.k=k;break}}if(!par)return;(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>ready(par))}catch(e){}};img.src=(window.NK_ASSET_BASE||'')+'assets/nkisi-mark.png';},[]);
const jump=i=>{const now=performance.now()-(window.__ahT0||0);off.current+=( i*AH_CYCLE-((now+off.current)%(AH_CYCLE*3)) );};
ahLoop(t=>{window.__ahT0=window.__ahT0||performance.now()-t;const c=cv.current;if(!c)return;const ctx=c.getContext('2d');const q=p.current;ahEase(q);ctx.setTransform(2,0,0,2,0,0);ctx.clearRect(0,0,CW,CH);
const intro=Math.min(1,t/2800),ie=1-Math.pow(1-intro,3);const tc=((t+off.current)%(AH_CYCLE*3)+AH_CYCLE*3)%(AH_CYCLE*3);const k=Math.floor(tc/AH_CYCLE),loc=tc%AH_CYCLE,nk=(k+1)%3;const m=loc<AH_HOLD?0:(loc-AH_HOLD)/AH_MORPH;
const ak=m>.5?nk:k;if(ak!==last.current){last.current=ak;setSt(ak)}if(((t/120)|0)!==((t-16)/120|0))setPr(m>.5?0:Math.min(1,loc/AH_HOLD));
const wW=k===2?1-m:(nk===2?m:0),pW=k===0?1-m:(nk===0?m:0);const ay=Math.sin(t/2400)*(.55-wW*.3-pW*.38)+q.x*(.9-pW*.55),ax=q.y*-.45-wW*.62;const wv=d=>[d.u,Math.sin(d.u*.013+t/650)*40+Math.cos(d.v*.017+t/820)*36+30,d.v];const cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax);
const r=c.getBoundingClientRect();const mx=(q.mx-r.left)/r.width*CW,my=(q.my-r.top)/r.height*CH;const bt=t-burst.current;
const near=[];if(mx>-500){const gr=ctx.createRadialGradient(mx,my,0,mx,my,140);gr.addColorStop(0,'rgba(68,224,226,.16)');gr.addColorStop(1,'rgba(68,224,226,0)');ctx.fillStyle=gr;ctx.fillRect(mx-140,my-140,280,280)}
ctx.globalCompositeOperation='lighter';const PK=(pts.pk||3)*.92;
for(const D of dust.current){const X=D[0]*Math.cos(ay*.3)+D[2]*Math.sin(ay*.3);const f=900/(900+400+D[2]*.3);ctx.globalAlpha=.18+D[3]*.2;ctx.fillStyle='#44E0E2';ctx.fillRect(CW/2+X*f,CH/2+(D[1]+Math.sin(t/3000+D[3]*6)*20)*f,1.4,1.4)}
ctx.globalCompositeOperation=pW>.5?'source-over':'lighter';for(const d of pts.current){let pm=m?Math.min(1,Math.max(0,(m-d.dl*.4)/.6)):0;pm=pm<.5?4*pm*pm*pm:1-Math.pow(-2*pm+2,3)/2;const A=k===2?wv(d):d.T[k],B=nk===2?wv(d):d.T[nk];let x=A[0]+(B[0]-A[0])*pm,y=A[1]+(B[1]-A[1])*pm,z=A[2]+(B[2]-A[2])*pm+Math.sin(pm*Math.PI)*d.n*160;
x=d.s0[0]+(x-d.s0[0])*ie;y=d.s0[1]+(y-d.s0[1])*ie;z=d.s0[2]+(z-d.s0[2])*ie;
let X=x*cy+z*sy,Z=-x*sy+z*cy;let Y=y*cx-Z*sx;Z=y*sx+Z*cx;const f=900/(900-Z);let px=CW/2+X*f+d.ox,py=CH/2-40+Y*f+d.oy;
const dx=px-mx,dy=py-my,dd=dx*dx+dy*dy;let hl=0;if(dd<16000){hl=1-dd/16000;hl*=hl;if(dd<4200&&near.length<22)near.push(px,py)}
d.vx*=.86;d.vy*=.86;d.ox=(d.ox+d.vx)*.94;d.oy=(d.oy+d.vy)*.94;
const CA=d.C[k],CB=d.C[nk];const cr=CA[0]+(CB[0]-CA[0])*pm,cg=CA[1]+(CB[1]-CA[1])*pm,cb=CA[2]+(CB[2]-CA[2])*pm,w=hl*.6;ctx.fillStyle='rgb('+((cr+(230-cr)*w)|0)+','+((cg+(255-cg)*w)|0)+','+((cb+(255-cb)*w)|0)+')';
const p0=k===0?1-pm:(nk===0?pm:0);ctx.globalAlpha=Math.min(1,Math.max(.12,Math.min(.85,(f-.55)*.9))*(1-p0)+p0*.96+hl*.4);const sz=((1.7*f*f)*(1-p0)+PK*f*p0)*(1+hl*1.2);ctx.fillRect(px-sz/2,py-sz/2,sz,sz)}
if(near.length){ctx.strokeStyle='#44E0E2';ctx.lineWidth=.6;for(let i=0;i<near.length;i+=2){ctx.globalAlpha=.22;ctx.beginPath();ctx.moveTo(mx,my);ctx.lineTo(near[i],near[i+1]);ctx.stroke();if(i>=2){ctx.globalAlpha=.12;ctx.beginPath();ctx.moveTo(near[i-2],near[i-1]);ctx.lineTo(near[i],near[i+1]);ctx.stroke()}}ctx.globalAlpha=.9;ctx.fillStyle='#E6FFFF';ctx.beginPath();ctx.arc(mx,my,2.5,0,6.283);ctx.fill()}
ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1});
const doBurst=e=>{const c=cv.current;if(!c)return;const r=c.getBoundingClientRect();const bx=(e.clientX-r.left)/r.width*CW,by=(e.clientY-r.top)/r.height*CH;burst.current=performance.now();for(const d of pts.current){const a=Math.random()*6.283,v=6+Math.random()*16;d.vx+=Math.cos(a)*v;d.vy+=Math.sin(a)*v}};
return <section ref={root} style={{position:'relative',width:fluid?'100%':AH_W,height:AH_H,overflow:'hidden',background:'var(--ink-950)',display:'flex',alignItems:'center',padding:'0 '+padX,boxSizing:'border-box',borderBottom:fluid?'1px solid var(--border-1)':'none'}}>
<div className="ah-glow" style={{position:'absolute',right:'calc('+edge+' - 60px)',top:'50%',width:820,height:820,marginTop:-410,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.2),transparent 72%)',pointerEvents:'none'}}></div>
<AhCopy max={500} size={52} onServices={onServices} onContact={onContact} homeHref={homeHref}/>
<canvas className="ah-cv" ref={cv} onClick={doBurst} width={CW*2} height={CH*2} style={{position:'absolute',right:'calc('+edge+' + 10px)',top:20,width:CW,height:CH,cursor:'crosshair'}}></canvas>
<div className="ah-chapters" style={{position:'absolute',right:'calc('+edge+' + 56px)',bottom:36,zIndex:3,display:'flex',gap:28,alignItems:'flex-end'}}>
{AH_STAGES.map(([l,d],i)=><button key={l} onClick={()=>jump(i)} style={{all:'unset',cursor:'pointer',display:'flex',flexDirection:'column',gap:8,width:150}}>
<span style={{height:2,background:'var(--border-1)',position:'relative',overflow:'hidden'}}><span style={{position:'absolute',left:0,top:0,bottom:0,width:(st===i?pr*100:0)+'%',background:'var(--teal-400)'}}></span></span>
<span style={{font:'var(--text-label)',fontFamily:'var(--font-mono)',color:st===i?'var(--fg-accent)':'var(--fg-3)'}}>0{i+1}</span>
<span style={{font:'600 16px var(--font-sans)',color:st===i?'var(--fg-1)':'var(--fg-3)'}}>{l}</span>
<span style={{fontSize:12,lineHeight:1.35,color:'var(--fg-3)',opacity:st===i?1:.6}}>{d}</span></button>)}</div>
<span className="ah-hint" style={{position:'absolute',left:padX,bottom:36,font:'var(--text-label)',color:'var(--fg-3)'}}>Hover to light up connections · click to scatter</span>
</section>;}

const ABOUT_HERO_VARIANTS=[['1a','Gyroscope',AhGyro,'Practice areas orbit the parrot on three tilted 3D rings; the whole gyroscope tilts with the cursor.'],['1b','Extruded wordmark',AhExtrude,"A deep-extruded N'KISI wordmark sways in 3D and follows the cursor; copy sits below in two columns."],['1c','Impact columns',AhIso,'Isometric 3D columns rise from a grid floor, one per impact number. Click to replay.'],['1d','Particle parrot',AhParticles,'7,000 glowing particles tell the brand story: parrot (Intelligence) → “950 words” speech bubble (Communication) → a flowing wave (Adaptability). Hover lights up neural-style links; click bursts them; the chapters below jump between shapes.']];
Object.assign(window,{ABOUT_HERO_VARIANTS,AhParticles});
