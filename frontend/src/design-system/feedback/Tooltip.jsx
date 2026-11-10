import React from 'react';
export function Tooltip({content,children,placement='top',open}){const [h,setH]=React.useState(false);const show=open!==undefined?open:h;
const pos={top:{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'},bottom:{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'},right:{left:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'},left:{right:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}}[placement];
return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-flex'}}>{children}
{show&&<span role="tooltip" style={{position:'absolute',...pos,whiteSpace:'nowrap',padding:'6px 10px',background:'var(--surface-inverse)',color:'var(--ink-900)',font:'600 12px/1.2 var(--font-sans)',borderRadius:'var(--radius-1)',boxShadow:'var(--shadow-2)',zIndex:50,pointerEvents:'none'}}>{content}</span>}</span>;}
