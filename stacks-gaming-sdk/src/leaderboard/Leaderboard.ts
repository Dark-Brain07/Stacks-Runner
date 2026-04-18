export interface LeaderboardEntry{player:string;score:number;rank:number;timestamp:number;}
export class Leaderboard{private entries:Map<string,{score:number;timestamp:number}>=new Map();
submit(player:string,score:number){const existing=this.entries.get(player);if(!existing||score>existing.score)this.entries.set(player,{score,timestamp:Date.now()});}
getTop(limit=10):LeaderboardEntry[]{return[...this.entries.entries()].sort((a,b)=>b[1].score-a[1].score).slice(0,limit).map(([player,{score,timestamp}],i)=>({player,score,rank:i+1,timestamp}));}
getRank(player:string):number|null{const top=this.getTop(1000);const entry=top.find(e=>e.player===player);return entry?.rank??null;}
getPlayerCount():number{return this.entries.size;}}