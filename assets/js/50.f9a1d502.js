(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{604:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据埋点方案、监控方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据埋点方案、监控方案"}},[t._v("#")]),t._v(" 数据埋点方案、监控方案")]),t._v(" "),a("h2",{attrs:{id:"代码埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码埋点"}},[t._v("#")]),t._v(" 代码埋点")]),t._v(" "),a("p",[t._v("代码埋点是最灵活，同时也是最耗时的一种方式。")]),t._v(" "),a("p",[t._v("一般公司内部会封装自己的一套埋点上报的 npm 包, 提供给各业务线使用。")]),t._v(" "),a("p",[t._v("一般我们需要上报什么信息呢？")]),t._v(" "),a("ol",[a("li",[t._v("埋点的标识信息, 比如 eventId, eventType")]),t._v(" "),a("li",[t._v("业务自定义的信息, 比如教育行业, 点击一个按钮, 我们要上报用户点击的是哪个年级")]),t._v(" "),a("li",[t._v("通用的设备信息, 比如用户的 userId, useragent, deviceId, timestamp, locationUrl 等等")])]),t._v(" "),a("p",[t._v("一般怎么上报？")]),t._v(" "),a("ol",[a("li",[t._v("实时上报, 业务方调用发送埋点的 api 后, 立即发出上报请求")]),t._v(" "),a("li",[t._v("延时上报, sdk 内部收集业务方要上报的信息, 在浏览器空闲时间或者页面卸载前统一上报，上报失败会做补偿措施。")])]),t._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("代码")]),t._v(" "),a("h2",{attrs:{id:"无埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无埋点"}},[t._v("#")]),t._v(" 无埋点")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("无埋点并不是真正的字面意思，其真实含义其实是，不需要研发去手动埋点。")]),t._v(" "),a("p",[t._v("一般会有一个 sdk 封装好各种逻辑, 然后业务方直接引用即可。")]),t._v(" "),a("p",[t._v("sdk 中做的事情一般是监听所有页面事件, 上报所有点击事件以及对应的事件所在的元素，然后通过后台去分析这些数据。")]),t._v(" "),a("p",[t._v("业界有 GrowingIO, 神策, 诸葛 IO, Heap, Mixpanel 等等商业产品")]),t._v(" "),a("h3",{attrs:{id:"实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("ol",[a("li",[t._v("监听 window 元素")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("获取元素唯一标识 xPath")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 如果元素有id属性，直接返回//*[@id="xPath"]')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//*[@id=\"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"]'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向上查找到body，结束查找, 返回结果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/html/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" currentIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认第一个元素的索引为1")]),t._v("\n    siblings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sibling "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" siblings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定了当前元素在兄弟节点中的索引后, 向上查找")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'['")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        currentIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("']'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" sibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继续寻找当前元素在兄弟节点中的索引")]),t._v("\n      currentIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取元素的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取元素的位置"}},[t._v("#")]),t._v(" 获取元素的位置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" doc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scrollX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scrollY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scrollX\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scrollY\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("offsetX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" scrollX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("offsetY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" scrollY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上报"}},[t._v("#")]),t._v(" 上报")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getXPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offsetData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("offsetData "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);