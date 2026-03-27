export interface PlayerState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type PlayerStateAction={type:string;payload:Partial<PlayerState>;};
export function createPlayerState(id:string):PlayerState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updatePlayerState(state:PlayerState,action:PlayerStateAction):PlayerState{return{...state,...action.payload,timestamp:Date.now()};}