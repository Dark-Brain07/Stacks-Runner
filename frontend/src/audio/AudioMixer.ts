export class AudioMixer{private gain=1;private muted=false;
setGain(v:number){this.gain=Math.max(0,Math.min(1,v));}
getGain():number{return this.gain;}
mute(){this.muted=true;}
unmute(){this.muted=false;}
isMuted():boolean{return this.muted;}
process(buffer:Float32Array):Float32Array{if(this.muted)return new Float32Array(buffer.length);return buffer.map(s=>s*this.gain);}
reset(){this.gain=1;this.muted=false;}}