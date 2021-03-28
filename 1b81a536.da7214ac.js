(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(852)),o={id:"chan_dahdi",title:"DAHDi Channel"},c={unversionedId:"voip/asterisk/chan_dahdi",id:"voip/asterisk/chan_dahdi",isDocsHomePage:!1,title:"DAHDi Channel",description:"DAHDi",source:"@site/notes/voip/asterisk/chan_dahdi.md",slug:"/voip/asterisk/chan_dahdi",permalink:"/notes/voip/asterisk/chan_dahdi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_dahdi.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u7248\u672c",permalink:"/notes/voip/asterisk/version"},next:{title:"chan_dongle",permalink:"/notes/voip/asterisk/chan_dongle"}},s=[{value:"Tips",id:"tips",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dahdi"},"DAHDi"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/asterisk/dahdi-linux"},"asterisk/dahdi-linux"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=dahdi/linux.git"},"dahdi/linux")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/asterisk/libpri"},"asterisk/libpri"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://git.asterisk.org/gitweb/?p=libpri.git"},"libpri"))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'apk add dahdi-linux-lts\n\ndahdi_genconf modules\ncat /etc/dahdi/modules\nmodprobe <previously listed detected drivers>\ndahdi_genconf system\ndahdi_cfg\n\n\n\n# \u5148\u67e5\u770b\u6240\u6709\u7684\nlspci\n# \u7136\u540e\u53ef\u4ee5\u67e5\u770b\u5355\u4e2a\u7684\u8be6\u60c5, \u53ef\u4ee5\u770b\u5230\u4f7f\u7528\u7684\u6a21\u5757\nlspci -s 09:00.0 -vvvv\n\n# \u67e5\u770b\u6a21\u5757\u4fe1\u606f\nmodinfo dahdi\n# \u67e5\u770b\u5b89\u88c5\u7684\u6a21\u5757\nlsmod\nless /proc/modules\n# \u67e5\u770b\u53ef\u5b89\u88c5\u6a21\u5757\nls -l /lib/modules/$(uname -r)/kernel/drivers/\n# \u6a21\u5757\u5b89\u88c5\nmodprobe dahdi\n# \u79fb\u9664\nmodprobe -r wctdm24xxp\n\n# \u5982\u679c\u6a21\u5757\u662f\u62f7\u8d1d\u8fc7\u53bb\u7684, \u53ef\u80fd\u8981\u5148\u8fdb\u884c\u8be5\u64cd\u4f5c\ndepmod -a\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\ncat /proc/dahdi/1\nls /dev/dahdi/\n\n# pri\xa0show\xa0spans\n\nasterisk -rx "dahdi show version"\nasterisk -rx "pri show version"\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"modprobe dahdi"),Object(a.b)("li",{parentName:"ul"},"modprobe wctdm"),Object(a.b)("li",{parentName:"ul"},"/sys/bus/dahdi_devices"),Object(a.b)("li",{parentName:"ul"},"dahdi -> crc_ccitt"),Object(a.b)("li",{parentName:"ul"},"oct612x -> dahdi"),Object(a.b)("li",{parentName:"ul"},"wct4xxp -> oct612x,dahdi")))}d.isMDXComponent=!0},852:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);