export class LoadTimeTracker{private samples:number[]=[];private recording=false;
start(){this.recording=true;this.samples=[];}
stop():{avg:number,max:number,min:number,count:number}{this.recording=false;const s=this.samples;if(!s.length)return{avg:0,max:0,min:0,count:0};return{avg:s.reduce((a,b)=>a+b,0)/s.length,max:Math.max(...s),min:Math.min(...s),count:s.length};}
record(value:number){if(this.recording)this.samples.push(value);}
reset(){this.samples=[];this.recording=false;}}