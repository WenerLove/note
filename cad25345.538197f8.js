(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{615:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(7),i=(n(0),n(746)),l={id:"ansible-version",title:"Ansible Version"},o={unversionedId:"ops/infra/ansible-version",id:"ops/infra/ansible-version",isDocsHomePage:!1,title:"Ansible Version",description:"Ansible Version",source:"@site/notes/ops/infra/ansible-version.md",slug:"/ops/infra/ansible-version",permalink:"/notes/ops/infra/ansible-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-version.md",version:"current"},c=[{value:"2.10",id:"210",children:[]},{value:"2.19",id:"219",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"ansible-version"},"Ansible Version"),Object(i.b)("h2",{id:"210"},"2.10"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5c06\u975e base \u6a21\u5757\u5212\u5206\u4e3a\u5c0f\u7684 collection\uff0c\u7531 galaxy \u5206\u53d1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"collection \u80fd\u591f\u5305\u542b\u51e0\u4e4e\u6240\u6709\u7684 ansible \u6269\u5c55\u70b9 - roles, plugins, modules, playbooks"),Object(i.b)("li",{parentName:"ul"},"\u66ff\u4ee3\u4e4b\u524d galaxy \u7684 role \u5206\u53d1\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"ansible-base 3 MB \u5b89\u88c5\u540e 14 MB"),Object(i.b)("li",{parentName:"ul"},"ansible 44 MB \u5b89\u88c5\u540e 334 MB"))),Object(i.b)("li",{parentName:"ul"},"\u5185\u7f6e ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.ansible.com/ansible/2.10/collections/index.html"}),"collection")," \u5217\u8868"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e ansible-base \u5305"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/blob/stable-2.10/changelogs/CHANGELOG-v2.10.rst"}),"CHANGELOG-v2.10")),Object(i.b)("li",{parentName:"ul"},"unvault - \u65b0\u589e lookup \u63d2\u4ef6 - \u8bfb\u53d6\u52a0\u5bc6\u6587\u4ef6\u5185\u5bb9"),Object(i.b)("li",{parentName:"ul"},"\u5e9f\u5f03 hash_behaviour"),Object(i.b)("li",{parentName:"ul"},"\u505c\u6b62\u652f\u6301 Windows Server 2008"),Object(i.b)("li",{parentName:"ul"},"fact \u5305\u542b ansible_processor_nproc")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5c1a\u4e14\u65e0\u6cd5\u6267\u884c collection \u4e2d\u7684 playbooks - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ansible/ansible/pull/67435"}),"#67435"))))),Object(i.b)("h2",{id:"219"},"2.19"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e\u547d\u4ee4\u884c\u8865\u5168")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u53c2\u6570\u8865\u5168\npython -m pip install argcomplete\n\n# \u542f\u7528\u8865\u5168\nactivate-global-python-argcomplete\n# \u6216\neval $(register-python-argcomplete ansible)\neval $(register-python-argcomplete ansible-config)\neval $(register-python-argcomplete ansible-console)\neval $(register-python-argcomplete ansible-doc)\neval $(register-python-argcomplete ansible-galaxy)\neval $(register-python-argcomplete ansible-inventory)\neval $(register-python-argcomplete ansible-playbook)\neval $(register-python-argcomplete ansible-pull)\neval $(register-python-argcomplete ansible-vault)\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);