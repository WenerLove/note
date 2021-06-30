(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1107:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,d=s["".concat(o,".").concat(b)]||s[b]||m[b]||i;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},793:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),i=(t(0),t(1107)),o={id:"guava",title:"Guava"},c={unversionedId:"java/library/guava",id:"java/library/guava",isDocsHomePage:!1,title:"Guava",description:"Gauva",source:"@site/notes/java/library/guava.md",slug:"/java/library/guava",permalink:"/notes/java/library/guava",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/guava.md",version:"current",sidebar:"docs",previous:{title:"Spring Security",permalink:"/notes/java/spring/security"},next:{title:"Hazelcast",permalink:"/notes/java/library/hazelcast"}},l=[{value:"Tips",id:"tips",children:[]},{value:"Performance",id:"performance",children:[{value:"TypeToken",id:"typetoken",children:[]},{value:"Immutable",id:"immutable",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"gauva"},"Gauva"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("h3",{id:"typetoken"},"TypeToken"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bf9\u6027\u80fd\u6709\u4e00\u5b9a\u5f71\u54cd, \u8c28\u614e\u4f7f\u7528")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Benchmark                       Mode  Cnt     Score     Error  Units\nBenchTypeToken.generic          avgt   10     4.001 \xb1   0.197  ns/op\nBenchTypeToken.typeTokenString  avgt   10   973.403 \xb1  13.519  ns/op\nBenchTypeToken.typeTokenTwo     avgt   10  3289.355 \xb1 134.182  ns/op\nBenchTypeToken.typeTokenVoid    avgt   10  1019.551 \xb1  43.565  ns/op\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@State(Scope.Thread)\n@OutputTimeUnit(TimeUnit.NANOSECONDS)\n@Warmup(iterations = 4)\n@Measurement(iterations = 10)\n@BenchmarkMode(Mode.AverageTime)\npublic class BenchTypeToken {\n  public static void main(String[] args) throws RunnerException {\n    Options options =\n        new OptionsBuilder()\n            .include(BenchTypeToken.class.getSimpleName())\n            .threads(1)\n            .forks(1)\n            .shouldFailOnError(true)\n            .shouldDoGC(true)\n            .jvmArgs("-server")\n            .measurementTime(TimeValue.seconds(2))\n            .build();\n    new Runner(options).run();\n  }\n\n  @Benchmark\n  public void typeTokenString(Blackhole bh) {\n    bh.consume(new ATyped());\n  }\n\n  @Benchmark\n  public void typeTokenVoid(Blackhole bh) {\n    bh.consume(new ATyped());\n  }\n\n  @Benchmark\n  public void typeTokenTwo(Blackhole bh) {\n    bh.consume(new ATyped2());\n  }\n\n  @Benchmark\n  public void generic(Blackhole bh) {\n    bh.consume(new AGen());\n  }\n\n  static class ATyped extends TypedImpl<Void> {}\n\n  static class ATypedS extends TypedImpl<String> {}\n\n  static class ATyped2 extends TypedImpl2<Void, Void> {}\n\n  static class AGen extends GenImpl<Void> {}\n\n  @Getter\n  @Setter\n  static class TypedImpl<IN> {\n\n    private final TypeToken<IN> in = new TypeToken<IN>(getClass()) {};\n  }\n\n  @Getter\n  @Setter\n  static class TypedImpl2<IN, OUT> {\n\n    private final TypeToken<IN> in = new TypeToken<IN>(getClass()) {};\n    private final TypeToken<OUT> out = new TypeToken<OUT>(getClass()) {};\n  }\n\n  @Getter\n  @Setter\n  static class GenImpl<IN> {}\n}\n')),Object(i.b)("h3",{id:"immutable"},"Immutable"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6bd4\u6b63\u5e38\u7684\u6027\u80fd\u7a0d\u5fae\u597d\u4e00\u70b9\u70b9")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Benchmark                     Mode  Cnt     Score     Error  Units\nBenchImmutable.immutableList  avgt   10  4288.096 \xb1  97.184  ns/op\nBenchImmutable.immutableMap   avgt   10  7922.092 \xb1 368.066  ns/op\nBenchImmutable.list           avgt   10  4739.961 \xb1 131.327  ns/op\nBenchImmutable.map            avgt   10  8779.917 \xb1 498.843  ns/op\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@State(Scope.Thread)\n@OutputTimeUnit(TimeUnit.NANOSECONDS)\n@Warmup(iterations = 4)\n@Measurement(iterations = 10)\n@BenchmarkMode(Mode.AverageTime)\npublic class BenchImmutable {\n  public static void main(String[] args) throws RunnerException {\n    Options options =\n        new OptionsBuilder()\n            .include(BenchImmutable.class.getSimpleName())\n            .threads(1)\n            .forks(1)\n            .shouldFailOnError(true)\n            .shouldDoGC(true)\n            .jvmArgs("-server")\n            .measurementTime(TimeValue.seconds(8))\n            .build();\n    new Runner(options).run();\n  }\n\n  @Benchmark\n  public void list(Blackhole bh) {\n    ArrayList<Integer> list = Lists.newArrayList();\n    for (int i = 0; i < 100; i++) {\n      list.add(i);\n    }\n    for (int i = 0; i < 1000; i++) {\n      bh.consume(list.get(i % 100));\n    }\n  }\n\n  @Benchmark\n  public void immutableList(Blackhole bh) {\n    Builder<Integer> builder = ImmutableList.builder();\n    for (int i = 0; i < 100; i++) {\n      builder.add(i);\n    }\n    ImmutableList<Integer> list = builder.build();\n    for (int i = 0; i < 1000; i++) {\n      bh.consume(list.get(i % 100));\n    }\n  }\n\n  @Benchmark\n  public void map(Blackhole bh) {\n    HashMap<Integer, Integer> map = Maps.newHashMap();\n\n    for (int i = 0; i < 100; i++) {\n      map.put(i, i);\n    }\n    for (int i = 0; i < 1000; i++) {\n      bh.consume(map.get(i % 100));\n    }\n  }\n\n  @Benchmark\n  public void immutableMap(Blackhole bh) {\n    ImmutableMap.Builder<Integer, Integer> builder = ImmutableMap.builder();\n\n    for (int i = 0; i < 100; i++) {\n      builder.put(i, i);\n    }\n    ImmutableMap<Integer, Integer> map = builder.build();\n    for (int i = 0; i < 1000; i++) {\n      bh.consume(map.get(i % 100));\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);