(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{447:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据埋点方案、监控方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据埋点方案、监控方案"}},[t._v("#")]),t._v(" 数据埋点方案、监控方案")]),t._v(" "),s("h2",{attrs:{id:"代码埋点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码埋点"}},[t._v("#")]),t._v(" 代码埋点")]),t._v(" "),s("p",[t._v("代码埋点是最灵活，同时也是最耗时的一种方式。")]),t._v(" "),s("p",[t._v("一般公司内部会封装自己的一套埋点上报的 npm 包, 提供给各业务线使用。")]),t._v(" "),s("p",[t._v("一般我们需要上报什么信息呢？")]),t._v(" "),s("ol",[s("li",[t._v("埋点的标识信息, 比如 eventId, eventType")]),t._v(" "),s("li",[t._v("业务自定义的信息, 比如教育行业, 点击一个按钮, 我们要上报用户点击的是哪个年级")]),t._v(" "),s("li",[t._v("通用的设备信息, 比如用户的 userId, useragent, deviceId, timestamp, locationUrl 等等")])]),t._v(" "),s("p",[t._v("一般怎么上报？")]),t._v(" "),s("ol",[s("li",[t._v("实时上报, 业务方调用发送埋点的 api 后, 立即发出上报请求")]),t._v(" "),s("li",[t._v("延时上报, sdk 内部收集业务方要上报的信息, 在浏览器空闲时间或者页面卸载前统一上报，上报失败会做补偿措施。")])]),t._v(" "),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("代码")]),t._v(" "),s("h2",{attrs:{id:"无埋点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无埋点"}},[t._v("#")]),t._v(" 无埋点")]),t._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("无埋点并不是真正的字面意思，其真实含义其实是，不需要研发去手动埋点。")]),t._v(" "),s("p",[t._v("一般会有一个 sdk 封装好各种逻辑, 然后业务方直接引用即可。")]),t._v(" "),s("p",[t._v("sdk 中做的事情一般是监听所有页面事件, 上报所有点击事件以及对应的事件所在的元素，然后通过后台去分析这些数据。")]),t._v(" "),s("p",[t._v("业界有 GrowingIO, 神策, 诸葛 IO, Heap, Mixpanel 等等商业产品")]),t._v(" "),s("h3",{attrs:{id:"实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("ol",[s("li",[t._v("监听 window 元素")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("获取元素唯一标识 xPath")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 如果元素有id属性，直接返回//*[@id="xPath"]')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//*[@id=\"'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"]'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向上查找到body，结束查找, 返回结果")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/html/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" currentIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认第一个元素的索引为1")]),t._v("\n    siblings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sibling "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" siblings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sibling "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定了当前元素在兄弟节点中的索引后, 向上查找")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'['")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        currentIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("']'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sibling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" sibling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继续寻找当前元素在兄弟节点中的索引")]),t._v("\n      currentIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"获取元素的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取元素的位置"}},[t._v("#")]),t._v(" 获取元素的位置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" doc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scrollX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scrollY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scrollX\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scrollY\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("offsetX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" scrollX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("offsetY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" scrollY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"上报"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上报"}},[t._v("#")]),t._v(" 上报")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offsetData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("offsetData "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);