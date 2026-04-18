import{describe,it,expect}from'vitest';import{NFTContract}from'../../contracts/NFTContract';
describe('NFTContract',()=>{const nft=new NFTContract('SP123');
it('creates mint args',()=>expect(nft.mintArgs('addr',{name:'Sword',description:'Epic',image:'https://img.png'})).toHaveLength(2));
it('creates transfer args',()=>expect(nft.transferArgs(1,'from','to')).toHaveLength(3));});