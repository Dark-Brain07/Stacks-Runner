type Callback=(visible:boolean)=>void;const listeners:Callback[]=[];
export function onVisibilityChange(cb:Callback):()=>void{listeners.push(cb);return()=>{const i=listeners.indexOf(cb);if(i!==-1)listeners.splice(i,1);}}
function handleChange(){const v=!document.hidden;listeners.forEach(cb=>cb(v));}
if(typeof document!=='undefined'){document.addEventListener('visibilitychange',handleChange);}
export function isPageVisible():boolean{return!document.hidden;}