(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{640:function(_,v,t){"use strict";t.r(v);var s=t(17),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"webpack-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础"}},[_._v("#")]),_._v(" webpack 基础")]),_._v(" "),t("h3",{attrs:{id:"_1-webpack-包含哪些内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-包含哪些内容"}},[_._v("#")]),_._v(" 1. webpack 包含哪些内容?")]),_._v(" "),t("p",[t("img",{attrs:{src:"/myblog/images/webpack.png",alt:"hash"}})]),_._v(" "),t("h3",{attrs:{id:"_2-webpack-五个核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-五个核心概念"}},[_._v("#")]),_._v(" 2. webpack 五个核心概念")]),_._v(" "),t("ol",[t("li",[_._v("entry")]),_._v(" "),t("li",[_._v("output")]),_._v(" "),t("li",[_._v("loader")]),_._v(" "),t("li",[_._v("plugins")]),_._v(" "),t("li",[_._v("mode")])]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("entry")])])]),_._v(" "),t("p",[_._v("webpack 入口, 指示 webpack 以哪个入口文件为起点开始打包, 分析构建内部依赖图")]),_._v(" "),t("blockquote",[t("ol",{attrs:{start:"2"}},[t("li",[_._v("output")])])]),_._v(" "),t("p",[_._v("webpack 输出, 指示 webpack 打包后的 bundles 输出到哪里去, 以及如何命名")]),_._v(" "),t("blockquote",[t("ol",{attrs:{start:"3"}},[t("li",[_._v("loader")])])]),_._v(" "),t("p",[_._v("模块转换器，将非 js 模块转换为 webpack 可以识别的 js 模块")]),_._v(" "),t("blockquote",[t("ol",{attrs:{start:"4"}},[t("li",[_._v("plugins")])])]),_._v(" "),t("p",[_._v("扩展插件，webpack 运行的各个阶段，都会广播出对应的事件，插件去监听对应的事件.")]),_._v(" "),t("blockquote",[t("ol",{attrs:{start:"5"}},[t("li",[_._v("mode")])])]),_._v(" "),t("p",[_._v("指示 webpack 使用相应模式的配置")]),_._v(" "),t("p",[_._v("包含 production 和 development")]),_._v(" "),t("p",[_._v("production 模式下, webpack 会自动开启代码压缩功能")]),_._v(" "),t("h3",{attrs:{id:"_3-webpack-开发环境基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-开发环境基本配置"}},[_._v("#")]),_._v(" 3. webpack 开发环境基本配置")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("处理 css scss less 等文件, 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")])]),_._v(" "),t("li",[t("p",[_._v("开启source-map, 优化代码调试")])])]),_._v(" "),t("h3",{attrs:{id:"_4-webpack-生产环境基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-webpack-生产环境基本配置"}},[_._v("#")]),_._v(" 4. webpack 生产环境基本配置")]),_._v(" "),t("ul",[t("li",[_._v("处理 css scss less 等文件 并将 css 抽取成单独文件 css 兼容性处理 给 css 添加前缀 压缩 css")]),_._v(" "),t("li",[_._v("js esLint 语法检查 js 兼容性处理")]),_._v(" "),t("li",[_._v("处理 "),t("code",[_._v("html")]),_._v(" 文件中图片 html-loader 压缩 html 文件")]),_._v(" "),t("li",[_._v("处理图片")])]),_._v(" "),t("h3",{attrs:{id:"_5-webpack打包过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack打包过程"}},[_._v("#")]),_._v(" 5. webpack打包过程")]),_._v(" "),t("ol",[t("li",[_._v("初始化参数：shell webpack.config.js")]),_._v(" "),t("li",[_._v("开始编译：初始化一个Compiler対象，加载所有的配置，开始执行编译")]),_._v(" "),t("li",[_._v("确定入口：根据entry中的配置，找出所有的入口文件")]),_._v(" "),t("li",[_._v("编译模块：从入口文件开始，调用所有的loader, 再去递归地找依赖")]),_._v(" "),t("li",[_._v("完成模块编译：得到毎个模快被编译后的最终内容以及他们之间的依赖关系.")]),_._v(" "),t("li",[_._v("输出资源： 根据得到的依赖关系，组装成一个个包含多个module的chunk")]),_._v(" "),t("li",[_._v("输出完成：根据配置，确定要输出的文件名以及文件路径.")])]),_._v(" "),t("h3",{attrs:{id:"_6-webpack-中-loader-和-plugin-的运行时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack-中-loader-和-plugin-的运行时机"}},[_._v("#")]),_._v(" 6. webpack 中 "),t("code",[_._v("loader")]),_._v(" 和 "),t("code",[_._v("plugin")]),_._v(" 的运行时机 ？")]),_._v(" "),t("ul",[t("li",[_._v("在 Webpack 中，"),t("strong",[_._v("Loader")]),_._v(" 和 "),t("strong",[_._v("Plugin")]),_._v(" 的运行时机完全不同，它们分别作用于构建流程的不同阶段。")]),_._v(" "),t("li",[_._v("理解它们的执行顺序和触发时机，可以帮助你更好地优化构建性能或解决一些棘手的构建问题。以下是详细的解析：")])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_1-loader-的运行时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-loader-的运行时机"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1. Loader 的运行时机")])]),_._v(" "),t("p",[t("strong",[_._v("Loader 的核心作用")]),_._v("：对模块的"),t("strong",[_._v("源代码进行转换")]),_._v("（如编译、压缩、转译等）。"),t("br"),_._v(" "),t("strong",[_._v("运行阶段")]),_._v("：在 Webpack 的 "),t("strong",[_._v("模块解析（Module Resolution）和模块构建（Module Building）阶段")]),_._v(" 执行，"),t("strong",[_._v("早于打包结果生成")]),_._v("。")]),_._v(" "),t("h4",{attrs:{id:"具体时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体时机"}},[_._v("#")]),_._v(" "),t("strong",[_._v("具体时机")]),_._v("：")]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("模块解析阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("当 Webpack 遇到 "),t("code",[_._v("import")]),_._v("/"),t("code",[_._v("require")]),_._v(" 语句时，会根据文件后缀名匹配对应的 Loader（通过 "),t("code",[_._v("module.rules")]),_._v(" 配置）。")]),_._v(" "),t("li",[_._v("例如："),t("code",[_._v(".js")]),_._v(" 文件会经过 "),t("code",[_._v("babel-loader")]),_._v("，"),t("code",[_._v(".scss")]),_._v(" 文件会经过 "),t("code",[_._v("sass-loader")]),_._v(" → "),t("code",[_._v("css-loader")]),_._v(" → "),t("code",[_._v("style-loader")]),_._v("。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("模块转换阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("Loader "),t("strong",[_._v("按从右到左（或从下到上）的顺序链式调用")]),_._v("（"),t("code",[_._v("pitch")]),_._v(" 阶段则相反）。")]),_._v(" "),t("li",[_._v("每个 Loader 接收上一个 Loader 的处理结果，最终输出 JavaScript 模块（或可被 Webpack 处理的格式）。")])])])]),_._v(" "),t("h4",{attrs:{id:"示例流程-以-scss-文件为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例流程-以-scss-文件为例"}},[_._v("#")]),_._v(" "),t("strong",[_._v("示例流程")]),_._v("（以 SCSS 文件为例）：")]),_._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("// webpack.config.js")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[_._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[_._v("\\.scss$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[_._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'style-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'sass-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("// 执行顺序：sass-loader → css-loader → style-loader")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("\n")])])]),t("ol",[t("li",[t("code",[_._v("sass-loader")]),_._v("：将 SCSS 编译为 CSS。")]),_._v(" "),t("li",[t("code",[_._v("css-loader")]),_._v("：解析 CSS 中的 "),t("code",[_._v("@import")]),_._v(" 和 "),t("code",[_._v("url()")]),_._v("。")]),_._v(" "),t("li",[t("code",[_._v("style-loader")]),_._v("：将 CSS 注入到 DOM 中。")])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_2-plugin-的运行时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-plugin-的运行时机"}},[_._v("#")]),_._v(" "),t("strong",[_._v("2. Plugin 的运行时机")])]),_._v(" "),t("p",[t("strong",[_._v("Plugin 的核心作用")]),_._v("：扩展 Webpack 的功能，"),t("strong",[_._v("介入整个构建流程的各个生命周期")]),_._v("（从启动到输出）。"),t("br"),_._v(" "),t("strong",[_._v("运行阶段")]),_._v("：在 Webpack 的 "),t("strong",[_._v("编译（Compilation）、优化（Optimization）、输出（Emit）等阶段")]),_._v(" 通过钩子（Hooks）介入。")]),_._v(" "),t("h4",{attrs:{id:"具体时机-关键生命周期钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体时机-关键生命周期钩子"}},[_._v("#")]),_._v(" "),t("strong",[_._v("具体时机")]),_._v("（关键生命周期钩子）：")]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("初始化阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("environment")]),_._v("：Webpack 环境准备完毕。")]),_._v(" "),t("li",[t("code",[_._v("initialize")]),_._v("：初始化插件时触发。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("编译阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("compile")]),_._v("：开始编译前触发。")]),_._v(" "),t("li",[t("code",[_._v("compilation")]),_._v("：创建编译对象后触发（可访问模块依赖图）。")]),_._v(" "),t("li",[t("code",[_._v("make")]),_._v("：分析模块依赖时触发（Loader 在此阶段执行）。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("优化阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("optimize")]),_._v("：优化依赖树时触发（如代码分割、Tree Shaking）。")]),_._v(" "),t("li",[t("code",[_._v("optimize-modules")]),_._v("/"),t("code",[_._v("optimize-chunks")]),_._v("：优化模块或代码块时触发。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("输出阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("emit")]),_._v("：生成资源到输出目录前触发（可修改输出内容）。")]),_._v(" "),t("li",[t("code",[_._v("after-emit")]),_._v("：资源输出到目录后触发。")]),_._v(" "),t("li",[t("code",[_._v("done")]),_._v("：构建完成时触发。")])])])]),_._v(" "),t("h4",{attrs:{id:"示例流程-以-htmlwebpackplugin-为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例流程-以-htmlwebpackplugin-为例"}},[_._v("#")]),_._v(" "),t("strong",[_._v("示例流程")]),_._v("（以 "),t("code",[_._v("HtmlWebpackPlugin")]),_._v(" 为例）：")]),_._v(" "),t("ol",[t("li",[_._v("在 "),t("code",[_._v("compilation")]),_._v(" 阶段收集所有入口和资源信息。")]),_._v(" "),t("li",[_._v("在 "),t("code",[_._v("emit")]),_._v(" 阶段生成 HTML 文件并注入打包后的 JS/CSS 路径。")]),_._v(" "),t("li",[_._v("在 "),t("code",[_._v("after-emit")]),_._v(" 阶段将 HTML 写入磁盘。")])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_3-loader-和-plugin-的协作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-loader-和-plugin-的协作流程"}},[_._v("#")]),_._v(" "),t("strong",[_._v("3. Loader 和 Plugin 的协作流程")])]),_._v(" "),t("p",[_._v("通过一个构建流程的完整示例说明二者的协作时机：")]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("启动 Webpack")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("Plugin 的 "),t("code",[_._v("apply")]),_._v(" 方法被调用（如 "),t("code",[_._v("new MyPlugin()")]),_._v("）。")]),_._v(" "),t("li",[_._v("触发 "),t("code",[_._v("environment")]),_._v(" 和 "),t("code",[_._v("initialize")]),_._v(" 钩子。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("解析入口文件")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("遇到 "),t("code",[_._v("index.js")]),_._v("，根据配置的 Loader 规则处理 "),t("code",[_._v(".js")]),_._v(" 文件（如 "),t("code",[_._v("babel-loader")]),_._v("）。")]),_._v(" "),t("li",[_._v("Loader 对源码进行转译。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("递归处理依赖")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("遇到 "),t("code",[_._v("import './style.scss'")]),_._v("，调用 "),t("code",[_._v("sass-loader")]),_._v(" → "),t("code",[_._v("css-loader")]),_._v(" → "),t("code",[_._v("style-loader")]),_._v("。")]),_._v(" "),t("li",[_._v("Plugin 可能通过 "),t("code",[_._v("module-build")]),_._v(" 钩子监听模块构建过程。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("优化阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("Plugin（如 "),t("code",[_._v("TerserWebpackPlugin")]),_._v("）在 "),t("code",[_._v("optimize-chunk-assets")]),_._v(" 钩子中压缩代码。")]),_._v(" "),t("li",[t("code",[_._v("SplitChunksPlugin")]),_._v(" 分割代码块。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("输出阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("Plugin（如 "),t("code",[_._v("HtmlWebpackPlugin")]),_._v("）在 "),t("code",[_._v("emit")]),_._v(" 钩子中生成 HTML。")]),_._v(" "),t("li",[t("code",[_._v("CleanWebpackPlugin")]),_._v(" 在 "),t("code",[_._v("before-emit")]),_._v(" 钩子中清理旧文件。")])])])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_4-关键区别总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-关键区别总结"}},[_._v("#")]),_._v(" "),t("strong",[_._v("4. 关键区别总结")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[_._v("特性")])]),_._v(" "),t("th",[t("strong",[_._v("Loader")])]),_._v(" "),t("th",[t("strong",[_._v("Plugin")])])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[_._v("作用对象")])]),_._v(" "),t("td",[_._v("单个模块（文件）")]),_._v(" "),t("td",[_._v("整个构建流程")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("运行时机")])]),_._v(" "),t("td",[_._v("模块解析和构建阶段")]),_._v(" "),t("td",[_._v("贯穿整个生命周期（通过钩子）")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("功能")])]),_._v(" "),t("td",[_._v("转译源码（如 JSX → JS）")]),_._v(" "),t("td",[_._v("扩展功能（如打包优化、资源管理）")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("配置方式")])]),_._v(" "),t("td",[t("code",[_._v("module.rules")]),_._v(" 数组")]),_._v(" "),t("td",[t("code",[_._v("plugins")]),_._v(" 数组（需 "),t("code",[_._v("new")]),_._v(" 实例化）")])])])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"_5-高级技巧-面试加分项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-高级技巧-面试加分项"}},[_._v("#")]),_._v(" "),t("strong",[_._v("5. 高级技巧（面试加分项）")])]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("Loader 的 "),t("code",[_._v("pitch")]),_._v(" 阶段")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("Loader 可以通过 "),t("code",[_._v("pitch")]),_._v(" 方法"),t("strong",[_._v("阻断后续 Loader 执行")]),_._v("（如 "),t("code",[_._v("style-loader!css-loader!sass-loader")]),_._v(" 中，若 "),t("code",[_._v("style-loader.pitch")]),_._v(" 返回结果，则跳过后续 Loader）。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("自定义 Plugin 钩子")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("通过 "),t("code",[_._v("tapable")]),_._v(" 库创建自定义钩子，允许其他插件介入你的插件逻辑。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("性能优化")]),_._v("：")]),_._v(" "),t("ul",[t("li",[_._v("在 "),t("code",[_._v("compilation")]),_._v(" 阶段缓存 Loader 处理结果（如 "),t("code",[_._v("cache-loader")]),_._v("）。")]),_._v(" "),t("li",[_._v("在 "),t("code",[_._v("optimize-chunk-assets")]),_._v(" 钩子中并行处理代码压缩。")])])])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"回答示例-面试场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回答示例-面试场景"}},[_._v("#")]),_._v(" "),t("strong",[_._v("回答示例（面试场景）")])]),_._v(" "),t("blockquote",[t("p",[_._v("Loader 在 Webpack 的模块构建阶段运行，负责对单个文件进行转译（如 Babel 转译 JS），执行顺序是从右到左链式调用。而 Plugin 通过钩子介入整个构建生命周期，比如 "),t("code",[_._v("HtmlWebpackPlugin")]),_._v(" 会在 "),t("code",[_._v("emit")]),_._v(" 阶段生成 HTML。")])]),_._v(" "),t("blockquote",[t("p",[_._v("举个例子：一个 SCSS 文件会先被 "),t("code",[_._v("sass-loader")]),_._v(" 编译成 CSS，再经过 "),t("code",[_._v("css-loader")]),_._v(" 解析依赖，最后通过 "),t("code",[_._v("style-loader")]),_._v(" 注入到 DOM。而 "),t("code",[_._v("MiniCssExtractPlugin")]),_._v(" 则会在优化阶段将 CSS 提取为独立文件。”")])]),_._v(" "),t("h3",{attrs:{id:"_7-webpack-splitchunks-有哪3种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-webpack-splitchunks-有哪3种方式"}},[_._v("#")]),_._v(" 7. webpack splitChunks 有哪3种方式 ？")]),_._v(" "),t("ol",[t("li",[_._v("按缓存组分割, "),t("code",[_._v("cacheGroups")])]),_._v(" "),t("li",[_._v("按 "),t("strong",[_._v("minSize")]),_._v("、"),t("strong",[_._v("maxSize")]),_._v(" 分割")])]),_._v(" "),t("p",[_._v("可以依据模块的大小来分割代码。"),t("code",[_._v("minSize")]),_._v(" 用于设置生成的块的最小大小，"),t("code",[_._v("maxSize")]),_._v(" 用于设置生成的块的最大大小。")]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("按 "),t("code",[_._v("chunks")]),_._v(" 类型分割")])]),_._v(" "),t("p",[t("code",[_._v("chunks")]),_._v(" 选项可用来指定分割哪些类型的 "),t("code",[_._v("chunks")]),_._v("，它有 3 个可选值："),t("code",[_._v("'async'")]),_._v("、"),t("code",[_._v("'initial'")]),_._v(" 和 "),t("code",[_._v("'all'")]),_._v("。")]),_._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[_._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("//...")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("optimization")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("splitChunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("chunks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'async'")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("// 只分割异步加载的 chunks")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("ul",[t("li",[t("code",[_._v("'async'")]),_._v("：仅分割异步加载的 "),t("code",[_._v("chunks")]),_._v("，也就是通过动态导入（如 "),t("code",[_._v("import()")]),_._v("）加载的模块。")]),_._v(" "),t("li",[t("code",[_._v("'initial'")]),_._v("：只分割同步加载的 "),t("code",[_._v("chunks")]),_._v("。")]),_._v(" "),t("li",[t("code",[_._v("'all'")]),_._v("：分割所有类型的 "),t("code",[_._v("chunks")]),_._v("，包括同步和异步加载的。")])]),_._v(" "),t("hr"),_._v(" "),t("p",[t("strong",[_._v("面试加分项")])]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("优先级问题")]),_._v("："),t("br"),_._v(" "),t("code",[_._v("cacheGroups")]),_._v(" 中的 "),t("code",[_._v("priority")]),_._v(" 字段决定规则优先级，防止规则冲突（如 "),t("code",[_._v("vendors")]),_._v(" 和 "),t("code",[_._v("common")]),_._v(" 同时匹配时，优先级高的先生效）。")])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("maxInitialRequests")]),_._v(" 限制")]),_._v("："),t("br"),_._v("\n初始页面加载时并行请求的 chunk 数量默认限制为 30，超出后会合并代码块，需根据项目调整。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("运行时分离")]),_._v("："),t("br"),_._v("\n结合 "),t("code",[_._v("runtimeChunk: 'single'")]),_._v(" 将 Webpack 运行时代码单独拆分，避免公共代码变化导致缓存失效：")]),_._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("optimization")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("runtimeChunk")]),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[_._v("'single'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])])])]),_._v(" "),t("hr"),_._v(" "),t("h3",{attrs:{id:"对比总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对比总结"}},[_._v("#")]),_._v(" "),t("strong",[_._v("对比总结")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[_._v("方式")])]),_._v(" "),t("th",[_._v("触发条件")]),_._v(" "),t("th",[_._v("适用场景")]),_._v(" "),t("th",[_._v("配置关键")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[_._v("同步分割")])]),_._v(" "),t("td",[_._v("同步导入（"),t("code",[_._v("import")]),_._v("）")]),_._v(" "),t("td",[_._v("多入口共享的公共模块、第三方依赖")]),_._v(" "),t("td",[t("code",[_._v("chunks: 'all'")]),_._v(" + "),t("code",[_._v("minChunks")])])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("异步分割")])]),_._v(" "),t("td",[_._v("动态导入（"),t("code",[_._v("import()")]),_._v("）")]),_._v(" "),t("td",[_._v("按需加载的组件或路由")]),_._v(" "),t("td",[t("code",[_._v("chunks: 'async'")]),_._v("（默认）")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("强制拆分")])]),_._v(" "),t("td",[_._v("手动指定")]),_._v(" "),t("td",[_._v("关键库独立缓存或特殊模块拆分")]),_._v(" "),t("td",[t("code",[_._v("enforce: true")]),_._v(" 或魔法注释")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);