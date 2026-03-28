export class PerformanceTracker{private data:any[]=[];private enabled=true;
enable(){this.enabled=true;}
disable(){this.enabled=false;}
track(event:string,props?:Record<string,any>){if(!this.enabled)return;this.data.push({event,props,ts:Date.now()});}
getData():any[]{return[...this.data];}
flush(){const d=[...this.data];this.data=[];return d;}
getMetrics():{total:number,unique:number}{const events=new Set(this.data.map(d=>d.event));return{total:this.data.length,unique:events.size};}}