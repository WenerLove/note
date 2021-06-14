(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1080:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),i=(n(0),n(1080)),o={title:"chan_pjsip"},l={unversionedId:"voip/asterisk/chan_pjsip",id:"voip/asterisk/chan_pjsip",isDocsHomePage:!1,title:"chan_pjsip",description:"- \u57fa\u4e8e pjproject \u5b9e\u73b0\u7684 sip \u901a\u9053",source:"@site/notes/voip/asterisk/chan_pjsip.md",slug:"/voip/asterisk/chan_pjsip",permalink:"/notes/voip/asterisk/chan_pjsip",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/chan_pjsip.md",version:"current",sidebar:"docs",previous:{title:"chan_iax",permalink:"/notes/voip/asterisk/chan_iax"},next:{title:"chan_sip",permalink:"/notes/voip/asterisk/chan_sip"}},p=[{value:"pjsip_wizard",id:"pjsip_wizard",children:[]},{value:"res_pjsip_outbound_registration.c:1061 handle_registration_response: Fatal response &#39;401&#39; received from &#39;sip:192.168.1.2&#39; on registration attempt to &#39;sip:6001@192.168.2.2&#39;, stopping outbound registration",id:"res_pjsip_outbound_registrationc1061-handle_registration_response-fatal-response-401-received-from-sip19216812-on-registration-attempt-to-sip600119216822-stopping-outbound-registration",children:[]}],b={toc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e pjproject \u5b9e\u73b0\u7684 sip \u901a\u9053"),Object(i.b)("li",{parentName:"ul"},"pjsip \u529f\u80fd\u5f88\u591a\uff0c\u56e0\u6b64\u6709\u5f88\u591a\u7684 res_pjsip\uff0c\u4e5f\u6709\u5f88\u591a\u914d\u7f6e\u9879")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"meaning"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"acl"),Object(i.b)("td",{parentName:"tr",align:null},"Access Control List"),Object(i.b)("td",{parentName:"tr",align:null},"res_pjsip_acl, acl.conf \u5f15\u7528")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"aor"),Object(i.b)("td",{parentName:"tr",align:null},"Address of Record"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"auth"),Object(i.b)("td",{parentName:"tr",align:null},"Authentication"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"contact"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"domain_alias"),Object(i.b)("td",{parentName:"tr",align:null},"Domain Alias"),Object(i.b)("td",{parentName:"tr",align:null},"\u57df\u540d\u522b\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"endpoint"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"identify"),Object(i.b)("td",{parentName:"tr",align:null},"Endpoint Identification"),Object(i.b)("td",{parentName:"tr",align:null},"host to endpoint")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"phoneprov"),Object(i.b)("td",{parentName:"tr",align:null},"Phone Provisioning"),Object(i.b)("td",{parentName:"tr",align:null},"res_phoneprov")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"registration"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"outbound SIP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"resource_list"),Object(i.b)("td",{parentName:"tr",align:null},"Resource lists"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"transport"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"udp,tcp,tls,ws,wss,flow")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"wizard"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"\u805a\u5408\u914d\u7f6e,res_pjsip_config_wizard")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5339\u914d\u89c4\u5219",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"From in inbound SIP -> endpoint"),Object(i.b)("li",{parentName:"ul"},"To in inbound SIP REGISTER -> aor"),Object(i.b)("li",{parentName:"ul"},"IP \u5730\u5740\u5339\u914d"))),Object(i.b)("li",{parentName:"ul"},"endpoint",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"-0..1-> auth"),Object(i.b)("li",{parentName:"ul"},"-1..N-> transport"),Object(i.b)("li",{parentName:"ul"},"-N-> aor",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u5730\u5740\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},"\u5173\u8054 MWI"),Object(i.b)("li",{parentName:"ul"},"-N-> contact"))))),Object(i.b)("li",{parentName:"ul"},"registration",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ce8\u518c\u5230\u5916\u90e8\u670d\u52a1 - \u76f8\u5f53\u4e8e Trunk"),Object(i.b)("li",{parentName:"ul"},"-0..1-> auth"),Object(i.b)("li",{parentName:"ul"},"-1..N-> transport"))),Object(i.b)("li",{parentName:"ul"},"auth - \u7531 endpoint \u548c registration \u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"identify",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"-0..1-> endpoint"),Object(i.b)("li",{parentName:"ul"},"match"),Object(i.b)("li",{parentName:"ul"},"res_pjsip_endpoint_identifier_ip"))),Object(i.b)("li",{parentName:"ul"},"acl"),Object(i.b)("li",{parentName:"ul"},"domain_alias"),Object(i.b)("li",{parentName:"ul"},"resource_list - \u8d44\u6e90\u5217\u8868\u8ba2\u9605 - SIP \u8bbe\u5907\u8ba2\u9605 SIP \u670d\u52a1\u7aef\u63d0\u4f9b\u7684\u8d44\u6e90",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Asterisk 13+"),Object(i.b)("li",{parentName:"ul"},"RFC 4662"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528 resource_list \u5219\u662f\u6bcf\u4e2a\u7aef\u76f4\u63a5\u8ba2\u9605\u72b6\u6001 - ",Object(i.b)("inlineCode",{parentName:"li"},"N*(N-1)")," - \u670d\u52a1\u7aef\u538b\u529b\u975e\u5e38\u5927"),Object(i.b)("li",{parentName:"ul"},"resource_list \u5c06\u591a\u4e2a \u5ba2\u6237\u7aef\u6216 resouece_list \u72b6\u6001\u805a\u5408\u4e3a\u4e00\u7ec4"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u9500\u552e\u7ec4\u4e00\u4e2a\u8ba2\u9605\u3001\u670d\u52a1\u7ec4\u4e00\u4e2a\u8ba2\u9605")))),Object(i.b)("h2",{id:"pjsip_wizard"},"pjsip_wizard"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u805a\u5408\u914d\u7f6e endpoint, aor, auth, identify, registration, phoneprov")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"[user](!)\ntype = wizard\naccepts_registrations = yes\naccepts_auth = yes\nendpoint/context = default\nendpoint/allow = !all,ulaw,gsm,g722\naor/max_contacts=5\n\n[6001](user)\ninbound_auth/username = 6001\ninbound_auth/password = 6001\n\n[trunk](!)\ntype = wizard\nsends_registrations = yes\nsends_auth = yes\nremote_hosts=192.168.1.1\nendpoint/context = default\nendpoint/allow = !all,ulaw,gsm,g722\naor/max_contacts=5\n\n[trunk-6003](trunk)\noutbound_auth/username = 6003\noutbound_auth/password = 6003\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'[wizard]\n; outbound auth\nsends_auth=no\noutbound_auth/username=\noutbound_auth/password=\n\n; inbound auth\naccepts_auth=no\ninbound_auth/username=\ninbound_auth/password=\n\n; outbound registration\nsends_registrations=no\nsends_line_with_registrations=no\n\n; inbound registration\naccepts_registrations=no\n; accepts_registrations=yes - aor \u9759\u6001 contact\n; accepts_registrations=no - match/identify\n; remote_hosts=<ipaddress | hostname>[:port] [,<ipaddress | hostname>[:port] ]\n\noutbound_proxy=\n; endpoint/outbound_proxy\n; aor/outbound_proxy\n; registration/outbound_proxy\n\ntransport=\n\n; registrations\nserver_uri_pattern=sip:${REMOTE_HOST}\nclient_uri_pattern=sip:${USERNAME}@${REMOTE_HOST}\ncontact_pattern=sip:${REMOTE_HOST}\n\n; phoneprov\nhas_phoneprov=no\nphoneprov/MAC=\n\n; hint exten\nhas_hint=no\nhint_context=endpoint/context\n; PJSIP/<wizard_id>\nhint_exten=none\n; \u4f8b\u5982 Gosub(stdexten,${EXTEN},1(${HINT}))"\nhint_application=Dial(${HINT})\n\n; \u5b50\u5bf9\u8c61\n;endpoint/<param>\n;aor/<param>\n;inbound_auth/<param>\n;outbound_auth/<param>\n;identify/<param>\n;registration/<param>\n;phoneprov/<param>\n')),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"res_pjsip_outbound_registrationc1061-handle_registration_response-fatal-response-401-received-from-sip19216812-on-registration-attempt-to-sip600119216822-stopping-outbound-registration"},"res_pjsip_outbound_registration.c:1061 handle_registration_response: Fatal response '401' received from 'sip:192.168.1.2' on registration attempt to 'sip:",Object(i.b)("a",{parentName:"h2",href:"mailto:6001@192.168.2.2"},"6001@192.168.2.2"),"', stopping outbound registration"),Object(i.b)("p",null,"\u521d\u6b21\u6ce8\u518c\u6210\u529f\uff0c\u4e4b\u540e\u6ce8\u518c\u90fd\u5931\u8d25"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pjsip send registry trunk-6001-reg-0\n")),Object(i.b)("p",null,"\u5c1d\u8bd5\u4fee\u6539\u914d\u7f6e\u589e\u52a0\u91cd\u8bd5\u673a\u5236"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-conf"},"expiration = 300\nauth_rejection_permanent = no\nretry_interval = 30\nforbidden_retry_interval = 60\nfatal_retry_interval = 120\nmax_retries = 120\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/asterisk/asterisk/blob/35437879e55b67d46cb9d0e558edef1e1609a28d/configs/samples/pjsip.conf.sample#L1335"},"pjsip.conf#fatal_retry_interval"))))}c.isMDXComponent=!0}}]);