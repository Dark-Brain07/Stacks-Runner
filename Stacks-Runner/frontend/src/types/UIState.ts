export interface UIState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type UIStateAction={type:string;payload:Partial<UIState>;};
export function createUIState(id:string):UIState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateUIState(state:UIState,action:UIStateAction):UIState{return{...state,...action.payload,timestamp:Date.now()};}