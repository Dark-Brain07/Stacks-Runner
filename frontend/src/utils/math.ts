export function clamp(v:number,min:number,max:number):number{return Math.max(min,Math.min(max,v));}
export function lerp(a:number,b:number,t:number):number{return a+(b-a)*t;}
export function mapRange(v:number,inMin:number,inMax:number,outMin:number,outMax:number):number{return(v-inMin)*(outMax-outMin)/(inMax-inMin)+outMin;}
export function randomInt(min:number,max:number):number{return Math.floor(Math.random()*(max-min+1))+min;}