(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1044:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},695:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(1044)),l={title:"OpenVox Asterisk"},o={unversionedId:"voip/openvox-asterisk",id:"voip/openvox-asterisk",isDocsHomePage:!1,title:"OpenVox Asterisk",description:"- \u53c2\u8003",source:"@site/notes/voip/openvox-asterisk.md",slug:"/voip/openvox-asterisk",permalink:"/notes/voip/openvox-asterisk",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/openvox-asterisk.md",version:"current",sidebar:"docs",previous:{title:"VoIP",permalink:"/notes/voip/voip"},next:{title:"OpenVox",permalink:"/notes/voip/openvox"}},b=[{value:"macro",id:"macro",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://openvoxwiki.atlassian.net/wiki/spaces/VG/pages/2473082832/GSM+Gateways+APP+Note"},"GSM Gateways APP Note"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u53d1\u8d77\u547c\u53eb\nchannel originate SIP/6003 extension 10086@sip-6003\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"conf"),Object(i.b)("th",{parentName:"tr",align:null},"val"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astetcdir"),Object(i.b)("td",{parentName:"tr",align:null},"/etc/asterisk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astmoddir"),Object(i.b)("td",{parentName:"tr",align:null},"/usr/lib/asterisk/modules")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astvarlibdir"),Object(i.b)("td",{parentName:"tr",align:null},"/usr/lib/asterisk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astagidir"),Object(i.b)("td",{parentName:"tr",align:null},"/usr/lib/asterisk/agi-bin")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astspooldir"),Object(i.b)("td",{parentName:"tr",align:null},"/tmp/media/spool/asterisk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astrundir"),Object(i.b)("td",{parentName:"tr",align:null},"/var/run")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astlogdir"),Object(i.b)("td",{parentName:"tr",align:null},"/tmp/log/asterisk")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"astdatadir"),Object(i.b)("td",{parentName:"tr",align:null},"/etc/asterisk")))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\ud83d\udca1")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"spool \u4e3a /tmp/media/spool/asterisk"),Object(i.b)("li",{parentName:"ul"},"\u5f55\u97f3\u5b58\u50a8\u5728 /tmp/media/spool/asterisk/monitor"),Object(i.b)("li",{parentName:"ul"},"tmpfs \u6839\u636e\u5185\u5b58\u4e0d\u4e00\u6837\u5927\u5c0f\u4e0d\u4e00\u6837 - \u5c0f\u7684\u53ef\u80fd\u53ea\u6709 30MB \u5de6\u53f3 free \u5185\u5b58")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u26a0\ufe0f")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"wg \u7cfb\u5217\u6ca1\u6709 app_stack",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e Debian 8, Linux 4.19.81, asterisk 1.8.20")))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"rtg - \u8def\u7531\u5206\u7ec4"),Object(i.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u8def\u7531\u89c4\u5219\u4f1a\u57fa\u4e8e\u76ee\u6807\u751f\u6210 N \u4e2a context - ",Object(i.b)("inlineCode",{parentName:"li"},"rtg-test-1")),Object(i.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u76ee\u6807 include \u4e00\u4e2a"),Object(i.b)("li",{parentName:"ul"},"sounds - \u53ea\u6709\u90e8\u5206 sounds \u53ef\u7528\u4e8e\u6d4b\u8bd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"agent-pass.gsm"),Object(i.b)("li",{parentName:"ul"},"auth-incorrect.gsm"),Object(i.b)("li",{parentName:"ul"},"auth-thankyou.gsm"),Object(i.b)("li",{parentName:"ul"},"vm-goodbye.gsm")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'; \u81ea\u5b9a\u4e49\u8def\u7531 \u76ee\u6807 channel \u8bbe\u7f6e\u4e3a custom \u652f\u6301\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\n; Macro(my-inside) -> macro-my-inside\n[rtg-test-1]\nexten => _[*#+0-9].,1,NoOp(_[*#+0-9]. matches Rule rtg-test-1)\nexten => _[*#+0-9].,n,Set(CDR_CALLEEID=${EXTEN})\nexten => _[*#+0-9].,n,Macro(my-inside)\nexten => _[*#+0-9].,n(nochannel),ChannelHangup("${CDR_TOCHAN}")\nexten => _[*#+0-9].,n,Goto(nocdr,s,1)\nexten => _[*#+0-9].,n,Hangup()\n\n[nothingtodo]\nexten => _[*#+0-9].,1,NoOp(Nothing to do, Not setting out channel)\nexten => _[*#+0-9].,n,Hangup(42)\n\n# SIP \u5185\u7ebf\n[internalsip]\nexten => _9X.,1,NoOp(SIP Internal Call)\nexten => _9X.,n,Set(CDR_CALLEEID=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${SHELL(/my_tools/get_sipendpointname "${CDR_TOCHAN}")})\nexten => _9X.,n,Dial(SIP/${EXTEN:1})\nexten => _9X.,n,Hangup(42)\n\n# SIP \u51fa\u5c40\u903b\u8f91\n[sipinbound]\nexten => _[*#+0-9].,1,NoOp(SIP Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${SIPROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${SIPROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[iaxinbound]\nexten => _[*#+0-9].,1,NoOp(IAX Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${IAXROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${IAXROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[nocdr]\nexten => s,1,ChannelHangup("${CDR_TOCHAN}")\nexten => s,n,Hangup(42)\n\n[globals]\n# \u9ed8\u8ba4 SIP \u8def\u7531\nSIPROUTE=sipdefault\n')),Object(i.b)("h2",{id:"macro"},"macro"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"dial-failover",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"gsm",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Macro(dial-failover,,${EXTEN},${POLICY_GROUP-RND-OUT},RET)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},'Macro("SIP/6003-0000000c", "dial-failover,,10086,extra/7,0,gsm-4,RET")')))),Object(i.b)("li",{parentName:"ul"},"ARG1 forward callee id"),Object(i.b)("li",{parentName:"ul"},"ARG2 dial extension"),Object(i.b)("li",{parentName:"ul"},"ARG3 \u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"ARG4 extension flag"),Object(i.b)("li",{parentName:"ul"},"ARG5 CDR_TOCHAN"))),Object(i.b)("li",{parentName:"ul"},"wg - ",Object(i.b)("inlineCode",{parentName:"li"},"Macro(dial-failover,,${CDR_CALLEEID},RET,extra/r1,0,0)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ARG1 \u547c\u8f6c\u53f7\u7801"),Object(i.b)("li",{parentName:"ul"},"ARG2 \u8865\u53eb\u53f7"),Object(i.b)("li",{parentName:"ul"},"ARG3 \u8fd4\u56de - nocarrier, hangup, congestion"),Object(i.b)("li",{parentName:"ul"},"ARG4 \u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"ARG5 \u989d\u5916\u6807\u8bc6"),Object(i.b)("li",{parentName:"ul"},"ARG6 CDR \u4e2d\u7684 TO"),Object(i.b)("li",{parentName:"ul"},"4\uff0c5\uff0c6 \u53d8\u91cf\u5728\u6bcf\u4e00\u6b21 failover \u4f1a\u9012\u589e")))))))}p.isMDXComponent=!0}}]);