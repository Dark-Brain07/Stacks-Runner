export const compose5=<T>(...fns:Array<(v:T)=>T>)=>(v:T):T=>fns.reduceRight((a,f)=>f(a),v);
export const id5=<T>(v:T):T=>v;