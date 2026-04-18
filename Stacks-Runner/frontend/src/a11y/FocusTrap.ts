export class FocusTrap{private active=false;
enable(){this.active=true;this.apply();}
disable(){this.active=false;this.remove();}
isActive():boolean{return this.active;}
private apply(){document.documentElement.setAttribute('data-focustrap',String(this.active));}
private remove(){document.documentElement.removeAttribute('data-focustrap');}
toggle(){this.active?this.disable():this.enable();}}