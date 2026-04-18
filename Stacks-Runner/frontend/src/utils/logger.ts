type Level='debug'|'info'|'warn'|'error';const LEVELS:Record<Level,number>={debug:0,info:1,warn:2,error:3};let minLevel:Level='info';
export function setLogLevel(l:Level){minLevel=l;}
export function log(level:Level,msg:string,...data:any[]){if(LEVELS[level]<LEVELS[minLevel])return;const ts=new Date().toISOString();const prefix='['+ts+'] ['+level.toUpperCase()+']';if(level==='error')console.error(prefix,msg,...data);else if(level==='warn')console.warn(prefix,msg,...data);else console.log(prefix,msg,...data);}
export const debug=(m:string,...d:any[])=>log('debug',m,...d);
export const info=(m:string,...d:any[])=>log('info',m,...d);
export const warn=(m:string,...d:any[])=>log('warn',m,...d);
export const error=(m:string,...d:any[])=>log('error',m,...d);