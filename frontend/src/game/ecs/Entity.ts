let nextId=0;
export class Entity{id:number;tags:Set<string>=new Set();active=true;
constructor(){this.id=nextId++;}
addTag(t:string){this.tags.add(t);return this;}
hasTag(t:string){return this.tags.has(t);}
destroy(){this.active=false;}}