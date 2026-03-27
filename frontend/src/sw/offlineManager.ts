export class OfflineManager{private online=true;
init(){window.addEventListener('online',()=>{this.online=true;});window.addEventListener('offline',()=>{this.online=false;});this.online=navigator.onLine;}
isOnline():boolean{return this.online;}
getQueuedActions():any[]{try{return JSON.parse(localStorage.getItem('offline-queue')||'[]');}catch{return[];}}
queueAction(action:any){const q=this.getQueuedActions();q.push({...action,timestamp:Date.now()});localStorage.setItem('offline-queue',JSON.stringify(q));}}