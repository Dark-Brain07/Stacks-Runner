export type GameState='menu'|'playing'|'paused'|'gameOver'|'tutorial'|'settings';
export class StateMachine{private state:GameState='menu';private history:GameState[]=[];
transition(next:GameState){this.history.push(this.state);this.state=next;}
getState():GameState{return this.state;}
goBack():GameState{const prev=this.history.pop();if(prev)this.state=prev;return this.state;}
is(s:GameState):boolean{return this.state===s;}
reset(){this.state='menu';this.history=[];}}