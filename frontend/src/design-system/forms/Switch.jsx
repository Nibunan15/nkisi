import React from 'react';
export function Switch({label,checked,defaultChecked=false,onChange,disabled=false,style}){const [c,setC]=React.useState(defaultChecked);const on=checked!==undefined?checked:c;
return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,font:'var(--text-body-md)',color:'var(--fg-1)',...style}}>
<input type="checkbox" role="switch" checked={on} disabled={disabled} onChange={e=>{setC(e.target.checked);onChange&&onChange(e.target.checked)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
<span style={{position:'relative',width:36,height:20,background:on?'var(--accent)':'var(--surface-3)',border:'1px solid '+(on?'var(--accent)':'var(--border-2)'),borderRadius:'var(--radius-1)',transition:'background var(--dur-base) var(--ease-out)',boxSizing:'border-box'}}>
<span style={{position:'absolute',top:2,left:on?18:2,width:14,height:14,background:on?'var(--ink-950)':'var(--fg-2)',borderRadius:1,transition:'left var(--dur-base) var(--ease-out)'}}></span></span>{label}</label>;}
