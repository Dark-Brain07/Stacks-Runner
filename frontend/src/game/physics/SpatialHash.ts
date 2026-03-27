export class SpatialHash{private cellSize:number;private grid=new Map<string,Set<number>>();
constructor(cellSize=64){this.cellSize=cellSize;}
private key(x:number,y:number):string{return Math.floor(x/this.cellSize)+','+Math.floor(y/this.cellSize);}
insert(id:number,x:number,y:number,w:number,h:number){const x1=Math.floor(x/this.cellSize);const y1=Math.floor(y/this.cellSize);const x2=Math.floor((x+w)/this.cellSize);const y2=Math.floor((y+h)/this.cellSize);for(let cx=x1;cx<=x2;cx++)for(let cy=y1;cy<=y2;cy++){const k=cx+','+cy;if(!this.grid.has(k))this.grid.set(k,new Set());this.grid.get(k)!.add(id);}}
clear(){this.grid.clear();}
query(x:number,y:number,w:number,h:number):Set<number>{const r=new Set<number>();const x1=Math.floor(x/this.cellSize);const y1=Math.floor(y/this.cellSize);const x2=Math.floor((x+w)/this.cellSize);const y2=Math.floor((y+h)/this.cellSize);for(let cx=x1;cx<=x2;cx++)for(let cy=y1;cy<=y2;cy++){this.grid.get(cx+','+cy)?.forEach(id=>r.add(id));}return r;}}