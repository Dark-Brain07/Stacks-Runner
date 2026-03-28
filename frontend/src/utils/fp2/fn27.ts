export const compose27=<T>(...fns:Array<(v:T)=>T>)=>(v:T):T=>fns.reduceRight((a,f)=>f(a),v);
export const id27=<T>(v:T):T=>v;