import React from 'react';
export function Dialog({open=true,title,children,actions,onClose,width=440,inline=false}){if(!open)return null;
const panel=<div role="dialog" aria-modal="true" style={{width,maxWidth:'100%',background:'var(--surface-2)',border:'1px solid var(--border-2)',boxShadow:'var(--shadow-3)',clipPath:'var(--clip-chamfer-lg)'}}>
<div style={{height:3,background:'var(--accent)'}}></div>
<div style={{padding:'20px 24px 0',display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16}}><div style={{font:'var(--text-h3)',color:'var(--fg-1)'}}>{title}</div>
{onClose&&<button aria-label="Close" onClick={onClose} style={{border:0,background:'transparent',color:'var(--fg-3)',fontSize:22,lineHeight:1,cursor:'pointer',padding:0}}>×</button>}</div>
<div style={{padding:'10px 24px 20px',font:'var(--text-body-md)',color:'var(--fg-2)'}}>{children}</div>
{actions&&<div style={{padding:'14px 24px 20px',display:'flex',justifyContent:'flex-end',gap:8}}>{actions}</div>}</div>;
if(inline)return panel;
return <div onClick={e=>{if(e.target===e.currentTarget&&onClose)onClose()}} style={{position:'fixed',inset:0,background:'var(--overlay)',backdropFilter:'blur(4px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,zIndex:100}}>{panel}</div>;}
