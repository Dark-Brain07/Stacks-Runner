export function map42<T,R>(fn:(v:T)=>R):(src:T[])=>R[]{return src=>src.map(fn);}
export function filter42<T>(pred:(v:T)=>boolean):(src:T[])=>T[]{return src=>src.filter(pred);}
export function reduce42<T,R>(fn:(acc:R,v:T)=>R,init:R):(src:T[])=>R{return src=>src.reduce(fn,init);}