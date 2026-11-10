import React from 'react';
const labelSt={font:'var(--text-label)',color:'var(--fg-1)'};const hintSt=(e)=>({fontSize:12,color:e?'var(--danger)':'var(--fg-3)'});
export function Select({name,label,hint,error,options=[],value,defaultValue,onChange,disabled=false,size='md',style}){const [f,setF]=React.useState(false);
return <label style={{display:'flex',flexDirection:'column',gap:6,...style}}>{label&&<span style={labelSt}>{label}</span>}
<span style={{position:'relative',display:'flex'}}><select name={name} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{appearance:'none',WebkitAppearance:'none',width:'100%',height:'var(--control-'+size+')',padding:'0 36px 0 12px',background:'var(--ink-950)',color:disabled?'var(--fg-disabled)':'var(--fg-1)',border:'1px solid '+(error?'var(--danger)':f?'var(--border-focus)':'var(--border-2)'),borderRadius:'var(--radius-1)',boxShadow:f?'var(--glow-accent)':'none',font:'var(--text-body-md)',outline:0,cursor:'pointer'}}>
{options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}</select>
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--fg-accent)" strokeWidth="2.5" style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none'}}><path d="m6 9 6 6 6-6"/></svg></span>
{(error||hint)&&<span style={hintSt(error)}>{error||hint}</span>}</label>;}
