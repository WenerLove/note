(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),l=(n(0),n(890)),o={title:"Go Redis module",slug:"go-rm",date:new Date("2016-08-09T00:00:00.000Z"),tags:["\u9879\u76ee","Golang","Redis"],baseUrl:"https://github.com/wenerme/go-rm/tree/master/"},i={permalink:"/story/go-rm",editUrl:"https://github.com/wenerme/wener/edit/master/story/project/go-rm.md",source:"@site/story/project/go-rm.md",description:"Writing Redis Module in Golang.",date:"2016-08-09T00:00:00.000Z",tags:[{label:"\u9879\u76ee",permalink:"/story/tags/\u9879\u76ee"},{label:"Golang",permalink:"/story/tags/golang"},{label:"Redis",permalink:"/story/tags/redis"}],title:"Go Redis module",readingTime:3.35,truncated:!0,prevItem:{title:"\u5206\u5e03\u5f0f\u67b6\u6784\u624b\u8bb0",permalink:"/story/learning-dist-arch"},nextItem:{title:"tap-titans",permalink:"/story/2016/08/06/tap-titans"}},m=[{value:"Modules",id:"modules",children:[]},{value:"Demo",id:"demo",children:[]},{value:"How to write a module",id:"how-to-write-a-module",children:[]},{value:"Fantasy",id:"fantasy",children:[]},{value:"Pitfall",id:"pitfall",children:[]},{value:"TODO",id:"todo",children:[]}],u={toc:m};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Writing Redis Module in Golang."),Object(l.b)("p",null,"go-rm will let you write redis module in golang."),Object(l.b)("p",null,"Read in | ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/wenerme/go-rm/master/README-zh_CN.md"},"\u4e2d\u6587")," | ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/wenerme/go-rm/master/README.md"},"English")," | ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/wenerme/go-rm/master/README-es.md"},"Spanish")),Object(l.b)("h2",{id:"modules"},"Modules"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/redismodule"},"redismodule"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/redismodule/rxhash"},"rxhash"))))),Object(l.b)("h2",{id:"demo"},"Demo"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# Ensure you installed the newest redis\n# for example by using brew you can\n# brew reinstall redis --HEAD\n\n# Build redis module\ngo build -v -buildmode=c-shared github.com/redismodule/rxhash/cmd/rxhash\n\n# Start redis-server and load our module with debug log\nredis-server --loadmodule rxhash --loglevel debug\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Connect to out redis-server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Test hgetset\nredis-cli hset a a 1\n#> (integer) 1\nredis-cli hgetset a a 2\n#> "1"\nredis-cli hget a a\n#> "2"\n# Return nil if field not exists\nredis-cli hgetset a b 2\n#> (nil)\nredis-cli hgetset a b 3\n#> "2"\n')),Object(l.b)("p",null,"Wow, it works, now you can distribute this redis module to you friends. :P"),Object(l.b)("h2",{id:"how-to-write-a-module"},"How to write a module"),Object(l.b)("p",null,"Implement a redis module is as easy as you write a cli app in go, this is all you need to implement above command."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "github.com/wenerme/go-rm/rm"\n\nfunc main() {\n    // In case someone try to run this\n    rm.Run()\n}\n\nfunc init() {\n    rm.Mod = CreateMyMod()\n}\nfunc CreateMyMod() *rm.Module {\n    mod := rm.NewMod()\n    mod.Name = "hashex"\n    mod.Version = 1\n    mod.Commands = []rm.Command{CreateCommand_HGETSET()}\n    return mod\n}\nfunc CreateCommand_HGETSET() rm.Command {\n    return rm.Command{\n        Usage: "HGETSET key field value",\n        Desc: `Sets the \'field\' in Hash \'key\' to \'value\' and returns the previous value, if any.\nReply: String, the previous value or NULL if \'field\' didn\'t exist. `,\n        Name:   "hgetset",\n        Flags:  "write fast deny-oom",\n        FirstKey:1, LastKey:1, KeyStep:1,\n        Action: func(cmd rm.CmdContext) int {\n            ctx, args := cmd.Ctx, cmd.Args\n            if len(cmd.Args) != 4 {\n                return ctx.WrongArity()\n            }\n            ctx.AutoMemory()\n            key, ok := openHashKey(ctx, args[1])\n            if !ok {\n                return rm.ERR\n            }\n            // get the current value of the hash element\n            var val rm.String;\n            key.HashGet(rm.HASH_NONE, cmd.Args[2], (*uintptr)(&val))\n            // set the element to the new value\n            key.HashSet(rm.HASH_NONE, cmd.Args[2], cmd.Args[3])\n            if val.IsNull() {\n                ctx.ReplyWithNull()\n            } else {\n                ctx.ReplyWithString(val)\n            }\n            return rm.OK\n        },\n    }\n}\n// open the key and make sure it is indeed a Hash and not empty\nfunc openHashKey(ctx rm.Ctx, k rm.String) (rm.Key, bool) {\n    key := ctx.OpenKey(k, rm.READ | rm.WRITE)\n    if key.KeyType() != rm.KEYTYPE_EMPTY && key.KeyType() != rm.KEYTYPE_HASH {\n        ctx.ReplyWithError(rm.ERRORMSG_WRONGTYPE)\n        return rm.Key(0), false\n    }\n    return key, true\n}\n')),Object(l.b)("h2",{id:"fantasy"},"Fantasy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A module management module, supplies",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"mod.search",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Search module from repository(github?)"),Object(l.b)("li",{parentName:"ul"},"Repository structure like this",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"/namespace\n    /module-name\n        /bin\n            /darwin_amd64\n                module-name.so\n                module-name.sha\n            /linux_amd64\n        module-name.go     \n"))))),Object(l.b)("li",{parentName:"ul"},"mod.get",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Download module to ~/.redismodule"),Object(l.b)("li",{parentName:"ul"},"Because module is write in go, so we can build for almost any platform"),Object(l.b)("li",{parentName:"ul"},"We can use tag/commit to version the binary, so we can download the old version too"))),Object(l.b)("li",{parentName:"ul"},"mod.install",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Install downloaded module by calling redis command"))),Object(l.b)("li",{parentName:"ul"},"..."))),Object(l.b)("li",{parentName:"ul"},"A cluster management module",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Easy to create/manage/monitor redis3 cluster"))),Object(l.b)("li",{parentName:"ul"},"A json data type to demonstration how to add new data type in redis.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"json.fmt key template"),Object(l.b)("li",{parentName:"ul"},"json.path key path ","[","pretty]"),Object(l.b)("li",{parentName:"ul"},"json.get key ","[","pretty]"),Object(l.b)("li",{parentName:"ul"},"json.set key value",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"this will validate the json format")))))),Object(l.b)("h2",{id:"pitfall"},"Pitfall"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"C can not call Go function, so every callback is pre-generated",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"200 commands at most"),Object(l.b)("li",{parentName:"ul"},"5 data type at most"),Object(l.b)("li",{parentName:"ul"},"limits are easy to change, just need a proper max value"))),Object(l.b)("li",{parentName:"ul"},"Go can not call var_args, function call is pre-generated",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"HashSet/HashGet can accept 20 args at most"),Object(l.b)("li",{parentName:"ul"},"limits are easy to change, just need a proper max value"))),Object(l.b)("li",{parentName:"ul"},"Don't know what happens when unload a golang shared module",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Single module"),Object(l.b)("li",{parentName:"ul"},"Multi module",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Is there runtime are shared ?"))))),Object(l.b)("li",{parentName:"ul"},"Module write in go can not report it's memory usage to redis, max memory limits is useless"),Object(l.b)("li",{parentName:"ul"},"If a module write in go also include a third party write in other language, the memory usage is unknown"),Object(l.b)("li",{parentName:"ul"},"Module can only accept command, seems there is no way to call redis initiative.")),Object(l.b)("h2",{id:"todo"},"TODO"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Find a proper limits for data types and var_args")))}c.isMDXComponent=!0},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=c(n),b=a,p=s["".concat(o,".").concat(b)]||s[b]||d[b]||l;return n?r.a.createElement(p,i(i({ref:t},u),{},{components:n})):r.a.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);