(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{537:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(830)),b={id:"cni",title:"CNI"},i={unversionedId:"devops/container/cni",id:"devops/container/cni",isDocsHomePage:!1,title:"CNI",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/container/cni.md",slug:"/devops/container/cni",permalink:"/notes/devops/container/cni",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/cni.md",version:"current",sidebar:"docs",previous:{title:"Buildah",permalink:"/notes/devops/container/buildah"},next:{title:"Container Awesome",permalink:"/notes/devops/container/container-awesome"}},c=[{value:"spec",id:"spec",children:[]},{value:"bridge",id:"bridge",children:[]},{value:"Windows",id:"windows",children:[]},{value:"error while GETHNSNewtorkByName(mynet): hnsCall failed in Win32: The specified module could not be found. (0x7e)",id:"error-while-gethnsnewtorkbynamemynet-hnscall-failed-in-win32-the-specified-module-could-not-be-found-0x7e",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u62bd\u8c61\u5bb9\u5668\u7f51\u7edc\u63a5\u53e3\u89c4\u8303"),Object(l.b)("li",{parentName:"ul"},"cni-plugins \u63d0\u4f9b\u4e86\u5927\u91cf\u5b9e\u73b0"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/containernetworking/cni"},"containernetworking/cni")," - \u89c4\u8303"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/containernetworking/plugins"},"containernetworking/plugins")," - \u53c2\u8003\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=cni-plugins&arch=x86_64&repo=community"},"\u5305\u5185\u5bb9")))),Object(l.b)("li",{parentName:"ul"},"alpine \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84 ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/libexec/cni/")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7f51\u7edc\u914d\u7f6e\u76ee\u5f55 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/cni/net.d")),Object(l.b)("li",{parentName:"ul"},"CNI \u5305\u542b\u4e86\u542f\u52a8\u811a\u672c - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/containernetworking/cni/tree/master/scripts"},"cni/scripts"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c netns - ",Object(l.b)("inlineCode",{parentName:"li"},"ip netns")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"exec-plugins add|del CNI_CONTAINERID CNI_NETNS"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CNI_CONTAINERID - \u5bb9\u5668 ID",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u552f\u4e00\u6807\u793a\u76ee\u7684\uff0c\u53ef\u4ee5\u968f\u673a\u751f\u6210"),Object(l.b)("li",{parentName:"ul"},"docker \u53ef\u76f4\u63a5\u4f7f\u7528 \u5bb9\u5668 ID"),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"printf '%x%x%x%x' $RANDOM $RANDOM $RANDOM $RANDOM")))),Object(l.b)("li",{parentName:"ul"},"CNI_NETNS - \u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u8def\u5f84",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/proc/<pid>/ns/net"))))))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Main: \u7f51\u53e3\u521b\u5efa"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bridge"),Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6865\u63a5\uff0c\u6dfb\u52a0\u5bbf\u4e3b\u673a\u548c\u5bb9\u5668\u7f51\u7edc\u5230\u6865\u63a5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ipvlan"),Object(l.b)("td",{parentName:"tr",align:null},"\u6dfb\u52a0 ipvlan \u5230\u5bb9\u5668")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loopback"),Object(l.b)("td",{parentName:"tr",align:null},"ip li set lo1 up")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macvlan"),Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa macvlan \u7ed9\u5bb9\u5668\uff0c\u8f6c\u53d1 mac \u6d41\u91cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ptp"),Object(l.b)("td",{parentName:"tr",align:null},"veth \u5bf9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vlan"),Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa vlan")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"host-device"),Object(l.b)("td",{parentName:"tr",align:null},"\u900f\u4f20\u5df2\u5b58\u5728\u8bbe\u5907")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"win-bridge"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"win-overlay"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"IPAM: IP \u5730\u5740\u7533\u8bf7"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dhcp"),Object(l.b)("td",{parentName:"tr",align:null},"DHCP \u7533\u8bf7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"host-local"),Object(l.b)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u672c\u5730\u7533\u8bf7\u5230\u7684 IP")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"static"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u9759\u6001\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Meta: \u5176\u4ed6\u63d2\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"flannel"),Object(l.b)("td",{parentName:"tr",align:null},"\u57fa\u4e8e flannel \u751f\u6210\u7f51\u53e3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"tuning"),Object(l.b)("td",{parentName:"tr",align:null},"\u901a\u8fc7 sysctl \u4fee\u6539\u7f51\u53e3\u914d\u7f6e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"portmap"),Object(l.b)("td",{parentName:"tr",align:null},"\u57fa\u4e8e iptables \u7684\u7aef\u53e3\u6620\u5c04 - \u4e3b\u673a\u5730\u5740\u7aef\u53e3\u5230\u5bb9\u5668")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bandwidth"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u51fa\u5e26\u5bbd\u9650\u5236")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sbr"),Object(l.b)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u6765\u6e90\u7684\u8def\u7531")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"firewall"),Object(l.b)("td",{parentName:"tr",align:null},"\u57fa\u4e8e iptables \u6216 firewalld \u7684\u9632\u706b\u5899\u63a7\u5236")))),Object(l.b)("h2",{id:"spec"},"spec"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add,delete,version"),Object(l.b)("li",{parentName:"ul"},"stdin, stdout"),Object(l.b)("li",{parentName:"ul"},"CNI_ARGS, CAP_ARGS")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'cat <<CONF > bridge.conf\n{\n  "name": "mynet",\n  "type": "bridge",\n  "ipam": {\n    "type":"host-local",\n    "subnet": "10.10.1.0/24"\n  }\n}\nCONF\nip netns add ns1\n\nCNI_COMMAND=ADD CNI_CONTAINERID=ns1 CNI_NETNS=/var/run/netns/ns1 CNI_IFNAME=eth2 CNI_PATH="$PWD" \\\nbridge < bridge.conf\n')),Object(l.b)("h2",{id:"bridge"},"bridge"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "cniVersion": "0.3.1",\n  // \u7f51\u7edc\u540d\u5b57\n  "name": "mynet",\n  // \u7f51\u7edc\u7c7b\u578b - \u5bf9\u5e94 /usr/libexec/cni/\n  "type": "bridge",\n\n  // \u6865\u63a5\u540d\u5b57 - \u9ed8\u8ba4 cni0\n  "bridge": "cni0",\n  // \u8bbe\u7f6e\u7684 IP \u4f5c\u4e3a\u9ed8\u8ba4\u8def\u7531\n  "isDefaultGateway": false,\n  // \u8bbe\u5426\u8bbe\u7f6e\u65b0\u7684 IP \u5730\u5740\n  "forceAddress": false,\n  // \u662f\u5426\u914d\u7f6e masquerade\n  "ipMasq": false,\n  // MTU \u9ed8\u8ba4\u53d6\u51b3\u4e8e \u5185\u6838\n  "mtu": 0,\n  // hairpin \u6a21\u5f0f\n  "hairpinMode": false,\n  // IP \u5730\u5740\u7ba1\u7406 - L2 \u7f51\u7edc\n  "ipam": {\n      "type": "host-local",\n      "subnet": "10.10.0.0/16"\n  },\n  // promiscuous \u6a21\u5f0f\n  "promiscMode": false,\n  // \u662f\u5426\u8bbe\u7f6e VLAN tag\n  // "vlan":0\n}\n')),Object(l.b)("h2",{id:"windows"},"Windows"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"win-overlay"),Object(l.b)("li",{parentName:"ul"},"win-bridge"),Object(l.b)("li",{parentName:"ul"},"host-local"),Object(l.b)("li",{parentName:"ul"},"flannel")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'cat <<CONF > overlay.conf\n{\n    "name": "mynet",\n    "type": "win-overlay",\n    "ipMasq": true,\n    "endpointMacPrefix": "0E-2A",\n    "ipam": {\n        "type": "host-local",\n        "subnet": "10.10.0.0/16"\n    },\n  "loopbackDSR": true,\n  "capabilites": {\n      "dns": true\n  }\n}\nCONF\n\nCNI_COMMAND=ADD CNI_CONTAINERID=ns1 CNI_NETNS=/var/run/netns/ns1 CNI_IFNAME=eth2 CNI_PATH="$PWD" \\\n./win-overlay < overlay.conf\n')),Object(l.b)("h2",{id:"error-while-gethnsnewtorkbynamemynet-hnscall-failed-in-win32-the-specified-module-could-not-be-found-0x7e"},"error while GETHNSNewtorkByName(mynet): hnsCall failed in Win32: The specified module could not be found. (0x7e)"))}o.isMDXComponent=!0},830:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return N}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,N=u["".concat(b,".").concat(m)]||u[m]||d[m]||l;return n?r.a.createElement(N,i(i({ref:t},p),{},{components:n})):r.a.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);