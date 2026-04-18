export type WalletType='leather'|'xverse'|'hiro';
export interface DetectedWallet{type:WalletType;installed:boolean;version?:string;}
export class MultiWallet{
detectWallets():DetectedWallet[]{const wallets:DetectedWallet[]=[];
if(typeof window!=='undefined'){if((window as any).LeatherProvider)wallets.push({type:'leather',installed:true});
if((window as any).XverseProviders)wallets.push({type:'xverse',installed:true});
if((window as any).HiroWalletProvider)wallets.push({type:'hiro',installed:true});}
return wallets;}
getPreferred():WalletType|null{const w=this.detectWallets();return w.length>0?w[0].type:null;}}