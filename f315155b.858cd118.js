(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1059:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1107)),l={id:"windows",title:"Windows"},c={unversionedId:"os/windows/windows",id:"os/windows/windows",isDocsHomePage:!1,title:"Windows",description:"Tips",source:"@site/notes/os/windows/README.md",slug:"/os/windows/windows",permalink:"/notes/os/windows/windows",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/README.md",version:"current",sidebar:"docs",previous:{title:"macOS FAQ",permalink:"/notes/os/darwin/macos-faq"},next:{title:"Nano Server",permalink:"/notes/os/windows/nano-server"}},o=[{value:"Tips",id:"tips",children:[]},{value:"\u7248\u672c",id:"\u7248\u672c",children:[]},{value:"\u6fc0\u6d3b",id:"\u6fc0\u6d3b",children:[{value:"KMS",id:"kms",children:[]}]}],b={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e0b\u8f7d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://msdn.itellyou.cn/"},"itellyou")))),Object(i.b)("li",{parentName:"ul"},"\u5de5\u5177",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CPUID ",Object(i.b)("a",{parentName:"li",href:"http://www.cpuid.com/softwares/cpu-z.html"},"\u4e0b\u8f7d"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u786c\u4ef6\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u538b\u6d4b"))),Object(i.b)("li",{parentName:"ul"},"HWMonitor ",Object(i.b)("a",{parentName:"li",href:"http://www.cpuid.com/softwares/hwmonitor.html"},"\u4e0b\u8f7d"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u786c\u4ef6\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u6e29\u5ea6"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://technet.microsoft.com/en-us/sysinternals/bb545021.aspx"},"sysinternals")," ",Object(i.b)("a",{parentName:"li",href:"https://technet.microsoft.com/en-us/sysinternals/bb842062"},"\u4e0b\u8f7d"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ba1\u7406\u8f85\u52a9\u5de5\u5177"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rufus.akeo.ie/"},"rufus")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/pbatard/rufus"},"Github"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5236\u4f5c\u542f\u52a8\u76d8"),Object(i.b)("li",{parentName:"ul"},"\u901f\u5ea6\u5f88\u5feb"),Object(i.b)("li",{parentName:"ul"},"\u53ea\u80fd\u5728 Windows \u4e0b\u4f7f\u7528"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://etcher.io/"},"etcher"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5236\u4f5c\u542f\u52a8\u76d8"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8de8\u5e73\u53f0\u4f7f\u7528"))))),Object(i.b)("li",{parentName:"ul"},"\u8f93\u5165\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dl.google.com/pinyin/v2/GooglePinyinInstaller.exe"},"http://dl.google.com/pinyin/v2/GooglePinyinInstaller.exe")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://dl.google.com/pinyin/v1/GooglePinyinInstaller.exe"},"http://dl.google.com/pinyin/v1/GooglePinyinInstaller.exe")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet"},"Windows lifecycle fact sheet"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Windows 7, service pack 1*\tJanuary 13, 2015\tJanuary 14, 2020 "),Object(i.b)("li",{parentName:"ul"},"Windows 8.1\tJanuary 9, 2018\tJanuary 10, 2023")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u83b7\u53d6 bios \u4e32\u53f7\nwmic bios get serialnumber\n# \u901a\u8fc7 vbox \u4fee\u6539\u4e32\u53f7\nVBoxManage setextradata "VM name" "VBoxInternal/Devices/pcbios/0/Config/DmiSystemSerial" "System Serial"\n# \u5982\u679c\u4e32\u53f7\u4e3a\u7eaf\u6570\u5b57,\u5e94\u8be5\u518d\u7b7e\u540d\u52a0 string\nVBoxManage setextradata "VM name" "VBoxInternal/Devices/pcbios/0/Config/DmiSystemSerial" "string:1234"\n\n# \u83b7\u53d6\u6a21\u578b\u540d\nwmic csproduct get name\n# \u663e\u793a\u7f51\u5361 GUID\ngwmi win32_networkadapter -Property guid\nGet-WmiObject Win32_NetworkAdapter -Filter "netenabled = true" | Select Guid\n')),Object(i.b)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Windows_Server_2016"},"Windows Server 2016"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"NanoServer"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u5bb9\u5668"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u65e0\u754c\u9762\u670d\u52a1"),Object(i.b)("li",{parentName:"ul"},"IIS 10 \u652f\u6301HTTP/2"),Object(i.b)("li",{parentName:"ul"},"Windows PowerShell 5.0"),Object(i.b)("li",{parentName:"ul"},"Hyper-V \u652f\u6301\u7f51\u7edc\u865a\u62df\u5316")))),Object(i.b)("h2",{id:"\u6fc0\u6d3b"},"\u6fc0\u6d3b"),Object(i.b)("h3",{id:"kms"},"KMS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/myanaloglife/py-kms"},"py-kms")," Python \u5b9e\u73b0\u7684 KMS \u670d\u52a1\u5668",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"py-kms \u6709\u5f88\u591a fork, \u66f4\u65b0\u7248\u672c\u7684\u9700\u8981\u627e fork \u7684\u5206\u652f,\u6211\u7684 fork ",Object(i.b)("a",{parentName:"li",href:"https://github.com/wenerme/py-kms"},"wenerme/py-kms")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Wind4/vlmcsd"},"vlmcsd")," \u662f C \u7684\u5b9e\u73b0,\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Wind4/vlmcsd/tree/master/floppy"},"\u8f6f\u76d8")," \u542f\u52a8",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 vbox \u542f\u52a8 KMS \u865a\u62df\u673a,\u7f51\u7edc\u4f7f\u7528\u6865\u63a5,\u786e\u4fdd\u7f51\u7edc\u4e92\u901a"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 docker \u542f\u52a8 ",Object(i.b)("inlineCode",{parentName:"li"},"docker run -d --name vlmcsd --net host muicoder/vlmcsd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rawgit.com/Wind4/vlmcsd/master/man/vlmcsd.7.html"},"vlmcsd.7"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u5f88\u591a\u5e8f\u5217\u53f7"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rawgit.com/Wind4/vlmcsd/master/man/vlmcsd.8.html"},"vlmcsd.8")),Object(i.b)("li",{parentName:"ul"},"\u7aef\u53e3\u4e3a 1688, \u53ef\u4f7f\u7528 -P \u63a7\u5236")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"##########\n# Windows\n##########\n# Software Licensing Management Tool. Windows Activation and Key Management Service (KMS)\n# http://ss64.com/nt/slmgr.html\n# \u5148\u8bbe\u7f6e\u4e00\u4e2a\u79d8\u94a5\nslmgr /ipk CB7KF-BWN84-R7R2Y-793K2-8XDDG\n# \u4fee\u6539\u4e3a\u81ea\u5df1\u7684 KMS \u670d\u52a1\u5668, \u9ed8\u8ba4\u7aef\u53e3\u4e3a 1688\nslmgr /skms 192.168.1.2\n# \u6fc0\u6d3b\nslmgr /ato\n# \u67e5\u770b\u7cfb\u7edf\nslmgr /xpr\n# \u67e5\u770b\u6fc0\u6d3b\u72b6\u6001\nslmgr /dli\n\n##########\n# Office\n##########\n# \u5207\u6362\u5230\u5b89\u88c5\u76ee\u5f55\ncd C:\\Program Files\\Microsoft Office\\Office14\\\n# \u4fee\u6539\u4e3a\u81ea\u5df1\u7684 KMS \u5730\u5740\ncscript ospp.vbs /sethst:192.168.1.2\n# \u6fc0\u6d3b\ncscript ospp.vbs /act\n# \u67e5\u770b\u6fc0\u6d3b\u72b6\u6001\ncscript osbb.vbs /dstatus\n")))}s.isMDXComponent=!0},1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);