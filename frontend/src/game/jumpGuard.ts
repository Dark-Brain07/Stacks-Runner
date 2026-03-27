export class JumpGuard{private grounded=true;private jumpCount=0;private maxJumps:number;
constructor(maxJumps=1){this.maxJumps=maxJumps;}
canJump():boolean{return this.jumpCount<this.maxJumps;}
jump():boolean{if(!this.canJump())return false;this.jumpCount++;this.grounded=false;return true;}
land(){this.grounded=true;this.jumpCount=0;}
isGrounded():boolean{return this.grounded;}
setMaxJumps(n:number){this.maxJumps=n;}}