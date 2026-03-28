export const compose39=<T>(...fns:Array<(v:T)=>T>)=>(v:T):T=>fns.reduceRight((a,f)=>f(a),v);
export const id39=<T>(v:T):T=>v;