import{uintCV,stringUtf8CV,noneCV}from'@stacks/transactions';
export interface NFTMetadata{name:string;description:string;image:string;attributes?:Record<string,any>;}
export class NFTContract{private address:string;private name:string;
constructor(address:string,name='game-nfts'){this.address=address;this.name=name;}
mintArgs(recipient:string,metadata:NFTMetadata){return[stringUtf8CV(recipient),stringUtf8CV(JSON.stringify(metadata))];}
transferArgs(tokenId:number,sender:string,recipient:string){return[uintCV(tokenId),stringUtf8CV(sender),stringUtf8CV(recipient)];}
getContractId(){return this.address+'.'+this.name;}}