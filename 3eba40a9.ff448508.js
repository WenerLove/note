(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(7),i=(a(0),a(734)),l={id:"virt",title:"\u865a\u62df\u5316"},b={unversionedId:"os/virt/virt",id:"os/virt/virt",isDocsHomePage:!1,title:"\u865a\u62df\u5316",description:"\u865a\u62df\u5316",source:"@site/notes/os/virt/README.md",slug:"/os/virt/virt",permalink:"/notes/os/virt/virt",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/README.md",version:"current",sidebar:"docs",previous:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"},next:{title:"QEMU \u6587\u6863",permalink:"/notes/os/virt/qemu-doc"}},c=[{value:"Tips",id:"tips",children:[]},{value:"/dev/sda vs /dev/vda",id:"devsda-vs-devvda",children:[]},{value:"OpenVZ vs KVM vs Xen",id:"openvz-vs-kvm-vs-xen",children:[]}],o={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u865a\u62df\u5316"},"\u865a\u62df\u5316"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_platform_virtualization_software"}),"Comparison of platform virtualization software")),Object(i.b)("li",{parentName:"ul"},"Virt Tools ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://planet.virt-tools.org/"}),"Planet"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Blogging about open source virtualization"),Object(i.b)("li",{parentName:"ul"},"News from QEMU, KVM, libvirt, libguestfs, virt-manager and related tools"))),Object(i.b)("li",{parentName:"ul"},"SMP?"),Object(i.b)("li",{parentName:"ul"},"HVM",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Hardware-assisted_virtualization"}),"Hardware-assisted virtualization")),Object(i.b)("li",{parentName:"ul"},"Intel VT-x"),Object(i.b)("li",{parentName:"ul"},"AMD-V"))),Object(i.b)("li",{parentName:"ul"},"Full virtualization"),Object(i.b)("li",{parentName:"ul"},"paravirtualization"),Object(i.b)("li",{parentName:"ul"},"RHEL ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/index"}),"CONFIGURING AND MANAGING VIRTUALIZATION"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f88\u597d\u5f88\u957f\u7684\u6587\u6863")))),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"devsda-vs-devvda"},"/dev/sda vs /dev/vda"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sda",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"IDE/SATA/SCSI \u7c7b\u578b\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"\u5b8c\u5168\u865a\u62df\u5316"))),Object(i.b)("li",{parentName:"ul"},"vda",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u534a\u865a\u62df\u5316 - virtio"),Object(i.b)("li",{parentName:"ul"},"\u6bd4 sda \u5feb"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://serverfault.com/a/803391/190601"}),"what is the difference between /dev/vda and /dev/sda"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# sda\nqemu-system-x86_64 -hda alpine.qcow2\n# vda\nqemu-system-x86_64 -drive file=alpine.qcow2,if=virtio\n")),Object(i.b)("h2",{id:"openvz-vs-kvm-vs-xen"},"OpenVZ vs KVM vs Xen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"KVM - Kernel-based",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Linux \u5185\u6838\u6a21\u5757 - \u4e3a\u7b2c\u4e09\u65b9\u5de5\u5177\uff08QEMU\uff09\u63d0\u4f9b\u865a\u62df\u5316\u652f\u6301"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 virtio \u63d0\u4f9b IO \u8bbe\u5907\u865a\u62df\u5316"))),Object(i.b)("li",{parentName:"ul"},"Xen",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Type 1 \u5168\u865a\u62df\u5316"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u865a\u62df\u5316\u573a\u666f\u53ef\u4ee5\u4f7f\u7528 Xen-PV - Paravirtualization"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u573a\u666f\u4f1a\u4f7f\u7528 Xen-HVM - Hardware Virtual Machine - \u4f7f\u7528 QEMU \u865a\u62df\u786c\u4ef6"),Object(i.b)("li",{parentName:"ul"},"dom0 \u4e0a\u8fd0\u884c domU"),Object(i.b)("li",{parentName:"ul"},"\u6709\u7ba1\u7406\u80fd\u529b - \u7c7b\u4f3c\u4e8e KVM+Libvirt \u6216 KVM+\u5176\u4ed6\u7ba1\u7406\u8f6f\u4ef6"))),Object(i.b)("li",{parentName:"ul"},"OpenVZ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u5bb9\u5668 - \u5171\u4eab\u5185\u6838"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u822c\u65e0\u6cd5\u4f7f\u7528 docker\u3001nftables\u3001wg \u7b49 - \u9700\u8981 host \u989d\u5916\u652f\u6301 - OpenVZ 7")))),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Red Hat \u6536\u8d2d\u4e86 Qumranet, KVM \u521b\u59cb\u516c\u53f8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Xen \u540e\u7684\u5546\u4e1a\u516c\u53f8"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Citrix"),Object(i.b)("li",{parentName:"ul"},"Oracle"),Object(i.b)("li",{parentName:"ul"},"AWS \u662f XEN \u4f46\u5728\u5411 KVM \u8fc1\u79fb"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"KVM \u540e\u7684\u5546\u4e1a\u516c\u53f8"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"IBM"),Object(i.b)("li",{parentName:"ul"},"Red Hat"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.reddit.com/r/sysadmin/comments/7cjpe8"}),"Why is the market moving away from xen to kvm?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.booleanworld.com/openvz-vs-kvm-vs-xen-virtualization-technologies-explained/"}),"OpenVZ vs KVM vs Xen"))))))}p.isMDXComponent=!0},734:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return a?n.a.createElement(O,b(b({ref:t},o),{},{components:a})):n.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<i;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);