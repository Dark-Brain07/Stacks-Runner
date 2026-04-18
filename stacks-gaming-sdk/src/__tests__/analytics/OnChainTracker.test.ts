import{describe,it,expect}from'vitest';import{OnChainTracker}from'../../analytics/OnChainTracker';
describe('OnChainTracker',()=>{const t=new OnChainTracker();
it('records tx',()=>{t.record({txId:'0x1',block:1,type:'score',timestamp:Date.now(),data:{}});expect(t.getTotalTransactions()).toBe(1);});});