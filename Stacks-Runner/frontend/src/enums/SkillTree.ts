export enum SkillTree{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getSkillTreeLabel(v:SkillTree):string{return SkillTree[v]||'Unknown';}