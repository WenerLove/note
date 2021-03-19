(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{550:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(8),r=(a(0),a(836)),l={id:"go",title:"Golang"},o={unversionedId:"languages/go/go",id:"languages/go/go",isDocsHomePage:!1,title:"Golang",description:"Tips",source:"@site/notes/languages/go/README.md",slug:"/languages/go/go",permalink:"/notes/languages/go/go",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/README.md",version:"current",sidebar:"docs",previous:{title:"Lua \u7248\u672c",permalink:"/notes/languages/lua/lua-version"},next:{title:"Golang Auth",permalink:"/notes/languages/go/go-auth"}},b=[{value:"Tips",id:"tips",children:[]},{value:"Pro tip",id:"pro-tip",children:[]},{value:"Library",id:"library",children:[{value:"Machine Learning",id:"machine-learning",children:[]},{value:"Utils",id:"utils",children:[]},{value:"Console",id:"console",children:[]},{value:"Data",id:"data",children:[]},{value:"Web",id:"web",children:[]},{value:"GUI",id:"gui",children:[]},{value:"Data",id:"data-1",children:[]},{value:"Test",id:"test",children:[]},{value:"Misc",id:"misc",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Game",id:"game",children:[]}]},{value:"Scripts",id:"scripts",children:[]},{value:"Tips",id:"tips-1",children:[]},{value:"Install golang under linux",id:"install-golang-under-linux",children:[]},{value:"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C",id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c",children:[{value:"Export function",id:"export-function",children:[]},{value:"Inline C code",id:"inline-c-code",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"\u4ea4\u53c9\u7f16\u8bd1/Cross compile",id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile",children:[{value:"xgo",id:"xgo",children:[]}]},{value:"Go &amp; C++",id:"go--c",children:[]},{value:"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size",id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size",children:[]},{value:"Profiling",id:"profiling",children:[]},{value:"Beego",id:"beego",children:[]},{value:"Self Update",id:"self-update",children:[]},{value:"\u53c2\u8003/Reference",id:"\u53c2\u8003reference",children:[{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",children:[]},{value:"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5",id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5",children:[]}]}],c={toc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u6ce8\u610f"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/golang/go/issues/31529"},"#31529")," - ",Object(r.b)("inlineCode",{parentName:"li"},"go get")," \u4e0d\u4f1a\u4e0b\u8f7d\u6e90\u7801\u5230 ",Object(r.b)("inlineCode",{parentName:"li"},"~/go/src")," \u4e86"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ardanlabs.com/blog/2017/06/design-philosophy-on-data-and-semantics.html"},"Design Philosophy On Data And Semantics")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"JSON"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/json-iterator/go"},"json-iterator/go"),' - A high-performance 100% compatible drop-in replacement of "encoding/json"'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/esnme/ultrajson"},"esnme/ultrajson")," - Ultra fast JSON decoder and encoder written in C with Python bindings"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ugorji/go"},"ugorji/go")," - idiomatic codec and rpc lib for msgpack, cbor, json, etc."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/pquerna/ffjson"},"pquerna/ffjson")," - faster JSON serialization for Go"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/mailru/easyjson"},"mailru/easyjson")," - Fast JSON serializer for golang.")))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://syslog.ravelin.com/go-in-a-scratch-vm-a28c14e82a51"},"https://syslog.ravelin.com/go-in-a-scratch-vm-a28c14e82a51")),Object(r.b)("h2",{id:"pro-tip"},"Pro tip"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stop taking everything the pros say as fact. Test it yourself!")),Object(r.b)("h2",{id:"library"},"Library"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/avelino/awesome-go"},"Awesome Go"))),Object(r.b)("h3",{id:"machine-learning"},"Machine Learning"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/sjwhitworth/golearn"},"GoLearn")," is a 'batteries included' machine learning library for Go. Simplicity, paired with customisability, is the goal."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/cdipaolo/goml"},"goml")," is a machine learning library written entirely in Golang which lets the average developer include machine learning into their applications."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/chewxy/gorgonia"},"Gorgonia")," is a library that helps facilitate machine learning in Go. Write and evaluate mathematical equations involving multidimensional arrays easily.")),Object(r.b)("h3",{id:"utils"},"Utils"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/jinzhu/now"},"https://github.com/jinzhu/now"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Now is a time toolkit for golang"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/benmanns/goworker"},"https://github.com/benmanns/goworker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/dustin/go-humanize"},"https://github.com/dustin/go-humanize"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u683c\u5f0f\u5316\u6570\u636e\u5927\u5c0f, \u65f6\u95f4\u548c\u6570\u5b57\u7b49"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/dropbox/godropbox"},"https://github.com/dropbox/godropbox"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Common libraries for writing Go services/applications."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/asciimoo/wuzz"},"https://github.com/asciimoo/wuzz"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Interactive cli tool for HTTP inspection"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/goreleaser/goreleaser"},"https://github.com/goreleaser/goreleaser"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Deliver Go binaries as fast and easily as possible")))),Object(r.b)("h3",{id:"console"},"Console"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/jroimartin/gocui"},"https://github.com/jroimartin/gocui"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Minimalist Go package aimed at creating Console User Interfaces."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nsf/termbox-go"},"https://github.com/nsf/termbox-go"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Pure Go termbox implementation")))),Object(r.b)("h3",{id:"data"},"Data"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Workiva/go-datastructures"},"https://github.com/Workiva/go-datastructures")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/emirpasic/gods"},"https://github.com/emirpasic/gods"))),Object(r.b)("h3",{id:"web"},"Web"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/valyala/fasthttp"},"https://github.com/valyala/fasthttp"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://awesome-go.com/#web-frameworks"},"Web Frameworks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/kataras/iris"},"https://github.com/kataras/iris")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/labstack/echo"},"https://github.com/labstack/echo")),Object(r.b)("li",{parentName:"ul"},"Auth",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/markbates/goth"},"https://github.com/markbates/goth"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications."))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/go-kit/kit"},"https://github.com/go-kit/kit"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A standard library for microservices."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/micro/micro"},"https://github.com/micro/micro"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A microservice toolkit for distributed systems development")))),Object(r.b)("p",null,"\u4e00\u822c Web \u7684\u5e93\u5206\u4e3a\u5f88\u591a\u79cd, MVC \u578b, REST \u578b,\u57fa\u7840\u529f\u80fd\u578b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Beego \u7684 MVC \u505a\u7684\u76f8\u5f53\u597d"),Object(r.b)("li",{parentName:"ul"},"REST \u7c7b\u7684 ECHO \u4f1a\u6bd4\u8f83\u597d,\u867d\u7136 Gin \u4e5f\u4e0d\u9519,\u4f46\u662f Gin \u4f7f\u7528\u7684 httprouter \u65e0\u6cd5\u5904\u7406 ",Object(r.b)("inlineCode",{parentName:"li"},"/user")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"/user/:id")," \u8fd9\u6837\u7684\u8def\u5f84"),Object(r.b)("li",{parentName:"ul"},"\u57fa\u7840\u529f\u80fd\u7684\u4e00\u822c\u53ef\u8003\u8651\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u6216 Gin \u6216\u8005 Mux \u8fd9\u6837\u7684\u6765\u7ec4\u88c5\u81ea\u5df1\u7684\u670d\u52a1")),Object(r.b)("h3",{id:"gui"},"GUI"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/lxn/walk"},"https://github.com/lxn/walk"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Machine Learning for Go")))),Object(r.b)("h3",{id:"data-1"},"Data"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ORM",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"gorm \u662f\u76ee\u524d\u6700\u597d\u7684 Go ORM \u5e93")))),Object(r.b)("h3",{id:"test"},"Test"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/smartystreets/goconvey"},"https://github.com/smartystreets/goconvey")),Object(r.b)("h3",{id:"misc"},"Misc"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/alexflint/go-restructure"},"https://github.com/alexflint/go-restructure"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/pointlander/peg"},"https://github.com/pointlander/peg")," Peg, Parsing Expression Grammar\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/jteeuwen/go-bindata"},"https://github.com/jteeuwen/go-bindata")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/hanwen/go-fuse"},"https://github.com/hanwen/go-fuse")),Object(r.b)("h3",{id:"hardware"},"Hardware"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ycoroneos/golang_embedded"},"https://github.com/ycoroneos/golang_embedded")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/ycoroneos/G.E.R.T"},"ycoroneos/G.E.R.T"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Golang Embedded Run-Time"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=15591847"},"https://news.ycombinator.com/item?id=15591847")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=14590847"},"https://news.ycombinator.com/item?id=14590847")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://bugs.alpinelinux.org/issues/4276"},"https://bugs.alpinelinux.org/issues/4276"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"gcc-arm-none-eabi")))),Object(r.b)("h3",{id:"game"},"Game"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://go-talks.appspot.com/github.com/guregu/slides/comiket/comiket.slide"},"https://go-talks.appspot.com/github.com/guregu/slides/comiket/comiket.slide")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/EngoEngine/engo"},"https://github.com/EngoEngine/engo"),"\nis an open-source 2D game engine written in Go.\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/azul3d/engine"},"https://github.com/azul3d/engine")," A 3D game engine written in Go!"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/golang/mobile"},"https://github.com/golang/mobile"),"\nGolang mobile support cross-platform gl binding"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/name5566/leaf"},"https://github.com/name5566/leaf"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/xtaci/gonet"},"https://github.com/xtaci/gonet"),"\nGolang \u5b9e\u73b0\u7684\u6e38\u620f\u670d\u52a1\u5668\u6846\u67b6"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/veandco/go-sdl2"},"https://github.com/veandco/go-sdl2"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/fogleman/gg"},"https://github.com/fogleman/gg"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/andlabs/ui"},"https://github.com/andlabs/ui")),Object(r.b)("h2",{id:"scripts"},"Scripts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/peterh/liner"},"https://github.com/peterh/liner")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/dop251/goja/blob/master/goja/main.go"},"https://github.com/dop251/goja/blob/master/goja/main.go"))),Object(r.b)("h2",{id:"tips-1"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Websocket ",Object(r.b)("a",{parentName:"li",href:"http://goroutines.com/10m"},"C10M"))),Object(r.b)("p",null,'Directory and file names that begin with "." or "_ " are ignored by the go tool, as are directories named "testdata".'),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u66f4\u65b0 Go \u8fc7\u540e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6bcf\u4e2a\u9879\u76ee\u90fd\u4f1a\u91cd\u590d\u6784\u5efa, \u5bfc\u81f4\u7f16\u8bd1\u5f88\u6162, \u9488\u5bf9\u5355\u4e2a\u9879\u76ee\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u65b9\u5f0f\u5904\u7406\n# \u628a\u6240\u6709\u7684\u4f9d\u8d56\u4ece\u65b0\u7f16\u8bd1\ngo build -v 2> /tmp/build-tmp\nsed -i \'$ d\' /tmp/build-tmp\n# \u66f4\u65b0\u6240\u6709\u4f9d\u8d56\ncat /tmp/build-tmp | xargs -n 1 go get -u -v\n\n# go build -v 2> /tmp/build-tmp;sed -i \'$ d\' /tmp/build-tmp;cat /tmp/build-tmp | xargs -n 1 go get -u -v\n# \u91cd\u65b0\u6784\u5efa\u5e76\u7f13\u5b58, \u8fd9\u6837\u4e0b\u6b21\u6784\u5efa\u5c31\u4f1a\u5f88\u5feb\u4e86\ngo build -i -v ./...\n\n# \u8de8\u5e73\u53f0\u7f16\u8bd1\nenv GOOS=linux GOARCH=amd64 go build  -o main-linux-amd64 main.go\n\n# \u79fb\u52a8\u5305\ngo get github.com/golang/tools/cmd/gomvpkg/main.go\ngomvpkg -from github.com/wenerme/before -to github.com/wenerme/after\n\n# \u5c06\u6784\u5efa\u65f6\u95f4\u6dfb\u52a0\u5230\u751f\u6210\u7684\u5185\u5bb9\u4e2d\ngo build -ldflags "-X main.minversion=`date -u +.%Y%m%d.%H%M%S`" service.go\ngo run -ldflags "-X main.xyz=abc" main.go\ngo run -ldflags "-X main.build=`date +%Y%m%d.%H%M%S`" main.go\n\n\n# Guru\ngo get github.com/golang/tools/cmd/guru/main.go\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://mholt.github.io/json-to-go/"},"https://mholt.github.io/json-to-go/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://mholt.github.io/curl-to-go/"},"https://mholt.github.io/curl-to-go/"))),Object(r.b)("h2",{id:"install-golang-under-linux"},"Install golang under linux"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"GOVERSION=1.7.3\n# \u67e5\u770b\u53ef\u9009\u67b6\u6784 https://storage.googleapis.com/golang/\n# Windows 64 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-amd64.zip\n# Windows 32 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-386.zip\nwget https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz\n# \u6216\u8005\u4f7f\u7528\u4ee3\u7406\u4e0b\u8f7d\n# https_proxy=socks://127.0.0.1:8888 curl https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz -o go$GOVERSION.linux-amd64.tar.gz\nsudo tar -C /usr/local -xzf go$GOVERSION.linux-amd64.tar.gz\nexport GOROOT=/usr/local/go\nexport PATH=$GOROOT/bin:$PATH\nexport GOPATH=$HOME/go\nexport PATH=$GOPATH/bin:$PATH\n# \u6216\u5c06\u73af\u5883\u53d8\u91cf\u653e\u5230\u542f\u52a8\u811a\u672c\ncd ~\necho 'export GOROOT=/usr/local/go' >> $HOME/.bashrc\necho 'export GOPATH=$HOME/go' >> $HOME/.bashrc\necho 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> $HOME/.bashrc\nsource $HOME/.bashrc\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"UNINSTALL")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo rm -rf /usr/local/go\n")),Object(r.b)("h2",{id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c"},"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"go install -buildmode=shared -linkshared  std\ngo install  -buildmode=shared -linkshared userownpackage\ngo build -linkshared yourprogram\n")),Object(r.b)("h3",{id:"export-function"},"Export function"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},'//export SayHello\nfunc SayHello(name string) {\n    fmt.Printf("Nautilus says: Hello, %s!\\n", name)\n}\n')),Object(r.b)("h3",{id:"inline-c-code"},"Inline C code"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},'// typedef int (*intFunc) ();\n//\n// int\n// bridge_int_func(intFunc f)\n// {\n//      return f();\n// }\n//\n// int fortytwo()\n// {\n//      return 42;\n// }\nimport "C"\nimport "fmt"\n\nfunc main() {\n    f := C.intFunc(C.fortytwo)\n    fmt.Println(int(C.bridge_int_func(f)))\n    // Output: 42\n}\n')),Object(r.b)("h3",{id:"reference"},"Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://blog.ralch.com/tutorial/golang-sharing-libraries/"},"golang-sharing-libraries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1nr-TQHw_er6GOQRsF6T43GGhFDelrAP0NqSS_00RgZQ/edit"},"Go Execution Mode")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://golang.org/cmd/cgo/"},"cmd/cgo"))),Object(r.b)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile"},"\u4ea4\u53c9\u7f16\u8bd1/Cross compile"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\u4e3a Linux \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=linux GOARCH=amd64 go build -o RedHat/clbeat -v github.com/wenerme/clbeat\n# \u7f16\u8bd1\u4e3a Windows \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=windows GOARCH=amd64 go build -o main.exe -v\n")),Object(r.b)("p",null,"\u90e8\u5206\u9700\u8981 linux cgo \u7f16\u8bd1\u7684\u53ef\u4f7f\u7528 docker \u955c\u50cf\u5b8c\u6210"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $GOPATH:/go -w /go/src/\u5e94\u7528\u5305 golang go build -i -v\n# \u56e0\u4e3a\u662f\u4f7f\u7528 alphie \u7f16\u8bd1\u7684,\u56e0\u6b64\u6784\u5efa\u7684 docker \u4e2d\u9700\u8981\u6dfb\u52a0\n# RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2\n# \u9700\u8981\u6ce8\u610f https://github.com/golang/go/issues/9344\n")),Object(r.b)("h3",{id:"xgo"},"xgo"),Object(r.b)("p",null,"\u53ef\u4f7f\u7528 xgo \u4e00\u6b21\u6027\u7f16\u8bd1\u591a\u4e2a\u5e73\u53f0\u7684\u53ef\u6267\u884c\u6587\u4ef6,\u53ef\u4f7f\u7528 xgo \u955c\u50cf\u4ee5\u4fbf\u4e8e\u8de8\u5e73\u53f0\u7f16\u8bd1 cgo."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u73af\u5883 ",Object(r.b)("a",{parentName:"li",href:"https://golang.org/doc/install/source#environment"},"environment"))),Object(r.b)("h2",{id:"go--c"},"Go & C++"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.swig.org/Doc3.0/SWIGDocumentation.html#Go"},"Swig 3.0 Document for GO"))),Object(r.b)("p",null,"\u4f7f\u7528 Go \u548c C++ \u53ef\u901a\u8fc7 Swig \u5b9e\u73b0,\u4e5f\u53ef\u901a\u8fc7\u5c06 C++ \u7684\u65b9\u6cd5\u5168\u5c01\u88c5\u4e3a C \u65b9\u6cd5,\u7136\u540e\u518d\u901a\u8fc7 Go \u8c03\u7528.\n\u5728\u91cf\u8f83\u5c11\u7684\u65f6\u5019,\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\u7684,\u4f46\u662f\u5982\u679c\u60f3\u8981\u628a\u5927\u91cf\u7684\u63a5\u53e3\u5bfc\u51fa\u5230 Go, \u5e76\u4e14\u4fdd\u6301\u7c7b\u7279\u6027,\u5219\u53ea\u80fd\u4f7f\u7528 Swig."),Object(r.b)("p",null,"Go \u81ea 1.1 \u5f00\u5c31\u652f\u6301 Swig \u4e86."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/swig/swig/tree/master/Examples/go"},"Swig Go Example"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u76f8\u5173\u5e2e\u52a9\nswig -go -help\nswig -go -intgosize 64 -c++ -cgo director.i\ngo install\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"swig -go --help")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Go Options (available with -go)\n     -cgo                - Generate cgo input files\n     -gccgo              - Generate code for gccgo rather than 6g/8g\n     -go-pkgpath <p>     - Like gccgo -fgo-pkgpath option\n     -go-prefix <p>      - Like gccgo -fgo-prefix option\n     -intgosize <s>      - Set size of Go int type--32 or 64 bits\n     -package <name>     - Set name of the Go package to <name>\n     -use-shlib          - Force use of a shared library\n     -soname <name>      - Set shared library holding C/C++ code to <name>\n")),Object(r.b)("h2",{id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size"},"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# A Hello world in Golang 1.6 is 2.2M\n\n# 2.1M\nstrip main\n\n# -s    disable symbol table\n# -w    disable DWARF generation\n# 1.7M\ngo build -ldflags "-s -w"  main.go\n\n# UPX can not compress drawin.amd64\nenv GOOS=linux GOARCH=amd64 go build  -o main.linux.amd64 main.go # 2.2M\nenv GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" -o main.linux.amd64.flag main.go # 1.6M\n\nupx --best main.linux.amd64 # 666K\nupx -9 --ultra-brute main.linux.amd64 # 508K\n\nupx --best main.linux.amd64 # 478K\nupx -9 --ultra-brute main.linux.amd64 # 363K\n')),Object(r.b)("h2",{id:"profiling"},"Profiling"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://blog.golang.org/profiling-go-programs"},"https://blog.golang.org/profiling-go-programs"),"\n",Object(r.b)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/pprof/"},"https://golang.org/pkg/net/http/pprof/")),Object(r.b)("h2",{id:"beego"},"Beego"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/beego/bee\ngo get -u github.com/astaxie/beego\n\nbee api bapi\ncd bapi\nbee run -downdoc=true -gendoc=true\n")),Object(r.b)("h2",{id:"self-update"},"Self Update"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/jpillora/overseer"},"https://github.com/jpillora/overseer"))),Object(r.b)("h2",{id:"\u53c2\u8003reference"},"\u53c2\u8003/Reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Articles",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.infoq.com/news/2016/03/go-patterns"},"Go Patterns")))),Object(r.b)("li",{parentName:"ul"},"Video",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=xxDZuPEgbBU"},"Profiling & Optimizing in Go")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://golang.org/cmd/go/"},"cmd/go")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1Bz5-UB7g2uPBdOx-rw5t9MxJwkfpx90cqG9AFL0JAYo/edit"},"vender")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1vrAy9gMpMoS3uaVphB32uVXX4pi-HnNjkMEgyAHX4N4/edit#heading=h.vuko0u3txoew"},"Summary of Go Generics Discussions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://golang.org/doc/faq"},"FAQ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://gist.github.com/lavalamp/4bd23295a9f32706a48f"},"The Three Go Landmines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://tip.golang.org/pkg/plugin/"},"pkg/plugin")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://dev.to/vladimirvivien/calling-go-functions-from-other-languages"},"Calling Go Functions from Other Languages"))),Object(r.b)("h3",{id:"\u5b66\u4e60\u8d44\u6e90"},"\u5b66\u4e60\u8d44\u6e90"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Unknwon/go-fundamental-programming"},"\u300aGo\u7f16\u7a0b\u57fa\u7840\u300b"),"\n\u662f\u4e00\u5957\u9488\u5bf9 Google \u51fa\u54c1\u7684 Go \u8bed\u8a00\u7684\u89c6\u9891\u8bed\u97f3\u6559\u7a0b\uff0c\u4e3b\u8981\u9762\u5411\u65b0\u624b\u7ea7\u522b\u7684\u5b66\u4e60\u8005\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/mikespook/Learning-Go-zh-cn"},"Learning-Go")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Unknwon/go-web-foundation"},"Go Web \u57fa\u7840")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Unknwon/go-rock-libraries-showcases"},"Go\u540d\u5e93\u8bb2\u89e3")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Unknwon/go-study-index"},"Go \u8bed\u8a00\u5b66\u4e60\u8d44\u6599\u4e0e\u793e\u533a\u7d22\u5f15"))),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("h3",{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u63a5\u6536\u4f7f\u7528\u6307\u9488"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u6709\u7591\u95ee\u65f6, \u4f7f\u7528\u6307\u9488"),Object(r.b)("li",{parentName:"ul"},"\u5f53\u7ed3\u6784\u4f53\u6bd4\u8f83\u5927, \u6216\u4f1a\u53d1\u751f\u53d8\u5316\u65f6\u4f7f\u7528\u6307\u9488")),Object(r.b)("h3",{id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5"},"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(r.b)("a",{parentName:"li",href:"https://godoc.org/golang.org/x/tools/cmd/stringer"},"Stringer")," \u751f\u6210"),Object(r.b)("li",{parentName:"ul"},"\u751f\u6210\u7684\u9ed8\u8ba4\u6587\u4ef6\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"<type>_string.go"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go"},"// \u4e3a\u7c7b\u578b MyType \u751f\u6210 Stringer\n//go:generate stringer -type=MyType\n// \u8f93\u51fa\u5230 strings.go\n//go:generate stringer -type=MyType -output=strings.go\n\n")))}p.isMDXComponent=!0},836:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return s}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),g=p(a),m=n,s=g["".concat(l,".").concat(m)]||g[m]||u[m]||r;return a?i.a.createElement(s,o(o({ref:t},c),{},{components:a})):i.a.createElement(s,o({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);