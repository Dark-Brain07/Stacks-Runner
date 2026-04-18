export enum Difficulty{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getDifficultyLabel(v:Difficulty):string{return Difficulty[v]||'Unknown';}