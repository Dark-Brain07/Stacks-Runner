export interface Layer{speed:number;color:string;y:number;height:number;}
export class ParallaxBackground{private layers:Layer[];private offsets:number[];
constructor(layers:Layer[]){this.layers=layers;this.offsets=layers.map(()=>0);}
update(speed:number){this.offsets=this.offsets.map((o,i)=>(o+speed*this.layers[i].speed)%800);}
render(ctx:CanvasRenderingContext2D,w:number){this.layers.forEach((l,i)=>{ctx.fillStyle=l.color;for(let x=-this.offsets[i];x<w;x+=800){ctx.fillRect(x,l.y,800,l.height);}});}}