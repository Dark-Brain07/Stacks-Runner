export interface MenuItem{label:string;action:string;}
export const PAUSE_ITEMS:MenuItem[]=[{label:'Resume',action:'resume'},{label:'Settings',action:'settings'},{label:'Restart',action:'restart'},{label:'Quit to Menu',action:'quit'}];
export class PauseMenu{private selected=0;private visible=false;
show(){this.visible=true;this.selected=0;}
hide(){this.visible=false;}
isVisible():boolean{return this.visible;}
moveUp(){if(this.selected>0)this.selected--;}
moveDown(){if(this.selected<PAUSE_ITEMS.length-1)this.selected++;}
getSelected():MenuItem{return PAUSE_ITEMS[this.selected];}
getSelectedIndex():number{return this.selected;}}