(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1107:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(1107)),i={title:"\u9650\u5236\u7406\u8bba"},c={unversionedId:"dev/theory/theory-of-constraints",id:"dev/theory/theory-of-constraints",isDocsHomePage:!1,title:"\u9650\u5236\u7406\u8bba",description:"- Theory of constraints",source:"@site/notes/dev/theory/theory-of-constraints.md",slug:"/dev/theory/theory-of-constraints",permalink:"/notes/dev/theory/theory-of-constraints",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/theory/theory-of-constraints.md",version:"current",sidebar:"docs",previous:{title:"Pattern FAQ",permalink:"/notes/dev/theory/pattern-faq"},next:{title:"\u7c7b\u578b",permalink:"/notes/dev/theory/typing"}},p=[],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Theory_of_constraints"},"Theory of constraints"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u4e3b\u8981\u95ee\u9898"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u4ec0\u4e48\u8981\u6539\u53d8\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u8981\u6539\u53d8\u6210\u4ec0\u4e48\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u5982\u4f55\u9020\u6210\u6539\u53d8\uff1f"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5176\u4ed6\u95ee\u9898"),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u6539\u53d8\uff1f"),Object(a.b)("li",{parentName:"ol"},"\u5982\u4f55\u4fdd\u6301\u6301\u7eed\u6539\u5584\u7684\u8fc7\u7a0b\uff08\u82f1\u8bed\uff1aProcess of ongoing improvement-POOGI\uff09\uff1f"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.prodops.io/blog/devops-explained-using-toc-logical-thinking-process"},"DevOps Explained Using ToC Logical Thinking Process"))))))}s.isMDXComponent=!0}}]);