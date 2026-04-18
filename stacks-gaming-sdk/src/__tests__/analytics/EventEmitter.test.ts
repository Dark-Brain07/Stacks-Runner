import{describe,it,expect}from'vitest';import{GameEventEmitter}from'../../analytics/EventEmitter';
describe('GameEventEmitter',()=>{const e=new GameEventEmitter();
it('emits events',()=>{let called=false;e.on('test',()=>called=true);e.emit('test');expect(called).toBe(true);});
it('once fires once',()=>{let count=0;e.once('x',()=>count++);e.emit('x');e.emit('x');expect(count).toBe(1);});});