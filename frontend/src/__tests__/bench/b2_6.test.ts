import{describe,it,expect}from"vitest";
describe("bench2 6",()=>{it("perf",()=>{const t=Date.now();Array.from({length:50000},(_,j)=>j).filter(x=>x%2===0);expect(Date.now()-t).toBeLessThan(100);});});