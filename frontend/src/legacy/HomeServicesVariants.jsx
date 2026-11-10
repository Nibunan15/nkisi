/* Converted verbatim from ui_kits/website/HomeServicesVariants.jsx — design code is unchanged; only module wiring, asset paths and form submission were adapted. */
import React from 'react';
(()=>{
const {Button,Badge}=window.NKisiDesignSystem_91614a;
const W=1280,H=800;
const SV=[{t:'HR Consulting',k:'Consulting',d:'Supporting organizations in talent development, employee engagement, behavioral alignment, and performance enhancement strategies.',i:'users',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/pexels-photo-36765734-36765734-scaled-ro2g82q84jpjqa74scwv34hvv3uwgpddjtvmqf4fyc.jpg'},{t:'Business Consulting',k:'Consulting',d:'Helping businesses improve operational efficiency, strategic direction, growth planning, and organizational effectiveness.',i:'briefcase',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/people-discussion-5069845_1920-4-1-1024x683-1-qrkx232j7zitsnc4x5azyrr0c36uqyw7843fxdd610.jpg'},{t:'Brand Strategy',k:'Consulting',d:'Building impactful brand positioning, communication strategy, perception management, and audience engagement.',i:'target',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/g93d7b3757e829734dd2df3799375dde05772e09621afc9db398187c27f2235a2d605be8065ce854eeb18de5b8cd9ab84dfae0cfa354ec95e46f109c2e41f7115_1280-3639565-ro2g4xxlcff512qz305mrwykkvaut0xl4bld57rop0.jpg'},{t:'Corporate Outbound Training',k:'Training',d:'High-impact activity-based learning programs focused on leadership, collaboration, adaptability, and execution.',i:'mountain',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/pexels-photo-18304835-18304835-scaled-ro2g9ifckfobgu41eh9ce9g8jas3822m2xrc4mzsg4.jpg'},{t:'Leadership and Development',k:'Training',d:'Enhancing leadership capability, communication, execution excellence, team collaboration, and workplace performance.',i:'compass',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/0x0-qrkx6s9he5yfugidh6fufl1z9g0x8hjvvdiub6eax0.webp'},{t:'Organizational Transformation',k:'Training',d:'Industry-oriented workshops and capability-building initiatives for students, faculty, and future professionals.',i:'graduation-cap',img:'https://nkisi.in/wp-content/uploads/elementor/thumbs/a-qrkhmp5j318nv42ezktp7f58l2mbp71qj7e8smuchw.jpg'}];
const N=SV.length;
const eb={font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'};
const h2s={margin:0,font:'var(--text-display)',fontSize:52,lineHeight:1.05,letterSpacing:'var(--ls-display)',color:'var(--fg-1)'};
const sec={position:'relative',width:W,height:H,overflow:'hidden',background:'var(--ink-950)',boxSizing:'border-box'};
const mono={font:'700 14px/1 var(--font-mono)',color:'var(--fg-accent)'};
const icoC={};const Ico=({n,s=16})=>{const key=n+s;if(!(key in icoC)){const k=n.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join('');const ic=window.lucide&&lucide.icons&&lucide.icons[k];icoC[key]=ic?lucide.createElement(ic).outerHTML.replace(/width="24"/,'width="'+s+'"').replace(/height="24"/,'height="'+s+'"'):''}return <span style={{width:s,height:s,display:'inline-flex',flex:'none'}} dangerouslySetInnerHTML={{__html:icoC[key]}}></span>};
const IcoBox=({n,s=22,b=48})=><span style={{width:b,height:b,flex:'none',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-subtle)',color:'var(--fg-accent)',clipPath:'var(--clip-chamfer-sm)'}}><Ico n={n} s={s}/></span>;
const pad2=i=>String(i+1).padStart(2,'0');
function useAuto(len,ms,paused){const [a,setA]=React.useState(0);React.useEffect(()=>{if(paused)return;const id=setInterval(()=>setA(x=>(x+1)%len),ms);return()=>clearInterval(id)},[paused,len,ms]);return [a,setA];}
const Head=({right})=><div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24}}><div style={{display:'flex',flexDirection:'column',gap:12}}><span style={eb}>Bringing the best version of the organization &amp; individuals</span><h2 style={h2s}>Our Services</h2></div>{right}</div>;

/* 1a — 3D cylinder carousel */
function HsCarousel(){const R=430,STEP=360/N;const [rot,setRot]=React.useState(0);const [hold,setHold]=React.useState(false);const drag=React.useRef(null);
const idx=((Math.round(-rot/STEP)%N)+N)%N;const s=SV[idx];
React.useEffect(()=>{if(hold)return;const id=setInterval(()=>setRot(r=>Math.round(r/STEP)*STEP-STEP),3600);return()=>clearInterval(id)},[hold]);
const down=e=>{drag.current={x:e.clientX,r:rot,moved:false};setHold(true);e.currentTarget.setPointerCapture(e.pointerId)};
const move=e=>{const d=drag.current;if(!d)return;const dx=e.clientX-d.x;if(Math.abs(dx)>3)d.moved=true;setRot(d.r+dx*.25)};
const up=()=>{if(!drag.current)return;drag.current=null;setRot(r=>Math.round(r/STEP)*STEP)};
const goTo=i=>{let target=-i*STEP;const cur=rot;const diff=((target-cur)%360+540)%360-180;setRot(Math.round((cur+diff)/STEP)*STEP)};
return <section style={{...sec,padding:'72px 96px',display:'grid',gridTemplateColumns:'400px minmax(0,1fr)',gap:24}} onMouseLeave={()=>setHold(false)}>
<div style={{display:'flex',flexDirection:'column',gap:28,position:'relative',zIndex:2}}>
<div style={{display:'flex',flexDirection:'column',gap:12}}><span style={eb}>Bringing the best version of the organization &amp; individuals</span><h2 style={h2s}>Our Services</h2></div>
<div key={idx} style={{display:'flex',flexDirection:'column',gap:16,marginTop:24,animation:'hsFade .6s cubic-bezier(.2,.8,.2,1)'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}><span style={{font:'700 56px/1 var(--font-display, serif)',color:'var(--teal-400)'}}>{pad2(idx)}</span><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>/ {pad2(N-1)}</span><Badge tone="neutral">{s.k}</Badge></div>
<div style={{display:'flex',alignItems:'center',gap:14}}><IcoBox n={s.i}/><span style={{font:'var(--text-h2)',color:'var(--fg-1)'}}>{s.t}</span></div>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:18,color:'var(--fg-2)',minHeight:84}}>{s.d}</p>
<div><Button>Enquire about this service</Button></div></div>
<div style={{marginTop:'auto',display:'flex',gap:8,alignItems:'center'}}><button onClick={()=>{setHold(true);setRot(r=>Math.round(r/STEP)*STEP+STEP)}} style={hsArrow}>←</button><button onClick={()=>{setHold(true);setRot(r=>Math.round(r/STEP)*STEP-STEP)}} style={hsArrow}>→</button><span style={{font:'var(--text-label)',color:'var(--fg-3)',marginLeft:8}}>Drag the ring to spin</span></div></div>
<div onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} style={{position:'relative',perspective:1500,cursor:drag.current?'grabbing':'grab',touchAction:'none',userSelect:'none'}}>
<div style={{position:'absolute',left:'50%',bottom:40,width:640,height:80,marginLeft:-320,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(68,224,226,.18),transparent)'}}></div>
<div style={{position:'absolute',left:'50%',top:'50%',width:0,height:0,transformStyle:'preserve-3d',transform:`translateZ(${-R}px) rotateX(-6deg) rotateY(${rot}deg)`,transition:drag.current?'none':'transform 1s cubic-bezier(.2,.8,.2,1)'}}>
{SV.map((v,i)=>{const on=i===idx;return <div key={v.t} onClick={()=>{if(!drag.current||!drag.current.moved){setHold(true);goTo(i)}}} style={{position:'absolute',left:-150,top:-200,width:300,height:400,transform:`rotateY(${i*STEP}deg) translateZ(${R}px)`,backfaceVisibility:'hidden',background:'var(--surface-1)',border:'1px solid '+(on?'var(--teal-400)':'var(--border-1)'),boxShadow:on?'0 30px 80px rgba(68,224,226,.18)':'none',display:'flex',flexDirection:'column',overflow:'hidden',clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))',transition:'border-color .4s, box-shadow .4s'}}>
<div style={{height:250,position:'relative',overflow:'hidden'}}><img src={v.img} alt="" draggable="false" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:on?'none':'grayscale(.7) brightness(.6)',transition:'filter .5s'}}/><span style={{position:'absolute',left:16,top:16,padding:'6px 8px',background:'rgba(7,14,15,.75)',...mono}}>{pad2(i)}</span></div>
<div style={{padding:20,display:'flex',flexDirection:'column',gap:10}}><span style={{font:'700 11px/1 var(--font-sans)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-3)'}}>{v.k}</span><span style={{font:'var(--text-h3)',fontSize:21,color:'var(--fg-1)',lineHeight:1.2}}>{v.t}</span></div></div>})}
</div></div></section>;}
const hsArrow={all:'unset',cursor:'pointer',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-2)',color:'var(--fg-1)',font:'600 18px var(--font-sans)'};

/* 1b — Folding 3D accordion panels */
function HsPanels(){const [hov,setHov]=React.useState(false);const [a,setA]=useAuto(N,4200,hov);
return <section style={{...sec,padding:'72px 96px',display:'flex',flexDirection:'column',gap:40}}>
<Head right={<span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>Hover a panel to open it</span>}/>
<div onMouseLeave={()=>setHov(false)} style={{flex:1,display:'flex',gap:12,perspective:1600}}>
{SV.map((v,i)=>{const on=i===a;const side=i<a?1:i>a?-1:0;return <div key={v.t} onMouseEnter={()=>{setHov(true);setA(i)}} style={{position:'relative',flex:on?5.2:1,minWidth:0,transform:`rotateY(${side*16}deg) translateZ(${on?40:0}px)`,transformOrigin:side>0?'right':'left',transition:'flex .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1)',overflow:'hidden',cursor:'pointer',border:'1px solid '+(on?'var(--teal-400)':'var(--border-1)'),clipPath:'var(--clip-chamfer-lg, var(--clip-chamfer-sm))'}}>
<img src={v.img} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',transform:`scale(${on?1.02:1.25})`,filter:on?'none':'grayscale(.8) brightness(.45)',transition:'transform 1.2s cubic-bezier(.2,.8,.2,1), filter .8s'}}/>
<div style={{position:'absolute',inset:0,background:on?'linear-gradient(180deg,rgba(7,14,15,0) 25%,rgba(7,14,15,.92) 78%)':'rgba(7,14,15,.35)',transition:'background .6s'}}></div>
<div style={{position:'absolute',left:0,right:0,top:22,display:'flex',justifyContent:'center',opacity:on?0:1,transition:'opacity .3s'}}><span style={mono}>{pad2(i)}</span></div>
<div style={{position:'absolute',left:'50%',bottom:28,transform:'translateX(-50%) rotate(180deg)',writingMode:'vertical-rl',whiteSpace:'nowrap',font:'600 19px var(--font-sans)',color:'var(--fg-1)',opacity:on?0:1,transition:'opacity .3s'}}>{v.t}</div>
<div style={{position:'absolute',left:32,right:32,bottom:32,display:'flex',flexDirection:'column',gap:14,opacity:on?1:0,transform:`translateY(${on?0:30}px)`,transition:on?'opacity .5s .35s, transform .6s .35s cubic-bezier(.2,.8,.2,1)':'opacity .2s, transform .2s',pointerEvents:on?'auto':'none'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}><IcoBox n={v.i}/><span style={{...mono,whiteSpace:'nowrap'}}>{pad2(i)} / {pad2(N-1)}</span><Badge tone="neutral">{v.k}</Badge></div>
<span style={{font:'var(--text-h1)',fontSize:34,color:'var(--fg-1)',lineHeight:1.1,textWrap:'balance',minWidth:440}}>{v.t}</span>
<p style={{margin:0,font:'var(--text-body-lg)',fontSize:17,color:'var(--ink-100, #DCE7E7)',maxWidth:500}}>{v.d}</p>
<div><Button size="sm">Enquire</Button></div></div>
{on&&!hov&&<span key={'p'+a} style={{position:'absolute',left:0,top:0,height:3,background:'var(--teal-400)',animation:'hsBar 4.2s linear forwards'}}></span>}
</div>})}</div></section>;}

/* 1c — Depth tilt cards with glare; click to flip */
function HsTiltCard({v,i}){const ref=React.useRef();const [st,setSt]=React.useState({rx:0,ry:0,gx:50,gy:50,on:false});const [flip,setFlip]=React.useState(false);
const mv=e=>{const r=ref.current.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;setSt({rx:(.5-y)*16,ry:(x-.5)*20,gx:x*100,gy:y*100,on:true})};
const face={position:'absolute',inset:0,backfaceVisibility:'hidden',transformStyle:'preserve-3d',border:'1px solid var(--border-1)',background:'var(--surface-1)',overflow:'hidden'};
return <div style={{perspective:1100,animation:`hsRise .9s ${i*.09}s cubic-bezier(.2,.8,.2,1) both`}}>
<div ref={ref} onPointerMove={mv} onPointerLeave={()=>setSt({rx:0,ry:0,gx:50,gy:50,on:false})} onClick={()=>setFlip(f=>!f)} style={{position:'relative',height:262,transformStyle:'preserve-3d',transform:`rotateX(${st.rx}deg) rotateY(${st.ry+(flip?180:0)}deg) translateZ(${st.on?20:0}px)`,transition:st.on?'transform .12s ease-out':'transform .7s cubic-bezier(.2,.8,.2,1)',cursor:'pointer'}}>
<div style={{...face,borderColor:st.on?'var(--teal-400)':'var(--border-1)'}}>
<img src={v.img} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',transform:`scale(1.12) translate(${-st.ry*.6}px,${st.rx*.6}px)`,filter:'brightness(.55)',transition:st.on?'none':'transform .7s'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(7,14,15,.1),rgba(7,14,15,.9))'}}></div>
<div style={{position:'absolute',left:22,top:22,right:22,display:'flex',justifyContent:'space-between',transform:'translateZ(50px)'}}><IcoBox n={v.i}/><span style={{...mono,padding:'6px 8px',background:'rgba(7,14,15,.7)',alignSelf:'flex-start'}}>{pad2(i)}</span></div>
<div style={{position:'absolute',left:22,right:22,bottom:20,display:'flex',flexDirection:'column',gap:6,transform:'translateZ(36px)'}}><span style={{font:'700 11px/1 var(--font-sans)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-accent)'}}>{v.k}</span><span style={{font:'var(--text-h3)',fontSize:23,color:'var(--fg-1)',lineHeight:1.15}}>{v.t}</span><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>Click to learn more ↻</span></div>
<div style={{position:'absolute',inset:0,pointerEvents:'none',opacity:st.on?1:0,transition:'opacity .3s',background:`radial-gradient(circle at ${st.gx}% ${st.gy}%, rgba(255,255,255,.22), transparent 45%)`}}></div></div>
<div style={{...face,transform:'rotateY(180deg)',padding:26,display:'flex',flexDirection:'column',gap:14,borderColor:'var(--teal-400)'}}>
<div style={{display:'flex',alignItems:'center',gap:12}}><IcoBox n={v.i} b={40} s={18}/><span style={{font:'var(--text-h3)',fontSize:20,color:'var(--fg-1)',lineHeight:1.15}}>{v.t}</span></div>
<p style={{margin:0,color:'var(--fg-2)',fontSize:15.5,lineHeight:1.55}}>{v.d}</p>
<div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}><Button size="sm">Enquire</Button><span style={{font:'var(--text-label)',color:'var(--fg-3)'}}>↻ Back</span></div></div>
</div></div>;}
function HsTilt(){const [k,setK]=React.useState(0);return <section style={{...sec,padding:'64px 96px',display:'flex',flexDirection:'column',gap:36}}>
<Head right={<button onClick={()=>setK(x=>x+1)} style={{all:'unset',cursor:'pointer',font:'var(--text-label)',color:'var(--fg-3)'}}>↻ Replay intro</button>}/>
<div key={k} style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:20}}>{SV.map((v,i)=><HsTiltCard key={v.t} v={v} i={i}/>)}</div></section>;}

