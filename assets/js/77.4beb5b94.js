(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{517:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前端兼容性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端兼容性问题"}},[t._v("#")]),t._v(" 前端兼容性问题")]),t._v(" "),s("h3",{attrs:{id:"存在兼容性问题的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在兼容性问题的原因"}},[t._v("#")]),t._v(" 存在兼容性问题的原因")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("不同浏览器的内核也不尽相同，所以各个浏览器对网页的解析存在一定的差异。")])]),t._v(" "),s("li",[s("p",[t._v("浏览器内核主要分为两种，一是渲染引擎，另一个是 js 引擎，内核更加倾向于说渲染引擎。")])])]),t._v(" "),s("p",[t._v("常见的浏览器内核：\n"),s("img",{attrs:{src:"/myblog/images/browser.png",alt:"浏览器内核"}})]),t._v(" "),s("ol",[s("li",[t._v("不同浏览器内外补丁不同")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("IE9 以下浏览器不能使用 opacity")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alpha")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opacity = 50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("progid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DXImageTransform.Microsoft."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alpha")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style = 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opacity = 50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("3.边距重叠问题；当相邻两个元素都设置了margin 边距时，margin 将取最大值，舍弃最小值；\n解决方案：为了不让边重叠，可以给子元素增加一个父级元素，并设置父级元素为overflow:hidden；")]),t._v(" "),s("h3",{attrs:{id:"解决过哪些兼容性问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决过哪些兼容性问题"}},[t._v("#")]),t._v(" 解决过哪些兼容性问题")]),t._v(" "),s("h4",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),s("ul",[s("li",[t._v("postcss 加前缀")]),t._v(" "),s("li",[t._v("透明度兼容性写法")]),t._v(" "),s("li",[t._v("边距重叠问题")]),t._v(" "),s("li",[t._v("不同浏览器内外补丁不同")])]),t._v(" "),s("h4",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用 babel, 将 ES6 转 ES5")])]),t._v(" "),s("li",[s("p",[t._v("polyfill")])]),t._v(" "),s("li",[s("p",[t._v("窗口大小的兼容")])]),t._v(" "),s("li",[s("p",[t._v("键盘事件 keyCode 兼容性")])]),t._v(" "),s("li",[s("p",[t._v("DOM 事件处理程序的兼容写法")]),t._v(" "),s("ul",[s("li",[t._v("事件冒泡兼容性问题")]),t._v(" "),s("li",[t._v("阻止默认事件兼容性问题")])])]),t._v(" "),s("li",[s("p",[t._v("滚动条滚动的距离")])]),t._v(" "),s("li",[s("p",[t._v("网页可视区域大小")])]),t._v(" "),s("li",[s("p",[t._v("阻止事件冒泡兼容")])]),t._v(" "),s("li",[s("p",[t._v("事件监听兼容")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键盘事件 `keyCode` 兼容性写法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("which\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器窗口可视区域大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client_w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client_h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动条滚动的距离")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scroll_Top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM事件处理程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getEvent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取消默认行为")]),t._v("\nevent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preventDefault"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止冒泡")]),t._v("\nevent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopPropagation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelBubble"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件监听兼容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IE")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("的写法attachEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"vue项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue项目"}},[t._v("#")]),t._v(" vue项目")]),t._v(" "),s("p",[t._v("工程化解决方案")]),t._v(" "),s("ul",[s("li",[t._v("使用postcss-loader, 给css自动添加前缀")]),t._v(" "),s("li",[t._v("使用babel, 将ES6语法转为ES5")]),t._v(" "),s("li",[t._v("polyfill")])]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/angel648/p/11392262.html")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/sqLeiQ/article/details/105045545")]),t._v(" "),s("p",[t._v("https://zhuanlan.zhihu.com/p/35404967")])])}),[],!1,null,null,null);s.default=e.exports}}]);