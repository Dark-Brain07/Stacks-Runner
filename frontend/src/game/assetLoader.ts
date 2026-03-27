export class AssetLoader{private loaded=0;private total=0;private assets=new Map<string,HTMLImageElement>();
async loadImage(id:string,src:string):Promise<HTMLImageElement>{this.total++;return new Promise((res,rej)=>{const img=new Image();img.onload=()=>{this.loaded++;this.assets.set(id,img);res(img);};img.onerror=rej;img.src=src;});}
get(id:string):HTMLImageElement|undefined{return this.assets.get(id);}
getProgress():number{return this.total?this.loaded/this.total:0;}
isComplete():boolean{return this.loaded>=this.total;}}