import{describe,it,expect}from'vitest';import{PlayerAnalytics}from'../../analytics/PlayerAnalytics';
describe('PlayerAnalytics',()=>{const pa=new PlayerAnalytics();
it('records game',()=>{pa.recordGame('p1',100);expect(pa.getStats('p1')?.totalGames).toBe(1);});
it('tracks high score',()=>{pa.recordGame('p1',200);expect(pa.getStats('p1')?.highScore).toBe(200);});
it('leaderboard',()=>{pa.recordGame('p2',500);expect(pa.getLeaderboard(2)).toHaveLength(2);});});