export interface RenderState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type RenderStateAction={type:string;payload:Partial<RenderState>;};
export function createRenderState(id:string):RenderState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateRenderState(state:RenderState,action:RenderStateAction):RenderState{return{...state,...action.payload,timestamp:Date.now()};}