(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{634:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"项目通用封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目通用封装"}},[t._v("#")]),t._v(" 项目通用封装")]),t._v(" "),a("h3",{attrs:{id:"_1-前端封装请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端封装请求"}},[t._v("#")]),t._v(" 1. 前端封装请求")]),t._v(" "),a("p",[a("strong",[t._v("1. 封装通用请求方法的好处？")])]),t._v(" "),a("ul",[a("li",[t._v("主要是为了一些通用的、前端需要增加的一些通信的请求")]),t._v(" "),a("li",[t._v("也是为了简化业务里面去写多个请求的一种方式")])]),t._v(" "),a("p",[a("strong",[t._v("2. 怎么做的？")])]),t._v(" "),a("ol",[a("li",[t._v("新建一个全局的基准地址文件")])]),t._v(" "),a("p",[t._v("需要一个对象，进行包裹，最后导出这个对象，暴露给外部使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"webroot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://xxx.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"resourceUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bbb.com/resource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片资源域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uploadUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://ccc.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cfg\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("新建一个专门用来封装请求的文件")])]),t._v(" "),a("ul",[a("li",[t._v("定义一个对象，用来包裹请求方法，方便后续导出使用")]),t._v(" "),a("li",[t._v("包含url, 特殊的method, 特殊的header，data 等参数")]),t._v(" "),a("li",[t._v("成功的回调函数")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("使用")])]),t._v(" "),a("ul",[a("li",[t._v("import 引入请求")]),t._v(" "),a("li",[t._v("调用时，传入需要的参数，写一个函数用于接收请求后返回的结果")]),t._v(" "),a("li",[t._v("失败的话，怎么捕获错误")])]),t._v(" "),a("h4",{attrs:{id:"_1-1-实例场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-实例场景"}},[t._v("#")]),t._v(" 1.1 实例场景")]),t._v(" "),a("ul",[a("li",[t._v("创建一个axios实例，并在实例中设置请求超时时间timeout、重试请求次数retry、请求间隔retryDelay。")]),t._v(" "),a("li",[t._v("为实例设置相应拦截器，在请求返回错误的时候对错误做处理。")]),t._v(" "),a("li",[t._v("如果请求次数已经达到设置好的请求次数，不再发送请求，返回最终的错误信息；")]),t._v(" "),a("li",[t._v("如果请求次数还没有达到设置好的请求次数，就在停留retryDelay（请求间隔）时间后")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建带有重试机制的axios实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAxiosInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认超时时间10秒")]),t._v("\n    retry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认重试3次")]),t._v("\n    retryDelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认重试间隔1秒")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("axiosConfig\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建实例")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("axiosConfig\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求拦截器")]),t._v("\n  instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化重试计数器")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应拦截器")]),t._v("\n  instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查是否需要重试")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查是否达到最大重试次数")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加重试计数器")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__retryCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建新的Promise来处理重试间隔")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" delay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retryDelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" retryDelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回Promise，在延迟后重试请求")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置默认重试参数")]),t._v("\n  instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" retry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retryDelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" retryDelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apiClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAxiosInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5秒超时")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("retry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最多重试2次")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("retryDelay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次重试间隔2秒")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发起请求")]),t._v("\napiClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求成功:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'最终请求失败:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-前端开发痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端开发痛点"}},[t._v("#")]),t._v(" 2. 前端开发痛点")]),t._v(" "),a("ol",[a("li",[t._v("浏览器兼容性问题")])]),t._v(" "),a("p",[a("strong",[t._v("痛点：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不同浏览器对CSS、JavaScript的实现差异")])]),t._v(" "),a("li",[a("p",[t._v("老旧浏览器不支持现代API（如IE对ES6+的支持问题）")])]),t._v(" "),a("li",[a("p",[t._v("移动端浏览器碎片化严重")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用Babel进行代码转译")])]),t._v(" "),a("li",[a("p",[t._v("采用PostCSS和Autoprefixer处理CSS兼容")])]),t._v(" "),a("li",[a("p",[t._v("引入polyfill填补API缺失")])]),t._v(" "),a("li",[a("p",[t._v("使用Can I Use等工具检查兼容性")])]),t._v(" "),a("li",[a("p",[t._v("建立浏览器支持矩阵，明确兼容范围")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("状态管理复杂度")])]),t._v(" "),a("p",[a("strong",[t._v("痛点：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("大型应用中状态管理混乱")])]),t._v(" "),a("li",[a("p",[t._v("组件间状态共享困难")])]),t._v(" "),a("li",[a("p",[t._v("状态变更难以追踪和调试")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("采用Redux、MobX等状态管理库")])]),t._v(" "),a("li",[a("p",[t._v("使用React Context API处理简单状态共享")])]),t._v(" "),a("li",[a("p",[t._v("实施严格的状态变更规范")])]),t._v(" "),a("li",[a("p",[t._v("使用Redux DevTools等调试工具")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("性能优化")])]),t._v(" "),a("p",[a("strong",[t._v("痛点")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首屏加载时间过长")])]),t._v(" "),a("li",[a("p",[t._v("大型单页应用资源体积过大")])]),t._v(" "),a("li",[a("p",[t._v("频繁DOM操作导致页面卡顿")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码分割和懒加载")])]),t._v(" "),a("li",[a("p",[t._v("图片和资源优化（WebP、CDN）")])]),t._v(" "),a("li",[a("p",[t._v("虚拟列表优化长列表渲染")])]),t._v(" "),a("li",[a("p",[t._v("Web Workers处理复杂计算")])]),t._v(" "),a("li",[a("p",[t._v("使用性能分析工具（Lighthouse）")])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("前端安全风险")])]),t._v(" "),a("p",[a("strong",[t._v("痛点：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("XSS（跨站脚本攻击）")])]),t._v(" "),a("li",[a("p",[t._v("CSRF（跨站请求伪造）")])]),t._v(" "),a("li",[a("p",[t._v("敏感数据泄露风险")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("输入输出编码/转义")])]),t._v(" "),a("li",[a("p",[t._v("实施CSP（内容安全策略）")])]),t._v(" "),a("li",[a("p",[t._v("使用HttpOnly和Secure Cookie")])]),t._v(" "),a("li",[a("p",[t._v("敏感操作二次验证")])]),t._v(" "),a("li",[a("p",[t._v("定期安全审计")])])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("前后端协作问题\n"),a("strong",[t._v("痛点：")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("API接口变更频繁")])]),t._v(" "),a("li",[a("p",[t._v("接口文档维护不及时")])]),t._v(" "),a("li",[a("p",[t._v("数据格式不一致")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用Swagger/OpenAPI规范接口文档")])]),t._v(" "),a("li",[a("p",[t._v("建立Mock Server进行并行开发")])]),t._v(" "),a("li",[a("p",[t._v("实施TypeScript类型共享")])]),t._v(" "),a("li",[a("p",[t._v("定期进行接口评审")])])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("开发体验问题\n"),a("strong",[t._v("痛点：")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("项目配置复杂（Webpack等）")])]),t._v(" "),a("li",[a("p",[t._v("构建时间过长")])]),t._v(" "),a("li",[a("p",[t._v("开发环境与生产环境不一致")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用Vite等现代构建工具")])]),t._v(" "),a("li",[a("p",[t._v("优化构建配置（缓存、并行处理）")])]),t._v(" "),a("li",[a("p",[t._v("容器化开发环境")])]),t._v(" "),a("li",[a("p",[t._v("完善的HMR（热模块替换）")])])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("代码分割好处")])]),t._v(" "),a("ol",[a("li",[t._v("减少初始加载资源体积\n"),a("strong",[t._v("核心优势：")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("只加载渲染当前页面所需的代码（主包+当前路由的chunk）")])]),t._v(" "),a("li",[a("p",[t._v("避免一次性加载整个应用的"),a("code",[t._v("JavaScript")]),t._v("和"),a("code",[t._v("CSS")])])]),t._v(" "),a("li",[a("p",[t._v("典型场景：将路由组件、大型第三方库、非关键功能拆分为独立chunk")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("优化资源加载顺序")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue中的路由懒加载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Home")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./views/Home.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("About")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./views/About.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("优势：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优先加载关键资源（当前视图必需代码）")])]),t._v(" "),a("li",[a("p",[t._v("延迟加载非关键资源（如模态框、工具提示等交互组件）")])]),t._v(" "),a("li",[a("p",[t._v("浏览器可以更早开始解析和执行关键代码")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("并行加载能力提升")])]),t._v(" "),a("p",[a("strong",[t._v("工作机制：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("主包加载同时，浏览器可以并行请求其他chunk")])]),t._v(" "),a("li",[a("p",[t._v("利用HTTP/2的多路复用优势更高效")])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("缓存策略优化\n"),a("strong",[t._v("长期效益：")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("修改业务代码不会使vendor包（第三方库）缓存失效")])]),t._v(" "),a("li",[a("p",[t._v("用户再次访问时只需下载变更的chunk")])]),t._v(" "),a("li",[a("p",[t._v("静态资源可以设置更长缓存周期")])])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("按需加载非首屏内容\n"),a("strong",[t._v("典型应用场景：")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片懒加载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'/path/to/image.jpg'\"")]),t._v(" alt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件懒加载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineAsyncComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/Chart.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("优势：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("延迟加载首屏外的图片/组件")])]),t._v(" "),a("li",[a("p",[t._v("优先完成可视区域(viewport)内容渲染")])]),t._v(" "),a("li",[a("p",[t._v("节省带宽和计算资源")])])]),t._v(" "),a("p",[a("strong",[t._v("实现建议")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("路由级分割：Vue Router/React Router天然支持")])]),t._v(" "),a("li",[a("p",[t._v("组件级分割：对大型组件使用"),a("code",[t._v("defineAsyncComponent")]),t._v("（Vue）或"),a("code",[t._v("React.lazy")])])]),t._v(" "),a("li",[a("p",[t._v("第三方库分割：将不常变的依赖单独打包")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("复制\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("optimization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("splitChunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("预加载策略：对即将访问的资源使用"),a("code",[t._v('<link rel="preload">')])])]),t._v(" "),a("p",[a("strong",[t._v("注意事项")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("过度分割会导致请求过多（平衡chunk数量和大小）")])]),t._v(" "),a("li",[a("p",[t._v("需要配合Loading状态提升用户体验")])]),t._v(" "),a("li",[a("p",[t._v("服务端渲染(SSR)需要特殊处理懒加载组件")])]),t._v(" "),a("li",[a("p",[t._v("移动端弱网环境收益更明显")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);