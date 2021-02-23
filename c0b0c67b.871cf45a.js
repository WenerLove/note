(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{575:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(7),i=(a(0),a(734)),c={id:"tracing",title:"Tracing"},b={unversionedId:"devops/tracing/tracing",id:"devops/tracing/tracing",isDocsHomePage:!1,title:"Tracing",description:"Tracing",source:"@site/notes/devops/tracing/README.md",slug:"/devops/tracing/tracing",permalink:"/notes/devops/tracing/tracing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/tracing/README.md",version:"current",sidebar:"docs",previous:{title:"Golang Windows",permalink:"/notes/languages/go/go-windows"},next:{title:"\u6307\u6807\u76d1\u63a7",permalink:"/notes/devops/metrics/metrics"}},p=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"Jaeger vs Zipkin",id:"jaeger-vs-zipkin",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tracing"},"Tracing"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Tracing_(software)"}),"Tracing")),Object(i.b)("li",{parentName:"ul"},"Google ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://research.google.com/pubs/pub36356.html"}),"Dapper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a Large-Scale Distributed Systems Tracing Infrastructure"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://opentracing.io/"}),"opentracing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Vendor-neutral APIs and instrumentation for distributed tracing"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/openzipkin/zipkin"}),"openzipkin/zipkin"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jaegertracing/jaeger"}),"jaegertracing/jaeger"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Golang"),Object(i.b)("li",{parentName:"ul"},"Thrift"),Object(i.b)("li",{parentName:"ul"},"CNCF Jaeger, a Distributed Tracing System"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://jaegertracing.io/"}),"https://jaegertracing.io/")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/incubator-skywalking"}),"apache/skywalking"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://spring.io/projects/spring-cloud-sleuth"}),"Spring Cloud Sleuth"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.spring.io/spring-cloud-sleuth/reference/html/"}),"\u53c2\u8003\u624b\u518c")),Object(i.b)("li",{parentName:"ul"},"spring-cloud-sleuth-zipkin \u652f\u6301\u96c6\u6210 Zipkin\uff0c\u9ed8\u8ba4\u53d1\u9001\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:9411"),"\uff0c\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"spring.zipkin.baseUrl")," \u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u8bb0\u5f55 trace \u4fe1\u606f\u5230 Slf4J MDC"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/openzipkin-contrib/brave-opentracing"}),"openzipkin-contrib/brave-opentracing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OpenTracing \u9002\u914d Zipkin"))),Object(i.b)("li",{parentName:"ul"},"W3C ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/w3c/trace-context"}),"trace-context"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP \u6dfb\u52a0 trace \u5934 traceparent,traceparent"),Object(i.b)("li",{parentName:"ul"},"\u5934\u4e2d\u4fe1\u606f\u5305\u542b version\u3001trace-id\u3001parent-id\u3001trace-flags"))),Object(i.b)("li",{parentName:"ul"},"APM (application performance monitor)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm \\\n  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n  -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \\\n  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 \\\n  jaegertracing/all-in-one:latest\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"jaeger-vs-zipkin"},"Jaeger vs Zipkin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Jaeger",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Golang"),Object(i.b)("li",{parentName:"ul"},"CNCF \u9879\u76ee"),Object(i.b)("li",{parentName:"ul"},"\u66f4\u9002\u7528\u4e8e Kubernates \u73af\u5883"),Object(i.b)("li",{parentName:"ul"},"\u5206\u4e3a agent\u3001collector\u3001query \u7b49\u89d2\u8272"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 0.1% \u91c7\u6837"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/spring-cloud/spring-cloud-sleuth/issues/628"}),"spring-cloud-sleuth#628")," - Jaeger integration",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/openzipkin-contrib/brave-opentracing"}),"brave-opentracing")," \u6765\u4f7f\u7528\uff0c\u4f46\u4f1a\u4e22\u5931\u4e00\u4e9b jaeger \u7684\u7279\u6027"))))),Object(i.b)("li",{parentName:"ul"},"Zipkin",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java"),Object(i.b)("li",{parentName:"ul"},"\u5728\u5bb9\u5668\u5316\u6f6e\u6d41\u524d\u4fbf\u5df2\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"\u5355\u670d\u52a1\uff0c\u62a5\u8868\u3001\u91c7\u96c6"),Object(i.b)("li",{parentName:"ul"},"Spring Cloud Sleuth \u6709\u96c6\u6210")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"jaeger")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jaegertracing.io/docs/1.12/architecture/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://www.jaegertracing.io/img/architecture-v1.png",alt:"jaeger architecture"})))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"zipkin"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://zipkin.io/pages/architecture.html"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://zipkin.io/public/img/architecture-1.png",alt:"zipkin architecture"})))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.bizety.com/2019/01/14/distributed-tracing-for-microservices-jaeger-vs-zipkin/"}),"Distributed Tracing for Microservices: Jaeger vs. Zipkin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://logz.io/blog/zipkin-vs-jaeger/"}),"Zipkin vs Jaeger: Getting Started With Tracing"))))))}o.isMDXComponent=!0},734:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=o(a),j=r,m=u["".concat(c,".").concat(j)]||u[j]||s[j]||i;return a?n.a.createElement(m,b(b({ref:t},l),{},{components:a})):n.a.createElement(m,b({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);