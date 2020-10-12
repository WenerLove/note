(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(7),a=(n(0),n(556)),i={id:"windows-faq",title:"Windows FAQ"},c={unversionedId:"ops/os/windows/windows-faq",id:"ops/os/windows/windows-faq",isDocsHomePage:!1,title:"Windows FAQ",description:"AD vs LDAP",source:"@site/contents/tricks/ops/os/windows/windows-faq.md",slug:"/ops/os/windows/windows-faq",permalink:"/notes/ops/os/windows/windows-faq",version:"current",sidebar:"docs",previous:{title:"Windows \u57df\u63a7",permalink:"/notes/ops/os/windows/windows-dc"},next:{title:"\u6570\u636e\u5e93",permalink:"/notes/db/db"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ad-vs-ldap"},"AD vs LDAP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"LDAP",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6807\u51c6\u534f\u8bae"),Object(a.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u76ee\u5f55\u7684\u65b9\u5f0f\u8bbf\u95ee\u5b58\u50a8\u7684\u6570\u636e"),Object(a.b)("li",{parentName:"ul"},"\u672c\u8d28\u540e\u7aef\u662f\u4e00\u4e2a\u6570\u636e\u5e93"),Object(a.b)("li",{parentName:"ul"},"LDAP \u662f\u4e0e\u6570\u636e\u5e93\u7684\u901a\u4fe1\u534f\u8bae"))),Object(a.b)("li",{parentName:"ul"},"AD",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u79c1\u6709\u8f6f\u4ef6\u5e94\u7528"),Object(a.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u63d0\u9ad8\u4e86\u8ba4\u8bc1\uff0c\u76ee\u5f55\uff0c\u7b56\u7565\u7b49"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 LDAP \u7684\u65b9\u5f0f\u8fdb\u884c\u4ea4\u4e92")))),Object(a.b)("h1",{id:"dc-vs-ad---domain-controllers-vs-active-directory"},"DC vs. AD - Domain Controllers vs. Active Directory"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DC \u63d0\u4f9b AD \u670d\u52a1")))}u.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);