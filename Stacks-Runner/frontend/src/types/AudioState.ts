export interface AudioState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type AudioStateAction={type:string;payload:Partial<AudioState>;};
export function createAudioState(id:string):AudioState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateAudioState(state:AudioState,action:AudioStateAction):AudioState{return{...state,...action.payload,timestamp:Date.now()};}