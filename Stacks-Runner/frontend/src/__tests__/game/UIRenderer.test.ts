import{describe,it,expect}from'vitest';import{UIRenderer}from'../../game/renderer/UIRenderer';
describe('UIRenderer',()=>{it('initializes',()=>{const r=new UIRenderer();expect(r).toBeDefined();});});