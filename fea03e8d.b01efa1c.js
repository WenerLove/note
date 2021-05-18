(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{993:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return p})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(999)),p={title:"Port forward"},i={unversionedId:"ops/network/port-forward",id:"ops/network/port-forward",isDocsHomePage:!1,title:"Port forward",description:"Tips",source:"@site/notes/ops/network/port-forward.md",slug:"/ops/network/port-forward",permalink:"/notes/ops/network/port-forward",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/port-forward.md",version:"current",sidebar:"docs",previous:{title:"mDNS \u670d\u52a1\u5b9a\u4e49",permalink:"/notes/ops/network/mdns-service"},next:{title:"IP \u5730\u5740",permalink:"/notes/ops/network/internet/ip-address"}},c=[{value:"Tips",id:"tips",children:[]},{value:"DNAT",id:"dnat",children:[]},{value:"DNAT+SNAT",id:"dnatsnat",children:[]},{value:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1",id:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1",children:[]}],l={toc:c};function b(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6240\u6709\u7684\u8d1f\u8f7d\u5747\u8861\u90fd\u80fd\u5b9e\u73b0",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Nginx - TCP,UDP"),Object(o.b)("li",{parentName:"ul"},"HAProxy - TCP"),Object(o.b)("li",{parentName:"ul"},"Keepalived"))),Object(o.b)("li",{parentName:"ul"},"iptables - \u5185\u6838\u5c42\u5b9e\u73b0"),Object(o.b)("li",{parentName:"ul"},"SSH"),Object(o.b)("li",{parentName:"ul"},"socat"),Object(o.b)("li",{parentName:"ul"},"nc"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/samhocevar/rinetd"},"samhocevar/rinetd"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://manpages.debian.org/unstable/rinetd/rinetd.8.en.html"},"rinetd.8")))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-forward-ports-through-a-linux-gateway-with-iptables"},"How To Forward Ports through a Linux Gateway with Iptables"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"socat TCP4-LISTEN:80,fork TCP4:www.yourdomain.org:8080\n\n# \u542f\u7528\u7aef\u53e3\u8f6c\u53d1\necho 1 | sudo tee /proc/sys/net/ipv4/ip_forward\n\n# \u672c\u5730\n#   eth0 192.168.1.2\n#   testnet 10.10.1.1\n# \u76ee\u6807\n#   testnet 10.10.2.1\n# eth0:80 -> testnet 10.10.2.1\n\n# \u5141\u8bb8\u65b0\u7684\u94fe\u63a5 eth0:80 -> testnet\niptables -A FORWARD -i eth0 -o testnet -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT\n# \u5141\u8bb8\u94fe\u63a5\u901a\u4fe1 eth0 -> testnet \u548c testnet -> eth0\niptables -A FORWARD -i eth0 -o testnet -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\niptables -A FORWARD -i testnet -o eth0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\n\n# \u9ed8\u8ba4\u62d2\u7edd\niptables -P FORWARD DROP\n\n\n# \u4ece\u5916\u90e8\u53ef\u4ee5\u901a\u8fc7\uff0c\u4f46\u662f\u672c\u5730\u662f\u4e0d\u53ef\u4ee5\u7684\ncurl 192.168.1.2\n")),Object(o.b)("h2",{id:"dnat"},"DNAT"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4e0d\u540c\u7f51\u53e3\u8f6c\u53d1\u9700\u8981\u63a7\u5236\u597d SNAT \u5730\u5740")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u5141\u8bb8\u8f6c\u53d1 - \u5b9e\u9645\u4f7f\u7528\u65f6\u5efa\u8bae\u8fdb\u884c\u66f4\u7cbe\u7ec6\u5316\u63a7\u5236 - \u9632\u706b\u5899\niptables -A FORWARD -j ACCEPT\n\n# DNAT eth0:80 -> 10.10.2.1\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 10.10.2.1\n# SNAT eth0:80 -> 10.10.2.1 from 10.10.1.1\niptables -t nat -A POSTROUTING -o eth0 -p tcp --dport 80 -d 10.10.2.1 -j SNAT --to-source 10.10.1.1\n\n# \u53ef\u4ee5\u4e00\u4e2a\u7f51\u53e3\u914d\u7f6e\u4e00\u4e2a SNAT - \u6240\u6709\u51fa\u53bb\u7684\u90fd\u662f\u76f8\u540c\u7684 IP\niptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 10.10.1.1\n\n# \u5982\u679c\u662f\u52a8\u6001 IP \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 MASQUERADE\niptables -t nat -A POSTROUTING -j MASQUERADE\n")),Object(o.b)("h2",{id:"dnatsnat"},"DNAT+SNAT"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GUEST",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"192.168.1.3/24"))),Object(o.b)("li",{parentName:"ul"},"HOST",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"eth0 192.168.1.2/24"),Object(o.b)("li",{parentName:"ul"},"testnet 10.10.1.1"))),Object(o.b)("li",{parentName:"ul"},"TARGET",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"testnet 10.10.2.1")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u51c6\u5907\necho 1 > /proc/sys/net/ipv4/ip_forward\niptables -A FORWARD -j ACCEPT\n\n# \u8c03\u8bd5\ntcpdump -ni any 'port 2222 or (host 10.10.2.1 and port 22)'\n\n# DNAT\n# 192.168.1.3=>192.168.1.2:2222 -> 192.168.1.2=>10.10.2.1:22\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22\n# \u4e5f\u53ef\u4ee5\n# iptables -t nat -A PREROUTING -d 192.168.1.2 -p tcp -m tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22\n\n# SNAT\n# 192.168.1.2=>10.10.2.1:22 -> 10.10.1.1=>10.10.2.1:22\niptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j SNAT --to-source 10.10.1.1\n# \u4e5f\u53ef\u4ee5\n# iptables -t nat -A POSTROUTING -o testnet -j SNAT --to-source 10.10.1.1\n")),Object(o.b)("p",null,"\u4ee5\u4e0a\u89c4\u5219\u8f6c\u6362\u4e3a nftables"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# DNAT+SNAT\ntable ip nat {\n    chain PREROUTING {\n        type nat hook prerouting priority dstnat; policy accept;\n        iifname "eth0" meta l4proto tcp # xt_tcp counter packets 1 bytes 64 # xt_DNAT\n    }\n\n    chain INPUT {\n        type nat hook input priority 100; policy accept;\n    }\n\n    chain POSTROUTING {\n        type nat hook postrouting priority srcnat; policy accept;\n        oifname "testnet" counter packets 2 bytes 124 # xt_SNAT\n    }\n\n    chain OUTPUT {\n        type nat hook output priority -100; policy accept;\n    }\n}\n# \u5141\u8bb8\u8f6c\u53d1\ntable ip filter {\n    chain INPUT {\n        type filter hook input priority filter; policy accept;\n    }\n\n    chain FORWARD {\n        type filter hook forward priority filter; policy accept;\n        counter packets 9 bytes 509 accept\n    }\n\n    chain OUTPUT {\n        type filter hook output priority filter; policy accept;\n    }\n}\n')),Object(o.b)("h2",{id:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1"},"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# 8001 -> 80\niptables -t nat -A PREROUTING -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80\niptables -t nat -A OUTPUT -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80\n")))}b.isMDXComponent=!0},999:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),b=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=b(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},O=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),s=b(n),O=r,d=s["".concat(p,".").concat(O)]||s[O]||u[O]||o;return n?a.a.createElement(d,i(i({ref:e},l),{},{components:n})):a.a.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=O;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);