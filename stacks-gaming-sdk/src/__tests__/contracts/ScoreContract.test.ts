import{describe,it,expect}from'vitest';import{ScoreContract}from'../../contracts/ScoreContract';
describe('ScoreContract',()=>{const sc=new ScoreContract('SP123','game-scores');
it('creates contract id',()=>expect(sc.getContractId()).toBe('SP123.game-scores'));
it('creates score args',()=>expect(sc.submitScoreArgs('player1',100,'game1')).toHaveLength(3));});