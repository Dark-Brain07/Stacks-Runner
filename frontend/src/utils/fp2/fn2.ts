export const compose2=<T>(...fns:Array<(v:T)=>T>)=>(v:T):T=>fns.reduceRight((a,f)=>f(a),v);
export const id2=<T>(v:T):T=>v;