import React from 'react';
export function Card({eyebrow,title,children,footer,media,interactive=false,accent=false,padding=24,style}){const [h,setH]=React.useState(false);
return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:'var(--surface-card)',border:'1px solid '+(accent||(interactive&&h)?'var(--teal-600)':'var(--border-1)'),borderRadius:'var(--radius-1)',boxShadow:interactive&&h?'var(--shadow-2)':'var(--shadow-1)',overflow:'hidden',transition:'border-color var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',cursor:interactive?'pointer':'default',display:'flex',flexDirection:'column',...style}}>
{accent&&<div style={{height:3,background:'var(--accent)'}}></div>}
{media}
<div style={{padding,display:'flex',flexDirection:'column',gap:8}}>
{eyebrow&&<div style={{font:'var(--text-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--fg-accent)'}}>{eyebrow}</div>}
{title&&<div style={{font:'var(--text-h3)',color:'var(--fg-1)'}}>{title}</div>}
{children&&<div style={{font:'var(--text-body-md)',color:'var(--fg-2)'}}>{children}</div>}
</div>
{footer&&<div style={{padding:'12px '+padding+'px',borderTop:'1px solid var(--border-1)',display:'flex',gap:8,alignItems:'center'}}>{footer}</div>}
</div>;}
