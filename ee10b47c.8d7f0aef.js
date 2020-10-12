(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{520:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(2),o=n(7),c=(n(0),n(556)),a={id:"k3d",title:"K3S in Docker"},i={unversionedId:"devops/kubernetes/k3d",id:"devops/kubernetes/k3d",isDocsHomePage:!1,title:"K3S in Docker",description:"K3S in Docker",source:"@site/contents/tricks/devops/kubernetes/k3d.md",slug:"/devops/kubernetes/k3d",permalink:"/notes/devops/kubernetes/k3d",version:"current",sidebar:"docs",previous:{title:"K3S",permalink:"/notes/devops/kubernetes/k3s"},next:{title:"K8S \u8bcd\u6c47\u8868",permalink:"/notes/devops/kubernetes/k8s-glossary"}},s=[{value:"Tips",id:"tips",children:[]},{value:"macOS",id:"macos",children:[]}],u={rightToc:s};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"k3s-in-docker"},"K3S in Docker"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/rancher/k3d"}),"rancher/k3d")," - \u5bb9\u5668\u8fd0\u884c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e4b\u524d\u7684 ",Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/zeerorg/k3s-in-docker"}),"zeerorg/k3s-in-docker")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/blob/master/docker-compose.yml"}),"rancher/k3s/docker-compose.yml"))))),Object(c.b)("h2",{id:"macos"},"macOS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53ef\u8fd0\u884c K3d (K3s in Docker) \u548c docker-compose")),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"brew install k3d\n\n# docker-compose.yaml \u4f4d\u4e8e https://github.com/rancher/k3s\ndocker-compose up --scale agent=3\n\n# kubeconfig is written to current dir\nkubectl --kubeconfig kubeconfig.yaml get node\n\n# \u542f\u52a8 server\ndocker run --rm -it \\\n  --tmpfs /run --tmpfs /var/run \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  rancher/k3s k3s server --docker\n\n\n# \u53ea\u542f\u52a8 agent\n# docker-compose up agent \n# \u6216\u8005\u76f4\u63a5 docker \u542f\u52a8\nsudo docker run \\\n  -d --tmpfs /run \\\n  --tmpfs /var/run \\\n  -e K3S_URL=${SERVER_URL} \\\n  -e K3S_TOKEN=${NODE_TOKEN} \\\n  --privileged rancher/k3s\n")))}p.isMDXComponent=!0},556:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,m=l["".concat(a,".").concat(d)]||l[d]||b[d]||c;return n?o.a.createElement(m,i(i({ref:r},u),{},{components:n})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);