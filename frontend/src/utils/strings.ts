export function truncate(s:string,max:number):string{return s.length>max?s.slice(0,max)+'...':s;}
export function capitalize(s:string):string{return s.charAt(0).toUpperCase()+s.slice(1);}
export function slugify(s:string):string{return s.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');}
export function pluralize(n:number,word:string):string{return n===1?word:word+'s';}