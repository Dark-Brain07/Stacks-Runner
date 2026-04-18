import{describe,it,expect}from'vitest';import{MultiWallet}from'../../wallet/MultiWallet';
describe('MultiWallet',()=>{const mw=new MultiWallet();
it('initializes',()=>expect(mw).toBeDefined());
it('detects wallets',()=>expect(mw.detectWallets()).toBeInstanceOf(Array));});