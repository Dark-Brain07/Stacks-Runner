export class QuadTree<T=any>{private data:T[]=[];
add(item:T){this.data.push(item);}
remove():T|undefined{return this.data.pop();}
peek():T|undefined{return this.data[this.data.length-1];}
get size(){return this.data.length;}
clear(){this.data=[];}
toArray():T[]{return[...this.data];}
isEmpty():boolean{return this.data.length===0;}}