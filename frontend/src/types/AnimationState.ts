export interface AnimationState{readonly id:string;active:boolean;timestamp:number;data:Record<string,any>;}
export type AnimationStateAction={type:string;payload:Partial<AnimationState>;};
export function createAnimationState(id:string):AnimationState{return{id,active:true,timestamp:Date.now(),data:{}};}
export function updateAnimationState(state:AnimationState,action:AnimationStateAction):AnimationState{return{...state,...action.payload,timestamp:Date.now()};}