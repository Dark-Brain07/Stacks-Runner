export enum WeaponType{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getWeaponTypeLabel(v:WeaponType):string{return WeaponType[v]||'Unknown';}