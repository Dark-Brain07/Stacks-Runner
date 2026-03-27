const KEY='runner-telemetry';let enabled=false;
export function enableTelemetry(){enabled=true;localStorage.setItem(KEY,'true');}
export function disableTelemetry(){enabled=false;localStorage.setItem(KEY,'false');}
export function isEnabled():boolean{return localStorage.getItem(KEY)==='true';}
export function track(event:string,data?:Record<string,any>){if(!enabled)return;const entry={event,data,timestamp:Date.now()};const log=JSON.parse(localStorage.getItem('runner-events')||'[]');log.push(entry);if(log.length>100)log.shift();localStorage.setItem('runner-events',JSON.stringify(log));}
export function getEvents():{event:string,data?:any,timestamp:number}[]{return JSON.parse(localStorage.getItem('runner-events')||'[]');}