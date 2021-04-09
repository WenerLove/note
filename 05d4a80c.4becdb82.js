(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),s=(n(0),n(890)),c={title:"sealed-secrets"},l={unversionedId:"devops/kubernetes/app/sealed-secrets",id:"devops/kubernetes/app/sealed-secrets",isDocsHomePage:!1,title:"sealed-secrets",description:"* \u6ce8\u610f",source:"@site/notes/devops/kubernetes/app/sealed-secrets.md",slug:"/devops/kubernetes/app/sealed-secrets",permalink:"/notes/devops/kubernetes/app/sealed-secrets",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/sealed-secrets.md",version:"current",sidebar:"docs",previous:{title:"postgres-operator",permalink:"/notes/devops/kubernetes/app/postgres-operator"},next:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c",permalink:"/notes/devops/kubernetes/k3s-story"}},o=[],i={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"SealdSecret \u662f\u7ed1\u5b9a namespace\uff0ckubeseal \u7684\u65f6\u5019\u6307\u5b9a\u6216\u539f secret \u5305\u542b\uff0c\u4e0d\u53ef\u4fee\u6539",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u6216\u8005\u6307\u5b9a ",Object(s.b)("inlineCode",{parentName:"li"},'sealedsecrets.bitnami.com/cluster-wide": "true"')," \u96c6\u7fa4\u5185\u53ef\u7528"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/sealed-secrets"},"stable/sealed-secrets")),Object(s.b)("li",{parentName:"ul"},"\u6a21\u5f0f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"strict - \u9ed8\u8ba4 - \u540d\u5b57\u548c namespace \u5339\u914d"),Object(s.b)("li",{parentName:"ul"},"namespace-wide - \u76f8\u540c namespace \u5185\u53ef\u4fee\u6539 name"),Object(s.b)("li",{parentName:"ul"},"cluster-wide - \u53ef\u4fee\u6539 namespace \u548c name")))),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a yaml \u5305\u542b\u591a\u4e2a secret \u53ea\u6709\u7b2c\u4e00\u4e2a\u4f1a seal - ",Object(s.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/issues/114"},"#114"))))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"# \u96c6\u7fa4\u5b89\u88c5\n# \u67e5\u770b\u7248\u672c https://github.com/bitnami-labs/sealed-secrets/releases\nkubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.13.1/controller.yaml\n\nbrew install kubeseal\n\n# \u6b63\u5e38 secret\necho -n bar | kubectl create secret generic mysecret --dry-run=client --from-file=foo=/dev/stdin -o json >mysecret.json\n# seal\nkubeseal <mysecret.json >mysealedsecret.json\n# \u521b\u5efa seal\nkubectl create -f mysealedsecret.json\n# \u751f\u6210 secret\nkubectl get secret mysecret\n\n# \u9650\u5b9a\u8303\u56f4\nkubeseal --scope cluster-wide <secret.yaml >sealed-secret.json\n\n# \u5907\u4efd master.key - \u6062\u590d\u5219\u53ef\u4ee5\u4f7f\u5f97\u4e4b\u524d\u7684\u52a0\u5bc6\u6570\u636e\u751f\u6548\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml >master.key\n\n# \u6062\u590d master.key\nkubectl apply -f master.key\n# \u751f\u6548\nkubectl delete pod -n kube-system -l name=sealed-secrets-controller\n\n# \u79bb\u7ebf\u89e3\u5bc6\nkubeseal --recovery-unseal --recovery-private-key file1.key\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  # \u96c6\u7fa4\u5185\u53ef\u89e3\u5bc6 - \u4e0d\u7ed1\u5b9a namespace\n  sealedsecrets.bitnami.com/cluster-wide": "true"\n  # \u4e0d\u7ed1\u5b9a name\n  sealedsecrets.bitnami.com/namespace-wide: "true"\n')))}p.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||s;return n?a.a.createElement(d,l(l({ref:t},i),{},{components:n})):a.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<s;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);