export class PerformanceMonitor{private frameTimes:number[]=[];private maxSamples:number;
constructor(maxSamples=60){this.maxSamples=maxSamples;}
recordFrame(dt:number){this.frameTimes.push(dt);if(this.frameTimes.length>this.maxSamples)this.frameTimes.shift();}
getAvgFPS():number{if(!this.frameTimes.length)return 0;const avg=this.frameTimes.reduce((a,b)=>a+b,0)/this.frameTimes.length;return Math.round(1000/avg);}
getMinFPS():number{if(!this.frameTimes.length)return 0;return Math.round(1000/Math.max(...this.frameTimes));}
getJankFrames():number{return this.frameTimes.filter(t=>t>33).length;}
reset(){this.frameTimes=[];}}