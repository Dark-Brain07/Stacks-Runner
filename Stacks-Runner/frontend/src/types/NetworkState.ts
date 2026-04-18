export interface NetworkState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type NetworkStateAction={type:string;payload:Partial<NetworkState>;};
export function createNetworkState(id:string):NetworkState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateNetworkState(state:NetworkState,action:NetworkStateAction):NetworkState{return{...state,...action.payload,timestamp:Date.now()};}