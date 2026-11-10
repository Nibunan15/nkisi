import React from 'react';
const labelSt={font:'var(--text-label)',color:'var(--fg-1)'};const hintSt=(e)=>({fontSize:12,color:e?'var(--danger)':'var(--fg-3)'});
export function Input({name,autoComplete,label,hint,error,placeholder,value,defaultValue,onChange,type='text',disabled=false,iconLeft,size='md',style}){const [f,setF]=React.useState(false);
const bd=error?'var(--danger)':f?'var(--border-focus)':'var(--border-2)';
return <label style={{display:'flex',flexDirection:'column',gap:6,...style}}>{label&&<span style={labelSt}>{label}</span>}
<span style={{display:'flex',alignItems:'center',gap:8,height:'var(--control-'+size+')',padding:'0 12px',background:disabled?'var(--surface-1)':'var(--ink-950)',border:'1px solid '+bd,borderRadius:'var(--radius-1)',boxShadow:f&&!error?'var(--glow-accent)':'none',color:'var(--fg-3)',transition:'box-shadow var(--dur-fast),border-color var(--dur-fast)'}}>{iconLeft}
<input type={type} name={name} autoComplete={autoComplete} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{flex:1,minWidth:0,border:0,outline:0,background:'transparent',color:disabled?'var(--fg-disabled)':'var(--fg-1)',font:'var(--text-body-md)'}}/></span>
{(error||hint)&&<span style={hintSt(error)}>{error||hint}</span>}</label>;}
