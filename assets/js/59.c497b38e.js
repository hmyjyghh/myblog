(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{456:function(t,a,r){"use strict";r.r(a);var s=r(1),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"react-native-开发环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-native-开发环境搭建"}},[t._v("#")]),t._v(" React Native 开发环境搭建")]),t._v(" "),a("blockquote",[a("p",[t._v("这里以Windows环境为例")])]),t._v(" "),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("ul",[a("li",[t._v("必须安装的依赖有：Node、JDK 和 Android Studio。")])]),t._v(" "),a("p",[a("strong",[t._v("虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。")])]),t._v(" "),a("p",[t._v("注意 Node 的版本应大于等于 14，安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。")]),t._v(" "),a("blockquote",[a("p",[t._v("React Native 需要 Java Development Kit [JDK] 11。")])]),t._v(" "),a("h3",{attrs:{id:"android-studio、jdk、react-native-debugger-安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-studio、jdk、react-native-debugger-安装包"}},[t._v("#")]),t._v(" Android Studio、jdk、react-native-debugger 安装包")]),t._v(" "),a("blockquote",[a("p",[t._v("链接：https://pan.baidu.com/s/1DwpOmfKFtwLY9TbihZJvVw  提取码：167t")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/myblog/images/androidEnvPackage.png",alt:"Android 环境安装包"}})]),t._v(" "),a("h3",{attrs:{id:"android-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-开发环境"}},[t._v("#")]),t._v(" Android 开发环境")]),t._v(" "),a("ol",[a("li",[t._v("安装 Android Studio")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.android.google.cn/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("首先下载和安装 Android Studio"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('安装界面中选择"Custom"选项，确保选中了以下几项：')]),t._v(" "),a("ul",[a("li",[t._v("Android SDK")]),t._v(" "),a("li",[t._v("Android SDK Platform")]),t._v(" "),a("li",[t._v("Android Virtual Device")])]),t._v(" "),a("p",[t._v('然后点击"Next"来安装选中的组件。')]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("安装 Android SDK")])]),t._v(" "),a("p",[t._v("Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是Android 13 (Tiramisu)版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android 5 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。")]),t._v(" "),a("p",[t._v('你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击"Configure"，然后就能看到"SDK Manager"。')]),t._v(" "),a("p",[a("img",{attrs:{src:"/myblog/images/AndroidStudioWelcome.png",alt:"SDK Manager"}})]),t._v(" "),a("blockquote",[a("p",[t._v('SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior → System Settings → Android SDK。')])]),t._v(" "),a("p",[t._v('在 SDK Manager 中选择"SDK Platforms"选项卡，然后在右下角勾选"Show Package Details"。展开Android 13 (Tiramisu)选项，确保勾选了下面这些组件（重申你必须使用稳定的代理软件，否则可能都看不到这个界面）：')]),t._v(" "),a("ul",[a("li",[t._v("Android SDK Platform 33")]),t._v(" "),a("li",[t._v("Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）")])]),t._v(" "),a("p",[t._v('然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的33.0.0版本。你可以同时安装多个其他版本。')]),t._v(" "),a("p",[t._v('最后点击"Apply"来下载和安装这些组件。')]),t._v(" "),a("ol",[a("li",[t._v("配置 ANDROID_HOME 环境变量")])]),t._v(" "),a("p",[t._v("React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。")]),t._v(" "),a("p",[t._v("打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建，创建一个名为ANDROID_HOME的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录（具体的路径可能和下图不一致，请自行确认）：")]),t._v(" "),a("p",[t._v("OR")]),t._v(" "),a("p",[t._v("Windows + R, cmd 中输入  "),a("code",[t._v("sysdm.cpl")]),t._v(" 打开环境变量")]),t._v(" "),a("p",[t._v("SDK 默认是安装在下面的目录：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\Users\\你的用户名\\AppData\\Local\\Android\\Sdk\n")])])]),a("p",[a("img",{attrs:{src:"/myblog/images/skd-sysdm01.png",alt:"ANDROID_HOME"}})]),t._v(" "),a("p",[t._v('你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是 File → Settings → Appearance & Behavior → System Settings → Android SDK。')]),t._v(" "),a("p",[t._v("你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("把一些工具目录添加到环境变量 Path")])]),t._v(" "),a("p",[t._v("打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中Path变量，然后点击编辑。点击新建然后把这些工具目录路径添加进去：platform-tools、emulator、tools、tools/bin")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\\platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tools\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\\emulator\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\\tools\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\\tools\\bin\n")])])]),a("p",[a("img",{attrs:{src:"/myblog/images/skd-sysdm02.png",alt:"Path"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);