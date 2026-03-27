export interface GameEvents{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type GameEventsAction={type:string;payload:Partial<GameEvents>;};
export function createGameEvents(id:string):GameEvents{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateGameEvents(state:GameEvents,action:GameEventsAction):GameEvents{return{...state,...action.payload,timestamp:Date.now()};}