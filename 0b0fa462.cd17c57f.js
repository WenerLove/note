(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return n?o.a.createElement(f,b(b({ref:t},u),{},{components:n})):o.a.createElement(f,b({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(1107)),i={title:"Busybox"},b={unversionedId:"os/busybox/README",id:"os/busybox/README",isDocsHomePage:!1,title:"Busybox",description:"* busybox",source:"@site/notes/os/busybox/README.md",slug:"/os/busybox/README",permalink:"/notes/os/busybox/README",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/README.md",version:"current",sidebar:"docs",previous:{title:"centos-version",permalink:"/notes/os/centos/centos-version"},next:{title:"ifupdown",permalink:"/notes/os/busybox/ifupdown"}},c=[],u={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://busybox.net/downloads/BusyBox.html"},"busybox")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.busybox.net/live_bbox/live_bbox.html"},"live bbox"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/\ncurl -o busybox https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/busybox-x86_64\nchmod +x busybox\n")),Object(a.b)("h1",{id:"\u5305\u7ba1\u7406"},"\u5305\u7ba1\u7406"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ipkg - Itsy Package Management System - 2006-5-30",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".ipk")))),Object(a.b)("li",{parentName:"ul"},"opkg - OPKG Package Manager",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 root fs \u7ba1\u7406\uff0c\u800c\u4e0d\u53ea\u662f\u5b89\u88c5\u5230\u7279\u5b9a\u76ee\u5f55 - \u4f8b\u5982 ",Object(a.b)("inlineCode",{parentName:"li"},"/opt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".opk")))),Object(a.b)("li",{parentName:"ul"},"\u65e9\u671f\u4f7f\u7528 ipkg, \u4e4b\u540e\u88ab opkg \u66ff\u4ee3"),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u4f3c apt/dpkg")))}l.isMDXComponent=!0}}]);