(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,O=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?b.a.createElement(O,c(c({ref:t},p),{},{components:n})):b.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=n[p];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(3),b=n(8),r=(n(0),n(1107)),l={id:"markdown",title:"Markdown"},c={unversionedId:"manual/markdown",id:"manual/markdown",isDocsHomePage:!1,title:"Markdown",description:"Tips",source:"@site/notes/manual/markdown.md",slug:"/manual/markdown",permalink:"/notes/manual/markdown",editUrl:"https://github.com/wenerme/wener/edit/master/notes/manual/markdown.md",version:"current"},i=[{value:"Tips",id:"tips",children:[]},{value:"\u5de5\u5177",id:"\u5de5\u5177",children:[{value:"Pandoc",id:"pandoc",children:[]}]},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",children:[{value:"\u6bb5\u843d\u548c\u6362\u884c",id:"\u6bb5\u843d\u548c\u6362\u884c",children:[]},{value:"\u6807\u9898",id:"\u6807\u9898",children:[]},{value:"\u5f15\u7528",id:"\u5f15\u7528",children:[]},{value:"\u5217\u8868",id:"\u5217\u8868",children:[]},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",children:[]},{value:"\u5206\u9694\u7ebf",id:"\u5206\u9694\u7ebf",children:[]},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",children:[]},{value:"\u5f3a\u8c03",id:"\u5f3a\u8c03",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u56fe\u7247",id:"\u56fe\u7247",children:[]},{value:"\u8f6c\u4e49",id:"\u8f6c\u4e49",children:[]},{value:"\u81ea\u52a8\u8fde\u63a5",id:"\u81ea\u52a8\u8fde\u63a5",children:[]}]},{value:"\u6269\u5c55\u8bed\u6cd5",id:"\u6269\u5c55\u8bed\u6cd5",children:[{value:"\u8868\u683c",id:"\u8868\u683c",children:[]},{value:"\u6307\u5b9a\u4ee3\u7801\u5757\u8bed\u6cd5",id:"\u6307\u5b9a\u4ee3\u7801\u5757\u8bed\u6cd5",children:[]},{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3",children:[]},{value:"\u6570\u5b66\u8868\u8fbe\u5f0f",id:"\u6570\u5b66\u8868\u8fbe\u5f0f",children:[]}]}],p={toc:i};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://daringfireball.net/projects/markdown/syntax"},"Makrdown \u57fa\u7840\u8bed\u6cd5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://wowubuntu.com/markdown/"},"Markdown \u8bed\u6cd5\u8bf4\u660e (\u7b80\u4f53\u4e2d\u6587\u7248) ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown/"},"Github \u6d41 Markdown \u8bed\u6cd5\u6307\u5357")),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u9898",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7c7b ",Object(r.b)("a",{parentName:"li",href:"https://github.com/sindresorhus/github-markdown-css"},"github")))),Object(r.b)("li",{parentName:"ul"},"\u4e66\u5199\u6307\u5bfc",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Google ",Object(r.b)("a",{parentName:"li",href:"https://github.com/google/styleguide/blob/gh-pages/docguide/style.md"},"Markdown style guide")))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://commonmark.org/"},"CommonMark")," - A strongly defined, highly compatible specification of Markdown"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown: Syntax")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://pandoc.org/"},"Pandoc")," - Markup Document \u4e92\u8f6c Word, HTML, PDF, TeX, EPUB \u7b49"))),Object(r.b)("li",{parentName:"ul"},"\u7f16\u8f91\u5668",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://stackedit.io/"},"StackEdit")," \u652f\u6301\u4e91\u540c\u6b65\u548c\u8f83\u591a\u6269\u5c55\u8bed\u6cd5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./gitbook"},"Gitbook")," \u4f7f\u7528 Markdown \u6765\u64b0\u5199\u4e66\u7c4d"))),Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/redbug312/markdown-it-multimd-table"},"redbug312/markdown-it-multimd-table")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://fletcher.github.io/MultiMarkdown-6/"},"MultiMarkdown"))))),Object(r.b)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),Object(r.b)("h3",{id:"pandoc"},"Pandoc"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://pandoc.org/"},"Pandoc")," \u53ef\u7528\u4e8e\u76f4\u63a5\u5c06 Markdown \u8f6c\u6362\u4e3a Word \u6216\u8005 PDF. \u4e5f\u652f\u6301\u5c06 Word \u6216\u8005 PDF \u8f6c\u6362\u4e3a Markdown, \u662f\u4e00\u6b3e\u975e\u5e38\u5f3a\u5927\u7684\u6587\u6863\u8f6c\u6362\u5de5\u5177.\u652f\u6301\u7684\u683c\u5f0f\u6709"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u8f93\u5165\u683c\u5f0f:  commonmark, docbook, docx, epub, haddock, html, json*, latex,\n                markdown, markdown_github, markdown_mmd, markdown_phpextra,\n                markdown_strict, mediawiki, native, odt, opml, org, rst, t2t,\n                textile, twiki\n                [ *only Pandoc's JSON version of native AST]\n\u8f93\u51fa\u683c\u5f0f: asciidoc, beamer, commonmark, context, docbook, docx, dokuwiki,\n                dzslides, epub, epub3, fb2, haddock, html, html5, icml, json*,\n                latex, man, markdown, markdown_github, markdown_mmd,\n                markdown_phpextra, markdown_strict, mediawiki, native, odt,\n                opendocument, opml, org, pdf**, plain, revealjs, rst, rtf, s5,\n                slideous, slidy, texinfo, textile\n                [**for pdf output, use latex or beamer and -o FILENAME.pdf]\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5728 Mac \u4e0b\u53ef\u76f4\u63a5\u4f7f\u7528 brew \u5b89\u88c5\nbrew install pandoc\n\n# Markdown \u8f6c docx\npandoc makrdown.md -f markdown -t docx -o output.docx\n\n# Markdown \u8f6c pdf\n# \u4f9d\u8d56\u4e8e pdflatex,\n# Mac \u4e0b\u53ef\u901a\u8fc7\u5b89\u88c5 maclatex \u63d0\u4f9b\n#   brew cask install mactex # 2.5 G\npandoc makrdown.md -f markdown -t latex -o output.pdf\n")),Object(r.b)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5757\u5143\u7d20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6bb5\u843d\u548c\u6362\u884c"),Object(r.b)("li",{parentName:"ul"},"\u6807\u9898"),Object(r.b)("li",{parentName:"ul"},"\u5f15\u7528"),Object(r.b)("li",{parentName:"ul"},"\u5217\u8868"),Object(r.b)("li",{parentName:"ul"},"\u4ee3\u7801\u5757"),Object(r.b)("li",{parentName:"ul"},"\u5206\u9694\u7ebf"))),Object(r.b)("li",{parentName:"ul"},"Span \u5143\u7d20",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u94fe\u63a5"),Object(r.b)("li",{parentName:"ul"},"\u5f3a\u8c03"),Object(r.b)("li",{parentName:"ul"},"\u4ee3\u7801"),Object(r.b)("li",{parentName:"ul"},"\u56fe\u7247"))),Object(r.b)("li",{parentName:"ul"},"\u6742\u9879",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8f6c\u4e49"),Object(r.b)("li",{parentName:"ul"},"\u81ea\u52a8\u94fe\u63a5")))),Object(r.b)("h3",{id:"\u6bb5\u843d\u548c\u6362\u884c"},"\u6bb5\u843d\u548c\u6362\u884c"),Object(r.b)("p",null,"\u539f\u59cb Markdown \u4e2d\u901a\u8fc7\u5728\u6362\u884c\u7ed3\u5c3e\u6dfb\u52a0\u4e24\u4e2a\u7a7a\u683c\u6765\u8868\u793a\u6362\u884c, \u4f46\u56e0\u4e3a\u8fd9\u6837\u4e0d\u597d\u8fa8\u8bc6,\u5efa\u8bae\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"<br>"),"\u6765\u5f3a\u5236\u6362\u884c. Github \u6d41\u7684 Markdown \u4f1a\u5c06\u6bb5\u843d\u4e2d\u7684\u6362\u884c\u5f53\u505a\u771f\u5b9e\u6362\u884c. \u901a\u8fc7\u5728\u4e24\u884c\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u7a7a\u884c\u6765\u8868\u793a\u6bb5\u843d."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\n\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\n\u5bb9.<br/>\n\u8fd9\u662f\u4e0b\u4e00\u884c,\u8fd9\u662f\u4e0b\u4e00\u884c.\n\n\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\n\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\u5bb9,\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u7684\u5185\n\u5bb9.\n")),Object(r.b)("h3",{id:"\u6807\u9898"},"\u6807\u9898"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# \u4e00\u7ea7\u6807\u9898\n## \u4e8c\u7ea7\u6807\u9898\n### \u4e09\u7ea7\u6807\u9898\n#### \u56db\u7ea7\u6807\u9898\n##### \u4e94\u7ea7\u6807\u9898\n###### \u516d\u7ea7\u6807\u9898\n\n\u4e00\u7ea7\u6807\u9898\n=======\n\n\u4e8c\u7ea7\u6807\u9898\n-------\n")),Object(r.b)("h3",{id:"\u5f15\u7528"},"\u5f15\u7528"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"> \u8fd9\u662f\u4e00\u7ea7\u5f15\u7528\n>> \u8fd9\u662f\u4e8c\u7ea7\u5f15\u7528\n>>> \u8fd9\u662f\u4e09\u7ea7\u5f15\u7528\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u7ea7\u5f15\u7528"),Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e8c\u7ea7\u5f15\u7528"),Object(r.b)("blockquote",{parentName:"blockquote"},Object(r.b)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e09\u7ea7\u5f15\u7528")))),Object(r.b)("h3",{id:"\u5217\u8868"},"\u5217\u8868"),Object(r.b)("p",null,"\u5217\u8868\u5206\u4e3a\u6709\u5e8f\u5217\u8868\u548c\u65e0\u5e8f\u5217\u8868, \u5217\u8868\u53ef\u5d4c\u5957\u4f7f\u7528."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"* \u65e0\u5e8f\u5217\u8868\n    1. \u6709\u5e8f\u5217\u8868\n        \u6362\u884c\u4e66\u5199\u66f4\u591a\u7684\u5185\u5bb9\n        * \u65e0\u5e8f\u5217\u8868\n    1. \u6709\u5e8f\u5217\u8868\n* \u65e0\u5e8f\u5217\u8868\n\n----\n\n0. \u6709\u5e8f\u5217\u8868\n    1. \u6709\u5e8f\u5217\u8868\n0. \u5e8f\u53f7\u4f1a\u81ea\u52a8\u589e\u52a0\n1. \u5e8f\u53f7\u65e0\u6cd5\u4fee\u6539\n    * \u65e0\u5e8f\u5217\u8868\n        3. \u6709\u5e8f\u5217\u8868\n    * \u65e0\u5e8f\u5217\u8868\n2. \u6709\u5e8f\u5217\u8868\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u5217\u8868",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u6709\u5e8f\u5217\u8868\n\u6362\u884c\u4e66\u5199\u66f4\u591a\u7684\u5185\u5bb9",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u5217\u8868"))),Object(r.b)("li",{parentName:"ol"},"\u6709\u5e8f\u5217\u8868"))),Object(r.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u5217\u8868")),Object(r.b)("hr",null),Object(r.b)("ol",{start:0},Object(r.b)("li",{parentName:"ol"},"\u6709\u5e8f\u5217\u8868",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"\u6709\u5e8f\u5217\u8868"))),Object(r.b)("li",{parentName:"ol"},"\u5e8f\u53f7\u4f1a\u81ea\u52a8\u589e\u52a0"),Object(r.b)("li",{parentName:"ol"},"\u5e8f\u53f7\u65e0\u6cd5\u4fee\u6539",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u5217\u8868\n3. \u6709\u5e8f\u5217\u8868"),Object(r.b)("li",{parentName:"ul"},"\u65e0\u5e8f\u5217\u8868"))),Object(r.b)("li",{parentName:"ol"},"\u6709\u5e8f\u5217\u8868")),Object(r.b)("h3",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"```\nclass Obj{\n    int a;\n    void method(){}\n}\n```\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"class Obj{\n    int a;\n    void method(){}\n}\n")),Object(r.b)("h3",{id:"\u5206\u9694\u7ebf"},"\u5206\u9694\u7ebf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u8fd9\u662f\n\n---\n\u5206\u9694\u7ebf\n")),Object(r.b)("p",null,"\u8fd9\u662f"),Object(r.b)("hr",null),Object(r.b)("p",null,"\u5206\u9694\u7ebf"),Object(r.b)("h3",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[\u663e\u793a\u7684\u5185\u5bb9](\u94fe\u63a5\u7684\u5730\u5740)\n[\u663e\u793a\u7684\u5185\u5bb9][\u5b9a\u4e49\u7684\u94fe\u63a5\u540d]\n\n[Wener](https://github.com/wenerme)\n[Wenerme][\u7f51\u7ad9\u5730\u5740]\n\n  [\u7f51\u7ad9\u5730\u5740]: https://github.com/wenerme\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/wenerme"},"Wener"),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/wenerme"},"Wenerme")),Object(r.b)("h3",{id:"\u5f3a\u8c03"},"\u5f3a\u8c03"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u4e2d_\u4e8c_\u75c5__\u7206__\u8868.\n\u53ef*\u4e92*\u6362**\u4f7f**\u7528.\n")),Object(r.b)("p",null,"\u4e2d",Object(r.b)("em",{parentName:"p"},"\u4e8c"),"\u75c5",Object(r.b)("strong",{parentName:"p"},"\u7206"),"\u8868.\n\u53ef",Object(r.b)("em",{parentName:"p"},"\u4e92"),"\u6362",Object(r.b)("strong",{parentName:"p"},"\u4f7f"),"\u7528."),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)("p",null,"\u7528\u4e8e\u5728\u6bb5\u843d\u4e2d\u5f15\u7528\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u5728\u547d\u4ee4\u884c\u8f93\u5165 `echo Hello world` \u4f1a\u770b\u5230 `Hello world`\n")),Object(r.b)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"echo Hello world")," \u4f1a\u770b\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"Hello world")),Object(r.b)("h3",{id:"\u56fe\u7247"},"\u56fe\u7247"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"![\u56fe\u7247\u63cf\u8ff0](\u56fe\u7247\u5730\u5740)\n![\u56fe\u7247\u63cf\u8ff0][\u5b9a\u4e49\u7684\u94fe\u63a5\u540d]\n\n  [\u5b9a\u4e49\u7684\u94fe\u63a5\u540d]:\u94fe\u63a5\u5730\u5740\n\n![\u6211\u7684\u5934\u50cf][\u5934\u50cf\u5730\u5740]\n\n  [\u5934\u50cf\u5730\u5740]: https://avatars1.githubusercontent.com/u/1777211?v=3&s=40\n\n\x3c!-- \u53ef\u70b9\u51fb\u6253\u5f00\u7f51\u9875\u7684\u56fe\u7247 --\x3e\n[![\u6211\u7684\u5934\u50cf][\u5934\u50cf\u5730\u5740]](https://github.com/wenerme)\n")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://avatars1.githubusercontent.com/u/1777211?v=3&s=40",alt:"\u6211\u7684\u5934\u50cf"})),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/wenerme"},Object(r.b)("img",{parentName:"a",src:"https://avatars1.githubusercontent.com/u/1777211?v=3&s=40",alt:"\u6211\u7684\u5934\u50cf"}))),Object(r.b)("h3",{id:"\u8f6c\u4e49"},"\u8f6c\u4e49"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u8fd9\u4e2a\u662f\u661f\u53f7 *\\**\nHTML \u8f6c\u4e49\u7684\u5355\u5f15\u53f7 &#96;\n")),Object(r.b)("p",null,"\u8fd9\u4e2a\u662f\u661f\u53f7 *","*","*\nHTML \u8f6c\u4e49\u7684\u5355\u5f15\u53f7 ","`"),Object(r.b)("h3",{id:"\u81ea\u52a8\u8fde\u63a5"},"\u81ea\u52a8\u8fde\u63a5"),Object(r.b)("p",null,"\u6240\u6709\u7684\u8fde\u63a5\u90fd\u4f1a\u8f6c\u6362\u4e3a\u53ef\u70b9\u51fb\u7684\u8fde\u63a5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"http://github.com/wenerme\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://github.com/wenerme"},"http://github.com/wenerme")),Object(r.b)("h2",{id:"\u6269\u5c55\u8bed\u6cd5"},"\u6269\u5c55\u8bed\u6cd5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u8868\u683c"),Object(r.b)("li",{parentName:"ul"},"\u6307\u5b9a\u4ee3\u7801\u5757\u8bed\u6cd5"),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u89e3",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Stackedit \u652f\u6301"))),Object(r.b)("li",{parentName:"ul"},"\u6570\u5b66\u8868\u8fbe\u5f0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Stackedit \u652f\u6301"),Object(r.b)("li",{parentName:"ul"},"Gitbook \u53ef\u901a\u8fc7\u63d2\u4ef6\u652f\u6301"))),Object(r.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u6807\u7b7e ID"),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5b9a\u4e49",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Stackedit \u652f\u6301"))),Object(r.b)("li",{parentName:"ul"},"\u76ee\u5f55",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Stackedit \u652f\u6301"))),Object(r.b)("li",{parentName:"ul"},"Github \u5f15\u7528")),Object(r.b)("h3",{id:"\u8868\u683c"},"\u8868\u683c"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u5217|\u5217|\u5de6\u5bf9\u9f50\u5217|\u53f3\u5bf9\u9f50\u5217|\u5c45\u4e2d\u5bf9\u9f50\u5217\n----|----|:----|----:|:----:\n\u884c|\u884c|\u884c|\u884c|\u884c\n\u884c|\u884c|\u884c|\u884c<br/>\u6362\u884c|\u884c<br/>\u6362\u884c<br/>\u6362\u884c\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u5217"),Object(r.b)("th",{parentName:"tr",align:null},"\u5217"),Object(r.b)("th",{parentName:"tr",align:"left"},"\u5de6\u5bf9\u9f50\u5217"),Object(r.b)("th",{parentName:"tr",align:"right"},"\u53f3\u5bf9\u9f50\u5217"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5c45\u4e2d\u5bf9\u9f50\u5217"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u884c"),Object(r.b)("td",{parentName:"tr",align:null},"\u884c"),Object(r.b)("td",{parentName:"tr",align:"left"},"\u884c"),Object(r.b)("td",{parentName:"tr",align:"right"},"\u884c"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u884c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\u884c"),Object(r.b)("td",{parentName:"tr",align:null},"\u884c"),Object(r.b)("td",{parentName:"tr",align:"left"},"\u884c"),Object(r.b)("td",{parentName:"tr",align:"right"},"\u884c",Object(r.b)("br",null),"\u6362\u884c"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u884c",Object(r.b)("br",null),"\u6362\u884c",Object(r.b)("br",null),"\u6362\u884c")))),Object(r.b)("h3",{id:"\u6307\u5b9a\u4ee3\u7801\u5757\u8bed\u6cd5"},"\u6307\u5b9a\u4ee3\u7801\u5757\u8bed\u6cd5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"```java\nclass Obj{\n    int a;\n    void method(){}\n}\n```\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"class Obj{\n    int a;\n    void method(){}\n}\n")),Object(r.b)("h3",{id:"\u6ce8\u89e3"},"\u6ce8\u89e3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\n\u4f20\u7edf SQL[^sql] \u6570\u636e\u5e93\u5747\u652f\u6301 ACID[^acid] \u5c5e\u6027.\n\n  [^sql]: \u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\n\n  [^acid]: \u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\n")),Object(r.b)("p",null,"\u4f20\u7edf SQL",Object(r.b)("sup",{parentName:"p",id:"fnref-sql"},Object(r.b)("a",{parentName:"sup",href:"#fn-sql",className:"footnote-ref"},"sql"))," \u6570\u636e\u5e93\u5747\u652f\u6301 ACID",Object(r.b)("sup",{parentName:"p",id:"fnref-acid"},Object(r.b)("a",{parentName:"sup",href:"#fn-acid",className:"footnote-ref"},"acid"))," \u5c5e\u6027."),Object(r.b)("h3",{id:"\u6570\u5b66\u8868\u8fbe\u5f0f"},"\u6570\u5b66\u8868\u8fbe\u5f0f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u53d8\u91cf $A$ \u4e3a $3 \\times 2$\n\n$$\nA = 3 \\times 2\n$$\n")),Object(r.b)("p",null,"\u53d8\u91cf $A$ \u4e3a $3 \\times 2$"),Object(r.b)("p",null,"$$\nA = 3 \\times 2\n$$"),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol",id:"fn-sql"},"\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00",Object(r.b)("a",{parentName:"li",href:"#fnref-sql",className:"footnote-backref"},"\u21a9")),Object(r.b)("li",{parentName:"ol",id:"fn-acid"},"\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00",Object(r.b)("a",{parentName:"li",href:"#fnref-acid",className:"footnote-backref"},"\u21a9")))))}o.isMDXComponent=!0}}]);