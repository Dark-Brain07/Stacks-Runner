export function vibrate(pattern:number|number[]):boolean{if(!navigator.vibrate)return false;return navigator.vibrate(pattern);}
export function lightTap(){vibrate(10);}
export function mediumTap(){vibrate(25);}
export function heavyTap(){vibrate(50);}
export function errorBuzz(){vibrate([50,50,50]);}
export function successPulse(){vibrate([10,30,10]);}