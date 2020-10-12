(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),l=n(7),i=(n(0),n(556)),r={id:"qemu-doc",title:"QEMU \u6587\u6863"},b={unversionedId:"ops/os/linux/virt/qemu-doc",id:"ops/os/linux/virt/qemu-doc",isDocsHomePage:!1,title:"QEMU \u6587\u6863",description:"QEMU Document",source:"@site/contents/tricks/ops/os/linux/virt/qemu-doc.md",slug:"/ops/os/linux/virt/qemu-doc",permalink:"/notes/ops/os/linux/virt/qemu-doc",version:"current",sidebar:"docs",previous:{title:"\u865a\u62df\u5316",permalink:"/notes/ops/os/linux/virt/virt"},next:{title:"QEMU\u76d1\u89c6\u5668",permalink:"/notes/ops/os/linux/virt/qemu-monitor"}},c=[{value:"Tips",id:"tips",children:[{value:"Device URL Syntax",id:"device-url-syntax",children:[]}]},{value:"\u955c\u50cf",id:"\u955c\u50cf",children:[{value:"\u53ea\u8bfb\u683c\u5f0f",id:"\u53ea\u8bfb\u683c\u5f0f",children:[]},{value:"\u78c1\u76d8\u955c\u50cf",id:"\u78c1\u76d8\u955c\u50cf",children:[]},{value:"\u7f51\u7edc\u5757\u8bbe\u5907",id:"\u7f51\u7edc\u5757\u8bbe\u5907",children:[]}]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[]},{value:"\u5916\u8bbe",id:"\u5916\u8bbe",children:[{value:"USB",id:"usb",children:[]},{value:"PCI",id:"pci",children:[]}]},{value:"\u7528\u6237\u7a7a\u95f4\u865a\u62df",id:"\u7528\u6237\u7a7a\u95f4\u865a\u62df",children:[]},{value:"\u663e\u793a",id:"\u663e\u793a",children:[]}],p={rightToc:c};function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"qemu-document"},"QEMU Document"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"QEMU ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://qemu.weilnetz.de/doc/qemu-doc.html"}),"Doc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u865a\u62df\u6a21\u5f0f")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"PC \u7cfb\u7edf\u6a21\u62df\u5668"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u6807\u51c6\u9009\u9879")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5757\u8bbe\u5907\u9009\u9879")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"USB \u9009\u9879")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u663e\u793a\u9009\u9879"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-display [type]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sdl,curses,none,gtk,vnc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-nographic")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-alt-grab")," - Ctrl-Alt-Shift"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-ctrl-grab")," - Right-Ctrl"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-spice option[,option[,...]]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"spice \u8fdc\u7a0b\u684c\u9762\u534f\u8bae"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-full-screen")," \u5168\u5c4f\u7684\u65b9\u5f0f\u6253\u5f00"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-g widthxheight[xdepth]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u521d\u59cb\u5927\u5c0f"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-vnc display[,option[,option[,...]]]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53c2\u6570"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f51\u7edc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5b57\u7b26\u8bbe\u5907")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u84dd\u7259")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TPM \u8bbe\u5907")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Linux/Multiboot \u542f\u52a8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u8c03\u8bd5\u548c\u4e13\u5bb6\u9009\u9879"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-serial [dev]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8f6c\u53d1\u865a\u62df\u4e32\u53e3\u5230\u4e3b\u673a\u7684\u5b57\u7b26\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vc[:WxH]")," Virtual console"),Object(i.b)("li",{parentName:"ul"},"pty, none, null, chardev:id, /dev/XXX, stdio, pipe:filename,, COMn"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"udp:[remote_host]:remote_port[@[src_ip]:src_port]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tcp:[host]:port[,server][,nowait][,nodelay][,reconnect=seconds]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"telnet:host:port[,server][,nowait][,nodelay]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unix:path[,server][,nowait][,reconnect=seconds]")),Object(i.b)("li",{parentName:"ul"},"/dev/parportN"),Object(i.b)("li",{parentName:"ul"},"mon:dev_string"),Object(i.b)("li",{parentName:"ul"},"braille"),Object(i.b)("li",{parentName:"ul"},"msmouse"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-S")," - \u542f\u52a8\u65f6\u4e0d\u542f\u52a8 CPU, \u624b\u52a8\u8f93\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-bios file")," - \u6307\u5b9a BIOS \u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-no-reboot")," - \u9000\u51fa\u800c\u4e0d\u662f\u91cd\u542f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-enable-kvm"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u662f\u5426\u542f\u7528 KVM"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-enable-hax"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u662f\u5426\u542f\u7528 HAX (Hardware-based Acceleration eXecution)"),Object(i.b)("li",{parentName:"ul"},"\u53ea\u5bf9 Mac \u548c Windows \u6709\u6548"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-loadvm [file]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u4fdd\u5b58\u7684\u72b6\u6001"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-daemonize")," -  \u540e\u53f0\u8fd0\u884c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-readconfig file")," - \u4ece\u6587\u4ef6\u8bfb\u53d6\u8bbe\u5907\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-writeconfig file")," - \u5c06\u8bbe\u5907\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u76d1\u63a7")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u78c1\u76d8\u955c\u50cf")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7f51\u7edc\u6a21\u62df\u5668")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5176\u4ed6\u8bbe\u5907")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u76f4\u63a5 Linux \u542f\u52a8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"USB \u6a21\u62df\u5668")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"VNC \u5b89\u5168\u76f8\u5173")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5e73\u53f0\u76f8\u5173\u9009\u9879")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u975e PC \u7cfb\u7edf\u6a21\u62df\u5668"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PowerPC"),Object(i.b)("li",{parentName:"ul"},"Sparc32"),Object(i.b)("li",{parentName:"ul"},"Sparec64"),Object(i.b)("li",{parentName:"ul"},"MIPS"),Object(i.b)("li",{parentName:"ul"},"ARM"),Object(i.b)("li",{parentName:"ul"},"Cris"),Object(i.b)("li",{parentName:"ul"},"ClodFire"),Object(i.b)("li",{parentName:"ul"},"Cris"),Object(i.b)("li",{parentName:"ul"},"Microblaze"),Object(i.b)("li",{parentName:"ul"},"Sh4"),Object(i.b)("li",{parentName:"ul"},"Xtensa"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u8c03\u7528")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u7528\u6237\u7a7a\u95f4\u6a21\u62df\u5668"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Linux"),Object(i.b)("li",{parentName:"ul"},"BSD")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u652f\u6301\u7684\u673a\u5668\nqemu-system-x86_64 -machine help\n# \u652f\u6301\u7684 CPU\nqemu-system-x86_64 -cpu help\n# ARM \u652f\u6301 raspi2\nqemu-system-arm -machine help | grep rasp\n# \u67e5\u770b\u65e5\u5fd7\u9879\nqemu-system-x86_64 -d help\n\n# Alpine virt \u7248, 30M \u5de6\u53f3, alpine-standard \u4e3a 100M \u5de6\u53f3\nwget http://dl-cdn.alpinelinux.org/alpine/v3.6/releases/x86_64/alpine-virt-3.6.2-x86_64.iso\n\n# WARNING: Image format was not specified for 'alpine-virt-3.6.2-x86_64.iso' and probing guessed raw.\n#          Automatically detecting the format is dangerous for raw images, write operations on block 0 will be restricted.\n#          Specify the 'raw' format explicitly to remove the restrictions.\nqemu-system-x86_64 alpine-virt-3.6.2-x86_64.iso\n# \u8fd9\u6837\u5c31\u4e0d\u4f1a\u51fa\u73b0\u8b66\u544a\nqemu-system-x86_64 -cdrom alpine-virt-3.6.2-x86_64.iso\n\n\n# \u5c06\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u865a\u62df\u7684 fat \u78c1\u76d8\u955c\u50cf, \u9ed8\u8ba4\u53ea\u8bfb\nqemu-system-i386 linux.img -hdb fat:/my_directory\n")),Object(i.b)("h3",{id:"device-url-syntax"},"Device URL Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u8bbe\u5907 URL \u8bed\u6cd5\n# ===========\n# iSCSI\n# iscsi://<target-ip>[:<port>]/<target-iqn>/<lun>\n# \u65e0\u6388\u6743\nqemu-system-i386 \\\n  -iscsi initiator-name=iqn.2001-04.com.example:my-initiator \\\n  -cdrom iscsi://192.0.2.1/iqn.2001-04.com.example/2 \\\n  -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1\n# \u5728 URL \u4e0a\u6307\u5b9a CHAP \u8d26\u53f7\u5bc6\u7801\nqemu-system-i386 \\\n  -drive file=iscsi://user%password@192.0.2.1/iqn.2001-04.com.example/1\n# \u5728\u73af\u5883\u53d8\u91cf\u4e2d\u6307\u5b9a CHAP \u8d26\u53f7\u5bc6\u7801\nLIBISCSI_CHAP_USERNAME="user" \\\nLIBISCSI_CHAP_PASSWORD="password" \\\nqemu-system-i386 -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1\n\n# NBD\n# nbd:<server-ip>:<port>[:exportname=<export>]\n# TCP\nqemu-system-i386 --drive file=nbd:192.0.2.1:30000\n# Unix Domain Sockets\nqemu-system-i386 --drive file=nbd:unix:/tmp/nbd-socket\n\n# Sheepdog\n# a distributed storage system for QEMU.\n# supports using either local sheepdog devices or remote networked devices.\n# sheepdog[+tcp|+unix]://[host:port]/vdiname[?socket=path][#snapid|#tag]\n# https://sheepdog.github.io/sheepdog/\nqemu-system-i386 --drive file=sheepdog://192.0.2.1:30000/MyVirtualMachine\n\n# GlusterFS\n# a user space distributed file system. \n# supports the use of GlusterFS volumes for hosting VM disk images using TCP, Unix Domain Sockets and RDMA transport protocols.\n# URI:\n# gluster[+type]://[host[:port]]/volume/path[?socket=...][,debug=N][,logfile=...]\n# JSON:\n# \'json:{"driver":"qcow2","file":{"driver":"gluster","volume":"testvol","path":"a.img","debug":N,"logfile":"...",\n#                                  "server":[{"type":"tcp","host":"...","port":"..."},\n#                                            {"type":"unix","socket":"..."}]}}\'\n# URI\nqemu-system-x86_64 --drive file=gluster://192.0.2.1/testvol/a.img,file.debug=9,file.logfile=/var/log/qemu-gluster.log\n# JSON\nqemu-system-x86_64 \'json:{"driver":"qcow2",\n                          "file":{"driver":"gluster",\n                                   "volume":"testvol","path":"a.img",\n                                   "debug":9,"logfile":"/var/log/qemu-gluster.log",\n                                   "server":[{"type":"tcp","host":"1.2.3.4","port":24007},\n                                             {"type":"unix","socket":"/var/run/glusterd.socket"}]}}\'\nqemu-system-x86_64 -drive driver=qcow2,file.driver=gluster,file.volume=testvol,file.path=/path/a.img,\\\n                                      file.debug=9,file.logfile=/var/log/qemu-gluster.log,\\\n                                      file.server.0.type=tcp,file.server.0.host=1.2.3.4,file.server.0.port=24007,\\\n                                      file.server.1.type=unix,file.server.1.socket=/var/run/glusterd.socket\\\n\n# HTTP/HTTPS/FTP/FTPS\n# QEMU supports read-only access to files accessed over http(s) and ftp(s).\n# <protocol>://[<username>[:<password>]@]<host>/<path>\n')),Object(i.b)("h2",{id:"\u955c\u50cf"},"\u955c\u50cf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"raw",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u539f\u59cb\u683c\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u6587\u4ef6\u7cfb\u7edf\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"li"},"holes"),"(ext2,ext3,ntfs), \u90a3\u4f1a\u5360\u4e0d\u4e86\u591a\u5c11\u7a7a\u95f4"),Object(i.b)("li",{parentName:"ul"},"\u9009\u9879",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"preallocation - \u9884\u5206\u914d\u6a21\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"off, falloc, full"))))))),Object(i.b)("li",{parentName:"ul"},"qcow2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"QEMU \u955c\u50cf\u683c\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd\u6700\u591a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"COW - \u53ea\u9488\u5bf9 btrfs \u6709\u7528"),Object(i.b)("li",{parentName:"ul"},"\u538b\u7f29"),Object(i.b)("li",{parentName:"ul"},"\u52a0\u5bc6 - aes,luks"))))),Object(i.b)("li",{parentName:"ul"},"qed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e7\u7684 QEMU \u955c\u50cf\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"qcow",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e7\u7684 QEMU \u955c\u50cf\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"luks",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LUKS v1 \u52a0\u5bc6\u683c\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4e0e Linux dm-crypt/cryptsetup \u517c\u5bb9"))),Object(i.b)("li",{parentName:"ul"},"vdi",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"vbox 1.1 \u517c\u5bb9\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"vmdk",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"vm 3,4 \u517c\u5bb9\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"vpc",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Virtual PC \u517c\u5bb9\u683c\u5f0f (VHD)"))),Object(i.b)("li",{parentName:"ul"},"VHDX",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hyper-V \u517c\u5bb9\u7684\u955c\u50cf\u683c\u5f0f")))),Object(i.b)("h3",{id:"\u53ea\u8bfb\u683c\u5f0f"},"\u53ea\u8bfb\u683c\u5f0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bochs",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"growing \u7684 Bochs \u955c\u50cf"))),Object(i.b)("li",{parentName:"ul"},"cloop",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Linux Compressed Loop \u955c\u50cf"))),Object(i.b)("li",{parentName:"ul"},"dmg",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apple \u7684\u78c1\u76d8\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"parallels",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Parallels \u78c1\u76d8\u955c\u50cf\u683c\u5f0f")))),Object(i.b)("h3",{id:"\u78c1\u76d8\u955c\u50cf"},"\u78c1\u76d8\u955c\u50cf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"qemu-img")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa\u78c1\u76d8\u955c\u50cf\nqemu-img create demo.img 100m\n# \u67e5\u770b\u57fa\u672c\u4fe1\u606f\nqemu-img info demo.img\n# \u67e5\u770b\u6620\u5c04\u4fe1\u606f\nqemu-img map demo.img\n# \u63a8\u8350\u4f7f\u7528 qcow2 \u683c\u5f0f\nqemu-img create -f qcow2 sys.qcow2 2g\n")),Object(i.b)("h3",{id:"\u7f51\u7edc\u5757\u8bbe\u5907"},"\u7f51\u7edc\u5757\u8bbe\u5907"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"qemu-nbd"),Object(i.b)("li",{parentName:"ul"},"\u5728 linux \u4e0b\u4e00\u822c\u4f1a\u6302\u8f7d\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"/dev/ndb*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/sheepdog/sheepdog/"}),"https://github.com/sheepdog/sheepdog/")),Object(i.b)("li",{parentName:"ul"},"iSCSI LUN")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 \u8fdc\u7a0b NBD \u534f\u8bae\nqemu-system-i386 linux.img -hdb nbd://my_nbd_server.mydomain.org:1024/\n# \u4f7f\u7528 unix socket\nqemu-system-i386 linux.img -hdb nbd+unix://?socket=/tmp/my_socket\n\n# \u66b4\u9732\u4e3a unix socket\nqemu-nbd --socket=/tmp/my_socket my_disk.qcow2\n# \u5141\u8bb8\u591a\u4e2a\u5ba2\u6237\u7aef\u5171\u4eab\nqemu-nbd --socket=/tmp/my_socket --share=2 my_disk.qcow2\n# \u540c\u65f6\u4f7f\u7528\nqemu-system-i386 linux1.img -hdb nbd+unix://?socket=/tmp/my_socket\nqemu-system-i386 linux2.img -hdb nbd+unix://?socket=/tmp/my_socket\n# \u5982\u679c\u670d\u52a1\u7aef\u6307\u5b9a\u4e86\u540d\u5b57, \u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u65f6\u4e5f\u9700\u8981\u6307\u5b9a\u540d\u5b57\nqemu-system-i386 -cdrom nbd://localhost/debian-500-ppc-netinst\nqemu-system-i386 -cdrom nbd://localhost/openSUSE-11.1-ppc-netinst\n")),Object(i.b)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.linux-kvm.org/page/Networking"}),"https://www.linux-kvm.org/page/Networking"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u652f\u6301\u7684 NIC\nqemu-system-x86_64 -net nic,model=help\n# \u6700\u7b80\u5355\u7684\u7f51\u7edc\n# 10.0.2.0/24 \u9ed8\u8ba4\u8d77\u59cb\u5730\u5740 x.x.x.15-13, \u4e3b\u673a\u5730\u5740 x.x.x.2 dns x.x.x.3\n# \u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u865a\u62df\u673a\nqemu-system-x86_64 -hda vdisk.img -cdrom alpine-standard-3.6.2-x86_64.iso -net nic -net user\n\n# \u4f7f\u7528 tap \u53ef\u4ee5\u521b\u5efa\u865a\u62df\u7f51\u7edc\u8bbe\u5907\u4f7f\u4e3b\u673a\u4e92\u901a\nqemu-system-x86_64 -m 512M -net nic -net tap,script=no,downscript=no\n# \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u5b57\nqemu-system-x86_64 -m 512M -net nic -net tap,ifname=tap0,script=no,downscript=no\n# -net nic,model=virtio -net tap,ifname=tap0,script=no,downscript=no\n# \u786e\u4fdd\u6743\u9650\n# ip tuntap add dev tap0 mode tap group netdev\n# \u6216\u8005\u4f7f\u7528 tunctl \u63a7\u5236\n# tunctl -p -t tap0 -u $USER\n# tunctl -t tap0 -g netdev\n")),Object(i.b)("h2",{id:"\u5916\u8bbe"},"\u5916\u8bbe"),Object(i.b)("h3",{id:"usb"},"USB"),Object(i.b)("h3",{id:"pci"},"PCI"),Object(i.b)("h2",{id:"\u7528\u6237\u7a7a\u95f4\u865a\u62df"},"\u7528\u6237\u7a7a\u95f4\u865a\u62df"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"qemu-*")),Object(i.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301 Linix, BSD"),Object(i.b)("li",{parentName:"ul"},"\u7279\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u8c03\u7528\u8f6c\u6362"),Object(i.b)("li",{parentName:"ul"},"POSIX \u4fe1\u53f7\u5904\u7406"),Object(i.b)("li",{parentName:"ul"},"\u7ebf\u7a0b")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# -L / \u544a\u8bc9\u52a8\u6001\u8fde\u63a5\u5668\u4ece / \u5f00\u59cb\u641c\u7d22\nqemu-i386 -L / /bin/ls\n# \u4e5f\u53ef\u4ee5\u518d qemu \u4e2d\u5141\u8bb8 qemu\nqemu-i386 -L / qemu-i386 -L / /bin/ls\n\n# \u5728\u975e x86 CPU \u4e0a\u8fd0\u884c\n# \u81f3\u5c11\u9700\u8981 x86 \u7684 glibc(qemu-runtime-i386-*)\n# \u786e\u4fdd\u672a\u8bbe\u7f6e LD_LIBRARY_PATH\nunset LD_LIBRARY_PATH\n# \u6267\u884c\u9884\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u6587\u4ef6\nqemu-i386 tests/i386/ls\n\n# \u4f7f\u7528 Wine\n# \u786e\u4fdd\u5b89\u88c5 wine(qemu-*-i386-wine)\n# \u81f3\u5c11\u5148\u786e\u4fdd\u6709 i386\nqemu-i386 /usr/local/qemu-i386/bin/ls-i386\n# \u914d\u7f6e\n# \u914d\u7f6e\u4f4d\u4e8e ~/.wine, \u4e4b\u524d\u7684\u914d\u7f6e\u4f1a\u88ab\u5b58\u4e8e ~/.wine.org\n/usr/local/qemu-i386/bin/wine-conf.sh\nqemu-i386 /usr/local/qemu-i386/wine/bin/wine \\\n          /usr/local/qemu-i386/wine/c/Program\\ Files/putty.exe\n")),Object(i.b)("h2",{id:"\u663e\u793a"},"\u663e\u793a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.spice-space.org"}),"https://www.spice-space.org")),Object(i.b)("li",{parentName:"ul"},"vnc")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install tiger-vnc\n\n# 5900\nqemu-system-x86_64 -vga std -nographic -vnc :0\nvncviewer :0\n\n# 5901\nqemu-system-x86_64 sys.vhd-display vnc=:1\nvncviewer :1\n\n\n")))}m.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),m=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=m(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,O=u["".concat(r,".").concat(s)]||u[s]||o[s]||i;return n?l.a.createElement(O,b(b({ref:t},p),{},{components:n})):l.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<i;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);