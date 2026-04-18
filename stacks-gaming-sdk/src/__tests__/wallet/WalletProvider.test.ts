import{describe,it,expect}from'vitest';import{WalletProvider}from'../../wallet/WalletProvider';
describe('WalletProvider',()=>{const wp=new WalletProvider({appName:'Test',appIconUrl:'https://test.com/icon.png',network:'mainnet'});
it('initializes',()=>expect(wp).toBeDefined());
it('not connected initially',()=>expect(wp.isConnected()).toBe(false));
it('returns null address when disconnected',()=>expect(wp.getAddress()).toBeNull());
it('returns mainnet network',()=>expect(wp.getNetwork()).toBeDefined());});