export type EventType='ft_transfer'|'nft_mint'|'nft_transfer'|'contract_call'|'score_submit';
export interface WebhookEvent{type:EventType;txId:string;blockHeight:number;data:any;timestamp:number;}
export class WebhookHandler{private handlers:Map<EventType,Function[]>=new Map();
register(type:EventType,handler:Function){if(!this.handlers.has(type))this.handlers.set(type,[]);this.handlers.get(type)!.push(handler);}
async process(event:WebhookEvent){const fns=this.handlers.get(event.type)??[];for(const fn of fns)await fn(event);}}