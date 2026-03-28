export const compose37=<T>(...fns:Array<(v:T)=>T>)=>(v:T):T=>fns.reduceRight((a,f)=>f(a),v);
export const id37=<T>(v:T):T=>v;