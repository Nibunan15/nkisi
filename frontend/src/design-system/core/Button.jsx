import React from 'react';
const sizes={sm:{h:'var(--control-sm)',px:12,fs:13},md:{h:'var(--control-md)',px:16,fs:14},lg:{h:'var(--control-lg)',px:22,fs:15}};
const tone={
primary:{bg:'var(--accent)',bgH:'var(--accent-hover)',bgP:'var(--accent-press)',fg:'var(--fg-on-accent)',bd:'transparent'},
secondary:{bg:'var(--surface-2)',bgH:'var(--surface-3)',bgP:'var(--surface-1)',fg:'var(--fg-1)',bd:'var(--border-2)'},
ghost:{bg:'transparent',bgH:'var(--accent-subtle)',bgP:'var(--accent-subtle-hover)',fg:'var(--fg-accent)',bd:'transparent'},
danger:{bg:'var(--red-400)',bgH:'#F58A86',bgP:'var(--red-600)',fg:'var(--ink-950)',bd:'transparent'}};
export function Button({variant='primary',size='md',disabled=false,iconLeft,iconRight,fullWidth=false,children,onClick,type='button',style}){
const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);const t=tone[variant]||tone.primary;const s=sizes[size]||sizes.md;
const bg=disabled?'var(--surface-2)':p?t.bgP:h?t.bgH:t.bg;
return <button type={type} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:8,height:s.h,padding:'0 '+s.px+'px',font:'700 '+s.fs+'px/1 var(--font-sans)',letterSpacing:'.01em',color:disabled?'var(--fg-disabled)':t.fg,background:bg,border:'1px solid '+(disabled?'var(--border-1)':t.bd),borderRadius:'var(--radius-1)',clipPath:variant==='primary'||variant==='danger'?'var(--clip-chamfer-sm)':undefined,cursor:disabled?'not-allowed':'pointer',transition:'background var(--dur-fast) var(--ease-out)',whiteSpace:'nowrap',...style}}>
{iconLeft}{children}{iconRight}</button>;}