/* 1d — Six services, six faces of a 3D cube */
const CUBE=360,HALF=CUBE/2;
const FACES=['rotateY(0deg)','rotateY(90deg)','rotateY(180deg)','rotateY(-90deg)','rotateX(90deg)','rotateX(-90deg)'];
const VIEW=[[0,0],[0,-90],[0,-180],[0,90],[-90,0],[90,0]];
function HsCube({fluid,onEnquire,onAll}){const fx=fluid?'max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))':'96px';const [hov,setHov]=React.useState(false);const [a,setA]=useAuto(N,3800,hov);const root=React.useRef();const [tilt,setTilt]=React.useState({x:0,y:0});
const [rx,ry]=VIEW[a];
return <section ref={root} onPointerMove={e=>{const r=root.current.getBoundingClientRect();setTilt({x:((e.clientX-r.left)/r.width-.5)*2,y:((e.clientY-r.top)/r.height-.5)*2})}} onPointerLeave={()=>setTilt({x:0,y:0})} id={fluid?'services':undefined} style={{...sec,...(fluid?{width:'100%',height:'auto',padding:'112px '+fx,gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,460px),1fr))',background:'var(--surface-1)',borderTop:'1px solid var(--border-1)',borderBottom:'1px solid var(--border-1)'}:{padding:'72px 96px',gridTemplateColumns:'500px minmax(0,1fr)'}),display:'grid',gap:40}}>
<div style={{display:'flex',flexDirection:'column',gap:28}}>
<div style={{display:'flex',flexDirection:'column',gap:12}}><span style={eb}>Bringing the best version of the organization &amp; individuals</span><h2 style={h2s}>Our Services</h2></div>
<div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{display:'flex',flexDirection:'column'}}>
{SV.map((v,i)=>{const on=i===a;return <button key={v.t} onClick={()=>setA(i)} onMouseEnter={()=>setA(i)} style={{all:'unset',cursor:'pointer',position:'relative',padding:'14px 0',borderTop:'1px solid var(--border-1)',display:'grid',gridTemplateColumns:'40px minmax(0,1fr) auto',gap:12,alignItems:'start'}}>
<span style={{...mono,color:on?'var(--fg-accent)':'var(--fg-3)',paddingTop:5}}>{pad2(i)}</span>
<span style={{display:'flex',flexDirection:'column',gap:8}}><span style={{font:'600 20px/1.25 var(--font-sans)',color:on?'var(--fg-1)':'var(--fg-3)',transition:'color .3s'}}>{v.t}</span>
<span style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows .5s cubic-bezier(.2,.8,.2,1)'}}><span style={{overflow:'hidden',color:'var(--fg-2)',fontSize:15,lineHeight:1.5}}>{v.d}</span></span></span>
<span style={{color:on?'var(--fg-accent)':'transparent',paddingTop:4,transition:'color .3s'}}><Ico n="arrow-up-right" s={18}/></span>
{on&&!hov&&<span key={'b'+a} style={{position:'absolute',left:0,top:-1,height:1,background:'var(--teal-400)',animation:'hsBar 3.8s linear forwards'}}></span>}</button>})}</div>
{fluid&&<div><Button variant="secondary" onClick={onAll}>View all services →</Button></div>}</div>
<div style={{position:'relative',perspective:1400,minHeight:fluid?600:0}}>
<div style={{position:'absolute',left:'50%',bottom:70,width:420,height:70,marginLeft:-210,borderRadius:'50%',background:'radial-gradient(closest-side,rgba(0,0,0,.7),transparent)'}}></div>
<div style={{position:'absolute',left:'50%',top:'46%',width:CUBE,height:CUBE,margin:-HALF,transformStyle:'preserve-3d',transform:`rotateX(${-12-tilt.y*10}deg) rotateY(${-18+tilt.x*16}deg)`,transition:'transform .4s ease-out'}}>
<div style={{position:'absolute',inset:0,transformStyle:'preserve-3d',transform:`rotateX(${rx}deg) rotateY(${ry}deg)`,transition:'transform 1.1s cubic-bezier(.65,0,.25,1)'}}>
{SV.map((v,i)=>{const on=i===a;return <div key={v.t} style={{position:'absolute',inset:0,transform:`${FACES[i]} translateZ(${HALF}px)`,border:'1px solid '+(on?'var(--teal-400)':'rgba(68,224,226,.25)'),overflow:'hidden',background:'#0B1718'}}>
<img src={v.img} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:on?'brightness(.8)':'brightness(.35) grayscale(.6)',transition:'filter .8s'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(7,14,15,0) 35%,rgba(7,14,15,.92))'}}></div>
<div style={{position:'absolute',left:24,right:24,bottom:22,display:'flex',flexDirection:'column',gap:10}}><div style={{display:'flex',alignItems:'center',gap:10}}><IcoBox n={v.i} b={40} s={18}/><span style={mono}>{pad2(i)}</span></div><span style={{font:'var(--text-h2)',fontSize:28,color:'var(--fg-1)',lineHeight:1.1}}>{v.t}</span></div></div>})}
</div></div>
<div style={{position:'absolute',right:0,bottom:24,display:'flex',gap:10,alignItems:'center'}}><Badge tone="neutral">{SV[a].k}</Badge><Button size="sm" onClick={onEnquire}>Enquire about {SV[a].t}</Button></div>
</div></section>;}

window.HsCube=HsCube;window.HOME_SERVICES_VARIANTS=[['1a','3D ring carousel',HsCarousel,'Six service cards on a rotating 3D cylinder. Auto-spins; drag, arrows or click a card. The front card drives the details on the left.'],['1b','Folding panels',HsPanels,'Six image panels fold in 3D like an accordion; the active one opens wide with its story. Auto-cycles, hover to take over.'],['1c','Depth tilt cards',HsTilt,'Cards rise in with a 3D flip, tilt with the cursor in layered depth with glare, and flip over on click to reveal details.'],['1d','Service cube',HsCube,'Six services on six faces of a 3D cube — it rolls to each face as the list advances. Hover the list to choose; the cube tilts with the cursor.']];
})();
