(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{342:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(914)),i={title:"GORM"},l={unversionedId:"languages/go/gorm",id:"languages/go/gorm",isDocsHomePage:!1,title:"GORM",description:"* \u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",source:"@site/notes/languages/go/gorm.md",slug:"/languages/go/gorm",permalink:"/notes/languages/go/gorm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/gorm.md",version:"current",sidebar:"docs",previous:{title:"Golang Windows",permalink:"/notes/languages/go/go-windows"},next:{title:"entgo",permalink:"/notes/languages/go/lib/ent"}},c=[{value:"\u94a9\u5b50",id:"\u94a9\u5b50",children:[]},{value:"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5",id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5",children:[]},{value:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406",children:[]},{value:"\u591a\u6001",id:"\u591a\u6001",children:[]},{value:"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664 \u9ed8\u8ba4\u5728\u4e8b\u52a1\u4e2d\u6267\u884c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SkipDefaultTransaction \u53ef\u5173\u95ed - \u7ea6 30% \u6027\u80fd"))),Object(o.b)("li",{parentName:"ul"},"Tag \u4e0d\u533a\u5206\u5927\u5c0f\u5199")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'// \u67e5\u8be2\u6761\u4ef6\u4e0e\u6570\u636e\u4e0d\u540c\u4f46\u53ef\u4ee5\u4e00\u6b21\u64cd\u4f5c\ndb.Where(User{Name: "non_existing"}).Assign(User{Age: 20}).FirstOrCreate(&user)\n')),Object(o.b)("h2",{id:"\u94a9\u5b50"},"\u94a9\u5b50"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BeforeSave"),Object(o.b)("li",{parentName:"ul"},"BeforeCreate/BeforeUpdate"),Object(o.b)("li",{parentName:"ul"},"AfterCreate/AfterUpdate"),Object(o.b)("li",{parentName:"ul"},"AfterSave"))),Object(o.b)("li",{parentName:"ul"},"\u5220\u9664",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BeforeDelete"),Object(o.b)("li",{parentName:"ul"},"AfterDelete"))),Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"AfterFind")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'// \u64cd\u4f5c\u5f53\u524d\u7684 Statement \u53ef\u4fee\u6539\u8bed\u53e5\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  // \u901a\u8fc7 tx.Statement \u4fee\u6539\u5f53\u524d\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a\n  tx.Statement.Select("Name", "Age")\n  tx.Statement.AddClause(clause.OnConflict{DoNothing: true})\n\n  // tx \u662f\u5e26\u6709 `NewDB` \u9009\u9879\u7684\u65b0\u4f1a\u8bdd\u6a21\u5f0f\n  // \u57fa\u4e8e tx \u7684\u64cd\u4f5c\u4f1a\u5728\u540c\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u4f46\u4e0d\u4f1a\u5e26\u4e0a\u4efb\u4f55\u5f53\u524d\u7684\u6761\u4ef6\n  err := tx.First(&role, "name = ?", user.Role).Error\n  // SELECT * FROM roles WHERE name = "admin"\n  // ...\n  return err\n}\n')),Object(o.b)("h2",{id:"dryrun-\u67e5\u770b\u6267\u884c\u8bed\u53e5"},"DryRun \u67e5\u770b\u6267\u884c\u8bed\u53e5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"stmt := db.Session(&gorm.Session{DryRun: true}).First(&user, 1).Statement\nstmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`\nstmt.Vars         //=> []interface{}{1}\n\n// \u53ef\u751f\u6210\u5b8c\u6574 SQL - \u4e0d\u8981\u7528\u4e8e\u67e5\u8be2\uff0c\u6709 SQL \u6ce8\u5165\u98ce\u9669\ndb.Dialector.Explain(stmt.SQL.String(), stmt.Vars...)\n")),Object(o.b)("h2",{id:"\u8df3\u56de\u94a9\u5b50\u5904\u7406"},"\u8df3\u56de\u94a9\u5b50\u5904\u7406"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"db.Session(&gorm.Session{SkipHooks: true}).Create(&user)\n")),Object(o.b)("h2",{id:"\u591a\u6001"},"\u591a\u6001"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u591a\u6001\u503c\u4e3a\u8868\u540d")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Cat struct {\n  ID    int\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  ID   int\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n}\n')),Object(o.b)("h2",{id:"\u4f7f\u7528-uid-\u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"},"\u4f7f\u7528 UID \u5b9e\u73b0\u7c7b\u4f3c\u591a\u6001"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Model struct {\n  ID    int\n  UID   string // uuid\n}\ntype Cat struct {\n  Model\n  Name  string\n  Toy   Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Dog struct {\n  Model\n  Name string\n  Toy  Toy `gorm:"polymorphic:Owner;"`\n}\n\ntype Toy struct {\n  ID        int\n  Name      string\n  OwnerID   int\n  OwnerType string\n  OwnerUID string\n}\n')))}s.isMDXComponent=!0},914:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(g,l(l({ref:n},u),{},{components:t})):a.a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);