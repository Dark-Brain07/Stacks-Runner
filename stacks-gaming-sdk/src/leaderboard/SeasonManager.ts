export interface Season{id:string;name:string;startDate:Date;endDate:Date;active:boolean;}
export class SeasonManager{private seasons:Season[]=[];private current:Season|null=null;
create(id:string,name:string,start:Date,end:Date):Season{const s={id,name,startDate:start,endDate:end,active:false};this.seasons.push(s);return s;}
activate(id:string){this.seasons.forEach(s=>s.active=s.id===id);this.current=this.seasons.find(s=>s.id===id)??null;}
getCurrent():Season|null{return this.current;}
getAll():Season[]{return[...this.seasons];}}