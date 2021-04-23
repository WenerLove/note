(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{113:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(8),o=(t(0),t(935)),c={title:"Verdaccio"},i={unversionedId:"service/repository/verdaccio",id:"service/repository/verdaccio",isDocsHomePage:!1,title:"Verdaccio",description:"verdaccio",source:"@site/notes/service/repository/verdaccio.md",slug:"/service/repository/verdaccio",permalink:"/notes/service/repository/verdaccio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/repository/verdaccio.md",version:"current",sidebar:"docs",previous:{title:"Awesome Repository",permalink:"/notes/service/repository/repository-awesome"},next:{title:"Service Awesome",permalink:"/notes/service/service-awesome"}},l=[{value:"docker",id:"docker",children:[]},{value:"minio",id:"minio",children:[]}],s={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"verdaccio"},"verdaccio"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u63d2\u4ef6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/verdaccio/monorepo/tree/9.x/plugins"},"https://github.com/verdaccio/monorepo/tree/9.x/plugins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Alexandre-io/verdaccio-ldap"},"Alexandre-io/verdaccio-ldap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/verdaccio-aws-s3-storage"},"verdaccio-aws-s3-storage"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 minio"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile"},"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/verdaccio-minio"},"verdaccio-minio"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e Minio SDK"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile"},"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile")))))),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4873"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://juejin.cn/post/6844904193501691917"},"Verdaccio\u79c1\u4ed3\u642d\u5efa"))))),Object(o.b)("h2",{id:"docker"},"docker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"/verdaccio/storage/htpasswd"),Object(o.b)("li",{parentName:"ul"},"/verdaccio/conf/config.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"htpasswd -bc htpasswd admin admin\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  htpasswd:\n    file: ./htpasswd\n\nuplinks:\n  npmjs:\n    url: https://registry.npmjs.org/\n")),Object(o.b)("h2",{id:"minio"},"minio"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"barolab/verdaccio")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM verdaccio/verdaccio:4\nUSER root\nENV NODE_ENV=production\nRUN yarn global add verdaccio-minio && \\\n  ln -s /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio /verdaccio/plugins/verdaccio-minio  && \\\n  chown -R 10001 /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio && \\\n  chown -R 10001 /verdaccio/plugins\n\nUSER verdaccio\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"/verdaccio/conf/config.yaml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# This points to the plugin folder above\nplugins: /verdaccio/plugins\n# This is mandatory, otherwise verdaccio won't boot\nstorage: /verdaccio/storage/data\n\nstore:\n  minio:\n    port: 9000\n    endPoint: minio.minio.svc.cluster.local\n    accessKey: this-is-not-so-secret\n    secretKey: this-is-not-so-secret\n    useSSL: false\n    region: eu-west-1\n    bucket: 'npm'\n    retries: 3\n    delay: 50\n")))}p.isMDXComponent=!0},935:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return t?a.a.createElement(d,i(i({ref:r},s),{},{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);