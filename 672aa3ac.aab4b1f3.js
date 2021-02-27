(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(7),c=(n(0),n(746)),i={id:"capabilities",title:"\u80fd\u529b\u7ba1\u7406"},p={unversionedId:"os/linux/sys/capabilities",id:"os/linux/sys/capabilities",isDocsHomePage:!1,title:"\u80fd\u529b\u7ba1\u7406",description:"Capabilities",source:"@site/notes/os/linux/sys/capabilities.md",slug:"/os/linux/sys/capabilities",permalink:"/notes/os/linux/sys/capabilities",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/capabilities.md",version:"current"},o=[{value:"Tips",id:"tips",children:[]}],l={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"capabilities"},"Capabilities"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/capabilities.7.html"}),"capabilities.7"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u81ea 2.2 \u5c06 root \u6743\u9650\u62c6\u5206\u4e3a\u591a\u4e2a\u80fd\u529b"),Object(c.b)("li",{parentName:"ul"},"\u80fd\u529b\u662f\u7ebf\u7a0b\u7ea7\u522b\u7684\u5c5e\u6027"))),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u8981\u80fd\u529b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"CAP_NET_ADMIN",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u7f51\u5361\u914d\u7f6e"),Object(c.b)("li",{parentName:"ul"},"IP \u7ba1\u7406"),Object(c.b)("li",{parentName:"ul"},"\u8def\u7531\u8868"),Object(c.b)("li",{parentName:"ul"},"\u5efa\u7acb\u5e7f\u64ad"))),Object(c.b)("li",{parentName:"ul"},"CAP_SYS_ADMIN",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6302\u8f7d\u3001\u8d54\u989d"),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u673a\u540d")))))),Object(c.b)("p",null,'"cap_chown",\n"cap_dac_override",\n"cap_dac_read_search",\n"cap_fowner",\n"cap_fsetid",\n"cap_kill",\n"cap_setgid",\n"cap_setuid",\n"cap_setpcap",\n"cap_linux_immutable",\n"cap_net_bind_service",\n"cap_net_broadcast",\n"cap_net_admin",\n"cap_net_raw",\n"cap_ipc_lock",\n"cap_ipc_owner",\n"cap_sys_module",\n"cap_sys_rawio",\n"cap_sys_chroot",\n"cap_sys_ptrace",\n"cap_sys_pacct",\n"cap_sys_admin",\n"cap_sys_boot",\n"cap_sys_nice",\n"cap_sys_resource",\n"cap_sys_time",\n"cap_sys_tty_config",\n"cap_mknod",\n"cap_lease",\n"cap_audit_write",\n"cap_audit_control",\n"cap_setfcap",\n"cap_mac_override",\n"cap_mac_admin",\n"cap_syslog",\n"35",\n"36+ep"'))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,_=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(_,p(p({ref:t},l),{},{components:n})):r.a.createElement(_,p({ref:t},l))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);