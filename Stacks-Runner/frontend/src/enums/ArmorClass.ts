export enum ArmorClass{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getArmorClassLabel(v:ArmorClass):string{return ArmorClass[v]||'Unknown';}