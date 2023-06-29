(()=>{"use strict";var t,e,a,r,i,s=function(t,e,a,r){if("a"===a&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?r:"a"===a?r.call(t):r?r.value:e.get(t)},n=function(t,e,a,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,a):i?i.value=a:e.set(t,a),a};class o{constructor(c){if(r.set(this,void 0),i.set(this,void 0),c<s(o,t,"f",e)||c>s(o,t,"f",a))throw new Error("Ship length out of bounds");n(this,r,c,"f"),n(this,i,0,"f")}get length(){return s(this,r,"f")}get isSunk(){return s(this,r,"f")<=s(this,i,"f")}hit(){var t;this.isSunk||n(this,i,(t=s(this,i,"f"),++t),"f")}}t=o,r=new WeakMap,i=new WeakMap,e={value:1},a={value:5};var c,l,d,u,h,f,p,w=function(t,e,a,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,a):i?i.value=a:e.set(t,a),a},m=function(t,e,a,r){if("a"===a&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?r:"a"===a?r.call(t):r?r.value:e.get(t)};class y{constructor(){c.add(this),u.set(this,void 0),h.set(this,void 0),w(this,u,[],"f"),w(this,h,[],"f");for(let t=0;t<m(y,l,"f",d);t++){const t=[];for(let e=0;e<m(y,l,"f",d);e++)t.push({shipId:-1,gotAttacked:!1});m(this,h,"f").push(t)}}get ships(){return m(this,u,"f")}get allAreSunk(){return 0!==m(this,u,"f").length&&0===m(this,u,"f").filter((t=>!t.isSunk)).length}randomize(t){for(const e of t){const t=new o(e);let a,r,i;do{a=Math.round(9*Math.random()),r=Math.round(9*Math.random()),i=Math.random()>.5?"horizontal":"vertical"}while(!m(this,c,"m",f).call(this,t,a,r,i));this.place(t,a,r,i)}}isShip(t,e){return m(this,h,"f")[t][e].shipId>=0}gotAttacked(t,e){return m(this,h,"f")[t][e].gotAttacked}place(t,e,a,r){if(m(this,c,"m",p).call(this,e,a),!m(this,c,"m",f).call(this,t,e,a,r))throw new Error("Invalid ship placement");m(this,u,"f").push(t);const i=m(this,u,"f").length-1;for(let s=0;s<t.length;s++)"horizontal"===r?m(this,h,"f")[e+s][a].shipId=i:m(this,h,"f")[e][a+s].shipId=i}attack(t,e){m(this,c,"m",p).call(this,t,e);const a=m(this,h,"f")[t][e];if(a.gotAttacked)throw new Error(`Cell already received an attack: ${t}, ${e}`);if(a.gotAttacked=!0,a.shipId>=0){const t=m(this,u,"f")[a.shipId];return t.hit(),{isShip:!0,isSunk:t.isSunk}}return{isShip:!1,isSunk:!1}}}function v(t,e){e.innerHTML="";for(let a=0;a<t.length;a++){const r=document.createElement("div");r.classList.add("ship"),r.setAttribute("data-id",""+a),e.appendChild(r);for(let e=0;e<t[a].length;e++){const t=document.createElement("div");t.classList.add("square"),r.appendChild(t)}}}function g(t,e){for(let a=0;a<t.length;a++)t[a].isSunk&&e.querySelector(`.ship[data-id="${a}"`).classList.add("ship--sunk")}function k(t,e,a){var r;if(!a.classList.contains("cell--sunk"))if(a.classList.contains("cell--ship"))a.classList.add("cell--sunk"),e.filter((t=>function(t,e){const a=t.getAttribute("data-x"),r=t.getAttribute("data-y"),i=e.getAttribute("data-x"),s=e.getAttribute("data-y");return Math.abs(+a-+i)<=1&&Math.abs(+r-+s)<=1}(a,t))).forEach((a=>k(t,e,a)));else if(!a.classList.contains("water")){a.classList.add("water");const e={x:+(r=a).getAttribute("data-x"),y:+r.getAttribute("data-y")},i=t.attack(e.x,e.y);if(i.isShip||i.isSunk)throw Error("Uncovered unexpected ship")}}l=y,u=new WeakMap,h=new WeakMap,c=new WeakSet,f=function(t,e,a,r){const i="horizontal"===r;if(i&&e+t.length>m(y,l,"f",d)||!i&&a+t.length>m(y,l,"f",d))return!1;for(let r=-1;r<=t.length;r++)for(let t=-1;t<=1;t++){let s;try{s=i?m(this,h,"f")[e+r][a+t]:m(this,h,"f")[e+t][a+r]}catch(t){continue}if((null==s?void 0:s.shipId)>=0)return!1}return!0},p=function(t,e){if(t<0||e<0||t>=m(y,l,"f",d)||e>=m(y,l,"f",d))throw new Error(`Invalid coordinate: ${t}, ${e}`)},d={value:10};const b=document.querySelector("#player-side"),A=document.querySelector("#player-board"),S=document.querySelector("#player-ships");let L,E;function M(){return L.allAreSunk}function q(t){t?b.classList.add("opaque"):b.classList.remove("opaque")}const T=document.getElementById("game-state");function C(t){T.textContent=t}const I=document.querySelector("#computer-side"),x=document.querySelector("#computer-board"),P=document.querySelector("#computer-ships");let z,W;function $(){return z.allAreSunk}function j(t){t?I.classList.add("opaque"):I.classList.remove("opaque")}function H(t){I.setAttribute("data-active",""+t)}function B(t){const e=t.target;if("false"===I.getAttribute("data-active")||e.classList.contains("cell--attacked"))return;const a=e.getAttribute("data-x"),r=e.getAttribute("data-y"),i=z.attack(+a,+r);i.isShip?(e.classList.add("cell--ship"),i.isSunk&&k(z,W,e)):e.classList.add("water"),e.classList.add("cell--attacked"),g(z.ships,P),z.allAreSunk?G():(q(!1),j(!0),H(!1),C("Computer turn"),setTimeout((()=>{D=function(){let t,e;do{t=Math.round(9*Math.random()),e=Math.round(9*Math.random())}while(L.gotAttacked(t,e));const a=function(t,e){const a=function(t,e){return E.find((a=>a.getAttribute("data-x")===""+t&&a.getAttribute("data-y")===""+e))}(t,e),r=L.attack(+t,+e);return r.isShip?(a.classList.add("cell--ship"),a.classList.add("cell--player"),r.isSunk&&k(L,E,a)):a.classList.add("water"),a.classList.add("cell--attacked"),L.allAreSunk}(t,e);return g(L.ships,S),a}(),D?G():(q(!0),j(!1),H(!0),C("Player turn"))}),1500*Math.random()))}const U=document.getElementById("start-over");let D=!1;function F(){const t=[5,4,3,3,2,2];!function(t){A.innerHTML="",L=new y,L.randomize(t);for(let t=0;t<10;t++)for(let e=0;e<10;e++){const a=document.createElement("div");a.classList.add("cell"),a.setAttribute("data-x",""+e),a.setAttribute("data-y",""+t),L.isShip(e,t)&&(a.classList.add("cell--ship"),a.classList.add("cell--player")),null==A||A.appendChild(a)}v(L.ships,S),b.classList.add("opaque"),E=Array.from(A.querySelectorAll(".cell"))}(t),function(t){x.innerHTML="",z=new y,z.randomize(t);for(let t=0;t<10;t++)for(let e=0;e<10;e++){const a=document.createElement("div");a.classList.add("cell"),a.setAttribute("data-x",""+e),a.setAttribute("data-y",""+t),a.addEventListener("click",B),null==x||x.appendChild(a)}v(z.ships,P),I.setAttribute("data-active","true"),W=Array.from(x.querySelectorAll(".cell"))}(t),C("Player turn")}function G(){if($()&&M())throw Error("Indecisive game result");$()&&(C("Player won!"),H(!1)),M()&&C("Computer won!")}null==U||U.addEventListener("click",(()=>F())),F()})();
//# sourceMappingURL=main.11909ef76220bfec7b21.js.map