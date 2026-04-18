export interface PlayerStats{totalGames:number;highScore:number;totalScore:number;avgScore:number;nftsOwned:number;stxEarned:number;}
export class PlayerAnalytics{private stats:Map<string,PlayerStats>=new Map();
recordGame(player:string,score:number){const s=this.stats.get(player)??{totalGames:0,highScore:0,totalScore:0,avgScore:0,nftsOwned:0,stxEarned:0};
s.totalGames++;s.totalScore+=score;s.avgScore=s.totalScore/s.totalGames;if(score>s.highScore)s.highScore=score;this.stats.set(player,s);}
getStats(player:string):PlayerStats|null{return this.stats.get(player)??null;}
getLeaderboard(limit=10){return[...this.stats.entries()].sort((a,b)=>b[1].highScore-a[1].highScore).slice(0,limit);}}