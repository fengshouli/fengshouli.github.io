(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{509:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" vuepress")]),s._v(" "),t("h2",{attrs:{id:"vuepress使用过程中遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress使用过程中遇到的问题"}},[s._v("#")]),s._v(" vuepress使用过程中遇到的问题.")]),s._v(" "),t("h3",{attrs:{id:"一-具体的官网都有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-具体的官网都有"}},[s._v("#")]),s._v(" 一.具体的官网都有.")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"二-启动端口总是8081-无法改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-启动端口总是8081-无法改变"}},[s._v("#")]),s._v(" 二.启动端口总是8081/无法改变.")]),s._v(" "),t("p",[s._v("这种原因,多半是因为默认的8080端口被占用了导致的.直接改变端口重启无法生效.必须先将8080端口的杀掉,再改变vuepress的端口号 启动 .")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("//说明：查看占用xxxx端口的进程，得到进程号yyyy \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr xxxx\n\ntaskkill /pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17780")]),s._v(" /f ：杀掉yyyy进程\n\n//例:netstat -ano"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n//得到pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51680")]),s._v("\n//taskkill /pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51680")]),s._v(" /f\n//成功杀掉,让出8080端口.\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);