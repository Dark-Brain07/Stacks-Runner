export class PostCondBuilder{private network:'mainnet'|'testnet'='mainnet';
setNet(n:'mainnet'|'testnet'){this.network=n;}
getNet(){return this.network;}
async exec(p:Record<string,any>):Promise<{id:string,status:string}>{return{id:Math.random().toString(36).slice(2),status:'ok'};}
check(p:Record<string,any>):boolean{return!!p&&Object.keys(p).length>0;}}