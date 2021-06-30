(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1107:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},u),{},{components:r})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},588:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(1107)),i={id:"k8s-api",title:"Kubernates \u63a5\u53e3"},s={unversionedId:"devops/kubernetes/internal/k8s-api",id:"devops/kubernetes/internal/k8s-api",isDocsHomePage:!1,title:"Kubernates \u63a5\u53e3",description:"Tips",source:"@site/notes/devops/kubernetes/internal/k8s-api.md",slug:"/devops/kubernetes/internal/k8s-api",permalink:"/notes/devops/kubernetes/internal/k8s-api",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/internal/k8s-api.md",version:"current",sidebar:"docs",previous:{title:"Kubernetes Internal",permalink:"/notes/devops/kubernetes/internal/internal"},next:{title:"Kubernetes DNS",permalink:"/notes/devops/kubernetes/internal/k8s-dns"}},c=[{value:"Tips",id:"tips",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/"},"\u5b9a\u4e49\u6587\u6863"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u6240\u6709\u5bf9\u8c61\u7684\u5b57\u6bb5\u8bf4\u660e\u548c\u5b9a\u4e49"))),Object(o.b)("li",{parentName:"ul"},"\u5206\u7c7b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Workloads are objects you use to manage and run your containers on the cluster."),Object(o.b)("li",{parentName:"ul"},'Discovery & LB resources are objects you use to "stitch" your workloads together into an externally accessible, load-balanced Service.'),Object(o.b)("li",{parentName:"ul"},"Config & Storage resources are objects you use to inject initialization data into your applications, and to persist data that is external to your container."),Object(o.b)("li",{parentName:"ul"},"Cluster resources objects define how the cluster itself is configured; these are typically used only by cluster operators."),Object(o.b)("li",{parentName:"ul"},"Metadata resources are objects you use to configure the behavior of other resources within the cluster, such as HorizontalPodAutoscaler for scaling workloads.")))))}l.isMDXComponent=!0}}]);