(this["webpackJsonpe-commerce-product"]=this["webpackJsonpe-commerce-product"]||[]).push([[5],{18:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(19);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},19:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}n.d(t,"a",(function(){return i}))},28:function(e,t,n){"use strict";n.r(t);var r=n(18),i=n(1),o=n(2),c=n(0);t.default=function(e){var t=Object(i.useState)(0),n=Object(r.a)(t,2),a=n[0],l=n[1],s={border:"1px solid saddlebrown",opacity:"0.5"},u=o.a.map((function(e,t){return t===a?Object(c.jsx)("img",{style:s,src:e.product,id:t,onClick:function(e){return l(parseInt(e.target.id))}},t):Object(c.jsx)("img",{src:e.product,id:t,onClick:function(e){return l(parseInt(e.target.id))}},t)})),d=window.innerHeight;return Object(c.jsxs)("div",{className:"image-on-whole-screen",style:{height:d},children:[Object(c.jsx)("svg",{onClick:e.changeScreenView,style:{cursor:"pointer"},className:"svg",width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fill:"#fff",fillRule:"evenodd"})}),Object(c.jsxs)("div",{className:"image-pleace",children:[Object(c.jsx)("button",{name:"move-back",className:"move-picture",onClick:function(){l(0===a?o.a.length-1:a-1)},children:Object(c.jsx)("svg",{width:"12",height:"18",id:"move-back",onClick:function(){l(0===a?o.a.length-1:a-1)},xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{id:"move-back",d:"M11  3 3 9l8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})}),Object(c.jsx)("img",{src:o.a[a].product,alt:"image"}),Object(c.jsx)("button",{name:"move-forward",className:"move-picture",onClick:function(){a>o.a.length-2?l(0):l(a+1)},children:Object(c.jsx)("svg",{width:"13",height:"18",xmlns:"http://www.w3.org/2000/svg",id:"move-forward",onClick:function(){a>o.a.length-2?l(0):l(a+1)},children:Object(c.jsx)("path",{id:"move-forward",d:"m2 2 8 8-8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})})]}),Object(c.jsx)("div",{className:"flexed-imgs",children:u})]})}}}]);
//# sourceMappingURL=5.dd0ced45.chunk.js.map