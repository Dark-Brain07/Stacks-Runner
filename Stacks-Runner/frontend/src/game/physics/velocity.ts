export interface Vec2{x:number;y:number;}
export function add(a:Vec2,b:Vec2):Vec2{return{x:a.x+b.x,y:a.y+b.y};}
export function scale(v:Vec2,s:number):Vec2{return{x:v.x*s,y:v.y*s};}
export function magnitude(v:Vec2):number{return Math.sqrt(v.x*v.x+v.y*v.y);}
export function normalize(v:Vec2):Vec2{const m=magnitude(v);return m>0?{x:v.x/m,y:v.y/m}:{x:0,y:0};}
export function applyFriction(v:Vec2,f:number):Vec2{return{x:v.x*f,y:v.y*f};}