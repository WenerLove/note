(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{677:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(7),i=(r(0),r(766)),l={id:"esp32",title:"ESP32"},c={unversionedId:"hardware/soc/esp32/esp32",id:"hardware/soc/esp32/esp32",isDocsHomePage:!1,title:"ESP32",description:"Tips",source:"@site/notes/hardware/soc/esp32/README.md",slug:"/hardware/soc/esp32/esp32",permalink:"/notes/hardware/soc/esp32/esp32",editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/soc/esp32/README.md",version:"current",sidebar:"docs",previous:{title:"Arduino",permalink:"/notes/hardware/microcontroller/dev/arduino"},next:{title:"ImageMagick",permalink:"/notes/algorithm/cv/imagemagick"}},o=[{value:"Tips",id:"tips",children:[]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"Dev",id:"dev",children:[]}],p={rightToc:o};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"2016 \u5e74")),Object(i.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5904\u7406\u5668",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CPU Xtensa dual-core (or single-core) 32-bit LX6 microprocessor, operating at 160 or 240 MHz and performing at up to 600 DMIPS"),Object(i.b)("li",{parentName:"ul"},"Ultra low power (ULP) co-processor"))),Object(i.b)("li",{parentName:"ul"},"520 KiB SRAM"),Object(i.b)("li",{parentName:"ul"},"Wi-Fi 802.11 b/g/n"),Object(i.b)("li",{parentName:"ul"},"Bluetooth v4.2 BR/EDR and BLE (shares the radio with Wi-Fi)"),Object(i.b)("li",{parentName:"ul"},"\u5916\u8bbe\u63a5\u53e3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"12-bit SAR ADC up to 18 channels"),Object(i.b)("li",{parentName:"ul"},"2 \xd7 8-bit DACs"),Object(i.b)("li",{parentName:"ul"},"10 \xd7 touch sensors (capacitive sensing GPIOs)"),Object(i.b)("li",{parentName:"ul"},"4 \xd7 SPI"),Object(i.b)("li",{parentName:"ul"},"2 \xd7 I\xb2S interfaces"),Object(i.b)("li",{parentName:"ul"},"2 \xd7 I\xb2C interfaces"),Object(i.b)("li",{parentName:"ul"},"3 \xd7 UART"),Object(i.b)("li",{parentName:"ul"},"SD/SDIO/CE-ATA/MMC/eMMC host controller"),Object(i.b)("li",{parentName:"ul"},"SDIO/SPI slave controller"),Object(i.b)("li",{parentName:"ul"},"Ethernet MAC interface with dedicated DMA and IEEE 1588 Precision Time Protocol support"),Object(i.b)("li",{parentName:"ul"},"CAN bus 2.0"),Object(i.b)("li",{parentName:"ul"},"Infrared remote controller (TX/RX, up to 8 channels)"),Object(i.b)("li",{parentName:"ul"},"Motor PWM"),Object(i.b)("li",{parentName:"ul"},"LED PWM (up to 16 channels)"),Object(i.b)("li",{parentName:"ul"},"Hall effect sensor"),Object(i.b)("li",{parentName:"ul"},"Ultra low power analog pre-amplifier"))),Object(i.b)("li",{parentName:"ul"},"\u5b89\u5168",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"WiFi WFA, WPA/WPA2 and WAPI"),Object(i.b)("li",{parentName:"ul"},"\u5b89\u5168\u542f\u52a8"),Object(i.b)("li",{parentName:"ul"},"Flash encryption"),Object(i.b)("li",{parentName:"ul"},"1024-bit OTP, up to 768-bit for customers"),Object(i.b)("li",{parentName:"ul"},"Cryptographic hardware acceleration: AES, SHA-2, RSA, elliptic curve cryptography (ECC), random number generator (RNG)"))),Object(i.b)("li",{parentName:"ul"},"\u7535\u6e90\u7ba1\u7406",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5185\u90e8\u4f4e\u538b\u5dee\u7a33\u538b\u5668(low-dropout regulator - LDO)"),Object(i.b)("li",{parentName:"ul"},"Individual power domain for RTC"),Object(i.b)("li",{parentName:"ul"},"5\u03bcA deep sleep current"),Object(i.b)("li",{parentName:"ul"},"Wake up from GPIO interrupt, timer, ADC measurements, capacitive touch sensor interrupt")))),Object(i.b)("h2",{id:"dev"},"Dev"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/"}),"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/")),Object(i.b)("li",{parentName:"ul"},"Espressif IoT Development Framework"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://esp-idf-zh.readthedocs.io/zh_CN/latest/"}),"https://esp-idf-zh.readthedocs.io/zh_CN/latest/"))))}b.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(O,c(c({ref:t},p),{},{components:r})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);