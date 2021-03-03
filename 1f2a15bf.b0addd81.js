(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(7),i=(r(0),r(766)),l={id:"parsing",title:"\u8bed\u6cd5\u89e3\u6790"},o={unversionedId:"languages/parsing",id:"languages/parsing",isDocsHomePage:!1,title:"\u8bed\u6cd5\u89e3\u6790",description:"\u89e3\u6790",source:"@site/notes/languages/parsing.md",slug:"/languages/parsing",permalink:"/notes/languages/parsing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/parsing.md",version:"current",sidebar:"docs",previous:{title:"Object C",permalink:"/notes/languages/objc"},next:{title:"Parsing Expression Grammars",permalink:"/notes/languages/peg"}},c=[],p={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u89e3\u6790"},"\u89e3\u6790"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Parsing - \u89e3\u6790",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5e38\u7528\u7b97\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LL - Left to right, Leftmost dervation - \u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u81ea\u4e0a\u5411\u4e0b"),Object(i.b)("li",{parentName:"ul"},"LR - Left to right, Rightmost dervation  - \u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u81ea\u5e95\u5411\u4e0a"),Object(i.b)("li",{parentName:"ul"},"PEG + Packrat parsing"),Object(i.b)("li",{parentName:"ul"},"Earley Parsing"))),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u65b9\u5f0f\u51b3\u5b9a\u4e86\u5185\u90e8\u6570\u636e\u7ed3\u6784\u4e0d\u540c\uff0c\u89e3\u51b3\u5206\u6b67\u7684\u65b9\u5f0f\u4e0d\u540c"))),Object(i.b)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u65e0\u5173 - Context Free",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},"int int = 10;")," - \u8fd9\u91cc\u5728\u505a lexing \u7684\u65f6\u5019\u4f1a\u6210\u529f\uff0c\u4f46\u8bed\u6cd5\u5c42\u9762\u4f1a\u5931\u8d25\uff1b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u4e0a\u4e0b\u6587\u65e0\u5173\uff0c\u5148\u505a lexing\uff0c\u7b2c\u4e8c\u4e2a int \u4e5f\u4f1a\u88ab\u8bc6\u522b\u6210\u7c7b\u578b\u7684 token\u3002"))))),Object(i.b)("li",{parentName:"ul"},"\u5de6\u9012\u5f52 - Left Recursion")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-antlr4"}),"exp\n  : exp '+' exp\n  | integer\n  ;\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"LALR - LookAhead Left Recursion",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u524d\u5411\u73af\u89c6\u5de6\u9012\u5f52"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 LA \u6765\u89e3\u51b3\u5206\u6b67"))),Object(i.b)("li",{parentName:"ul"},"Parser Combinator - \u7ec4\u5408\u89e3\u6790"),Object(i.b)("li",{parentName:"ul"},"Parser Generator - \u751f\u6210\u89e3\u6790",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_parser_generators"}),"Comparison of parser generators")))),Object(i.b)("li",{parentName:"ul"},"Lexing - \u8bcd\u6cd5\u89e3\u6790 - \u8bcd\u6cd5\u5206\u6790",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"lexical analysis, tokenization"))),Object(i.b)("li",{parentName:"ul"},"Grammar - \u8bed\u6cd5\u89e3\u6790"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/sap/chevrotain"}),"https://github.com/sap/chevrotain")," - Parser Building Toolkit for JavaScript"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://softwareengineering.stackexchange.com/questions/338665"}),"When to use a Parser Combinator? When to use a Parser Generator?"))))))}b.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(O,o(o({ref:t},p),{},{components:r})):a.a.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);