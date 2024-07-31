(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(601),r=n.n(o),a=n(314),i=n.n(a),c=n(417),s=n.n(c),d=new URL(n(398),n.b),p=new URL(n(81),n.b),l=i()(r()),u=s()(d),m=s()(p);l.push([e.id,`@font-face {\n    font-family: mainFont;\n    src: url(${u});\n}\n\n:root {\n    --main-bg: #a5f3fc;\n    --sub-head-clr : rgb(11, 124, 124);\n}\n\nbody {\n    font-family: mainFont;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* About */\n\n.about-section-bg {\n    background-image: url(${m});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.about-section {\n    padding: 10vh 3vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n}\n\n.about-image {\n    margin-bottom: 20px;\n}\n\n.about-image img {\n    width: 25vw;\n    height: auto;\n    object-fit: cover;\n    position: relative;\n}\n\n.contact-image {\n    padding-top: 1vh;\n    height: auto;\n    width: 2vw;\n}\n\n.about-text {\n    text-align: start;\n    padding: 2vh 5vw;\n    max-width: 40vw;\n    background-color: aliceblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    gap: 2vh;\n}\n\n.about-text p {\n    padding: 0;\n    margin: 0;\n}\n\n.about-text-para {\n    font-size: clamp(0.8rem, 1.3vw, 1.8rem);\n}\n\n.about-header {\n    font-family: mainFont;\n    font-size: clamp(1rem, 1.8vw, 2rem);\n    font-weight: bold;\n    color: var(--sub-head-clr);\n}\n\n.about-contacts-container {\n    width: 96%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: end;\n    gap: 1vw;\n}\n\n/* Projects */\n\n.projects-heading{\n    padding: 2vh 11vw;\n}\n\n.projects-heading-text{\n    padding: 0;\n    font-size: clamp(1.5rem, 2vw, 2.5rem);\n    font-weight: 800;\n    color: var(--sub-head-clr);\n}\n\n.projects-header {\n    font-size: ckarmp(1.5rem, 2vw, 2.5rem);\n    font-weight: bold;\n}\n\n.projects-section {\n    padding: 2vh 11vw;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n    gap: 2rem;\n}\n\n.project-card {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.project-img {\n    width: 100%;\n    height: 30vh;\n    object-fit: cover;\n}\n\n.project-header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #ddd;\n}\n\n\n.project-title {\n    font-size: clamp(1rem, 1.5vw, 2rem);\n    font-weight: bold;\n    padding-left: 1rem;\n}\n\n.project-icon {\n    width: 2vw;\n    height: auto;\n    padding-right: 1rem;\n}\n\n.project-description {\n    text-align: start;\n    font-size: clamp(0.8rem, 1.3vw, 1.8rem);\n    padding: 0 1rem;\n}\n`,""]);const f=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var p=n(a[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},398:(e,t,n)=>{e.exports=n.p+"00c2ed1a3bf798b0da27.ttf"},81:(e,t,n)=>{e.exports=n.p+"5b9a60a896036c226d9f.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),a=n(659),i=n.n(a),c=n(56),s=n.n(c),d=n(540),p=n.n(d),l=n(113),u=n.n(l),m=n(208),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=n.p+"22be3c234760de1cbe10.jpg",g=n.p+"9880f1c120f2e90c0ae8.png",v=n.p+"633a312873229ec1d806.svg";const b=n.p+"7846ad060c91c0b08e35.jpg";document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".about-section"),t=function(){const e=document.querySelector(".about-image"),t=document.createElement("img");return t.classList.add("profile-image"),t.src=h,t.alt="Profile Image",e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.querySelector(".about-text"),t=document.createElement("p");t.classList.add("about-header"),t.textContent="About Me",e.appendChild(t);const n=document.createElement("p");n.classList.add("about-text-para"),n.textContent="I am John, I am a full stack developer with experience in JavaScript, React, Node.js, and MongoDB. I am passionate about creating user friendly applications that are both functional and visually appealing and I am currently seeking new opportunities to further develop my skills and contribute to a team.",e.appendChild(n);const o=function(){const e=document.createElement("div");e.classList.add("about-contacts-container");const t=document.createElement("a");t.href="",t.classList.add("contact-link");const n=document.createElement("img");n.src=g,n.alt="Github",n.classList.add("contact-image"),t.appendChild(n),e.appendChild(t);const o=document.createElement("a");o.href="",o.classList.add("contact-link");const r=document.createElement("img");return r.src=v,r.alt="LinkedIn",r.classList.add("contact-image"),o.appendChild(r),e.appendChild(o),e}();return e.appendChild(o),e}();e.appendChild(n)}(),function(){const e=document.querySelector(".projects-heading"),t=document.createElement("p");t.textContent="Projects",t.classList.add("projects-heading-text"),e.appendChild(t)}(),function(){const e=document.querySelector(".projects-section");[{title:"Project 1",description:"This is the first project",image:b,github:g,link:""},{title:"Project 2",description:"This is the second project",image:b,github:g,link:""},{title:"Project 3",description:"This is the third project",image:b,github:g,link:""},{title:"Project 4",description:"This is the fourth project",image:b,github:g,link:""},{title:"Project 5",description:"This is the fifth project",image:b,github:g,link:""},{title:"Project 6",description:"This is the sixth project",image:b,github:g,link:""}].forEach((t=>{const n=document.createElement("div");n.classList.add("project-card");const o=document.createElement("img");o.src=t.image,o.classList.add("project-img");const r=document.createElement("div");r.classList.add("project-header");const a=document.createElement("p");a.textContent=t.title,a.classList.add("project-title");const i=document.createElement("img");i.src=t.github,i.classList.add("project-icon"),r.appendChild(a),r.appendChild(i);const c=document.createElement("p");c.textContent=t.description,c.classList.add("project-description"),n.appendChild(o),n.appendChild(r),n.appendChild(c),e.appendChild(n)}))}()}))})()})();