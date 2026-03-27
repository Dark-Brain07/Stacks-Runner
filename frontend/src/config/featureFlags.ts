const FLAGS:Record<string,boolean>={enablePowerUps:true,enableTutorial:true,enableSound:true,enableHaptics:false,enableTelemetry:false,enableLeaderboard:true,enableDailyChallenge:true,enableMultiplayer:false};
export function isEnabled(flag:string):boolean{const override=localStorage.getItem('ff-'+flag);if(override!==null)return override==='true';return FLAGS[flag]??false;}
export function setFlag(flag:string,value:boolean){localStorage.setItem('ff-'+flag,String(value));}
export function resetFlags(){Object.keys(FLAGS).forEach(k=>localStorage.removeItem('ff-'+k));}
export function getAllFlags():Record<string,boolean>{return{...FLAGS};}