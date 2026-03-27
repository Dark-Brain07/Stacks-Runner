export class LayerManager{private layers:Map<string,number>=new Map();
setOrder(name:string,z:number){this.layers.set(name,z);}
getOrder(name:string):number{return this.layers.get(name)??0;}
getSorted():string[]{return[...this.layers.entries()].sort((a,b)=>a[1]-b[1]).map(e=>e[0]);}}