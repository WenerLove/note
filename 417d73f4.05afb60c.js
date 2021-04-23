(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{297:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(8),c=(r(0),r(935)),o={id:"docker-storage",title:"Docker \u5b58\u50a8"},l={unversionedId:"devops/docker/docker-storage",id:"devops/docker/docker-storage",isDocsHomePage:!1,title:"Docker \u5b58\u50a8",description:"Storage",source:"@site/notes/devops/docker/docker-storage.md",slug:"/devops/docker/docker-storage",permalink:"/notes/devops/docker/docker-storage",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-storage.md",version:"current",sidebar:"docs",previous:{title:"Docker \u4ed3\u5e93",permalink:"/notes/devops/docker/docker-registry"},next:{title:"Docker Swarm",permalink:"/notes/devops/docker/docker-swarm"}},b=[{value:"Tips",id:"tips",children:[]},{value:"devicemapper",id:"devicemapper",children:[]},{value:"cleanup",id:"cleanup",children:[]}],p={toc:b};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"storage"},"Storage"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/"},"Docker storage drivers"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"/var/lib/docker/")," - \u9ed8\u8ba4\u5b58\u50a8\u76ee\u5f55"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"<\u5b58\u50a8\u9a71\u52a8>")," - \u5b58\u50a8\u539f\u6570\u636e"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u66f4\u6362\u5b58\u50a8\u9a71\u52a8\u4f1a\u5bfc\u81f4\u6240\u6709\u7684\u672c\u5730\u7684\u5bb9\u5668\u65e0\u6cd5\u8bbf\u95ee. \u53ef\u4ee5\u8003\u8651 ",Object(c.b)("inlineCode",{parentName:"p"},"docker save")," \u7136\u540e push \u5230\u4ed3\u5e93, \u8fd9\u6837\u907f\u514d\u540e\u9762\u518d\u6b21\u521b\u5efa"))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u9a71\u52a8"),Object(c.b)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u540e\u7aef\u6587\u4ef6\u7cfb\u7edf"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"overlay, overlay2"),Object(c.b)("td",{parentName:"tr",align:null},"ext4, xfs")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aufs"),Object(c.b)("td",{parentName:"tr",align:null},"ext4, xfs")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"devicemapper"),Object(c.b)("td",{parentName:"tr",align:null},"direct-lvm")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"btrfs"),Object(c.b)("td",{parentName:"tr",align:null},"btrfs")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"zfs"),Object(c.b)("td",{parentName:"tr",align:null},"zfs")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"aufs, overlay, overlay2",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6587\u4ef6\u7ea7\u522b\u64cd\u4f5c, \u80fd\u591f\u5bf9\u5185\u5b58\u66f4\u52a0\u6709\u6548\u7684\u5229\u7528, \u4f46\u5728\u8f83\u9ad8\u7684\u5de5\u4f5c\u538b\u529b\u4e0b, \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6587\u4ef6\u589e\u957f\u7279\u522b\u5927"))),Object(c.b)("li",{parentName:"ul"},"devicemapper, btrfs, zfs",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5757\u7ea7\u522b\u64cd\u4f5c, \u5bf9\u4e8e\u5199\u4e3a\u4e3b\u7684\u5de5\u4f5c\u73af\u5883\u4f1a\u8868\u73b0\u7684\u66f4\u597d"))),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5f88\u591a\u5c0f\u6587\u4ef6\u5199\u5165\u6216\u6709\u5f88\u591a\u5c42\u7684\u6587\u4ef6\u7cfb\u7edf, overlay \u53ef\u80fd\u6bd4 overlay2 \u8868\u73b0\u7684\u66f4\u597d"),Object(c.b)("li",{parentName:"ul"},"btrfs \u548c zfs \u9700\u8981\u8f83\u591a\u7684\u5185\u5b58"),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e PaaS \u8fd9\u6837\u9ad8\u5f3a\u5ea6\u7684\u5de5\u4f5c\u73af\u5883, zfs \u4f1a\u662f\u6bd4\u8f83\u597d\u7684\u9009\u62e9"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u7a33\u5b9a\u6027\u8981\u6c42\u66f4\u9ad8, \u53ef\u9009\u62e9 aufs, overlay, devicemapper")),Object(c.b)("h2",{id:"devicemapper"},"devicemapper"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/storagedriver/device-mapper-driver/"},"https://docs.docker.com/storage/storagedriver/device-mapper-driver/")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"/etc/docker/daemon.json")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "storage-driver": "devicemapper"\n}\n')),Object(c.b)("h2",{id:"cleanup"},"cleanup"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://gist.github.com/bastman/5b57ddb3c11942094f8d0a97d461b430"},"Docker - How to cleanup (unused) resources"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"docker volume prune -f\ndocker system prune -a -f\n")))}i.isMDXComponent=!0},935:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=i(r),s=n,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||c;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);