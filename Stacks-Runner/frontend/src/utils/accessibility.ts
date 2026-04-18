const KEY='runner-a11y';
export interface A11yPrefs{reducedMotion:boolean;highContrast:boolean;screenReader:boolean;fontSize:number;}
const DEFAULTS:A11yPrefs={reducedMotion:false,highContrast:false,screenReader:false,fontSize:16};
export function getPrefs():A11yPrefs{try{return{...DEFAULTS,...JSON.parse(localStorage.getItem(KEY)||'{}')};}catch{return{...DEFAULTS};}}
export function setPrefs(p:Partial<A11yPrefs>){localStorage.setItem(KEY,JSON.stringify({...getPrefs(),...p}));}
export function prefersReducedMotion():boolean{return getPrefs().reducedMotion||window.matchMedia('(prefers-reduced-motion:reduce)').matches;}