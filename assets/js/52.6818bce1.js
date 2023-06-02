(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{453:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"重绘回流优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘回流优化"}},[t._v("#")]),t._v(" 重绘回流优化")]),t._v(" "),a("h3",{attrs:{id:"_1-浏览器渲染机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器渲染机制"}},[t._v("#")]),t._v(" 1. 浏览器渲染机制")]),t._v(" "),a("ul",[a("li",[t._v("浏览器采用流式布局模型（Flow Based Layout）")]),t._v(" "),a("li",[t._v("浏览器会把 HTML 解析成 DOM，把 CSS 解析成 CSSOM，DOM 和 CSSOM 合并就 产生了渲染树（Render Tree）。")]),t._v(" "),a("li",[t._v("有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。")]),t._v(" "),a("li",[t._v("由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完 成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同 等元素的时间，这也是为什么要避免使用 table 布局的原因之一。")])]),t._v(" "),a("h3",{attrs:{id:"_2-重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重绘"}},[t._v("#")]),t._v(" 2. 重绘")]),t._v(" "),a("p",[t._v("由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为 重绘，例如 outline, visibility, color、background-color 等，重绘的代价是高昂的， 因为浏览器必须验证 DOM 树上其他节点元素的可见性。")]),t._v(" "),a("h3",{attrs:{id:"_3-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-回流"}},[t._v("#")]),t._v(" 3. 回流")]),t._v(" "),a("ul",[a("li",[t._v("回流是布局或者几何属性需要改变就称为回流。")]),t._v(" "),a("li",[t._v("回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。")]),t._v(" "),a("li",[t._v("一个元素的回流可能会导致了其所有子元素以及 DOM 中紧随其后的节点、祖先节点元素 的随后的回流。")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我的组件"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误："),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误的描述…"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误纠正"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("第一步"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("第二步"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("在上面的 HTML 片段中，对该段落("),a("code",[t._v("<p>标签")]),t._v(")回流将会引发强烈的回流，因为它 是一个子节点。这也导致了祖先的回流（div.error 和 body – 视浏览器而定）。 此外，"),a("code",[t._v("<h5>")]),t._v("和"),a("code",[t._v("<ol>")]),t._v("也会有简单的回流，因为其在 DOM 中在回流元素之后。大部分的回流将导致页面的重新渲染。")]),t._v(" "),a("ul",[a("li",[t._v("回流必定会发生重绘，重绘不一定会引发回流。")])]),t._v(" "),a("h3",{attrs:{id:"_4-浏览器优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器优化"}},[t._v("#")]),t._v(" 4. 浏览器优化")]),t._v(" "),a("p",[t._v("现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在 队列中，至少一个浏览器刷新（即 16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。")]),t._v(" "),a("h3",{attrs:{id:"_5-主要包括以下属性或方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-主要包括以下属性或方法"}},[t._v("#")]),t._v(" 5. 主要包括以下属性或方法：")]),t._v(" "),a("ol",[a("li",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")]),t._v(" "),a("li",[t._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")]),t._v(" "),a("li",[t._v("clientTop、clientLeft、clientWidth、clientHeight")]),t._v(" "),a("li",[t._v("width、height")]),t._v(" "),a("li",[t._v("getComputedStyle()")]),t._v(" "),a("li",[t._v("getBoundingClientRect()")])]),t._v(" "),a("p",[t._v("所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。")]),t._v(" "),a("h3",{attrs:{id:"_6-减少重绘与回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-减少重绘与回流"}},[t._v("#")]),t._v(" 6. 减少重绘与回流")]),t._v(" "),a("h4",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("ol",[a("li",[t._v("使用 transform 替代 top")]),t._v(" "),a("li",[t._v("使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),t._v(" "),a("li",[t._v("避免使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局。")]),t._v(" "),a("li",[t._v("尽可能在 DOM 树的最末端改变 class，回流是不可避免的，但可以减少其影响。尽可能在 DOM 树的最末端改变 class，可以限制了回流的范围，使其影响尽可能少的节点。")]),t._v(" "),a("li",[t._v("避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div>a>span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的 span 标签 然后设置颜色，")]),t._v(" "),a("li",[t._v("但是对于第二种设置样式的方式来说，浏览器首先需要找到所 有的 span 标签，然后找到 span 标签上的 a 标签，最后再去找到 div 标签， 然后给符合这种条件的 span 标签设置颜色，这样的递归过程就很复杂。")]),t._v(" "),a("li",[t._v("所以 我们应该尽可能的避免写过于具体的 CSS 选择器，然后对于 HTML 来说也尽量少的添加无意义标签，保证层级扁平。")]),t._v(" "),a("li",[t._v("将动画效果应用到 position 属性为 absolute 或 fixed 的元素上，避免影响其他元 素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 requestAnimationFrame，详见探讨 requestAnimationFrame。")]),t._v(" "),a("li",[t._v("避免使用 CSS 表达式，可能会引发回流。")]),t._v(" "),a("li",[t._v("将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响 别的节点，例如 will-change、video、iframe 等标签，浏览器会自动将该节点变为图层。")]),t._v(" "),a("li",[t._v("CSS3 硬件加速（GPU 加速），使用 css3 硬件加速，可以让 transform、opacity、 filters 这些动画不会引起回流重绘。但是对于动画的其它属性，比如 background-color 这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。")])]),t._v(" "),a("h3",{attrs:{id:"常见的触发硬件加速的css属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的触发硬件加速的css属性"}},[t._v("#")]),t._v(" 常见的触发硬件加速的css属性")]),t._v(" "),a("ul",[a("li",[t._v("transform")]),t._v(" "),a("li",[t._v("opacity")]),t._v(" "),a("li",[t._v("filters")]),t._v(" "),a("li",[t._v("Will-change")])]),t._v(" "),a("h4",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),a("ol",[a("li",[t._v("避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。")]),t._v(" "),a("li",[t._v("避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。")]),t._v(" "),a("li",[t._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),t._v(" "),a("li",[t._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])]),t._v(" "),a("h3",{attrs:{id:"_5-渲染优化建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-渲染优化建议"}},[t._v("#")]),t._v(" 5. 渲染优化建议")]),t._v(" "),a("p",[t._v("浏览器需要在 16.6ms 内完成整个 JS->Style->Layout->Paint->Composite 流程")]),t._v(" "),a("p",[t._v("js修改dom结构或样式 -> 计算style -> layout(重排) -> paint(重绘) -> composite(合成)")]),t._v(" "),a("h3",{attrs:{id:"_6-有哪些页面渲染的优化方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-有哪些页面渲染的优化方式"}},[t._v("#")]),t._v(" 6. 有哪些页面渲染的优化方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("避免耗时的 JavaScript 代码")])]),t._v(" "),a("li",[a("p",[t._v("避免交错读写样式")])]),t._v(" "),a("li",[a("p",[t._v("小心事件触发的渲染")])]),t._v(" "),a("li",[a("p",[t._v("使用resize事件的时候，做节流处理")])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://harttle.land/2016/11/26/dynamic-dom-render-blocking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步渲染"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_30325487/article/details/99213423",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的 16ms"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lpl666/p/10545042.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解回流和重绘及优化"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.bianchengquan.com/article/275518.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对回流和重绘的渲染优化"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);