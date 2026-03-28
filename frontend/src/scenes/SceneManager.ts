export class SceneManager{private scenes=new Map<string,any>();private current:string|null=null;
register(name:string,scene:any){this.scenes.set(name,scene);}
switch(name:string){if(this.current){this.scenes.get(this.current)?.onExit();}this.current=name;this.scenes.get(name)?.onEnter();}
getCurrent():string|null{return this.current;}
update(dt:number){if(this.current)this.scenes.get(this.current)?.update(dt);}
render(ctx:CanvasRenderingContext2D){if(this.current)this.scenes.get(this.current)?.render(ctx);}}