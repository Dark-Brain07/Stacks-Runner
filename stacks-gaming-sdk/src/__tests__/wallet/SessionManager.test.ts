import{describe,it,expect}from'vitest';import{SessionManager}from'../../wallet/SessionManager';
describe('SessionManager',()=>{const sm=new SessionManager();
it('initializes',()=>expect(sm).toBeDefined());
it('returns null for missing key',()=>expect(sm.load('missing')).toBeNull());});