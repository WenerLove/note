(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),l=(a(0),a(890)),b={id:"keycloak",title:"Keycloak"},c={unversionedId:"service/auth/keycloak",id:"service/auth/keycloak",isDocsHomePage:!1,title:"Keycloak",description:"- \u901a\u8fc7 jgroups \u5b9e\u73b0\u96c6\u7fa4",source:"@site/notes/service/auth/keycloak.md",slug:"/service/auth/keycloak",permalink:"/notes/service/auth/keycloak",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/keycloak.md",version:"current",sidebar:"docs",previous:{title:"Keycloak JS SDK",permalink:"/notes/service/auth/keycloak-js"},next:{title:"Kratos",permalink:"/notes/service/auth/kratos"}},i=[{value:"Docker",id:"docker",children:[]},{value:"LDAP",id:"ldap",children:[]},{value:"group-ldap-mapper",id:"group-ldap-mapper",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 jgroups \u5b9e\u73b0\u96c6\u7fa4"),Object(l.b)("li",{parentName:"ul"},"vault \u652f\u6301 K8S secrets",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6302\u8f7d\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"$JBOSS_HOME/secrets")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2020/10/23/use-mobile-numbers-for-user-authentication-in-keycloak"},"Use mobile numbers for user authentication in Keycloak")))),Object(l.b)("li",{parentName:"ul"},"\u5730\u5740",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/auth"),Object(l.b)("li",{parentName:"ul"},"/auth/console"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/auth/realms/${REALM}/protocol/openid-connect/auth")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/auth/admin/${REALM}/console"))))),Object(l.b)("h2",{id:"docker"},"Docker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://hub.docker.com/r/jboss/keycloak"},"jboss/keycloak")),Object(l.b)("li",{parentName:"ul"},"/opt/jboss/keycloak/themes - \u4e3b\u9898\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"/opt/jboss/keycloak/standalone/deployments - \u81ea\u5b9a\u4e49 provider \u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},"/opt/jboss/startup-scripts - \u542f\u52a8\u8fd0\u884c\u811a\u672c\u76ee\u5f55")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Env"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_USER"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_PASSWORD"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_USER_FILE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_PASSWORD_FILE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_VENDOR"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"h2,postgres,mysql,mariadb,oracle,mssql",Object(l.b)("br",null),"\u9ed8\u8ba4\u81ea\u52a8\u68c0\u6d4b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_ADDR"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_PORT"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_DATABASE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_SCHEMA"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_USER"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_USER_FILE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_PASSWORD"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DB_PASSWORD_FILE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PROXY_ADDRESS_FORWARDING"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"\u5728\u4ee3\u7406\u4e4b\u540e\u9700\u8981\u63a5\u53d7\u53cd\u5411\u4ee3\u7406\u53c2\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_FRONTEND_URL"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u524d\u7aef\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_LOGLEVEL"),Object(l.b)("td",{parentName:"tr",align:null},"INFO"),Object(l.b)("td",{parentName:"tr",align:null},"ALL, DEBUG, ERROR, FATAL, INFO, OFF, TRACE, WARN")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ROOT_LOGLEVEL"),Object(l.b)("td",{parentName:"tr",align:null},"INFO"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_STATISTICS"),Object(l.b)("td",{parentName:"tr",align:null},"db,http"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"/metrics")," \u66b4\u9732\u7684\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_WELCOME_THEME"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_DEFAULT_THEME"),Object(l.b)("td",{parentName:"tr",align:null},"keycloak"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"KEYCLOAK_IMPORT"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u6307\u5b9a\u4e00\u4e2a realm json \u6587\u4ef6\u5bfc\u5165")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u542f\u52a8\u4f7f\u7528 H2\n# \u6620\u5c04\u51fa\u6570\u636e\u53ef\u91cd\u590d\u542f\u52a8\u4e0d\u4e22\u914d\u7f6e\n# \u9700\u8981\u6dfb\u52a0\u7684\u7528\u6237\u4f1a\u751f\u6210\u914d\u7f6e\u5230 /opt/jboss/keycloak/standalone/configuration/keycloak-add-user.json\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak/data:/opt/jboss/keycloak/standalone/data \\\n  --name keycloak jboss/keycloak\n\ndocker run --rm -it --entrypoint bash \\\n  -e -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\n# \u914d\u7f6e\u6587\u4ef6\n# $HOME/.keycloak/kcadm.config\ndocker run --rm -it --entrypoint bash \\\n  -v $PWD/keycloak:/opt/jboss/.keycloak \\\n  -v $PWD:/host -w /host \\\n  --name keycloak jboss/keycloak\n\nexport PATH=/opt/jboss/keycloak/bin:$PATH\n\n# master \u6388\u6743\nkcadm.sh config credentials --server http://localhost:8080/auth --realm master --user admin --password admin\n\n# \u6388\u6743\u4fe1\u606f\nkcadm.sh config credentials --server http://localhost:8080/auth --realm demo --user admin --client admin\n# \u521b\u5efa\u57df\nkcadm.sh create realms -s realm=demorealm -s enabled=true -o\n# \u521b\u5efa Client\nCID=$(kcadm.sh create clients -r demorealm -s clientId=my_client -s 'redirectUris=[\"http://localhost:8980/myapp/*\"]' -i)\n\n# \u83b7\u53d6 oidc \u8fde\u63a5\u4fe1\u606f\nkcadm.sh get clients/$CID/installation/providers/keycloak-oidc-keycloak-json\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# H2 Console\njar="./modules/system/layers/base/com/h2database/h2/main/h2-*.jar"\nurl="jdbc:h2:./standalone/data/keycloak;AUTO_SERVER=TRUE"\n\njava -cp $jar org.h2.tools.Console -url "$url" -user sa -password sa\n')),Object(l.b)("h2",{id:"ldap"},"LDAP"),Object(l.b)("h2",{id:"group-ldap-mapper"},"group-ldap-mapper"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5206\u7ec4\u6620\u5c04"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u6709\u540c\u540d\u7ec4\uff0c\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u540c\u6b65\u56de Keycloak"),Object(l.b)("li",{parentName:"ul"},"LDAP \u65e0\u6cd5\u8bc6\u522b\u540c\u540d\u7ec4")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u7ffb\u8bd1"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LDAP Groups DN"),Object(l.b)("td",{parentName:"tr",align:null},"\u5206\u7ec4 DN"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"td"},"ou=groups,dc=wener,dc=me"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Group Name LDAP Attribute"),Object(l.b)("td",{parentName:"tr",align:null},"LDAP \u5c5e\u6027 -> \u5206\u7ec4\u540d\u5b57"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Group Object Classes"),Object(l.b)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u7c7b"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"groupOfNames")," ",Object(l.b)("inlineCode",{parentName:"td"},"groups"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Preserve Group Inheritance"),Object(l.b)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u5c42\u7ea7"),Object(l.b)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e0d\u4fdd\u7559\uff0c\u5219\u540c\u6b65\u540e\u90fd\u662f\u9876\u7ea7",Object(l.b)("br",null),"\u5982\u679c\u4fdd\u7559\uff0c\u5b58\u5728\u76f8\u540c\u540d\u5b57\u5206\u7ec4\u4f1a\u5bfc\u81f4\u540c\u6b65\u5f02\u5e38")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ignore Missing Groups"),Object(l.b)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u7f3a\u5c11\u5206\u7ec4"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Membership LDAP Attribute"),Object(l.b)("td",{parentName:"tr",align:null},"\u8868\u793a\u6210\u5458\u7684 LDAP \u5c5e\u6027"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"td"},"member"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Membership Attribute Type"),Object(l.b)("td",{parentName:"tr",align:null},"\u6210\u5458\u5c5e\u6027\u7c7b\u578b"),Object(l.b)("td",{parentName:"tr",align:null},"DN UID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Membership User LDAP Attribute"),Object(l.b)("td",{parentName:"tr",align:null},"\u6210\u5458\u7528\u6237 LDAP \u5c5e\u6027"),Object(l.b)("td",{parentName:"tr",align:null},"UID \u6a21\u5f0f\u5219\u4f7f\u7528\u8be5\u5b57\u6bb5\u8868\u793a\uff0c\u4e00\u822c\u4e3a ",Object(l.b)("inlineCode",{parentName:"td"},"uid"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LDAP Filter"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u6761\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mode"),Object(l.b)("td",{parentName:"tr",align:null},"\u6a21\u5f0f"),Object(l.b)("td",{parentName:"tr",align:null},"LDAP_ONLY,IMPORT,READ_ONLY")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User Groups Retrieve Strategy"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u7b56\u7565"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Member-Of LDAP Attribute"),Object(l.b)("td",{parentName:"tr",align:null},"memberOf \u5c5e\u6027"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mapped Group Attributes"),Object(l.b)("td",{parentName:"tr",align:null},"\u6620\u5c04\u5c5e\u6027"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"td"},"description,ou,o"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Drop non-existing groups during sync"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c\u6b65\u5220\u9664\u4e0d\u5b58\u5728\u5206\u7ec4"),Object(l.b)("td",{parentName:"tr",align:null},"LDAP \u5230 Keycloak \u65f6\u5019")))))}o.isMDXComponent=!0},890:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,O=m["".concat(b,".").concat(d)]||m[d]||u[d]||l;return a?r.a.createElement(O,c(c({ref:t},p),{},{components:a})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);