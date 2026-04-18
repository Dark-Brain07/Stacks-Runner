export class CleanupRegistry{private cleanups:(()=>void)[]=[];
register(fn:()=>void){this.cleanups.push(fn);}
execute(){this.cleanups.forEach(fn=>{try{fn();}catch(e){console.error('Cleanup error:',e);}});this.cleanups=[];}
get pendingCount(){return this.cleanups.length;}}