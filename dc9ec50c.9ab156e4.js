(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{493:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),l=(n(0),n(556)),c={id:"intro",title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6"},b={unversionedId:"ops/network/tool/intro",id:"ops/network/tool/intro",isDocsHomePage:!1,title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6",description:"Tools",source:"@site/contents/tricks/ops/network/tool/README.md",slug:"/ops/network/tool/intro",permalink:"/notes/ops/network/tool/intro",version:"current",sidebar:"docs",previous:{title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/network/private/vpn-faq"},next:{title:"Bonding",permalink:"/notes/ops/network/tool/bonding"}},i=[{value:"iproute2",id:"iproute2",children:[]},{value:"net-tools",id:"net-tools",children:[]},{value:"ethtool",id:"ethtool",children:[]},{value:"aria2c",id:"aria2c",children:[{value:"OpenSSL Tunnel",id:"openssl-tunnel",children:[]}]},{value:"curl",id:"curl",children:[]},{value:"wget",id:"wget",children:[]},{value:"httpie",id:"httpie",children:[]},{value:"kcptun",id:"kcptun",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"tools"},"Tools"),Object(l.b)("h2",{id:"iproute2"},"iproute2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Contents ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=v3.6&name=iproute2&arch=x86_64&repo=main"}),"iproute2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cyberciti.biz/tips/linux-investigate-sockets-network-connections.html"}),"ss cheatsheet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Display Linux TCP / UDP Network and Socket Information")))),Object(l.b)("h2",{id:"net-tools"},"net-tools"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://sourceforge.net/projects/net-tools/"}),"https://sourceforge.net/projects/net-tools/")),Object(l.b)("li",{parentName:"ul"},"\u5df2\u7ecf\u6bd4\u8f83\u8001\u4e86, \u4e0d\u63a8\u8350\u4f7f\u7528")),Object(l.b)("h2",{id:"ethtool"},"ethtool"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://linux.die.net/man/8/ethtool"}),"ethtool.8")),Object(l.b)("li",{parentName:"ul"},"query or control network driver and hardware settings")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ethtool eth0\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"Settings for eth0:\n    Supported ports: [ TP ]\n    Supported link modes:   10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Supported pause frame use: No\n    Supports auto-negotiation: Yes\n    Advertised link modes:  10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Advertised pause frame use: No\n    Advertised auto-negotiation: Yes\n    Speed: 100Mb/s\n    Duplex: Full\n    Port: Twisted Pair\n    PHYAD: 1\n    Transceiver: internal\n    Auto-negotiation: on\n    MDI-X: off\n    Supports Wake-on: g\n    Wake-on: d\n    Link detected: yes\n")),Object(l.b)("h2",{id:"aria2c"},"aria2c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://aria2.github.io/manual/en/html/aria2c.html"}),"https://aria2.github.io/manual/en/html/aria2c.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aria2/aria2"}),"https://github.com/aria2/aria2"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u6587\u4ef6\u4f5c\u4e3a\u4e0b\u8f7d\u5217\u8868\n# \u6700\u5927\u5e76\u53d1 16\n# \u9ed8\u8ba4\u7ee7\u7eed\u4e0b\u8f7d\n# \u5355\u4e2a\u670d\u52a1\u6700\u591a 16 \u4e2a\u94fe\u63a5\n# \u91cd\u8bd5\u6b21\u6570 0, \u5ffd\u7565 404\naria2c -i list.txt -j 16 -c -x 16 -m 0\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://aria2c.com/"}),"http://aria2c.com/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://aria2c.com/usage.html"}),"http://aria2c.com/usage.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ziahamza/webui-aria2"}),"https://github.com/ziahamza/webui-aria2")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mayswind/AriaNg"}),"https://github.com/mayswind/AriaNg"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"dir=.\ncontinue=true\nmax-connection-per-server=5\nmin-split-size=10M\n\ninput-file=aria2.session\nsave-session=aria2.session\n\nenable-rpc=true\nrpc-allow-origin-all=true\nrpc-listen-all=true\nrpc-listen-port=6800\n\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"touch aria2.session\naria2c --conf-path=$PWD/aria2.conf\n")),Object(l.b)("h3",{id:"openssl-tunnel"},"OpenSSL Tunnel"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.dest-unreach.org/socat/doc/socat-openssltunnel.html"}),"openssltunnel"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u751f\u6210\u670d\u52a1\u5668\u7aef\u7b7e\u540d\nFILENAME=server\nopenssl genrsa -out $FILENAME.key 1024\nopenssl req -new -key $FILENAME.key -x509 -days 3653 -out $FILENAME.crt -subj "/C=CN/ST=Wener/L=ShangHai/O=None/CN=hello"\ncat $FILENAME.key $FILENAME.crt >$FILENAME.pem\nchmod 600 $FILENAME.key $FILENAME.pem\n\n# \u751f\u6210\u5ba2\u6237\u7aef\u7b7e\u540d\nFILENAME=client\nopenssl genrsa -out $FILENAME.key 1024\nopenssl req -new -key $FILENAME.key -x509 -days 3653 -out $FILENAME.crt -subj "/C=CN/ST=Wener/L=ShangHai/O=None/CN=hello"\ncat $FILENAME.key $FILENAME.crt >$FILENAME.pem\nchmod 600 $FILENAME.key $FILENAME.pem\n\n# \u542f\u52a8\u670d\u52a1\u7aef\nsocat openssl-listen:4433,reuseaddr,cert=$PWD/server.pem,cafile=$PWD/client.crt echo\n\n# \u542f\u52a8\u5ba2\u6237\u7aef\nsocat stdio openssl-connect:localhost:4433,cert=$PWD/client.pem,cafile=$PWD/server.crt\n# \u5982\u679c\u51fa\u73b0\u5f02\u5e38 2016/12/15 17:49:50 socat[8259] E certificate is valid but its commonName does not match hostname\n# \u53ef\u4f7f\u7528 verify=0 \u5173\u95ed\u9a8c\u8bc1\n# \u6216\u8005\u6dfb\u52a0 commonname\nsocat stdio openssl-connect:localhost:4433,cert=$PWD/client.pem,cafile=$PWD/server.crt,commonname=hello\n\n\n# \u901a\u8fc7 SSL \u8f6c\u53d1 DNS\n# \u670d\u52a1\u7aef\u76d1\u542c 1053\nsocat openssl-listen:1053,fork,reuseaddr,cert=$PWD/server.pem,cafile=$PWD/client.crt UDP:8.8.8.8:53\n# \u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u7aef\u7684 1053\nsudo socat UDP-RECVFROM:53,fork,reuseaddr openssl-connect:SERVER:1053,cert=$PWD/client.pem,cafile=$PWD/server.crt\n')),Object(l.b)("h2",{id:"curl"},"curl"),Object(l.b)("h2",{id:"wget"},"wget"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gnu.org/software/wget/manual/wget.html"}),"GNU Wget Manual")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-e robots=off"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5ffd\u7565 robot.txt"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-np"),"/",Object(l.b)("inlineCode",{parentName:"li"},"--no-parent"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8bbf\u95ee\u4e0a\u7ea7"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-N"),"/",Object(l.b)("inlineCode",{parentName:"li"},"--timestamping"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u8bbf\u95ee\u66f4\u65b0\u7684"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-nc"),"/",Object(l.b)("inlineCode",{parentName:"li"},"--no-clobber"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4e0b\u8f7d\u5df2\u5b58\u5728\u5c06\u88ab\u8986\u76d6\u7684\u6587\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-q"),"/",Object(l.b)("inlineCode",{parentName:"li"},"--quiet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b89\u9759\u6a21\u5f0f")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u77ed\u9009\u9879"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u957f\u9009\u9879"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"2.5 \u4e0b\u8f7d\u9009\u9879")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--limit-rate=amount")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9650\u901f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"\u76ee\u5f55\u9009\u9879")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-P")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--directory-prefix")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b58\u50a8\u6587\u4ef6\u5230\u524d\u7f00")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-nH")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--no-host-directories")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e0d\u521b\u5efa\u4e3b\u673a\u524d\u7f00\u76ee\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-nd")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--no-directories")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e0d\u521b\u5efa\u9012\u5f52\u76ee\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"2.11 \u9012\u5f52\u4e0b\u8f7d\u9009\u9879")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-r")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--recursive")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9012\u5f52, \u9ed8\u8ba4\u6700\u5927\u6df1\u5ea6\u4e3a 5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-l depth")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--level=depth")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6307\u5b9a\u6700\u5927\u9012\u5f52\u6df1\u5ea6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"-m")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"--mirror")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u955c\u50cf, \u7b49\u540c\u4e8e ",Object(l.b)("inlineCode",{parentName:"td"},"-r -N -l inf --no-remove-listing"))))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget -rN --no-parent -e robots=off -P /some/where http://some.site\n# \u955c\u50cf\u7ad9\u70b9\nwget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://example.org\nwget -mkEpnp http://example.org\n")),Object(l.b)("h2",{id:"httpie"},"httpie"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://daniel.haxx.se/docs/curl-vs-httpie.html"}),"https://daniel.haxx.se/docs/curl-vs-httpie.html")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jakubroztocil/httpie"}),"https://github.com/jakubroztocil/httpie")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://curl2httpie.online/"}),"http://curl2httpie.online/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://httpie.org/"}),"https://httpie.org/"))),Object(l.b)("h2",{id:"kcptun"},"kcptun"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/xtaci/kcptun"}),"https://github.com/xtaci/kcptun")),Object(l.b)("li",{parentName:"ul"},"ssh client <---\x3e kcptun client <---\x3e kcptun server <----\x3e ssh server")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Alpine\ndocker run -d --name tmp xtaci/kcptun\ndocker cp tmp:/bin/client kcptun-client\ndocker cp tmp:/bin/server kcptun-server\ndocker rm -f tmp\n\n# App <-> Target Client(9003/tcp) <-> KCP Client <-> KCP Server(9002/udp) <-> Target Server(9001/tcp)\n# \u76ee\u6807 9001 \u76d1\u542c 9002\n./kcptun-server -key $KEY -t "127.0.0.1:9001" -l ":9002" -mode fast2\n# \u76ee\u6807 9002 \u76d1\u542c 9003\n./kcptun-client -key $KEY -r "127.0.0.1:9002" -l ":9003" -mode fast2\n')))}p.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,O=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(O,b(b({ref:t},o),{},{components:n})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);