(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(999)),l={id:"react",title:"React"},c={unversionedId:"web/react/react",id:"web/react/react",isDocsHomePage:!1,title:"React",description:"Tips",source:"@site/notes/web/react/README.md",slug:"/web/react/react",permalink:"/notes/web/react/react",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/README.md",version:"current",sidebar:"docs",previous:{title:"Vue",permalink:"/notes/web/framework/vue"},next:{title:"Jotai",permalink:"/notes/web/react/jotai"}},b=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"React vs MobX",id:"react-vs-mobx",children:[]}]},{value:"Nextjs",id:"nextjs",children:[]},{value:"\u547d\u540d",id:"\u547d\u540d",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/7ca2f9a7c7d0"},"Presentational and Container Components"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"presentational",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5173\u5fc3 \u201c\u770b\u8d77\u6765\u600e\u4e48\u6837\u201d"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u5305\u542b Presentational \u548c Container \u7ec4\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u5305\u542b DOM/\u5143\u7d20/Markup/\u6837\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u5141\u8bb8 children \u5c5e\u6027\u4f20\u9012"),Object(i.b)("li",{parentName:"ul"},"\u65e0\u5916\u90e8\u4f9d\u8d56 - Redux\u3001REST\u3001API"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u5173\u5fc3\u6570\u636e\u52a0\u8f7d\u548c\u4fee\u6539"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 props \u63a5\u53d7\u5c5e\u6027\u548c\u56de\u8c03"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u6ca1\u6709\u81ea\u5df1\u7684\u72b6\u6001 - \u6709\u4e5f\u53ea\u662f UI \u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u4e3a\u51fd\u6570\u7ec4\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 Page, Sidebar, Story, UserInfo, List"))),Object(i.b)("li",{parentName:"ul"},"container",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5173\u5fc3 \u201c\u903b\u8f91\u5982\u4f55\u8fd0\u4f5c\u201d"),Object(i.b)("li",{parentName:"ul"},"\u9664\u4e86\u5c01\u88c5\u57fa\u672c\u4e0d\u5305\u542b\u5143\u7d20\uff0c\u6ca1\u6709\u81ea\u5df1\u7684\u6837\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4e3a presentational \u6216\u5176\u4ed6 container \u63d0\u4f9b\u6837\u5f0f\u548c\u884c\u4e3a"),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u4e0e Redux \u4ea4\u4e92\uff0c\u4e3a presentational \u63d0\u4f9b\u56de\u8c03"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u6709\u72b6\u6001\u548c\u6570\u636e\u6e90"),Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u914d\u5408 HOC - React Redux connect(), Relay createContainer(), Flux Utils Container.create()"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 UserPage, FollowersSidebar, StoryContainer, FollowedUserList."))),Object(i.b)("li",{parentName:"ul"},"\u5176\u4ed6\u5212\u5206\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6709\u72b6\u6001\u3001\u65e0\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u7d2f\u3001\u51fd\u6570"),Object(i.b)("li",{parentName:"ul"},"Pure\u3001Impure"))))),Object(i.b)("li",{parentName:"ul"},"suspense \u901a\u8fc7 throw prmies \u5b9e\u73b0",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/vigzmv/react-promise-suspense/blob/master/lib/index.ts"},"vigzmv/react-promise-suspense"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5e38\u7528\u5de5\u5177\nnpm i -g react-native-cli code-push-cli\n\n# Redux\nnpm i --save redux redux-thunk\nnpm i --save-dev remote-redux-devtools\n# Redux Native\nnpm i --save react-redux redux-persist\n\n# Native\nnpm i --save react-base react-native-vector-icons\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"react-vs-mobx"},"React vs MobX"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/885bxa/redux_vs_mobx/"},"https://www.reddit.com/r/reactjs/comments/885bxa/redux_vs_mobx/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"by Redux Author")))),Object(i.b)("h2",{id:"nextjs"},"Nextjs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save react react-dom next\nmkdir pages\nnext\n")),Object(i.b)("h2",{id:"\u547d\u540d"},"\u547d\u540d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@wittydeveloper/b50303551505"},"React components naming convention")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[Domain]|[Page/Context]|ComponentName|[Type]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Domain",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u57df\u540d\u8bcd - \u5212\u5206\u6a21\u5757\u6216\u4ea7\u54c1"))),Object(i.b)("li",{parentName:"ul"},"Page/Content",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u4f4d\u7f6e\u4e0a\u4e0b\u6587 - \u6700\u8fd1\u4e0a\u4e0b\u6587"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 Sidebar"))),Object(i.b)("li",{parentName:"ul"},"ComponentName",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ec4\u4ef6\u76ee\u7684\uff0c\u7528\u4e8e\u505a\u4ec0\u4e48\u7684"))),Object(i.b)("li",{parentName:"ul"},"Type",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"View - \u89c6\u56fe\uff0c\u53ea\u5c55\u73b0\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},"Button"),Object(i.b)("li",{parentName:"ul"},"\u8868\u5355\u7c7b - Input\u3001Upload"),Object(i.b)("li",{parentName:"ul"},"Component - HOC \u7c7b\u7ec4\u4ef6\uff0c\u539f\u6709\u7ec4\u4ef6\u4fdd\u6301\u539f\u6709\u540d\u5b57"),Object(i.b)("li",{parentName:"ul"},"Container - \u5bb9\u5668\u7c7b\uff0c\u63d0\u4f9b\u4ea4\u4e92\u63a5\u53e3\u6570\u636e")))))))}p.isMDXComponent=!0},999:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);