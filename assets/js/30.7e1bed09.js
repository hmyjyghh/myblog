(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{566:function(_,v,t){"use strict";t.r(v);var e=t(17),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-前端安全相关知识-名词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端安全相关知识-名词"}},[_._v("#")]),_._v(" 1. 前端安全相关知识/名词")]),_._v(" "),t("ul",[t("li",[_._v("浏览器相关：")])]),_._v(" "),t("ol",[t("li",[_._v("XSS")]),_._v(" "),t("li",[_._v("CSRF")]),_._v(" "),t("li",[_._v("HTTPS")]),_._v(" "),t("li",[_._v("CSP (内容安全策略, 可以禁⽌加载外域代码, 禁⽌外域提交等等)")]),_._v(" "),t("li",[_._v("HSTS (强制客户端使⽤HTTPS与服务端建⽴连接)")]),_._v(" "),t("li",[_._v("X-Frame-Options (控制当前⻚⾯是否可以被嵌⼊到Ifrmae中)")]),_._v(" "),t("li",[_._v("SRI (subresource intergrity ⼦资源完整性, 前端可以⽤webpack-subresource-integrity插件,\n在每个script上添加hash值, 校验加载的资源是否和当时打包⽣成的⼀致)")]),_._v(" "),t("li",[_._v("Referrer-Policy (控制referer的携带策略)")])]),_._v(" "),t("ul",[t("li",[_._v("Node(服务端)相关")])]),_._v(" "),t("ol",[t("li",[_._v("本地⽂件操作相关：路径拼接导致的⽂件泄露")]),_._v(" "),t("li",[_._v("ReDOS")]),_._v(" "),t("li",[_._v("时序攻击")]),_._v(" "),t("li",[_._v("ip origin referrer等request headers的校验")])]),_._v(" "),t("h2",{attrs:{id:"_1-xss攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss攻击"}},[_._v("#")]),_._v(" 1. XSS攻击")]),_._v(" "),t("p",[_._v("Cross-site scripting, 跨站脚本攻击, 通常简称为XSS.")]),_._v(" "),t("p",[_._v("为什么简写为XSS⽽不是CSS? 因为CSS被⼴泛应⽤于样式的称呼⾥, ⽽Cross意味交叉, X字⺟正好是符合交叉的含义, 所以简称为XSS。")]),_._v(" "),t("p",[t("strong",[_._v("说⽩点：就是攻击者想尽⼀切办法将可执⾏代码注⼊到⽹⻚中, ⽽恶意代码未经过滤，与⽹站正常的代码混在⼀起；浏览器⽆法分辨哪些脚本是可信的，导致恶意脚本被⾏。")])]),_._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"_1-1-外在表现上-都有哪些攻击场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-外在表现上-都有哪些攻击场景"}},[_._v("#")]),_._v(" 1.1 外在表现上, 都有哪些攻击场景?")])])]),_._v(" "),t("ol",[t("li",[_._v("评论区植⼊js代码(即可输⼊的地⽅植⼊js代码)")]),_._v(" "),t("li",[_._v("url上拼接js代码")])]),_._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"_1-2-从技术⻆度上分析-都有哪些xss攻击的类型呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-从技术⻆度上分析-都有哪些xss攻击的类型呢"}},[_._v("#")]),_._v(" 1.2 从技术⻆度上分析, 都有哪些xss攻击的类型呢?")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("1. 存储型 Server")])])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("场景：常⻅于带有⽤户保存数据的⽹站功能，攻击者通过可输⼊区域来注⼊恶意代码, 如论坛发帖、商品评论、⽤户私信等。")])]),_._v(" "),t("li",[t("p",[_._v("攻击步骤：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者将恶意代码提交到⽬标⽹站的数据库中")]),_._v(" "),t("li",[_._v("⽤户打开⽬标⽹站时，服务端将恶意代码从数据库中取出来，拼接在HTML中返回给浏览器(因为⽤户之间是可以相互看到帖⼦、评论等的)")]),_._v(" "),t("li",[_._v("⽤户浏览器在收到响应后解析执⾏，混在其中的恶意代码也同时被执⾏")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作。")])])])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("2. 反射型 Server")])])]),_._v(" "),t("p",[_._v("与存储型的区别在于，存储型的恶意代码通过可输⼊区域, 存储在数据库中，⽽反射型的恶意代码拼接在URL上。\n由于需要⽤户主动打开恶意的 URL 才能⽣效，攻击者往往会结合多种⼿段诱导⽤户点击。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("场景：通过 URL 传递参数的功能，如⽹站搜索、跳转等。")])]),_._v(" "),t("li",[t("p",[_._v("攻击步骤：")]),_._v(" "),t("ol",[t("li",[_._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("⽤户打开带有恶意代码的 URL 时，⽹站服务端将恶意代码从 URL 中取出，拼接在"),t("code",[_._v("HTML")]),_._v("中返回给浏览器。")]),_._v(" "),t("li",[_._v("⽤户浏览器接收到响应后解析执⾏，混在其中的恶意代码也被执⾏。")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作。")])])])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("3. Dom型 Browser")])])]),_._v(" "),t("p",[_._v("DOM 型 XSS 攻击中，取出和执⾏恶意代码由浏览器端完成，属于前端 JavaScript ⾃身的安全漏洞，⽽其他两种 XSS 都属于服务端的安全漏洞。")]),_._v(" "),t("ul",[t("li",[_._v("场景：通过 URL 传递参数的功能，如⽹站搜索、跳转等。")]),_._v(" "),t("li",[_._v("攻击步骤：\n"),t("ol",[t("li",[_._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),_._v(" "),t("li",[_._v("⽤户打开带有恶意代码的 URL。")]),_._v(" "),t("li",[_._v("⽤户浏览器接收到响应后解析执⾏，前端 JavaScript 取出 URL 中的恶意代码并执⾏。")]),_._v(" "),t("li",[_._v("恶意代码窃取⽤户数据并发送到攻击者的⽹站，或者冒充⽤户的⾏为，调⽤⽬标⽹站的接⼝执⾏攻击者指定的操作。")])])])])]),_._v(" "),t("li",[t("h3",{attrs:{id:"_1-3-如何防范xss攻击呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-如何防范xss攻击呢"}},[_._v("#")]),_._v(" 1.3 如何防范XSS攻击呢?")])])]),_._v(" "),t("p",[_._v("主旨：防⽌攻击者提交恶意代码，防⽌浏览器执⾏恶意代码")]),_._v(" "),t("ol",[t("li",[_._v("对数据进⾏严格的输出编码：如HTML元素的编码，JS编码，CSS编码，URL编码等等.避免拼接 HTML; Vue/React 技术栈，避免使⽤ v-html / dangerouslySetInnerHTML")]),_._v(" "),t("li",[_._v("设置 HTTP Header CSP，即 Content-Security-Policy（不⽀持CSP的旧版浏览器可以设置X-XSS-Protection）")])]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[_._v("- 增加攻击难度，配置CSP(本质是建⽴⽩名单，由浏览器进⾏拦截)\n- Content-Security-Policy: default-src ‘self’ -所有内容均来⾃站点的同⼀个源（不包括其⼦域名）\n- Content-Security-Policy: default-src ‘self’ *.trusted.com -允许内容来⾃信任的域名及其⼦域名 (域名不必须与CSP设置所在的域名相同)\n- Content-Security-Policy: default-src https://lubai.com -该服务器仅允许通过HTTPS⽅式并仅从lubai.com域名来访问⽂档\n\n可以做到很多事情，⽐如：\n1. 禁⽌加载外域代码，防⽌复杂的攻击逻辑。\n2. 禁⽌外域提交，⽹站被攻击后，⽤户的数据不会泄露到外域。\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[_._v("输⼊验证：⽐如⼀些常⻅的数字、URL、电话号码、邮箱地址等等做校验判断")]),_._v(" "),t("li",[_._v("开启浏览器XSS防御：Http Only cookie，禁⽌ JavaScript 读取某些敏感 Cookie，攻击者完成XSS 注⼊后也⽆法窃取此 Cookie。")]),_._v(" "),t("li",[_._v("验证码")])]),_._v(" "),t("h2",{attrs:{id:"_2-csrf攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-csrf攻击"}},[_._v("#")]),_._v(" 2. CSRF攻击")]),_._v(" "),t("p",[_._v("Cross-site request forgery, 跨站请求伪造.")]),_._v(" "),t("p",[_._v("攻击者诱导受害者进⼊恶意⽹站，在第三⽅⽹站中，向被攻击⽹站发送跨站请求。利⽤受害者在被攻击⽹站已经获取的注册凭证，绕过后台的⽤户验证，达到冒充⽤户对攻击的⽹站执⾏某项操作的⽬的.")]),_._v(" "),t("blockquote",[t("p",[_._v("攻击步骤:")])]),_._v(" "),t("ol",[t("li",[_._v("受害者登录 a.com，并保留了登录凭证（Cookie）")]),_._v(" "),t("li",[_._v("攻击者引诱受害者访问了b.com")]),_._v(" "),t("li",[_._v("b.com 向 a.com 发送了⼀个请求：a.com/act=xx浏览器会默认携带a.com的Cookie")]),_._v(" "),t("li",[_._v("a.com接收到请求后，对请求进⾏验证，并确认是受害者的凭证，误以为是受害者⾃⼰发送的请求")]),_._v(" "),t("li",[_._v("a.com以受害者的名义执⾏了act=xx")]),_._v(" "),t("li",[_._v("攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执⾏了⾃⼰定义的操作")])]),_._v(" "),t("blockquote",[t("p",[_._v("攻击类型:")])]),_._v(" "),t("ul",[t("li",[_._v("GET型：如在⻚⾯的某个 img 中发起⼀个 get 请求")]),_._v(" "),t("li",[_._v("POST型：通过⾃动提交表单到恶意⽹站")])]),_._v(" "),t("h3",{attrs:{id:"如何防范csrf的攻击呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何防范csrf的攻击呢"}},[_._v("#")]),_._v(" 如何防范CSRF的攻击呢?")]),_._v(" "),t("p",[_._v("CSRF⼀般都是发⽣在第三⽅域名, 攻击者也⽆法获取到Cookie信息, 只是可以利⽤浏览器机制去使⽤Cookie.")]),_._v(" "),t("ol",[t("li",[_._v("阻⽌第三⽅域名的访问")])]),_._v(" "),t("ul",[t("li",[_._v("Cookie SameSite")]),_._v(" "),t("li",[_._v("同源检测")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("提交请求时附加额外信息")])]),_._v(" "),t("ul",[t("li",[_._v("校验Token")]),_._v(" "),t("li",[_._v("双重Cookie")])]),_._v(" "),t("h2",{attrs:{id:"_3-https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-https"}},[_._v("#")]),_._v(" 3. HTTPS")]),_._v(" "),t("p",[t("strong",[_._v("HTTPS是身披SSL外壳的HTTP。HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。")])]),_._v(" "),t("h3",{attrs:{id:"_3-1-https特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-https特点"}},[_._v("#")]),_._v(" 3.1 HTTPS特点")]),_._v(" "),t("ol",[t("li",[_._v("内容加密：采用混合加密技术，中间者无法直接查看明文内容")]),_._v(" "),t("li",[_._v("验证身份：通过证书认证客户端访问的是自己的服务器")]),_._v(" "),t("li",[_._v("保护数据完整性：防止传输的内容被中间人冒充或者篡改")])]),_._v(" "),t("h3",{attrs:{id:"_3-2-https-和-http-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-https-和-http-的区别"}},[_._v("#")]),_._v(" 3.2 HTTPS 和 HTTP 的区别")]),_._v(" "),t("blockquote",[t("p",[_._v("HTTPs")])]),_._v(" "),t("ol",[t("li",[_._v("基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护")])]),_._v(" "),t("blockquote",[t("p",[_._v("HTTP")])]),_._v(" "),t("ol",[t("li",[_._v("无状态")]),_._v(" "),t("li",[_._v("无连接")]),_._v(" "),t("li",[_._v("通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性")])]),_._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/09/csp.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("CSP-增加网页安全性"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Cookie 的 SameSite 属性"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);