(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1080:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,g=b["".concat(i,".").concat(m)]||b[m]||p[m]||l;return n?a.a.createElement(g,o(o({ref:t},c),{},{components:n})):a.a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},611:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),l=(n(0),n(1080)),i={id:"antlr4",title:"Antlr 4"},o={unversionedId:"languages/antlr4",id:"languages/antlr4",isDocsHomePage:!1,title:"Antlr 4",description:"Antlr4",source:"@site/notes/languages/antlr4.md",slug:"/languages/antlr4",permalink:"/notes/languages/antlr4",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/antlr4.md",version:"current",sidebar:"docs",previous:{title:"\u8bed\u8a00",permalink:"/notes/languages/languages"},next:{title:"Languages Awesome",permalink:"/notes/languages/languages-awesome"}},s=[{value:"Tips",id:"tips",children:[]},{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",children:[]},{value:"Go",id:"go",children:[]},{value:"antlr4 cli options",id:"antlr4-cli-options",children:[]},{value:"FAQ",id:"faq",children:[{value:"What is semantic predicate ?",id:"what-is-semantic-predicate-",children:[]},{value:"Lexer vs Parser",id:"lexer-vs-parser",children:[]},{value:"\u5ffd\u7565\u5927\u5c0f\u5199",id:"\u5ffd\u7565\u5927\u5c0f\u5199",children:[]},{value:"Visitor vs Listener",id:"visitor-vs-listener",children:[]},{value:"reportAttemptingFullContext",id:"reportattemptingfullcontext",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"antlr4"},"Antlr4"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6848\u4f8b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/antlr/grammars-v4"},"grammars-v4")))),Object(l.b)("li",{parentName:"ul"},"\u8bed\u8a00\u652f\u6301",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Java"),Object(l.b)("li",{parentName:"ul"},"C#"),Object(l.b)("li",{parentName:"ul"},"Python 2/3"),Object(l.b)("li",{parentName:"ul"},"JavaScript"),Object(l.b)("li",{parentName:"ul"},"Go"),Object(l.b)("li",{parentName:"ul"},"C++"),Object(l.b)("li",{parentName:"ul"},"Swift")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"java -jar antlr-4.6-complete.jar -Dlanguage=Go MyLang.g4\n")),Object(l.b)("h2",{id:"\u8bed\u6cd5\u7ed3\u6784"},"\u8bed\u6cd5\u7ed3\u6784"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-antlr4"},"@header {\n}\n\n@members {\n}\n\n@parser::members {\n}\n\n@lexer::members {\n}\n\nparent\nlocals [\n    List<String> symbols = new ArrayList<String>()\n]\n: ruleName;\n\nruleName[int returnValue]\n@init{\n}\n@after {\n}\nlocals [int i=1]\n  :  ID {/*Dynamically-Scoped Attributes*/if($block::symbols.contains($ID.text)){}}\n  ;\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-g4"},"/** Optional javadoc style comment */\ngrammar Name;\noptions {...}\nimport ... ;\n    \ntokens {...}\nchannels {...} // lexer only\n@actionName {...}\n     \nrule1 // parser and lexer rules, possibly intermingled\n...\nruleN\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"grammar Count;\n\n@header {\npackage foo;\n}\n\n@members {\nint count = 0;\n}\n\nlist\n@after {System.out.println(count+\" ints\");}\n: INT {count++;} (',' INT {count++;} )*\n;\n\nINT : [0-9]+ ;\nWS : [ \\r\\t\\n]+ -> skip ;\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-antlr"},"grammar JSON;\n\njson\n   : value\n   ;\n\nobject\n   : '{' pair (',' pair)* '}'\n   | '{' '}'\n   ;\n\npair\n   : STRING ':' value\n   ;\n\narray\n   : '[' value (',' value)* ']'\n   | '[' ']'\n   ;\n\nvalue\n   : STRING\n   | NUMBER\n   | object\n   | array\n   | 'true'\n   | 'false'\n   | 'null'\n   ;\n\n\nSTRING\n   : '\"' (ESC | ~ [\"\\\\])* '\"'\n   ;\nfragment ESC\n   : '\\\\' ([\"\\\\/bfnrt] | UNICODE)\n   ;\nfragment UNICODE\n   : 'u' HEX HEX HEX HEX\n   ;\nfragment HEX\n   : [0-9a-fA-F]\n   ;\nNUMBER\n   : '-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT\n   ;\nfragment INT\n   : '0' | [1-9] [0-9]*\n   ;\n// no leading zeros\nfragment EXP\n   : [Ee] [+\\-]? INT\n   ;\n// \\- since - means \"range\" inside [...]\nWS\n   : [ \\t\\n\\r] + -> skip\n   ;\n")),Object(l.b)("h2",{id:"go"},"Go"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/blob/master/doc/go-target.md"},"https://github.com/antlr/antlr4/blob/master/doc/go-target.md"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"go get github.com/antlr/antlr4/runtime/Go/antlr\nantlr4 -Dlanguage=Go -package mylang MyLang.g4\n")),Object(l.b)("h2",{id:"antlr4-cli-options"},"antlr4 cli options"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"ANTLR Parser Generator  Version 4.7.1\n -o ___              specify output directory where all output is generated\n -lib ___            specify location of grammars, tokens files\n -atn                generate rule augmented transition network diagrams\n -encoding ___       specify grammar file encoding; e.g., euc-jp\n -message-format ___ specify output style for messages in antlr, gnu, vs2005\n -long-messages      show exception details when available for errors and warnings\n -listener           generate parse tree listener (default)\n -no-listener        don't generate parse tree listener\n -visitor            generate parse tree visitor\n -no-visitor         don't generate parse tree visitor (default)\n -package ___        specify a package/namespace for the generated code\n -depend             generate file dependencies\n -D<option>=value    set/override a grammar-level option\n -Werror             treat warnings as errors\n -XdbgST             launch StringTemplate visualizer on generated code\n -XdbgSTWait         wait for STViz to close before continuing\n -Xforce-atn         use the ATN simulator for all predictions\n -Xlog               dump lots of logging info to antlr-timestamp.log\n -Xexact-output-dir  all output goes into -o dir regardless of paths/package\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"what-is-semantic-predicate-"},"What is semantic predicate ?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/q/3056441/1870054"},"What is a 'semantic predicate' in ANTLR?"))),Object(l.b)("h3",{id:"lexer-vs-parser"},"Lexer vs Parser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8bcd\u6cd5/lexer rule",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5927\u5199"),Object(l.b)("li",{parentName:"ul"},"used to tokenize your input source. It represents a fundamental building block of your language."))),Object(l.b)("li",{parentName:"ul"},"\u8bed\u6cd5/parser rule",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c0f\u5199"),Object(l.b)("li",{parentName:"ul"},"consists of zero or more other parser rules or tokens produced by the lexer."))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a Lexer \u90fd\u80fd\u5339\u914d\u540c\u4e00\u4e2a\u5185\u5bb9, \u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u4f1a\u88ab\u9009\u62e9."),Object(l.b)("li",{parentName:"ul"},"Lexer \u4e2d\u4e0d\u4f1a\u6709\u5176\u4ed6\u7684 Token, Skip \u4e0d\u4f1a\u751f\u6548, \u56e0\u4e3a\u4e00\u4e2a Lexer \u662f\u4e00\u4e2a Token"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.3dbuzz.com/forum/threads/203932-ANTLR-When-to-use-Parser-Rules-vs-Lexer-Rules"},"WHEN TO USE PARSER RULES VS LEXER RULES?"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u89e3\u6790\u7684\u57fa\u672c\u6b65\u9aa4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a\u4e00\u4e2a\u4e00\u4e2a\u7684 Token"),Object(l.b)("li",{parentName:"ul"},"\u5c06\u4e00\u7ec4 Token \u89e3\u6790\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u8bed\u6cd5\u6811\u8fdb\u884c\u5904\u7406"))),Object(l.b)("li",{parentName:"ul"},"\u8fd9\u4e24\u8005\u662f\u5206\u4e0d\u5f00\u7684")))),Object(l.b)("h3",{id:"\u5ffd\u7565\u5927\u5c0f\u5199"},"\u5ffd\u7565\u5927\u5c0f\u5199"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/blob/master/doc/case-insensitive-lexing.md"},"Case-Insensitive Lexing"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u5173\u952e\u8bcd\u5b9a\u4e49\u4f7f\u7528\u5ffd\u7565\u5927\u5c0f\u5199\u7684\u5339\u914d"),Object(l.b)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u5b57\u7b26\u6d41")))),Object(l.b)("h3",{id:"visitor-vs-listener"},"Visitor vs Listener"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20714492"},"Antlr4 Listeners and Visitors - which to implement?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://jakubdziworski.github.io/java/2016/04/01/antlr_visitor_vs_listener.html"},"Visitor vs Listener")),Object(l.b)("li",{parentName:"ul"},"visitor pattern you have the ability to direct tree walking while in listener you are only reacting to the tree walker."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://saumitra.me/blog/antlr4-visitor-vs-listener-pattern/"},"Antlr4 visitor vs listener pattern"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"listener pattern is that its all automatic and even if you don\u2019t write any parse tree walker, then also it will figure out and trigger the enter and exit method for each rule. This is a huge benefit for translation type of usecases."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://developers-club.com/posts/259691/"},'Fight "the Listener vs the Visitor" at antlr4 stadium'))),Object(l.b)("h3",{id:"reportattemptingfullcontext"},"reportAttemptingFullContext"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.antlr.org/api/Java/org/antlr/v4/runtime/DiagnosticErrorListener.html#reportAttemptingFullContext-org.antlr.v4.runtime.Parser-org.antlr.v4.runtime.dfa.DFA-int-int-java.util.BitSet-org.antlr.v4.runtime.atn.ATNConfigSet-"},"DiagnosticErrorListener#reportAttemptingFullContext")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\u89e3\u6790")))}u.isMDXComponent=!0}}]);