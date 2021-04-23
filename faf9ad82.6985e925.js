(window.webpackJsonp=window.webpackJsonp||[]).push([[843],{916:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),l=(r(0),r(935)),b={title:"CloudFlare"},c={unversionedId:"devops/provider/cloudflare",id:"devops/provider/cloudflare",isDocsHomePage:!1,title:"CloudFlare",description:"Tips",source:"@site/notes/devops/provider/cloudflare.md",slug:"/devops/provider/cloudflare",permalink:"/notes/devops/provider/cloudflare",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/provider/cloudflare.md",version:"current"},i=[{value:"Tips",id:"tips",children:[]},{value:"Argo Tunnel",id:"argo-tunnel",children:[]},{value:"Worker",id:"worker",children:[]}],o={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://webmasters.stackexchange.com/a/88685"},"\u4e3a\u4ec0\u4e48\u80fd\u63d0\u4f9b\u65e0\u9650\u5e26\u5bbd\uff1f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/en-us/articles/115003206852-Understanding-Origin-Cache-Control"},"Understanding Origin Cache-Control"))))),Object(l.b)("h2",{id:"argo-tunnel"},"Argo Tunnel"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u6e90\u7aef\u548c Cloudflare \u4e4b\u95f4\u52a0\u5bc6\u901a\u8baf - ZeroTrust"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/zh-cn/articles/115000224192"},"\u4ef7\u683c")," - Since 2018"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.cloudflare.com/tunnel-for-everyone/"},"\u514d\u8d39\u58f0\u660e")," - 2021-4-17",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709 Argo Smart Routing \u7279\u6027"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u4e3a Cloudflare Tunnel")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Traffic"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"$/Month")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"$/G/Month")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"< 1 GB"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"10 GB"),Object(l.b)("td",{parentName:"tr",align:null},"5.90"),Object(l.b)("td",{parentName:"tr",align:null},"0.59")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"100 GB"),Object(l.b)("td",{parentName:"tr",align:null},"14.90"),Object(l.b)("td",{parentName:"tr",align:null},"0.149")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1 TB / 1000 GB"),Object(l.b)("td",{parentName:"tr",align:null},"104.90"),Object(l.b)("td",{parentName:"tr",align:null},"0.1049")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"10 TB"),Object(l.b)("td",{parentName:"tr",align:null},"1004.90"),Object(l.b)("td",{parentName:"tr",align:null},"0.10049")))),Object(l.b)("h2",{id:"worker"},"Worker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Free",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"100,000 \u8bf7\u6c42/\u5929",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"1000 \u8bf7\u6c42/\u5206\u949f"))),Object(l.b)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 10ms"),Object(l.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u8bf7\u6c42\u540e\u5ef6\u8fdf\u4f1a\u964d\u4f4e"),Object(l.b)("li",{parentName:"ul"},"30 \u4e2a Worker"))),Object(l.b)("li",{parentName:"ul"},"Bundled 5$/M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"10M \u8bf7\u6c42/\u6708",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8d85\u51fa 1M \u8bf7\u6c42 ",Object(l.b)("inlineCode",{parentName:"li"},"$0.50")))),Object(l.b)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42 CPU 50ms"),Object(l.b)("li",{parentName:"ul"},"\u603b\u662f\u6700\u4f4e\u5ef6\u8fdf"),Object(l.b)("li",{parentName:"ul"},"30 \u4e2a Worker"),Object(l.b)("li",{parentName:"ul"},"KV",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"100 \u547d\u540d\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"1G"),Object(l.b)("li",{parentName:"ul"},"10M \u8bfb, 1M \u5199, 1M \u5220\u9664, 10M List")))))))}u.isMDXComponent=!0},935:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,d=p["".concat(b,".").concat(O)]||p[O]||m[O]||l;return r?a.a.createElement(d,c(c({ref:t},o),{},{components:r})):a.a.createElement(d,c({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=r[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);