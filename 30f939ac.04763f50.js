(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},277:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(1129)),c={id:"ceph-k8s",title:"Ceph Kubernetes"},i={unversionedId:"service/storage/ceph-k8s",id:"service/storage/ceph-k8s",isDocsHomePage:!1,title:"Ceph Kubernetes",description:"Tips",source:"@site/notes/service/storage/ceph-k8s.md",slug:"/service/storage/ceph-k8s",permalink:"/notes/service/storage/ceph-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/ceph-k8s.md",version:"current",sidebar:"docs",previous:{title:"Ceph \u672f\u8bed",permalink:"/notes/service/storage/ceph-glossary"},next:{title:"Ubuntu 16.04 \u5b89\u88c5 Ceph",permalink:"/notes/service/storage/ceph-ubuntu-16-install"}},p=[{value:"Tips",id:"tips",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5efa\u8bae\u6bcf\u4e2a\u8282\u70b9\u76f8\u540c\u6027\u80fd\u914d\u7f6e"),Object(a.b)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u6848",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ceph \u90e8\u7f72\u5728\u96c6\u7fa4\u5916"),Object(a.b)("li",{parentName:"ul"},"Ceph \u4f7f\u7528 ",Object(a.b)("a",{parentName:"li",href:"https://rook.io/"},"rook.io")," \u90e8\u7f72"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(a.b)("a",{parentName:"li",href:"https://docs.ceph.com/docs/mimic/start/kube-helm/"},"Helm")," \u90e8\u7f72"))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.cloudops.com/blog/the-ultimate-rook-and-ceph-survival-guide/"},"The Ultimate Rook and Ceph Survival Guide"))))))}s.isMDXComponent=!0}}]);