export class LeaderboardScene{private active=false;private loaded=false;
onEnter():void{this.active=true;}
onExit():void{this.active=false;}
update(dt:number):void{if(!this.active)return;}
render(ctx:CanvasRenderingContext2D):void{}
isActive():boolean{return this.active;}
preload():Promise<void>{this.loaded=true;return Promise.resolve();}
isLoaded():boolean{return this.loaded;}
dispose():void{this.active=false;this.loaded=false;}}