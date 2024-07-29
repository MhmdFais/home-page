(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),s=n.n(c),u=new URL(n(398),n.b),d=new URL(n(81),n.b),l=i()(o()),p=s()(u),f=s()(d);l.push([e.id,`@font-face {\n    font-family: mainFont;\n    src: url(${p});\n}\n\n:root{\n    --main-bg: #a5f3fc;\n}\n\nbody{\n    font-family: mainFont;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n/* About Section */\n\n.about-section-bg{\n    background-image: url(${f});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.about-section {\n    padding: 10vh 3vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n}\n\n.about-image {\n    margin-bottom: 20px;\n}\n\n.about-text {\n    font-size: 1.2em;\n    text-align: center;\n    max-width: 600px;\n    padding: 0 20px;\n}\n\n.about-image img{\n    width: 25vw;\n    height: auto;\n    object-fit: cover;\n    position: relative;\n}\n\n.about-text{\n    background-color: aliceblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n}\n\n.contact-image{\n    height: auto;\n    width: 2vw;\n}\n\n\n`,""]);const m=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},398:(e,t,n)=>{e.exports=n.p+"00c2ed1a3bf798b0da27.ttf"},81:(e,t,n)=>{e.exports=n.p+"5b9a60a896036c226d9f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),c=n(56),s=n.n(c),u=n(540),d=n.n(u),l=n(113),p=n.n(l),f=n(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=n.p+"22be3c234760de1cbe10.jpg",g=n.p+"9880f1c120f2e90c0ae8.png",v=n.p+"633a312873229ec1d806.svg";document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".about-section"),t=function(){const e=document.querySelector(".about-image"),t=document.createElement("img");return t.classList.add("profile-image"),t.src=h,t.alt="Profile Image",e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.querySelector(".about-text"),t=document.createElement("h1");t.textContent="About Me",e.appendChild(t);const n=document.createElement("p");n.textContent="I am John, Iam a full stack developer with experience in JavaScript, React, Node.js, and Ruby on Rails. I am passionate about creating user-friendly applications that are both functional and visually appealing. I am currently seeking new opportunities to further develop my skills and contribute to a team.",e.appendChild(n);const r=function(){const e=document.createElement("div");e.classList.add("about-contacts-container");const t=document.createElement("a");t.href="",t.classList.add("contact-link");const n=document.createElement("img");n.src=g,n.alt="Github",n.classList.add("contact-image"),t.appendChild(n),e.appendChild(t);const r=document.createElement("a");r.href="",r.classList.add("contact-link");const o=document.createElement("img");return o.src=v,o.alt="LinkedIn",o.classList.add("contact-image"),r.appendChild(o),e.appendChild(r),e}();return e.appendChild(r),e}();e.appendChild(n)}()}))})()})();