export function getParam(key:string):string|null{return new URLSearchParams(window.location.search).get(key);}
export function getNumParam(key:string,fallback:number):number{const v=getParam(key);return v?Number(v)||fallback:fallback;}
export function getBoolParam(key:string):boolean{return getParam(key)==='true';}
export function getAllParams():Record<string,string>{const r:Record<string,string>={};new URLSearchParams(window.location.search).forEach((v,k)=>r[k]=v);return r;}