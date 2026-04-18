import{describe,it,expect}from"vitest";
describe("bench 15",()=>{it("throughput",()=>{const d=Array.from({length:50000},(_,j)=>j*15).filter(x=>x%3===0);expect(d.length).toBeGreaterThan(0);});});