(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?c.a.createElement(m,a(a({ref:t},l),{},{components:n})):c.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(8),o=(n(0),n(1129)),i={title:"tinc 1.0"},a={unversionedId:"service/network/tinc-1.0",id:"service/network/tinc-1.0",isDocsHomePage:!1,title:"tinc 1.0",description:"- \u53ea\u6709 tincd",source:"@site/notes/service/network/tinc-1.0.md",slug:"/service/network/tinc-1.0",permalink:"/notes/service/network/tinc-1.0",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/tinc-1.0.md",version:"current",sidebar:"docs",previous:{title:"Storage Awesome",permalink:"/notes/service/storage/storage-awesome"},next:{title:"Tinc \u914d\u7f6e",permalink:"/notes/service/network/tinc-conf"}},s=[{value:"tinc 1.0 vs tinc 1.1",id:"tinc-10-vs-tinc-11",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ea\u6709 tincd")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"NETNAME=netname\nNODE=NodeA\nmkdir -p /etc/tinc/$NETNAME/hosts\n# tinc.conf\ncat <<CONF > /etc/tinc/$NETNAME/tinc.conf\nName = $NODE\nMode = switch\n# ConnectTo = $NETANAME\nCONF\n\n# \u751f\u6210 key\ntincd -n $NETNAME -K\n\n\n# tinc-up\ncat <<SH > /etc/tinc/$NETNAME/tinc-up\nifconfig $INTERFACE 10.10.1.1 netmask 255.0.0.0\nSH\n\n# \u968f\u673a port\ncat <<CONF > /etc/tinc/$NETNAME/hosts/$NODE\nPort = 0\nCONF\n\n# \u6dfb\u52a0\u5176\u4ed6\u8282\u70b9\ncat <<CONF > /etc/tinc/$NETNAME/hosts/$NETNAME\n# Subnet = 10.10.0.0/24\nAddress = 4.5.6.7\n\n-----BEGIN RSA PUBLIC KEY-----\n...\n-----END RSA PUBLIC KEY-----\nCONF\n\ntincd -n $NETNAME -Dd 5\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config=DIR               Read configuration options from DIR.\n  -D, --no-detach                Don't fork and detach.\n  -d, --debug[=LEVEL]            Increase debug level or set it to LEVEL.\n  -k, --kill[=SIGNAL]            Attempt to kill a running tincd and exit.\n  -n, --net=NETNAME              Connect to net NETNAME.\n  -K, --generate-keys[=BITS]     Generate public/private RSA keypair.\n  -L, --mlock                    Lock tinc into main memory.\n      --logfile[=FILENAME]       Write log entries to a logfile.\n      --pidfile=FILENAME         Write PID to FILENAME.\n  -o, --option=[HOST.]KEY=VALUE  Set global/host configuration value.\n  -R, --chroot                   chroot to NET dir at startup.\n  -U, --user=USER                setuid to given USER at startup.\n      --help                     Display this help and exit.\n      --version                  Output version information and exit.\n")),Object(o.b)("h2",{id:"tinc-10-vs-tinc-11"},"tinc 1.0 vs tinc 1.1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1.0",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7a33\u5b9a"),Object(o.b)("li",{parentName:"ul"},"rsa"))),Object(o.b)("li",{parentName:"ul"},"1.1",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65b0\u7684\u5b9e\u9a8c\u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"tinc \u547d\u4ee4"),Object(o.b)("li",{parentName:"ul"},"use of a GCM cipher suite to reduce the cost of HMAC"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ECDSA \u6027\u80fd\u53ef\u80fd\u4e0b\u964d\u4e00\u534a"),Object(o.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 sptps_speed \u6d4b\u8bd5\u534f\u8bae\u541e\u5410\u6027\u80fd"),Object(o.b)("li",{parentName:"ul"},"Ed25519 \u8ba4\u8bc1"),Object(o.b)("li",{parentName:"ul"},"ChaCha20-Poly1305 \u52a0\u5bc6\u901a\u8baf"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 AES-GCM-256"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 IPv6"),Object(o.b)("li",{parentName:"ul"},"LAN \u8282\u70b9\u53d1\u73b0"),Object(o.b)("li",{parentName:"ul"},"Multiple routing modes")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# 1.1\ncd src\nmake sptps_speed\n./sptps_speed\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Intel Pentium G4560 (4) @ 3.500G")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Generating keys for 10 seconds:          22600.52 op/s\nEd25519 sign for 10 seconds:             22027.18 op/s\nEd25519 verify for 10 seconds:            8444.55 op/s\nECDH for 10 seconds:                      6231.71 op/s\nSPTPS/TCP authenticate for 10 seconds:    2923.57 op/s\nSPTPS/TCP transmit for 10 seconds:           2.14 Gbit/s\nSPTPS/UDP authenticate for 10 seconds:    2973.93 op/s\nSPTPS/UDP transmit for 10 seconds:           2.17 Gbit/s\n")))}p.isMDXComponent=!0}}]);