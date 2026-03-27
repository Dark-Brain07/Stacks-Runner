export interface Popup{x:number;y:number;text:string;color:string;life:number;}
export class ScorePopupManager{private popups:Popup[]=[];
add(x:number,y:number,points:number,color='#ffcc00'){this.popups.push({x,y,text:'+'+points,color,life:1});}
update(dt:number){this.popups.forEach(p=>{p.y-=dt*60;p.life-=dt*1.5;});this.popups=this.popups.filter(p=>p.life>0);}
render(ctx:CanvasRenderingContext2D){this.popups.forEach(p=>{ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.font='bold 16px monospace';ctx.fillText(p.text,p.x,p.y);});ctx.globalAlpha=1;}}