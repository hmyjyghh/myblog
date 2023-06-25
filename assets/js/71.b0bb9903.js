(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{469:function(s,a,t){"use strict";t.r(a);var _=t(1),e=Object(_.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"webpack-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础"}},[s._v("#")]),s._v(" webpack 基础")]),s._v(" "),a("h3",{attrs:{id:"_1-webpack-包含哪些内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-包含哪些内容"}},[s._v("#")]),s._v(" 1. webpack 包含哪些内容?")]),s._v(" "),a("p",[a("img",{attrs:{src:"/myblog/images/webpack.png",alt:"hash"}})]),s._v(" "),a("h3",{attrs:{id:"_2-webpack-五个核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-五个核心概念"}},[s._v("#")]),s._v(" 2. webpack 五个核心概念")]),s._v(" "),a("ol",[a("li",[s._v("entry")]),s._v(" "),a("li",[s._v("output")]),s._v(" "),a("li",[s._v("loader")]),s._v(" "),a("li",[s._v("plugins")]),s._v(" "),a("li",[s._v("mode")])]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("entry")])])]),s._v(" "),a("p",[s._v("webpack 入口, 指示 webpack 以哪个入口文件为起点开始打包, 分析构建内部依赖图")]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("output")])])]),s._v(" "),a("p",[s._v("webpack 输出, 指示 webpack 打包后的 bundles 输出到哪里去, 以及如何命名")]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"3"}},[a("li",[s._v("loader")])])]),s._v(" "),a("p",[s._v("模块转换器，将非 js 模块转换为 webpack 可以识别的 js 模块")]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"4"}},[a("li",[s._v("plugins")])])]),s._v(" "),a("p",[s._v("扩展插件，webpack 运行的各个阶段，都会广播出对应的事件，插件去监听对应的事件.")]),s._v(" "),a("blockquote",[a("ol",{attrs:{start:"5"}},[a("li",[s._v("mode")])])]),s._v(" "),a("p",[s._v("指示 webpack 使用相应模式的配置")]),s._v(" "),a("p",[s._v("包含 production 和 development")]),s._v(" "),a("p",[s._v("production 模式下, webpack 会自动开启代码压缩功能")]),s._v(" "),a("h3",{attrs:{id:"_3-webpack-开发环境基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-开发环境基本配置"}},[s._v("#")]),s._v(" 3. webpack 开发环境基本配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("处理 css scss less 等文件, 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")])]),s._v(" "),a("li",[a("p",[s._v("开启source-map, 优化代码调试")])])]),s._v(" "),a("h3",{attrs:{id:"_4-webpack-生产环境基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack-生产环境基本配置"}},[s._v("#")]),s._v(" 4. webpack 生产环境基本配置")]),s._v(" "),a("ul",[a("li",[s._v("处理 css scss less 等文件 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")]),s._v(" "),a("li",[s._v("js esLint 语法检查 js 兼容性处理")]),s._v(" "),a("li",[s._v("处理 "),a("code",[s._v("html")]),s._v(" 文件中图片 html-loader 压缩 html 文件")]),s._v(" "),a("li",[s._v("处理图片")])]),s._v(" "),a("h3",{attrs:{id:"_5-webpack打包过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack打包过程"}},[s._v("#")]),s._v(" 5. webpack打包过程")]),s._v(" "),a("ol",[a("li",[s._v("初始化参数：shell webpack.config.js")]),s._v(" "),a("li",[s._v("开始编译：初始化一个Compiler対象，加载所有的配置，开始执行编译")]),s._v(" "),a("li",[s._v("确定入口：根据entry中的配置，找出所有的入口文件")]),s._v(" "),a("li",[s._v("编译模块：从入口文件开始，调用所有的loader, 再去递归地找依赖")]),s._v(" "),a("li",[s._v("完成模块编译：得到毎个模快被编译后的最终内容以及他们之间的依赖关系.")]),s._v(" "),a("li",[s._v("输出资源： 根据得到的依赖关系，组装成一个个包含多个module的chunk")]),s._v(" "),a("li",[s._v("输出完成：根据配置，确定要输出的文件名以及文件路径.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);