(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{628:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var l=a(2),b=a(7),n=(a(0),a(766)),r={id:"sqlite",title:"SQLite"},c={unversionedId:"db/relational/sqlite",id:"db/relational/sqlite",isDocsHomePage:!1,title:"SQLite",description:"Tips",source:"@site/notes/db/relational/sqlite.md",slug:"/db/relational/sqlite",permalink:"/notes/db/relational/sqlite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/sqlite.md",version:"current",sidebar:"docs",previous:{title:"MySQL",permalink:"/notes/db/relational/mysql"},next:{title:"CouchDB",permalink:"/notes/db/document/couchdb"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Snippets",id:"snippets",children:[]},{value:"Notes",id:"notes",children:[]},{value:".help",id:"help",children:[]},{value:"Deeper",id:"deeper",children:[]},{value:"\u5f52\u6863\u6587\u4ef6 / SQL Archive",id:"\u5f52\u6863\u6587\u4ef6--sql-archive",children:[{value:"sqlarfs",id:"sqlarfs",children:[]}]},{value:"Node",id:"node",children:[]},{value:"Java",id:"java",children:[]},{value:"UDF",id:"udf",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"tips"},"Tips"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"http://sqlite.org/datatype3.html"}),"\u6570\u636e\u7c7b\u578b"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"NULL"),Object(n.b)("li",{parentName:"ul"},"INTEGER - 1, 2, 3, 4, 6, 8"),Object(n.b)("li",{parentName:"ul"},"REAL - 8 byte"),Object(n.b)("li",{parentName:"ul"},"TEXT - UTF-8, UTF-16BE, UTF-16LE"),Object(n.b)("li",{parentName:"ul"},"BLOB"))),Object(n.b)("li",{parentName:"ul"},"\u8bed\u6cd5",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/lang_expr.html"}),"expr")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/pragma.html"}),"pragma")))),Object(n.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SQLite \u7684\u6838\u5fc3\u9650\u5236\u662f\u5e76\u53d1\u5199\u5165\u6027\u80fd - \u5982\u679c\u9700\u8981\u5e76\u53d1\u5199\u5165\uff0c\u4e0d\u5efa\u8bae\u7528 SQLite"),Object(n.b)("li",{parentName:"ul"},"DATETIME \u4e0d\u4f1a\u5b58\u50a8\u6beb\u79d2"),Object(n.b)("li",{parentName:"ul"},"\u6ca1\u6709 Base64 \u51fd\u6570"),Object(n.b)("li",{parentName:"ul"},"BLOB \u4f5c\u4e3a\u4e8c\u8fdb\u5236\u5b58\u50a8\u90e8\u5206\u8bed\u8a00\u7684 Driver \u652f\u6301\u4e0d\u592a\u597d"),Object(n.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6700\u591a 999 \u4e2a\u53d8\u91cf"),Object(n.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u914d\u5408 zfs \u8fdb\u884c\u538b\u7f29 - \u6ce8\u610f\u4f7f\u7528\u76f8\u540c\u7684 page size",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"page_size \u4e00\u822c 4096, cache_size \u4e00\u822c -2000 \u5373 2000 kb"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"PRAGMA schema.page_size"),", ",Object(n.b)("inlineCode",{parentName:"li"},"PRAGMA schema.cache_size")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.mail-archive.com/sqlite-users@mailinglists.sqlite.org/msg114729.html"}),"compressed sqlite3 database file?")))))),Object(n.b)("li",{parentName:"ul"},"\u9650\u5236",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/limits.html"}),"Limits In SQLite")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/c3ref/c_limit_attached.htm"}),"c_limit_attached"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'# macOS \u5b89\u88c5\nbrew install sqlite3\n# \u56e0\u4e3a\u7cfb\u7edf\u81ea\u5e26 - \u6240\u4ee5\u9ed8\u8ba4\u4e0d\u4f1a\u6dfb\u52a0\u5230 PATH\n$(brew --prefix sqlite3)/bin/sqlite3\n# \u6dfb\u52a0\u5b89\u88c5\u7684 sqlite3 \u5230 PATH\nexport PATH="/usr/local/opt/sqlite/bin:$PATH"\n')),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sql"}),"-- \u5bfc\u5165 csv\ncreate table foo(a, b);\n.mode csv\n.import test.csv foo\n\n-- \u65e5\u671f\u51fd\u6570\n-- https://sqlite.org/lang_datefunc.html\n-- \u8f6c\u6362\u65f6\u95f4\u6233\nselect datetime( 1323648000, 'unixepoch' );\n-- \u83b7\u53d6\u65f6\u95f4\u6233, \u5e26\u6beb\u79d2\nSELECT CAST((julianday('now') - 2440587.5) * 86400000 AS INTEGER);\n-- \u9ed8\u8ba4\u503c\u5e26\u6beb\u79d2\nCREATE TABLE IF NOT EXISTS event\n(\n  create_at DATETIME DEFAULT (STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW'))\n);\n\n-- \u9644\u52a0\u5176\u4ed6\u6587\u4ef6\u5230\u6570\u636e\u5e93\nATTACH 'cache.db' AS cache;\n")),Object(n.b)("h2",{id:"snippets"},"Snippets"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sql"}),"-- epoch to datetime\nselect datetime(1580000000,'unixepoch');\n-- \u6dfb\u52a0\u65f6\u533a\nselect datetime(1580000000,'unixepoch','localtime');\n-- datetime to epoch\nselect strftime('%s', datetime(1580000000,'unixepoch','localtime'));\n-- \u5f53\u524d epoch\nselect strftime('%s', 'now');\n")),Object(n.b)("h2",{id:"notes"},"Notes"),Object(n.b)("p",null,Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.sqlite.org/optoverview.html"}),"The SQLite Query Optimizer Overview")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"WHERE \u6761\u4ef6\u5206\u6790",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u7d22\u5f15\u9009\u62e9"))),Object(n.b)("li",{parentName:"ul"},"BETWEEN \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u8f6c\u6362\u4e3a >= <="),Object(n.b)("li",{parentName:"ul"},"\u4e0e\u7d22\u5f15\u5224\u65ad"))),Object(n.b)("li",{parentName:"ul"},"OR \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u76f8\u540c\u5217\u8bed\u610f\u4e0a\u53ef\u8f6c\u6362\u4e3a IN"),Object(n.b)("li",{parentName:"ul"},"\u4e0d\u540c\u5217 OR \u9700\u8981\u6309 Cost \u9009\u62e9"))),Object(n.b)("li",{parentName:"ul"},"LIKE \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u524d\u7f00\u7d22\u5f15"))),Object(n.b)("li",{parentName:"ul"},"Skip-Scan \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u6761\u4ef6\u4e0d\u4ee5\u7d22\u5f15\u6700\u5de6\u5217\u5f00\u59cb"),Object(n.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u9650\u5b9a\u6700\u5de6\u5217\u6761\u4ef6\u6765\u5229\u7528\u7d22\u5f15"),Object(n.b)("li",{parentName:"ul"},"\u4f8b\u5982\u5f53\u6700\u5de6\u5217\u53ea\u6709\u56fa\u5b9a\u51e0\u4e2a\u503c\u7684\u65f6\u5019"))),Object(n.b)("li",{parentName:"ul"},"JOIN",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"JOIN \u91cd\u6392\u5e8f"),Object(n.b)("li",{parentName:"ul"},"\u57fa\u4e8e SQLITE_STAT \u9009\u62e9\u987a\u5e8f"),Object(n.b)("li",{parentName:"ul"},"\u901a\u8fc7 CROSS JOIN \u63a7\u5236\u67e5\u8be2"))),Object(n.b)("li",{parentName:"ul"},"\u591a\u4e2a\u7d22\u5f15\u7684\u9009\u62e9",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u7edf\u8ba1"),Object(n.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(n.b)("inlineCode",{parentName:"li"},"+a = 4")," \u7684\u65b9\u5f0f\u6765\u6697\u793a\u4e0d\u5b9e\u7528 ",Object(n.b)("inlineCode",{parentName:"li"},"a")," \u7684\u7d22\u5f15"),Object(n.b)("li",{parentName:"ul"},"\u8303\u56f4\u67e5\u8be2"))),Object(n.b)("li",{parentName:"ul"},"\u8986\u76d6\u7d22\u5f15",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5168\u8868\u626b\u63cf\u65f6\u9009\u62e9\u5305\u542b rowid \u7684\u7d22\u5f15"))),Object(n.b)("li",{parentName:"ul"},"ORDER BY \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4f7f\u7528\u7b26\u5408 ORDER BY \u8981\u6c42\u7684\u7d22\u5f15"))),Object(n.b)("li",{parentName:"ul"},"\u901a\u8fc7\u7d22\u5f15\u8fdb\u884c\u90e8\u5206 ORDER BY",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5305\u542b\u591a\u4e2a ORDER BY \u65f6"))),Object(n.b)("li",{parentName:"ul"},"\u62c9\u5e73\u5b50\u67e5\u8be2",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5c06\u5b50\u67e5\u8be2\u4f18\u5316\u4e3a JOIN"))),Object(n.b)("li",{parentName:"ul"},"\u534f\u7a0b\u6267\u884c\u5b50\u67e5\u8be2",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u90e8\u5206\u5b50\u67e5\u8be2\u53ef\u4ee5\u4e0e\u5f53\u524d\u67e5\u8be2\u5e76\u884c\u6267\u884c"))),Object(n.b)("li",{parentName:"ul"},"MIN/MAX \u4f18\u5316",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5982\u679c\u5217\u662f\u67d0\u7d22\u5f15\u7684\u6700\u5de6\u5217\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15"))),Object(n.b)("li",{parentName:"ul"},"\u81ea\u52a8\u7d22\u5f15",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5f53\u67e5\u8be2\u6ca1\u6709\u7d22\u5f15\u65f6\uff0c\u53ef\u80fd\u4f1a\u5728\u8bed\u53e5\u6267\u884c\u671f\u95f4\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7d22\u5f15\u3002"),Object(n.b)("li",{parentName:"ul"},"\u521b\u5efa\u7d22\u5f15 O(NlogN) \u5168\u8868\u626b\u63cf O(N)"))),Object(n.b)("li",{parentName:"ul"},"\u4e0b\u63a8\u4f18\u5316/Push-Down Optimization",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u5b50\u67e5\u8be2\u65e0\u6cd5\u88ab\u5e73\u6574\u4e3a\u5916\u90e8\u67e5\u8be2\uff0c\u53ef\u5c1d\u8bd5\u5c06\u5916\u90e8\u67e5\u8be2\u7684\u6761\u4ef6\u4e0b\u63a8\u5230\u5b50\u67e5\u8be2\u4e2d\u3002"))),Object(n.b)("li",{parentName:"ul"},"LEFT JOIN Strength Reduction Optimization",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u6709\u65f6\u4e00\u4e2a LEFT JOIN \u53ef\u4ee5\u8f6c\u6362\u4e3a\u4e00\u4e2a\u666e\u901a\u7684 JOIN\uff0c\u53ea\u8981\u4e24\u8005\u7ed3\u679c\u76f8\u540c\u3002"),Object(n.b)("li",{parentName:"ul"},"if any column in the right-hand table of the LEFT JOIN must be non-NULL in order for the WHERE clause to be true, then the LEFT JOIN is demoted to an ordinary JOIN."))),Object(n.b)("li",{parentName:"ul"},"\u5ffd\u7565 LEFT JOIN",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u6709\u65f6 LEFT JOIN \u53ef\u4ee5\u5b8c\u5168\u5457\u5ffd\u7565",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u98de\u805a\u5408\u67e5\u8be2"),Object(n.b)("li",{parentName:"ul"},"DISTINC \u67e5\u8be2\u6216\u4f7f\u7528 ON/USING \u6765\u9650\u5236 JOIN \u53ea\u5339\u914d\u4e00\u5217"),Object(n.b)("li",{parentName:"ul"},"LETF JOIN \u53f3\u8fb9\u8868\u7684\u5217\u672a\u5728\u5916\u90e8\u67e5\u8be2\u4f7f\u7528")))))),Object(n.b)("p",null,Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.sqlite.org/queryplanner-ng.html"}),"The Next-Generation Query Planner")),Object(n.b)("p",null,"\u7edf\u8ba1\u4fe1\u606f\n",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.sqlite.org/fileformat2.html#stat1tab"}),"https://www.sqlite.org/fileformat2.html#stat1tab"),"\n",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.sqlite.org/lang_analyze.html"}),"https://www.sqlite.org/lang_analyze.html"),"\nANALYZE \u4f1a\u751f\u6210\u7edf\u8ba1\u4fe1\u606f\u8868"),Object(n.b)("p",null,"sqlite_stat1\n\u53ef\u66f4\u65b0\u6216\u5220\u9664\uff0c\u4e0d\u53ef alter \u6216\u521b\u5efa"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE sqlite_stat1(tbl,idx,stat);\nCREATE TABLE sqlite_stat2(tbl,idx,sampleno,sample);\nCREATE TABLE sqlite_stat3(tbl,idx,nEq,nLt,nDLt,sample);\nCREATE TABLE sqlite_stat4(tbl,idx,nEq,nLt,nDLt,sample);\n")),Object(n.b)("h2",{id:"help"},".help"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"\u6307\u4ee4"),Object(n.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),Object(n.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"\u9ed8\u8ba4"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".backup ?DB? FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u5907\u4efd\u6570\u636e\u5e93(\u9ed8\u8ba4\u4e3a main)\u5230 FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".bail on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u9519\u8bef\u65f6\u505c\u6b62")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".binary on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4e8c\u8fdb\u5236\u8f93\u51fa")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".clone NEWDB"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u514b\u9686\u73b0\u6709\u7684\u6570\u636e\u5e93\u5230 NEWDB"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".databases"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4f8b\u4e3e\u6dfb\u52a0\u7684\u6570\u636e\u5e93\u540d\u548c\u6587\u4ef6"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".dbinfo ?DB?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u6570\u636e\u5e93\u72b6\u6001\u4fe1\u606f"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".dump ?TABLE? ..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4ee5 SQL \u7684\u5f62\u5f0f\u8f6c\u50a8\u6570\u636e\u5e93",Object(n.b)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u8f6c\u50a8\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".echo on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u547d\u4ee4\u56de\u663e")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".eqp on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u81ea\u52a8\u6267\u884c EXPLAIN QUERY PLAN")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".exit"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u9000\u51fa"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".explain ?on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4f7f\u7528\u9002\u5408 EXPLAIN \u7684\u8f93\u51fa\u6a21\u5f0f",Object(n.b)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u53c2\u6570,\u5219\u4e3a\u6253\u5f00")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".fullschema"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a sqlite_stat \u7684 schema \u548c\u5185\u5bb9"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".headers on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u5934")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".help"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u8be5\u4fe1\u606f"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".import FILE TABLE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u5bfc\u5165 FILE \u5185\u5bb9\u4e3a TABLE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".indexes ?TABLE?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u6240\u6709\u7d22\u5f15",Object(n.b)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".limit ?LIMIT? ?VAL?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u6216\u66f4\u6539 SQLITE_LIMIT \u7684\u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".log FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u65e5\u5fd7, FILE \u53ef\u4ee5\u4e3a stderr/stdout")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".mode MODE ?TABLE?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8f93\u51fa\u6a21\u5f0f"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"ascii    \u884c\u5217\u4f7f\u7528 0x1F \u548c 0x1E \u5206\u9694"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"csv      \u9017\u53f7\u5206\u9694\u7684\u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"column   \u5de6\u5bf9\u9f50\u5217  (\u53c2\u89c1 .width)"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"html     HTML ",Object(n.b)("inlineCode",{parentName:"td"},"<table>")," \u4ee3\u7801"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"insert   Insert \u8bed\u53e5 TABLE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"line     \u6bcf\u884c\u53ea\u6709\u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"list     \u4f7f\u7528 .separator \u5206\u9694\u7684\u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"tabs     \u5236\u8868\u7b26\u5206\u5272\u7684\u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"tcl      TCL list \u5143\u7d20"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".nullvalue STRING"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4f7f\u7528 STRING \u6765\u66ff\u4ee3 NULL \u503c"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".once FILENAME"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u8f93\u51fa\u4e0b\u4e00\u4e2a SQL \u6307\u4ee4\u5230 FILENAME"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".open ?FILENAME?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4fbf\u4e8e\u73b0\u6709\u6570\u636e\u5e93\u5e76\u6253\u5f00 FILENAME"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".output ?FILENAME?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u53d1\u9001\u8f93\u51fa\u5230 FILENAME \u6216 stdout"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".print STRING..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a STRING"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".prompt MAIN CONTINUE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4fee\u6539\u63d0\u793a\u7b26"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".quit"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u9000\u51fa"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".read FILENAME"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u6267\u884c FILENAME \u4e2d\u7684 SQL"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".restore ?DB? FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),'\u6062\u590d DB(\u9ed8\u8ba4 "main") \u7684\u5185\u5bb9\u5230 FILE'),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".save FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u5c06\u5185\u5b58\u6570\u636e\u5e93\u5199\u5165\u5230 FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".scanstats on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u6253\u5f00\u6216\u5173\u95ed sqlite3_stmt_scanstatus() \u76d1\u6d4b")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".schema ?TABLE?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a CREATE \u8bed\u53e5",Object(n.b)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".separator COL ?ROW?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u4fee\u6539\u5217\u548c\u884c\u7684\u5206\u9694\u7b26,\u4f1a\u5f71\u54cd\u8f93\u51fa\u548c .import"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".shell CMD ARGS..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u5728\u7cfb\u7edf shell \u4e2d\u6267\u884c CMD ARGS..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".show"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u5f53\u524d\u7684\u5404\u79cd\u8bbe\u7f6e"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".stats on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u7edf\u8ba1\u5f00\u5173")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".system CMD ARGS..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u5728\u7cfb\u7edf shell \u4e2d\u6267\u884c CMD ARGS..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".tables ?TABLE?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u663e\u793a\u8868\u540d",Object(n.b)("br",null),"\u5982\u679c\u6307\u5b9a\u4e86\u8868,\u5219\u53ea\u663e\u793a\u5339\u914d LIKE \u6a21\u5f0f\u7684\u8868."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".timeout MS"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u6253\u5f00\u88ab\u9501\u8868\u7684\u8d85\u65f6\u65f6\u95f4"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".timer on"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"SQL \u8ba1\u65f6\u5668\u5f00\u5173")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".trace FILE"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"off"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u8f93\u51fa\u6bcf\u4e2a SQL \u8bed\u53e5")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".vfsname ?AUX?"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u8f93\u51fa VFS \u6808"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),".width NUM1 NUM2 ..."),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),'\u8bbe\u7f6e "column" \u6a21\u5f0f\u7684\u5bbd\u5ea6,\u8d1f\u503c\u4e3a\u53f3\u5bf9\u9f50'),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}))))),Object(n.b)("h2",{id:"deeper"},"Deeper"),Object(n.b)("p",null,Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"https://dzone.com/articles/how-sqlite-database-works"}),"https://dzone.com/articles/how-sqlite-database-works")),Object(n.b)("h2",{id:"\u5f52\u6863\u6587\u4ef6--sql-archive"},"\u5f52\u6863\u6587\u4ef6 / SQL Archive"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/sqlar.html"}),"sqlar")," - \u81ea 2014 \u5e74 3.22.0 \u7248\u672c",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/src/tarball/sqlite.tar.gz?t=version-3.31.1"}),"https://www.sqlite.org/src/tarball/sqlite.tar.gz?t=version-3.31.1")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://sqlite.org/sqlar/doc/trunk/README.md"}),"sqlar")," \u72ec\u7acb\u7a0b\u5e8f",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"sqlarfs \u652f\u6301\u6302\u8f7d\u4e3a fuse - \u53ea\u8bfb"),Object(n.b)("li",{parentName:"ul"},"2018-01-07 ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f"}),"https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f")))),Object(n.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u76ee\u5f55 data \u4e3a null, sz=0"),Object(n.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(n.b)("inlineCode",{parentName:"li"},"length(sqlar.blob) < sqlar.sz")," \u90a3\u4e48\u6570\u636e\u5219\u662f\u538b\u7f29\u8fc7"),Object(n.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(n.b)("inlineCode",{parentName:"li"},"length(sqlar.blob) == sqlar.sz")," \u90a3\u4e48\u6570\u636e\u5219\u662f\u6ca1\u538b\u7f29\u8fc7\u7684"),Object(n.b)("li",{parentName:"ul"},"\u7b26\u53f7\u8fde\u63a5 ",Object(n.b)("inlineCode",{parentName:"li"},"sz = -1"),", \u8fde\u63a5\u76ee\u6807\u4f7f\u7528\u660e\u6587\u5b58\u50a8\u5728 data"),Object(n.b)("li",{parentName:"ul"},"\u538b\u7f29\u4f7f\u7528 deflate - \u5305\u542b\u5934 ",Object(n.b)("inlineCode",{parentName:"li"},"789c")," \u548c\u7ed3\u5c3e 4 \u5b57\u8282\u7684 checksum")))),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sql"}),"-- \u521b\u5efa sqlar \u4f7f\u7528\u7684\u8868\nCREATE TABLE sqlar(\n  name TEXT PRIMARY KEY,  -- name of the file\n  mode INT,               -- access permissions\n  mtime INT,              -- last modification time\n  sz INT,                 -- original file size\n  data BLOB               -- compressed content\n);\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'# \u521b\u5efa\nsqlite3 alltxt.sqlar -Ac *.txt\n# \u66f4\u65b0\nsqlite3 example.sqlar -Au *.md\n# \u663e\u793a\u6587\u4ef6\nsqlite3 example.sqlar -Atv\n# \u63d0\u53d6\nsqlite3 example.sqlar -Ax\n\n# -A \u7b49\u540c\u4e8e .ar\nsqlite3 my.sqlar -Acv file1 file2 file3\nsqlite3 my.sqlar ".ar -cv file1 file2 file3"\n\n# \u7c7b\u4f3c\u4e8e -Atv\nsqlite3 my.sqlar "select name,mode,sz,mtime from sqlar"\n')),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sql"}),"-- \u6587\u4ef6 33188 = 0100644\n-- \u76ee\u5f55 16877 = 040755\n\n-- \u7edf\u4e00\u4fee\u6539 mode\n-- \u6587\u4ef6\nupdate sqlar set mode=33188 where data is not null;\n-- \u76ee\u5f55\nupdate sqlar set mode=16877 where data is null;\n")),Object(n.b)("h3",{id:"sqlarfs"},"sqlarfs"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 archive\ncurl https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f -o sqlar-v20180107.tar.gz\n\n# \u6216\u8005\u5355\u6587\u4ef6\ncurl https://sqlite.org/sqlar/raw/sqlar.c?name=bbef7d188353c00bd2144b1d37e64991a62ef062 -o sqlar.c\ncurl https://sqlite.org/sqlar/raw/sqlarfs.c?name=b624195c04067a762ecf16693592d0a263140c63 -o sqlarfs.c\n\n# \u4f9d\u8d56 - \u5982\u679c\u4f7f\u7528\u5d4c\u5165\u7684 sqlite3.c \u5219\u4e0d\u9700\u8981 sqlite-dev\napk add zlib-dev fuse-dev sqlite-dev\n\n# \u7f16\u8bd1\ngcc sqlarfs.c -D_FILE_OFFSET_BITS=64 -lsqlite3 -lfuse -lz -o sqlarfs\ngcc sqlar.c -D_FILE_OFFSET_BITS=64 -lsqlite3 -lz -o sqlar\n")),Object(n.b)("h2",{id:"node"},"Node"),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# pre gyp \u9ed8\u8ba4\u4ece s3 \u4e0b\u8f7d - \u53ef\u6307\u5b9a\u955c\u50cf\nyarn add sqlite3 --sqlite3_binary_host_mirror=https://npm.taobao.org/mirrors/sqlite3/\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"// \u83b7\u53d6\u7248\u672c\nconst db = new Database(':memory:');\ndb.serialize(() => {\n  db.each('select sqlite_version() as version', (err, row) => {\n    console.log(`sqlite version ${row.version}`)\n  });\n});\ndb.close();\n")),Object(n.b)("h2",{id:"java"},"Java"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"xerial sqlite-jdbc ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/xerial/sqlite-jdbc/blob/master/Usage.md"}),"Usage"))),Object(n.b)("h2",{id:"udf"},"UDF"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.sqlite.org/c3ref/create_function.html"}),"Create Or Redefine SQL Functions")),Object(n.b)("li",{parentName:"ul"},"PHP \u652f\u6301 ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.php.net/manual/en/sqlite3.createfunction.php"}),"SQLite3::createFunction")),Object(n.b)("li",{parentName:"ul"},"Java Xerial \u652f\u6301 ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.javadoc.io/doc/org.xerial/sqlite-jdbc/3.30.1/org/sqlite/Function.html"}),"org.sqlite.Function")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/mapbox/node-sqlite3/issues/140"}),"mapbox/node-sqlite3#140"))))}j.isMDXComponent=!0},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return N}));var l=a(0),b=a.n(l);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,b=function(e,t){if(null==e)return{};var a,l,b={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),u=l,N=p["".concat(r,".").concat(u)]||p[u]||m[u]||n;return a?b.a.createElement(N,c(c({ref:t},O),{},{components:a})):b.a.createElement(N,c({ref:t},O))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var O=2;O<n;O++)r[O]=a[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);