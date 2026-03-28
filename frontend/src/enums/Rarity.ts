export enum Rarity{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getRarityLabel(v:Rarity):string{return Rarity[v]||'Unknown';}