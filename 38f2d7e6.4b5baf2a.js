(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(y,c(c({ref:t},s),{},{components:n})):i.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(1107)),o={id:"grsecurity",title:"Grsecurity"},c={unversionedId:"os/linux/security/grsecurity",id:"os/linux/security/grsecurity",isDocsHomePage:!1,title:"Grsecurity",description:"https://grsecurity.net/",source:"@site/notes/os/linux/security/grsecurity.md",slug:"/os/linux/security/grsecurity",permalink:"/notes/os/linux/security/grsecurity",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/security/grsecurity.md",version:"current",sidebar:"docs",previous:{title:"musl",permalink:"/notes/os/linux/lib/musl"},next:{title:"expect",permalink:"/notes/os/linux/shell/expect"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://grsecurity.net/"},"https://grsecurity.net/")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u7ba1\u7406\u5de5\u5177"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikibooks.org/wiki/Grsecurity/The_Administration_Utility"},"Grsecurity/The Administration Utility")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u9644\u52a0\u5de5\u5177"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Grsecurity/Additional_Utilities"},"Grsecurity/Additional Utilities"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"paxctl"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Controlling PaX Flags"),Object(a.b)("li",{parentName:"ul"},"\u63a7\u5236\u53ef\u6267\u884c\u6587\u4ef6\u7684 PaX \u6807\u8bb0"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"pspax"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Displaying Program Capabilities")),Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Grsecurity/Application-specific_Settings"},"https://en.wikibooks.org/wiki/Grsecurity/Application-specific_Settings")))))),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grsecurity"},"https://en.wikipedia.org/wiki/Grsecurity")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/20303"},"https://github.com/moby/moby/issues/20303"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"grep -e PAX_MPROTECT= -e GRKERNSEC= /boot/config-hardened\nsysctl kernel.grsecurity.chroot_deny_chmod\n\ngrep -e GRKERNSEC_CHROOT /boot/config-hardened\n\n\n# https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/paxctl\napk add paxctl\n\n# https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/gradm\n# https://en.wikibooks.org/wiki/Grsecurity/The_Administration_Utility\n# gradm grsecurity RBAC administration and policy analysis utility\napk add gradm\n")),Object(a.b)("p",null,"sysctl -w kernel.pax.softmode=1\necho 'kernel.pax.softmode=1' >> /etc/sysctl.conf"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://wiki.gentoo.org/wiki/Hardened/PaX_Quickstart"},"https://wiki.gentoo.org/wiki/Hardened/PaX_Quickstart")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://hardenedlinux.github.io/system-security/2016/08/10/grsec-kernel-full-commentary.html"},"https://hardenedlinux.github.io/system-security/2016/08/10/grsec-kernel-full-commentary.html")),Object(a.b)("p",null,"use of CAP_SYS_ADMIN in chroot denied"),Object(a.b)("p",null,"sysctl -w kernel.grsecurity.chroot_caps=0\nsysctl -w kernel.grsecurity.chroot_deny_mount=0"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Grsecurity/Appendix/Grsecurity_and_PaX_Configuration_Options"},"https://en.wikibooks.org/wiki/Grsecurity/Appendix/Grsecurity_and_PaX_Configuration_Options")),Object(a.b)("p",null,"PAX_MPROTECT\nEnabling this option will prevent programs from"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"changing the executable status of memory pages that were\nnot originally created as executable,"),Object(a.b)("li",{parentName:"ul"},"making read-only executable pages writable again,"),Object(a.b)("li",{parentName:"ul"},"creating executable pages from anonymous memory,"),Object(a.b)("li",{parentName:"ul"},"making read-only-after-relocations (RELRO) data pages writable again.")),Object(a.b)("p",null,"You should say Y here to complete the protection provided by\nthe enforcement of non-executable pages."),Object(a.b)("p",null,"NOTE: you can use the 'chpax' or 'paxctl' utilities to control\nthis feature on a per file basis."),Object(a.b)("p",null,"PAX_SOFTMODE\nEnabling this option will allow you to run PaX in soft mode, that\nis, PaX features will not be enforced by default, only on executables\nmarked explicitly.  You must also enable PT_PAX_FLAGS or XATTR_PAX_FLAGS\nsupport as they are the only way to mark executables for soft mode use."),Object(a.b)("p",null,'Soft mode can be activated by using the "pax_softmode=1" kernel command\nline option on boot.  Furthermore you can control various PaX features\nat runtime via the entries in /proc/sys/kernel/pax.'))}p.isMDXComponent=!0}}]);