(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{605:function(t,s,e){"use strict";e.r(s);var v=e(17),a=Object(v.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"服务端渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),e("h3",{attrs:{id:"csr-vs-ssr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csr-vs-ssr"}},[t._v("#")]),t._v(" CSR VS SSR")]),t._v(" "),e("p",[t._v("首先让我们看看 CSR 的过程（划重点，浏览器渲染原理基本流程）")]),t._v(" "),e("p",[e("img",{attrs:{src:"/myblog/images/ssr-csr.png",alt:"csr"}})]),t._v(" "),e("p",[t._v("过程如下：")]),t._v(" "),e("ol",[e("li",[t._v("浏览器通过请求得到一个"),e("code",[t._v("HTML")]),t._v("文本")]),t._v(" "),e("li",[t._v("渲染进程解析"),e("code",[t._v("HTML")]),t._v("文本，构建"),e("code",[t._v("DOM")]),t._v("树")]),t._v(" "),e("li",[t._v("解析"),e("code",[t._v("HTML")]),t._v("的同时，如果遇到内联样式或者样式脚本，则下载并构建样式规则（"),e("code",[t._v("stytle rules")]),t._v("），若遇到"),e("code",[t._v("JavaScrip")]),t._v("t脚本，则会下载执行脚本。")]),t._v(" "),e("li",[e("code",[t._v("DOM")]),t._v("树和样式规则构建完成之后，渲染进程将两者合并成渲染树（"),e("code",[t._v("render tree")]),t._v("）")]),t._v(" "),e("li",[t._v("渲染进程开始对渲染树进行布局，生成布局树（"),e("code",[t._v("layout tree")]),t._v("）")]),t._v(" "),e("li",[t._v("渲染进程对布局树进行绘制，生成绘制记录")]),t._v(" "),e("li",[t._v("渲染进程的对布局树进行分层，分别栅格化每一层，并得到合成帧")]),t._v(" "),e("li",[t._v("渲染进程将合成帧信息发送给"),e("code",[t._v("GPU")]),t._v("进程显示到页面中")])]),t._v(" "),e("p",[t._v("很容易发现，"),e("code",[t._v("CSR")]),t._v("  的特点就是会在浏览器端的运行时去动态的渲染、更新 "),e("code",[t._v("DOM")]),t._v(" 节点，特别是 "),e("code",[t._v("SPA")]),t._v(" 应用来说，其模版 "),e("code",[t._v("HTML")]),t._v(" 只有一个 "),e("code",[t._v("DIV")]),t._v("，然后是运行时（"),e("code",[t._v("React")]),t._v("，"),e("code",[t._v("Vue")]),t._v("，"),e("code",[t._v("Svelte")]),t._v(" 等）动态的往里插入内容，这样的话各种 "),e("code",[t._v("BaiduSpider")]),t._v(" 拿不到啥有效信息，自然 "),e("code",[t._v("SEO")]),t._v(" 就不好了，项目一旦复杂起来， "),e("code",[t._v("bundle")]),t._v(" 可能超乎寻常的大...这也是一个开销")]),t._v(" "),e("p",[t._v("那么"),e("code",[t._v("SSR")]),t._v(" 呢，则是是服务端完成了渲染过程，将渲染完成的 "),e("code",[t._v("HTML")]),t._v(" 字符串或者流返回给浏览器，就少了脚本解析、运行这一环节，理论上 "),e("code",[t._v("FP")]),t._v(" 表现的更佳，"),e("code",[t._v("SEO")]),t._v(" 同样")]),t._v(" "),e("p",[e("img",{attrs:{src:"/myblog/images/ssr-csr1.png",alt:"csr vs ssr"}})]),t._v(" "),e("p",[t._v("但其实，现在 "),e("code",[t._v("SSR")]),t._v(" 也并没有大行其道，凡事有利有弊，"),e("code",[t._v("SSR")]),t._v(" 也是有缺点的")]),t._v(" "),e("ol",[e("li",[t._v("复杂，同构项目的代码复杂度直线上升，因为要兼容两种环境")]),t._v(" "),e("li",[t._v("对服务端的开销大，既然 "),e("code",[t._v("HTML")]),t._v(" 都是拼接好的，那么传输的数据肯定就大多了，同时，拿 "),e("code",[t._v("Node")]),t._v(" 举例，在处理 "),e("code",[t._v("Computed")]),t._v(" 密集型逻辑的时候是阻塞的，不得不上负载均衡、缓存策略等来提升")]),t._v(" "),e("li",[t._v("CI/CD 更麻烦了，需要在一个 "),e("code",[t._v("Server")]),t._v(" 环境，比如 "),e("code",[t._v("Node")])])]),t._v(" "),e("blockquote",[e("p",[t._v("一般来说，ToB 的业务场景基本不需要 SSR，需要 SSR 的一定是对首屏或者 SEO 有强诉求的，不然没必要搞那么麻烦，简洁是避免麻烦的最佳实践，同时，随着浏览器发展，越来越快，爬虫也越来越智能，SSR 的场景在被压缩")])]),t._v(" "),e("p",[e("code",[t._v("CSR")]),t._v(" 和 "),e("code",[t._v("SSR")]),t._v(" ，其实我们现今常见的渲染方案有6-7种吧！")]),t._v(" "),e("p",[e("img",{attrs:{src:"/myblog/images/ssr-server.png",alt:"render"}})]),t._v(" "),e("p",[t._v("注意，这里提到了 "),e("code",[t._v("hydration")]),t._v(" 这个词，这是一个很棒的思路，对 "),e("code",[t._v("FP")]),t._v(" 有帮助，但是不能提升 "),e("code",[t._v("TTI")])]),t._v(" "),e("blockquote",[e("p",[t._v("补充资料，务必精读")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("VUE SSR 指南（动手操练一下最佳）"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"同构应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同构应用"}},[t._v("#")]),t._v(" 同构应用")]),t._v(" "),e("p",[t._v("我们以上面的指南为基础讲讲同构应用（因为同构应用算是比较复杂的了），通过同构应用让大家对 "),e("code",[t._v("SSR")]),t._v(" 有一个更直观、立体的认识")]),t._v(" "),e("p",[t._v("首先需要了解什么是同构应用")]),t._v(" "),e("blockquote",[e("p",[t._v("一份代码，既可以客户端渲染，也可以服务端渲染")])]),t._v(" "),e("p",[t._v("看看客户端渲染，对我们而言，基本可以这样概括：页面 = 模版 + 数据，应用 = 路由 + 页面")]),t._v(" "),e("p",[t._v("所以，同构，我们需要注意的是构了个啥？，就是 "),e("strong",[t._v("路由")]),t._v("、"),e("strong",[t._v("模版")]),t._v("、"),e("strong",[t._v("数据")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/myblog/images/ssr-source.png",alt:"同构"}})]),t._v(" "),e("p",[t._v("假定大家已经认真阅读并实际操练了 "),e("code",[t._v("VUE SSR")]),t._v(" 指南，")]),t._v(" "),e("p",[t._v("现在就一些实践经验做一些补充：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("服务端的 "),e("code",[t._v("webpack")]),t._v(" 不用关注 "),e("code",[t._v("CSS")]),t._v("，客户端会打包出来的，到时候推 "),e("code",[t._v("CDN")]),t._v("，然后改一下 "),e("code",[t._v("public path")]),t._v(" 就好了")])]),t._v(" "),e("li",[e("p",[t._v("服务端的代码不需要分 "),e("code",[t._v("chunk")]),t._v("，"),e("code",[t._v("Node")]),t._v(" 基于内存一次性读取反而更高效")])]),t._v(" "),e("li",[e("p",[t._v("如果有一些方法需要在特定的环境执行，比如客户端环境中上报日志，可以利用 "),e("code",[t._v("beforeMouted")]),t._v(" 之后的生命周期都不会在服务端执行这一特点，当然也可以使用 "),e("code",[t._v("isBrowser")]),t._v(" 这种判断")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("CSR")]),t._v(" 和 "),e("code",[t._v("SSR")]),t._v(" 的切换和降级")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总有一些奇奇怪怪的场景，比如就只需要 CSR，不需要 SSR")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者在 SSR 渲染的时候出错了，页面最好不要崩溃啊，可以降级成 CSR 渲染，保证页面能够出来")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 互相切换的话，总得有个标识是吧，告诉我用 CSR 还是 SSR")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// search 就不错，/demo?ssr=true")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderToString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// views 文件下的 demo.html")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[e("code",[t._v("Axios")]),t._v(" 封装，至少区分环境，在客户端环境是需要做代理的")])]),t._v(" "),e("p",[e("code",[t._v("VUE-SSR")]),t._v(" 优化方案：")]),t._v(" "),e("ol",[e("li",[t._v("页面级别的缓存，比如 "),e("code",[t._v("nginx")]),t._v(" "),e("code",[t._v("micro-caching")])]),t._v(" "),e("li",[t._v("设置 "),e("code",[t._v("serverCacheKey")]),t._v("，如果相同，将使用缓存，组件级别的缓存")]),t._v(" "),e("li",[e("code",[t._v("CGI")]),t._v(" 缓存，通过 "),e("code",[t._v("memcache")]),t._v("  等，将相同的数据返回缓存一下，注意设置缓存更新机制")]),t._v(" "),e("li",[t._v("流式传输，但是必须在"),e("code",[t._v("asyncData")]),t._v(" 之后，否则没有数据，说明也可能会被 "),e("code",[t._v("CGI")]),t._v(" 耗时阻塞")]),t._v(" "),e("li",[t._v("分块传输，这样前置的 "),e("code",[t._v("CGI")]),t._v(" 完成就会渲染输出，但是这个方案难啊")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903476120518670",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSC"),e("OutboundLink")],1),t._v("，就是不用 "),e("code",[t._v("vue-loader")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);