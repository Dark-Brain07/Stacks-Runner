const KEY='runner-local-lb';const MAX=10;export interface Entry{name:string;score:number;date:number;wave:number;}
export function getBoard():Entry[]{try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch{return[];}}
export function addEntry(e:Entry):number{const b=getBoard();b.push(e);b.sort((a,c)=>c.score-a.score);const top=b.slice(0,MAX);localStorage.setItem(KEY,JSON.stringify(top));return top.findIndex(x=>x.date===e.date)+1;}
export function clearBoard(){localStorage.removeItem(KEY);}