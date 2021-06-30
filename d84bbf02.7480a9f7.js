(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1107:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.a.createElement(v,o(o({ref:t},b),{},{components:r})):n.a.createElement(v,o({ref:t},b))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<a;b++)l[b]=r[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},955:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var i=r(3),n=r(8),a=(r(0),r(1107)),l={id:"libvirt",title:"Libvirt"},o={unversionedId:"os/virt/libvirt",id:"os/virt/libvirt",isDocsHomePage:!1,title:"Libvirt",description:"Tips",source:"@site/notes/os/virt/libvirt.md",slug:"/os/virt/libvirt",permalink:"/notes/os/virt/libvirt",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/libvirt.md",version:"current",sidebar:"docs",previous:{title:"Virsh",permalink:"/notes/os/virt/virsh"},next:{title:"Libvirt Daemon",permalink:"/notes/os/virt/libvirtd"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u9a71\u52a8",id:"\u9a71\u52a8",children:[]},{value:"invalid argument: Failed to parse user &#39;qemu&#39;",id:"invalid-argument-failed-to-parse-user-qemu",children:[]},{value:"XML",id:"xml",children:[]},{value:"virt-install",id:"virt-install",children:[]}],b={toc:s};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/libvirt/libvirt"},"libvirt/libvirt"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7ed1\u5b9a: c#, go, java, ocaml. perl, python, php, ruby"),Object(a.b)("li",{parentName:"ul"},"API \u5206\u4e3a: common, domain, domain snapshot, error, event, host, interface, network, node device, network filter, secret, storage, stream"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://libvirt.org/drivers.html"},"libvirt"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"LXC \u2013 Linux Container - \u5bb9\u5668"),Object(a.b)("li",{parentName:"ul"},"OpenVZ \u2013 lightweight Linux container system"),Object(a.b)("li",{parentName:"ul"},"Kernel-based Virtual Machine/QEMU (KVM) \u2013 open source hypervisor for Linux and SmartOS"),Object(a.b)("li",{parentName:"ul"},"Xen \u2013 Bare-Metal hypervisor"),Object(a.b)("li",{parentName:"ul"},"User-mode Linux (UML) paravirtualized kernel"),Object(a.b)("li",{parentName:"ul"},"VirtualBox \u2013 hypervisor by Oracle (formerly Sun) for Windows, Linux, Mac OS X, and Solaris"),Object(a.b)("li",{parentName:"ul"},"VMware ESX and GSX \u2013 hypervisors for Intel hardware"),Object(a.b)("li",{parentName:"ul"},"VMware Workstation and Player \u2013 hypervisors for Windows and Linux"),Object(a.b)("li",{parentName:"ul"},"Hyper-V \u2013 hypervisor for Windows by Microsoft"),Object(a.b)("li",{parentName:"ul"},"PowerVM \u2013 hypervisor by IBM for AIX, Linux and IBM i"),Object(a.b)("li",{parentName:"ul"},"Parallels Workstation \u2013 hypervisor for Mac by Parallels IP Holdings GmbH"),Object(a.b)("li",{parentName:"ul"},"Bhyve \u2013 hypervisor for FreeBSD 10+."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.libvirt.org/page/QEMUSwitchToLibvirt"},"QEMUSwitchToLibvirt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.libvirt.org/page/UbuntuKVMWalkthrough"},"UbuntuKVMWalkthrough")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gist.github.com/itzg/2577205f2036f787a2bd876ae458e18e"},"libvirt cloud-init with static networking")),Object(a.b)("li",{parentName:"ul"},"\u6982\u5ff5 - ",Object(a.b)("a",{parentName:"li",href:"https://libvirt.org/api.html"},"API"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"domain",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Guest Host"))),Object(a.b)("li",{parentName:"ul"},"network"),Object(a.b)("li",{parentName:"ul"},"storage pool"),Object(a.b)("li",{parentName:"ul"},"storage volume"))),Object(a.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"libvirtd \u672a\u6b63\u5e38\u5173\u95ed\u5bfc\u81f4 hang - 6.6.0 \u5e94\u8be5\u4f1a\u4fee\u590d",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"},"alpine/aports#11602")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gitlab.com/libvirt/libvirt/-/issues/52"},"libvirt/libvirt#52")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=libvirt-client&arch=x86_64&repo=community"},"libvirt-client"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# macOS\n# \u5b89\u88c5 vbox\nbrew install libvirt\n\n# alpine\napk add virt-install\n\n# \u68c0\u6d4b\u5bbf\u4e3b\u673a\u652f\u6301\u60c5\u51b5\nvirt-host-validate\n\n# \u542f\u52a8\u670d\u52a1\u8fdb\u7a0b\nlibvirtd -v\n\n# \u5ba2\u6237\u7aef\u8fde\u63a5\n# https://libvirt.org/uri.html\n# https://libvirt.org/remote.html\nvirsh -c vbox:///session\n# \u65e5\u5fd7\u63a7\u5236\nLIBVIRT_LOG_FILTERS=1:vbox virsh -c vbox:///session\n# export LIBVIRT_DEFAULT_URI=\"qemu+ssh://root@192.168.1.100/system\"\nvirsh -c 'qemu+ssh://root@192.168.1.2/system'\n\n# \u95ee\u9898\u6392\u67e5\n# user \u4f1a\u4f7f\u7528 /usr/local/var/run/libvirt/libvirt-sock\nLIBVIRT_LOG_FILTERS=1:*  virsh -c 'qemu+ssh://admin@192.168.1.2/system' list\n# \u4fee\u6539\u4f7f\u7528\u7684 socket\nvirsh -c 'qemu+ssh://admin@192.168.1.2/system?socket=/var/run/libvirt/libvirt-sock' list\n\n# user \u4f1a\u4f7f\u7528 /usr/local/var/run/libvirt/libvirt-sock\nvirsh -c 'unix+ssh://admin@192.168.1.2/run/libvirt/libvirt-sock' list\n# \u5982\u679c\u662f\u975e root\uff0c\u5148\u9a8c\u8bc1\u80fd\u8bbf\u95ee\nvirsh -c unix:///run/libvirt/libvirt-sock list\n# \u53ef\u4ee5\u8f6c\u53d1 unix socket\nssh -R /run/libvirt/libvirt-sock:127.0.0.1:16509 admin@192.168.1.2 -Nv\n\nexport VIRSH_DEFAULT_CONNECT_URI=qemu:///system\nvirsh list --all\n\n# \u865a\u62df\u673a\u5217\u8868\nvirsh list\n\n# https://wiki.libvirt.org/page/SSHSetup\necho 'unix_sock_group = \"libvirt\"' >> /etc/libvirt/libvirtd.conf\necho 'unix_sock_rw_perms = \"0770\"' >> /etc/libvirt/libvirtd.conf\nusermod -G libvirt -a $USER\nrc-service libvirtd restart\n\nvirsh -c qemu+ssh://username@hostname/system\n")),Object(a.b)("h2",{id:"\u9a71\u52a8"},"\u9a71\u52a8"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pkgs.alpinelinux.org/contents?file=&path=%2Fusr%2Flib%2Flibvirt%2Fconnection-driver&name=&branch=edge&arch=x86_64"},"https://pkgs.alpinelinux.org/contents?file=&path=%2Fusr%2Flib%2Flibvirt%2Fconnection-driver&name=&branch=edge&arch=x86_64")),Object(a.b)("h2",{id:"invalid-argument-failed-to-parse-user-qemu"},"invalid argument: Failed to parse user 'qemu'"),Object(a.b)("h2",{id:"xml"},"XML"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://libvirt.org/format.html"},"https://libvirt.org/format.html"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"virt-xml-validate /path/to/XML/file\n")),Object(a.b)("h2",{id:"virt-install"},"virt-install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'virt-install --virt-type kvm --name xp \\\n--location http://httpredir.debian.org/debian/dists/squeeze/main/installer-amd64/ \\\n--extra-args "console=ttyS0" -v --os-variant debiansqueeze \\\n--disk size=4 --memory 512\n-n xp --vcpus 2 --import winxp\n')),Object(a.b)("p",null,"virt-install \\\n--connect qemu:///system \\\n--virt-type qemu \\\n--name demo \\\n--ram 500 \\\n--graphics vnc \\\n--disk path=/root/alp.qcow2 \\\n--cdrom /root/alpine-standard-3.8.0-x86_64.iso \\\n--os-variant=generic \\\n--dry-run --print-xml"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://wiki.debian.org/KVM"},"https://wiki.debian.org/KVM")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Usage:\n  libvirtd [options]\n\nOptions:\n  -h | --help            Display program help:\n  -v | --verbose         Verbose messages.\n  -d | --daemon          Run as a daemon & write PID file.\n  -l | --listen          Listen for TCP/IP connections.\n  -t | --timeout <secs>  Exit after timeout period.\n  -f | --config <file>   Configuration file.\n  -V | --version         Display version information.\n  -p | --pid-file <file> Change name of PID file.\n\nlibvirt management daemon:\n\n  Default paths:\n\n    Configuration file (unless overridden by -f):\n      $XDG_CONFIG_HOME/libvirt/libvirtd.conf\n\n    Sockets:\n      $XDG_RUNTIME_DIR/libvirt/libvirt-sock\n\n    TLS:\n      CA certificate:     $HOME/.pki/libvirt/cacert.pem\n      Server certificate: $HOME/.pki/libvirt/servercert.pem\n      Server private key: $HOME/.pki/libvirt/serverkey.pem\n\n    PID file:\n      $XDG_RUNTIME_DIR/libvirt/libvirtd.pid\n")),Object(a.b)("p",null,"virsh -c qemu+ssh://",Object(a.b)("a",{parentName:"p",href:"mailto:root@127.0.0.1"},"root@127.0.0.1"),":2222/system?socket=/var/run/libvirt/libvirt-sock list --all"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://rabexc.org/posts/how-to-get-started-with-libvirt-on"},"http://rabexc.org/posts/how-to-get-started-with-libvirt-on")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://libvirt.org/formatdomain.html"},"https://libvirt.org/formatdomain.html")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-conf"},'listen_tls = 0\nlisten_tcp=1\nauth_tcp="none"\n\n\nunix_sock_dir = "/usr/local/var/run/libvirt"\nunix_sock_ro_perms = "0777"\nunix_sock_rw_perms = "0770"\n\nauth_unix_ro = "none"\nauth_unix_rw = "none"\n')))}c.isMDXComponent=!0}}]);