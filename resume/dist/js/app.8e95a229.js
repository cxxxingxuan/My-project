(function(t){function n(n){for(var s,c,o=n[0],r=n[1],l=n[2],p=0,v=[];p<o.length;p++)c=o[p],a[c]&&v.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(n);while(v.length)v.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],s=!0,o=1;o<e.length;o++){var r=e[o];0!==a[r]&&(s=!1)}s&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var s={},a={app:0},i=[];function c(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)c.d(e,s,function(n){return t[n]}.bind(null,s));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"07ac":function(t,n,e){},"0b22":function(t,n,e){t.exports=e.p+"img/dynamicCSS.d4f75016.png"},1278:function(t,n,e){},3536:function(t,n,e){"use strict";var s=e("1278"),a=e.n(s);a.a},"394a":function(t,n,e){t.exports=e.p+"img/imooc.56201348.jpg"},"45f3":function(t,n,e){},"4fcf":function(t,n,e){"use strict";var s=e("6290"),a=e.n(s);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrap"},[t._m(0),e("container",{attrs:{id:"container"}},[e("aside",[e("Infomation"),e("Skill")],1),e("content",[e("Project")],1)]),e("footer",{attrs:{id:"footer"}})],1)])},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("header",{attrs:{id:"header"}},[s("div",{staticClass:"portrait"},[s("img",{attrs:{src:e("8c58")}})]),s("div",{staticClass:"name-job"},[s("h1",[t._v("曹谞轩")]),s("p",[t._v("应聘Web前端开发")])])])}],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"infomation"},[e("div",{staticClass:"profile"},[e("h3",[t._v("个人信息")]),t._l(t.profile,function(n){return e("div",{staticClass:"profile-item"},[e("span",{staticClass:"item-name"},[t._v(t._s(n.name))]),t._v(":"),e("span",{staticClass:"item-content"},[t._v(t._s(n.content))])])})],2),e("div",{staticClass:"contact"},[e("h3",[t._v("联系方式")]),t._l(t.contacts,function(n){return e("div",{staticClass:"contact-item"},[e("span",{staticClass:"item-name"},[t._v(t._s(n.name))]),t._v(":"),e("span",{staticClass:"item-content"},[t._v(t._s(n.content))])])})],2)])},o=[],r={name:"infomation",data:function(){return{contacts:[{name:"qq",content:"276906634"},{name:"微信",content:"16620460451"},{name:"电话",content:"16620460451"},{name:"e-mail",content:"caoxuxuan1992@QQ.com"}],profile:[{name:"年龄",content:"27"},{name:"学历",content:"本科"},{name:"github",content:"https://github.com/cxxxingxuan"}]}}},l=r,u=(e("3536"),e("2877")),p=Object(u["a"])(l,c,o,!1,null,"2845ca7b",null),v=p.exports,f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project"},[e("h3",[t._v("项目经历")]),t._l(t.projects,function(n){return e("div",{staticClass:"project-item"},[e("div",{staticClass:"project-name"},[t._v("\n      "+t._s(n.name)+"\n    ")]),e("div",{staticClass:"project-introduce"},[t._v("\n      项目介绍:"+t._s(n.content)+"\n    ")]),e("div",{staticClass:"project-img"},[e("img",{attrs:{src:n.img}})]),e("div",{staticClass:"project-URL"},[e("a",{attrs:{href:n.URL}},[t._v("预览地址")])])])})],2)},d=[],m={name:"project",data:function(){return{projects:[{name:"慕课教育动态宣传网页",content:"利用H5本地存储，css3阴影，css3动画，选择器等技术设计制作web页面",URL:"https://cxxxingxuan.github.io/imooc/",img:e("394a")},{name:"可爱的海绵宝宝",content:"是一个使用纯原生 JS 开发的，动态显示 CSS 画一个皮卡丘过程的小作品。该作品主要思路是通过间隔计时器遍历预先设置在 preview 标签内代码，将其一个个显示在页面上，并在 style 标签上作同样处理，以使代码 CSS 生效。此外，也实现了调速功能。",URL:"https://cxxxingxuan.github.io/dynamicCSS/",img:e("0b22")},{name:"Vue简历编辑器",content:"使用Vue、VueX、Vue-router、LeanCloud编写一个简历编辑器，包裹在线保存、登录注册、预览简历等功能。",URL:"https://cxxxingxuan.github.io/My-project/dist/index.html#/",img:e("a903")}]}}},_=m,b=(e("db68"),Object(u["a"])(_,f,d,!1,null,"3f02fc70",null)),C=b.exports,h=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"skill"},[e("h3",[t._v("个人技能")]),e("div",{staticClass:"skill-item"},[t._v("熟练 "),e("span",{staticClass:"content-bold"},[t._v("HTML、DIV + CSS")]),t._v(" 的页面布局，能根据设计图"),e("span",{staticClass:"content-bold"},[t._v("像素级")]),t._v("完成页面制作")]),e("div",{staticClass:"skill-item"},[t._v("熟悉 "),e("span",{staticClass:"content-bold"},[t._v("HTML 5 及语义化，掌握 CSS 3 动画、过渡效果")]),t._v("等常用技术")]),e("div",{staticClass:"skill-item"},[t._v("熟悉 "),e("span",{staticClass:"content-bold"},[t._v("原生JavaScript")]),t._v("，会使用 "),e("span",{staticClass:"content-bold"},[t._v("ES6+ 常用规范")]),t._v("，了解 "),e("span",{staticClass:"content-bold"},[t._v("jQuery 常用 API 及思想")])]),e("div",{staticClass:"skill-item"},[t._v("熟悉 "),e("span",{staticClass:"content-bold"},[t._v("Vue 常用功能")]),t._v("，理解如 "),e("span",{staticClass:"content-bold"},[t._v("组件、虚拟 DOM、双向绑定")]),t._v("等概念，能够使用 "),e("span",{staticClass:"content-bold"},[t._v("Vue 全家桶")]),t._v(" 开发项目")]),e("div",{staticClass:"skill-item"},[t._v("熟悉 "),e("span",{staticClass:"content-bold"},[t._v("模块化、工程化")]),t._v("开发流程，能够 "),e("span",{staticClass:"content-bold"},[t._v("配置 Webpack")])]),e("div",{staticClass:"skill-item"},[t._v("了解 "),e("span",{staticClass:"content-bold"},[t._v("HTTP")]),t._v(" 相关知识，了解常见的 "),e("span",{staticClass:"content-bold"},[t._v("Web 性能优化方案")])]),e("div",{staticClass:"skill-item"},[t._v("熟练使用 "),e("span",{staticClass:"content-bold"},[t._v("WebStorm、Sass、Git")]),t._v(" 等开发工具")])])}],x={name:"skill"},j=x,S=(e("4fcf"),Object(u["a"])(j,h,g,!1,null,"03196f02",null)),y=S.exports,k={name:"app",components:{Infomation:v,Project:C,Skill:y}},w=k,O=(e("5c0b"),Object(u["a"])(w,a,i,!1,null,null,null)),P=O.exports,L=e("2f62");s["a"].use(L["a"]);var M=new L["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({store:M,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var s=e("07ac"),a=e.n(s);a.a},6290:function(t,n,e){},"8c58":function(t,n,e){t.exports=e.p+"img/portrait.2dbee504.png"},a903:function(t,n,e){t.exports=e.p+"img/vueresume.76ee5376.png"},db68:function(t,n,e){"use strict";var s=e("45f3"),a=e.n(s);a.a}});
//# sourceMappingURL=app.8e95a229.js.map