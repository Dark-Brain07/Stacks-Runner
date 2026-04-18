import{showConnect}from'@stacks/connect';import{StacksMainnet,StacksTestnet}from'@stacks/network';
export type Network='mainnet'|'testnet';
export interface WalletConfig{appName:string;appIconUrl:string;network:Network;}
export class WalletProvider{private config:WalletConfig;private session:any=null;
constructor(config:WalletConfig){this.config=config;}
connect():Promise<string>{return new Promise((resolve,reject)=>{showConnect({appDetails:{name:this.config.appName,icon:this.config.appIconUrl},
onFinish:({userSession})=>{this.session=userSession;resolve(userSession.loadUserData().profile.stxAddress.mainnet);},
onCancel:()=>reject(new Error('User cancelled'))});});}
disconnect(){this.session=null;}
isConnected():boolean{return this.session!==null;}
getNetwork(){return this.config.network==='mainnet'?new StacksMainnet():new StacksTestnet();}
getAddress():string|null{return this.session?.loadUserData()?.profile?.stxAddress?.mainnet??null;}}