import{uintCV,stringAsciiCV}from'@stacks/transactions';
export class ScoreContract{private address:string;private name:string;
constructor(address:string,name='game-scores'){this.address=address;this.name=name;}
submitScoreArgs(player:string,score:number,gameId:string){return[stringAsciiCV(player),uintCV(score),stringAsciiCV(gameId)];}
getContractId(){return this.address+'.'+this.name;}
getLeaderboardArgs(gameId:string,limit:number){return[stringAsciiCV(gameId),uintCV(limit)];}}