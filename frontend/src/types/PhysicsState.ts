export interface PhysicsState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type PhysicsStateAction={type:string;payload:Partial<PhysicsState>;};
export function createPhysicsState(id:string):PhysicsState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updatePhysicsState(state:PhysicsState,action:PhysicsStateAction):PhysicsState{return{...state,...action.payload,timestamp:Date.now()};}