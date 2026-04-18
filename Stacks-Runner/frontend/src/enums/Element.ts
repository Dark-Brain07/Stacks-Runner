export enum Element{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getElementLabel(v:Element):string{return Element[v]||'Unknown';}