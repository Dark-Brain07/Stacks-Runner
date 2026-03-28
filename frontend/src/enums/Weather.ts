export enum Weather{NONE=0,COMMON=1,RARE=2,EPIC=3,LEGENDARY=4}
export function getWeatherLabel(v:Weather):string{return Weather[v]||'Unknown';}