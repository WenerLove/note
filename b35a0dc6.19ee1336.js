(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1107:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return r?i.a.createElement(f,c(c({ref:t},l),{},{components:r})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},815:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(8),a=(r(0),r(1107)),o={id:"dev",title:"Linux Device"},c={unversionedId:"os/linux/dev/dev",id:"os/linux/dev/dev",isDocsHomePage:!1,title:"Linux Device",description:"* List of device bit rates",source:"@site/notes/os/linux/dev/README.md",slug:"/os/linux/dev/dev",permalink:"/notes/os/linux/dev/dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/dev/README.md",version:"current",sidebar:"docs",previous:{title:"Partition",permalink:"/notes/os/linux/partition"},next:{title:"mtd",permalink:"/notes/os/linux/dev/mtd"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_device_bit_rates"},"List of device bit rates")),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/PybqqhyJejNJbeSdlEaYWQ"},"linux\u8bbe\u5907\u6a21\u578b\u4e4bkset/kobj/ktype\u5206\u6790")))),Object(a.b)("li",{parentName:"ul"},"/sys/class/tty")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6240\u6709 USB\nls -l /sys/class/tty/ttyUSB*\n# \u4f7f\u7528\u7684\u9a71\u52a8\n# usb/drivers/cdc_acm\n# pnp/drivers/serial\n# platform/drivers/dw-apb-uart\n# platform/drivers/serial8250\n# usb-serial/drivers/ch341-uart\n# usb-serial/drivers/option1\nls -l /sys/class/tty/*/device/driver\n")))}u.isMDXComponent=!0}}]);