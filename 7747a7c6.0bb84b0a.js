(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),i=(r(0),r(688)),l={id:"vmware",title:"VmWare"},c={unversionedId:"os/virt/vmware",id:"os/virt/vmware",isDocsHomePage:!1,title:"VmWare",description:"VmWare",source:"@site/notes/os/virt/vmware.md",slug:"/os/virt/vmware",permalink:"/notes/os/virt/vmware",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/vmware.md",version:"current",sidebar:"docs",previous:{title:"HyperV",permalink:"/notes/os/virt/hyperv"},next:{title:"\u5982\u4f55\u901a\u8fc7 Ansible \u6765\u7ba1\u7406 AlpineLinux \uff1f",permalink:"/notes/howto/ops/alpine-admin-ansible"}},o=[{value:"Tips",id:"tips",children:[]},{value:"ESXi vs vSphere vs vCenter",id:"esxi-vs-vsphere-vs-vcenter",children:[]}],b={rightToc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"vmware"},"VmWare"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u684c\u9762\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Workstation"),Object(i.b)("li",{parentName:"ul"},"Fusion"),Object(i.b)("li",{parentName:"ul"},"Workstation Player - \u514d\u8d39\u975e\u5546\u4e1a\u7248"))),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ESXi"))),Object(i.b)("li",{parentName:"ul"},"\u4e91\u4ea7\u54c1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"VMware vRealize Suite - \u6df7\u5408\u4e91\u7ba1\u7406\u5e73\u53f0"),Object(i.b)("li",{parentName:"ul"},"VMware Go - VMware vSphere Hypervisor Web \u5b89\u88c5\u5de5\u5177"),Object(i.b)("li",{parentName:"ul"},"VMware Cloud Foundation - \u79c1\u6709\u4e91\u5b89\u88c5\u90e8\u7f72 - SDDC \u7cfb\u7edf\u96c6\u6210"),Object(i.b)("li",{parentName:"ul"},"VMware Horizon View - virtual desktop infrastructure (VDI)"),Object(i.b)("li",{parentName:"ul"},"VMware vSphere",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"VMware Infrastructure 4 \u4e4b\u524d\u540d\u5b57"))))),Object(i.b)("li",{parentName:"ul"},"vCenter Server Appliance with an Embedded Platform Services Controller (PSC)")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# QCOW2 \u8f6c vmdk\n# flat \u683c\u5f0f\uff0c\u80fd\u5bfc\u5165\uff0c\u4f46\u662f\u662f\u5b8c\u6574\u5927\u5c0f\u955c\u50cf\uff0c\u4e0a\u4f20\u975e\u5e38\u6162\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n# https://kb.vmware.com/s/article/2144687\nqemu-img convert -f qcow2 -O vmdk -o subformat=streamOptimized alpine.qcow2 alpine.vmdk\nprintf '\\x03' | dd conv=notrunc of=alpine.vmdk bs=1 seek=$((0x4))\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"esxi-vs-vsphere-vs-vcenter"},"ESXi vs vSphere vs vCenter"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vSphere",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ea7\u54c1\u96c6/\u5e73\u53f0"),Object(i.b)("li",{parentName:"ul"},"\u5176\u4e2d Hypervisor \u4e3a ESXi"),Object(i.b)("li",{parentName:"ul"},"Web \u7ba1\u7406\u7aef\u64cd\u4f5c ESXi"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u865a\u62df\u6570\u636e\u4e2d\u5fc3\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u8fc1\u79fb"),Object(i.b)("li",{parentName:"ul"},"\u8fdc\u7a0b\u7ba1\u7406"))))),Object(i.b)("li",{parentName:"ul"},"vCenter",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u96c6\u4e2d\u7ba1\u7406 - \u7ba1\u7406 ESXi \u96c6\u7fa4"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u865a\u62df\u673a\u65b9\u5f0f\u5b89\u88c5"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5355\u70b9\u767b\u9646"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u5907\u8bbe\u65bd\u4ed3\u5e93"),Object(i.b)("li",{parentName:"ul"},"\u901a\u77e5\u544a\u8b66"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u673a\u4fe1\u606f"))))),Object(i.b)("li",{parentName:"ul"},"ESXi",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hypervisor"),Object(i.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5b89\u88c5\u5728\u7269\u7406\u673a\u4e0a"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u8fd0\u884c\u865a\u62df\u673a"),Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Xen \u7684 dom0"),Object(i.b)("li",{parentName:"ul"},"\u5355\u8282\u70b9")))))}p.isMDXComponent=!0},688:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);