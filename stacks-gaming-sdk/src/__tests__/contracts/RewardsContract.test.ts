import{describe,it,expect}from'vitest';import{RewardsContract}from'../../contracts/RewardsContract';
describe('RewardsContract',()=>{const rc=new RewardsContract('SP123');
it('creates claim args',()=>expect(rc.claimRewardArgs('SP123',1000)).toHaveLength(2));
it('contract id',()=>expect(rc.getContractId()).toBe('SP123.game-rewards'));});