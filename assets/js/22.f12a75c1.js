(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{585:function(t,_,v){"use strict";v.r(_);var a=v(17),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),v("ol",[v("li",[t._v("（HyperText Transfer Protocol，超⽂本传输协议）是⽤于从WWW服务器传输超⽂本到本地浏览器的传输协议。它可以使浏览器更加⾼效，使⽹络传输减少。它不仅保证计算机正确快速地传输超⽂本⽂档，还确定传输⽂档中的哪⼀部分，以及哪部分内容⾸先显示(如⽂本先于图形)等。")]),t._v(" "),v("li",[t._v("HTTP是客户端浏览器或其他程序与Web服务器之间的应⽤层通信协议。在Internet上的Web\n服务器上存放的都是超⽂本信息，客户机需要通过HTTP协议传输所要访问的超⽂本信息。\nHTTP包含命令和传输信息，不仅可⽤于Web访问，也可以⽤于其他因特⽹/内联⽹应⽤系统之\n间的通信，从⽽实现各类应⽤资源超媒体访问的集成。")]),t._v(" "),v("li",[t._v("我们在浏览器的地址栏⾥输⼊的⽹站地址叫做URL (Uniform Resource Locator，统⼀资源定位\n符)。就像每家每户都有⼀个⻔牌地址⼀样，每个⽹⻚也都有⼀个Internet地址。当你在浏览器\n的地址框中输⼊⼀个URL或是单击⼀个超级链接时，URL就确定了要浏览的地址。浏览器通过\n超⽂本传输协议(HTTP)，将Web服务器上站点的⽹⻚代码提取出来，并翻译成漂亮的⽹⻚。")])]),t._v(" "),v("h3",{attrs:{id:"_1-一次完整的http通信是什么样子的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-一次完整的http通信是什么样子的"}},[t._v("#")]),t._v(" 1. ⼀次完整的HTTP通信是什么样⼦的?")]),t._v(" "),v("ol",[v("li",[t._v("建⽴ TCP 连接")])]),t._v(" "),v("p",[t._v("在HTTP⼯作开始之前，客户端⾸先要通过⽹络与服务器建⽴连接，该连接是通过 TCP 来完成\n的。HTTP 是⽐ TCP 更⾼层次的应⽤层协议，根据规则，只有低层协议建⽴之后，才能进⾏⾼\n层协议的连接，因此，⾸先要建⽴ TCP 连接，⼀般 TCP 连接的端⼝号是80；")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("客户端向服务器发送请求命令")])]),t._v(" "),v("p",[t._v("⼀旦建⽴了TCP连接，客户端就会向服务器发送请求命令；\n例如：GET/info HTTP/1.1")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("客户端发送请求头信息")])]),t._v(" "),v("p",[t._v("客户端发送其请求命令之后，还要以头信息的形式向服务器发送⼀些别的信息，之后客户端发\n送了⼀空⽩⾏来通知服务器，它已经结束了该头信息的发送；")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("服务器应答")])]),t._v(" "),v("p",[t._v("客户端向服务器发出请求后，服务器会客户端返回响应；\n例如： HTTP/1.1 200 OK\n响应的第⼀部分是协议的版本号和响应状态码")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("服务器返回响应头信息")])]),t._v(" "),v("p",[t._v("正如客户端会随同请求发送关于⾃身的信息⼀样，服务器也会随同响应向⽤户发送关于它⾃⼰\n的数据及被请求的⽂档；")]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("服务器向客户端发送数据")])]),t._v(" "),v("p",[t._v("服务器向客户端发送头信息后，它会发送⼀个空⽩⾏来表示头信息的发送到此为结束，接着，\n它就以 Content-Type 响应头信息所描述的格式发送⽤户所请求的实际数据；")]),t._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[t._v("服务器关闭 TCP 连接")])]),t._v(" "),v("p",[t._v("⼀般情况下，⼀旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接，然后如果客户端\n或者服务器在其头信息加⼊了这⾏代码 Connection:keep-alive ，TCP 连接在发送后将仍然保\n持打开状态，于是，客户端可以继续通过相同的连接发送请求。保持连接节省了为每个请求建\n⽴新连接所需的时间，还节约了⽹络带宽。")]),t._v(" "),v("h3",{attrs:{id:"_2-http协议有哪些特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-http协议有哪些特点"}},[t._v("#")]),t._v(" 2. HTTP协议有哪些特点?")]),t._v(" "),v("p",[v("strong",[t._v("1. 通过请求和响应的交换达成通信")])]),t._v(" "),v("p",[t._v("协议规定, 请求从客户端发出, 服务端响应请求并返回.")]),t._v(" "),v("p",[v("strong",[t._v("2. ⽆状态")])]),t._v(" "),v("p",[t._v("HTTP 是⼀种⽆状态协议, 在单纯HTTP这个层⾯，协议对于发送过的请求或响应都不做持久化处理")]),t._v(" "),v("p",[v("strong",[t._v("3. 使⽤Cookie做状态管理")])]),t._v(" "),v("p",[t._v("服务端返回的头信息上有可能会携带Set-Cookie, 那么当客户端接收到响应后, 就会在本地种上cookie. 在下⼀次给服务端发送请求的时候, 就会携带上这些cookie。")]),t._v(" "),v("p",[v("strong",[t._v("4. 通过URL定位资源")])]),t._v(" "),v("p",[t._v("这⾥区分⼀下URI和URL的概念.\nURI: 统⼀资源标识符, ⽐如你身份证号是xxxxxxx, 在所有⼈中是独⼀⽆⼆的, 这个身份证号就能\n标识你的身份, 那么它就是URI\nURL: 统⼀资源定位符, ⽐如北京市/朝阳区/xxxx/xxxx/xxxxx, 通过这⼀串信息可以定位到你, 那\n么这个就是URL\nURL有点类似于通过定位实现的URI.\n就像有个⽗类叫做URI, 他要实现的是唯⼀确定⼀个id. 有的⼈喜欢继承URI, 通过location来实\n现; 有的⼈喜欢继承URI, 通过name来实现.")]),t._v(" "),v("p",[v("strong",[t._v("5. 通过各种⽅法来标识⾃⼰的意图")])]),t._v(" "),v("p",[t._v("这⾥指的是各种HTTP⽅法, ⽐如GET POST PUT DELETE等.")]),t._v(" "),v("p",[v("strong",[t._v("6. 持久连接")])]),t._v(" "),v("ul",[v("li",[t._v("HTTP 协议的初始版本中，每进⾏⼀个 HTTP 通信都要断开⼀次 TCP 连接，增加了很多没必要\n的建⽴连接的开销。")]),t._v(" "),v("li",[t._v("为了解决上述 TCP 连接的问题，HTTP/1.1 ⽀持持久连接。其特点是，只要任意⼀端没有明确提出断开连接，则保持 TCP 连接状态。旨在建⽴⼀次 TCP 连接后进⾏多次请求和响应的交互。")]),t._v(" "),v("li",[t._v("在 HTTP/1.1 中，所有的连接默认都是持久连接。也就是说默认情况下建⽴ TCP 连接不会断开，只有在请求报头中声明 Connection: close 才会在请求完成后关闭连接。")])]),t._v(" "),v("p",[v("strong",[t._v("7. 管道机制")])]),t._v(" "),v("ul",[v("li",[t._v("1.1版本引⼊pipelining机制, 即在同⼀个TCP连接⾥⾯，客户端可以同时发送多个请求。\n举例来说，客户端需要请求两个资源。")]),t._v(" "),v("li",[t._v("以前的做法是，在同⼀个TCP连接⾥⾯，先发送A请\n求，然后等待服务器做出回应，收到后再发出B请求。")]),t._v(" "),v("li",[t._v("管道机制则是允许浏览器同时发出A请求和B请求，但是服务器还是按照顺序，先回应A请求，完成后再回应B请求。")]),t._v(" "),v("li",[t._v("但是现代浏览器⼀般没开启这个配置, 这个机制可能会造成队头阻塞. 因为响应是有顺序的, 如果⼀个TCP连接中的第⼀个HTTP请求响应⾮常慢, 那么就会阻塞后续HTTP请求的响应.")]),t._v(" "),v("li",[t._v("所以现实中默认情况下, ⼀个TCP连接同⼀时间只发⼀个HTTP请求.")])]),t._v(" "),v("p",[t._v("有的同学会问, 我怎么听说chrome最⼤⽀持6个同域名请求呢？")]),t._v(" "),v("p",[v("strong",[t._v("那是因为chrome最⼤⽀持同时开启6个TCP连接。")])]),t._v(" "),v("h2",{attrs:{id:"网络和并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络和并发"}},[t._v("#")]),t._v(" 网络和并发")]),t._v(" "),v("h3",{attrs:{id:"_1-http-1-0-1-1-2-0在并发请求上主要区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-1-0-1-1-2-0在并发请求上主要区别是什么"}},[t._v("#")]),t._v(" 1. HTTP 1.0/1.1/2.0在并发请求上主要区别是什么?")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("HTTP/1.0\n每个"),v("code",[t._v("TCP连接")]),t._v("只能发送⼀个请求，当服务器响应后就会关闭这次连接，下⼀个请求需要再次建⽴TCP连接.")])]),t._v(" "),v("li",[v("p",[t._v("HTTP/1.1")])])]),t._v(" "),v("ul",[v("li",[t._v("默认采⽤持久连接(TCP连接默认不关闭，可以被多个请求复⽤，不⽤声明Connection: keep-alive).")]),t._v(" "),v("li",[t._v("增加了管道机制，在同⼀个TCP连接⾥，允许多个请求同时发送，增加了并发性，进⼀步改善了HTTP协议的效率\n但是同⼀个TCP连接⾥，所有的数据通信是按次序进⾏的。回应慢，会有许多请求排队，造成”队头堵塞”。 (一问一答)")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("HTTP/2.0")])]),t._v(" "),v("ul",[v("li",[t._v("加了双⼯模式，即不仅客户端能够同时发送多个请求，服务端也能同时处理多个请求，解决了队头堵塞的问题。")]),t._v(" "),v("li",[t._v("使⽤了多路复⽤的技术，做到同⼀个连接并发处理多个请求，⽽且并发请求的数量⽐HTTP1.1⼤了好⼏个数量级。")]),t._v(" "),v("li",[t._v("增加服务器推送的功能，不经请求服务端主动向客户端发送数据。")])]),t._v(" "),v("h3",{attrs:{id:"_2-http-1-1长连接和http-2-0的多路复用技术有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-1-1长连接和http-2-0的多路复用技术有什么区别"}},[t._v("#")]),t._v(" 2. HTTP/1.1长连接和HTTP/2.0的多路复用技术有什么区别?")]),t._v(" "),v("p",[t._v("1.1: 同一时间一个TCP连接只能处理一个请求, 采用一问一答的形式. 上一个请求响应后才能处理下一个请求.")]),t._v(" "),v("p",[t._v("chrome浏览器支持最大6个同域名请求的并发\n因为chrome浏览器支持最大开启6个TCP连接")]),t._v(" "),v("p",[t._v("2.0: 同域名上的所有请求都在单个TCP连接上完成. 单个连接上可以并行交错的进行请求和响应.")]),t._v(" "),v("h3",{attrs:{id:"_3-为什么http-1-1不能实现多路复用呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么http-1-1不能实现多路复用呢"}},[t._v("#")]),t._v(" 3. 为什么HTTP/1.1不能实现多路复用呢?")]),t._v(" "),v("p",[t._v("HTTP/2.0是基于二进制帧的协议, HTTP/1.1是基于文本分隔解析的协议.")]),t._v(" "),v("p",[t._v("1.1的报文结构里, 服务器需要不断地读入字节, 直到遇到换行符.\n处理的顺序是串行的, 一个请求和一个响应需要通过一问一答的形式才能对应起来.")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Accept")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("text"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xhtml"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("xml"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webp"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apng"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;q=0.8\nAccept-Encoding:gzip, deflate, br\nAccept-Language:zh-CN,zh;q=0.9,en;q=0.8\nCache-Control:max-age=0\nConnection:keep-alive\nHost:www.imooc.com\nReferer:https://www.baidu.com/\n")])])])]),v("p",[t._v("2.0以帧为最小数据单位, 每个帧都会标识自己属于哪个流, 多个帧组成一个流.")]),t._v(" "),v("p",[t._v("多路复用, 其实就是一个TCP里存在多条流")]),t._v(" "),v("h3",{attrs:{id:"_4-https是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-https是什么"}},[t._v("#")]),t._v(" 4. HTTPS是什么？")]),t._v(" "),v("p",[v("strong",[t._v("HTTPS 协议是由 HTTP 加上 SSL/TLS 协议构建的可进行加密传输、身份认证的网络协议")])]),t._v(" "),v("p",[t._v("主要通过数字证书、加密算法、非对称密钥等技术完成互联网数据传输加密，实现互联网传输安全保护。设计目标主要有三个。")]),t._v(" "),v("ol",[v("li",[t._v("数据保密性：保证数据内容在传输的过程中不会被第三方查看。就像快递员传递包裹一样，都进行了封装，别人无法获知里面装了什么。")]),t._v(" "),v("li",[t._v("数据完整性：及时发现被第三方篡改的传输内容。就像快递员虽然不知道包裹里装了什么东西，但他有可能中途掉包，数据完整性就是指如果被掉包，我们能轻松发现并拒收。")]),t._v(" "),v("li",[t._v("身份校验安全性：保证数据到达用户期望的目的地。就像我们邮寄包裹时，虽然是一个封装好的未掉包的包裹，但必须确定这个包裹不会送错地方，通过身份校验来确保送对了地方。")])]),t._v(" "),v("h3",{attrs:{id:"_5-https-工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-https-工作原理"}},[t._v("#")]),t._v(" 5. HTTPS 工作原理")]),t._v(" "),v("p",[t._v("HTTPS在传输数据之前需要客户端（浏览器）与服务端（网站）之间进行一次握手，在握手过程中将确立双方加密传输数据的密码信息。")]),t._v(" "),v("p",[t._v("TLS/SSL协议不仅仅是一套加密传输的协议，更是一件经过艺术家精心设计的艺术品，TLS/SSL中使用了非对称加密，对称加密以及HASH算法。")]),t._v(" "),v("h3",{attrs:{id:"_6-https协议和http协议的区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-https协议和http协议的区别是什么"}},[t._v("#")]),t._v(" 6. HTTPS协议和HTTP协议的区别是什么？")]),t._v(" "),v("ul",[v("li",[t._v("https协议需要到ca申请证书，一般免费证书很少，需要交费。")]),t._v(" "),v("li",[t._v("http是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。")]),t._v(" "),v("li",[t._v("http和https使用的是完全不同的连接方式,用的端口也不一样,前者是80,后者是443。")]),t._v(" "),v("li",[t._v("http的连接很简单,是无状态的。")]),t._v(" "),v("li",[t._v("HTTPS协议是由HTTP+SSL协议构建的可进行加密传输、身份认证的网络协议， 要比http协议安全。")])]),t._v(" "),v("h3",{attrs:{id:"_7-http2-多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-http2-多路复用"}},[t._v("#")]),t._v(" 7. HTTP2 多路复用")]),t._v(" "),v("ul",[v("li",[t._v("HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。")]),t._v(" "),v("li",[t._v("多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。")]),t._v(" "),v("li",[t._v("HTTP2中同域名下所有通信都在单个连接上完成，消除了因多个TCP连接而带来的延时和内存消耗。单个连接上可以并行交错的请求和响应，之间互不干扰")])]),t._v(" "),v("p",[t._v("https://www.runoob.com/w3cnote/https-ssl-intro.html")]),t._v(" "),v("h2",{attrs:{id:"常⻅的浏览器请求-响应头-错误码解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常⻅的浏览器请求-响应头-错误码解析"}},[t._v("#")]),t._v(" 常⻅的浏览器请求/响应头/错误码解析")]),t._v(" "),v("h3",{attrs:{id:"请求头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),v("ul",[v("li",[t._v("request header")])]),t._v(" "),v("p",[t._v("Accept: application/json, text/plain, "),v("em",[t._v("/")])]),t._v(" "),v("p",[t._v("Accept-Encoding: gzip, deflate, br")]),t._v(" "),v("p",[t._v("Cache-Control: no-cache")]),t._v(" "),v("p",[t._v("Connection: keep-alive")]),t._v(" "),v("p",[t._v("Cookie: SESSION=19c09f61-4dcc-4786-a025-9c166084d58e; JSESSIONID=05E5103C41D985A450B469AEA85D659D; Hm_lvt_ff8d2c4152fbe13646e0c6b015950a3b=1642829300")]),t._v(" "),v("p",[t._v("Host: localhost:8080")]),t._v(" "),v("p",[t._v("Pragma: no-cache")]),t._v(" "),v("p",[t._v("Referer: http://localhost:8080/dsfa/page.html")]),t._v(" "),v("p",[t._v("User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.62")]),t._v(" "),v("h3",{attrs:{id:"响应头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),v("ul",[v("li",[t._v("response header")])]),t._v(" "),v("p",[t._v("access-control-allow-credentials:")]),t._v(" "),v("p",[t._v("access-control-allow-origin:")]),t._v(" "),v("p",[t._v("cache-control: private, must-revalidate, no-cache, no-store, max-age=0")]),t._v(" "),v("p",[t._v("content-encoding:")]),t._v(" "),v("p",[t._v("content-type: application/json")]),t._v(" "),v("p",[t._v("date:")]),t._v(" "),v("p",[t._v("set-cookie:")]),t._v(" "),v("h3",{attrs:{id:"常见状态码-错误码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码-错误码"}},[t._v("#")]),t._v(" 常见状态码/错误码")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("200 get 成功")])]),t._v(" "),v("li",[v("p",[t._v("201 post 成功")])]),t._v(" "),v("li",[v("p",[t._v("301 永久重定向")])]),t._v(" "),v("li",[v("p",[t._v("302 临时重定向")])]),t._v(" "),v("li",[v("p",[t._v("304 协商缓存 服务器⽂件未修改")])]),t._v(" "),v("li",[v("p",[t._v("400 客⼾端请求有语法错误，不能被服务器识别")])]),t._v(" "),v("li",[v("p",[t._v("403 服务器受到请求，但是拒绝提供服务，可能是跨域")])]),t._v(" "),v("li",[v("p",[t._v("404 请求的资源不存在")])]),t._v(" "),v("li",[v("p",[t._v("405 请求的method不允许")])]),t._v(" "),v("li",[v("p",[t._v("500 服务器发⽣不可预期的错误")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);