(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(7),a=(n(0),n(746)),c={title:"Dante"},i={unversionedId:"ops/network/private/dante",id:"ops/network/private/dante",isDocsHomePage:!1,title:"Dante",description:"Dante",source:"@site/notes/ops/network/private/dante.md",slug:"/ops/network/private/dante",permalink:"/notes/ops/network/private/dante",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/private/dante.md",version:"current"},l=[{value:"Tips",id:"tips",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dante"},"Dante"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.inet.no/dante/"}),"dante"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"consists of a SOCKS server and a SOCKS client"),Object(a.b)("li",{parentName:"ul"},"[\u6587\u6863]","](",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.inet.no/dante/doc/1.4.x/index.html"}),"https://www.inet.no/dante/doc/1.4.x/index.html"),")"))),Object(a.b)("li",{parentName:"ul"},"sockd - \u670d\u52a1\u7aef"),Object(a.b)("li",{parentName:"ul"},"socks - \u5ba2\u6237\u7aef"),Object(a.b)("li",{parentName:"ul"},"socksify - \u57fa\u4e8e LD_PRELOAD \u7684\u4ee3\u7406"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://lvii.gitbooks.io/outman/content/dante.html"}),"https://lvii.gitbooks.io/outman/content/dante.html")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.inet.no/dante/doc/1.4.x/sockd.conf.5.html"}),"sockd.conf.5")),Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e86 ipsec\uff0c\u5219 external \u9700\u8981\u914d\u7f6e ipsec \u7684 left \u5730\u5740 - \u5426\u5219\u4e0d\u4f1a\u7ecf\u8fc7 ipsec")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# macOS \u5b89\u88c5\nbrew install dante\n\n# \u670d\u52a1\u7aef\u5b89\u88c5\napk add dante{,-server}\n\n# \u6821\u9a8c\u914d\u7f6e\u6587\u4ef6\nsockd -V -f /etc/sockd.conf\n\n# Docker \u542f\u52a8\n# \u901a\u8fc7 ip \u9650\u5236\u8bbf\u95ee\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 127.0.0.1:8888:8888 \\\n  --name dante wener/dante\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"sockd.conf")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u89c4\u5219\u6761\u4ef6 clientcompatibility, clientmethod, command, from, group, socksmethod, protocol, proxyprotocol, to, user"),Object(a.b)("li",{parentName:"ul"},"\u89c4\u5219\u52a8\u4f5c bandwidth, libwrap, log, session, redirect, timeout.connect, timeout.negotiate, timeout.io, timeout.tcp_fin_wait, udp.portrange")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),"# \u65e5\u5fd7\u8f93\u51fa\nlogoutput: stdout\n# \u76d1\u542c\u5730\u5740\ninternal: 0.0.0.0 port = 8888\n# \u51fa\u53e3\u7f51\u5361\u6216\u5730\u5740 - macOS \u4f7f\u7528 en0\nexternal: eth0\n# \u5ba2\u6237\u7aef\u6388\u6743\u65b9\u5f0f - \u652f\u6301 pam.address pam.any none rfc931\nclientmethod: none\n# \u670d\u52a1\u7aef\u9009\u62e9\u7684\u6388\u6743\u65b9\u5f0f\nsocksmethod: none\nuser.privileged: root\nuser.unprivileged: nobody\n# \u5ba2\u6237\u7aef\u89c4\u5219 - \u57fa\u4e8e\u5ba2\u6237\u7aef\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\n# \u63a5\u6536\u8bbf\u95ee\nclient pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  log: error\n}\n# \u7981\u6b62\u8bbf\u95ee 127/8\nclient block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  log: error\n}\n# socks \u89c4\u5219 - \u57fa\u4e8e socks \u534f\u8bae\u5c42\u4fe1\u606f\u8fdb\u884c\u7684\u89c4\u5219\u6821\u9a8c\n# --------\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  # \u5e94\u7528\u89c4\u5219\u7684\u6307\u4ee4 bind, bindreply, connect, udpassociate, udpreply\n  command: bind connect udpassociate\n}\nsocks pass {\n  from: 0.0.0.0/0 to: 0.0.0.0/0\n  command: bindreply udpreply\n  log: error\n}\nsocks block {\n  from: 0.0.0.0/0 to: 127.0.0.0/8\n  command: bind connect udpassociate\n  log: connect error\n}\n")))}s.isMDXComponent=!0}}]);