export interface TxRecord{txId:string;block:number;type:string;timestamp:number;data:any;}
export class OnChainTracker{private records:TxRecord[]=[];
record(tx:TxRecord){this.records.push(tx);}
getByType(type:string){return this.records.filter(r=>r.type===type);}
getRecent(limit=20){return this.records.slice(-limit).reverse();}
getTotalTransactions(){return this.records.length;}}