(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{934:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(999)),b={title:"Go Build"},i={unversionedId:"languages/go/go-build",id:"languages/go/go-build",isDocsHomePage:!1,title:"Go Build",description:"`bash",source:"@site/notes/languages/go/go-build.md",slug:"/languages/go/go-build",permalink:"/notes/languages/go/go-build",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-build.md",version:"current",sidebar:"docs",previous:{title:"Go Awesome",permalink:"/notes/languages/go/go-awesome"},next:{title:"CGO",permalink:"/notes/languages/go/go-cgo"}},c=[{value:"\u81ea\u5b9a\u4e49\u5e38\u91cf",id:"\u81ea\u5b9a\u4e49\u5e38\u91cf",children:[]},{value:"\u9650\u5b9a Build Tag",id:"\u9650\u5b9a-build-tag",children:[]},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",children:[]},{value:"\u6784\u5efa\u7f13\u5b58",id:"\u6784\u5efa\u7f13\u5b58",children:[]},{value:"musl static",id:"musl-static",children:[]},{value:"docker builder",id:"docker-builder",children:[]},{value:"unrecognized command-line option &#39;-marm&#39;",id:"unrecognized-command-line-option--marm",children:[]},{value:"arm-none-eabi-gcc: error: unrecognized command-line option &#39;-pthread&#39;",id:"arm-none-eabi-gcc-error-unrecognized-command-line-option--pthread",children:[]},{value:"loadinternal: cannot find runtime/cgo",id:"loadinternal-cannot-find-runtimecgo",children:[]},{value:"FATAL: kernel too old",id:"fatal-kernel-too-old",children:[]}],o={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u4ea4\u53c9\u7f16\u8bd1\u5217\u8868\ngo tool dist list\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"buildmode"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"archive"),Object(l.b)("td",{parentName:"tr",align:null},"build non-main, ",Object(l.b)("inlineCode",{parentName:"td"},".a"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"c-archive"),Object(l.b)("td",{parentName:"tr",align:null},"main+imports, cgo ",Object(l.b)("inlineCode",{parentName:"td"},"//export"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"c-shared"),Object(l.b)("td",{parentName:"tr",align:null},"main+imports, cgo ",Object(l.b)("inlineCode",{parentName:"td"},"//export"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"main+non-main, exec\uff0c ",Object(l.b)("inlineCode",{parentName:"td"},".a"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"shared"),Object(l.b)("td",{parentName:"tr",align:null},"non-main, for -linkshared")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"exe"),Object(l.b)("td",{parentName:"tr",align:null},"main+imports,exec, \u5ffd\u7565\u975e main \u5305")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pie"),Object(l.b)("td",{parentName:"tr",align:null},"main+imports, exec, pie")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plugin"),Object(l.b)("td",{parentName:"tr",align:null},"main+imports, plugin, \u5ffd\u7565\u975e main \u5305")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"ldflags"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-w"),Object(l.b)("td",{parentName:"tr",align:null},"disable DWARF generation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-s"),Object(l.b)("td",{parentName:"tr",align:null},"disable symbol table")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-X 'wener.me/gou/build.Version=123'"),Object(l.b)("td",{parentName:"tr",align:null},"add definition")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"env"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GOMAXPROCS"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Max Thread")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GOGC"),Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"off \u5173\u95ed GC")))),Object(l.b)("h2",{id:"\u81ea\u5b9a\u4e49\u5e38\u91cf"},"\u81ea\u5b9a\u4e49\u5e38\u91cf"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nvar Version = "dev"\nvar CommitTime = ""\nvar CommitID = ""\nvar BuildTime = ""\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"DEF_FLAGS=\"\n-X 'wener.me/tools/build.Version=`git describe --tags --abbrev=0`'\n-X 'wener.me/tools/build.CommitID=`git rev-parse --short HEAD`'\n-X 'wener.me/tools/build.CommitTime=`git log -1 --format=%cd --date=iso8601`'\n-X 'wener.me/tools/build.BuildTime=`date --iso-8601=seconds`'\n\"\ngo build -o bin/cli -ldflags \"$DEF_FLAGS\" ./cmd/cli\n")),Object(l.b)("h2",{id:"\u9650\u5b9a-build-tag"},"\u9650\u5b9a Build Tag"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},"//+build tag\n\npackage main\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"go build -tags tag\n")),Object(l.b)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/GoArm"},"GoArm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63"},"GOOS and GOARCH"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'CC_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-gcc CXX_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-g++ RANLIB_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-ranlib\n\nCC=i586-mingw32-gcc GOOS=windows GOARCH=386 CGO_ENABLED=1 go build -v -o myprogram.exe -ldflags="-extld=$CC"\nCC=x86_64-pc-linux-gcc GOOS=linux GOARCH=amd64 CGO_ENABLED=1 go build -v -o myprogram -ldflags="-extld=$CC"\nCC=arm-linux-gnueabihf-gcc GOOS=linux GOARCH=arm GOARM=6 CGO_ENABLED=1 go build -v -o myprogram -ldflags="-extld=$CC"\n')),Object(l.b)("h2",{id:"\u6784\u5efa\u7f13\u5b58"},"\u6784\u5efa\u7f13\u5b58"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# macOS $HOME/Library/Caches/go-build\n# linux $HOME/.cache/go-build\ngo env GOCACHE\n\n# CI \u7684\u65f6\u5019\u53ef\u4fee\u6539 GOPATH \u66f4\u597d\u5229\u7528\u7f13\u5b58\nexport GOPATH="$PWD/.cache"\nexport PATH="$PWD/.cache/bin:$PATH"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n\n# \u6e05\u9664\u7f13\u5b58\ngo clean -cache\n')),Object(l.b)("h2",{id:"musl-static"},"musl static"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'-linkmode external -extldflags "-static"\n')),Object(l.b)("h2",{id:"docker-builder"},"docker builder"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/prometheus/golang-builder"},"prometheus/golang-builder"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"arm",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"arm-linux-gnueabi"),Object(l.b)("li",{parentName:"ul"},"arm64-apple-darwin20.2"),Object(l.b)("li",{parentName:"ul"},"arm64e-apple-darwin20.2")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker pull quay.io/prometheus/golang-builder:arm\ndocker run --rm -it --entrypoint bash \\\n  --name go-builder quay.io/prometheus/golang-builder:arm\n")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"unrecognized-command-line-option--marm"},"unrecognized command-line option '-marm'"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"CC=arm-linux-gnueabi-gcc\n")),Object(l.b)("h2",{id:"arm-none-eabi-gcc-error-unrecognized-command-line-option--pthread"},"arm-none-eabi-gcc: error: unrecognized command-line option '-pthread'"),Object(l.b)("p",null,"\u9700\u8981 arm-linux-eabi"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# musl \u4e0d\u5305\u542b pthread \u53ef\u521b\u5efa\u7a7a\u5305\u6ee1\u8db3\n# \u7a7a\u5305\n# ar -rc /usr/lib/libpthread.a\n# \u4ea4\u53c9\u7f16\u8bd1\u73af\u5883\narm-none-eabi-ar -rc /usr/arm-none-eabi/lib/libpthread.a\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"gcc-arm-none-eabi",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cortex-M0/M0+/M3/M4, Cortex-R4/R5/R7, Cortex-A"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ebf\u7a0b")))),Object(l.b)("h2",{id:"loadinternal-cannot-find-runtimecgo"},"loadinternal: cannot find runtime/cgo"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLED=1\n")),Object(l.b)("h2",{id:"fatal-kernel-too-old"},"FATAL: kernel too old"),Object(l.b)("p",null,"\u6ce8\u610f gcc \u7248\u672c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"CC=arm-linux-gnueabi-gcc\necho 'int main(){}' > test.c\n# ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, for GNU/Linux 3.2.0, BuildID[sha1]=a839e1b10daec5d9c348eef8854bb271f8097d34, not stripped\n# \u6ce8\u610f GNU/Linux 3.2.0\n$CC -o test test.c\nfile test\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/prometheus/node_exporter/issues/914"},"prometheus/node_exporter#914")),Object(l.b)("li",{parentName:"ul"},"debian ",Object(l.b)("a",{parentName:"li",href:"https://packages.debian.org/unstable/gcc-arm-linux-gnueabi"},"gcc-arm-linux-gnueabi"))))}u.isMDXComponent=!0},999:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(b,".").concat(p)]||m[p]||d[p]||l;return n?r.a.createElement(g,i(i({ref:t},o),{},{components:n})):r.a.createElement(g,i({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);