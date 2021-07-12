(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{1129:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),u=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},o=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(a),o=n,j=m["".concat(b,".").concat(o)]||m[o]||O[o]||r;return a?l.a.createElement(j,i(i({ref:t},p),{},{components:a})):l.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=o;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<r;p++)b[p]=a[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},458:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(8),r=(a(0),a(1129)),b={id:"saas",title:"SaaS"},i={unversionedId:"reference/software/saas",id:"reference/software/saas",isDocsHomePage:!1,title:"SaaS",description:"Tips",source:"@site/notes/reference/software/saas.md",slug:"/reference/software/saas",permalink:"/notes/reference/software/saas",editUrl:"https://github.com/wenerme/wener/edit/master/notes/reference/software/saas.md",version:"current",sidebar:"docs",previous:{title:"\u5f00\u53d1\u8bcd\u6c47",permalink:"/notes/reference/software/glossary"},next:{title:"\u589e\u957f\u76f8\u5173\u8bcd\u6c47",permalink:"/notes/reference/growth/glossary"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Database",id:"database",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("h2",{id:"database"},"Database"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2016/10/03/designing-your-saas-database-for-high-scalability/"},"Designing a SaaS Database for Scale with Postgres"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=12649734"},"HN")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/aa479086.aspx"},"Multi-Tenant Data Architecture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/sql-database/sql-database-design-patterns-multi-tenancy-saas-applications"},"Design patterns for multi-tenant SaaS applications and Azure SQL Database")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.slideshare.net/rcandidosilva/supporting-multitenancy-applications-with-java-ee"},"JavaOne 2014 - Supporting Multi-tenancy Applications with Java EE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://saasaddict.walkme.com/saas-based-application-architecture-best-practices/"},"SaaS Based Application Architecture \u2013 Best Practices"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Self Service & Personalization"),Object(r.b)("li",{parentName:"ul"},"Multi-tenancy"),Object(r.b)("li",{parentName:"ul"},"Integration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5e94\u7528\u80fd\u4e0e\u5176\u4ed6\u5e94\u7528\u6216\u5e73\u53f0\u8fdb\u884c\u96c6\u6210"),Object(r.b)("li",{parentName:"ul"},"\u5e94\u7528\u53ef\u4ee5\u6709\u9884\u7f6e\u7684\u96c6\u6210"))),Object(r.b)("li",{parentName:"ul"},"Operational Performance"),Object(r.b)("li",{parentName:"ul"},"Security and Compliance",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u9009\u62e9 SaaS \u5e73\u53f0\u7684\u9996\u8981\u8003\u8651"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7ed9\u7528\u6237\u66f4\u591a\u7684\u9009\u62e9\u5e76\u4e0d\u4ee3\u8868\u7528\u6237\u4e00\u5b9a\u4f1a\u9009\u62e9, \u4f46\u4f1a\u8ba9\u7528\u6237\u611f\u89c9\u6709\u9000\u8def"))),Object(r.b)("li",{parentName:"ul"},"Why Multi-tenancy is Critical for the Success of SaaS",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u591a\u79df\u6237\u662f\u5e73\u53f0\u6210\u529f\u7684\u5173\u952e"))),Object(r.b)("li",{parentName:"ul"},"Design Considerations"),Object(r.b)("li",{parentName:"ul"},"Security Considerations"),Object(r.b)("li",{parentName:"ul"},"Scalability Considerations",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Application Scalability"),Object(r.b)("li",{parentName:"ul"},"Database Scalability"))),Object(r.b)("li",{parentName:"ul"},"Monitoring"))),Object(r.b)("li",{parentName:"ul"},"Salesforce",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jrKA3cJmoms"},"Salesforce Multitenant Architecture: How We Do the Magic We Do")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jeysYua6ENs"},"Understanding Multitenancy and the Architecture of the Salesforce Platform")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.salesforce.com/page/Multi_Tenant_Architecture"},"The Force.com Multitenant Architecture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.salesforce.com/page/Architect_Core_Resources"},"Architect Core Resources")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO/IEC_27001:2013"},"ISO/IEC 27001:2013"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4fe1\u606f\u5b89\u5168\u89c4\u8303"),Object(r.b)("li",{parentName:"ul"},"Information technology \u2014 Security techniques \u2014 Information security management systems \u2014 Requirements"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://tms.dingtalk.com/markets/dingtalk/dingtalksecurity"},"\u9489\u9489\u5168\u9762\u5b89\u5168\u9632\u62a4")))),Object(r.b)("li",{parentName:"ul"},"\u79df\u6237\u7ef4\u5ea6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u7269\u7406\u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u9694\u79bb"),Object(r.b)("li",{parentName:"ul"},"\u5b89\u5168\u5907\u4efd"),Object(r.b)("li",{parentName:"ul"},"\u5907\u4efd\u6570\u636e\u66f4\u6709\u610f\u4e49"),Object(r.b)("li",{parentName:"ul"},"\u5b89\u5168\u7684\u6570\u636e\u5220\u9664"),Object(r.b)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8d1f\u8f7d\u548c\u6027\u80fd"),Object(r.b)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u6c34\u5e73\u6269\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u76f4\u63a5\u8bbf\u95ee\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8fc1\u79fb\u8def\u5f84",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u591a\u5e94\u7528\u7248\u672c"),Object(r.b)("li",{parentName:"ul"},"\u591a\u6570\u636e\u7248\u672c"))),Object(r.b)("li",{parentName:"ul"},"\u81ea\u5df1\u6258\u7ba1\u6570\u636e\u5e93"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u5229\u4e8e\u7edf\u8ba1\u5206\u6790",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u5c06\u6570\u636e\u4e8c\u6b21\u6c47\u603b"))),Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u66f4\u591a\u7684\u8fd0\u7ef4",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u91cf\u53d7\u9650"))))),Object(r.b)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u903b\u8f91\u6570\u636e\u5e93 - Schema",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u5171\u4eab\u516c\u5171\u6570\u636e"),Object(r.b)("li",{parentName:"ul"},"\u5355\u5e93\u79df\u6237\u6570\u6709\u9650",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5907\u4efd\u6027\u80fd\u6709\u5f71\u54cd"))),Object(r.b)("li",{parentName:"ul"},"\u540e\u671f\u53ef\u8003\u8651\u5bf9\u79df\u6237\u5206\u7247\u5230\u4e0d\u540c\u670d\u52a1\u5668"),Object(r.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u4fdd\u8bc1 SLA"),Object(r.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u9274\u522b\u5bf9\u786c\u4ef6\u7684\u4f7f\u7528\u7387"),Object(r.b)("li",{parentName:"ul"},"\u4e8b\u52a1\u5e76\u53d1\u91cf"))),Object(r.b)("li",{parentName:"ul"},"N \u79df\u6237 -> 1 \u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u6269\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u8fd0\u7ef4\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u7edf\u8ba1\u5206\u6790"),Object(r.b)("li",{parentName:"ul"},"\u5e94\u7528\u5f00\u53d1\u76f8\u5bf9\u590d\u6742,\u6570\u636e\u98ce\u9669",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6280\u672f\u5c42\u9762\u5c4f\u853d\u79df\u6237\u6982\u5ff5"),Object(r.b)("li",{parentName:"ul"},"\u56e0\u6b64\u5f00\u53d1\u53ef\u8ba4\u4e3a\u662f\u4e00\u4e2a\u79df\u6237\u4e00\u4e2a\u6570\u636e\u5e93"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u9519\u8bef\u4f1a\u53d1\u751f,\u90a3\u4e00\u5b9a\u4f1a\u53d1\u751f,\u9700\u8981\u4ece\u67b6\u6784\u5c42\u9762\u53bb\u907f\u514d"))))))),Object(r.b)("li",{parentName:"ul"},"\u5e94\u7528\u7ef4\u5ea6\u6570\u636e\u6a21\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"N \u5e94\u7528 -> N \u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u5e94\u7528\u66f4\u65b0\u5347\u7ea7"),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u9009\u62e9\u4e0d\u540c\u5e94\u7528\u7248\u672c"),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u5b9a\u5236\u5316"))),Object(r.b)("li",{parentName:"ul"},"1 \u5e94\u7528 -> N \u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u6027"),Object(r.b)("li",{parentName:"ul"},"\u5171\u4eab\u4ee3\u7801, \u6613\u4e8e\u6269\u5c55\u548c\u5347\u7ea7\u5e94\u7528\u80fd\u529b"),Object(r.b)("li",{parentName:"ul"},"\u5e94\u7528\u5347\u7ea7\u9700\u7ef4\u62a4\u8f83\u591a\u7684\u6570\u636e\u5e93"))),Object(r.b)("li",{parentName:"ul"},"1 \u5e94\u7528 -> 1 \u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55"))))),Object(r.b)("li",{parentName:"ul"},"\u7efc\u5408\u7ef4\u5ea6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"1 \u79df\u6237 -> 1 \u5e94\u7528 -> 1 \u6570\u636e\u5e93",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f20\u7edf\u9879\u76ee"))),Object(r.b)("li",{parentName:"ul"},"N \u79df\u6237 -> 1 \u5e94\u7528",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"-> 1 \u6570\u636e\u5e93"),Object(r.b)("li",{parentName:"ul"},"-> N \u6570\u636e\u5e93"))),Object(r.b)("li",{parentName:"ul"},"N \u79df\u6237 -> N \u5e94\u7528",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4ee5\u5e94\u7528\u8fd8\u662f\u4ee5\u79df\u6237\u5212\u5206"),Object(r.b)("li",{parentName:"ul"},"-> 1 \u6570\u636e\u5e93"),Object(r.b)("li",{parentName:"ul"},"-> N \u6570\u636e\u5e93"))))),Object(r.b)("li",{parentName:"ul"},"\u8003\u8651\u56e0\u7d20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5b9a\u5236\u5316"),Object(r.b)("li",{parentName:"ul"},"\u529f\u80fd\u5b9a\u5236\u5316"),Object(r.b)("li",{parentName:"ul"},"\u6d41\u7a0b\u5b9a\u5236\u5316"),Object(r.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u5e94\u7528\u4f5c\u4e3a\u5e73\u53f0 vs \u4e00\u4e2a\u5e73\u53f0\u63d0\u4f9b\u591a\u4e2a\u5e94\u7528"),Object(r.b)("li",{parentName:"ul"},"Licensing \u7279\u6027"))),Object(r.b)("li",{parentName:"ul"},"\u8bef\u533a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9694\u79bb\u516c\u53f8\u6570\u636e\u548c\u5176\u4ed6\u79df\u6237\u6570\u636e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u80fd\u9694\u79bb, \u90a3\u4e48\u5176\u4ed6\u79df\u6237\u4e5f\u662f\u80fd\u591f\u9009\u62e9\u9694\u79bb"))),Object(r.b)("li",{parentName:"ul"},"\u81ea\u5df1\u4f7f\u7528\u63a5\u53e3\u548c\u5176\u4ed6\u7528\u6237\u7684\u63a5\u53e3\u4e0d\u662f\u540c\u4e00\u5957\u63a5\u53e3",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5b9a\u5236\u5316\u63a5\u53e3, \u90a3\u4e48\u5176\u4ed6\u79df\u6237\u4e5f\u662f\u5177\u6709\u5b9a\u5236\u5316\u80fd\u529b"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u5e73\u53f0\u63a5\u53e3, \u90a3\u4e48\u662f\u4e0d\u5e94\u8be5\u7684",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-hans/Eating_your_own_dog_food"},"Eating your own dog food")))))))),Object(r.b)("li",{parentName:"ul"},"\u8bbe\u8ba1\u6743\u8861",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u79df\u6237\u9694\u79bb"),Object(r.b)("li",{parentName:"ul"},"\u8d44\u6e90\u6d88\u8017"),Object(r.b)("li",{parentName:"ul"},"\u8fd0\u7ef4\u96be\u5ea6"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027"))),Object(r.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u95ee\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5546\u4e1a\u6a21\u578b"),Object(r.b)("li",{parentName:"ul"},"\u6536\u8d39\u6a21\u5f0f"),Object(r.b)("li",{parentName:"ul"},"\u5730\u57df\u5206\u79bb"))),Object(r.b)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6848",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5236\u5b9a\u5e73\u53f0\u53d1\u5c55\u7b56\u7565"),Object(r.b)("li",{parentName:"ul"},"\u4e3a\u5e73\u53f0\u7528\u6237\u8003\u8651\u53d1\u5c55\u7b56\u7565"),Object(r.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4ec0\u4e48\u662f\u5fc5\u7136\u7684")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u7b56\u7565")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7279\u6027"),Object(r.b)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5206\u79bb"),Object(r.b)("th",{parentName:"tr",align:null},"\u8868\u5206\u79bb"),Object(r.b)("th",{parentName:"tr",align:null},"\u5171\u4eab\u6570\u636e\u5e93"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b9a\u5236\u5316"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"N")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u5b89\u5168"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"N"),Object(r.b)("td",{parentName:"tr",align:null},"N")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u5185\u90e8\u4f9d\u8d56\u548c\u6027\u80fd"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"N")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u53ef\u6269\u5c55\u6a21\u578b"),Object(r.b)("td",{parentName:"tr",align:null},"N"),Object(r.b)("td",{parentName:"tr",align:null},"Y"),Object(r.b)("td",{parentName:"tr",align:null},"N")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Customer Onboarding"),Object(r.b)("td",{parentName:"tr",align:null},"N"),Object(r.b)("td",{parentName:"tr",align:null},"N"),Object(r.b)("td",{parentName:"tr",align:null},"Y")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Spring + Hibernate",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.jboss.org/hibernate/orm/4.2/devguide/en-US/html/ch16.html"},"Hibernate Multi-tenancy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://anakiou.blogspot.hk/2015/08/multi-tenant-application-with-spring.html"},"Multi-tenant application with Spring Boot + Spring Data JPA + Hibernate"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u591a\u6570\u636e\u6e90"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://dzone.com/articles/spring-boot-hibernate-multitenancy-implementation"},"Multi-Tenancy Implementation for Spring Boot + Hibernate Projects"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u591a Schema"))),Object(r.b)("li",{parentName:"ul"},"AbstractDataSourceBasedMultiTenantConnectionProviderImpl"),Object(r.b)("li",{parentName:"ul"},"MultiTenantConnectionProvider"),Object(r.b)("li",{parentName:"ul"},"CurrentTenantIdentifierResolver")))))}u.isMDXComponent=!0}}]);