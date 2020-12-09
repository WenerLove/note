(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{382:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(2),r=t(7),i=(t(0),t(688)),s={id:"alpine",title:"Alpine"},l={unversionedId:"os/alpine/alpine",id:"os/alpine/alpine",isDocsHomePage:!1,title:"Alpine",description:"Tips",source:"@site/notes/os/alpine/README.md",slug:"/os/alpine/alpine",permalink:"/notes/os/alpine/alpine",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/README.md",version:"current",sidebar:"docs",previous:{title:"Dokku",permalink:"/notes/devops/xaas/paas/dokku"},next:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u5236\u4f5c\u78c1\u76d8\u955c\u50cf",id:"\u5236\u4f5c\u78c1\u76d8\u955c\u50cf",children:[]}]},{value:"Mips",id:"mips",children:[]},{value:"USB",id:"usb",children:[]},{value:"APKINDEX",id:"apkindex",children:[]},{value:"Edge",id:"edge",children:[]},{value:"Kernal",id:"kernal",children:[]},{value:"Mirror",id:"mirror",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u624b\u52a8\u6307\u5b9a DNS",id:"\u624b\u52a8\u6307\u5b9a-dns",children:[]}]}],p={rightToc:c};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ARCH - \u67b6\u6784\u652f\u6301",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"x86_64"),Object(i.b)("li",{parentName:"ul"},"x86"),Object(i.b)("li",{parentName:"ul"},"armhf"),Object(i.b)("li",{parentName:"ul"},"armv7"),Object(i.b)("li",{parentName:"ul"},"aarch64"),Object(i.b)("li",{parentName:"ul"},"s390x"),Object(i.b)("li",{parentName:"ul"},"mips64 - ",Object(i.b)("strong",{parentName:"li"},"mips64be")),Object(i.b)("li",{parentName:"ul"},"ppc64le"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://adelielinux.org/"}),"adelielinux"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e Alpine \u9488\u5bf9\u684c\u9762\u7684\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.foxkit.us/groups/adelie"}),"https://code.foxkit.us/groups/adelie")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://postmarketos.org/"}),"https://postmarketos.org/"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e Alpine \u7684\u79fb\u52a8\u64cd\u4f5c\u7cfb\u7edf"))),Object(i.b)("li",{parentName:"ul"},"GitLab \u4e0a\u5173\u4e8e ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/issues?state=closed&label_name%5B%5D=T-Security"}),"\u5b89\u5168\u7684\u95ee\u9898")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jessfraz/apk-file"}),"jessfraz/apk-file"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Search file in package from command line")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u8ba1\u7b97\u5757\u8bbe\u5907\u5bb9\u91cf\necho $(blockdev --getsize64 /dev/sdb1)/1024/1024 | bc -l\n\n\napk add shadow\napk add bash\n# \u66f4\u6362 shell \u4e3a bash\nchsh root -s /bin/bash\n\n\n# \u5b89\u88c5 neofetch\napk add --no-cache -X http://mirrors.aliyun.com/alpine/edge/community neofetch\n# \u6709\u4e9b\u73af\u5883\u4e0b\u6ca1\u6709 neofetch \u53ef\u4ee5\u7528screenfetch\napk add --no-cache -X http://mirrors.aliyun.com/alpine/edge/testing screenfetch\n")),Object(i.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/alpinelinux/alpine-conf"}),"alpinelinux/alpine-conf"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u5236\u4f5c\u542f\u52a8\u76d8\ndd if=alpine.iso of=/dev/sdx\n\n\n\n# https://wiki.alpinelinux.org/wiki/Alpine_setup_scripts\n# \u7edf\u4e00\u521d\u59cb\u5316\n# \u5206\u4e3a keymap,hostname,interfaces,dns,timezone,proxy,disk,ntp,cache,lbu,apkrepos \u7b49\nsetup-alpine\n\n# \u4e5f\u53ef\u4ee5\u5206\u5f00\u8bbe\u7f6e, \u5efa\u8bae\u5148\u8bbe\u7f6e\u7f51\u5361\u548c sshd, \u90a3\u4e48\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u5c31\u53ef\u4ee5\u5728\u8fdc\u7a0b\u64cd\u4f5c\n# \u7f51\u5361\u5efa\u8bae\u4f7f\u7528\u5f15\u5bfc\u8fdb\u884c\u8bbe\u7f6e, \u5426\u5219\u9700\u8981\u624b\u52a8\u5199\u914d\u7f6e\u6587\u4ef6\nsetup-interfaces\n# \u8bbe\u7f6e\u5b8c\u7f51\u5361\u540e\u53ef\u80fd\u9700\u8981\u91cd\u542f\u7f51\u7edc\u670d\u52a1\nservice networking restart\nsetup-sshd -c openssh\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u5141\u8bb8 root \u8fdc\u7a0b\u767b\u9646\necho \'PermitRootLogin yes\' >> /etc/ssh/sshd_config\nservice sshd restart\n# \u8bbe\u7f6e\u4e00\u4e2a\u5bc6\u7801, \u4ee5\u4fbf\u4e8e\u8fdc\u7a0b\u767b\u9646\npasswd\n# \u6ce8\u610f: \u5982\u679c\u8fdc\u7a0b\u767b\u9646\u8bf4\u5bc6\u7801\u5931\u6548, \u53ef\u80fd\u662f\u65f6\u95f4\u95ee\u9898, \u5148\u5728\u670d\u52a1\u5668\u4e0a\u5f00\u542f ntp \u540c\u6b65\u65f6\u95f4\n# \u7acb\u5373\u540c\u6b65\u65f6\u95f4 ntpd -dn -N -p pool.ntp.org\n\n# \u8fdc\u7a0b\u8bc1\u4e66\u914d\u7f6e\u597d\u8fc7\u540e\u53ef\u4ee5\u8003\u8651\u5173\u95ed\u8fdc\u7a0b\u5bc6\u7801\u767b\u9646\necho \'PasswordAuthentication no\' >> /etc/ssh/sshd_config\nservice sshd restart\n\n# \u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u8fdc\u7a0b\u64cd\u4f5c\u4e86\nsetup-hostname -n alpine-test\n# \u4f7f\u8bbe\u7f6e\u7684\u4e3b\u673a\u540d\u751f\u6548\n/etc/init.d/hostname --quiet restart\n\nsetup-keymap us us\nsetup-ntp -c busybox\nsetup-timezone -z Asia/Shanghai\n\n# \u6dfb\u52a0\u4ed3\u5e93\n# \u5b89\u88c5\u65f6\u7684\u5b89\u88c5\u5305\u4f4d\u4e8e /media/sdb/apks/\necho "http://mirrors.aliyun.com/alpine/v$(sed -n \'s/\\.\\d\\+$//p\' /etc/alpine-release)/main\nhttp://mirrors.aliyun.com/alpine/v$(sed -n \'s/\\.\\d\\+$//p\' /etc/alpine-release)/community" >> /etc/apk/repositories\n\n# testing \u6709\u4e9b\u5c1a\u672a\u53d1\u5e03\u7684, \u6709\u65f6\u5019\u4f1a\u7528\u5230\necho "@testing http://mirrors.aliyun.com/alpine/edge/testing" >> /etc/apk/repositories\n\n# \u6216\u8005\u76f4\u63a5\u7528 edge\necho "http://mirrors.aliyun.com/alpine/edge/main\nhttp://mirrors.aliyun.com/alpine/edge/community\n@testing http://mirrors.aliyun.com/alpine/edge/testing" >> /etc/apk/repositories\n\napk update\n\n\n# \u521b\u5efa\u56de\u7b54\u6587\u4ef6, \u7136\u540e\u53ef\u76f4\u63a5\u7f16\u8f91\nsetup-alpine -c ans\n# \u4f7f\u7528\u56de\u7b54\u6587\u4ef6\u8fdb\u884c\u521d\u59cb\u5316\nsetup-alpine -f ans\n\n# \u5b58\u50a8\u8bbe\u7f6e\n# =======\n# \u5982\u679c\u53ea\u662f\u60f3\u76f4\u63a5\u88c5\u5230 U \u76d8, \u90a3\u4e48\u81f3\u5c11\u9700\u8981 setup-interfaces, setup-sshd(\u4ece\u8fdc\u7a0b\u65b9\u4fbf\u64cd\u4f5c, \u53ef\u4ee5\u7c98\u8d34\u590d\u5236), \u6dfb\u52a0\u4ed3\u5e93, \u7136\u540e\u624d\u80fd setup-disk\n# \u56e0\u4e3a setup-disk \u9700\u8981\u5b89\u88c5\u4e00\u4e9b\u5305\n\n# -s 0 \u65e0\u4ea4\u6362\u533a\n# -v \u8be6\u7ec6\u8f93\u51fa\n# -m \u78c1\u76d8\u683c\u5f0f\n# -k \u5185\u6838 vanilla, varthardend, hardended\n# https://pkgs.alpinelinux.org/packages?name=linux-*&branch=v3.7&arch=x86_64&maintainer=Natanael+Copa\n# BOOT_SIZE 100m \u542f\u52a8\u5206\u533a\u5927\u5c0f, \u4e00\u822c\u5b89\u88c5\u5b8c\u6210\u540e 20m \u5de6\u53f3, \u9ed8\u8ba4\u4f1a\u7ed9 100\nsetup-disk -m sys -s 0 -v /dev/sda\n# apk add sfdisk e2fsprogs syslinux\n\n# \u5176\u4ed6\u7684\u53ef\u9009\u53c2\u6570\n# BOOTLOADER grub \u6216 syslinux\n# MBR=/usr/share/syslinux/mbr.bin\n# SYSROOT=/mnt\n# ERASE_DISKS=/dev/sda \u53ef\u4ee5\u8bbe\u7f6e\u6210\u5199\u5165\u7684\u78c1\u76d8, \u5c31\u4e0d\u4f1a\u518d\u8fdb\u884c\u8be2\u95ee\n# MKFS_OPTS_BOOT="-F" MKFS_OPTS_VAR="-F" mkfs \u91cd\u590d\u521b\u5efa\u4e0d\u8be2\u95ee\n# \u4f1a\u5b89\u88c5\u7684\u5305 \u6839\u636e fs \u7c7b\u578b\u4e0d\u540c\u4f1a\u6709\u4e0d\u540c\n# apk add --quiet sfdisk e2fsprogs\n# \u5b89\u88c5\u52a8\u4f5c\n# apk add --root /mnt --initdb --quiet --progress --update-cache --clean-protected --overlay-from-stdin --repository https://mirrors.ustc.edu.cn/alpine/v3.11/main --repository https://mirrors.ustc.edu.cn/alpine/v3.11/community alpine-base e2fsprogs openssh openssl syslinux acct linux-virt alpine-base\nROOTFS=btrfs BOOTFS=btrfs VARFS=btrfs DISKLABEL=alp-wen setup-disk -m sys -s 0 -v /dev/sda\n\n# \u4f7f\u7528 EFI\n# DISKLABEL \u4e3a gpt\n# BOOTLOADER \u4e3a grub\n# \u542f\u52a8\u5206\u533a\u683c\u5f0f\u4e3a vfat\nUSE_EFI=1 setup-disk -m sys -s 0 -v /dev/sdb\n')),Object(i.b)("p",null,"acct linux-$KERNEL_FLAVOR alpine-base"),Object(i.b)("p",null,"DISKLABEL=gpt\nUSE_EFI gpt,grub,boot-vfat"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'PREFIX=\n. "$PREFIX/lib/libalpine.sh"\n. "$PREFIX/lib/dasd-functions.sh"\n\nMBR=${MBR:-"/usr/share/syslinux/mbr.bin"}\nROOTFS=${ROOTFS:-ext4}\nBOOTFS=${BOOTFS:-ext4}\nVARFS=${VARFS:-ext4}\nBOOTLOADER=${BOOTLOADER:-syslinux}\nDISKLABEL=${DISKLABEL:-dos}\n# default location for mounted root\nSYSROOT=${SYSROOT:-/mnt}\n\n# machine arch\nARCH=$(apk --print-arch)\n')),Object(i.b)("h3",{id:"\u5236\u4f5c\u78c1\u76d8\u955c\u50cf"},"\u5236\u4f5c\u78c1\u76d8\u955c\u50cf"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u521b\u5efa 2g \u955c\u50cf\nqemu-img create -f qcow2 virt.qcow2 2g\n# \u4ece cd \u542f\u52a8\u5b89\u88c5\u5230\u955c\u50cf\u76d8\n# \u8f6c\u53d1 22 \u5230\u672c\u5730 2222\nqemu-system-x86_64 -cdrom alpine-virt-3.7.0-x86_64.iso -boot b -hda virt.qcow2 -net nic -net user,hostfwd=tcp::2222-:22\n\n# \u542f\u7528\u7f51\u7edc\necho -e '\\n\\n' | setup-interface\nrc-service networking restart\nrc-u\n# \u914d\u7f6e ssh \u8fdc\u7a0b\u767b\u9646\nsetup-sshd -c openssh\necho 'PermitRootLogin yes' >> /etc/ssh/sshd_config\nrc-service sshd restart\n# \u8bbe\u7f6e\u5bc6\u7801\u4e3a root\necho 'root:root' | chpasswd\n\n# \u53e6\u5916\u4e00\u4e2a\u7ec8\u7aef\u4ece\u672c\u5730 2222 \u8fdb\u5165\nssh root@127.0.0.1 -p 2222\necho \"http://mirrors.aliyun.com/alpine/v$(sed -n 's/\\.\\d\\+$//p' /etc/alpine-release)/main\nhttp://mirrors.aliyun.com/alpine/v$(sed -n 's/\\.\\d\\+$//p' /etc/alpine-release)/community\n@testing http://mirrors.aliyun.com/alpine/edge/testing\" >> /etc/apk/repositories\napk update\n# \u5b89\u88c5\u5230\u78c1\u76d8\nsetup-disk -m sys -s 0 /dev/sda\n# \u5b8c\u6bd5\u5173\u673a\npoweroff\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u4ece\u955c\u50cf\u542f\u52a8\nqemu-system-x86_64 -hda virt.qcow2 -net nic -net user,hostfwd=tcp::2222-:22\n\n# \u521d\u59cb\u5316\u914d\u7f6e\nsetup-hostname -n alpine-test\n/etc/init.d/hostname --quiet restart\nsetup-keymap us us\nsetup-ntp -c busybox\nsetup-timezone -z Asia/Shanghai\n# \u5e38\u7528\u5305\napk add nano busybox-extras\n\n# \u7ed3\u675f\u914d\u7f6e\npoweroff\n# \u538b\u7f29\u78c1\u76d8\n# \u53ef\u80fd\u4f1a\u6e05\u9664\u5206\u533a\u4e0a\u7684 boot \u4fe1\u606f\n# mv virt.qcow2 virt-backup.qcow2\n# qemu-img convert -O qcow2 virt-backup.qcow2 virt.qcow2\n\n# \u9644\u52a0\u914d\u7f6e - Bash\n# ============\n# \u9ed8\u8ba4\u4e3a ash, \u4fee\u6539\u4e3a bash\napk add shadow bash\necho root | chsh root -s /bin/bash\napk add bash-completion\nsource /etc/profile.d/bash_completion.sh\n\n# \u9644\u52a0\u914d\u7f6e - man\n# ============\n# \u9ed8\u8ba4\u6ca1\u6709 manpages\n# \u5b89\u88c5\u65f6\u5982\u679c\u9700\u8981\u6587\u6863, \u53ef\u4ee5\u5b89\u88c5 \u5305\u540d-doc\napk add --no-cache man man-pages mdocml-apropos less less-doc\nexport PAGER=less\n\n# \u9644\u52a0\u914d\u7f6e - Docker\n# ============\n# \u4e00\u822c\u955c\u50cf\u90fd\u53ef\u4ee5\u628a docker \u505a\u4e0a, \u56e0\u4e3a\u975e\u5e38\u5e38\u7528\napk add docker\nrc-update add docker\nrc-service docker restart\n# \u4fee\u6539\u955c\u50cf\ntee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://registry.docker-cn.com"]\n}\nEOF\nrc-service docker restart\n# \u9a8c\u8bc1\u914d\u7f6e\u6210\u529f\ndocker info\n\n# \u9644\u52a0\u914d\u7f6e - neofetch\n# ============\n# \u5feb\u901f\u7684\u67e5\u770b\u5f53\u524d\u73af\u5883\napk add --no-cache -X http://mirrors.aliyun.com/alpine/edge/community neofetch\n')),Object(i.b)("h2",{id:"mips"},"Mips"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://bugs.alpinelinux.org/issues/5643"}),"https://bugs.alpinelinux.org/issues/5643"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://patchwork.alpinelinux.org/bundle/Lochnair/mips-port/?state="}),"https://patchwork.alpinelinux.org/bundle/Lochnair/mips-port/?state="),"*"),Object(i.b)("p",null,"\u641c\u7d22 mips\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alpinelinux/aports/blob/master/main/gcc/APKBUILD"}),"https://github.com/alpinelinux/aports/blob/master/main/gcc/APKBUILD")),Object(i.b)("h2",{id:"usb"},"USB"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"usbutils-008-r0\n\nlibusb-1.0.20-r0\nlibusb-dev-1.0.20-r0\nlibusb-compat-dev-0.1.5-r3\n\nusbredir-doc-0.7-r2\nusbredir-0.7-r2\nusbredir-dev-0.7-r2\nusbredir-server-0.7-r2\n\nlibgusb-0.2.9-r1\nlibgusb-dev-0.2.9-r1\nlibgusb-doc-0.2.9-r1\n\nlibusb-compat-0.1.5-r3\nusb-modeswitch-doc-2.4.0-r0\nusbutils-doc-008-r0\n\nusb-modeswitch-2.4.0-r0\n\nusb-modeswitch-udev-2.4.0-r0\nhwdata-usb-0.282-r0\n")),Object(i.b)("h2",{id:"apkindex"},"APKINDEX"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://mirrors.aliyun.com/alpine/v3.6/main/x86_64/APKINDEX.tar.gz"}),"http://mirrors.aliyun.com/alpine/v3.6/main/x86_64/APKINDEX.tar.gz")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Apkindex_format"}),"https://wiki.alpinelinux.org/wiki/Apkindex_format")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Apk_spec"}),"https://wiki.alpinelinux.org/wiki/Apk_spec"))),Object(i.b)("h2",{id:"edge"},"Edge"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Edge"}),"https://wiki.alpinelinux.org/wiki/Edge")),Object(i.b)("li",{parentName:"ul"},'"edge" is under constant development so be careful using it in production. It is possible that bugs in "edge" could cause data loss or could break your system.')),Object(i.b)("h2",{id:"kernal"},"Kernal"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vanilla"),Object(i.b)("li",{parentName:"ul"},"virthardened"),Object(i.b)("li",{parentName:"ul"},"hardened",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Hardening_(computing)"}),"Hardening:wiki")),Object(i.b)("li",{parentName:"ul"},"Grsecurity"))),Object(i.b)("li",{parentName:"ul"},"\u5185\u6838\u76f8\u5173\u5305",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/packages?name=linux-*&branch=v3.6&repo=&arch=x86_64"}),"linux-*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/packages?name=*hardened&branch=v3.6&repo=&arch=x86_64"}),"*-hardened"))))),Object(i.b)("h2",{id:"mirror"},"Mirror"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/How_to_setup_a_Alpine_Linux_mirror"}),"How to setup a Alpine Linux mirror"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"rsync://rsync.alpinelinux.org/alpine/"),Object(i.b)("li",{parentName:"ul"},"rsync://mirrors.tuna.tsinghua.edu.cn/alpine/",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/tuna/rsync"}),"https://github.com/tuna/rsync"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u6dfb\u52a0 -r iso --limit-rate=2m\nwget -np -rNP repos --cut-dirs 1 -e robots=off -X latest-stable,edge http://mirrors.aliyun.com/alpine/\n\nrsync \\\n  --archive \\\n  --update \\\n  --hard-links \\\n  --delete \\\n  --delete-after \\\n  --delay-updates \\\n  --timeout=600 \\\n  --exclude="*" \\\n  --include=/mnt/disk2t/data/alpine/include.txt \\\n  rsync://rsync.alpinelinux.org/alpine/ mirror/\n\nrsync \\\n  --archive \\\n  --update \\\n  --hard-links \\\n  --delete \\\n  --delete-after \\\n  --delay-updates \\\n  --timeout=600 \\\n  rsync://mirrors.tuna.tsinghua.edu.cn/alpine/ mirror/\n\n# \u540c\u6b65\u5355\u4e2a\u76ee\u5f55\u5e76\u663e\u793a\u8fdb\u5ea6\nrsync \\\n  --archive \\\n  --update \\\n  --hard-links \\\n  --delete \\\n  --delete-after \\\n  --delay-updates \\\n  --timeout=600 \\\n  --progress \\\n  rsync://mirrors.tuna.tsinghua.edu.cn/alpine/v3.7/ mirror/v3.7/\n\n# \u53ef\u540c\u65f6\u540c\u6b65\u53e6\u5916\u4e00\u4e2a\u76ee\u5f55\u4ee5\u8fbe\u5230\u5e76\u53d1\n# --bwlimit=KBPS \u5e26\u5bbd\u9650\u5236\nrsync \\\n  --archive \\\n  --update \\\n  --hard-links \\\n  --delete \\\n  --delete-after \\\n  --delay-updates \\\n  --timeout=600 \\\n  --bwlimit=5000 \\\n  rsync://mirrors.tuna.tsinghua.edu.cn/alpine/v3.6/ mirror/v3.6/\n')),Object(i.b)("p",null,"rsync --archive --update --hard-links --delete --delete-after --delay-updates --timeout=600 ~/data/alpine/ ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:root@192.168.1.20"}),"root@192.168.1.20"),":/mnt/disk2t/data/alpine/"),Object(i.b)("p",null,"rsync --archive --update --hard-links --timeout=600 --progress --exclude-from .rsyncignore rsync://mirrors.tuna.tsinghua.edu.cn/alpine/ ./"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"/etc/periodic/hourly/alpine-mirror")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/sh\n# make sure we never run 2 rsync at the same time\nlockfile="/tmp/alpine-mirror.lock"\nif [ -z "$flock" ] ; then\n  exec env flock=1 flock -n $lockfile "$0" "$@"\nfi\n\nsrc=rsync://rsync.alpinelinux.org/alpine/ \ndest=/var/www/localhost/htdocs/alpine/\n\n# uncomment this to exclude old v2.x branches\n#exclude="--exclude v2.*"\n\nmkdir -p "$dest"\n/usr/bin/rsync \\\n        --archive \\\n        --update \\\n        --hard-links \\\n        --delete \\\n        --delete-after \\\n        --delay-updates \\\n        --timeout=600 \\\n        $exclude \\\n        "$src" "$dest"\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"chmod +x /etc/periodic/hourly/alpine-mirror\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"\u624b\u52a8\u6307\u5b9a-dns"},"\u624b\u52a8\u6307\u5b9a DNS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u76f4\u63a5\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/resolv.conf")),Object(i.b)("li",{parentName:"ol"},"\u4fee\u6539\u7f51\u7edc\u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"iface eth0 inet static\n    address 192.168.3.3\n    netmask 255.255.255.0\n    gateway 192.168.3.1\n    dns-search example.com\n    dns-nameservers 223.5.5.5 114.114.114.114\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u8be5\u547d\u4ee4\u6765\u6e90\u4e8e openresolv\nresolvconf -u\n")))}o.isMDXComponent=!0},688:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=o(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=o(t),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(m,l(l({ref:n},p),{},{components:t})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);