(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{315:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),l=(r(0),r(812)),s={title:"Lens"},u={unversionedId:"devops/kubernetes/app/lens",id:"devops/kubernetes/app/lens",isDocsHomePage:!1,title:"Lens",description:"Tips",source:"@site/notes/devops/kubernetes/app/lens.md",slug:"/devops/kubernetes/app/lens",permalink:"/notes/devops/kubernetes/app/lens",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/lens.md",version:"current",sidebar:"docs",previous:{title:"kubed",permalink:"/notes/devops/kubernetes/app/kubed"},next:{title:"MinIO Kubernetes Operator",permalink:"/notes/devops/kubernetes/app/minio-operator"}},i=[{value:"Tips",id:"tips",children:[]},{value:"features/metrics",id:"featuresmetrics",children:[{value:"kube-prometheus",id:"kube-prometheus",children:[]}]},{value:"features/user-mode",id:"featuresuser-mode",children:[]}],o={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens"},"lensapp/lens")," - Lens - The Kubernetes IDE"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/tree/master/src/features/metrics"},"src/features/metrics")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/tree/master/src/features/user-mode"},"src/features/user-mode"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ClusterRole lens-user",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"LIST namespace"),Object(l.b)("li",{parentName:"ul"},"system:authenticated"))),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u80fd\u8bbf\u95ee\u6709\u6743\u9650\u8bbf\u95ee\u7684\u7a7a\u95f4")))),Object(l.b)("h2",{id:"featuresmetrics"},"features/metrics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Namespace lens-metrics",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"StatefulSet prometheus",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prometheus",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time=2d")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.size=5GB")))),Object(l.b)("li",{parentName:"ul"},"ServiceAccount prometheus"),Object(l.b)("li",{parentName:"ul"},"Service prometheus",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"80 -> 9090"),Object(l.b)("li",{parentName:"ul"},"prometheus.io/scrape: 'true'"))),Object(l.b)("li",{parentName:"ul"},"ConfigMap prometheus-config",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prometheus.yaml"))),Object(l.b)("li",{parentName:"ul"},"ConfigMap prometheus-rules",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"alertmanager.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"etcd3.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"general.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"kube-state-metrics.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"kubelet.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"kubernetes.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"node.rules.yaml"),Object(l.b)("li",{parentName:"ul"},"prometheus.rules.yaml"))))),Object(l.b)("li",{parentName:"ul"},"ClusterRole - lens-prometheus",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ServiceAccount prometheus"))),Object(l.b)("li",{parentName:"ul"},"DaemonSet - node-exporter",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Service 80 -> 9100"))),Object(l.b)("li",{parentName:"ul"},"Deployment - kube-state-metrics"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/blob/master/troubleshooting/custom-prometheus.md"},"Using Custom Prometheus"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u4ee5\u4f7f\u7528 HELM \u5b89\u88c5\u7684 - \u9700\u8981\u6293\u53d6\u65f6\u95f4\u5c0f\u4e8e 1 \u5206\u949f\nhelm upgrade --set server.global.scrape_interval=30s prometheus stable/prometheus\n")),Object(l.b)("h3",{id:"kube-prometheus"},"kube-prometheus"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/issues/180"},"#180")," - Documentation is incorrect for Prometheus troubleshooting"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/issues/656"},"#656")," - What are the requirements to make my prometheus deployment compatible with Lens?"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u9700\u8981 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/lensapp/lens/blob/master/troubleshooting/custom-prometheus.md#kube-prometheus"},"relabel"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8be5\u8bf4\u660e\u6709\u95ee\u9898"))),Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9 helm \u5b89\u88c5\uff0c\u6307\u5b9a ",Object(l.b)("inlineCode",{parentName:"li"},"monitoring/kube-prometheus-prometheus:9090"))),Object(l.b)("p",null,"bitnam/kube-prometheus ",Object(l.b)("strong",{parentName:"p"},"values.yaml")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# Lens\n# ====\nnode-exporter:\n  serviceMonitor:\n    # interval: 10s\n    relabelings:\n    - action: replace\n      regex: (.*)\n      replacement: $1\n      sourceLabels:\n      - __meta_kubernetes_pod_node_name\n      targetLabel: kubernetes_node\n\nkubelet:\n  serviceMonitor:\n    # interval: 15s\n    metricRelabelings:\n    - action: replace\n      sourceLabels:\n      - node\n      targetLabel: instance\n\n# limit & request works\nkube-state-metrics:\n  serviceMonitor:\n    honorLabels: true\n")),Object(l.b)("h2",{id:"featuresuser-mode"},"features/user-mode"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: lens-user\nrules:\n  - verbs:\n      - list\n    apiGroups:\n      - ''\n    resources:\n      - namespaces\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: lens-user\nsubjects:\n  - kind: Group\n    apiGroup: rbac.authorization.k8s.io\n    name: 'system:authenticated'\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: lens-user\n")))}b.isMDXComponent=!0},812:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,O=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return r?a.a.createElement(O,u(u({ref:t},o),{},{components:r})):a.a.createElement(O,u({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=r[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);