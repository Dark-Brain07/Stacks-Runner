export const easeInQuad=(t:number)=>t*t;
export const easeOutQuad=(t:number)=>t*(2-t);
export const easeInOutQuad=(t:number)=>t<0.5?2*t*t:-1+(4-2*t)*t;
export const easeInCubic=(t:number)=>t*t*t;
export const easeOutCubic=(t:number)=>(--t)*t*t+1;
export const easeInOutCubic=(t:number)=>t<0.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;
export const easeOutElastic=(t:number)=>Math.pow(2,-10*t)*Math.sin((t-0.075)*(2*Math.PI)/0.3)+1;
export const linear=(t:number)=>t;