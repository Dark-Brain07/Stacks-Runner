export function hexToRgb(hex:string):{r:number,g:number,b:number}{const v=parseInt(hex.slice(1),16);return{r:(v>>16)&255,g:(v>>8)&255,b:v&255};}
export function rgbToHex(r:number,g:number,b:number):string{return'#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');}
export function withAlpha(hex:string,a:number):string{const{r,g,b}=hexToRgb(hex);return'rgba('+r+','+g+','+b+','+a+')';}
export function lighten(hex:string,pct:number):string{const{r,g,b}=hexToRgb(hex);const f=1+pct;return rgbToHex(Math.min(255,Math.round(r*f)),Math.min(255,Math.round(g*f)),Math.min(255,Math.round(b*f)));}