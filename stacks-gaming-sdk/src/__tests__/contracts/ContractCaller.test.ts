import{describe,it,expect}from'vitest';import{ContractCaller}from'../../contracts/ContractCaller';
describe('ContractCaller',()=>{it('initializes',()=>expect(new ContractCaller()).toBeDefined());});