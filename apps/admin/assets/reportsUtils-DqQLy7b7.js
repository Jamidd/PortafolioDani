const d=(n,e)=>{const o=new Blob([`\uFEFF${n}`],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(o),c=document.createElement("a");c.href=t,c.download=e,c.click(),URL.revokeObjectURL(t)};function i(n,e=","){return n.includes(e)||n.includes('"')||n.includes(`
`)?`"${n.replace(/"/g,'""')}"`:n}function r(n,e,o,t=","){if(e.length===0)return;const c=[n.join(t),...e.map(s=>s.join(t))].join(`
`);d(c,o)}export{r as d,i as e};
