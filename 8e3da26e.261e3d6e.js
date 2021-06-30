(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1107:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),s=n,d=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},652:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),l=(a(0),a(1107)),b={title:"Dapr"},c={unversionedId:"dev/cloud/dapr",id:"dev/cloud/dapr",isDocsHomePage:!1,title:"Dapr",description:"- dapr/dapr \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/dev/cloud/dapr.md",slug:"/dev/cloud/dapr",permalink:"/notes/dev/cloud/dapr",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/cloud/dapr.md",version:"current",sidebar:"docs",previous:{title:"Dapr Version",permalink:"/notes/dev/cloud/dapr-version"},next:{title:"\u65e5\u5386",permalink:"/notes/dev/domain/calender"}},i=[{value:"SDK",id:"sdk",children:[]},{value:"Sidecar",id:"sidecar",children:[]},{value:"Actor",id:"actor",children:[]},{value:"Notes",id:"notes",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/dapr/dapr"},"dapr/dapr")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u5f00\u53d1\u5de5\u5177\u96c6")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew install dapr/tap/dapr-cli\n\n# \u672c\u5730\u542f\u52a8 Go \u5e94\u7528\ndapr run --app-id example-service \\\n  --app-protocol grpc \\\n  --app-port 50001 \\\n  go run main.go\n\n# \u542f\u52a8 JS \u5e94\u7528\ndapr run --app-id nodeapp --app-port 3000 --dapr-http-port 3500 app.js\n")),Object(l.b)("h2",{id:"sdk"},"SDK"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Language"),Object(l.b)("th",{parentName:"tr",align:"left"},"Status"),Object(l.b)("th",{parentName:"tr",align:"center"},"Client"),Object(l.b)("th",{parentName:"tr",align:"center"},"Server"),Object(l.b)("th",{parentName:"tr",align:"center"},"Actor"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},".NET"),Object(l.b)("td",{parentName:"tr",align:"left"},"Stable"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"ASP.NET Core"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Python"),Object(l.b)("td",{parentName:"tr",align:"left"},"Stable"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"gRPC"),Object(l.b)("td",{parentName:"tr",align:"center"},"FastAPI",Object(l.b)("br",null),"Flask")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Java"),Object(l.b)("td",{parentName:"tr",align:"left"},"Stable"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"Spring Boot"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Go"),Object(l.b)("td",{parentName:"tr",align:"left"},"Stable"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PHP"),Object(l.b)("td",{parentName:"tr",align:"left"},"Stable"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Client",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u65b9\u6cd5\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"PubSub"),Object(l.b)("li",{parentName:"ul"},"\u7ed1\u5b9a\u64cd\u4f5c"),Object(l.b)("li",{parentName:"ul"},"Secret \u83b7\u53d6"),Object(l.b)("li",{parentName:"ul"},"Virtual Actor \u4ea4\u4e92"))),Object(l.b)("li",{parentName:"ul"},"Server \u6269\u5c55 - Dapr \u670d\u52a1\u6269\u5c55",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u80fd\u88ab\u5176\u4ed6\u670d\u52a1\u8c03\u7528"),Object(l.b)("li",{parentName:"ul"},"\u8ba2\u9605\u4e3b\u9898"))),Object(l.b)("li",{parentName:"ul"},"Actor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u88ab\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001\u4fdd\u5b58\u83b7\u53d6"),Object(l.b)("li",{parentName:"ul"},"Timer \u56de\u8c03"),Object(l.b)("li",{parentName:"ul"},"\u6301\u4e45\u5316 reminder")))),Object(l.b)("h2",{id:"sidecar"},"Sidecar"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 3500"),Object(l.b)("li",{parentName:"ul"},"\u5143\u6570\u636e - /v1.0/metadata"),Object(l.b)("li",{parentName:"ul"},"\u5065\u5eb7 - /v1.0/healthz"),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u8c03\u7528 - /v1.0/invoke",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gRPC, HTTP"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/v1.0/invoke/<appId>/method/<method-name>"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"/v1.0/invoke/nodeapp.production/method/neworder"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"production \u4e3a namespace"))))),Object(l.b)("li",{parentName:"ul"},"NameResolution - consul, dns, kubernetes, mdns"))),Object(l.b)("li",{parentName:"ul"},"\u72b6\u6001\u7ba1\u7406 - /v1.0/state",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Redis, PostgreSQL, MySQL, Hazelcast, Consul, MongoDB, Zookeeper"))),Object(l.b)("li",{parentName:"ul"},"PubSub - /v1.0/publish, /v1.0/subscribe",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Kafka, Hazelcast, MQTT, NATS Streaming, Pulsar, RabbitMQ, Redis"))),Object(l.b)("li",{parentName:"ul"},"Binding - /v1.0/bindings",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 APN, Cron, HTTP, Kafka, MQTT, MySQL, PostgreSQL, RabbitMQ, Redis, SMTP, Local Storage, AliOSS"))),Object(l.b)("li",{parentName:"ul"},"Actor - /v1.0/actors",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f9d\u8d56 state - etag, tx \u652f\u6301"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/v1.0/actors/<actorType>/<actorId>/<method/state/timers/reminders>")))),Object(l.b)("li",{parentName:"ul"},"Observability"),Object(l.b)("li",{parentName:"ul"},"\u5bc6\u94a5\u7ba1\u7406 - /v1.0/secrets",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Env, File, Vault, Kubernetes Vault")))),Object(l.b)("h2",{id:"actor"},"Actor"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Actor_model"},"Actor")," - lowest-level \u201cunit of computation\u201d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/orleans-virtual-actors/"},"Virtual Actors")),Object(l.b)("li",{parentName:"ul"},"Go \u4e0d\u652f\u6301 actor"),Object(l.b)("li",{parentName:"ul"},"actor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 state"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 sub - \u53ef\u4ee5 pub")))),Object(l.b)("h2",{id:"notes"},"Notes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dapr - \u547d\u4ee4\u884c"),Object(l.b)("li",{parentName:"ul"},"daprd - sidecar"),Object(l.b)("li",{parentName:"ul"},"dashboard - \u9762\u677f"),Object(l.b)("li",{parentName:"ul"},"placement",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"distributed hashing - distribute the actor instances across various pods of the user service"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e actor"))))),Object(l.b)("li",{parentName:"ul"},"SDK - Go, Java, PHP, Python, .NET - WIP JS, Rust, C++",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.dapr.io/developing-applications/sdks/sdk-serialization/"},"Serialization")))),Object(l.b)("li",{parentName:"ul"},"Middleware",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9650\u6d41\u3001OAuth2\u3001OAuth2 client credentials\u3001Bearer\u3001OPA"),Object(l.b)("li",{parentName:"ul"},"Uppercase - \u6d4b\u8bd5\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"~/.dapr/",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"config.yaml"),Object(l.b)("li",{parentName:"ul"},"components/",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pubsub.yaml"),Object(l.b)("li",{parentName:"ul"},"statestore.yaml"))),Object(l.b)("li",{parentName:"ul"},"bin/",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"daprd"),Object(l.b)("li",{parentName:"ul"},"dashboard"),Object(l.b)("li",{parentName:"ul"},"web/"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.dapr.io/reference/"},"Dapr Reference"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# self-host \u521d\u59cb\u5316 - docker - placement :50005, redis :6379, zipkin :9411\n# --network \u6307\u5b9a docker network\ndapr init\ndapr init -s # slim self-hosted - \u4e0d\u542f\u52a8 placement service, Redis, Zipkin\n\n# k8s \u521d\u59cb\u5316\n# --enable-ha\n# --enable-mtls - \u9ed8\u8ba4\u5f00\u542f\n# -n dapr-system\ndapr init -k\ndapr init -k --wait --timeout 600 --runtime-version 1.1.0 # \u6307\u5b9a\u7248\u672c\u3001\u8d85\u65f6\u3001\u7b49\u5f85\u5b8c\u6210\n\n# \u9762\u677f - \u76ee\u524d\u529f\u80fd\u6bd4\u8f83\u7b80\u5355\ndapr dashboard -p 9999\n\n# \u5b9e\u9a8c sidecar\ndapr run --app-id myapp --dapr-http-port 3500\n# \u5b58\u50a8\u72b6\u6001\ncurl -X POST -H "Content-Type: application/json" -d \'[{ "key": "name", "value": "Bruce Wayne"}]\' http://localhost:3500/v1.0/state/statestore\ndocker exec -it dapr_redis redis-cli keys \'*\'\n# hash "myapp||name"\n\n# \u5b9e\u9a8c\u5b9a\u4e49 secret \u7ec4\u4ef6\necho \'{"my-secret" : "Secret here"}\' > mysecrets.json\nmkdir my-components\ncat <<CONF > my-components/localSecretStore.yaml\napiVersion: dapr.io/v1alpha1\nkind: Component\nmetadata:\n  name: my-secret-store\n  namespace: default\nspec:\n  type: secretstores.local.file\n  version: v1\n  metadata:\n  - name: secretsFile\n    value: $PWD/mysecrets.json\n  - name: nestedSeparator\n    value: ":"\nCONF\ndapr run --app-id myapp --dapr-http-port 3500 --components-path ./my-components\n# \u8bf7\u6c42 json \u4e2d\u7684\u5185\u5bb9\ncurl http://localhost:3500/v1.0/secrets/my-secret-store/my-secret\n')),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CDR Configuration"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"li"},'dapr.io/config: "zipkin"')," \u4f7f\u7528")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: dapr.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: zipkin\n  namespace: default\nspec:\n  tracing:\n    samplingRate: "1"\n    zipkin:\n      # \u53ef\u4ee5 selfhost\n      endpointAddress: "http://localhost:9411/api/v2/spans"\n      # k8s\n      endpointAddress: "http://zipkin.default.svc.cluster.local:9411/api/v2/spans"\n\n  # API ACL\n  api:\n    allowed:\n    - name: state # state, invoke, secrets, bindings, publish, actors, metadata\n      version: v1.0\n      protocol: http # http, grpc\n\n  # \u670d\u52a1\u8bbf\u95ee\u63a7\u5236\n  accessControl:\n    defaultAction: deny\n    trustDomain: "public"\n    policies:\n    - appId: app1\n      defaultAction: allow\n      trustDomain: \'public\'\n      namespace: "default"\n    - appId: app1\n      defaultAction: deny\n      trustDomain: \'public\'\n      namespace: "default"\n      operations:\n      - name: /op1 # /op1/*\n        httpVerb: [\'POST\', \'PUT\'] # [\'*\']\n        action: allow\n\n  # \u9884\u89c8\u7279\u6027\n  features:\n  - name: Feature1\n    enabled: true\n')))}o.isMDXComponent=!0}}]);