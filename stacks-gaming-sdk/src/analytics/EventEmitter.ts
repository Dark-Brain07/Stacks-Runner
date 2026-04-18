type Handler=(...args:any[])=>void;
export class GameEventEmitter{private handlers:Map<string,Set<Handler>>=new Map();
on(event:string,handler:Handler){if(!this.handlers.has(event))this.handlers.set(event,new Set());this.handlers.get(event)!.add(handler);}
off(event:string,handler:Handler){this.handlers.get(event)?.delete(handler);}
emit(event:string,...args:any[]){this.handlers.get(event)?.forEach(h=>h(...args));}
once(event:string,handler:Handler){const wrapped=(...args)=>{handler(...args);this.off(event,wrapped);};this.on(event,wrapped);}}