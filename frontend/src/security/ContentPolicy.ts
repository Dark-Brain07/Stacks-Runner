export class ContentPolicy{private active=true;
enable(){this.active=true;}
disable(){this.active=false;}
validate(input:any):boolean{if(!this.active)return true;return typeof input!=='undefined';}
sanitize(input:string):string{return input.replace(/[<>]/g,'');}
log(action:string){console.log('[ContentPolicy]',action);}}