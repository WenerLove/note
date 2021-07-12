(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},972:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1129)),o={title:"SSO"},c={unversionedId:"service/auth/sso",id:"service/auth/sso",isDocsHomePage:!1,title:"SSO",description:"- SSO \u533a\u5206 \u673a\u5668\u7ea7\u522b \u548c \u7f51\u7ad9\u7ea7\u522b",source:"@site/notes/service/auth/sso.md",slug:"/service/auth/sso",permalink:"/notes/service/auth/sso",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/sso.md",version:"current",sidebar:"docs",previous:{title:"SAML",permalink:"/notes/service/auth/saml"},next:{title:"UMA",permalink:"/notes/service/auth/uma"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SSO \u533a\u5206 \u673a\u5668\u7ea7\u522b \u548c \u7f51\u7ad9\u7ea7\u522b"),Object(i.b)("li",{parentName:"ul"},"\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Kerberos"),Object(i.b)("li",{parentName:"ul"},"\u667a\u80fd\u5361"),Object(i.b)("li",{parentName:"ul"},"Integrated Windows Authentication"),Object(i.b)("li",{parentName:"ul"},"SAML"),Object(i.b)("li",{parentName:"ul"},"Mobile devices as access credentials",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mobiole - something you have"),Object(i.b)("li",{parentName:"ul"},"password - something you know"),Object(i.b)("li",{parentName:"ul"},"\u751f\u7269\u7279\u5f81 - something you are - fingerprint, retinal scan, facial recognition"))))),Object(i.b)("li",{parentName:"ul"},"2FA - \u4e24\u9636\u6bb5\u9a8c\u8bc1"),Object(i.b)("li",{parentName:"ul"},"MFA - \u591a\u9636\u6bb5\u9a8c\u8bc1"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"wikipedia ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Single_sign-on"},"SSO")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_single_sign-on_implementations"},"List of single sign-on implementations"))))))}s.isMDXComponent=!0}}]);