(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{1129:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=r.a.createContext({}),u=function(t){var e=r.a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):b(b({},e),t)),n},p=function(t){var e=u(t.components);return r.a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},o=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),p=u(n),o=a,s=p["".concat(i,".").concat(o)]||p[o]||d[o]||l;return n?r.a.createElement(s,b(b({ref:e},m),{},{components:n})):r.a.createElement(s,b({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=o;var b={};for(var c in e)hasOwnProperty.call(e,c)&&(b[c]=e[c]);b.originalType=t,b.mdxType="string"==typeof t?t:a,i[1]=b;for(var m=2;m<l;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},665:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return b})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(1129)),i={title:"limit"},b={unversionedId:"os/linux/sys/limit",id:"os/linux/sys/limit",isDocsHomePage:!1,title:"limit",description:"LIMIT",source:"@site/notes/os/linux/sys/limit.md",slug:"/os/linux/sys/limit",permalink:"/notes/os/linux/sys/limit",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/limit.md",version:"current",sidebar:"docs",previous:{title:"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/sys/dmesg-faq"},next:{title:"sys/mman.h",permalink:"/notes/os/linux/sys/mman.h"}},c=[],m={toc:c};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"limit"},"LIMIT"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/etc/security/limits.conf - \u5168\u5c40\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"/etc/security/limits.d/ - \u901a\u5e38\u7528\u4e8e\u914d\u7f6e\u5355\u4e2a\u8fdb\u7a0b")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5176\u4ed6\u8fdb\u7a0b\u7684 limits\ncat /proc/1/limits\n\n# \u4fee\u6539\u5176\u4ed6\u7ebf\u7a0b\nprlimit --pid $(pidof prometheus) --nofile=65535:65535\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"unit"),Object(l.b)("th",{parentName:"tr",align:null},"flag"),Object(l.b)("th",{parentName:"tr",align:null},"value"),Object(l.b)("th",{parentName:"tr",align:null},"flavor"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"core file size"),Object(l.b)("td",{parentName:"tr",align:null},"blocks"),Object(l.b)("td",{parentName:"tr",align:null},"-c"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data seg size"),Object(l.b)("td",{parentName:"tr",align:null},"kbytes"),Object(l.b)("td",{parentName:"tr",align:null},"-d"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"file size"),Object(l.b)("td",{parentName:"tr",align:null},"blocks"),Object(l.b)("td",{parentName:"tr",align:null},"-f"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pending signals"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"-i"),Object(l.b)("td",{parentName:"tr",align:null},"63510"),Object(l.b)("td",{parentName:"tr",align:null},"linux")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max locked memory"),Object(l.b)("td",{parentName:"tr",align:null},"kbytes"),Object(l.b)("td",{parentName:"tr",align:null},"-l"),Object(l.b)("td",{parentName:"tr",align:null},"64"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max memory size"),Object(l.b)("td",{parentName:"tr",align:null},"kbytes"),Object(l.b)("td",{parentName:"tr",align:null},"-m"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"open files"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"-n"),Object(l.b)("td",{parentName:"tr",align:null},"1024"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pipe size"),Object(l.b)("td",{parentName:"tr",align:null},"512 bytes"),Object(l.b)("td",{parentName:"tr",align:null},"-p"),Object(l.b)("td",{parentName:"tr",align:null},"8"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"POSIX message queues"),Object(l.b)("td",{parentName:"tr",align:null},"bytes"),Object(l.b)("td",{parentName:"tr",align:null},"-q"),Object(l.b)("td",{parentName:"tr",align:null},"819200"),Object(l.b)("td",{parentName:"tr",align:null},"linux")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"real-time priority"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"-r"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"linux")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stack size"),Object(l.b)("td",{parentName:"tr",align:null},"kbytes"),Object(l.b)("td",{parentName:"tr",align:null},"-s"),Object(l.b)("td",{parentName:"tr",align:null},"8192"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cpu time"),Object(l.b)("td",{parentName:"tr",align:null},"seconds"),Object(l.b)("td",{parentName:"tr",align:null},"-t"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max user processes"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"-u"),Object(l.b)("td",{parentName:"tr",align:null},"63510"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"virtual memory"),Object(l.b)("td",{parentName:"tr",align:null},"kbytes"),Object(l.b)("td",{parentName:"tr",align:null},"-v"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"file locks"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"-x"),Object(l.b)("td",{parentName:"tr",align:null},"unlimited"),Object(l.b)("td",{parentName:"tr",align:null},"linux")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/proc/1/limits")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Limit                     Soft Limit           Hard Limit           Units\nMax cpu time              unlimited            unlimited            seconds\nMax file size             unlimited            unlimited            bytes\nMax data size             unlimited            unlimited            bytes\nMax stack size            8388608              unlimited            bytes\nMax core file size        0                    unlimited            bytes\nMax resident set          unlimited            unlimited            bytes\nMax processes             30464                30464                processes\nMax open files            1024                 4096                 files\nMax locked memory         65536                65536                bytes\nMax address space         unlimited            unlimited            bytes\nMax file locks            unlimited            unlimited            locks\nMax pending signals       30464                30464                signals\nMax msgqueue size         819200               819200               bytes\nMax nice priority         0                    0\nMax realtime priority     0                    0\nMax realtime timeout      unlimited            unlimited            us\n")))}u.isMDXComponent=!0}}]);