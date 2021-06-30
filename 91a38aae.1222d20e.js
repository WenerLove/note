(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},665:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(1107)),o={title:"Linkerd Version"},c={unversionedId:"devops/service/linkerd-version",id:"devops/service/linkerd-version",isDocsHomePage:!1,title:"Linkerd Version",description:"2.9",source:"@site/notes/devops/service/linkerd-version.md",slug:"/devops/service/linkerd-version",permalink:"/notes/devops/service/linkerd-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/linkerd-version.md",version:"current",sidebar:"docs",previous:{title:"Kuma",permalink:"/notes/devops/service/kuma"},next:{title:"Linkerd",permalink:"/notes/devops/service/linkerd"}},l=[{value:"2.9",id:"29",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"29"},"2.9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"mTLS TCP"),Object(a.b)("li",{parentName:"ul"},"ARM"),Object(a.b)("li",{parentName:"ul"},"proxy \u652f\u6301\u591a\u6838"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 ",Object(a.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},"Service Topology"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f8b\u5982\u4f18\u5148\u8bf7\u6c42\u672c\u8282\u70b9\u670d\u52a1"))),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 EndpointSlice - ",Object(a.b)("inlineCode",{parentName:"li"},"--enable-endpoint-slices")),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8 Prometheus - ",Object(a.b)("inlineCode",{parentName:"li"},"global.prometheusUrl")),Object(a.b)("li",{parentName:"ul"},"\u65b0\u589e\u6ce8\u89e3 ",Object(a.b)("inlineCode",{parentName:"li"},"linkerd.io/inject: ingress"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4ee3\u7406\u652f\u6301 service profiles"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u8def\u7531"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 HTTP \u6d41\u91cf\u5207\u5206"))),Object(a.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5b58\u653e\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"linkerd-config")," ConfigMap"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2020/11/09/announcing-linkerd-2.9/"},"Announcing Linkerd 2.9")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/releases/tag/stable-2.9.0"},"stable-2.9.0"))))))}s.isMDXComponent=!0}}]);