export enum TimeOfDay{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getTimeOfDayLabel(v:TimeOfDay):string{return TimeOfDay[v]||'Unknown';}