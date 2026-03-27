export interface PowerUpState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type PowerUpStateAction={type:string;payload:Partial<PowerUpState>;};
export function createPowerUpState(id:string):PowerUpState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updatePowerUpState(state:PowerUpState,action:PowerUpStateAction):PowerUpState{return{...state,...action.payload,timestamp:Date.now()};}