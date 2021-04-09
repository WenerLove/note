(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{622:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(890)),c={title:"sipp"},o={unversionedId:"service/telecom/sip/sipp",id:"service/telecom/sip/sipp",isDocsHomePage:!1,title:"sipp",description:"* SIPp/sipp \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/telecom/sip/sipp.md",slug:"/service/telecom/sip/sipp",permalink:"/notes/service/telecom/sip/sipp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/telecom/sip/sipp.md",version:"current",sidebar:"docs",previous:{title:"SIP Awesome",permalink:"/notes/service/telecom/sip/sip-awesome"},next:{title:"acme-dns",permalink:"/notes/service/dns/acme-dns"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/SIPp/sipp"},"SIPp/sipp")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SIP \u534f\u8bae\u6d4b\u8bd5\u5de5\u5177"))),Object(i.b)("li",{parentName:"ul"},"SER - Session Establishment Rate"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LWjfA06443g"},"SIP Performance Benchmark"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install sipp\n# AlpineLinux\napk add sipp\n\n# \u670d\u52a1\u7aef\nsipp -sn uas\n# \u5ba2\u6237\u7aef\n# 1 \u6d4b\u8bd5\u573a\u666f 2 \u7edf\u8ba1 3 \u54cd\u5e94\u5ef6\u65f6\u5206\u5e03 4 \u6d4b\u8bd5\u53d8\u91cf\nsipp -sn uac 127.0.0.1\n")))}l.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);