(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{837:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(914)),c={title:"crontab"},l={unversionedId:"ops/admin/crontab",id:"ops/admin/crontab",isDocsHomePage:!1,title:"crontab",description:"Tips",source:"@site/notes/ops/admin/crontab.md",slug:"/ops/admin/crontab",permalink:"/notes/ops/admin/crontab",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/crontab.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u90e8\u7f72\u6a21\u5f0f\u601d\u8003",permalink:"/notes/howto/voip/astrisk-deploy-mode-think"},next:{title:"htop",permalink:"/notes/ops/admin/htop"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1",id:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1",children:[]},{value:"macOS",id:"macos",children:[]},{value:"\u5e38\u89c1\u6e05\u7406",id:"\u5e38\u89c1\u6e05\u7406",children:[]},{value:"help",id:"help",children:[]}],b={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://crontab.guru"},"crontab.guru"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65f6\u95f4\u7f16\u8f91\u5668")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u63a8\u8350\u4f7f\u7528\u4e00\u4e2a\u81ea\u5df1\u7684 crontab \u6587\u4ef6, \u8fd9\u6837\u4fbf\u4e8e\u7ba1\u7406\nnano ~/.crontab\ncrontab ~/.crontab\ncrontab -l\n\n# \u91cd\u5b9a\u5411\u65e5\u5fd7\nnano /etc/rsyslog.d/50-default.conf\n# \u6dfb\u52a0\n# cron.*\nsudo service rsyslog restart\n\n# \u6216\u8005\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 sysylog \u4e2d\u627e\ntail -f /var/log/syslog | grep CRON\n\n# \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06\u4efb\u52a1\u8bbe\u7f6e\u4e3a\u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21,\u7136\u540e\u5c06 crond \u5728\u524d\u53f0\u6267\u884c,\u6d4b\u8bd5\u65e5\u5fd7\u8f93\u51fa\ncrond -nx test\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# \u7b80\u5355\u7684\u670d\u52a1\u81ea\u52a8\u91cd\u542f\n# \u7136\u540e\u6dfb\u52a0\u5230 @reboot \u89c4\u5219\u4e2d\u5c31\u53ef\u4ee5\nuntil myserver; do\n    echo \"Server 'myserver' crashed with exit code $?.  Respawning..\" >&2\n    sleep 1\ndone\n")),Object(o.b)("h2",{id:"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1"},"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e /etc/conf.d/crond",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'\u9ed8\u8ba4 CRON_OPTS="-c /etc/crontabs"'),Object(o.b)("li",{parentName:"ul"},'\u53ef\u4ee5\u4fee\u6539\u4e3a CRON_OPTS="-c /etc/crontabs -L /var/log/crond.log -l 6"'))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f4d\u7f6e /etc/crontabs"),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5468\u671f\u6027\u4efb\u52a1 /etc/crontabs/root",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"/var/spool/cron/root"))),Object(o.b)("li",{parentName:"ul"},"run-parts \u4f1a\u6267\u884c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u7684\u811a\u672c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7684 run-parts \u662f busybox \u81ea\u5e26\u7684, \u4e5f\u53ef\u4ee5\u989d\u5916\u5b89\u88c5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/run-parts"},"https://pkgs.alpinelinux.org/package/v3.7/main/x86_64/run-parts")),Object(o.b)("li",{parentName:"ul"},"\u68c0\u6d4b\u4e00\u4e2a\u76ee\u5f55\u4e0b\u6709\u54ea\u4e9b\u4f1a\u88ab\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"run-parts --test /etc/periodic/daily")),Object(o.b)("li",{parentName:"ul"},"\u91cc\u9762\u7684\u811a\u672c ",Object(o.b)("strong",{parentName:"li"},"\u4e0d\u8981")," \u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},".sh")," \u540e\u7f00\uff0c\u4e14\u786e\u4fdd\u53ef\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"li"},"chmod +x"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# do daily/weekly/monthly maintenance\n# min   hour    day month   weekday command\n*/15    *   *   *   *   run-parts /etc/periodic/15min\n0   *   *   *   *   run-parts /etc/periodic/hourly\n0   2   *   *   *   run-parts /etc/periodic/daily\n0   3   *   *   6   run-parts /etc/periodic/weekly\n0   5   1   *   *   run-parts /etc/periodic/monthly\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# \u6bcf\u4e24\u5468\u4e00\u6b21\n0 4 * * 6 test $((10#$(date +\\%W)\\%2)) -eq 1 && run-parts /etc/periodic/bi-weekly\n")),Object(o.b)("h2",{id:"macos"},"macOS"),Object(o.b)("p",null,"\u867d\u7136\u4e0d\u63a8\u8350\u4f7f\u7528 crontab, \u56e0\u4e3a\u5176\u529f\u80fd\u90fd\u5df2\u7ecf\u88ab lanuchd \u66ff\u4ee3,\u4f46\u7b80\u5355\u7684\u5de5\u4f5c\u8fd8\u662f crontab \u66f4\u7b80\u5355"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://stackoverflow.com/a/23880156/1870054"},"http://stackoverflow.com/a/23880156/1870054")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/ScheduledJobs.html"},"ScheduledJobs"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u5b9a\u5411 cron \u65e5\u5fd7\nsudo nano /etc/syslog.conf\n# \u6dfb\u52a0\n# cron.* /var/log/cron.log\n\n# \u91cd\u542f syslog\nsudo launchctl unload /System/Library/LaunchDaemons/com.apple.syslogd.plist\nsudo launchctl load /System/Library/LaunchDaemons/com.apple.syslogd.plist\n")),Object(o.b)("h2",{id:"\u5e38\u89c1\u6e05\u7406"},"\u5e38\u89c1\u6e05\u7406"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Docker GC\ndocker system prune --force\n\n# ZFS scrub\nzpoll scrub main\n")),Object(o.b)("h2",{id:"help"},"help"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ crond --help\nBusyBox v1.27.2 (2017-11-28 16:17:30 GMT) multi-call binary.\n\nUsage: crond -fbS -l N -d N -L LOGFILE -c DIR\n\n    -f  Foreground\n    -b  Background (default)\n    -S  Log to syslog (default)\n    -l N    Set log level. Most verbose 0, default 8\n    -d N    Set log level, log to stderr\n    -L FILE Log to FILE\n    -c DIR  Cron dir. Default:/var/spool/cron/crontabs\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ crontab --help\nBusyBox v1.27.2 (2017-11-28 16:17:30 GMT) multi-call binary.\n\nUsage: crontab [-c DIR] [-u USER] [-ler]|[FILE]\n\n    -c  Crontab directory\n    -u  User\n    -l  List crontab\n    -e  Edit crontab\n    -r  Delete crontab\n    FILE    Replace crontab by FILE ('-': stdin)\n")))}p.isMDXComponent=!0},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?a.a.createElement(m,l(l({ref:n},b),{},{components:t})):a.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);