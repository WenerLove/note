(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),c=(n(0),n(890)),a={title:"Ghost"},s={unversionedId:"service/cms/ghost",id:"service/cms/ghost",isDocsHomePage:!1,title:"Ghost",description:"Tips",source:"@site/notes/service/cms/ghost.md",slug:"/service/cms/ghost",permalink:"/notes/service/cms/ghost",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/cms/ghost.md",version:"current",sidebar:"docs",previous:{title:"Docusaurus",permalink:"/notes/service/cms/docusaurus"},next:{title:"Strapi",permalink:"/notes/service/cms/strapi"}},i=[{value:"Tips",id:"tips",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 2368"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u652f\u6301 SQLite \u548c MySQL 5.5, 5.6, or 5.7 (not >= 8.0)"),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u9898\u4f7f\u7528 Handlebars"),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://ghost.org/docs/concepts/config/"},"\u914d\u7f6e\u6587\u6863")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://ghost.org/docs/concepts/posts/"},"\u6570\u636e\u6a21\u578b")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://ghost.org/docs/api/v3/"},"API \u6587\u6863"))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# Docker \u542f\u52a8\n# https://hub.docker.com/_/ghost/\n# \u6240\u6709\u914d\u7f6e\u9879\u90fd\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6307\u5b9a - https://ghost.org/docs/concepts/config/#running-ghost-with-config-env-variables\n# url -> url\n# database__connection__host -> database.connection.host\ndocker run --rm -it \\\n  -v $PWD/ghost:/var/lib/ghost/content \\\n  -e url=http://localhost:2368 -p 2368:2368 \\\n  --name ghost ghost:alpine\n\n# \u672c\u5730\u5b89\u88c5\n# https://ghost.org/docs/install/local/\nnpm install ghost-cli@latest -g\n# https://ghost.org/docs/api/v3/ghost-cli/\n# http://localhost:2368/ghosh\nghost install local\n")))}p.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(a,".").concat(m)]||u[m]||b[m]||c;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);