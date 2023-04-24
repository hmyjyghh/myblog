(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{429:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-前端安全相关知识-名词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端安全相关知识-名词"}},[t._v("#")]),t._v(" 1. 前端安全相关知识/名词")]),t._v(" "),s("ul",[s("li",[t._v("浏览器相关：")])]),t._v(" "),s("ol",[s("li",[t._v("XSS")]),t._v(" "),s("li",[t._v("CSRF")]),t._v(" "),s("li",[t._v("HTTPS")]),t._v(" "),s("li",[t._v("CSP (内容安全策略, 可以禁⽌加载外域代码, 禁⽌外域提交等等)")]),t._v(" "),s("li",[t._v("HSTS (强制客户端使⽤HTTPS与服务端建⽴连接)")]),t._v(" "),s("li",[t._v("X-Frame-Options (控制当前⻚⾯是否可以被嵌⼊到Ifrmae中)")]),t._v(" "),s("li",[t._v("SRI (subresource intergrity ⼦资源完整性, 前端可以⽤webpack-subresource-integrity插件,\n在每个script上添加hash值, 校验加载的资源是否和当时打包⽣成的⼀致)")]),t._v(" "),s("li",[t._v("Referrer-Policy (控制referer的携带策略)")])]),t._v(" "),s("ul",[s("li",[t._v("Node(服务端)相关")])]),t._v(" "),s("ol",[s("li",[t._v("本地⽂件操作相关：路径拼接导致的⽂件泄露")]),t._v(" "),s("li",[t._v("ReDOS")]),t._v(" "),s("li",[t._v("时序攻击")]),t._v(" "),s("li",[t._v("ip origin referrer等request headers的校验")])]),t._v(" "),s("h2",{attrs:{id:"_1-xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss攻击"}},[t._v("#")]),t._v(" 1. XSS攻击")]),t._v(" "),s("p",[t._v("Cross-site scripting, 跨站脚本攻击, 通常简称为XSS.")]),t._v(" "),s("p",[t._v("为什么简写为XSS⽽不是CSS? 因为CSS被⼴泛应⽤于样式的称呼⾥, ⽽Cross意味交叉, X字⺟正好是符合交叉的含义, 所以简称为XSS。")]),t._v(" "),s("p",[s("strong",[t._v("说⽩点：就是攻击者想尽⼀切办法将可执⾏代码注⼊到⽹⻚中, ⽽恶意代码未经过滤，与⽹站正常的代码混在⼀起；浏览器⽆法分辨哪些脚本是可信的，导致恶意脚本被执⾏。")])]),t._v(" "),s("ul",[s("li",[s("h3",{attrs:{id:"_1-1-外在表现上-都有哪些攻击场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-外在表现上-都有哪些攻击场景"}},[t._v("#")]),t._v(" 1.1 外在表现上, 都有哪些攻击场景?")])])]),t._v(" "),s("ol",[s("li",[t._v("评论区植⼊js代码(即可输⼊的地⽅植⼊js代码)")]),t._v(" "),s("li",[t._v("url上拼接js代码")])]),t._v(" "),s("ul",[s("li",[s("h3",{attrs:{id:"_1-2-从技术⻆度上分析-都有哪些xss攻击的类型呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-从技术⻆度上分析-都有哪些xss攻击的类型呢"}},[t._v("#")]),t._v(" 1.2 从技术⻆度上分析, 都有哪些xss攻击的类型呢?")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("1. 存储型 Server")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("场景：常⻅于带有⽤户保存数据的⽹站功能，攻击者通过可输⼊区域来注⼊恶意代码, 如论坛发帖、商品评论、⽤户私信等。")])]),t._v(" "),s("li",[s("p",[t._v("攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者将恶意代码提交到⽬标⽹站的数据库中")]),t._v(" "),s("li",[t._v("⽤户打开⽬标⽹站时，服务端将恶意代码从数据库中取出来，拼接在HTML中返回给浏览器(因为⽤户之间是可以相互看到帖⼦、评论等的)")]),t._v(" "),s("li",[t._v("⽤户浏览器在收到响应后解析执⾏，混在其中的恶意代码也同时被执⾏")]),t._v(" "),s("li",[t._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作。")])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("2. 反射型 Server")])])]),t._v(" "),s("p",[t._v("攻击者结合多种⼿段诱导⽤户点击恶意url")]),t._v(" "),s("p",[t._v("与存储型的区别在于，存储型的恶意代码通过可输⼊区域, 存储在数据库中，⽽反射型的恶意代码拼接在URL上。\n由于需要⽤户主动打开恶意的 URL 才能⽣效，攻击者往往会结合多种⼿段诱导⽤户点击。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("场景：通过 URL 传递参数的功能，如⽹站搜索、跳转等。")])]),t._v(" "),s("li",[s("p",[t._v("攻击步骤：")]),t._v(" "),s("ol",[s("li",[t._v("攻击者构造出恶意的url")]),t._v(" "),s("li",[t._v("直接执行可执行的恶意代码")])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("3. Dom型 Browser")])])]),t._v(" "),s("p",[t._v("取出和执⾏恶意代码的操作，由浏览器端完成。")]),t._v(" "),s("p",[t._v("DOM 型 XSS 攻击中，取出和执⾏恶意代码由浏览器端完成，属于前端 JavaScript ⾃身的安全漏洞，⽽其他两种 XSS 都属于服务端的安全漏洞。")]),t._v(" "),s("ul",[s("li",[t._v("场景：通过 URL 传递参数的功能，如⽹站搜索、跳转等。")]),t._v(" "),s("li",[t._v("攻击步骤：\n"),s("ol",[s("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),t._v(" "),s("li",[t._v("⽤户打开带有恶意代码的 URL。")]),t._v(" "),s("li",[t._v("⽤户浏览器接收到响应后解析执⾏，前端 JavaScript 取出 URL 中的恶意代码并执⾏。")]),t._v(" "),s("li",[t._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作。")])])])])]),t._v(" "),s("li",[s("h3",{attrs:{id:"_1-3-模拟实现一个xss攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-模拟实现一个xss攻击"}},[t._v("#")]),t._v(" 1.3 模拟实现一个XSS攻击?")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("XSS"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转到新地址"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type-dom.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" queryObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" search "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search\nsearch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("([^&=?]+)=([^&]+)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tqueryObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queryObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirectUrl\n")])])]),s("p",[t._v("在浏览器打开html之后，手动在后面拼上参数, eg:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("new_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("redirectUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E8")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E6")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("8F"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E7")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("浏览器会直接执行alert中的恶意代码")]),t._v(" "),s("p",[t._v("将下面的代码直接复制到url 后面 ,就动态引入了 remote.js , 达到了引入外部脚本的目的, 取到了用户的cookie信息")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nscript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),t._v("\nscript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("async "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nscript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remote.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启浏览器XSS防御：Http Only 的话,  只允许http或https请求读取cookie、JS代码是无法读取cookie的(document.cookie会显示http-only的cookie项被自动过滤掉)。发送请求时自动发送cookie.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"通过巨量运算把你浏览器搞崩溃"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("h3",{attrs:{id:"_1-4-如何防范xss攻击呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-如何防范xss攻击呢"}},[t._v("#")]),t._v(" 1.4 如何防范XSS攻击呢?")])])]),t._v(" "),s("p",[t._v("主旨：防⽌攻击者提交恶意代码，防⽌浏览器执⾏恶意代码")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("对数据进⾏严格的输出编码：如HTML元素的编码，JS编码，CSS编码，URL编码等等.避免拼接 HTML; Vue/React 技术栈，避免使⽤ v-html / dangerouslyHtml")])]),t._v(" "),s("li",[s("p",[t._v("设置 HTTP Header CSP，即 Content-Security-Policy（不⽀持CSP的旧版浏览器可以设置X-XSS-Protection）")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- 增加攻击难度，配置CSP(本质是建⽴⽩名单，由浏览器进⾏拦截)\n- Content-Security-Policy: default-src ‘self’ -所有内容均来⾃站点的同⼀个源（不包括其⼦域名）\n- Content-Security-Policy: default-src ‘self’ *.trusted.com -允许内容来⾃信任的域名及其⼦域名 (域名不必须与CSP设置所在的域名相同)\n- Content-Security-Policy: default-src https://lubai.com -该服务器仅允许通过HTTPS⽅式并仅从lubai.com域名来访问⽂档\n\n可以做到很多事情，⽐如：\n1. 禁⽌加载外域代码，防⽌复杂的攻击逻辑。\n2. 禁⽌外域提交，⽹站被攻击后，⽤户的数据不会泄露到外域。\n3. 输⼊验证：⽐如⼀些常⻅的数字、URL、电话号码、邮箱地址等等做校验判断\n4. 开启浏览器XSS防御：Http Only， 这样 `cookie` 就不会被获取到了，禁⽌ JavaScript 读取某些敏感 Cookie，攻击者完成XSS 注⼊后也⽆法窃取此 Cookie。 \n5. 验证码, 网站中有很多验证码登录的例子 \n")])])]),s("h2",{attrs:{id:"_2-csrf攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-csrf攻击"}},[t._v("#")]),t._v(" 2. CSRF攻击")]),t._v(" "),s("p",[t._v("Cross-site request forgery, 跨站请求伪造.")]),t._v(" "),s("p",[t._v("攻击者诱导受害者进⼊恶意⽹站，在第三⽅⽹站中，向被攻击⽹站发送跨站请求。利⽤受害者在被攻击⽹站已经获取的注册凭证，绕过后台的⽤户验证，达到冒充⽤户对攻击的⽹站执⾏某项操作的⽬的.")]),t._v(" "),s("blockquote",[s("p",[t._v("攻击步骤:")])]),t._v(" "),s("ol",[s("li",[t._v("受害者登录 a.com，并保留了登录凭证（Cookie）")]),t._v(" "),s("li",[t._v("攻击者引诱受害者访问了b.com")]),t._v(" "),s("li",[t._v("b.com 向 a.com 发送了⼀个请求：a.com/act=xx浏览器会默认携带a.com的Cookie")]),t._v(" "),s("li",[t._v("a.com接收到请求后，对请求进⾏验证，并确认是受害者的凭证，误以为是受害者⾃⼰发送的请求")]),t._v(" "),s("li",[t._v("a.com以受害者的名义执⾏了act=xx")]),t._v(" "),s("li",[t._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执⾏了⾃⼰定义的操作")])]),t._v(" "),s("blockquote",[s("p",[t._v("攻击类型:")])]),t._v(" "),s("ul",[s("li",[t._v("GET型：如在⻚⾯的某个 img 中发起⼀个 get 请求")]),t._v(" "),s("li",[t._v("POST型：通过⾃动提交表单到恶意⽹站")])]),t._v(" "),s("h3",{attrs:{id:"如何防范csrf的攻击呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防范csrf的攻击呢"}},[t._v("#")]),t._v(" 如何防范CSRF的攻击呢?")]),t._v(" "),s("p",[t._v("CSRF⼀般都是发⽣在第三⽅域名, 攻击者也⽆法获取到Cookie信息, 只是可以利⽤浏览器机制去使⽤Cookie.")]),t._v(" "),s("ol",[s("li",[t._v("阻⽌第三⽅域名的访问")])]),t._v(" "),s("ul",[s("li",[t._v("Cookie SameSite")]),t._v(" "),s("li",[t._v("同源检测")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("提交请求时附加额外信息")])]),t._v(" "),s("ul",[s("li",[t._v("校验Token")]),t._v(" "),s("li",[t._v("双重Cookie")])]),t._v(" "),s("h2",{attrs:{id:"_3-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-https"}},[t._v("#")]),t._v(" 3. HTTPS")]),t._v(" "),s("p",[s("strong",[t._v("HTTPS是身披SSL外壳的HTTP。HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-https特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-https特点"}},[t._v("#")]),t._v(" 3.1 HTTPS特点")]),t._v(" "),s("ol",[s("li",[t._v("内容加密：采用混合加密技术，中间者无法直接查看明文内容")]),t._v(" "),s("li",[t._v("验证身份：通过证书认证客户端访问的是自己的服务器")]),t._v(" "),s("li",[t._v("保护数据完整性：防止传输的内容被中间人冒充或者篡改")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-https-和-http-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-https-和-http-的区别"}},[t._v("#")]),t._v(" 3.2 HTTPS 和 HTTP 的区别")]),t._v(" "),s("blockquote",[s("p",[t._v("HTTPs")])]),t._v(" "),s("ol",[s("li",[t._v("基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护")])]),t._v(" "),s("blockquote",[s("p",[t._v("HTTP")])]),t._v(" "),s("ol",[s("li",[t._v("无状态")]),t._v(" "),s("li",[t._v("无连接")]),t._v(" "),s("li",[t._v("通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性")])]),t._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/09/csp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSP-增加网页安全性"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 的 SameSite 属性"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/10909284.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("web安全之XSS攻击原理及防范"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);