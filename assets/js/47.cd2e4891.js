(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{456:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器原理与-pwa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原理与-pwa"}},[t._v("#")]),t._v(" 浏览器原理与 pwa")]),t._v(" "),s("h3",{attrs:{id:"代码是怎么在计算机上跑起来的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码是怎么在计算机上跑起来的"}},[t._v("#")]),t._v(" 代码是怎么在计算机上跑起来的？")]),t._v(" "),s("p",[t._v("我们都知道，计算机只能识别"),s("code",[t._v("0")]),t._v("或者"),s("code",[t._v("1")]),t._v("这种二进制数据，代码执行的过程也就是计算机读取二进制指令并分析指令以及执行的的过程，那么我们编写的代码中有"),s("code",[t._v("for")]),t._v("，"),s("code",[t._v("while")]),t._v("，"),s("code",[t._v("if")]),t._v("这些语句，对于计算机来说他们根本是不可能识别出来这些关键字的。所以我们目前所使用的语言被称为人类语言，人类语言到机器语言需要经过一系列的翻译操作。")]),t._v(" "),s("ul",[s("li",[t._v("有的编程语言要求必须提前将所有源代码一次性转换成二进制指令，也就是生成一个可执行程序（Windows 下的 .exe），比如 C 语言、C++、Golang、Pascal（Delphi）、汇编等，这种编程语言称为编译型语言，使用的转换工具称为编译器。")]),t._v(" "),s("li",[t._v("有的编程语言可以一边执行一边转换，需要哪些源代码就转换哪些源代码，不会生成可执行程序，比如 Python、JavaScript、PHP、Shell、MATLAB 等，这种编程语言称为解释型语言，使用的转换工具称为解释器。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/jc-1.png",alt:"浏览器原理"}})]),t._v(" "),s("h3",{attrs:{id:"引入进程的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入进程的原因"}},[t._v("#")]),t._v(" 引入进程的原因")]),t._v(" "),s("p",[s("strong",[t._v("进程是资源分配的最小单位。")])]),t._v(" "),s("p",[t._v("可以给每个进程分配不同的内存空间，作用就与高级语言的 namespace 功能类似。")]),t._v(" "),s("p",[t._v("程序运行的过程就是读取指令的过程。但是在读取到某些指令的时候，比如：IO 操作，在读取到指令后解析是个 IO 操作，然后计算机执行这个操作，可能这个操作写入磁盘的时间有一个小时之久，那么在这个时间之内，cpu 已经不读取指令了。那么这个时候 cpu 完全是处于空闲状态，要是在没有进程的时候，只能等他执行完毕之后，在继续读取指令。")]),t._v(" "),s("p",[t._v("但是有了进程之后，当我遇到某个进程进行 IO 操作或者其他已经不再读取指令操作的时候，我就可以将他挂起，等到他 IO 操作完成或者其他已经不再读取指令操作的时候，等待下一次 cpu 空闲时间，在切回到他的上下文，继续从挂起的那个状态之后继续读取。就可以保证不浪费 cpu 的空闲时间。")]),t._v(" "),s("h3",{attrs:{id:"引入线程的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入线程的原因"}},[t._v("#")]),t._v(" 引入线程的原因")]),t._v(" "),s("p",[t._v("线程是什么？要理解这个概念，需要先了解一下操作系统的一些相关概念。大部分操作系统(如 Windows、Linux)的任务调度是采用"),s("strong",[t._v("时间片轮转的抢占式调度方式")]),t._v("，也就是说一个任务执行一小段时间后强制暂停去执行下一个任务，每个任务轮流执行。任务执行的一小段时间叫做时间片，任务正在执行时的状态叫"),s("strong",[t._v("运行状态")]),t._v("，任务执行一段时间后强制暂停去执行下一个任务，被暂停的任务就处于就绪状态等待下一个属于它的时间片的到来。这样每个任务都能得到执行，由于 CPU 的执行效率非常高，时间片非常短，在各个任务之间快速地切换，给人的感觉就是多个任务在“同时进行”，这也就是我们所说的并发(别觉得并发有多高深，它的实现很复杂，但它的概念很简单，就是一句话：多个任务同时执行)。多任务运行过程的示意图如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/browser-principle1.png",alt:"多任务运行过程"}})]),t._v(" "),s("h3",{attrs:{id:"在浏览器中-进程主要有以下几个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中-进程主要有以下几个"}},[t._v("#")]),t._v(" 在浏览器中，进程主要有以下⼏个")]),t._v(" "),s("ol",[s("li",[t._v("GPU 进程。浏览器全局只有这么⼀个进程。主要是与图形渲染有关。")]),t._v(" "),s("li",[t._v("其他插件的进程，⽐如你给你浏览器装了⼀个插件，那么这⼀个插件就是⼀个进程。")]),t._v(" "),s("li",[t._v("Browser 进程：浏览器的主进程（负责协调、主控），只有⼀个。主要功能有以下:")])]),t._v(" "),s("ul",[s("li",[t._v("负责浏览器界⾯显示，与⽤户交互。如前进，后退等")]),t._v(" "),s("li",[t._v("负责各个⻚⾯的管理，创建和销毁其他进程")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("浏览器渲染进程，也被称为浏览器内核。分类有：")])]),t._v(" "),s("ul",[s("li",[t._v("Google Chrom: Chrome 28 开发版本的版本说明中还在使⽤ WebKit，⽽最新的 Chrome 28.0.1469.0 中已经替换为 Blink。")]),t._v(" "),s("li",[t._v("Internet Explorer： Trident 内核，也是俗称的 IE 内核")]),t._v(" "),s("li",[t._v("Mozilla Firefox： Gecko 内核，俗称 Firefox 内核。")]),t._v(" "),s("li",[t._v("Safari： WebKit")]),t._v(" "),s("li",[t._v("Opera： 最初是⾃⼰的 Presto 内核，后来是 Webkit，现在是 Blink 内核")])]),t._v(" "),s("h3",{attrs:{id:"浏览器渲染进程的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程的作用"}},[t._v("#")]),t._v(" 浏览器渲染进程的作⽤")]),t._v(" "),s("ul",[s("li",[t._v("负责⻚⾯的渲染，")]),t._v(" "),s("li",[t._v("脚本执⾏，")]),t._v(" "),s("li",[t._v("时间处理，")]),t._v(" "),s("li",[t._v("⽹络请求等功能。")])]),t._v(" "),s("h3",{attrs:{id:"浏览器渲染进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程"}},[t._v("#")]),t._v(" 浏览器渲染进程")]),t._v(" "),s("p",[t._v("在⼀个进程中，⾄少有⼀个线程。线程被称为"),s("code",[t._v("CPU任务调度的最⼩执⾏单位")]),t._v("。那么在浏览器的渲染进程中，有以下⼏个线程：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("GUI 渲染线程：")]),t._v(" 解析 html ⽂档，⽣成 DOM 树与 CSS 树（需要注意的是 css 树不会阻塞 dom 树的⽣成）。当⽣\n成 DOM 树与 CSS 树之后，就根据这两 个数⽣成⼀个 render 树（在⽣成 render 树的时候，如果有⼀⽅没有解\n析完毕就会等待解析完成。此时此刻是双⽅会互相阻塞），然后将这个 render 树渲染到界⾯上。当⻚⾯触发\n回流或者重绘的时候，会再次执⾏此次操作。")]),t._v(" "),s("li",[s("strong",[t._v("JS 线程")]),t._v("：⽤来执⾏ JS 代码。")]),t._v(" "),s("li",[s("strong",[t._v("定时器线程")]),t._v("：⽤来处理定时器线程，当定时器到期的时候，将回调放到任务队列⾥⾯，等待 JS 线程的执⾏。\n那么有了 JS 线程，我们为啥还需要定时器线程呢？看下⾯代码解释：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是计时器1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是计时器2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("假如没有定时器线程，⼜因为 JS 是单线程的，我只能⼀个⼀个的压⼊栈中执⾏，那么⾸先是计时器 1 ⼊栈，接\n着是计时器 2 ⼊栈。但是因为计时器 1 的时间⼩于计时器 2 的时间，那么应该计时器 1 ⾸先出栈。但是因为栈是\n⼀个先进后出的数据结构。那么这就发⽕说呢过了冲突。因为计时器 2 还没有到时间，所以计时器 1 也就不能出栈。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("事件触发线程。")]),t._v(" ⽤来管理事件的触发，例如：点击事件，⿏标移动事件。当这些个事件被触发的时候，就会\n将这些事件的回调添加到任务队列⾥，等待 JS 执⾏。")]),t._v(" "),s("li",[s("strong",[t._v("异步 HTTP 请求线程。")]),t._v(" 在 XMLHttpRequest 在连接后新启动的⼀个线程，线程如果检测到请求的状态变更，如\n果设置有回调函数，该线程会把回调函数添加到事件队列，同理，等待 JS 引擎空闲了执⾏。")])]),t._v(" "),s("h3",{attrs:{id:"js-线程与-gui-线程互斥的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-线程与-gui-线程互斥的原因"}},[t._v("#")]),t._v(" JS 线程与 GUI 线程互斥的原因")]),t._v(" "),s("p",[t._v("主要是因为当⼀个⽂档在加载的时候，如果此时 JS 线程也在加载执⾏，例如要获取⼀个 id 为 demo1 的节点，此时此\n刻我们渲染过程中，还并没有⽣成 render 树，也就不会进⾏布局和渲染。那么此时这个节点是没有的，那么肯定\n就会找不到。因此为了避免这种情况的发⽣，在浏览器中，JS 线层和 GUI 线程是互斥的，当⼀个执⾏的时候，另外\n⼀个就会被强制挂起。这样就会导致⼀个问题，当 JS 执⾏⼀个时间复杂度⾮常⾼的算法的时候，因为迟迟不能执⾏\n完毕，导致 GUI 渲染线程被挂起太久，就会导致⻚⾯看起来卡顿，事件响应变慢。解决办法，可以通过 Web\nWorker 解决。")]),t._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6953919482553188359/",target:"_blank",rel:"noopener noreferrer"}},[t._v("进程与线程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://kb.cnblogs.com/page/531409/",target:"_blank",rel:"noopener noreferrer"}},[t._v("以操作系统的角度述说线程与进程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"从输入-url-到页面发生了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面发生了什么"}},[t._v("#")]),t._v(" 从输入 URL 到页面发生了什么")]),t._v(" "),s("ol",[s("li",[t._v("域名解析")]),t._v(" "),s("li",[t._v("发起请求")]),t._v(" "),s("li",[t._v("HTML 解析")]),t._v(" "),s("li",[t._v("CSS 解析")]),t._v(" "),s("li",[t._v("布局")]),t._v(" "),s("li",[t._v("绘制")])]),t._v(" "),s("h3",{attrs:{id:"域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),s("p",[t._v("在计算机⽹络中，**我们只能通过 IP 地址访问到具体的主机。**我们不能通过域名直接访问。我们的前端的静态资源\n等，都是存储在服务器上。当输⼊⼀个域名的时候，我们⾸先要做的就是将域名转化成 IP 地址。在转换的过程中，\n有以下⼏个步骤：")]),t._v(" "),s("ol",[s("li",[t._v("⾸先浏览器会查询⾃身的缓存中，有没有此条域名的解析，如果有的话，就返回这个解析后的地址。")]),t._v(" "),s("li",[t._v("如果浏览器⾃身的缓存中，没有找到与此条域名对应的 IP 地址，那么就会去操作系统中的缓存中查找是否有\n这条域名的解析。")]),t._v(" "),s("li",[t._v("如果在操作系统中也没有找到的话，那么就需要通过 DNS(域名系统)帮助我们解析。")]),t._v(" "),s("li",[t._v("如果浏览器在⾃身缓存中，以及操作系统的缓存中，并未命中该域名的匹配的话，那么就会查找 TCP/IP 参数\n中设置的⾸选 DNS 服务器，我们把他叫做本地 DNS，如果本地 DNS 服务器的缓存中命中了该域名，就返回该\n域名的解析。如果解析不到，那么会根据本地 DNS 服务器的设置，看是否设置了转发模式，如果设置了转发\n模式，那么他就会⼀级⼀级的去查找，直到找到。如果还没有找到的话，并且这个时候，DNS 服务器已经没\n有启⽤转发模式，那么就会向根 DNS 服务器发起查询请求。")]),t._v(" "),s("li",[t._v("当向 DNS 根服务器发起请求的时候，根服务器会返回当前他所已知的顶层域名服务器，然后，接着向这些顶\n层域名服务器去发起请求，如果某个顶层域名服务器解析，是属于他所管辖的范畴，那么就会返回他所管辖\n的⼆级 DNS 域名服务器，以此类推，直到找到或者找不到。")])]),t._v(" "),s("h3",{attrs:{id:"什么是-dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dns"}},[t._v("#")]),t._v(" 什么是 DNS?")]),t._v(" "),s("p",[t._v("DNS 的全称是 domain name system，也就是域名系统。他⼯作在应⽤层，主要作⽤是帮我们完成域名到 IP 的转\n化。他的体系结构是 分布式集群 ，顶层为 根服务器 ，接下来是 顶层域名服务器 ，接下来是 次级域名服务器 。结构\n⼤致如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/DNS.jpg",alt:"dns"}})]),t._v(" "),s("p",[t._v("之所以 DNS 要设计成分布式集群，⽽不是单站点模式，是因为：如果⼀个域名服务器挂了，不会导致整个互联⽹\n崩掉。查询的时候，也⽐较快速，如果只有⼀个服务器，假如这个服务器放在美国，那么距离美国最远的地⽅，⾸\n先 DNS 客户端向 DNS 服务器发送的过程，都要⾛很⻓⼀段时间的⽹络，在加上，如果所有的域名信息否放在同⼀\n个服务器上，那么查询速度以及存储都是⼀个很⼤的问题。因此就需要设计成分布式集群。")]),t._v(" "),s("p",[t._v("DNS 在查询域名解析的过程中，分为： "),s("code",[t._v("迭代查询")]),t._v(" 以及 "),s("code",[t._v("递归查询")]),t._v(" 。")]),t._v(" "),s("p",[s("strong",[t._v("递归查询：")]),t._v(" 当计算机 DNS 客户端向本地 DNS 服务器发起查找的过程中，如果没有查找到的话，那么此时，本地\nDNS 服务器充当 DNS 客户端，向上级 DNS 服务器，根域名服务器或顶级域名服务器等发起解析。以此类推，到之\n后我只需要返回给上⼀级查询的正确域名或者没有查找到。")]),t._v(" "),s("p",[s("strong",[t._v("迭代查询：")]),t._v(" 当计算机 DNS 客户端向本地 DNS 服务器发起查找，如果没有查找到，此时本地 DNS 服务器会返回给计\n算机 DNS 客户端我本地 DNS 服务器的上⼀级，根域名服务器或顶级域名服务器等，然后计算机 DNS 在向这些域名\n服务器发起查询，直到查找到或者未找到，如图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/dns-2.png",alt:"dns"}})]),t._v(" "),s("p",[t._v("那么⼀般在计算机中，计算机 DNS 客户端向本地 DNS 查询的过程为递归查询，本地 DNS 向上级护着根 DNS 域名服\n务器发起查找的过程称为迭代查询。")]),t._v(" "),s("h3",{attrs:{id:"发起请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起请求"}},[t._v("#")]),t._v(" 发起请求：")]),t._v(" "),s("p",[t._v("当域名解析完毕之后，就会发起请求。我们在这⾥**假定这个域名从来没有被访问过。**那么它会经过以下⼏个阶段：\n如果是第⼀次请求，那么在请求后，收到的响应中，会有⼀些关于"),s("code",[t._v("强弱缓存")]),t._v("的字段，⽐如：")]),t._v(" "),s("p",[s("strong",[t._v("强缓存字段：")])]),t._v(" "),s("p",[s("code",[t._v("Expires")]),t._v(" ：Expires 的值是⼀个 HTTP ⽇期，在浏览器发起请求的时候，会根据系统时间和 Expires 的值进⾏⽐\n较，如果系统时间超过了 Expires 的值，缓存失效。这个字段会导致⼀个问题，要是系统时间与服务器时间不⼀致\n的时候，就可能出现假性失效，或者出现缓存已经失效了，但是并未去请求最新资源\n"),s("code",[t._v("Cache-control")]),t._v(" ： HTTP/1.1 中新增的属性，属性值具有以下⼏个：")]),t._v(" "),s("ol",[s("li",[t._v("max-age：单位是秒，计算⽅式是距离第⼀次响应头中有该字段的时间。如果时间超过，就要重新发起请\n求。")]),t._v(" "),s("li",[t._v("no-cache：不使⽤强缓存，每次都需要与服务器校验⽂件的新鲜度。")]),t._v(" "),s("li",[t._v("no-store：不使⽤任何缓存，每次都要去服务器请求最新的资源。")]),t._v(" "),s("li",[t._v("private：专⽤于个⼈的缓存。中间代理、cdn 不能缓存此响应。")]),t._v(" "),s("li",[t._v("public：响应可以被 cdn，中间代理所缓存。\n"),s("code",[t._v("pragma")]),t._v(" ：不使⽤强缓存，需要验证缓存是否新鲜。\n强缓存的优先级：pragma > cache-control > expires。")])]),t._v(" "),s("p",[s("strong",[t._v("弱缓存字段：")])]),t._v(" "),s("p",[t._v("在服务器"),s("strong",[t._v("第⼀次响应")]),t._v("请求的时候，有可能有强缓存字段，也有可能没有。也有可能有弱缓存的字段：")]),t._v(" "),s("ol",[s("li",[t._v("last-modified ：最后⼀次⽂件修改的时间。单位是秒。浏览器在下⼀次请求的时候，会在请求头中加\n上 if-moditied-since 字段，接下来服务器就会去对⽐时间是否⼀样，如果⼀样告知继续使⽤缓存，如果\n不⼀致，返回最新的资源，并且在响应头部更新 last-modified 字段。这个会存在⼀个问题：因为是以秒为单\n位，假设在 1s 内服务器先响应了请求，返回了⼀个时间，接着我在⼀秒内更新服务器上的资源的，那么这个\n时候，按照逻辑的话，浏览器下次请求的时候，服务器会 让它继续使⽤缓存（因为时间⼀样）。这样就导致\n了⽂件更新失败。")]),t._v(" "),s("li",[t._v('Etag ：为了防⽌出现 last-modified/if-modified-since 出现的⽂件更新失败的情况⽽引⼊的。Etag 是⼀个\nhash 串，代表的是⼀个资源的标识符，当服务端的⽂件变化的时候，它的 hash 码会随之改变。浏览器在下\n次请求的时候会带上 if-not-match 字段，服务器判断是否与现在的资源的 hash 串⼀致，如果⼀致就让浏览\n器继续适应缓存，否则就发送最新的资源给浏览器，并在响应头中更新 Etag 字段。 ETag ⼜有强弱校验之分，\n如果 hash 串是以 "W/" 开头的⼀串字符串，说明此时协商缓存的校验是弱校验的，只有服务器上的⽂件差异（根\n据 ETag 计算⽅式来决定）达到能够触发 hash 值后缀变化的时候，才会真正地请求资源 。')])]),t._v(" "),s("p",[t._v("浏览器第⼀次发起请求：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/http-request.jpg",alt:"http-request"}})]),t._v(" "),s("p",[t._v("浏览器发起第⼆次请求：\n"),s("img",{attrs:{src:"/myblog/images/http-request2.jpg",alt:"http-request"}})]),t._v(" "),s("h3",{attrs:{id:"解析-html-文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-html-文档"}},[t._v("#")]),t._v(" 解析 HTML ⽂档")]),t._v(" "),s("p",[t._v("在请求到资源之后，浏览器需要解析 HTML，⽣成 dom 树，cssRule 树。结合之后形成 render 树，之后再渲染。\n浏览器在解析 HTML 的时候，主要所做的事情是两个："),s("code",[t._v("词法分析")]),t._v("和"),s("code",[t._v("语法分析")]),t._v("。\n词法分析：\n所谓的词法分析就是"),s("strong",[t._v("将⼀⼤段字符串转根据规则解析成⼀个个最⼩有意义的单元，之后再根据这个最⼩意义单元的相应数据⽣成⼀个 token。")])]),t._v(" "),s("p",[t._v("词法分析阶段采⽤的算法是：标记化算法（将 html 从左到右依次的读⼊字符，内部使⽤状态机来断⾔当前的状\n态，根据语法规则匹配出可以分解的 htmlToken，最后将这个 htmlToken 提供给语法分析阶段）\nHTML 中最⼩有意义单元的种类有：标签开始，标签结束，注释，⽂本，属性，CDATA 节点。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/cffx.jpg",alt:"词法分析"}})]),t._v(" "),s("p",[t._v("在讲具体的词法分析之前，我们需要先了解下，我们分词之后需要⽣成的数据结构⻓什么样。⽣成的具体的数据结\n构如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/cffx-2.jpg",alt:"词法分析"}})]),t._v(" "),s("p",[t._v("具体解释为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Type m_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类型 取值有DOCTYPE, StartTag, EndTag, Character, Comment")]),t._v("\n Range m_range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Always starts at zero. //在字节流中的偏移")]),t._v("\n int m_baseOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "name" for DOCTYPE, StartTag, and EndTag')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "characters" for Character')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "data" for Comment')]),t._v("\n DataVector m_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For DOCTYPE")]),t._v("\n OwnPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DoctypeData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" m_doctypeData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//⽂档类型")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For StartTag and EndTag")]),t._v("\n bool m_selfClosing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否⾃封闭")]),t._v("\n AttributeList m_attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//属性列表")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A pointer into m_attributes used during lexing.")]),t._v("\nAttribute"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" m_currentAttribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前属性")]),t._v("\n")])])]),s("p",[t._v("示例详细说明：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n <a href=”w3c.org”>w3c</a>\n 1.初始状态为DataState\n 2.读取到,进⼊"<",进⼊TagOpenState状态，\n 3.读取到"a"，进⼊到TagNameState状态，并且初始化⼀个HtmlToken,类型为StartTag,\n 4.读取到空格，进⼊BeforeAttributeNameState状态，将之前的TagNameState阶段存储的名称存储起到\nHtmlToken的name中。\n 5.碰到"h"，进⼊到AttributeNameState状态，\n 6.继续读取"r", "e"，"f" 直到读取到"=", 进⼊到BeforeAttributeValue状态\n 7.继续读取，碰到"“",进⼊AttributeValueDoubleQuotedState状态。\n 8.继续读取，碰到："w", "3"......"r", "g",保持状态，提取属性值。\n 9.读取到"“"， 进⼊AfterAttributeValueState状态。\n 10.碰到">",进⼊到DataState阶段。\n 以此类推：\n 最终会⽣成三个htmlToken，分别是：\n*/')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'StartTag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n m_attributes："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w3c.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_selfClosing")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'character'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w3c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_attributes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_selfClosing")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EndTag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n m_attributes："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w3c.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_selfClosing")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("在词法分析的过程中，语法分析也会同步开始进⾏。\n语法分析：\n语法分析的作⽤是根据词法分析阶段⽣成的 htmlToken，将其转化成⼀颗树状结构，也就是我们所说的 dom 树。\n在将这些分好的词转化成 dom 树的时候，我们需要⽤到⼀种数据结构：栈。\n在开始之前，先向栈顶压⼊根元素，等到解析完成之后，这个根元素就是最后的 dom 树。\n当解析完⽣成⼀个词的时候，就会将他⼊栈，有以下⼏种操作的可能：")]),t._v(" "),s("ol",[s("li",[t._v("如果是⼀个开始节点的话，那么直接⼊栈。不做任何操作")]),t._v(" "),s("li",[t._v("如果前⼀个是⽂本节点，并且本次⼊栈的也是⽂本节点的话，会将最后⼊栈的⽂本节点与前⼀个⽂本节点进⾏合并。先把它添加到当前栈顶元素的⼦节点数组中，然后⼊栈。")]),t._v(" "),s("li",[t._v("如果是注释节点，那么直接添加到当前栈顶元素的⾃⼰诶单数组中。")]),t._v(" "),s("li",[t._v("如果是属性的话，直接添加到当前栈顶元素的属性中。")]),t._v(" "),s("li",[t._v("遇到⼀个结束节点，就向前找到第⼀个与之匹配的开始节点，并且出栈。")])]),t._v(" "),s("p",[t._v("举个例⼦：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1234 45678 789"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上⾯具有最⼩意义的字符单元有：<div， >， <p ， >，1234，45678，789，</p>，</div>;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 经过分词之后，会⽣成如下数据结构：")]),t._v("\n\n\n "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'StartTag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n m_attributes："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("m_selfClosing")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在每⽣成⼀个词的时候，就需要将其⼊栈分析，分析步骤如下：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 部分逻辑代码如下所示（js模拟实现）：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTMLDocument")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDocument "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toStringTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Element<")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("stack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("经过上⾯的⼏个步骤，那就就会将 html ⽂档转化为⼀个 dom 树。\n需要注意的是：\n如果存在 JS 脚本，那么在 JS 脚本解析的过程中，会将渲染线程挂起。")]),t._v(" "),s("h3",{attrs:{id:"css-解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-解析"}},[t._v("#")]),t._v(" css 解析")]),t._v(" "),s("p",[t._v("在⽣成 dom 树的时候，也会解析 css，这两个是并⾏执⾏的，⼀旦存在 css 样式（包括但不限于⾏内样式，外部样\n式引⼊等），就会根据语法规范进⾏解析和标记。解析完成后，会⽣成⼀个 stylesheet 对象，这个对象⾥⾯包含着\n解析好的 css 规则，css 规则是由选择器和声明对象组成。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/css-jx-1.jpg",alt:"css解析"}})]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(".btn-style {\n font-size: 12px;\n background-color: yellow; \n}\n")])])]),s("p",[t._v("以上的css解析之后，会生成:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/myblog/images/css-jx-2.jpg",alt:"css解析"}})]),t._v(" "),s("p",[t._v("render树的⽣成\n等到css的rule树与dom树都解析完毕之后，那么就会根据这两个树⽣成最终的render树。\nrender树的⽣成，就是遍历当前⽣成的dom树，根据当前的dom树的⼦节点信息以及对应的css规则，最终⽣成⼀\n个或多个render⼦节点。\n在webkit中，所有的reder⼦节点都继承与RenderObject，在RenderObject中，有重绘与重排的具体⽅法声明虚\n⽅法。以及dom节点，style样式信息等。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RenderObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n virtual "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n virtual "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PaintInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n virtual "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" rect "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repaintRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n Node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//the DOM node")]),t._v("\n RenderStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the computed style")]),t._v("\n RenderLayer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" containgLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//the containing z-index layer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("⼀个render⼦节点中，如果style样式中，有具体的⼤⼩设置，例如： width:12px; ，那么在布局的时候就会直接\n使⽤这个具体的宽度。当没有定义节点宽度或者定义的宽度为百分⽐的时候，例如： width:50% ；那么就需要在\n布局的时候对其⼤⼩进⾏计算。")]),t._v(" "),s("p",[t._v("需要注意的是：")]),t._v(" "),s("p",[t._v("render树的节点并不等同的dom树的节点，因为有些节点的display为none，那么在⽣成render树的时候，就不\n会将其加⼊到render树种。还有例如“select”元素有 3 个render树⼦节点：⼀个⽤于显示区域，⼀个⽤于下拉列表\n框，还有⼀个⽤于按钮。")]),t._v(" "),s("p",[t._v("布局阶段：\n遍历render树，根据render节点的类型，确定元素的⼤⼩以及位置。")]),t._v(" "),s("p",[t._v("绘制阶段\n在绘制阶段，系统会遍历render树，并调render树的⼦节点的“paint”⽅法，将render树的⼦节点的内容显示在屏\n幕上。绘制⼯作是使⽤⽤户界⾯基础组件完成的。")]),t._v(" "),s("p",[t._v("CSS2 规范定义了绘制流程的顺序。绘制的顺序其实就是元素进⼊堆栈样式上下⽂的顺序。这些堆栈会从后往前绘制，因此这样的顺序会影响绘制。块呈现器的堆栈顺序如下：")]),t._v(" "),s("ol",[s("li",[t._v("背景颜⾊")]),t._v(" "),s("li",[t._v("背景图⽚")]),t._v(" "),s("li",[t._v("边框")]),t._v(" "),s("li",[t._v("⼦代")]),t._v(" "),s("li",[t._v("轮廓")])]),t._v(" "),s("h3",{attrs:{id:"参考资料-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/26762707/answer/890181997",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是 hash"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/augfun/article/details/54563520",target:"_blank",rel:"noopener noreferrer"}},[t._v("WEBKIT 中的 HTML 词法解析"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6961379369436741663/",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的进程与线程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);