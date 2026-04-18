import{describe,it,expect}from'vitest';import{Leaderboard}from'../../leaderboard/Leaderboard';
describe('Leaderboard',()=>{const lb=new Leaderboard();
it('submits scores',()=>{lb.submit('p1',100);lb.submit('p2',200);expect(lb.getTop(2)).toHaveLength(2);});
it('ranks correctly',()=>{expect(lb.getTop(2)[0].player).toBe('p2');});
it('gets player rank',()=>{expect(lb.getRank('p1')).toBe(2);});});