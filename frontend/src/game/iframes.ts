export class IFrameSystem{private active=false;private endTime=0;private duration:number;
constructor(durationMs=1500){this.duration=durationMs;}
trigger(){this.active=true;this.endTime=Date.now()+this.duration;}
isInvincible():boolean{if(!this.active)return false;if(Date.now()>this.endTime){this.active=false;return false;}return true;}
getFlickerAlpha():number{if(!this.active)return 1;return Math.sin(Date.now()*0.02)*0.3+0.7;}
reset(){this.active=false;}}