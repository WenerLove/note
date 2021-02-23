(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),l=(r(0),r(734)),c={id:"qemu-windows-host",title:"QEMU Windows \u5bbf\u4e3b\u673a"},o={unversionedId:"os/virt/qemu-windows-host",id:"os/virt/qemu-windows-host",isDocsHomePage:!1,title:"QEMU Windows \u5bbf\u4e3b\u673a",description:"QEMU Windows HOST",source:"@site/notes/os/virt/qemu-windows-host.md",slug:"/os/virt/qemu-windows-host",permalink:"/notes/os/virt/qemu-windows-host",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-windows-host.md",version:"current"},i=[{value:"Tips",id:"tips",children:[]},{value:"Could not load library WinHvPlatform.dll",id:"could-not-load-library-winhvplatformdll",children:[]},{value:"HAXM vs HyperV",id:"haxm-vs-hyperv",children:[]}],b={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"qemu-windows-host"},"QEMU Windows HOST"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://qemu.weilnetz.de/w64/"}),"W64"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"QEMU Binaries for Windows and QEMU Documentation"))),Object(l.b)("li",{parentName:"ul"},"accel",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"hax",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea 2.9 \u652f\u6301\u4f7f\u7528 HAXM, \u7c7b\u4f3c\u4e8e Linux \u7684 KVM"))),Object(l.b)("li",{parentName:"ul"},"whpx - Windows Hypervisor Platform accelerator"))),Object(l.b)("li",{parentName:"ul"},"Windows XP \u6700\u540e\u7248\u672c\u4e3a 2.7.0")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"could-not-load-library-winhvplatformdll"},"Could not load library WinHvPlatform.dll"),Object(l.b)("h2",{id:"haxm-vs-hyperv"},"HAXM vs HyperV"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/xamarin/android/get-started/installation/android-emulator/hardware-acceleration"}),"Hardware acceleration for emulator performance (Hyper-V & HAXM)"))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scenario"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"HAXM"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"WHPX"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Hypervisor.Framework"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Intel Processor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AMD Processor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hyper-V"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nested Virtualization"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limited"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Docker"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")))))}u.isMDXComponent=!0},734:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,m=p["".concat(c,".").concat(O)]||p[O]||d[O]||l;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);