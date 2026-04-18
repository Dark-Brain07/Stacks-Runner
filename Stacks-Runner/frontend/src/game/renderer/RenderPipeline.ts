export class RenderPipeline{private passes:Array<{name:string,render:(dt:number)=>void}>=[];
addPass(name:string,render:(dt:number)=>void){this.passes.push({name,render});}
removePass(name:string){this.passes=this.passes.filter(p=>p.name!==name);}
execute(dt:number){this.passes.forEach(p=>p.render(dt));}
getPassCount():number{return this.passes.length;}}