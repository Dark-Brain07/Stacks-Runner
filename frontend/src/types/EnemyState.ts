export interface EnemyState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type EnemyStateAction={type:string;payload:Partial<EnemyState>;};
export function createEnemyState(id:string):EnemyState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateEnemyState(state:EnemyState,action:EnemyStateAction):EnemyState{return{...state,...action.payload,timestamp:Date.now()};}