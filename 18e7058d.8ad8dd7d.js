(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,O=u["".concat(b,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),l=(n(0),n(1107)),b={title:"Kubernetes \u7248\u672c"},i={unversionedId:"devops/kubernetes/k8s-version",id:"devops/kubernetes/k8s-version",isDocsHomePage:!1,title:"Kubernetes \u7248\u672c",description:"1.21 - 2021-04-08",source:"@site/notes/devops/kubernetes/k8s-version.md",slug:"/devops/kubernetes/k8s-version",permalink:"/notes/devops/kubernetes/k8s-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-version.md",version:"current",sidebar:"docs",previous:{title:"\u6211\u7684 K8S \u5b9e\u8df5",permalink:"/notes/devops/kubernetes/k8s-my-practice"},next:{title:"Kubernates \u7f51\u7edc",permalink:"/notes/devops/kubernetes/network/network"}},c=[{value:"1.21 - 2021-04-08",id:"121---2021-04-08",children:[]},{value:"1.20 - 2020-12-08",id:"120---2020-12-08",children:[]},{value:"1.19",id:"119",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"121---2021-04-08"},"1.21 - 2021-04-08"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"13 stable, 16 beta, 20 alpha, 2 \u5e9f\u5f03"),Object(l.b)("li",{parentName:"ul"},"Kustomize \u4ece v2.0.3 \u5347\u7ea7\u5230 v4.0.5 - \u4e4b\u524d\u56e0\u4e3a\u4f9d\u8d56\u95ee\u9898\u88ab block"),Object(l.b)("li",{parentName:"ul"},"kubelet \u652f\u6301\u7ed3\u6784\u5316\u65e5\u5fd7"),Object(l.b)("li",{parentName:"ul"},"TokenRequest, TokenRequestProjection - \u9ed8\u8ba4\u5f00\u542f"),Object(l.b)("li",{parentName:"ul"},"Stable/GA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CronJobs - 1.8 ScheduledJobs beta"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u53ef\u53d8\u7684 Secrets, ConfigMaps",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"kubelet \u4e0d watch \u53d8\u5316\uff0c\u51cf\u5c11 apiserver \u8d1f\u8f7d"))),Object(l.b)("li",{parentName:"ul"},"ServiceNodeExclusion, NodeDisruptionExclusion, LegacyNodeRoleBehavior"),Object(l.b)("li",{parentName:"ul"},"KEP-85 policy/v1/PodDisruptionBudget - 1.5 beta"),Object(l.b)("li",{parentName:"ul"},"KEP-23 \u652f\u6301 sysctl - \u81ea 1.4"))),Object(l.b)("li",{parentName:"ul"},"Beta",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"IPv4/IPv6 dual-stack"),Object(l.b)("li",{parentName:"ul"},"CSI Service Account Token"),Object(l.b)("li",{parentName:"ul"},"Generic ephemeral volumes - 1.19 alpha"),Object(l.b)("li",{parentName:"ul"},"Storage Capacity - 1.19 alpha",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u8c03\u5ea6\u4e0d\u4f1a\u5173\u5fc3\u5b58\u50a8\u7a7a\u95f4\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u540e\u7eed\u652f\u6301\u57fa\u4e8e\u8282\u70b9\u5b58\u50a8\u7a7a\u95f4\u8c03\u5ea6\u529f\u80fd"))),Object(l.b)("li",{parentName:"ul"},"Graceful node shutdown",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"1.21 \u9ed8\u8ba4\u5f00\u542f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ShutdownGracePeriod, ShutdownGracePeriodCriticalPods \u9ed8\u8ba4\u4e3a 0"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a\u975e 0 \u6fc0\u6d3b\u8282\u70b9\u4f18\u96c5\u5173\u673a"))),Object(l.b)("li",{parentName:"ul"},"\u4f9d\u8d56 systemd"))),Object(l.b)("li",{parentName:"ul"},"KEP-592 Job ttlSecondsAfterFinished",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Job \u5b8c\u6210\u540e\uff0c\u5728 TTL \u65f6\u95f4\u8fc7\u540e\u88ab\u5220\u9664"))))),Object(l.b)("li",{parentName:"ul"},"Alpha",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CSI Health Monitoring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},"Topology Aware Hints"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5728 EndpointSlice \u548c Endpoints \u6dfb\u52a0\u5143\u4fe1\u606f - hints"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/blob/master/keps/sig-network/2433-topology-aware-hints/README.md"},"KEP-2433")))),Object(l.b)("li",{parentName:"ul"},"kEP-2255 Pod label ",Object(l.b)("inlineCode",{parentName:"li"},"controller.kubernetes.io/pod-deletion-cost")," \u6807\u8bc6 \u5220\u9664\u6210\u672c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 0"),Object(l.b)("li",{parentName:"ul"},"\u5f71\u54cd ReplicaSet \u7f29\u5bb9\u8c03\u5ea6 \u903b\u8f91"))),Object(l.b)("li",{parentName:"ul"},"KEP-2214 Job \u7d22\u5f15",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"batch/v1/Job completionMode \u652f\u6301 Indexed"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/#completion-mode"},"Completion mode")))),Object(l.b)("li",{parentName:"ul"},"KEP-2232 \u505c\u6b62 Job",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".spec.suspend=true")," \u505c\u6b62\uff0c\u8bbe\u7f6e\u4e3a false \u6062\u590d\u8c03\u5ea6"))),Object(l.b)("li",{parentName:"ul"},"KEP_2227 Pod \u9ed8\u8ba4\u5bb9\u5668\u6807\u7b7e ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl.kubernetes.io/default-container"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u540e ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl exec")," \u53ef\u4ee5\u4e0d\u5728\u6307\u5b9a\u5bb9\u5668 - \u4f7f\u7528\u4e0a\u4f1a\u65b9\u4fbf\u5f88\u591a"))))),Object(l.b)("li",{parentName:"ul"},"\u5e9f\u5f03",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PodSecurityPolicy - 1.25 \u79fb\u9664, 1.8 beta, opt-in",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u89e3\u8026\u5e95\u5c42 Linux \u5b89\u5168\u548c\u90e8\u7f72\u5b89\u5168"),Object(l.b)("li",{parentName:"ul"},"\u66ff\u4ee3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/open-policy-agent/gatekeeper/"},"open-policy-agent/gatekeeper/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kyverno/kyverno"},"kyverno/kyverno/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cruise-automation/k-rail"},"cruise-automation/k-rail")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/"},"PodSecurityPolicy Deprecation: Past, Present, and Future"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PSP \u4f7f\u7528\u76f8\u5bf9\u56f0\u60d1"),Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u6709\u66f4\u597d\u4e09\u65b9\u66ff\u4ee3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/issues/2579"},"KEP-2579")," \u8ba8\u8bba\u4e0b\u4e00\u4e2a\u66ff\u4ee3\u65b9\u6848"))))),Object(l.b)("li",{parentName:"ul"},"Service \u7684 ",Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},"topologyKeys")," \u5b57\u6bb5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u66ff\u4ee3\u529f\u80fd\u4e3a Topology Aware Hints - 1.21 Alpha"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"kubectl alpha debug")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl debug")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/blog/2021/04/08/kubernetes-1-21-release-announcement/"},"Kubernetes 1.21: Power to the Community")),Object(l.b)("li",{parentName:"ul"},"sysdig ",Object(l.b)("a",{parentName:"li",href:"https://sysdig.com/blog/whats-new-kubernetes-1-21/"},"What\u2019s new in Kubernetes 1.21"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"POD")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: sysctl-example\n  annotations:\n    # \u65e7\u7684 sysctl \u63a7\u5236\n    security.alpha.kubernetes.io/sysctls: kernel.shm_rmid_forced=1\n    # \u5b9a\u4e49 kubectl \u7684\u9ed8\u8ba4 \u5bb9\u5668\n    kubectl.kubernetes.io/default-container: 'test'\n    # \u5220\u9664\u6210\u672c Alpha\n    # \u5f71\u54cd\u8c03\u5ea6\n    controller.kubernetes.io/pod-deletion-cost: '10'\nspec:\n  securityContext:\n    # \u65b0\u7684 sysctl \u63a7\u5236\n    sysctls:\n      - name: kernel.shm_rmid_forced\n        value: 1\n  # \u4f18\u96c5\u505c\u6b62 - Alpha\n  # Pod \u7ea7\u522b\n  terminationGracePeriodSeconds: 3600\n  containers:\n    containers:\n      - name: test\n        image: alpine\n        annotations:\n        livenessProbe:\n          # \u5bb9\u5668\u8986\u76d6 Pod \u7ea7\u522b\u914d\u7f6e\n          terminationGracePeriodSeconds: 60\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"JOB")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\n kind: Job\n metadata:\n   name: 'indexed-job'\n spec:\n  # \u505c\u6b62\u7684 Job\n  suspend: true\n\n  completions: 5\n  parallelism: 3\n  # \u7d22\u5f15 Job\n  # \u6bcf\u4e2a Pod \u7684\u7d22\u5f15\u4e3a 0 \u5230 completions-1\n  # \u9ed8\u8ba4 NonIndexed\n  completionMode: Indexed\n")),Object(l.b)("h2",{id:"120---2020-12-08"},"1.20 - 2020-12-08"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"11 stable, 15 beta, 16 alpha"),Object(l.b)("li",{parentName:"ul"},"\u5e9f\u5f03 dockershim",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u662f\u5e9f\u5f03 dockershim - \u6682\u65e0\u79fb\u9664\u8ba1\u5212"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 CRI \u6807\u51c6\u63a5\u53e3 - \u76ee\u524d docker \u4e0d\u652f\u6301, containerd \u9ed8\u8ba4\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4f7f\u7528 containerd, docker \u4f9d\u7136\u80fd\u6b63\u5e38\u4f7f\u7528, \u53ea\u662f\u79fb\u9664\u4e86\u7279\u6b8a\u4e2d\u95f4\u5c42\u652f\u6301: docker -> shim -> containerd"),Object(l.b)("li",{parentName:"ul"},"\u975e Linux \u5e73\u53f0 containerd \u65e0\u652f\u6301\uff0c\u9700\u8981 docker"),Object(l.b)("li",{parentName:"ul"},"Mirantis \u4f1a\u901a\u8fc7 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/Mirantis/cri-dockerd"},"Mirantis/cri-dockerd")," \u6dfb\u52a0 docker \u7684 cri \u652f\u6301"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u7ed3\u8bba"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7ef4\u6301\u73b0\u72b6"))))),Object(l.b)("li",{parentName:"ul"},"go 1.15.5"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u518d\u9ed8\u8ba4\u5305\u542b\u4e91\u5e73\u53f0\u63a7\u5236\u5668 - \u7531\u4e91\u5e73\u53f0\u81ea\u884c\u63d0\u4f9b"),Object(l.b)("li",{parentName:"ul"},"Stable/GA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CSI \u5377\u5feb\u7167"),Object(l.b)("li",{parentName:"ul"},"PID \u9650\u5236 - SupportNodePidsLimit"),Object(l.b)("li",{parentName:"ul"},"TokenRequest/TokenRequestProjection - \u76ee\u524d\u8fd8\u9700\u8981\u6253\u5f00\u7279\u6027\uff0c1.21 \u4f1a\u9ed8\u8ba4\u6253\u5f00"),Object(l.b)("li",{parentName:"ul"},"node.k8s.io API \u8fdb\u5165 ",Object(l.b)("inlineCode",{parentName:"li"},"v1")," \u5e9f\u5f03 ",Object(l.b)("inlineCode",{parentName:"li"},"v1beta1")))),Object(l.b)("li",{parentName:"ul"},"Beta",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"API \u4f18\u5148\u7ea7\u5904\u7406 - \u5bf9 API \u8fdb\u884c\u4f18\u5148\u7ea7\u5206\u5c42\uff0c\u4f18\u5148\u5904\u7406\u91cd\u8981 API \u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u975e\u9012\u5f52 \u5377\u6240\u5f52\u5c5e\u5173\u7cfb/fsgroup - \u53ef\u7406\u89e3\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"chown $GROUP:$USER $VOLUME")),Object(l.b)("li",{parentName:"ul"},"FSGroup CSIDriver \u7b56\u7565"),Object(l.b)("li",{parentName:"ul"},"RootCAConfigMap - \u6240\u6709 NS \u53ef\u8bbf\u95ee\uff0c\u7528\u4e8e\u6821\u9a8c kube-apiserver \u94fe\u63a5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"kubectl debug")),Object(l.b)("li",{parentName:"ul"},"SetHostnameAsFQDN"))),Object(l.b)("li",{parentName:"ul"},"Alpha",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CronJob v2"),Object(l.b)("li",{parentName:"ul"},"\u4ece\u65b0\u5b9e\u73b0 IPv4/IPv6 \u53cc\u6808"),Object(l.b)("li",{parentName:"ul"},"CSI \u5b89\u5168\u589e\u5f3a - CSIServiceAccountToken - \u4f7f\u7528\u5176\u4ed6 SA \u800c\u975e\u5f53\u524d"),Object(l.b)("li",{parentName:"ul"},"\u4f18\u96c5\u7684\u8282\u70b9\u505c\u6b62 - GracefulNodeShutdown"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u65e5\u5fd7\u654f\u611f\u4fe1\u606f - ",Object(l.b)("inlineCode",{parentName:"li"},"--experimental-logging-sanitization"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u5b57\u6bb5 passwords, keys, tokens"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7ec4\u4ef6 - \u4e0d\u652f\u6301\u7528\u6237 Pod \u7ef4\u5ea6\u76f8\u5173\u65e5\u5fd7",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"kube-controller-manager"),Object(l.b)("li",{parentName:"ul"},"kube-apiserver"),Object(l.b)("li",{parentName:"ul"},"kube-scheduler"),Object(l.b)("li",{parentName:"ul"},"kubelet"))))),Object(l.b)("li",{parentName:"ul"},"\u6240\u6709 Pod \u8d44\u6e90\u6307\u6807 ",Object(l.b)("inlineCode",{parentName:"li"},"/metrics/resources")," - ",Object(l.b)("inlineCode",{parentName:"li"},"--show-hidden-metrics-for-version=1.20"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/#kube-scheduler-metrics"},"kube-scheduler metrics")))))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u9047\u5230\u7684\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"exec probe \u4e0d\u4f1a\u8d85\u65f6\uff0c\u73b0\u5728 ExecProbeTimeout \u4f1a\u751f\u6548\uff0c\u6ca1\u6709\u914d\u7f6e\u7684\u9ed8\u8ba4 1s"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md"},"CHANGELOG-1.20"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# IPv4/IPv6 \u53cc\u6808\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\n  labels:\n    app: MyApp\nspec:\n  # \u53ef\u96c6\u7fa4\u7ef4\u5ea6\u914d\u7f6e\n  # ipFamilyPolicy: SingleStack # \u5355\u6808\n  ipFamilyPolicy: PreferDualStack\n  # \u53ef\u9009\n  ipFamilies:\n    - IPv6\n    - IPv4\n  selector:\n    app: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n")),Object(l.b)("h2",{id:"119"},"1.19"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"EndpointSlices \u9ed8\u8ba4\u542f\u7528"),Object(l.b)("li",{parentName:"ul"},"Ingress GA"),Object(l.b)("li",{parentName:"ul"},"seccomp GA"),Object(l.b)("li",{parentName:"ul"},"KubeSchedulerConfiguration Beta"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5bb9\u91cf\u8ddf\u8e2a - Alpha",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e4b\u524d\u8c03\u5ea6\u65f6\u90fd\u4e0d\u4f1a\u8003\u8651\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf"))),Object(l.b)("li",{parentName:"ul"},"\u901a\u7528\u4e34\u65f6\u5b58\u50a8\u5377"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u53ef\u53d8\u7684 Secrets \u548c ConfigMaps - Beta"),Object(l.b)("li",{parentName:"ul"},"kubernetes/dashboard v2"),Object(l.b)("li",{parentName:"ul"},"\u901a\u7528 ",Object(l.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"},"ephemeral volumes"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u4e0e pod \u7ed1\u5b9a"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528\u52a8\u6001 provisioning \u5b58\u50a8\u4f5c\u4e3a\u4e34\u65f6\u5377 - ALPHA"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.19.md"},"CHANGELOG-1.19"))))}p.isMDXComponent=!0}}]);