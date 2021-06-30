(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1107:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return t?r.a.createElement(d,i(i({ref:a},o),{},{components:t})):r.a.createElement(d,i({ref:a},o))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var b in a)hasOwnProperty.call(a,b)&&(i[b]=a[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},468:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(8),l=(t(0),t(1107)),c={title:"ArgoCD"},i={unversionedId:"devops/kubernetes/app/argo-cd",id:"devops/kubernetes/app/argo-cd",isDocsHomePage:!1,title:"ArgoCD",description:"- argoproj/argo-cd \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/app/argo-cd.md",slug:"/devops/kubernetes/app/argo-cd",permalink:"/notes/devops/kubernetes/app/argo-cd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argo-cd.md",version:"current",sidebar:"docs",previous:{title:"ArgoCD \u7248\u672c",permalink:"/notes/devops/kubernetes/app/argo-cd-version"},next:{title:"Argo Workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow"}},b=[{value:"\u5e94\u7528\u53d1\u73b0",id:"\u5e94\u7528\u53d1\u73b0",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]},{value:"\u5bc6\u94a5\u7ba1\u7406",id:"\u5bc6\u94a5\u7ba1\u7406",children:[]},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[]},{value:"\u591a\u96c6\u7fa4",id:"\u591a\u96c6\u7fa4",children:[]},{value:"\u9879\u76ee",id:"\u9879\u76ee",children:[]},{value:"\u540c\u6b65\u9009\u9879",id:"\u540c\u6b65\u9009\u9879",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"argocd-cm",id:"argocd-cm",children:[]}]},{value:"ArgoCD \u7ba1\u7406 ArgoCD",id:"argocd-\u7ba1\u7406-argocd",children:[]},{value:"Resource Hook",id:"resource-hook",children:[]},{value:"Annotations",id:"annotations",children:[]},{value:"\u4e0d\u540c\u6b65\u90e8\u5206\u5b57\u6bb5",id:"\u4e0d\u540c\u6b65\u90e8\u5206\u5b57\u6bb5",children:[{value:"\u5e38\u89c1\u5ffd\u7565 Diff",id:"\u5e38\u89c1\u5ffd\u7565-diff",children:[]}]},{value:"Sync",id:"sync",children:[]},{value:"Tricks",id:"tricks",children:[]},{value:"the server could not find the requested resource",id:"the-server-could-not-find-the-requested-resource",children:[]},{value:"\u5347\u7ea7\u5e94\u7528\u65f6\u53ef\u80fd CRD \u6709\u53d8\u5316\u5bfc\u81f4\u6821\u9a8c\u4e0d\u901a\u8fc7",id:"\u5347\u7ea7\u5e94\u7528\u65f6\u53ef\u80fd-crd-\u6709\u53d8\u5316\u5bfc\u81f4\u6821\u9a8c\u4e0d\u901a\u8fc7",children:[]},{value:"kustomize build \u5f02\u5e38",id:"kustomize-build-\u5f02\u5e38",children:[]}],o={toc:b};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd"},"argoproj/argo-cd")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f K8S \u6301\u7eed\u96c6\u6210/CD \u670d\u52a1/\u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"GitOps"),Object(l.b)("li",{parentName:"ul"},"\u6709 ",Object(l.b)("strong",{parentName:"li"},"\u76f4\u89c2\u7684")," WebUI \u53ef\u4f9b\u7ba1\u7406\u548c\u95ee\u9898\u6392\u67e5"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u96c6\u7fa4\u3001\u7edf\u4e00\u767b\u5f55\u3001\u6743\u9650\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://cd.apps.argoproj.io/"},"DEMO")))),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u914d\u7f6e - Kustomize, Helm, Ksonnet, Jsonnet, plain-YAML"),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u9700\u90e8\u7f72 Agent"))),Object(l.b)("li",{parentName:"ul"},"SSO - OIDC, OAuth2, LDAP, SAML 2.0, GitHub, GitLab, Microsoft, LinkedIn"),Object(l.b)("li",{parentName:"ul"},"\u591a\u79df\u6237\uff0cRBAC"),Object(l.b)("li",{parentName:"ul"},"\u56de\u6eda"),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u8d44\u6e90\u5065\u5eb7\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"\u68c0\u6d4b\u672a\u540c\u6b65\u60c5\u51b5"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6216\u624b\u52a8\u540c\u6b65"),Object(l.b)("li",{parentName:"ul"},"Web UI \u67e5\u770b\u5b9e\u65f6\u60c5\u51b5\u548c\u5e94\u7528\u6d3b\u52a8"),Object(l.b)("li",{parentName:"ul"},"CLI \u7528\u4e8e CI \u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"Webhook - GitHub, BitBucket, GitLab"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u81ea\u52a8\u5316\u7684 Access tokens"),Object(l.b)("li",{parentName:"ul"},"PreSync, Sync, PostSync \u94a9\u5b50\u652f\u6301\u590d\u6742\u5e94\u7528 - blue/green & canary upgrades"),Object(l.b)("li",{parentName:"ul"},"Audit trails for application events and API calls"),Object(l.b)("li",{parentName:"ul"},"Prometheus metrics"),Object(l.b)("li",{parentName:"ul"},"Parameter overrides for overriding ksonnet/helm parameters in Git"))),Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5b9a\u4e49",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kustomize"),Object(l.b)("li",{parentName:"ul"},"Helm"),Object(l.b)("li",{parentName:"ul"},"A directory of YAML/JSON/Jsonnet manifests, including Jsonnet"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},"Ksonnet")))),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u9677",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"App of Apps \u652f\u6301\u4e0d\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"issues ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/labels/component%3Aapplications-set"},"label:applications-set")),Object(l.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u89e3\u51b3 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj-labs/applicationset"},"argoproj-labs/applicationset")))),Object(l.b)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4\u652f\u6301\u8f83\u5f31 - fleedcd \u76f8\u5bf9\u505a\u7684\u66f4\u597d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a App \u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u96c6\u7fa4 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/issues/1673"},"#1673")),Object(l.b)("li",{parentName:"ul"},"\u65e0 agent, \u65e0 crd \u5b9a\u4e49 - app of apps \u53ea\u80fd\u5728 argocd \u6240\u5728\u96c6\u7fa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u76ee\u6807\u96c6\u7fa4\u6ca1\u6709 argocd \u56e0\u6b64\u8bbe\u7f6e application \u65e0\u6548"))),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u76f8\u540c\u5e94\u7528\u8981\u653e\u5728\u540c\u4e00\u4e2a argocd \u7a7a\u95f4\uff0c\u56e0\u6b64\u9700\u8981\u540d\u5b57\u524d\u7f00\uff0c\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"dev-cert-manager")),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u52a0\u4e86\u540d\u5b57\u524d\u7f00\uff0c\u8981\u6ce8\u610f\u6240\u6709\u7684 helm \u6700\u597d\u6307\u5b9a\u56fa\u5b9a\u7684 releaseName, \u4f8b\u5982 cert-manager",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u590d\u5199 releaseName \u4f1a\u6709",Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/user-guide/helm/#helm-release-name"},"\u95ee\u9898"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"argocd \u4f9d\u8d56 ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/instance")," \u5339\u914d\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u590d\u5199\u53ef\u80fd\u4f1a\u4fee\u6539\u8be5 label \u5bfc\u81f4\u65e0\u6cd5\u5339\u914d\u90e8\u5206\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"argocd-cm.yaml")," \u4fee\u6539\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"application.instanceLabelKey")))))),Object(l.b)("li",{parentName:"ul"},"\u8de8\u96c6\u7fa4\u5e94\u7528\u65e0\u6cd5\u5220\u9664\u8d44\u6e90"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kustomize \u540e\u5904\u7406 Helm - - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argocd-example-apps/tree/master/plugins/kustomized-helm"},"kustomized-helm"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b98\u65b9\u660e\u786e\u4e0d\u4f1a\u5185\u5efa\u652f\u6301\uff0c\u53ea\u80fd\u901a\u8fc7\u81ea\u5b9a\u4e49\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"Helm 3.1+ \u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"--post-renderer")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/issues/3882"},"#3882"),", ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/issues/3698"},"#3698")),Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u5b58\u5728 argocd \u73af\u5883\u65e0\u6cd5\u8bbf\u95ee chart \u95ee\u9898")))))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u6bcf 3 \u5206\u949f \u62c9\u53d6\u4e00\u6b21 Git"),Object(l.b)("li",{parentName:"ul"},"hlem chart \u7248\u672c\u652f\u6301\u8303\u56f4\u5339\u914d - \u4f7f\u7528 Hard Refresh \u5237\u65b0\u4f1a\u89e6\u53d1\u65b0\u7684\u7248\u672c\u90e8\u7f72",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5237\u65b0\u4e0d\u4f1a\u89e6\u53d1\u662f\u56e0\u4e3a\u6709 repo \u7f13\u5b58 ",Object(l.b)("inlineCode",{parentName:"li"},"--repo-cache-expiration")),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"1.1.*"),", ",Object(l.b)("inlineCode",{parentName:"li"},"~0.1.57"))))))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u540d\u5b57\u8981\u6c42\u5168\u5c40\u552f\u4e00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u5c31\u662f helm \u7684 release \u540d\u5b57 - helm \u4e0d\u8981\u6c42\u5168\u5c40\u552f\u4e00\uff0c\u56e0\u6b64\u8fc1\u79fb\u8fc7\u7a0b\u53ef\u80fd\u51b2\u7a81"))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"li"},"application.instanceLabelKey")," \u914d\u7f6e - \u8fd9\u6837 helm \u81ea\u5b9a\u4e49 releaseName \u624d\u4e0d\u4f1a\u51b2\u7a81",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982\u4fee\u6539\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/argocd-instance")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0e helm \u5e38\u7528\u51b2\u7a81 ",Object(l.b)("inlineCode",{parentName:"li"},"app.kubernetes.io/instance")))),Object(l.b)("li",{parentName:"ul"},"Kustomize \u4e0d\u53ef\u4ee5\u540e\u5904\u7406 Helm",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u5b9a\u9700\u8981\uff0c\u53ef\u4ee5\u8003\u8651",Object(l.b)("a",{parentName:"li",href:"https://dev.to/camptocamp-ops/use-kustomize-to-post-render-helm-charts-in-argocd-2ml6"},"\u63d2\u4ef6")),Object(l.b)("li",{parentName:"ul"},"\u6216\u8005\u9884\u5148\u751f\u6210\u597d"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7a33\u5b9a\u7684 Git \u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 Gitlab, Github - \u56e0\u4e3a\u8bbf\u95ee\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4 argocd \u5f88\u6162\u6216\u8005\u540c\u6b65\u72b6\u6001\u4e0d\u53ef\u77e5"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u96c6\u7fa4\u5185\u90e8\u7f72 gitea \u7136\u540e\u955c\u50cf\u5916\u90e8\u4ed3\u5e93 - \u914d\u7f6e\u597d Webhook \u89e6\u53d1\u53ef\u5b9e\u73b0\u79d2\u7ea7\u540c\u6b65"))),Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5e94\u7528 manifest \u5347\u7ea7\u53ef\u80fd\u5bfc\u81f4\u914d\u7f6e\u4e22\u5931 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/issues/3537"},"#3537"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u8986\u76d6 argocd-cm")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\nkubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n# HA\n# kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/ha/install.yaml\n\n# \u8f6c\u53d1\u5230\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\n# https://localhost:8080\nkubectl port-forward svc/argocd-server -n argocd 8443:443\n# \u8d26\u53f7 admin\n# \u5bc6\u7801\n# kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2\n# \u83b7\u53d6\u5bc6\u7801\u540e \b\u5efa\u8bae\u5220\u9664 argocd-initial-admin-secret\nkubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath=\"{.data.password}\" | base64 -d\nkubectl -n argocd delete secret argocd-initial-admin-secret\n\n# argocd \u547d\u4ee4\u884c\u5de5\u5177\nbrew install argocd\n# \u767b\u9646\nargocd login localhost:8080\n\n# \u5982\u679c\u914d\u7f6e\u4e86 ingress \u9700\u8981 grpc-web \u8bbf\u95ee\n# \u9664\u975e\u5f00\u542f ssl-paththrough - nginx \u5f00\u542f\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927\nargocd login argocd.my.lan:443 --grpc-web\n")),Object(l.b)("h2",{id:"\u5e94\u7528\u53d1\u73b0"},"\u5e94\u7528\u53d1\u73b0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301\uff0c\u4f7f\u7528 app-in-app \u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/cluster-bootstrapping/"},"Cluster Bootstrapping")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd/issues/1766"},"#1766")," - Application auto-discovery"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj-labs/applicationset"},"argoproj-labs/applicationset"))),Object(l.b)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"argocd-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ArgoCD API server"))),Object(l.b)("li",{parentName:"ul"},"argocd-application-controller",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6301\u7eed\u5065\u5eb7\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u5bf9\u6bd4\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"sts \u53ef\u90e8\u7f72\u591a\u4e2a"))),Object(l.b)("li",{parentName:"ul"},"argocd-repo-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7ba1\u7406 Git \u672c\u5730\u7f13\u5b58\uff0c\u7ba1\u7406\u5e94\u7528\u6e05\u5355")))),Object(l.b)("h2",{id:"\u5bc6\u94a5\u7ba1\u7406"},"\u5bc6\u94a5\u7ba1\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898\u6839\u6e90",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a GitOps \u8981\u6c42\u6240\u6709\u5185\u5bb9\u90fd\u5728\u4ed3\u5e93\uff0c\u56e0\u6b64\u5bc6\u94a5\u4e5f\u9700\u8981\u5b58\u50a8\u5728\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u80fd\u76f4\u63a5\u653e\u660e\u6587\u7684 Secret\uff0c\u56e0\u6b64\u9700\u8981\u66f2\u7ebf\u63d0\u4f9b Secret"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u5206\u8981\u6c42\u5728 helm values.yaml \u63d0\u4f9b\u5bc6\u94a5\u7684\u8fd8\u9700\u8981\u5148\u751f\u6210 chart \u7136\u540e\u4fee\u6539\u4e3a\u53e6\u5916\u7684\u65b9\u5f0f\u63d0\u4f9b\u5bc6\u94a5"))),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6848",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets"},"bitnami-labs/sealed-secrets"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u53ef\u9006\u7684\u5bc6\u94a5\u5b58\u50a8\u5728\u4ed3\u5e93\uff0c\u63a7\u5236\u5668\u751f\u6210\u5bf9\u5e94 Secret - \u975e\u5bf9\u79f0\u52a0\u5bc6"),Object(l.b)("li",{parentName:"ul"},"\u6700\u7b80\u5355\u5b9e\u7528"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/secret-management/"},"Secret Management"))))),Object(l.b)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/"},"https://argoproj.github.io/argo-cd/user-guide/commands/argocd/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"~/.argocd/config"))),Object(l.b)("h2",{id:"\u591a\u96c6\u7fa4"},"\u591a\u96c6\u7fa4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# kubeconfig \u7684 test \u4e0a\u4e0b\u6587\nargocd cluster add test\nargocd cluster list\n# \u90e8\u7f72\u5e94\u7528\u540e connectionState \u624d\u4f1a\u662f\u6210\u529f - \u9ed8\u8ba4\u76f8\u5f53\u4e8e\u65e0\u94fe\u63a5\nargocd cluster get 'https://192.168.1.2:6443'\n")),Object(l.b)("h2",{id:"\u9879\u76ee"},"\u9879\u76ee"),Object(l.b)("p",null,"\u5e94\u7528\u903b\u8f91\u5206\u7ec4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"what - \u9650\u5b9a\u90e8\u7f72\u5185\u5bb9 - \u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"where - \u9650\u5b9a\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"what kind - API Kind"),Object(l.b)("li",{parentName:"ul"},"\u89d2\u8272 - RBAC")),Object(l.b)("h2",{id:"\u540c\u6b65\u9009\u9879"},"\u540c\u6b65\u9009\u9879"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  annotations:\n    argocd.argoproj.io/sync-options: Prune=false\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"syncPolicy:\n  automated:\n    prune: true\n  syncOptions:\n    # \u53ea\u540c\u6b65 out of sync \u8d44\u6e90 - \u9ed8\u8ba4\u5168\u90e8\uff0c\u4f1a\u5bf9\u670d\u52a1\u7aef\u5e26\u6765\u538b\u529b\n    - ApplyOutOfSyncOnly=true\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"options"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Prune=false"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u5220\u9664\u8d44\u6e90")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Validate=false"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"kubectl --validate=false")," - \u4e0d\u6821\u9a8c YAML")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SkipDryRunOnMissingResource=true"),Object(l.b)("td",{parentName:"tr",align:null},"\u65b0\u589e CRD \u65f6\u907f\u514d DryRun \u5931\u8d25")))),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-cm.yaml"},"argocd-cm.yaml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-secret.yaml"},"argocd-secret.yaml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Password, Certificates, Signing Key"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/argocd-rbac-cm.yaml"},"argocd-rbac-cm.yaml")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/"},"Declarative Setup"))))),Object(l.b)("h3",{id:"argocd-cm"},"argocd-cm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\ndata:\nga.trackingid: ''\nrepositories: |\n  # \u4ed3\u5e93\u5217\u8868\n\n# \u7528\u6765\u5339\u914d Application - \u5982\u679c\u4e0d\u4fee\u6539\u4f1a\u5bfc\u81f4 helm \u81ea\u5b9a\u4e49 releaseName \u6709\u95ee\u9898\napplication.instanceLabelKey: app.kubernetes.io/instance\n# \u5efa\u8bae\u4fee\u6539\n# application.instanceLabelKey: app.kubernetes.io/argocd-instance\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"repositories")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# \u5b9a\u4e49 Git \u4ed3\u5e93\u8d26\u53f7\u5bc6\u7801\n- passwordSecret:\n    key: password\n    name: repo-12345\n  usernameSecret:\n    key: username\n    name: repo-12345\n  type: git\n  url: https://gitlab.com/wener/repo.git\n# \u5b9a\u4e49 Git \u4ed3\u5e93 SSH \u5bc6\u94a5\n- insecure: true\n  insecureIgnoreHostKey: true\n  sshPrivateKeySecret:\n    key: sshPrivateKey\n    name: repo-1234\n  type: git\n  url: git@gitea-ssh.gitea:dev/dev-cluster\n")),Object(l.b)("h2",{id:"argocd-\u7ba1\u7406-argocd"},"ArgoCD \u7ba1\u7406 ArgoCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/operator-manual/declarative-setup/#manage-argo-cd-using-argo-cd"},"Manage Argo CD Using Argo CD")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/argoproj/argoproj-deployments/tree/master/argocd"},"https://github.com/argoproj/argoproj-deployments/tree/master/argocd"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"kustomization.yaml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"bases:\n  - github.com/argoproj/argo-cd//manifests/cluster-install?ref=v1.0.1\n\n# additional resources like ingress rules, cluster and repository secrets.\nresources:\n  - clusters-secrets.yaml\n  - repos-secrets.yaml\n\n# \u4fee\u6539\u914d\u7f6e\npatchesStrategicMerge:\n  - overlays/argo-cd-cm.yaml\n")),Object(l.b)("h2",{id:"resource-hook"},"Resource Hook"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/user-guide/resource_hooks"},"Resource Hooks"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9\u6027\u540c\u6b65\u65f6\u4e0d\u4f1a\u6267\u884c"))),Object(l.b)("li",{parentName:"ul"},"PreSync"),Object(l.b)("li",{parentName:"ul"},"Sync"),Object(l.b)("li",{parentName:"ul"},"PostSync"),Object(l.b)("li",{parentName:"ul"},"SyncFail")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  generateName: schema-migrate-\n  annotations:\n    # \u5b9a\u4e49 Hook \u7c7b\u578b\n    argocd.argoproj.io/hook: PreSync\n    # PostSync\n    # \u5220\u9664\u7b56\u7565 HookSucceeded HookFailed BeforeHookCreation\n    argocd.argoproj.io/hook-delete-policy: HookSucceeded\n")),Object(l.b)("h2",{id:"annotations"},"Annotations"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'# \u6bd4\u8f83\u9009\u9879\n# ==========\n# \u5ffd\u7565\u989d\u5916\u7684 - \u4f8b\u5982\u90e8\u5206\u5de5\u5177\u751f\u6210\u5bf9\u8c61\n# \u4f3c\u4e4e\u6709\u70b9\u95ee\u9898 https://github.com/argoproj/argo-cd/issues/4487\nargocd.argoproj.io/compare-options: IgnoreExtraneous\n\n# \u540c\u6b65\u9009\u9879\n# ==========\n# \u4e0d\u5220\u9664\nargocd.argoproj.io/sync-options: Prune=false\n# \u4e0d\u6821\u9a8c\nargocd.argoproj.io/sync-options: Validate=false\n# \u4e0d\u6821\u9a8c CRD\nargocd.argoproj.io/sync-options: SkipDryRunOnMissingResource=true\n\nargocd.argoproj.io/sync-wave: "5"\n# \u6dfb\u52a0\u5916\u90e8\u94fe\u63a5 - \u7c7b\u4f3c Ingress\nlink.argocd.argoproj.io/external-link: http://my-grafana.com/pre-generated-link\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"syncPolicy:\n  syncOptions:\n    # \u53ea\u540c\u6b65\u4e0d\u540c\u6b65\u8d44\u6e90 - \u9009\u62e9\u6027\u540c\u6b65\n    # \u5f53\u8d44\u6e90\u975e\u5e38\u591a\u65f6\u9002\u7528\n    - ApplyOutOfSyncOnly=true\n")),Object(l.b)("h2",{id:"\u4e0d\u540c\u6b65\u90e8\u5206\u5b57\u6bb5"},"\u4e0d\u540c\u6b65\u90e8\u5206\u5b57\u6bb5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 cert-manager \u9884\u5148\u751f\u6210 secret \u5305\u542b labels \u548c annotations, \u4f46\u5185\u5bb9\u4e0d\u9700\u8981\u540c\u6b65"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u5e94\u7528\u7eac\u5ea6\u914d\u7f6e\u6216\u5168\u5c40\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/"},"Diffing Customization\xb6"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# \u5e94\u7528 spec \u914d\u7f6e\nspec:\n  ignoreDifferences:\n    - group: apps\n      kind: Deployment\n      name: guestbook\n      namespace: default\n      jsonPointers:\n        - /spec/replicas\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# argocd-cm \u914d\u7f6e - \u5168\u5c40\ndata:\n  resource.customizations: |\n    admissionregistration.k8s.io/MutatingWebhookConfiguration:\n      ignoreDifferences: |\n        jsonPointers:\n        - /webhooks/0/clientConfig/caBundle\n")),Object(l.b)("h3",{id:"\u5e38\u89c1\u5ffd\u7565-diff"},"\u5e38\u89c1\u5ffd\u7565 Diff"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# \u5982\u679c\u4f7f\u7528 argocd \u90e8\u7f72 argocd\n# \u5ffd\u7565 argocd-cm \u90e8\u5206\n- group: core\n  kind: ConfigMap\n  name: argocd-cm\n  jsonPointers:\n    - /data\n\n# \u5ffd\u7565\u90e8\u7f72\u7684 repilca \u6570\u91cf - \u6709\u65f6\u5019\u5e0c\u671b\u8fd0\u7ef4\u8c03\u6574\n- group: apps\n  kind: Deployment\n  jsonPointers:\n    - /spec/replicas\n\n# longhorn Volume \u5ffd\u7565\u90e8\u5206\u4f1a\u53d8\u5b57\u6bb5\n- group: longhorn.io\n  kind: Volume\n  jsonPointers:\n    - /spec/nodeID\n    - /spec/lastAttachedBy\n\n# \u5ffd\u7565\u6307\u5b9a Secret \u6570\u636e\n- group: core\n  kind: Secret\n  name: default-cert\n  jsonPointers:\n    - /data\n")),Object(l.b)("h2",{id:"sync"},"Sync"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The phase"),Object(l.b)("li",{parentName:"ul"},"The wave they are in (lower values first)"),Object(l.b)("li",{parentName:"ul"},"By kind (e.g. namespaces first)"),Object(l.b)("li",{parentName:"ul"},"By name")),Object(l.b)("h2",{id:"tricks"},"Tricks"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"bases:\n  # latest\n  - github.com/argoproj/argo-cd//manifests/cluster-install\n  # tag\n  - github.com/argoproj/argo-cd//manifests/cluster-install?ref=v0.11.1\n")),Object(l.b)("p",null,"\u6784\u5efa\u73af\u5883"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_NAME"),Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_NAMESPACE"),Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_REVISION"),Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_SOURCE_PATH"),Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_SOURCE_REPO_URL"),Object(l.b)("li",{parentName:"ul"},"ARGOCD_APP_SOURCE_TARGET_REVISION | master"),Object(l.b)("li",{parentName:"ul"},"KUBE_VERSION"),Object(l.b)("li",{parentName:"ul"},"KUBE_API_VERSIONS")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"the-server-could-not-find-the-requested-resource"},"the server could not find the requested resource"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CRD \u5b9a\u4e49\u4e0d\u5b58\u5728"),Object(l.b)("li",{parentName:"ul"},"Namespace \u4e0d\u5b58\u5728")),Object(l.b)("p",null,"\u7279\u6b8a\u60c5\u51b5\u53ef\u4ee5\u8003\u8651\u8df3\u8fc7"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  annotations:\n    argocd.argoproj.io/sync-options: SkipDryRunOnMissingResource=true\n")),Object(l.b)("h2",{id:"\u5347\u7ea7\u5e94\u7528\u65f6\u53ef\u80fd-crd-\u6709\u53d8\u5316\u5bfc\u81f4\u6821\u9a8c\u4e0d\u901a\u8fc7"},"\u5347\u7ea7\u5e94\u7528\u65f6\u53ef\u80fd CRD \u6709\u53d8\u5316\u5bfc\u81f4\u6821\u9a8c\u4e0d\u901a\u8fc7"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5148\u540c\u6b65 CRD")),Object(l.b)("h2",{id:"kustomize-build-\u5f02\u5e38"},"kustomize build \u5f02\u5e38"),Object(l.b)("p",null,"\u4f7f\u7528\u4e0e argocd \u76f8\u540c\u7248\u672c\u8bd5\u8bd5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v $PWD:/tmp -w /tmp registry.cn-hongkong.aliyuncs.com/cmi/argoproj_argocd:v2.0.1 bash\n")))}p.isMDXComponent=!0}}]);