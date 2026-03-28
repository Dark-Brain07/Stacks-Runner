export enum Biome{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getBiomeLabel(v:Biome):string{return Biome[v]||'Unknown';}