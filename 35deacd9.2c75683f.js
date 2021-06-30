(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1107:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,o(o({ref:n},c),{},{components:t})):r.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},289:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(1107)),s={id:"dev",title:"\u5f00\u53d1"},o={unversionedId:"voip/asterisk/dev",id:"voip/asterisk/dev",isDocsHomePage:!1,title:"\u5f00\u53d1",description:"Asterisk \u5f00\u53d1",source:"@site/notes/voip/asterisk/asterisk-dev.md",slug:"/voip/asterisk/dev",permalink:"/notes/voip/asterisk/dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-dev.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248",permalink:"/notes/voip/asterisk/the-definitive-guide-4th"},next:{title:"\u62e8\u53f7\u8ba1\u5212",permalink:"/notes/voip/asterisk/asterisk-dialplain"}},l=[{value:"Tips",id:"tips",children:[]},{value:"Tricks",id:"tricks",children:[]},{value:"Addon",id:"addon",children:[]},{value:"Experiment",id:"experiment",children:[]},{value:"OS",id:"os",children:[{value:"Centos",id:"centos",children:[]}]},{value:"\u5f55\u97f3\u6587\u4ef6\u5f52\u6863",id:"\u5f55\u97f3\u6587\u4ef6\u5f52\u6863",children:[]},{value:"\u81ea\u52a8\u62e8\u53f7\u6587\u4ef6",id:"\u81ea\u52a8\u62e8\u53f7\u6587\u4ef6",children:[]},{value:"\u6027\u80fd\u8c03\u4f18",id:"\u6027\u80fd\u8c03\u4f18",children:[]},{value:"debian",id:"debian",children:[]},{value:"Ops",id:"ops",children:[]}],c={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"asterisk-\u5f00\u53d1"},"Asterisk \u5f00\u53d1"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/ttacon/libphonenumber"},"https://github.com/ttacon/libphonenumber"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+Architecture%2C+The+Big+Picture"},"Asterisk Architecture, The Big Picture"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://wiki.asterisk.org/wiki/display/AST/Interfaces"},"Interface")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Asterisk Call Files",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u7eaf\u6587\u4ef6\u7684\u8c03\u7528, \u5c06\u8c03\u7528\u6587\u4ef6\u653e\u5230 spool \u5373\u53ef"))),Object(i.b)("li",{parentName:"ul"},"Asterisk Gateway Interface",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"pipes, stdin, stdout"),Object(i.b)("li",{parentName:"ul"},"Asterisk dialplan \u4e0e \u5916\u90e8\u7a0b\u5e8f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"main/manager.c"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6e90\u6587\u4ef6\u4e2d\u5305\u542b\u4e86\u4e8b\u4ef6\u548c\u64cd\u4f5c\u7684\u5b9a\u4e49"),Object(i.b)("li",{parentName:"ul"},"\u90e8\u5206\u5176\u4ed6\u7684\u64cd\u4f5c\u548c\u4e8b\u4ef6\u5728\u5176\u4ed6\u6e90\u6587\u4ef6\u4e2d, \u4f46\u5b9a\u4e49\u7684\u65b9\u5f0f\u662f\u4e00\u6837\u7684"))))),Object(i.b)("li",{parentName:"ul"},"Asterisk Management Interface",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ba1\u7406\u7c7b\u578b\u7684\u529f\u80fd, PBX, \u547c\u53eb\u53d1\u8d77, \u68c0\u6d4b\u90ae\u7bb1\u72b6\u6001, \u901a\u9053\u76d1\u63a7\u548c\u961f\u5217, \u547d\u4ee4\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"CS \u6a21\u5f0f, TCP"))),Object(i.b)("li",{parentName:"ul"},"Asterisk REST Interface",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5f02\u6b65\u63a5\u53e3, \u66b4\u9732\u5185\u90e8\u539f\u59cb\u5bf9\u8c61, \u901a\u9053, \u6865\u63a5, \u7ec8\u7aef, \u5a92\u4f53\u7b49."),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 WebSocket \u4f20\u8f93 JSON \u4e8b\u4ef6"))),Object(i.b)("li",{parentName:"ul"},"Calendaring",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u591a\u5404\u79cd\u6807\u51c6\u7684\u65e5\u5386\u534f\u8bae\u8fdb\u884c\u8bfb\u5199"),Object(i.b)("li",{parentName:"ul"},"\u62e8\u53f7\u8ba1\u5212\u53ef\u5229\u7528\u65e5\u5386\u4e8b\u4ef6\u4fe1\u606f"))),Object(i.b)("li",{parentName:"ul"},"Database Connectivity",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ODBC, MySQL, PostgreSQL"))),Object(i.b)("li",{parentName:"ul"},"Distributed Device State",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7528\u4e8e\u5728\u591a\u4e2a\u5b9e\u4f8b\u4e4b\u95f4\u72b6\u6001\u5206\u53d1\u7684\u673a\u5236."))),Object(i.b)("li",{parentName:"ul"},"SNMP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u672c\u7684 SNMP \u652f\u6301"),Object(i.b)("li",{parentName:"ul"},"\u6d3b\u52a8\u76d1\u63a7"))),Object(i.b)("li",{parentName:"ul"},"Speech Recognition API"),Object(i.b)("li",{parentName:"ul"},"StatsD",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u62e8\u53f7\u8ba1\u5212\u4e2d\u7684\u5e94\u7528"),Object(i.b)("li",{parentName:"ul"},"\u7528\u4e8e\u53d1\u9001\u7edf\u8ba1\u4fe1\u606f"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Doxygen ",Object(i.b)("a",{parentName:"p",href:"http://doxygen.asterisk.org/"},"\u4ee3\u7801\u6587\u6863"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NOTES"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6784\u5efa\u65f6\u751f\u6210\u7684 xml \u53ef\u4ee5\u7528\u4e8e\u751f\u6210\u4ee3\u7801"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://www.corosync.org/"},"corosync")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u8bbe\u5907\u72b6\u6001\u540c\u6b65")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# EXTERNALS_CACHE_DIR \u53ef\u4ee5\u6307\u5b9a\u4e0b\u8f7d\u6587\u4ef6\u7684\u7f13\u5b58\u76ee\u5f55\n# NOTE: \u7f16\u8bd1\u7684\u7248\u672c\u7531\u4e8e pjproject \u7684 md5 \u68c0\u6d4b\u6784\u5efa\u4ee3\u7801\u6709\u95ee\u9898, \u9700\u8981\u5c06\u6700\u7ec8\u7684\u5224\u65ad\u8c03\u6574\u4e0b\u7ed5\u8fc7\nEXTERNALS_CACHE_DIR=$PWD/cache ./configure\n\n# \u751f\u6210\u6587\u6863\nmake doc/core-en_US.xml\n# \u4f1a\u4f7f\u7528 build_tools/post_process_documentation.py \u8fdb\u884c\u540e\u5904\u7406\n# \u5408\u5e76 managerEventInstances managerEvent \u8282\u70b9\u53c2\u6570\nmake doc/full-en_US.xml\n\n# NOTE \u751f\u6210\u6587\u6863\u4e2d\u7684 para/example \u6807\u7b7e\u5e94\u8be5\u4e3a CDATA, \u4f46\u662f\u751f\u6210\u7684 xml \u4e2d\u6ca1\u6709 <![CDATA[ ]]>, \u9700\u8981\u624b\u52a8\u66ff\u6362, \u5426\u5219\u90e8\u5206\u89e3\u6790\u5668\u4f1a\u89e3\u6790\u5931\u8d25\n")),Object(i.b)("h2",{id:"tricks"},"Tricks"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.voip-info.org/asterisk-tips-and-tricks"},"https://www.voip-info.org/asterisk-tips-and-tricks")),Object(i.b)("h2",{id:"addon"},"Addon"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/zaf/Asterisk-eSpeak"},"https://github.com/zaf/Asterisk-eSpeak")),Object(i.b)("h2",{id:"experiment"},"Experiment"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b9e\u9a8c\u6570\u636e\u76ee\u5f55\nmkdir -p ~/data/asterisk\n# \u542f\u52a8\ndocker run --rm -it --name ast wener/asterisk:edge asterisk -cvvvv\n# \u62f7\u8d1d\u51fa\u914d\u7f6e\u6587\u4ef6\ndocker cp ast:/etc/asterisk/ ~/data/asterisk/etc/\n# \u505c\u6b62\u4e4b\u524d\u7684, \u4f7f\u7528\u4e3b\u673a\u4e0a\u7684\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\ndocker run --rm -it --net=host -v $HOME/data/asterisk/etc/:/etc/asterisk --name ast wener/asterisk:edge asterisk -cvvvv\n# \u53ef\u4ee5\u4ece\u53e6\u5916\u4e00\u4e2a\u7ec8\u7aef\u6267\u884c\u547d\u4ee4\ndocker exec ast asterisk -rx 'sip reload'\n\n# \u5728 Mac \u4e0b\u53ef\u80fd\u5bfc\u81f4\u6587\u4ef6\u4e0d\u540c\u6b65, \u90a3\u53ea\u80fd\u5c1d\u8bd5\u522b\u7684\u529e\u6cd5\u4e86, \u4f8b\u5982\nrsync -avz -e ssh $HOME/data/asterisk/ root@192.168.1.1:/data/asterisk/\n\n#\ndocker run -d --restart=always \\\n   -e POSTGRES_USER=ast -e POSTGRES_PASSWORD=ast -p 5432:5432 -v /data/pg/data:/var/lib/postgresql/data --name ast-pg postgres:alpine\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"sip.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"; \u6253\u5f00 tcp \u548c ws\n[general]\ncontext=public\nallowoverlap=no\nudpbindaddr=0.0.0.0\nrtpbindaddr=0.0.0.0\ntcpenable=yes\ntcpbindaddr=0.0.0.0\nwebsocket_enabled = true\ntransport=tcp,ws,udp\nsrvlookup=yes\n\n; \u6dfb\u52a0\u6d4b\u8bd5\u7528\u6237\n[codecs](!)\nallow=!all,ilbc,g729,gsm,g723,ulaw\n\n[base](!,codecs)\ntype=friend\nsecret=0000\n\n[9001](base)\n[9002](base)\n[9003](base)\n[9004](base)\n[9005](base)\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"pjsip_wizard.conf")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"[user-template](!)\ntype = wizard\naccepts_registrations = yes\naccepts_auth = yes\nendpoint/context = default\nendpoint/allow = !all,ulaw,gsm,g722\naor/max_contacts=5\n\n[9001](user-template)\ninbound_auth/username = 9001\ninbound_auth/password = 9001\n\n[9002](user-template)\ninbound_auth/username = 9002\ninbound_auth/password = 9002\n")),Object(i.b)("h2",{id:"os"},"OS"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u57fa\u7840\napk add openssh-client openssl curl busybox file nano grep\n\napk add shadow bash\nchsh root -s /bin/bash\n\n# \u6269\u5c55\napk add tmux htop docker rsync neofetch@testing\napk add sox alsa-utils\n\n# \u6838\u5fc3\napk add asterisk\napk add asterisk-{curl,pgsql,sounds-en,sounds-moh,srtp,chan-dongle,curl,alsa}\n# apk add asterisk-sample-config\n\n# \u90e8\u5206\u5de5\u5177\u4f9d\u8d56 perl\napk add asterisk-dahdi dahdi-linux-hardened perl\napk add pciutils util-linux\n\n# \u4f1a\u770b\u5230 Communication controller \u8fd9\u6837\u7684 PCI\nlspci\n\n# OpenVox \u9700\u8981 wct4xxp\nmodprobe dahdi\nmodprobe wct4xxp\n\n# \u542f\u52a8 dahdi \u670d\u52a1, \u5e76\u4e14\u4e0b\u6b21\u81ea\u52a8\u542f\u52a8\nrc-update add dahdi\nrc-service dahdi start\n\n\n\n\n# \u751f\u6210\u914d\u7f6e\n# /etc/dahdi/system.conf\n# /etc/asterisk/dahdi-channels.conf\ndahdi_genconf\n\n# \u914d\u7f6e\u6b63\u786e\u7684\u56fd\u5bb6\u8bbe\u7f6e\n\n# /etc/dahdi/system.conf\n# loadzone = cn\n# defaultzone = cn\n\n# /etc/asterisk/indications.conf\n# country=cn\n\n# \u5bfc\u5165\u914d\u7f6e\n# \u9ed8\u8ba4\u4f7f\u7528 /etc/dahdi/system.conf\n# \u53ef\u4ee5\u4fee\u6539\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6 -c /data/asterisk/dahdi/system.conf\ndahdi_cfg -vvvvvv\n\n# dahdi_monitor\n# Monitors signal level on analog channel allows you to record audio from it\n# Usage: dahdi_monitor <channel num> -v -m -o -p -l limit -f FILE -s FILE -r FILE1 -t FILE2 -F FILE -S FILE -R FILE1 -T FILE2\n# example: dahdi_monitor 1 -vv\n# note: extremly usefull, but otherwise not mentioned, that the raw format output is 8Khz 16bit signed.\n#   Use sox to convert to a wav. sox -r 8000 -s -w rx.raw rx.wav\n\n# \u5bfc\u5165\u914d\u7f6e\necho "#include dahdi-channels.conf" >> /etc/asterisk/chan_dahdi.conf\n\n\n# \u53ef\u9009\n# asterisk-{alsa,cdr-mysql,chan-dongle,curl,dahdi,dbg,dev,doc,fax,mobile,odbc,pgsql,sample-config,sounds-en,sounds-moh,speex,srtp,tds}\n# \u4f7f\u7528\u6837\u4f8b\u914d\u7f6e\u6587\u4ef6\n# apk add sample-config\n\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'apk add --allow-untrusted ~/packages/main/x86_64/pjproject-2.5.5-r3.apk\n\nuntil asterisk -gcvvvvv -C /data/asterisk/etc/asterisk.conf; do\n    UNID=$(date +"%Y-%m-%d.%H-%M-%S")\n    [ -e core ] && {\n      echo "$UNID Server \'asterisk\' crashed with exit code $?.  Respawning.." >> dump.log;\n      mv core core.$UNID;\n      mv /var/log/asterisk/full full.$UNID;\n    }\n    sleep 1\ndone\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pagure.io/newt/"},"newt"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Redhat's Newt windowing toolkit development files"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.isdn4linux.de/"},"isdn4linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://sourceforge.net/projects/osp-toolkit/"},"OSP Toolkit"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a client side implementation of the ETSI OSP VoIP Peering protocol (ETSI TS 101 321)")))),Object(i.b)("h3",{id:"centos"},"Centos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u5efa\u8bae\u5148\u8bbe\u7f6e\u597d https_proxy \u548c http_proxy \u53d8\u91cf, \u56e0\u4e3a wget \u53ea\u652f\u6301 http \u4ee3\u7406, \u6240\u4ee5\u4e0d\u80fd\u7528 socks \u4ee3\u7406\n\n# \u524d\u7f6e\u6761\u4ef6\nyum install kernel-devel\nyum install -y ncurses-devel curl-devel zlib-devel libedit-devel sqlite-devel postgresql-devel libuuid-devel uuid-devel lua-devel jansson-devel newt-devel openssl-devel\n\n# DAHDi \u9a71\u52a8\u5b89\u88c5\n# \u5982\u679c\u4f7f\u7528\u7684 OpenVox \u5219\u53ef\u4ee5\u4f7f\u7528 OpenVox \u7684\u9a71\u52a8\n# wget http://downloads.openvox.cn/pub/drivers/dahdi-linux-complete/openvox_dahdi-linux-complete-current.tar.gz\nwget http://downloads.asterisk.org/pub/telephony/dahdi-linux-complete/dahdi-linux-complete-current.tar.gz\ntar -zxvf dahdi-linux-complete-*.tar.gz\n\ncd dahdi-linux-complete-*\nmake\nmake install\nmake config\n\ncd ..\n\n# \u5b89\u88c5 libpri\nwget http://downloads.asterisk.org/pub/telephony/libpri/libpri-current.tar.gz\ntar -zxvf libpri-current.tar.gz\n\ncd libpri-*\nmake\nmake install\n\ncd ..\n\n# \u5b89\u88c5 asterisk\nAST_MAJOR_VER=14\nwget http://downloads.asterisk.org/pub/telephony/asterisk/asterisk-${AST_MAJOR_VER}-current.tar.gz\ntar -zxvf asterisk-${AST_MAJOR_VER}-current.tar.gz\n\ncd asterisk-${AST_MAJOR_VER}.*\n# 15 \u540e --with-pjproject-bundled \u4e3a\u9ed8\u8ba4\u503c\n./configure \\\n  --with-pjproject-bundled --with-gnu-ld --with-libcurl --with-libedit \\\n  --with-gsm=internal \\\n  --without-x11 \\\n  --with-dahdi --with-pri --with-tonezone \\\n  --with-postgres --with-sqlite3\nmake\nmake install\nmake samples\n\n# format_mp3\n# Any rate but 8000hz mono is optimal\n# \u6e90\u7801\u9700\u8981\u4e0b\u8f7d\ncontrib/scripts/get_mp3_source.sh\n./menuselect/menuselect --enable format_mp3 menuselect.makeopts\nmake\nmake install\n\n# codec_opus\n# http://downloads.digium.com/pub/telephony/codec_opus/README\n# https://wiki.asterisk.org/wiki/display/AST/Codec+Opus\n# \u4f7f\u7528\u5b98\u65b9\u4e8c\u8fdb\u5236\u7248\u53ef\u80fd\u4f1a\u8fdb\u884c\u7edf\u8ba1, \u5982\u679c\u60f3\u8981\u5173\u95ed, \u53ef\u4ee5\u5728 dnsmasq \u4e2d\u6dfb\u52a0 local=/stats.asterisk.org/ \u6216\u8005\u5728 hosts \u4e2d\u6dfb\u52a0\u5bf9\u5e94\u8bb0\u5f55\n# \u4e8c\u8fdb\u5236\u5b89\u88c5\n# \u652f\u6301 13,14,15 \u652f\u6301 x86_64,x86_32 \u7684 linux\nAST_MAJOR_VER="$(asterisk -V | sed -nr -e \'s/.*([0-9]{2}).*/\\1/p\')"\n# \u5f53\u524d\u6700\u65b0\u7248\u4e3a 1.1.0\nOPUS_VER=current\nwget "http://downloads.digium.com/pub/telephony/codec_opus/asterisk-${AST_MAJOR_VER}.0/x86-64/codec_opus-${AST_MAJOR_VER}.0_${OPUS_VER}-$(uname -m).tar.gz"\ntar zxvf codec_opus-*\ncd codec_opus-*\ncp codec_opus.so /usr/lib/asterisk/modules/\ncp format_ogg_opus.so /usr/lib/asterisk/modules/\ncp codec_opus_config-en_US.xml /var/lib/asterisk/documentation/thirdparty/\n\n# \u6e90\u7801\u5b89\u88c5\n# \u4f9d\u8d56\nyum install -y opus-devel\n# \u5b98\u65b9\u672a\u91ca\u51fa\u6e90\u7801\n# \u83dc\u5355\u9879\u4e3a Codec Translators -> codec_opus\n# \u53ef\u53c2\u8003\u6e90\u7801 https://github.com/traud/asterisk-opus\n# Debian \u7684 Asterisk \u4f7f\u7528\u7684\u6539\u6e90\u7801 https://anonscm.debian.org/git/pkg-voip/asterisk-opus.git\n')),Object(i.b)("h2",{id:"\u5f55\u97f3\u6587\u4ef6\u5f52\u6863"},"\u5f55\u97f3\u6587\u4ef6\u5f52\u6863"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5f55\u97f3\u6587\u4ef6\u5f52\u6863\u5efa\u8bae\u4f7f\u7528 opus \u538b\u7f29",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"1453 wav 405M \u538b\u7f29\u540e\u4e3a 91M",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5176\u4e2d\u6709 764 \u4e2a\u7a7a\u767d\u6587\u4ef6"))),Object(i.b)("li",{parentName:"ul"},"688 wav 402M \u538b\u7f29\u540e\u4e3a 88M"))),Object(i.b)("li",{parentName:"ul"},"wav \u7a7a\u767d\u6587\u4ef6\u4e3a 44"),Object(i.b)("li",{parentName:"ul"},"opus \u7a7a\u767d\u6587\u4ef6\u4e3a 872")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u7a7a\u767d\u6587\u4ef6\nfind . -size 44c -delete\n# \u65f6\u95f4\u8303\u56f4\nfind . -type f -newermt 2017-9-28 ! -newermt 2017-9-29\n# 15 \u5206\u949f\u524d\u5230\u73b0\u5728\nfind . -type f -mmin -15\n# \u5220\u9664\u8fd9\u4e4b\u524d\u7684\u6570\u636e\nfind . -type f ! -newermt 2017-9-29 -delete\n")),Object(i.b)("h2",{id:"\u81ea\u52a8\u62e8\u53f7\u6587\u4ef6"},"\u81ea\u52a8\u62e8\u53f7\u6587\u4ef6"),Object(i.b)("p",null,"/var/spool/asterisk/outgoing/"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.voip-info.org/asterisk-call-files"},"https://www.voip-info.org/asterisk-call-files"),"\n",Object(i.b)("a",{parentName:"p",href:"https://www.voip-info.org/asterisk-auto-dial-out"},"https://www.voip-info.org/asterisk-auto-dial-out")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://www.pycall.org/"},"http://www.pycall.org/"),"\na flexible python library for creating and using Asterisk call files."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Prank call programs."),Object(i.b)("li",{parentName:"ul"},"Wakeup call programs."),Object(i.b)("li",{parentName:"ul"},"Telemarketing campaigns."),Object(i.b)("li",{parentName:"ul"},"Automatic callback systems."),Object(i.b)("li",{parentName:"ul"},"Emergency warning systems."),Object(i.b)("li",{parentName:"ul"},"Advanced conferencing applications.")))),Object(i.b)("h2",{id:"\u6027\u80fd\u8c03\u4f18"},"\u6027\u80fd\u8c03\u4f18"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.voip-info.org/wiki/view/Asterisk+at+large"},"Asterisk at large")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.voip-info.org/wiki/view/Asterisk+dimensioning"},"Asterisk dimensioning"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u8bed\u8a00\u6587\u4ef6\u653e\u5230\u5185\u5b58\n# /var/lib/asterisk/sound\nmkdir /mnt/ramdisk\nmount -t tmpfs -o size=2g tmpfs /mnt/ramdisk\n# /etc/fstab\n# tmpfs /mnt/ramdisk tmpfs nodev,nosuid,noexec,nodiratime,size=2048M 0 0\n\n# \u4fdd\u8bc1\u6700\u5927\u6587\u4ef6\u6570\u591f\u5927, \u81f3\u5c11 131072\nsysctl fs.file-max\n# \u5237\u65b0\u4fee\u6539\nsysctl -p /etc/sysctl.conf\nsysctl -w fs.file-max=100000\nsysctl --system\n\n# \u786e\u4fdd\u6253\u5f00\u6587\u4ef6\u6570\u52fe\u642d, \u81f3\u5c11 32768\nulimit -n\n# \u67e5\u770b\u5df2\u7ecf\u8fd0\u884c\u7684\ncat /proc/$(pidof asterisk)/limits | grep files\n# https://superuser.com/a/441758/242730\nprlimit --nofile -p $(pidof asterisk)\n\n# \u5f53\u524d\u6253\u5f00\u7684\u6587\u4ef6\u6570\nlsof -p $(pidof asterisk) | wc -l\nls -l /proc/$(pidof asterisk)/fd | wc -l\n\n# \u5f53\u524d\u6240\u6709\u7684\u91cf\nlsof | wc -l\n\n# \u67e5\u770b\u5185\u6838\u7684\u6587\u4ef6\u6570\u9650\u5236\nsysctl fs.file-nr\n")),Object(i.b)("h2",{id:"debian"},"debian"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/alpinelinux/aports/blob/master/main/asterisk/APKBUILD"},"https://github.com/alpinelinux/aports/blob/master/main/asterisk/APKBUILD")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apt install curl libedit-dev uuid-dev libjansson-dev libxml2-dev libsqlite3-dev\n\n./configure \\\n        --prefix=/usr \\\n        --sysconfdir=/etc \\\n        --mandir=/usr/share/man \\\n        --infodir=/usr/share/info \\\n        --libdir=/usr/lib \\\n        --localstatedir=/var \\\n        --disable-xmldoc \\\n        --with-gsm=internal \\\n        --with-popt \\\n        --with-z \\\n        --with-newt \\\n        --with-unixodbc \\\n        --with-postgres \\\n        --with-tds \\\n        --with-dahdi \\\n        --with-pri \\\n        --with-tonezone \\\n        --with-resample \\\n        --with-sqlite3 \\\n        --with-speex \\\n        --with-asound \\\n        --without-x11 \\\n        --without-pjproject-bundled \\\n        --with-spandsp \\\n        --with-bluetooth \\\n        --with-libcurl \\\n        --with-libedit \\\n        --with-srtp \\\n        --with-imap=system\n\n        --with-imap=system\n--with-bluetooth\n--with-tds\n--with-unixodbc\n--with-popt\n\n\n\n./configure \\\n        --prefix=/usr \\\n        --sysconfdir=/etc \\\n        --mandir=/usr/share/man \\\n        --infodir=/usr/share/info \\\n        --libdir=/usr/lib \\\n        --localstatedir=/var \\\n        --disable-xmldoc \\\n        --with-gsm=internal \\\n        --with-z \\\n        --with-newt \\\n        --with-postgres \\\n        --with-dahdi \\\n        --with-pri \\\n        --with-tonezone \\\n        --with-resample \\\n        --with-sqlite3 \\\n        --with-speex \\\n        --with-asound \\\n        --without-x11 \\\n        --with-spandsp \\\n        --with-libcurl \\\n        --with-libedit \\\n        --with-srtp\n\n\n\n\n\n\n./menuselect/menuselect \\\n        --enable chan_mobile \\\n        --enable app_meetme \\\n        --enable cdr_mysql \\\n        --disable BUILD_NATIVE \\\n        --enable IMAP_STORAGE \\\n        menuselect.makeopts\n\nrm -f menuselect.makeopts\nmake menuselect.makeopts\n./menuselect/menuselect \\\n        --enable app_meetme \\\n        menuselect.makeopts\n\nmake -j $(nproc)\n")),Object(i.b)("p",null,"libxml2-dev libncurses5-dev uuid-dev sqlite3 libsqlite3-dev pkg-config libjansson-dev"),Object(i.b)("p",null,"uuid-dev"),Object(i.b)("p",null,"xml2,sqlite3,jansson,asound2,newt,pq,pri,resample,spandsp,speex,speexdsp,srtp"),Object(i.b)("p",null,"dahdi"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Newt_(programming_library)"},"https://en.wikipedia.org/wiki/Newt_(programming_library)")),Object(i.b)("p",null,"tonezone"),Object(i.b)("p",null,"dahdi-source"),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The ALSA installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-asound."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The BLUETOOTH installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-bluetooth."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The DAHDI installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-dahdi."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The IMAP",Object(i.b)("em",{parentName:"p"},"TK installation appears to be missing or broken.\nconfigure: **")," Either correct the installation, or run configure\nconfigure: _** including --without-imap."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The NEWT installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-newt."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The PGSQL installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-postgres."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The POPT installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-popt."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The PRI installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-pri."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The RESAMPLE installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-resample."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The SPANDSP installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-spandsp."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The SPEEX installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-speex."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The SPEEX",Object(i.b)("em",{parentName:"p"},"PREPROCESS installation appears to be missing or broken.\nconfigure: **")," Either correct the installation, or run configure\nconfigure: _** including --without-speex."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The SRTP installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-srtp."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The FREETDS installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-tds."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The TONEZONE installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-tonezone."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The UNIXODBC installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-unixodbc."),Object(i.b)("p",null,"configure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\nconfigure: "))," The ZLIB installation appears to be missing or broken.\nconfigure: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"}," Either correct the installation, or run configure\nconfigure: "))," including --without-z."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://www.sailpbx.com/mediawiki/index.php/Debian_DAHDI"},"http://www.sailpbx.com/mediawiki/index.php/Debian_DAHDI")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apt-get install dahdi-source\nm-a a-i dahdi\n")),Object(i.b)("h2",{id:"ops"},"Ops"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.voip-info.org/asterisk-automatic-daily-restart/"},"https://www.voip-info.org/asterisk-automatic-daily-restart/")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'until asterisk -gcv -C /data/asterisk/etc/asterisk.conf; do\n    UNID=$(date +"%Y-%m-%d.%H-%M-%S")\n    [ -e core ] && {\n      echo "$UNID Server \'asterisk\' crashed with exit code $?.  Respawning.." >> dump.log;\n      mv core core.$UNID;\n      mv /var/log/asterisk/full full.$UNID;\n    }\n    sleep 1;\ndone\n')))}p.isMDXComponent=!0}}]);