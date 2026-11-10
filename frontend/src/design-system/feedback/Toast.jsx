import React from 'react';
const c={info:'var(--accent)',success:'var(--success)',warning:'var(--warning)',danger:'var(--danger)'};
export function Toast({tone='info',title,children,onClose,action,style}){
return <div role="status" style={{display:'flex',gap:12,alignItems:'flex-start',width:360,maxWidth:'100%',padding:'12px 14px',background:'var(--surface-3)',border:'1px solid var(--border-2)',boxShadow:'var(--shadow-2)',borderRadius:'var(--radius-1)',boxSizing:'border-box',...style}}>
<span style={{width:10,height:10,marginTop:5,flex:'none',background:c[tone],clipPath:'polygon(50% 0,100% 50%,50% 100%,0 50%)'}}></span>
<div style={{flex:1,minWidth:0}}>{title&&<div style={{font:'var(--text-label)',color:'var(--fg-1)',marginBottom:2}}>{title}</div>}<div style={{fontSize:13,lineHeight:1.45,color:'var(--fg-2)'}}>{children}</div>{action&&<div style={{marginTop:8}}>{action}</div>}</div>
{onClose&&<button aria-label="Dismiss" onClick={onClose} style={{border:0,background:'transparent',color:'var(--fg-3)',fontSize:18,lineHeight:1,cursor:'pointer',padding:0}}>×</button>}</div>;}
