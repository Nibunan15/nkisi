import React from 'react';
export function Radio({name,options=[],value,defaultValue,onChange,direction='column',style}){const [v,setV]=React.useState(defaultValue);const cur=value!==undefined?value:v;
return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?20:10,...style}}>{options.map(o=>{const val=typeof o==='string'?o:o.value;const lab=typeof o==='string'?o:o.label;const on=cur===val;
return <label key={val} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',font:'var(--text-body-md)',color:'var(--fg-1)'}}>
<input type="radio" name={name} value={val} checked={on} onChange={()=>{setV(val);onChange&&onChange(val)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
<span style={{width:18,height:18,borderRadius:'50%',border:'1px solid '+(on?'var(--accent)':'var(--border-2)'),background:'var(--ink-950)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>{on&&<span style={{width:8,height:8,borderRadius:'50%',background:'var(--accent)'}}></span>}</span>{lab}</label>;})}</div>;}
