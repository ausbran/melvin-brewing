!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}({0:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},1:function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function c(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function u(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=r[u]||0,s="".concat(u," ").concat(l);r[u]=l+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:h(f,t),references:1}),n.push(s)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,v=0;function h(e,t){var r,n,o;if(t.singleton){var i=v++;r=m||(m=l(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);a[o].references--}for(var i=u(e,t),l=0;l<r.length;l++){var s=c(r[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}r=i}}}},17:function(e,t,r){"use strict";r.r(t);r(18);const n=$("#prefix"),o=$("#components-wrapper"),i=$("> div > ul.directory-structure",o);let a=null;$(()=>{n.on({keyup:()=>{clearTimeout(a),a=setTimeout((function(){c()}),50)}}),c()});const c=()=>{i.each((function(){const e=$(this);$("> li > span[data-name]",e).each((function(){$(this).html(n.val()+$(this).data("name"))}))}))}},18:function(e,t,r){var n=r(1),o=r(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},19:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n)()(!1);o.push([e.i,".bordered-padding,.gradient-bg,ul.directory-structure,ul.section-structure > li,ul.section-structure > li > div{padding:8px;border:1px solid rgba(115,127,140,0.15);border-radius:2px}.gradient-bg,ul.directory-structure,ul.section-structure > li > div{background-image:linear-gradient(#f7f7f8,#f4f5f6)}#components-wrapper{margin:25px -10px 0;display:flex;flex-wrap:wrap}#components-wrapper > div{flex:1 0 50%;position:relative;box-sizing:border-box;padding:0 10px;margin:0 0 25px}#components-wrapper > div:last-child{width:100%}@media only screen and (max-width:1430px){#components-wrapper > div{width:100%}}ul.directory-structure ul{margin-left:20px}ul.directory-structure li:before{font-family:'Craft';font-size:16px;padding-right:5px}ul.directory-structure li.dir{font-weight:bold}ul.directory-structure li.dir:before{font-weight:normal;content:\"folder\"}ul.directory-structure li.file{font-weight:normal}ul.directory-structure li.file:before{content:\"templates\"}ul.directory-structure.routes > li{display:flex;justify-content:space-between}ul.directory-structure.routes > li .route{font-weight:normal}ul.directory-structure.routes > li .route:before{position:relative;top:1px;padding:0 5px 0 0;font-weight:normal;font-family:'Craft';font-size:10px;content:'routes'}ul.directory-structure.routes > li .template{color:#ccc;font-size:12px}ul.section-structure > li{padding-left:10px}ul.section-structure > li > div{float:left;margin:0 10px 0 0}ul.section-structure > li > div:last-child{margin-right:0}ul.section-structure > li > div > table tr:last-child td{border-bottom:none}#add-demo-template{position:absolute;right:20px;top:10px}",""]),t.default=o}});