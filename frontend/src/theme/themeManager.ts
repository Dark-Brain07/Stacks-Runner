export interface Theme{name:string;bg:string;surface:string;text:string;primary:string;accent:string;}
export const THEMES:Record<string,Theme>={dark:{name:'Dark',bg:'#0d1117',surface:'#161b22',text:'#e6edf3',primary:'#6c5ce7',accent:'#fd79a8'},light:{name:'Light',bg:'#f6f8fa',surface:'#ffffff',text:'#24292f',primary:'#5b4dc7',accent:'#e8457c'},neon:{name:'Neon',bg:'#0a0a1a',surface:'#111133',text:'#00ff88',primary:'#ff00ff',accent:'#00ffff'}};
let current='dark';
export function setTheme(id:string){if(THEMES[id]){current=id;document.documentElement.style.setProperty('--bg',THEMES[id].bg);}}
export function getTheme():Theme{return THEMES[current];}