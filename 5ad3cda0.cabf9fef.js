(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{307:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(7),c=(r(0),r(766)),i={id:"e-commerce",title:"E-Commerce"},o={unversionedId:"service/e-commerce/e-commerce",id:"service/e-commerce/e-commerce",isDocsHomePage:!1,title:"E-Commerce",description:"Tips",source:"@site/notes/service/e-commerce/README.md",slug:"/service/e-commerce/e-commerce",permalink:"/notes/service/e-commerce/e-commerce",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/e-commerce/README.md",version:"current",sidebar:"docs",previous:{title:"\u7406\u89e3 CRM",permalink:"/notes/service/crm/crm-insight"},next:{title:"email",permalink:"/notes/service/email/email"}},p=[{value:"Tips",id:"tips",children:[]},{value:"magento",id:"magento",children:[]},{value:"PrestaShop",id:"prestashop",children:[]}],l={rightToc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/E-commerce"}),"E-Commerce"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.zhihu.com/question/19635311"}),"\u5f00\u6e90\u7684\u7535\u5546 B2C\u3001B2B2C \u7535\u5546\u7cfb\u7edf\u6709\u54ea\u4e9b\uff1f"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"SKU - Stock Keeping Unit"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A unique value that represents a distinct salable item (product or service) and all of its attributes."),Object(c.b)("li",{parentName:"ul"},"\u5e93\u5b58\u91cf\u5355\u4f4d, \u533a\u5206\u5355\u54c1, \u5355\u6b3e\u5355\u8272\u5355\u7801"),Object(c.b)("li",{parentName:"ul"},"\u56fd\u9645\u6761\u5f62\u7801\u4e2d\u7684\u6700\u5c0f\u5355\u4f4d"),Object(c.b)("li",{parentName:"ul"},"\u5f71\u54cd\u4ef7\u683c\u548c\u5e93\u5b58,\u9500\u552e\u5c5e\u6027"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"SPU - Standard Product Unit"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6807\u51c6\u5316\u4ea7\u54c1\u5355\u5143")))),Object(c.b)("h2",{id:"magento"},"magento"),Object(c.b)("h2",{id:"prestashop"},"PrestaShop"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"# \u5728\u7ebf demo http://demo.prestashop.com/\n# https://hub.docker.com/r/prestashop/prestashop/\ndocker run -ti -d --name prestashop-mysql -e MYSQL_ROOT_PASSWORD=admin mysql\ndocker run -ti --name prestashop --link prestashop-mysql -e DB_SERVER=prestashop-mysql -p 8080:80 prestashop/prestashop\n")),Object(c.b)("h1",{id:"\u4e2d\u56fd\u7535\u5546\u6a21\u5b50\u53c2\u8003"},"\u4e2d\u56fd\u7535\u5546\u6a21\u5b50\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://jf.10010.com"}),"\u4e2d\u56fd\u8054\u901a\u79ef\u5206\u5546\u57ce")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://jf.10086.cn"}),"\u4e2d\u56fd\u79fb\u52a8\u79ef\u5206\u5546\u57ce")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://shop.10086.cn/"}),"\u4e2d\u56fd\u79fb\u52a8\u5546\u57ce")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.189.cn/"}),"\u4e2d\u56fd\u7535\u4fe1")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://gd.189.cn/"}),"\u4e2d\u56fd\u7535\u4fe1\u6b22 Go"))))}m.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=m(r),u=n,O=b["".concat(i,".").concat(u)]||b[u]||s[u]||c;return r?a.a.createElement(O,o(o({ref:t},l),{},{components:r})):a.a.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);