(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},760:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1107)),s={id:"k8s-nfs",title:"NFS"},i={unversionedId:"devops/kubernetes/storage/k8s-nfs",id:"devops/kubernetes/storage/k8s-nfs",isDocsHomePage:!1,title:"NFS",description:"Tips",source:"@site/notes/devops/kubernetes/storage/k8s-nfs.md",slug:"/devops/kubernetes/storage/k8s-nfs",permalink:"/notes/devops/kubernetes/storage/k8s-nfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/k8s-nfs.md",version:"current",sidebar:"docs",previous:{title:"Kubernates \u5b58\u50a8",permalink:"/notes/devops/kubernetes/storage/k8s-storage"},next:{title:"Local Path Provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-incubator/external-storage/tree/master/nfs"},"nfs-provisioner"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u63d0\u4f9b NFS \u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u4f46\u6570\u636e\u4e0d\u4f1a\u6301\u4e45\u5316"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"},"nfs-client"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f5c\u4e3a NFS \u5ba2\u6237\u7aef\u63d0\u4f9b\u5b58\u50a8 - \u9700\u8981\u73b0\u6709 NFS \u670d\u52a1"),Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u5b50\u76ee\u5f55 - ",Object(o.b)("inlineCode",{parentName:"li"},"${namespace}-${pvcName}-${pvName}"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# NFS Client\n# https://github.com/helm/charts/tree/master/stable/nfs-client-provisioner\nhelm install stable/nfs-client-provisioner --set nfs.server=x.x.x.x --set nfs.path=/exported/path\n")),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv0003\nspec:\n  capacity:\n    storage: 5Gi\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Recycle\n  storageClassName: slow\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n  nfs:\n    path: /tmp\n    server: 172.17.0.2\n")))}p.isMDXComponent=!0}}]);