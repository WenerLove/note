(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{566:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),p=(n(0),n(852)),c={title:"tcpdump"},i={unversionedId:"os/linux/network/tcpdump",id:"os/linux/network/tcpdump",isDocsHomePage:!1,title:"tcpdump",description:"Tips",source:"@site/notes/os/linux/network/tcpdump.md",slug:"/os/linux/network/tcpdump",permalink:"/notes/os/linux/network/tcpdump",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/tcpdump.md",version:"current",sidebar:"docs",previous:{title:"socat",permalink:"/notes/os/linux/network/socat"},next:{title:"mtd",permalink:"/notes/os/linux/dev/mtd"}},a=[{value:"Tips",id:"tips",children:[]}],u={toc:a};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"tips"},"Tips"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://www.tcpdump.org/manpages/tcpdump.1.html"},"tcpdump.1")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://danielmiessler.com/study/tcpdump/"},"A tcpdump Tutorial with Examples")))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"http://linuxwiki.github.io/NetTools/tcpdump.html"},"http://linuxwiki.github.io/NetTools/tcpdump.html")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/linuxwiki/SourceWiki"},"https://github.com/linuxwiki/SourceWiki"))),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"# \u76d1\u542c ICMP\ntcpdump -nni eth0 icmp\n# NAT \u5305\ntcpdump -qnn\n# \u5e7f\u64ad\u5305 - DHCP, ARP\ntcpdump -n -i mynet broadcast\n# DHCP - \u5339\u914d Client MAC\ntcpdump -i br0 -vvv -s 1500 '((port 67 or port 68) and (udp[38:4] = 0x3e0ccf08))'\n# DHCP - DISCOVER, REQUEST, INFORM\ntcpdump -i br0 -vvv -s 1500 '((port 67 or port 68) and (udp[8:1] = 0x1))'\n\ntcpdump port 80 -w capture_file\ntcpdump -r capture_file\n\ntcpdump -i any host 1.1.1.1\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-shell"},"# \u534f\u8bae\n# /etc/protocols\nicmp\nip6\n\n# \u7aef\u53e3\nport 443\nportrange 21-23\n\n# \u4e3b\u673a\n# to or from\nhost 1.1.1.1\n# to or from\nnet 1.2.3.0/24\n\n# from\nsrc 1.1.1.1\n# to\ndst 1.0.0.1\n\n# \u6765\u6e90\u9650\u5b9a\nsrc port 1025\nsrc net 192.168.0.0/16\n\n# \u5305\u5927\u5c0f\nless 32\ngreater 64\n<= 128\n")))}l.isMDXComponent=!0},852:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||p;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,c=new Array(p);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<p;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);