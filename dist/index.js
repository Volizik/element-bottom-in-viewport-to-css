(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.r(t),e.d(t,{default:()=>o});const n=require("react"),o=function(e){var t=e.elementId,o=e.cssVariable;(0,n.useEffect)((function(){var e=document.getElementById(t);if(e){var n=function(){if(e){var t=e.getBoundingClientRect(),r=t.height,n=t.top,i=Math.max(r+n,0);document.documentElement.style.setProperty(o,"".concat(i,"px"))}};return new IntersectionObserver((function(e){var t,o,i=(t=e,o=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].isIntersecting?"addEventListener":"removeEventListener";document[i]("scroll",n)})).observe(e),function(){document.removeEventListener("scroll",n)}}console.error("[useElementBottomInViewPortToCss]: Can't find element by id \"".concat(t,'"'))}),[t,o])};module.exports.index=t})();