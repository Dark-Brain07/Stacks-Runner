import{uintCV,standardPrincipalCV}from'@stacks/transactions';
export class RewardsContract{private address:string;private name:string;
constructor(address:string,name='game-rewards'){this.address=address;this.name=name;}
claimRewardArgs(player:string,amount:number){return[standardPrincipalCV(player),uintCV(amount)];}
getBalanceArgs(player:string){return[standardPrincipalCV(player)];}
getContractId(){return this.address+'.'+this.name;}}