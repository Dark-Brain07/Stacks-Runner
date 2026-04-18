export interface HookConfig{chain:'stacks';network:'mainnet'|'testnet';if_this:{scope:string;actions:string[];asset_identifier?:string;};then_that:{http_post:{url:string;authorization_header:string;}};}
export class ChainHookConfig{
static ftTransfer(webhookUrl:string,apiKey:string,assetId:string):HookConfig{return{chain:'stacks',network:'mainnet',
if_this:{scope:'ft_event',actions:['transfer'],asset_identifier:assetId},
then_that:{http_post:{url:webhookUrl,authorization_header:'x-api-key: '+apiKey}}};}
static nftEvent(webhookUrl:string,apiKey:string):HookConfig{return{chain:'stacks',network:'mainnet',
if_this:{scope:'nft_event',actions:['mint','transfer']},
then_that:{http_post:{url:webhookUrl,authorization_header:'x-api-key: '+apiKey}}};}
static contractCall(webhookUrl:string,apiKey:string):HookConfig{return{chain:'stacks',network:'mainnet',
if_this:{scope:'contract_call',actions:['call']},
then_that:{http_post:{url:webhookUrl,authorization_header:'x-api-key: '+apiKey}}};}}