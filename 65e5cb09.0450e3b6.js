(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||s[f]||o;return n?i.a.createElement(m,u(u({ref:t},p),{},{components:n})):i.a.createElement(m,u({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),o=(n(0),n(1107)),a={title:"ifupdown"},u={unversionedId:"os/linux/network/ifupdown",id:"os/linux/network/ifupdown",isDocsHomePage:!1,title:"ifupdown",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/linux/network/ifupdown.md",slug:"/os/linux/network/ifupdown",permalink:"/notes/os/linux/network/ifupdown",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/ifupdown.md",version:"current",sidebar:"docs",previous:{title:"\u6865\u63a5\u7f51\u7edc",permalink:"/notes/os/linux/network/bridge"},next:{title:"interfaces",permalink:"/notes/os/linux/network/interfaces"}},c=[{value:"ifupdown-ng",id:"ifupdown-ng",children:[]},{value:"\u811a\u672c",id:"\u811a\u672c",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7f51\u7edc\u914d\u7f6e\u8c03\u5ea6\u5668"),Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e /etc/network/interfaces \u8fdb\u884c\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u6839\u636e\u914d\u7f6e\u521b\u5efa\u8bbe\u5907\uff0c\u8c03\u7528\u914d\u7f6e\u811a\u672c"))),Object(o.b)("li",{parentName:"ul"},"busybox ifupdown"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ifupdown-ng/ifupdown-ng"},"ifupdown-ng/ifupdown-ng")),Object(o.b)("li",{parentName:"ul"},"ifupdown-debian")),Object(o.b)("h2",{id:"ifupdown-ng"},"ifupdown-ng"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=ifupdown-ng*&branch=edge&arch=x86_64"},"ifupdown-ng"))),Object(o.b)("h2",{id:"\u811a\u672c"},"\u811a\u672c"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/tree/master/main/bonding"},"https://github.com/alpinelinux/aports/tree/master/main/bonding")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/tree/master/main/bridge"},"https://github.com/alpinelinux/aports/tree/master/main/bridge")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ifupdown-ng/ifupdown-ng/tree/master/executor-scripts/linux"},"https://github.com/ifupdown-ng/ifupdown-ng/tree/master/executor-scripts/linux"))))}l.isMDXComponent=!0}}]);