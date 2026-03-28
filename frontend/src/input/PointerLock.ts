export class PointerLock{private active=false;private events:any[]=[];
start(){this.active=true;this.events=[];}
stop(){this.active=false;}
record(event:any){if(this.active)this.events.push({...event,t:Date.now()});}
getEvents():any[]{return[...this.events];}
clear(){this.events=[];}
isRecording():boolean{return this.active;}
getCount():number{return this.events.length;}}