(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{1107:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),p=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,d=s["".concat(o,".").concat(u)]||s[u]||b[u]||l;return t?a.a.createElement(d,c(c({ref:n},m),{},{components:t})):a.a.createElement(d,c({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<l;m++)o[m]=t[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},462:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),l=(t(0),t(1107)),o={title:"sys/mman.h"},c={unversionedId:"os/linux/sys/mman.h",id:"os/linux/sys/mman.h",isDocsHomePage:!1,title:"sys/mman.h",description:"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",source:"@site/notes/os/linux/sys/mman.h.md",slug:"/os/linux/sys/mman.h",permalink:"/notes/os/linux/sys/mman.h",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/sys/mman.h.md",version:"current",sidebar:"docs",previous:{title:"limit",permalink:"/notes/os/linux/sys/limit"},next:{title:"Swap",permalink:"/notes/os/linux/sys/swap"}},i=[{value:"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",id:"sysmmanh---\u5185\u5b58\u7ba1\u7406\u5b9a\u4e49",children:[{value:"mmap",id:"mmap",children:[]},{value:"\u5185\u5b58\u9501",id:"\u5185\u5b58\u9501",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Reference",id:"reference",children:[]}],m={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"sysmmanh---\u5185\u5b58\u7ba1\u7406\u5b9a\u4e49"},"sys/mman.h - \u5185\u5b58\u7ba1\u7406\u5b9a\u4e49"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"// \u9501\u5b9a\u90e8\u5206\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint mlock(const void *, size_t);\n// \u9501\u5b9a\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint mlockall(int);\n// \u5efa\u7acb\u5185\u5b58\u6620\u5c04\nvoid *mmap(void *, size_t, int, int, int, off_t);\n// \u4e3a\u5185\u5b58\u6620\u5c04\u8bbe\u7f6e\u4fdd\u62a4, \u4fee\u6539 mmap \u65f6\u7684\u4fdd\u62a4\u8bbe\u7f6e\nint mprotect(void *, size_t, int);\n// \u540c\u6b65\u5185\u5b58\u5230\u7269\u7406\u5b58\u50a8\nint msync(void *, size_t, int);\n// \u89e3\u9501\u90e8\u5206\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint munlock(const void *, size_t);\n// \u89e3\u9501\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\nint munlockall(void);\n// \u53d6\u6d88\u5185\u5b58\u6620\u5c04\u9875\nint munmap(void *, size_t);\n\n\n// mmap\n// \u8bbf\u95ee\u4fdd\u62a4\u8bbe\u7f6e\nconst PROT_READ // \u53ef\u8bfb\nconst PROT_WRITE // \u53ef\u5199\nconst PROT_EXEC // \u53ef\u6267\u884c\nconst PROT_NONE // \u4e0d\u80fd\u88ab\u8bbf\u95ee\n\nconst MAP_SHARED // \u4fee\u6539\u4e3a\u5171\u4eab\nconst MAP_PRIVATE // \u4fee\u6539\u4e3a\u79c1\u6709\nconst MAP_FIXED // Interpret addr exactly.\n\n// msync\nconst MS_ASYNC // \u5f02\u6b65\u5199\nconst MS_SYNC // \u540c\u6b65\u5199\nconst MS_INVALIDATE // \u4f7f\u7f13\u5b58\u65f6\u6548\n\n// mlocalall\nconst MCL_CURRENT // \u9501\u5b9a\u5f53\u524d\u6620\u5c04\u9875\nconst MCL_FUTURE // \u9501\u5b9a\u5c06\u6765\u4f1a\u88ab\u6620\u5c04\u9875\n")),Object(l.b)("h3",{id:"mmap"},"mmap"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"#include <sys/mman.h>\n\nvoid *mmap(void \\*addr, size_t len, int prot, int flags,int fildes, off_t off);\n")),Object(l.b)("p",null,"\u5efa\u7acb\u8fdb\u7a0b\u5730\u5740\u7a7a\u95f4\u5230\u5185\u5b58\u5bf9\u8c61\u4e4b\u95f4\u7684\u6620\u5c04,\u652f\u6301\u4ee5\u4e0b\u5185\u5b58\u5bf9\u8c61"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c4\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"SHM")," \u5171\u4eab\u5185\u5b58\u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"TYM")," Typed memory object",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://pubs.opengroup.org/onlinepubs/9699919799/functions/posix_typed_mem_open.html"},"posix_typed_mem_open"),"\n\u7528\u4e8e\u6253\u5f00\u4e00\u4e2a Typed memory object")))),Object(l.b)("p",null,"MAP_SHARED \u4fee\u6539\u5185\u5b58\u65f6\u5176\u4ed6\u8fdb\u7a0b\u53ef\u89c1;MAP_PRIVATE \u4fee\u6539\u65f6\u5176\u4ed6\u8fdb\u7a0b\u4e0d\u53ef\u89c1, \u5e76\u4e14\u4e0d\u4f1a\u4fee\u6539\u5e95\u5c42\u5bf9\u8c61.\nMAP_FIXED \u6307\u5b9a\u540e,\u8fd4\u56de\u503c\u5373",Object(l.b)("inlineCode",{parentName:"p"},"addr"),",\u8be5\u64cd\u4f5c\u4f1a\u66ff\u6362\u4e4b\u524d\u7684\u6620\u5c04,\u4e0d\u63a8\u8350\u4f7f\u7528."),Object(l.b)("p",null,"\u652f\u6301\u5185\u5b58\u4fdd\u62a4\u7684\u786c\u4ef6\u80fd\u591f\u5f88\u597d\u5730\u652f\u6301 MAP_PRIVATE, \u5728\u4e0d\u652f\u6301\u7684\u786c\u4ef6\u4e0a\u53ef\u80fd\u4f1a\u5f62\u6210\u4e00\u4efd\u5b8c\u6574\u7684\u62f7\u8d1d,\u8fd9\u548c ",Object(l.b)("inlineCode",{parentName:"p"},"read")," \u7c7b\u4f3c."),Object(l.b)("h3",{id:"\u5185\u5b58\u9501"},"\u5185\u5b58\u9501"),Object(l.b)("p",null,"\u7528\u4e8e\u5bf9\u6027\u80fd\u8981\u6c42\u975e\u5e38\u9ad8\u7684\u573a\u666f(\u5373\u4fbf\u662f\u4e00\u6b21\u5185\u5b58\u4ea4\u6362\u4e5f\u4f1a\u5bf9\u6027\u80fd\u6709\u6240\u5f71\u54cd)\u548c\u5bf9\u5b89\u5168\u8981\u6c42\u8f83\u9ad8\u7684\u5e38\u89c1(\u4e0d\u5141\u8bb8\u5185\u5b58\u88ab\u4ea4\u6362\u5230\u78c1\u76d8)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5185\u5b58\u4e0d\u4f1a\u88ab\u4ea4\u6362\u5230\u78c1\u76d8")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u64cd\u4f5c\u65f6\u95f4\u56fa\u5b9a")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e0d\u53d7\u9875\u4ea4\u6362\u5ef6\u8fdf\u5f71\u54cd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u9501\u4e0d\u80fd\u53e0\u52a0")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8be5\u64cd\u4f5c\u4f1a\u5f71\u54cd\u5176\u4ed6\u8fdb\u7a0b,\u5982\u679c\u6587\u4ef6\u6620\u5c04 ",Object(l.b)("inlineCode",{parentName:"p"},"mlockall")," \u4f1a\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u91cf\u4e0d\u65ad\u589e\u957f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"http://linux.die.net/man/2/mlock"},"mlock - manpage"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"http://www.gnu.org/software/libc/manual/html_node/Locked-Memory-Details.html"},"Locked Memory Details")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"// \u83b7\u53d6\u5185\u5b58\u9875\u5927\u5c0f\nlong sz = sysconf(_SC_PAGESIZE);\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"fildes = open(...)\nlseek(fildes, some_offset)\nread(fildes, buf, len)\n/* Use data in buf. */\n\n// becomes:\n\nfildes = open(...)\naddress = mmap(0, len, PROT_READ, MAP_PRIVATE, fildes, some_offset)\n/* Use data at address. */\n")),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://pubs.opengroup.org/onlinepubs/9699919799/functions/mmap.html"},"mmap - susv4"))))}p.isMDXComponent=!0}}]);