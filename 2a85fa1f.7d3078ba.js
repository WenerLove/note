(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(688)),c={title:"AlpineJS"},l={unversionedId:"web/framework/alpinejs",id:"web/framework/alpinejs",isDocsHomePage:!1,title:"AlpineJS",description:"AlpineJS",source:"@site/notes/web/framework/alpinejs.md",slug:"/web/framework/alpinejs",permalink:"/notes/web/framework/alpinejs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/alpinejs.md",version:"current"},o=[],p={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"alpinejs"},"AlpineJS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u5728\u7eaf HTML \u4e2d\u6dfb\u52a0\u63a7\u5236\u5c5e\u6027\u6765\u9a71\u52a8\u9875\u9762\u7684\u6846\u67b6"),Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5\u7c7b\u4f3c Vue \u4f46\u4e0d\u9700\u8981\u989d\u5916\u7f16\u8bd1\u3001\u811a\u672c\u7b49"),Object(i.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u589e\u5f3a HTML \u8bed\u6cd5"),Object(i.b)("li",{parentName:"ul"},"\u914d\u5408 tailwind \u5728\u4e0d\u9700\u8981\u989d\u5916 js \u7684\u524d\u63d0\u4e0b\u5373\u53ef\u5b9e\u73b0\u8f83\u4e3a\u4e30\u5bcc\u7684\u524d\u7aef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9879\u76ee\u53d7 tailwind \u8d44\u52a9"),Object(i.b)("li",{parentName:"ul"},"codepen ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://codepen.io/wenerme/pen/MWjemLX"}),"AlpineJS+TailwindCSS")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/alpinejs/alpine"}),"alpinejs/alpine")),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f4d\u7f6e\u4e0e React \u7b49\u6846\u67b6\u76f8\u540c\uff0c\u56e0\u6b64\u4e0d\u6613\u5171\u5b58 - React \u53ef\u4ee5\u901a\u8fc7 dangerouslySetInnerHTML \u4f7f\u7528 alpinejs"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ryangjchandler/spruce"}),"ryangjchandler/spruce")," - \u5168\u5c40\u72b6\u6001\u7ba1\u7406")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- \u5f15\u5165 --\x3e\n<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer><\/script>\n\n\x3c!-- \u5b9a\u4e49\u6570\u636e/\u72b6\u6001 --\x3e\n<div x-data="{ open: false }">\n  \x3c!-- \u4e8b\u4ef6\u9a71\u52a8 --\x3e\n  <button @click="open = true">Open Dropdown</button>\n  \x3c!-- \u72b6\u6001\u63a7\u5236 --\x3e\n  <ul x-show="open" @click.away="open = false">\n    Dropdown Body\n  </ul>\n</div>\n')))}u.isMDXComponent=!0},688:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);