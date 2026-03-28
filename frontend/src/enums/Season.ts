export enum Season{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getSeasonLabel(v:Season):string{return Season[v]||'Unknown';}