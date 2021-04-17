(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{584:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(8),o=(r(0),r(914)),i={title:"Prometheus FAQ"},s={unversionedId:"devops/metrics/prometheus-faq",id:"devops/metrics/prometheus-faq",isDocsHomePage:!1,title:"Prometheus FAQ",description:"Prometheus \u5e38\u89c1\u95ee\u9898",source:"@site/notes/devops/metrics/prometheus-faq.md",slug:"/devops/metrics/prometheus-faq",permalink:"/notes/devops/metrics/prometheus-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/prometheus-faq.md",version:"current",sidebar:"docs",previous:{title:"Prometheus Exporter",permalink:"/notes/devops/metrics/prometheus-exporter"},next:{title:"Prometheus \u8054\u90a6",permalink:"/notes/devops/metrics/prometheus-federation"}},p=[{value:"remote write \u8c03\u4f18",id:"remote-write-\u8c03\u4f18",children:[]},{value:"open /prometheus/queries.active: permission denied",id:"open-prometheusqueriesactive-permission-denied",children:[]}],c={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"prometheus-\u5e38\u89c1\u95ee\u9898"},"Prometheus \u5e38\u89c1\u95ee\u9898"),Object(o.b)("h2",{id:"remote-write-\u8c03\u4f18"},"remote write \u8c03\u4f18"),Object(o.b)("p",null,"*",Object(o.b)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/remote_write/"},"REMOTE WRITE TUNING")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8c03\u4f18\u76ee\u6807 \u5ef6\u65f6\u3001QPS\u3001\u5185\u5b58\u5360\u7528"),Object(o.b)("li",{parentName:"ul"},"\u51cf\u5c11\u5185\u5b58\u5360\u7528",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u964d\u4f4e max_shards, \u589e\u52a0 capacity \u548c max_samples_per_send"),Object(o.b)("li",{parentName:"ul"},"\u5206\u7247\u5185\u5b58\u5360\u7528\u5f71\u54cd\u56e0\u7d20 ",Object(o.b)("inlineCode",{parentName:"li"},"number of shards * (capacity + max_samples_per_send)")))),Object(o.b)("li",{parentName:"ul"},"\u51cf\u5c11\u5ef6\u65f6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u51cf\u5c11 batch_send_deadline, \u589e\u52a0 max_samples_per_send"))),Object(o.b)("li",{parentName:"ul"},"\u51cf\u5c11 QPS",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u589e\u52a0 max_samples_per_send, \u589e\u52a0 capacity"),Object(o.b)("li",{parentName:"ul"},"\u51cf\u5c11 QPS \u4e5f\u80fd\u51cf\u5c11\u670d\u52a1\u7aef\u538b\u529b"))),Object(o.b)("li",{parentName:"ul"},"shards \u4f1a\u81ea\u52a8\u589e\u51cf - \u901a\u8fc7 min_shards \u548c max_shards \u9650\u5b9a\u8303\u56f4")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# \u9ed8\u8ba4\n# \u4e00\u4e2a\u5206\u7247\u5927\u7ea6 500k\ncapacity: 2500\nmax_samples_per_send: 500\n\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 100\nbatch_send_deadline: 5s\n\n# capacity\n# \u6bcf\u4e2a\u5206\u7247\u961f\u5217\u7684\u5bb9\u91cf\n# \u9700\u8981\u8bbe\u7f6e\u9ad8\u4e00\u70b9\u907f\u514d\u963b\u585e\u8bfb\u53d6 wal\n# \u4e00\u822c 3-10 \u500d\u4e8e max_samples_per_send\ncapacity:\n\n# \u6279\u91cf\u53d1\u9001\u66b4\u529b\u914d\u7f6e\ncapacity: 10000\nmax_shards: 1000\nmin_shards: 1\nmax_samples_per_send: 5000\nbatch_send_deadline: 10s\n")),Object(o.b)("h2",{id:"open-prometheusqueriesactive-permission-denied"},"open /prometheus/queries.active: permission denied"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"prometheus operator \u90e8\u7f72\u7684\u8bdd\u53ef\u80fd\u5728 volume \u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u51fa\u73b0\u8be5\u9519\u8bef"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 emptyDir \u6302\u8f7d\u53ef\u907f\u514d\uff0c\u6216\u8005\u4fee\u590d volume")))}m.isMDXComponent=!0},914:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),m=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);