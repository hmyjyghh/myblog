(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{589:function(a,s,t){"use strict";t.r(s);var _=t(17),e=Object(_.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"webpack-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础"}},[a._v("#")]),a._v(" webpack 基础")]),a._v(" "),t("h3",{attrs:{id:"_1-webpack-包含哪些内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-包含哪些内容"}},[a._v("#")]),a._v(" 1. webpack 包含哪些内容?")]),a._v(" "),t("p",[t("img",{attrs:{src:"/myblog/images/webpack.png",alt:"hash"}})]),a._v(" "),t("h3",{attrs:{id:"_2-webpack-五个核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-五个核心概念"}},[a._v("#")]),a._v(" 2. webpack 五个核心概念")]),a._v(" "),t("ol",[t("li",[a._v("entry")]),a._v(" "),t("li",[a._v("output")]),a._v(" "),t("li",[a._v("loader")]),a._v(" "),t("li",[a._v("plugins")]),a._v(" "),t("li",[a._v("mode")])]),a._v(" "),t("blockquote",[t("ol",[t("li",[a._v("entry")])])]),a._v(" "),t("p",[a._v("webpack 入口, 指示 webpack 以哪个入口文件为起点开始打包, 分析构建内部依赖图")]),a._v(" "),t("blockquote",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("output")])])]),a._v(" "),t("p",[a._v("webpack 输出, 指示 webpack 打包后的 bundles 输出到哪里去, 以及如何命名")]),a._v(" "),t("blockquote",[t("ol",{attrs:{start:"3"}},[t("li",[a._v("loader")])])]),a._v(" "),t("p",[a._v("模块转换器，将非 js 模块转换为 webpack 可以识别的 js 模块")]),a._v(" "),t("blockquote",[t("ol",{attrs:{start:"4"}},[t("li",[a._v("plugins")])])]),a._v(" "),t("p",[a._v("扩展插件，webpack 运行的各个阶段，都会广播出对应的事件，插件去监听对应的事件.")]),a._v(" "),t("blockquote",[t("ol",{attrs:{start:"5"}},[t("li",[a._v("mode")])])]),a._v(" "),t("p",[a._v("指示 webpack 使用相应模式的配置")]),a._v(" "),t("p",[a._v("包含 production 和 development")]),a._v(" "),t("p",[a._v("production 模式下, webpack 会自动开启代码压缩功能")]),a._v(" "),t("h3",{attrs:{id:"_3-webpack-开发环境基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-开发环境基本配置"}},[a._v("#")]),a._v(" 3. webpack 开发环境基本配置")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("处理 css scss less 等文件, 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")])]),a._v(" "),t("li",[t("p",[a._v("开启source-map, 优化代码调试")])])]),a._v(" "),t("h3",{attrs:{id:"_4-webpack-生产环境基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack-生产环境基本配置"}},[a._v("#")]),a._v(" 4. webpack 生产环境基本配置")]),a._v(" "),t("ul",[t("li",[a._v("处理 css scss less 等文件 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")]),a._v(" "),t("li",[a._v("js esLint 语法检查 js 兼容性处理")]),a._v(" "),t("li",[a._v("处理 "),t("code",[a._v("html")]),a._v(" 文件中图片 html-loader 压缩 html 文件")]),a._v(" "),t("li",[a._v("处理图片")])]),a._v(" "),t("h3",{attrs:{id:"_5-webpack打包过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack打包过程"}},[a._v("#")]),a._v(" 5. webpack打包过程")]),a._v(" "),t("ol",[t("li",[a._v("初始化参数：shell webpack.config.js")]),a._v(" "),t("li",[a._v("开始编译：初始化一个Compiler対象，加载所有的配置，开始执行编译")]),a._v(" "),t("li",[a._v("确定入口：根据entry中的配置，找出所有的入口文件")]),a._v(" "),t("li",[a._v("编译模块：从入口文件开始，调用所有的loader, 再去递归地找依赖")]),a._v(" "),t("li",[a._v("完成模块编译：得到毎个模快被编译后的最终内容以及他们之间的依赖关系.")]),a._v(" "),t("li",[a._v("输出资源： 根据得到的依赖关系，组装成一个个包含多个module的chunk")]),a._v(" "),t("li",[a._v("输出完成：根据配置，确定要输出的文件名以及文件路径.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);