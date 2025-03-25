(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{615:function(v,t,_){"use strict";_.r(t);var a=_(17),i=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"reactnative-中-常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#reactnative-中-常见问题"}},[v._v("#")]),v._v(" ReactNative 中 常见问题")]),v._v(" "),_("h3",{attrs:{id:"_1-reactnative-中-如何解决-adb-devices-找不到连接设备的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-reactnative-中-如何解决-adb-devices-找不到连接设备的问题"}},[v._v("#")]),v._v(" 1. ReactNative 中，如何解决 adb devices 找不到连接设备的问题？")]),v._v(" "),_("p",[v._v("在使用 Genymotion(Android模拟器) 时，首先需要在 SDK 的 platform-tools 中加入环境变量，然后在 Genymotion 中单击 Setting，选择 ADB 选项卡，单击 Use custom Android SDK tools，浏览本地 SDK 的位置， 单击 OK 按钮就可以了。启动虛拟机后，在 cmd 中输入 adb devices 可以查看设备")]),v._v(" "),_("h3",{attrs:{id:"_2-reactnative-与原生-android-常用的通信方式有几种"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-reactnative-与原生-android-常用的通信方式有几种"}},[v._v("#")]),v._v(" 2. ReactNative 与原生 Android 常用的通信方式有几种？")]),v._v(" "),_("p",[v._v("常用的通信方式如下。\n（1）通过 "),_("code",[v._v("RCTDeviceEventEmitter")]),v._v(" 事件通信。\n（2）通过回调函数异步通信。\n（3）通过 "),_("code",[v._v("Promise")]),v._v(" 规范实现通信。\n（4）通过原生 "),_("code",[v._v("Android")]),v._v(" 直接向 "),_("code",[v._v("ReactNative")]),v._v(" 传递常量数据")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("RCTDeviceEventEmitter")]),v._v(" 是 "),_("code",[v._v("React Native")]),v._v(" 中用于在原生模块和 "),_("code",[v._v("JavaScript")]),v._v(" 之间进行事件通信的一个组件。它允许原生代码（比如 iOS 或 Android）触发事件，这些事件可以被 "),_("code",[v._v("React Native")]),v._v(" 的 "),_("code",[v._v("JavaScript")]),v._v(" 代码捕获和处理。这对于实现诸如推送通知、传感器数据更新、硬件状态变化等功能非常有用。")])]),v._v(" "),_("h3",{attrs:{id:"_3-rn-这个框架有什么优点-为什么要选择这个框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-rn-这个框架有什么优点-为什么要选择这个框架"}},[v._v("#")]),v._v(" 3. Rn 这个框架有什么优点？为什么要选择这个框架？")]),v._v(" "),_("p",[_("code",[v._v("React Native")]),v._v(" 是一个开源的移动应用程序框架，它允许开发者使用 "),_("code",[v._v("JavaScript")]),v._v(" 和 "),_("code",[v._v("React")]),v._v(" 构建原生应用程序。它的优点如下：")]),v._v(" "),_("ul",[_("li",[v._v("跨平台："),_("code",[v._v("React Native")]),v._v(" 可以在 "),_("code",[v._v("iOS")]),v._v(" 和 "),_("code",[v._v("Android")]),v._v(" 上运行，无需编写两套代码。")])]),v._v(" "),_("ol",[_("li",[v._v("跨平台开发")])]),v._v(" "),_("ul",[_("li",[v._v("代码重用：一次开发，可运行在 iOS 和 Android 两个平台上，大约 90% 的代码可以共享。")]),v._v(" "),_("li",[v._v("节省成本与时间：无需为每个平台单独开发，大幅降低开发周期和成本。")])]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("使用 JavaScript")])]),v._v(" "),_("ul",[_("li",[v._v("主流语言：基于 JavaScript，这是全球最流行的编程语言之一。")]),v._v(" "),_("li",[v._v("生态丰富：可以直接利用大量现成的 JavaScript 库和工具。")]),v._v(" "),_("li",[v._v("易于学习：对于前端开发者，React Native 的学习曲线较低。")])]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("原生性能")])]),v._v(" "),_("ul",[_("li",[v._v("近似原生体验：通过桥接技术调用原生代码，提供接近原生应用的用户体验和性能。")]),v._v(" "),_("li",[v._v("GPU 加速：充分利用设备的 GPU 进行渲染，优化性能。")]),v._v(" "),_("li",[v._v("支持原生模块：可以与 iOS 和 Android 的原生模块集成，用于性能要求更高的功能。")])]),v._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[v._v("热重载（Hot Reload）")])]),v._v(" "),_("ul",[_("li",[v._v("即时反馈：开发过程中可以实时看到代码改动的效果，无需重新编译应用。")]),v._v(" "),_("li",[v._v("提高效率：减少开发者在调试和测试上的时间。")])]),v._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[_("p",[v._v("丰富的组件库\n内置组件：提供多种基本 UI 组件，如按钮、列表、输入框等。\n第三方生态：拥有丰富的开源组件库（如 React Navigation、Redux），快速实现常见功能。")])]),v._v(" "),_("li",[_("p",[v._v("强大的社区支持")])])]),v._v(" "),_("ul",[_("li",[v._v("开源项目：React Native 是 Facebook 开发并开源的项目，有庞大的社区支持。")]),v._v(" "),_("li",[v._v("资源丰富：拥有大量文档、教程和社区贡献的插件，解决问题更加高效。")])]),v._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[v._v("灵活性")])]),v._v(" "),_("ul",[_("li",[v._v("与原生代码结合：支持插入原生代码（如 Swift、Kotlin），用于实现复杂功能或优化性能。")]),v._v(" "),_("li",[v._v("平台特定代码：可以为 iOS 和 Android 编写不同的代码块，满足特定需求。")])]),v._v(" "),_("ol",{attrs:{start:"8"}},[_("li",[v._v("支持跨平台工具链")])]),v._v(" "),_("ul",[_("li",[v._v("支持结合 Expo，提供快速开发和测试环境，适合轻量级应用开发。")]),v._v(" "),_("li",[v._v("可与 CI/CD（如 Bitrise、Fastlane）无缝集成，提升部署效率。")])]),v._v(" "),_("ol",{attrs:{start:"9"}},[_("li",[v._v("开发与维护效率高")])]),v._v(" "),_("ul",[_("li",[v._v("模块化架构：代码结构清晰，便于开发团队分工协作。")]),v._v(" "),_("li",[v._v("统一更新：跨平台应用只需一次更新即可在两个平台上同步发布。")])]),v._v(" "),_("ol",{attrs:{start:"10"}},[_("li",[_("p",[v._v("动态更新\nCodePush 支持：允许在不重新发布应用到 App Store 或 Google Play 的情况下，通过 OTA（Over The Air）动态更新代码。")])]),v._v(" "),_("li",[_("p",[v._v("可扩展性强")])])]),v._v(" "),_("p",[v._v("支持多种插件和技术：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("易于集成第三方服务（如 Firebase、GraphQL）。")])]),v._v(" "),_("li",[_("p",[v._v("良好的兼容性：能够支持物联网（IoT）设备、智能硬件等场景。")])]),v._v(" "),_("li",[_("p",[v._v("React Native 的典型应用场景")])])]),v._v(" "),_("ol",[_("li",[v._v("初创项目：快速开发 MVP（最小可行产品）。")]),v._v(" "),_("li",[v._v("跨平台应用：预算有限但需同时覆盖 iOS 和 Android 用户。")]),v._v(" "),_("li",[v._v("实时功能：如社交媒体、聊天、图片共享等。")])]),v._v(" "),_("p",[_("strong",[v._v("总结：React Native 凭借跨平台开发、高效的热重载、丰富的社区支持和接近原生的性能，成为开发高效、功能丰富的移动应用的重要工具。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);