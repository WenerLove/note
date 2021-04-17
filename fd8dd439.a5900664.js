(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{902:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(8),s=(t(0),t(914)),o={id:"k8s-consul",title:"Consol"},c={unversionedId:"devops/kubernetes/app/k8s-consul",id:"devops/kubernetes/app/k8s-consul",isDocsHomePage:!1,title:"Consol",description:"Tips",source:"@site/notes/devops/kubernetes/app/k8s-consul.md",slug:"/devops/kubernetes/app/k8s-consul",permalink:"/notes/devops/kubernetes/app/k8s-consul",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/k8s-consul.md",version:"current",sidebar:"docs",previous:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/app/helm2"},next:{title:"Minio",permalink:"/notes/devops/kubernetes/app/k8s-minio"}},l=[{value:"Tips",id:"tips",children:[]},{value:"DNS",id:"dns",children:[]},{value:"ACL",id:"acl",children:[]}],u={toc:l};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/hashicorp/consul-k8s"},"Consul K8S")," \u4f7f\u7528\u573a\u666f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u90e8\u7f72 Consul \u96c6\u7fa4\u670d\u52a1"),Object(s.b)("li",{parentName:"ul"},"\u5141\u8bb8 Consol \u5ba2\u6237\u7aef\u6253\u901a\u670d\u52a1"),Object(s.b)("li",{parentName:"ul"},"Connect Service Mesh"),Object(s.b)("li",{parentName:"ul"},"\u540c\u6b65 K8S \u670d\u52a1\u5230 Consul"))),Object(s.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56 PV \u5b58\u50a8"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.consul.io/docs/k8s"},"\u6587\u6863"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'helm repo add hashicorp https://helm.releases.hashicorp.com\n\n# \u9ed8\u8ba4\u90e8\u7f72    server client dns ui\n# \u9ed8\u8ba4\u4e0d\u90e8\u7f72 tls acl federation externalService snapshotAgent syncCatalog \n#   connectInject centralConfig meshGateway ingressGateways terminatingGateways\n# \u9ed8\u8ba4 datacenter \u4e3a dc1\n# \u5b89\u88c5\u5230 service \u7a7a\u95f4\n# --set server.affinity=null \u5141\u8bb8\u5b89\u88c5\u5230\u5355\u673a\n# server.storageClass \u4fee\u6539\u5b58\u50a8\u7c7b\u578b\nhelm install consul hashicorp/consul \\\n  -n consul --create-namespace \\\n  --set global.name=consul --set global.datacenter=center\n\n# \u8f6c\u53d1 UI\n# \u9ed8\u8ba4\u6ca1\u6709 tls \u548c acl\nkubectl port-forward -n consul svc/consul-server 8500:8500\n# \u5982\u679c\u542f\u7528\u4e86 ACL\nkubectl get -n consul secrets/consul-bootstrap-acl-token --template={{.data.token}} | base64 -d\n\n# \u8bbf\u95ee consul\n# \u6bcf\u4e2a\u8282\u70b9\u90fd\u6709 agent \u56e0\u6b64\u76f4\u63a5\u4f7f\u7528 HOST_IP \u5373\u53ef\nexport CONSUL_HTTP_ADDR="${HOST_IP}:8500"\nconsul kv put hello world\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"env:\n- name: ADVERTISE_IP\n  valueFrom:\n    fieldRef:\n      fieldPath: status.podIP\n- name: NAMESPACE\n  valueFrom:\n    fieldRef:\n      fieldPath: metadata.namespace\n- name: NODE\n  valueFrom:\n    fieldRef:\n      fieldPath: status.nodeName\n- name: HOST_IP\n  valueFrom:\n    fieldRef:\n      fieldPath: status.hostIP\n- name: CONSUL_HTTP_ADDR\n  value: $(HOST_IP):8500\n")),Object(s.b)("h2",{id:"dns"},"DNS"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'\n# KubeDNS\n# ==========\nCONSUL_DNS_IP=$(kubectl get svc consul-dns -o jsonpath=\'{.spec.clusterIP}\' -n service)\ncat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    addonmanager.kubernetes.io/mode: EnsureExists\n  name: kube-dns\n  namespace: kube-system\ndata:\n  stubDomains: |\n    {"consul": ["$CONSUL_DNS_IP"]}\nEOF\n\nkubectl get configmap kube-dns -n kube-system -o yaml\n\n# CoreDNS\n# ==========\nkubectl edit configmap coredns -n kube-system\n# Corefile: |\n#   consul {\n#     errors\n#     cache 30\n#     forward . <consul-dns-service-cluster-ip>\n#   }\n\n# \u6d4b\u8bd5\u89e3\u6790\nkubectl run --rm -i -t dns-test --image=wener/base --restart=Never -- nslookup consul.service.consul\n')),Object(s.b)("h2",{id:"acl"},"ACL"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.consul.io/docs/security/acl/auth-methods/kubernetes"},"Kubernetes Auth Method"))))}i.isMDXComponent=!0},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),i=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||s;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);