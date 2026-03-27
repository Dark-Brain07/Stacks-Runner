export class BiomeManager{private seed:number;
constructor(seed=Date.now()){this.seed=seed;}
generate(params?:Record<string,number>):any{return{seed:this.seed,...params};}
setSeed(s:number){this.seed=s;}
getSeed():number{return this.seed;}
reset(){this.seed=Date.now();}}