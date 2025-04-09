(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{631:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端项目husky使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端项目husky使用"}},[t._v("#")]),t._v(" 前端项目husky使用")]),t._v(" "),a("p",[a("code",[t._v("husky")]),t._v(" 是一个用于增强 Git 钩子（hooks）的工具，特别是在前端项目中，它经常被用来在代码提交前运行一系列的脚本，比如 lint 检查、代码格式化、测试等。这有助于保证代码质量，并遵守团队的代码规范。")]),t._v(" "),a("p",[t._v("以下是如何在前端项目中使用 "),a("code",[t._v("husky")]),t._v(" 的基本步骤：")]),t._v(" "),a("h3",{attrs:{id:"_1-安装-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-husky"}},[t._v("#")]),t._v(" 1. 安装 husky")]),t._v(" "),a("p",[t._v("首先，你需要在项目中安装 "),a("code",[t._v("husky")]),t._v("。你可以使用 npm 或 yarn 来安装：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" husky --dev\n")])])]),a("h3",{attrs:{id:"_2-配置-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-husky"}},[t._v("#")]),t._v(" 2. 配置 husky")]),t._v(" "),a("p",[t._v("在项目的 "),a("code",[t._v("package.json")]),t._v(" 文件中，你可以添加一个 "),a("code",[t._v("huskyrc")]),t._v(" 字段来配置 "),a("code",[t._v("husky")]),t._v("。这个字段可以是一个 JSON 对象，也可以是一个指向 "),a("code",[t._v(".huskyrc")]),t._v("、"),a("code",[t._v(".huskyrc.json")]),t._v(" 或 "),a("code",[t._v("husky.config.js")]),t._v(" 文件的路径。")]),t._v(" "),a("p",[t._v("例如，你可以在 "),a("code",[t._v("package.json")]),t._v(" 中添加以下内容：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"huskyrc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在这个例子中，我们配置了 "),a("code",[t._v("pre-commit")]),t._v(" 和 "),a("code",[t._v("commit-msg")]),t._v(" 两个钩子。"),a("code",[t._v("pre-commit")]),t._v(" 钩子会在每次提交之前运行 "),a("code",[t._v("npm run lint")]),t._v(" 命令，这通常是一个 lint 检查命令。"),a("code",[t._v("commit-msg")]),t._v(" 钩子会在每次提交信息时运行 "),a("code",[t._v("commitlint")]),t._v("，用于检查提交信息的格式是否符合团队的规范。")]),t._v(" "),a("h3",{attrs:{id:"_3-使用-commitlint-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-commitlint-可选"}},[t._v("#")]),t._v(" 3. 使用 commitlint（可选）")]),t._v(" "),a("p",[t._v("如果你想要检查提交信息的格式，你可以使用 "),a("code",[t._v("commitlint")]),t._v("。首先，你需要安装它：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @commitlint/cli @commitlint/config-conventional --save-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @commitlint/cli @commitlint/config-conventional --dev\n")])])]),a("p",[t._v("然后，在项目的根目录下创建一个 "),a("code",[t._v(".commitlintrc.js")]),t._v(" 文件，并添加以下内容：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个配置文件告诉 "),a("code",[t._v("commitlint")]),t._v(" 使用 "),a("code",[t._v("conventional")]),t._v(" 提交规范。现在，当你尝试提交一个不符合这个规范的提交信息时，"),a("code",[t._v("husky")]),t._v(" 和 "),a("code",[t._v("commitlint")]),t._v(" 会阻止你提交，并显示一个错误消息。")]),t._v(" "),a("h3",{attrs:{id:"_4-测试配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试配置"}},[t._v("#")]),t._v(" 4. 测试配置")]),t._v(" "),a("p",[t._v("最后，你可以尝试提交一些代码来测试你的配置是否工作正常。如果 "),a("code",[t._v("pre-commit")]),t._v(" 钩子中的命令失败（例如，lint 检查失败），提交应该会被阻止。同样，如果提交信息不符合 "),a("code",[t._v("commitlint")]),t._v(" 的规范，提交也会被阻止。")]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("从 "),a("code",[t._v("husky")]),t._v(" 版本 7 开始，配置方式有所变化。如果你使用的是 "),a("code",[t._v("husky")]),t._v(" 7 或更高版本，你需要使用 "),a("code",[t._v("huskyrc.json")]),t._v(" 或 "),a("code",[t._v("husky.config.js")]),t._v(" 文件进行配置，而不是在 "),a("code",[t._v("package.json")]),t._v(" 中添加 "),a("code",[t._v("huskyrc")]),t._v(" 字段。同时，你需要安装并配置 "),a("code",[t._v("husky-init")]),t._v(" 来初始化你的 "),a("code",[t._v("husky")]),t._v(" 配置。你可以查阅 "),a("code",[t._v("husky")]),t._v(" 的官方文档以获取更多关于新版本配置的信息。")]),t._v(" "),a("h3",{attrs:{id:"启用husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用husky"}},[t._v("#")]),t._v(" 启用Husky")]),t._v(" "),a("p",[t._v("执行以下命令启用Husky，执行完命令后，项目根路径中会多出一个"),a("code",[t._v(".husky")]),t._v("的文件夹。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npx husky install\n")])])]),a("blockquote",[a("p",[t._v("如果考虑后续会多次用到该命令的话，可以在package.json中加一条命令："),a("code",[t._v('"prepare": "husky install"')]),t._v("，后续运行"),a("code",[t._v("npm run prepare")]),t._v("即可。")])]),t._v(" "),a("h3",{attrs:{id:"husky简单入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky简单入门"}},[t._v("#")]),t._v(" husky简单入门")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("新建一个干净的文件夹husky-demo并且在当前项目下初始化"),a("code",[t._v("git init")])])]),t._v(" "),a("li",[a("p",[t._v("再初始化"),a("code",[t._v("npm init")])])]),t._v(" "),a("li",[a("p",[t._v("执行命令 "),a("code",[t._v("npx husky-init && npm install")])])]),t._v(" "),a("li",[a("p",[t._v("执行"),a("code",[t._v("git add.")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v('git commit -m "code update"')])])])]),t._v(" "),a("p",[t._v("在执行"),a("code",[t._v('git commit -m "code update"')]),t._v(" 会查找 .husy/pre-commit钩子")]),t._v(" "),a("p",[t._v("然后执行"),a("code",[t._v("npm test")]),t._v("命令 显示我们在package.json中这个命令执行会报错所以本次commit 失败，在实际项目中我们会把npm test或者对应的代码检查脚本命令")])])}),[],!1,null,null,null);s.default=e.exports}}]);