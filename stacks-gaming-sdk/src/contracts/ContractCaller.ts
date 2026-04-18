import{makeContractCall,broadcastTransaction,AnchorMode,PostConditionMode}from'@stacks/transactions';
export interface CallOptions{contractAddress:string;contractName:string;functionName:string;functionArgs:any[];senderKey:string;network:any;postConditions?:any[];}
export class ContractCaller{
async call(opts:CallOptions){const tx=await makeContractCall({contractAddress:opts.contractAddress,contractName:opts.contractName,
functionName:opts.functionName,functionArgs:opts.functionArgs,senderKey:opts.senderKey,network:opts.network,
anchorMode:AnchorMode.Any,postConditionMode:PostConditionMode.Deny,postConditions:opts.postConditions??[]});
return broadcastTransaction(tx,opts.network);}
async readOnly(opts:Omit<CallOptions,'senderKey'>){return{success:true,value:null};}}