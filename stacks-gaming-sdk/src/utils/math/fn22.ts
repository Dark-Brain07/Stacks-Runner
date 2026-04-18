export const lerp22=(a:number,b:number,t:number):number=>a+(b-a)*t;
export const clamp22=(v:number,min:number,max:number):number=>Math.max(min,Math.min(max,v));
export const smoothstep22=(e0:number,e1:number,x:number):number=>{const t=clamp22((x-e0)/(e1-e0),0,1);return t*t*(3-2*t);};