(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(952)),c={id:"centos-version"},i={unversionedId:"os/centos/centos-version",id:"os/centos/centos-version",isDocsHomePage:!1,title:"centos-version",description:"CentOS \u7248\u672c",source:"@site/notes/os/centos/centos-version.md",slug:"/os/centos/centos-version",permalink:"/notes/os/centos/centos-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/centos/centos-version.md",version:"current",sidebar:"docs",previous:{title:"CentOS FAQ",permalink:"/notes/os/centos/centos-faq"},next:{title:"Busybox",permalink:"/notes/os/busybox/README"}},l=[{value:"CentOS 8",id:"centos-8",children:[]},{value:"CentOS 7",id:"centos-7",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"centos-\u7248\u672c"},"CentOS \u7248\u672c"),Object(a.b)("h2",{id:"centos-8"},"CentOS 8"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5185\u6838 4.18+"),Object(a.b)("li",{parentName:"ul"},"RHEL 8/Fedora 28"),Object(a.b)("li",{parentName:"ul"},"nftable \u66ff\u4ee3 iptable"),Object(a.b)("li",{parentName:"ul"},"firewalld \u9ed8\u8ba4\u4f7f\u7528 nftable"),Object(a.b)("li",{parentName:"ul"},"qemu 2.2",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"virt \u4ed3\u5e93\u4e0b 4.2"))),Object(a.b)("li",{parentName:"ul"},"\u4ed3\u5e93",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"update \u4ed3\u5e93\u6ca1\u6709\u4e86 - BaseOS/os + AppStream \u53d6\u4ee3"),Object(a.b)("li",{parentName:"ul"},"BaseOS/kickstart \u505c\u7559\u5728\u53d1\u5e03\u70b9\u72b6\u6001"))),Object(a.b)("li",{parentName:"ul"},"\u5305",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u65b0\u589e Cockpit")))),Object(a.b)("h2",{id:"centos-7"},"CentOS 7"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7f51\u5361\u540d\u5b57\u4f1a\u4f7f\u7528 eth \u683c\u5f0f\u4e86\u800c\u4e0d\u662f bios \u540d\u5b57"),Object(a.b)("li",{parentName:"ul"},"\u79fb\u9664 net-tools \u5305 - \u6ca1\u6709\u4e86 ifconfig, netstat - \u4f7f\u7528 iproute2")))}u.isMDXComponent=!0},952:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,m=p["".concat(c,".").concat(O)]||p[O]||b[O]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);