(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||b;return r?n.a.createElement(O,i(i({ref:t},p),{},{components:r})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,l=new Array(b);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<b;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},618:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(8),b=(r(0),r(1129)),l={id:"kerberos",title:"Kerberos"},i={unversionedId:"service/auth/kerberos",id:"service/auth/kerberos",isDocsHomePage:!1,title:"Kerberos",description:"Tips",source:"@site/notes/service/auth/kerberos.md",slug:"/service/auth/kerberos",permalink:"/notes/service/auth/kerberos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/kerberos.md",version:"current",sidebar:"docs",previous:{title:"Kerberos FAQ",permalink:"/notes/service/auth/kerberos-faq"},next:{title:"Kratos",permalink:"/notes/service/auth/kratos"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[]},{value:"Keytab",id:"keytab",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"NFS",id:"nfs",children:[]},{value:"Manual",id:"manual",children:[]},{value:"\u8bcd\u6c47",id:"\u8bcd\u6c47",children:[{value:"KVNO - Key Version Number",id:"kvno---key-version-number",children:[]},{value:"GSSAPI - Generic Security Services Application Program Interface",id:"gssapi---generic-security-services-application-program-interface",children:[]}]}],p={toc:c};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/"},"Kerberos: The Network Authentication Protocol"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/"},"\u6587\u6863")),Object(b.b)("li",{parentName:"ul"},"network authentication protocol"),Object(b.b)("li",{parentName:"ul"},"\u5bc6\u7801\u4e0d\u4f1a\u88ab\u4f20\u8f93 - \u4f7f\u7528\u6709 TTL \u7684 Tickets"),Object(b.b)("li",{parentName:"ul"},"SSO \u4f53\u7cfb - \u5355\u4e2a Tickets \u53ef\u4ee5\u8bbf\u95ee\u8f83\u591a\u7684\u670d\u52a1"),Object(b.b)("li",{parentName:"ul"},"KDC \u4f5c\u4e3a\u53ef\u4fe1\u7684\u7b2c\u4e09\u65b9 - \u7ba1\u7406\u6240\u6709\u7684\u7528\u6237\u548c\u670d\u52a1"),Object(b.b)("li",{parentName:"ul"},"\u53cc\u5411\u9274\u6743\u7cfb\u7edf - \u7c7b\u4f3c mTLS"),Object(b.b)("li",{parentName:"ul"},"Windows \u73af\u5883\u4e0b\u5927\u91cf\u4f7f\u7528"))),Object(b.b)("li",{parentName:"ul"},"\u5e94\u7528",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Samba"),Object(b.b)("li",{parentName:"ul"},"SSH"),Object(b.b)("li",{parentName:"ul"},"NFS"),Object(b.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668 - Chrome, Firefox"))),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7aef\u53e3 88/udp/tcp \u548c 464/udp/tcp"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 SVR \u907f\u514d\u6307\u5b9a\u7aef\u53e3"),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"ArchLinux ",Object(b.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Kerberos"},"Kerberos")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/kfw-4.1/kfw-4.1/kfw-4.1-help/html/getting_started.htm"},"Getting Started"))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),Object(b.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"88"),Object(b.b)("td",{parentName:"tr",align:null},"Kerberos authentication system")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"464"),Object(b.b)("td",{parentName:"tr",align:null},"Kerberos Change/Set password")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"543"),Object(b.b)("td",{parentName:"tr",align:null},"klogin, Kerberos login")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"544"),Object(b.b)("td",{parentName:"tr",align:null},"kshell, Kerberos Remote shell")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"749"),Object(b.b)("td",{parentName:"tr",align:null},"Kerberos (protocol) administration","[10]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"750"),Object(b.b)("td",{parentName:"tr",align:null},"kerberos-iv, Kerberos version IV")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"751"),Object(b.b)("td",{parentName:"tr",align:null},"kerberos_master, Kerberos authentication")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"752"),Object(b.b)("td",{parentName:"tr",align:null},"passwd_server, Kerberos password (kpasswd) server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"754"),Object(b.b)("td",{parentName:"tr",align:null},"krb5_prop, Kerberos v5 slave propagation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"760"),Object(b.b)("td",{parentName:"tr",align:null},"krbupdate, Kerberos registration")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"1109"),Object(b.b)("td",{parentName:"tr",align:null},"Kerberos Post Office Protocol")))),Object(b.b)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ini"},"[logging]\n# \u9ed8\u8ba4\u914d\u7f6e\n[libdefaults]\ndns_lookup_realm = false\nticket_lifetime = 24h\nrenew_lifetime = 7d\nforwardable = true\nrdns = false\n# \u9ed8\u8ba4\u57df\ndefault_realm = EXAMPLE.COM\n\n# \u57df\u914d\u7f6e\n[realms]\nEXAMPLE.COM = {\n  kdc = example.com:60088\n  kpasswd_server = example.com:60464\n}\n\n# \u57df\u540d\u6620\u5c04\u57df\n[domain_realm]\n.example.com = EXAMPLE.COM\nexample.com = EXAMPLE.COM\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\nkinit wener\n# \u67e5\u770b\u7f13\u5b58\u6388\u6743\nklist\n# \u4fee\u6539\u5bc6\u7801\nkpasswd\n")),Object(b.b)("h2",{id:"keytab"},"Keytab"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5305\u542b principals \u548c encrypted keys",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u52a0\u5bc6\u5bc6\u94a5\u7531\u5bc6\u7801\u884d\u751f\u800c\u6210 = \u52a0\u5bc6\u7b97\u6cd5(\u5bc6\u7801)"))),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 keytab \u8bbf\u95ee\u65e0\u9700\u5bc6\u7801"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5bc6\u7801\u65f6\u9700\u8981\u4ece\u65b0\u751f\u6210"),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u811a\u672c\u81ea\u52a8\u6388\u6743"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"KRB5_KTNAME")," ",Object(b.b)("inlineCode",{parentName:"li"},"KRB5_CLIENT_KTNAME")," \u6307\u5b9a"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6307\u5b9a ",Object(b.b)("inlineCode",{parentName:"li"},"default_keytab_name")," ",Object(b.b)("inlineCode",{parentName:"li"},"default_client_keytab_name")),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/www/krb5-latest/doc/basic/keytab_def.html"},"keytab")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kb.iu.edu/d/aumh"},"Use a keytab"))))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 Keytab\nktutil\n# \u9700\u8981\u6ce8\u610f -k \u662f KVNO \u9700\u8981\u4e0e\u5b58\u50a8\u7684\u4e00\u81f4\naddent -password -p wener@EXAMPLE.COM -k 0 -e aes128-cts-hmac-sha1-96\nwkt wener.keytab\nquite\n\nkinit wener@EXAMPLE.COM -k -t wener.keytab\nklist -k wener.keytab\n# \u53ef\u67e5\u770b tab \u5185\u4fe1\u606f\nfile wener.keytab\n")),Object(b.b)("h2",{id:"ssh"},"SSH"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u63d0\u524d\u4e3a\u670d\u52a1\u7aef\u751f\u6210 keytab")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"/etc/ssh/sshd_config")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ini"},"# GSSAPI Options\nGSSAPIAuthentication yes\nGSSAPICleanupCredentials yes\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"/etc/ssh/ssh_config")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"Host *\n  GSSAPIAuthentication yes\n  GSSAPIDelegateCredentials yes\n")),Object(b.b)("h2",{id:"nfs"},"NFS"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"/etc/exports")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"sec=krb5 - \u53ea\u7528\u4e8e\u8ba4\u8bc1\uff0c\u4f20\u8f93\u4e0d\u8ba4\u8bc1\u4e0d\u52a0\u5bc6"),Object(b.b)("li",{parentName:"ul"},"sec=krb5i - \u7528\u4e8e\u8ba4\u8bc1\u548c\u5b8c\u6574\u6027\uff08integrity\uff09\u68c0\u6d4b\uff0c\u4f20\u8f93\u4e0d\u52a0\u5bc6"),Object(b.b)("li",{parentName:"ul"},"sec=krb5p - \u7528\u4e8e\u8ba4\u8bc1\u548c\u52a0\u5bc6")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"/srv/export *(rw,async,no_subtree_check,no_root_squash,sec=krb5p)\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u80fd\u9700\u8981 -t nfs4 -o sec=krb5p\n# \u53ef\u52a0 -vv \u8c03\u8bd5\nmount nfsserver:/srv/export /mnt/\n")),Object(b.b)("h2",{id:"manual"},"Manual"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/index.html"},"Kerberos Documentation"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://web.mit.edu/kerberos/krb5-latest/doc/admin/database.html"},"Database administration")))),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93\u7c7b\u578b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"db2 - Berkeley database"),Object(b.b)("li",{parentName:"ul"},"klmdb"),Object(b.b)("li",{parentName:"ul"},"kldap")))),Object(b.b)("h2",{id:"\u8bcd\u6c47"},"\u8bcd\u6c47"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"KDC - Key Distribut Center"),Object(b.b)("li",{parentName:"ul"},"SPNEGO - Simple and Protected GSSAPI Negotiation Mechanism"),Object(b.b)("li",{parentName:"ul"},"PAC"),Object(b.b)("li",{parentName:"ul"},"Server <- NTLM Auth -> KDC"),Object(b.b)("li",{parentName:"ul"},"Client <- Kerberos Auth -> KDC",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"-> AS_REQ"),Object(b.b)("li",{parentName:"ul"},"<- AS_REP - ticket"),Object(b.b)("li",{parentName:"ul"},"-> TGS_REQ -> Ticket Granting Server"),Object(b.b)("li",{parentName:"ul"},"<- TGS_REP - service ticket"),Object(b.b)("li",{parentName:"ul"},"--\x3e AP_REQ -> Server - service ticket"),Object(b.b)("li",{parentName:"ul"},"<-- AP_REP <-- Server - UDP, TCP/large ticket"))),Object(b.b)("li",{parentName:"ul"},"SPN - Service Principal Name",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"svc/name@realm - HTTP/",Object(b.b)("a",{parentName:"li",href:"http://www.mydomain.org@MYDOMAIN.ORG"},"www.mydomain.org@MYDOMAIN.ORG")))),Object(b.b)("li",{parentName:"ul"},"TGT - Ticket Granting Ticket"),Object(b.b)("li",{parentName:"ul"},"Delegation - constrained & proxy",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"client --\x3e server --\x3e db"),Object(b.b)("li",{parentName:"ul"},"tgt --\x3e delegate --\x3e db"))),Object(b.b)("li",{parentName:"ul"},"Protocol Transition",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"validate user"),Object(b.b)("li",{parentName:"ul"},"kerberos ticket request on user's behalf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"service for user to self"))),Object(b.b)("li",{parentName:"ul"},"perform constrained delegation"))),Object(b.b)("li",{parentName:"ul"},"APM - Access Policy Manager"),Object(b.b)("li",{parentName:"ul"},"BIG-IP APM"),Object(b.b)("li",{parentName:"ul"},"APM Session"),Object(b.b)("li",{parentName:"ul"},"VPE")),Object(b.b)("h3",{id:"kvno---key-version-number"},"KVNO - Key Version Number"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Kerberos Pricinple")),Object(b.b)("h3",{id:"gssapi---generic-security-services-application-program-interface"},"GSSAPI - Generic Security Services Application Program Interface"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4ee3\u7801\u5c42\u9762\u7684\u6807\u51c6\u63a5\u53e3"),Object(b.b)("li",{parentName:"ul"},"\u5e95\u5c42\u53ef\u4f7f\u7528\u4e0d\u540c Kerberos \u5b9e\u73b0"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface"},"https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface"))))}o.isMDXComponent=!0}}]);