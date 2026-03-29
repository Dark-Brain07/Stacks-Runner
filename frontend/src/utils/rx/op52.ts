export function map52<T,R>(fn:(v:T)=>R):(src:T[])=>R[]{return src=>src.map(fn);}
export function filter52<T>(pred:(v:T)=>boolean):(src:T[])=>T[]{return src=>src.filter(pred);}
export function reduce52<T,R>(fn:(acc:R,v:T)=>R,init:R):(src:T[])=>R{return src=>src.reduce(fn,init);}