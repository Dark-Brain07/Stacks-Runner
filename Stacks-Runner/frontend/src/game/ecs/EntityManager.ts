import{Entity}from'./Entity';
export class EntityManager{private entities:Entity[]=[];
create():Entity{const e=new Entity();this.entities.push(e);return e;}
getAll():Entity[]{return this.entities.filter(e=>e.active);}
getByTag(tag:string):Entity[]{return this.getAll().filter(e=>e.hasTag(tag));}
cleanup(){this.entities=this.entities.filter(e=>e.active);}
clear(){this.entities=[];}
count():number{return this.getAll().length;}}