export class SessionManager{private storage:Storage|null;
constructor(storage?:Storage){this.storage=storage??null;}
save(key:string,data:any){this.storage?.setItem(key,JSON.stringify(data));}
load<T>(key:string):T|null{const d=this.storage?.getItem(key);return d?JSON.parse(d):null;}
clear(key:string){this.storage?.removeItem(key);}
clearAll(){this.storage?.clear();}}