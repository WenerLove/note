(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(7),a=(t(0),t(766)),c={title:"Kaniko"},i={unversionedId:"devops/container/kaniko",id:"devops/container/kaniko",isDocsHomePage:!1,title:"Kaniko",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/container/kaniko.md",slug:"/devops/container/kaniko",permalink:"/notes/devops/container/kaniko",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/kaniko.md",version:"current",sidebar:"docs",previous:{title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/container/container-faq"},next:{title:"Linux Container",permalink:"/notes/devops/container/lxc"}},l=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6784\u5efa\u5bb9\u5668\u955c\u50cf\u7684\u5de5\u5177"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 Docker\uff0c\u4e0d\u9700\u8981 root \u6743\u9650"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko"}),"GoogleContainerTools/kaniko")),Object(a.b)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:latest"),Object(a.b)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:debug - \u5305\u542b shell"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"GitLab runner use ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/docker/using_kaniko.html"}),"Kaniko"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'docker run --rm -it -w /workspace --entrypoint sh registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:debug\n\nmkdir -p /workspace /images /cache\ncd /workspace\n\ncat <<DOCKERFILE > Dockerfile\nFROM wener/base\nRUN apk add coreutils\nDOCKERFILE\n# --no-push \u4e0d\u63a8\u9001 --tarPath \u751f\u6210\u7684 tar \u9700\u8981\u8bbe\u7f6e --destination\n# --context \u9ed8\u8ba4 /workspace\n# --cache \u542f\u7528\u7f13\u5b58 --cache-dir \u57fa\u7840\u955c\u50cf\u7f13\u5b58\u76ee\u5f55\uff0c\u9ed8\u8ba4 /cache --cache-repo \u7f13\u5b58\u4ed3\u5e93\n# --use-new-run \u5b9e\u9a8c\u7279\u6027\uff0c\u63d0\u5347\u6784\u5efa\u6027\u80fd\n# --reproducible \u79fb\u9664\u65f6\u95f4\u6233\n/kaniko/executor --context $PWD --dockerfile $PWD/Dockerfile \\\n  --registry-mirror hbcvocvo.mirror.aliyuncs.com \\\n  --no-push --tarPath /images/build.tar --destination=image \\\n  --use-new-run --reproducible\n\n# Docker \u8ba4\u8bc1\u914d\u7f6e\nmkdir -p /kaniko/.docker\n# \u914d\u7f6e\necho "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n# \u6784\u5efa\u5e76\u63a8\u9001\n/kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG\n')),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/GoogleContainerTools/kaniko#additional-flags"}),"Additional Flags"))))}p.isMDXComponent=!0},766:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(m,i(i({ref:n},u),{},{components:t})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);