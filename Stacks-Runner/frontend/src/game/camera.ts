export class Camera{x=0;y=0;private targetX=0;private targetY=0;private smoothing:number;
constructor(smoothing=0.1){this.smoothing=smoothing;}
follow(tx:number,ty:number){this.targetX=tx;this.targetY=ty;}
update(){this.x+=(this.targetX-this.x)*this.smoothing;this.y+=(this.targetY-this.y)*this.smoothing;}
applyTransform(ctx:CanvasRenderingContext2D){ctx.translate(-Math.round(this.x),-Math.round(this.y));}
reset(){this.x=0;this.y=0;this.targetX=0;this.targetY=0;}}