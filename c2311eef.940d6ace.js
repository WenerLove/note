(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},883:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1107)),o={title:"Wiki.js"},s={unversionedId:"service/cms/wikijs",id:"service/cms/wikijs",isDocsHomePage:!1,title:"Wiki.js",description:"- Requarks/wiki \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/cms/wikijs.md",slug:"/service/cms/wikijs",permalink:"/notes/service/cms/wikijs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/cms/wikijs.md",version:"current",sidebar:"docs",previous:{title:"Strapi",permalink:"/notes/service/cms/strapi"},next:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/office"}},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Requarks/wiki"},"Requarks/wiki")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"AGPL-3.0"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 Markdown \u7684 Wiki"),Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u8bed\u96c0\u4f46\u662f\u652f\u6301 Markdown"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u6587\u4ef6\uff0c\u652f\u6301\u56fe\u7247\uff0c\u652f\u6301 Git \u540e\u7aef\uff0c\u652f\u6301\u641c\u7d22"),Object(i.b)("li",{parentName:"ul"},"Nodejs 10.12+"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 MySQL, MariaDB, PostgreSQL, MSSQL or SQLite3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 PostgreSQL"),Object(i.b)("li",{parentName:"ul"},"\u591a\u526f\u672c\u53ea\u652f\u6301 PostgreSQL"))))),Object(i.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"2 CPU 1G \u5185\u5b58"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.requarks.io/auth"},"\u6388\u6743"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CAS\u3001LDAP/AD\u3001SAML 2.0\u3001Local")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# Docker \u5b89\u88c5\n# https://docs.requarks.io/install/docker\n# SQLite \u542f\u52a8\ndocker run --rm -it \\\n  -p 8080:3000 \\\n  -v $PWD/wiki:/data \\\n  -e "DB_TYPE=sqlite" \\\n  -e "DB_FILEPATH=/data/wiki.sqlite" \\\n  --name wiki requarks/wiki:2\n\n# PG \u542f\u52a8\ndocker run -d --restart unless-stopped \\\n  -p 8080:3000 \\\n  -e "DB_TYPE=postgres"\n  -e "DB_HOST=db"\n  -e "DB_PORT=5432"\n  -e "DB_USER=wikijs"\n  -e "DB_PASS=wikijsrocks"\n  -e "DB_NAME=wiki" \\\n  --name wiki requarks/wiki:2\n')),Object(i.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.requarks.io/install/config"},"Configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Requarks/wiki/blob/dev/config.sample.yml"},"config.sample.yml"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"bindIP: 0.0.0.0\nport: 3000\n# error, warn, info, verbose, debug, silly\nlogLevel: info\nuploads:\n  # \u9ed8\u8ba4 5 MB\n  maxFileSize: 5242880\n  maxFiles: 10\n\n# \u79bb\u7ebf\u6a21\u5f0f - \u907f\u514d\u4e0b\u8f7d\u66f4\u65b0\noffline: true\n\n# HA \u6a21\u5f0f - \u9700\u8981 PostgreSQL\nha: true\n\n# \u4e34\u65f6\u6570\u636e\u76ee\u5f55\ndataPath: ./data\n---\ndb:\n  type: postgres\n  host: localhost\n  port: 5432\n  user: wikijs\n  pass: wikijsrocks\n  db: wiki\n  # SQLite\n  # type: sqlite\n  # storage: db.sqlite\n# DB \u8fde\u63a5\u6c60\npool:\n  min: 2\n  max: 10\n\n---\nssl:\n  enabled: true\n  port: 3443\n  provider: custom\n\n  format: pem\n  key: path/to/key.pem\n  cert: path/to/cert.pem\n  passphrase: null\n  dhparam: null\n\n  # format: pfx\n  # pfx: path/to/cert.pfx\n---\n# ACME\nssl:\n  enabled: true\n  port: 3443\n  provider: letsencrypt\n\n  domain: wiki.yourdomain.com\n  subscriberEmail: admin@example.com\n")),Object(i.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/Requarks/wiki/tree/dev/dev/helm"},"dev/helm"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"values.yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"image:\n  # \u9ed8\u8ba4\u662f latest\n  tag: latest\npostgresql:\n  # \u4f7f\u7528\u5df2\u6709\u7684\n  enabled: false\n  postgresqlHost:\n  postgresqlPort: 5432\n  postgresqlDatabase: wiki\n  postgresqlUser: postgres\n  postgresqlPassword:\n  # \u5b58\u50a8 Password \u7684 secret\n  existingSecret:\n  secretKey: postgresql-password\n")))}p.isMDXComponent=!0}}]);