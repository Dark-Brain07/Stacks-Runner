export class SnapshotManager{private results:Array<{name:string,pass:boolean,duration:number}>=[];
run(name:string,fn:()=>void):{pass:boolean,duration:number}{const start=Date.now();let pass=true;try{fn();}catch{pass=false;}const duration=Date.now()-start;this.results.push({name,pass,duration});return{pass,duration};}
getResults(){return[...this.results];}
getSummary():{total:number,passed:number,failed:number}{return{total:this.results.length,passed:this.results.filter(r=>r.pass).length,failed:this.results.filter(r=>!r.pass).length};}
reset(){this.results=[];}}