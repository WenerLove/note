(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{118:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(7),i=(r(0),r(766)),d={id:"mdadm",title:"mdadm"},c={unversionedId:"ops/storage/block/mdadm",id:"ops/storage/block/mdadm",isDocsHomePage:!1,title:"mdadm",description:"Multi Device Administration",source:"@site/notes/ops/storage/block/mdadm.md",slug:"/ops/storage/block/mdadm",permalink:"/notes/ops/storage/block/mdadm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/block/mdadm.md",version:"current",sidebar:"docs",previous:{title:"LVM",permalink:"/notes/ops/storage/block/lvm"},next:{title:"NBD",permalink:"/notes/ops/storage/block/nbd"}},o=[{value:"Tips",id:"tips",children:[]},{value:"RAID \u6587\u4ef6\u7cfb\u7edf",id:"raid-\u6587\u4ef6\u7cfb\u7edf",children:[]}],l={rightToc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"multi-device-administration"},"Multi Device Administration"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://raid.wiki.kernel.org/index.php/A_guide_to_mdadm"}),"Guide to mdadm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.mikejung.biz/Software_RAID"}),"Software RAID")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://raid.wiki.kernel.org"}),"Linux Raid"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://raid.wiki.kernel.org/index.php/RAID_setup"}),"RAID setup")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Software_RAID_and_LVM"}),"Software RAID and LVM"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u7ebf\u6027\u6a21\u5f0f\n# \u5408\u5e76\u4e24\u4e2a\u5206\u533a\uff0c\u5206\u533a\u5927\u5c0f\u4efb\u610f\nmdadm --create --verbose /dev/md0 --level=linear --raid-devices=2 /dev/sda1 /dev/sdb2\n\n# RAID 0\n# stripe \u6a21\u5f0f\uff0c\u5207\u5206\u6570\u636e\u6563\u843d\u5230\u4e2a\u4e2a\u78c1\u76d8\uff0c\u5229\u7528\u5e76\u53d1\u8bbf\u95ee\u80fd\u529b\uff0c\u6bcf\u4e2a\u5206\u533a\u5927\u5c0f\u76f8\u8fd1\n# --spare-devices=1 /dev/sdd1 \u6307\u5b9a\u4e86\u4e00\u4e2a\u7a7a\u95f2\u76d8\nmdadm --create --verbose /dev/md0 --level=mirror --raid-devices=2 /dev/sdb1 /dev/sdc1 --spare-devices=1 /dev/sdd1\n\n# RAID 4/5/6\n# \u9ed8\u8ba4\u5757\u5927\u5c0f 128k \u8bfb\u5199\u573a\u666f\u4e0d\u540c\uff0c\u5bf9\u6027\u80fd\u5f71\u54cd\u4e0d\u540c\nmdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1 --spare-devices=1 /dev/sde1\n\nmdadm --create --verbose /dev/md/main --level=6 --raid-devices=8 /dev/sd{a,b,c,d,e,f,g,h} --assume-clean\n\n# \u67e5\u770b\u91cd\u6784\u72b6\u6001\ncat /proc/mdstat\n# \u626b\u63cf\u751f\u6210\u914d\u7f6e\u6587\u4ef6\nmdadm --detail --scan >> /etc/mdadm/mdadm.conf\n\n# \u626b\u63cf\u73b0\u6709 raid \u914d\u7f6e\nmdadm --assemble --scan \n# \u626b\u63cf\u6307\u5b9a\u7684\nmdadm --scan --assemble --uuid=a26bf396:31389f83:0df1722d:f404fe4c\n\n# \u505c\u6b62\nmdadm --stop /dev/md0\n\n")),Object(i.b)("h2",{id:"raid-\u6587\u4ef6\u7cfb\u7edf"},"RAID \u6587\u4ef6\u7cfb\u7edf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8003\u91cf\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u5728\u7ebf\u6269\u7f29\u5bb9"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 stride \u548c stripe-width \u6765\u4f18\u5316\u6027\u80fd"),Object(i.b)("li",{parentName:"ul"},"RAID \u5757\u5927\u5c0f\u662f\u6027\u80fd\u5173\u952e"))),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a\u4e86\u652f\u6491\u7075\u6d3b\u6269\u7f29\u5bb9\u4f1a\u4f7f\u7528 LVM"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 FS \u8fd8\u9700\u8981\u8003\u8651\u662f\u5426\u652f\u6301\u6821\u9a8c"),Object(i.b)("li",{parentName:"ul"},"XFS \u662f\u76f8\u5bf9\u6bd4\u8f83\u597d\u7684\u9009\u62e9")))}s.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(r),b=n,u=m["".concat(d,".").concat(b)]||m[b]||p[b]||i;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,d[1]=c;for(var l=2;l<i;l++)d[l]=r[l];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);