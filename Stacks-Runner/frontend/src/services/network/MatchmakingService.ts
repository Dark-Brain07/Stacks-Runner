export class MatchmakingService{private connected=false;
connect():Promise<boolean>{this.connected=true;return Promise.resolve(true);}
disconnect(){this.connected=false;}
isConnected():boolean{return this.connected;}
send(data:any):void{if(!this.connected)throw new Error('Not connected');}
onMessage(handler:(data:any)=>void):void{}
dispose(){this.disconnect();}}