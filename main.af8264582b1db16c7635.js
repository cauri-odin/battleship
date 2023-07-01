(()=>{"use strict";var t,e,n,r,i,s=function(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)},a=function(t,e,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,n):i?i.value=n:e.set(t,n),n};class o{static get minLength(){return s(o,t,"f",e)}static get maxLength(){return s(o,t,"f",n)}constructor(l){if(r.set(this,void 0),i.set(this,void 0),l<s(o,t,"f",e)||l>s(o,t,"f",n))throw new Error("Ship length out of bounds");a(this,r,l,"f"),a(this,i,0,"f")}get length(){return s(this,r,"f")}get isSunk(){return s(this,r,"f")<=s(this,i,"f")}hit(){var t;this.isSunk||a(this,i,(t=s(this,i,"f"),++t),"f")}}t=o,r=new WeakMap,i=new WeakMap,e={value:1},n={value:5};var l,c,u,d,h,f,p,m=function(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)},w=function(t,e,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,n):i?i.value=n:e.set(t,n),n};class y{static get Size(){return m(y,c,"f",u)}constructor(){l.add(this),d.set(this,void 0),h.set(this,void 0),w(this,d,[],"f"),w(this,h,[],"f");for(let t=0;t<m(y,c,"f",u);t++){const t=[];for(let e=0;e<m(y,c,"f",u);e++)t.push({shipId:-1,gotAttacked:!1});m(this,h,"f").push(t)}}get ships(){return m(this,d,"f")}get allAreSunk(){return 0!==m(this,d,"f").length&&0===m(this,d,"f").filter((t=>!t.isSunk)).length}randomize(t){for(const e of t){const t=new o(e);let n,r,i;do{n=Math.round(9*Math.random()),r=Math.round(9*Math.random()),i=Math.random()>.5?"horizontal":"vertical"}while(!m(this,l,"m",f).call(this,t,n,r,i));this.place(t,n,r,i)}}isShip(t,e){return m(this,h,"f")[t][e].shipId>=0}getState(t,e){m(this,l,"m",p).call(this,t,e);const n=m(this,h,"f")[t][e];return n.gotAttacked?-1===n.shipId?"miss":m(this,d,"f")[n.shipId].isSunk?"sunk":"hit":"unknown"}place(t,e,n,r){if(m(this,l,"m",p).call(this,e,n),!m(this,l,"m",f).call(this,t,e,n,r))throw new Error(`Invalid ship placement: ${e}, ${n}`);m(this,d,"f").push(t);const i=m(this,d,"f").length-1;for(let s=0;s<t.length;s++)"horizontal"===r?m(this,h,"f")[e+s][n].shipId=i:m(this,h,"f")[e][n+s].shipId=i}attack(t,e){m(this,l,"m",p).call(this,t,e);const n=m(this,h,"f")[t][e];if(n.gotAttacked)throw new Error(`Cell already received an attack: ${t}, ${e}`);if(n.gotAttacked=!0,n.shipId>=0){const t=m(this,d,"f")[n.shipId];return t.hit(),{isShip:!0,isSunk:t.isSunk}}return{isShip:!1,isSunk:!1}}}c=y,d=new WeakMap,h=new WeakMap,l=new WeakSet,f=function(t,e,n,r){const i="horizontal"===r;if(i&&e+t.length>m(y,c,"f",u)||!i&&n+t.length>m(y,c,"f",u))return!1;for(let r=-1;r<=t.length;r++)for(let t=-1;t<=1;t++){let s;try{s=i?m(this,h,"f")[e+r][n+t]:m(this,h,"f")[e+t][n+r]}catch(t){continue}if((null==s?void 0:s.shipId)>=0)return!1}return!0},p=function(t,e){if(t<0||e<0||t>=m(y,c,"f",u)||e>=m(y,c,"f",u))throw new Error(`Invalid coordinate: ${t}, ${e}`)},u={value:10};const g=y.Size-1;function v(t,e,n){const r=t.ships.filter((t=>!t.isSunk)).map((t=>t.length)).sort().reverse();if(function(t,e,n){return e>0&&n>0&&S(t,{x:e-1,y:n-1})||e>0&&n<g&&S(t,{x:e-1,y:n+1})||n>0&&e<g&&S(t,{x:e+1,y:n-1})||e<g&&n<g&&S(t,{x:e+1,y:n+1})}(t,e,n)||0===k(t,e,n,r.slice(-1)[0]))return-1;if(function(t,e,n){return e>0&&S(t,{x:e-1,y:n})||n>0&&S(t,{x:e,y:n-1})||e<g&&S(t,{x:e+1,y:n})||n<g&&S(t,{x:e,y:n+1})}(t,e,n))return 1/0;{let i=0;for(const s of r)i+=k(t,e,n,s);return i}}function S(t,e){return"hit"===t.getState(e.x,e.y)}function k(t,e,n,r){if(r<o.minLength||r>o.maxLength)throw new Error("Length out of bounds");const i=Math.max(0,e-r+1),s=Math.max(0,n-r+1),a=Math.min(9,e+r-1),l=Math.min(9,n+r-1);let c=0,u=0;for(let e=i;e<=a;e++){const r=t.getState(e,n);"unknown"===r||"hit"===r?c=++u>c?u:c:u=0}const d=Math.max(0,c-r+1);c=0,u=0;for(let n=s;n<=l;n++){const r=t.getState(e,n);"unknown"===r||"hit"===r?c=++u>c?u:c:u=0}const h=Math.max(0,c-r+1);return Math.max(0,d+h)*r}function L(t,e){e.innerHTML="";for(let n=0;n<t.length;n++){const r=document.createElement("div");r.classList.add("ship"),r.setAttribute("data-id",""+n),e.appendChild(r);for(let e=0;e<t[n].length;e++){const t=document.createElement("div");t.classList.add("square"),r.appendChild(t)}}}function x(t,e){for(let n=0;n<t.length;n++)t[n].isSunk&&e.querySelector(`.ship[data-id="${n}"`).classList.add("ship--sunk")}function b(t,e,n){var r;if(!n.classList.contains("cell--sunk"))if(n.classList.contains("cell--ship"))n.classList.add("cell--sunk"),e.filter((t=>function(t,e){const n=t.getAttribute("data-x"),r=t.getAttribute("data-y"),i=e.getAttribute("data-x"),s=e.getAttribute("data-y");return Math.abs(+n-+i)<=1&&Math.abs(+r-+s)<=1}(n,t))).forEach((n=>b(t,e,n)));else if(!n.classList.contains("water")){n.classList.add("water");const e={x:+(r=n).getAttribute("data-x"),y:+r.getAttribute("data-y")},i=t.attack(e.x,e.y);if(i.isShip||i.isSunk)throw Error("Uncovered unexpected ship")}}const A=document.querySelector("#player-side"),E=document.querySelector("#player-board"),M=document.querySelector("#player-ships");let I,z;function C(){return I.allAreSunk}function T(t){t?A.classList.add("transparent"):A.classList.remove("transparent")}const q=document.getElementById("display"),P=document.getElementById("game-state");function $(t){null==q||q.classList.remove("display--won"),null==q||q.classList.remove("display--lost"),P.textContent=t}function W(t){"Player"===t?(P.textContent="You won!",null==q||q.classList.add("display--won")):(P.textContent="You lost!",null==q||q.classList.add("display--lost"))}const j=document.querySelector("#computer-side"),B=document.querySelector("#computer-board"),H=document.querySelector("#computer-ships");let Y,U;function D(){return Y.allAreSunk}function F(t){t?j.classList.add("transparent"):j.classList.remove("transparent")}function G(t){j.setAttribute("data-active",""+t)}function J(t){const e=t.target;if("false"===j.getAttribute("data-active")||e.classList.contains("cell--attacked"))return;const n=e.getAttribute("data-x"),r=e.getAttribute("data-y"),i=Y.attack(+n,+r);i.isShip?(e.classList.add("cell--ship"),i.isSunk&&b(Y,U,e)):e.classList.add("water"),e.classList.add("cell--attacked"),x(Y.ships,H),Y.allAreSunk?Q():(T(!1),F(!0),G(!1),$("Computer turn"),setTimeout((()=>{N=function(){const t=function(t){const e=[];let n=-1;for(let r=0;r<y.Size;r++)for(let i=0;i<y.Size;i++)if("unknown"===t.getState(r,i)){const s=v(t,r,i);s>n&&(n=s),e.push({x:r,y:i,value:s})}return e.filter((t=>t.value===n)).map((({x:t,y:e})=>({x:t,y:e})))}(I),{x:e,y:n}=function(t){const e=t.length-1,n=t[Math.round(Math.random()*e)];return{x:n.x,y:n.y}}(t),r=function(t,e){const n=function(t,e){return z.find((n=>n.getAttribute("data-x")===""+t&&n.getAttribute("data-y")===""+e))}(t,e),r=I.attack(+t,+e);return r.isShip?(n.classList.add("cell--ship"),n.classList.add("cell--player"),r.isSunk&&b(I,z,n)):n.classList.add("water"),n.classList.add("cell--attacked"),I.allAreSunk}(e,n);return x(I.ships,M),r}(),N?Q():(T(!0),F(!1),G(!0),$("Player turn"))}),1500*Math.random()))}const K=document.getElementById("start-over");let N=!1;function O(){const t=[5,4,3,3,2,2];!function(t){E.innerHTML="",I=new y,I.randomize(t);for(let t=0;t<y.Size;t++)for(let e=0;e<y.Size;e++){const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-x",""+e),n.setAttribute("data-y",""+t),I.isShip(e,t)&&(n.classList.add("cell--ship"),n.classList.add("cell--player")),null==E||E.appendChild(n)}L(I.ships,M),A.classList.add("transparent"),z=Array.from(E.querySelectorAll(".cell"))}(t),function(t){B.innerHTML="",Y=new y,Y.randomize(t);for(let t=0;t<y.Size;t++)for(let e=0;e<y.Size;e++){const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("data-x",""+e),n.setAttribute("data-y",""+t),n.addEventListener("click",J),null==B||B.appendChild(n)}L(Y.ships,H),j.setAttribute("data-active","true"),U=Array.from(B.querySelectorAll(".cell"))}(t),$("Player turn")}function Q(){if(D()&&C())throw Error("Indecisive game result");D()&&W("Player"),C()&&W("Computer"),G(!1),T(!1),F(!1)}null==K||K.addEventListener("click",(()=>O())),O()})();
//# sourceMappingURL=main.af8264582b1db16c7635.js.map