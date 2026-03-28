export class PackagerStep{private opts:Record<string,any>={};
configure(o:Record<string,any>){this.opts={...this.opts,...o};}
run():Promise<{ok:boolean,ms:number}>{const t=Date.now();return Promise.resolve({ok:Object.keys(this.opts).length>0,ms:Date.now()-t});}
reset(){this.opts={};}}