export class TrailEffect{private points:{x:number,y:number,alpha:number}[]=[];private maxLen:number;
constructor(maxLength=8){this.maxLen=maxLength;}
add(x:number,y:number){this.points.push({x,y,alpha:1});if(this.points.length>this.maxLen)this.points.shift();}
update(){this.points.forEach(p=>p.alpha*=0.85);this.points=this.points.filter(p=>p.alpha>0.05);}
render(ctx:CanvasRenderingContext2D,w:number,h:number,color:string){this.points.forEach(p=>{ctx.globalAlpha=p.alpha*0.4;ctx.fillStyle=color;ctx.fillRect(p.x,p.y,w,h);});ctx.globalAlpha=1;}
clear(){this.points=[];}}