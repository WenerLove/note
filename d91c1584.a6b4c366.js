(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||m[b]||l;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},959:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(1107)),o={title:"LLVM"},c={unversionedId:"languages/llvm/README",id:"languages/llvm/README",isDocsHomePage:!1,title:"LLVM",description:"Tips",source:"@site/notes/languages/llvm/README.md",slug:"/languages/llvm/README",permalink:"/notes/languages/llvm/README",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/llvm/README.md",version:"current",sidebar:"docs",previous:{title:"JavaScript \u5e38\u89c1\u95ee\u9898",permalink:"/notes/languages/js/js-faq"},next:{title:"Lua",permalink:"/notes/languages/lua/lua"}},i=[{value:"Tips",id:"tips",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"LLVM ",Object(l.b)("a",{parentName:"li",href:"https://llvm.org/docs/LangRef.html"},"Language Reference Manual")),Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u8bed\u8a00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Emscripten: An LLVM to JavaScript Compiler"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://mukulrathi.co.uk/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/"},"A Complete Guide to LLVM for Programming Language Creators"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# brew \u5b89\u88c5\u4f4d\u7f6e /usr/local/opt/llvm\n\n# header -> ir\nclang -cc1 SDL.h -emit-llvm -femit-all-decls -o SDL.h.ll\n# \u67e5\u770b cc1 \u7684\u5e2e\u52a9\nclang -cc1 --help\n# \u7f16\u8bd1\u4e3a\u6c47\u7f16\nllc SDL.h.ll\n# bc \u53cd\u6c47\u7f16\u4e3a ir\nllvm-dis SDL.h.bc\n")))}p.isMDXComponent=!0}}]);