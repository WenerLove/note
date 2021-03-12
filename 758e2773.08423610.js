(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{407:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),c=(r(0),r(812)),a={title:"Docker FAQ"},i={unversionedId:"devops/docker/docker-faq",id:"devops/docker/docker-faq",isDocsHomePage:!1,title:"Docker FAQ",description:"\u5728 docker \u4e2d\u4f7f\u7528 docker",source:"@site/notes/devops/docker/docker-faq.md",slug:"/devops/docker/docker-faq",permalink:"/notes/devops/docker/docker-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-faq.md",version:"current",sidebar:"docs",previous:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/docker-cookbook"},next:{title:"Docker \u7f51\u7edc",permalink:"/notes/devops/docker/docker-network"}},l=[{value:"\u5728 docker \u4e2d\u4f7f\u7528 docker",id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker",children:[]},{value:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",children:[]},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",children:[]},{value:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",children:[]},{value:"No swap limit support",id:"no-swap-limit-support",children:[]},{value:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",children:[]}],p={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5728-docker-\u4e2d\u4f7f\u7528-docker"},"\u5728 docker \u4e2d\u4f7f\u7528 docker"),Object(c.b)("p",null,"\u76f4\u63a5\u6620\u5c04 /var/run/docker.sock"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock --name box wener/demo:test\n")),Object(c.b)("h2",{id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"},"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\u6dfb\u52a0 CAP_NET_BIND_SERVICE \u5373\u53ef\uff0c\u4f46\u662f\u5bf9\u975e root \u65e0\u6548"),Object(c.b)("li",{parentName:"ul"},"\u8bbe\u7f6e sysctl ",Object(c.b)("inlineCode",{parentName:"li"},"net.ipv4.ip_unprivileged_port_start=0")," \u5373\u53ef",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u9700\u8981 kernel 4.11+"),Object(c.b)("li",{parentName:"ul"},"ubuntu 18+")))),Object(c.b)("h2",{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker stop $(docker ps -aq)\n")),Object(c.b)("h2",{id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"},"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"/var/lib/docker \u5bf9 docker \u6027\u80fd\u5f71\u54cd\u8f83\u5927")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'# \u505c\u6b62\u670d\u52a1\u8fc1\u79fb\u6570\u636e\nservice docker stop\nmkdir -p /data/docker\nsudo rsync -aP /var/lib/docker/ /data/docker/\n\n# \u6dfb\u52a0 data-root \u914d\u7f6e\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\n\n# \u542f\u52a8\nservice docker start\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n')),Object(c.b)("h2",{id:"no-swap-limit-support"},"No swap limit support"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5185\u6838\u53c2\u6570 ",Object(c.b)("inlineCode",{parentName:"li"},"cgroup_enable=memory swapaccount=1")),Object(c.b)("li",{parentName:"ul"},"\u727a\u7272 1% \u7684\u5185\u5bb9\uff0c10% \u6027\u80fd\u6765\u652f\u6301\u5185\u5b58\u548c\u4ea4\u6362\u533a\u5ba1\u8ba1"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c ",Object(c.b)("inlineCode",{parentName:"li"},"cgroup_enable=memory")," \u4f1a\u5f00\u542f\uff0c\u4f46 ",Object(c.b)("inlineCode",{parentName:"li"},"swapaccount")," \u4e0d\u5f00"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.docker.com/config/containers/resource_constraints/"},"Runtime options with Memory, CPUs, and GPUs")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities"},"Your kernel does not support cgroup swap limit capabilities"))))),Object(c.b)("h2",{id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"},"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"HOSTPORT=80\nCONTAINERIP=172.16.0.2\n\niptables -t nat -A DOCKER -p tcp --dport ${HOSTPORT} -j DNAT --to-destination ${CONTAINERIP}:${HOSTPORT}\niptables -t nat -A POSTROUTING -j MASQUERADE -p tcp --source ${CONTAINERIP} --destination ${CONTAINERIP} --dport ${HOSTPORT}\niptables -A DOCKER -j ACCEPT -p tcp --destination ${CONTAINERIP} --dport ${HOSTPORT}\n")))}d.isMDXComponent=!0},812:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||s[b]||c;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);