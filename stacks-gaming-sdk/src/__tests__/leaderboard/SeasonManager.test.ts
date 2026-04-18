import{describe,it,expect}from'vitest';import{SeasonManager}from'../../leaderboard/SeasonManager';
describe('SeasonManager',()=>{const sm=new SeasonManager();
it('creates season',()=>{const s=sm.create('s1','Season 1',new Date(),new Date());expect(s.id).toBe('s1');});
it('activates season',()=>{sm.activate('s1');expect(sm.getCurrent()?.id).toBe('s1');});});