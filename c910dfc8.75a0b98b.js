(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{627:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(7),r=(a(0),a(766)),l={title:"Linux Container",sidebar_title:"LXC",hide_title:!0},b={unversionedId:"devops/container/lxc",id:"devops/container/lxc",isDocsHomePage:!1,title:"Linux Container",description:"- lxc package content",source:"@site/notes/devops/container/lxc.md",slug:"/devops/container/lxc",permalink:"/notes/devops/container/lxc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/lxc.md",version:"current",sidebar:"docs",previous:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"},next:{title:"LXD",permalink:"/notes/devops/container/lxd"}},i=[{value:"\u975e\u7279\u6743 LXC \u914d\u7f6e",id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"lxc",id:"lxc",children:[]},{value:"Docker in LXC",id:"docker-in-lxc",children:[]},{value:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"lxc package ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=lxc&arch=x86_64&repo=main"}),"content")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/lxc/lxc"}),"lxc/lxc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"~/.config/lxc/default.conf")),Object(r.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"dir - \u9ed8\u8ba4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"/var/lib/lxc/container/rootfs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"~/.local/share/lxc/<name>/rootfs")))),Object(r.b)("li",{parentName:"ul"},"lvm"),Object(r.b)("li",{parentName:"ul"},"loop"),Object(r.b)("li",{parentName:"ul"},"btrfs"),Object(r.b)("li",{parentName:"ul"},"zfs"),Object(r.b)("li",{parentName:"ul"},"rbd"),Object(r.b)("li",{parentName:"ul"},"best"))),Object(r.b)("li",{parentName:"ul"},"man ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages//man1/lxc-create.1.html"}),"lxc-create.1")),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"archlinux ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Linux_Containers"}),"lxc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/hack3d/8a3982329e1df77f380878ff7bbc7b03"}),"armhf lxc")))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5 poweroff \u9000\u51fa init"),Object(r.b)("li",{parentName:"ul"},"lxc \u53ef\u4ee5\u5d4c\u5957")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# /usr/share/lxc/templates/lxc-download\n# /lib/security/pam_cgfs.so\napk add lxc shadow-uidmap lxc-bridge lxc-pam lxc-download lxc-templates lxc-templates-oci\n\n# \u542f\u52a8 lxcbr0 - \u9ed8\u8ba4\u7f51\u6bb5\nservice dnsmasq.lxcbr0 start\n\n# \u5df2\u5b89\u88c5 template\nls /usr/share/lxc/templates/\n# \u67e5\u770b\u53c2\u6570\n/usr/share/lxc/templates/lxc-download -h\n\n# https://images.linuxcontainers.org\n# \u4f7f\u7528 tuna \u955c\u50cf\nlxc-create -t download -n alpine-amd64 -- -d alpine -r 3.12 -a amd64 --server mirrors.tuna.tsinghua.edu.cn/lxc-images\n# \u524d\u53f0\u542f\u52a8\n# -d \u540e\u53f0\u542f\u52a8\nlxc-start -n alpine-amd64 -F\n# \u542f\u52a8\u4e00\u4e2a shell\nlxc-attach -n alpine-amd64\n\n# \u67e5\u770b\u8fd0\u884c\u7684\u5bb9\u5668\nlxc-ls --fancy\n# \u505c\u6b62\u5bb9\u5668\nlxc-stop -n alpine-amd64\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"desc"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-attach"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start a process inside a running container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-autostart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start/stop/kill auto-started containers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-cgroup"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"manage the control group associated with a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-checkconfig"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"check the current kernel for lxc support")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-checkpoint"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"checkpoints and restores containers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-config"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"query LXC system configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-console"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Launch a console for the specified container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-copy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"copy an existing container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-create"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"creates a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-destroy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"destroy a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-device"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"manage devices of running containers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-execute"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"run an application inside a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-freeze"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"freeze all the container's processes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-info"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"query information about a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-ls"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"list the containers existing on the system")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-monitor"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"monitor the container state")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-snapshot"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Snapshot an existing container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-start"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"run an application inside a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-stop"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stop the application running inside a container")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-top"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"monitor container statistics")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-unfreeze"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"thaw all the container's processes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-unshare"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run a task in a new set of namespaces")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-update-config"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"update a legacy pre LXC 2.1 configuration file")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-usernsexec"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run a task as root in a new user namespace")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lxc-wait"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"wait for a specific container state")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"modprobe configs\nlxc-checkconfig\n# \u68c0\u6d4b\u5176\u4ed6 kernel \u914d\u7f6e\nCONFIG=/boot/config-lts /usr/bin/lxc-checkconfig\n\n# \u6240\u6709\u914d\u7f6e\nlxc-config -l\n# \u9ed8\u8ba4\u914d\u7f6e\n# $HOME/.config/lxc/default.conf\nlxc-config lxc.default_config\n# \u8def\u5f84\u4f4d\u7f6e\n# $HOME/.local/share/lxc\nlxc-config lxc.lxcpath\n\nlxc-attach -n container -- /etc/init.d/cron restart\n")),Object(r.b)("h2",{id:"\u975e\u7279\u6743-lxc-\u914d\u7f6e"},"\u975e\u7279\u6743 LXC \u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# sudo usermod -v 100000-200000 -w 100000-200000 $USER\necho "session    optional   pam_cgfs.so -c freezer,memory,name=systemd,unified" >> /etc/pam.d/system-login\n# echo "lxc.idmap = u 0 100000 65536" >> /etc/lxc/default.conf\n# echo "lxc.idmap = g 0 100000 65536" >> /etc/lxc/default.conf\n\necho root:100000:65536 | sudo tee -a /etc/subuid\necho root:100000:65536 | sudo tee -a /etc/subgid\n\nmkdir -p ~/.config/lxc\n\n# \u5305\u542b\u5168\u5c40\u914d\u7f6e\u53ef\u4ee5\u5c11\u914d\u7f6e\u4e00\u4e9b\necho "lxc.include = /etc/lxc/default.conf" > ~/.config/lxc/default.conf\n\necho "lxc.idmap = u 0 100000 65536" > ~/.config/lxc/default.conf\necho "lxc.idmap = g 0 100000 65536" >> ~/.config/lxc/default.conf\necho "lxc.net.0.type = veth" >> ~/.config/lxc/default.conf\necho "lxc.net.0.link = lxcbr0" >> ~/.config/lxc/default.conf\n\necho "$USER veth lxcbr0 2" | sudo tee -a /etc/lxc/lxc-usernet\n')),Object(r.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.conf.5.html"}),"lxc.conf.5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc.container.conf.5.html"}),"lxc.container.conf.5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages//man5/lxc.system.conf.5.html"}),"lxc.system.conf.5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man5/lxc-usernet.5.html"}),"lxc-usernet.5"))),Object(r.b)("h2",{id:"lxc"},"lxc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://linuxcontainers.org/lxc/manpages/man7/lxc.7.html"}),"lxc.7"))),Object(r.b)("h1",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"docker-in-lxc"},"Docker in LXC"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/a/25885682/1870054"}),"https://stackoverflow.com/a/25885682/1870054"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"lxc.apparmor.profile = lxc-container-default-with-nesting\n")),Object(r.b)("h2",{id:"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"},"\u914d\u7f6e\u9519\u8bef\u6216\u4e0d\u5b58\u5728"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u5347\u7ea7\u914d\u7f6e\nlxc-update-config -c ~/.local/share/lxc/alpine-amd64/config\n")))}p.isMDXComponent=!0},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,s=u["".concat(l,".").concat(O)]||u[O]||m[O]||r;return a?c.a.createElement(s,b(b({ref:t},o),{},{components:a})):c.a.createElement(s,b({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<r;o++)l[o]=a[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);