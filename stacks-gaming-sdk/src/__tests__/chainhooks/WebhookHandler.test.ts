import{describe,it,expect}from'vitest';import{WebhookHandler}from'../../chainhooks/WebhookHandler';
describe('WebhookHandler',()=>{const wh=new WebhookHandler();
it('registers handler',()=>{wh.register('ft_transfer',()=>{});expect(wh).toBeDefined();});
it('processes event',async()=>{let called=false;wh.register('nft_mint',()=>called=true);
await wh.process({type:'nft_mint',txId:'0x1',blockHeight:1,data:{},timestamp:Date.now()});expect(called).toBe(true);});});