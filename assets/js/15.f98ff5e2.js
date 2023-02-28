(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"贪心算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法"}},[t._v("#")]),t._v(" 贪心算法")]),t._v(" "),s("p",[t._v('贪心算法其实可以认为是dp问题的一个特例, 除了动态规划的各种特征外, 贪心算法还需要满足"贪心选择性质", 当然效率也比动态规划要高。')]),t._v(" "),s("ul",[s("li",[t._v("贪心选择性质：每一步走做出一个局部最优的选择，最终的结果就是全局最优。")])]),t._v(" "),s("p",[t._v("同学们肯定一眼就看出问题来了, 并不是所有问题都是这样的, 很多问题局部最优并不能保证全局最优, 只有小部分问题具有这种特质。")]),t._v(" "),s("p",[t._v("比如你前面堆满了金条, 你只能拿5根, 怎么保证拿到的价值最大？  答案当然是：每次都拿剩下的金条中最重的那根, 那么最后你拿到的一定是最有价值的。")]),t._v(" "),s("p",[t._v("比如斗地主, 对方出了一个3, 你手上有345678还有一个2, 按照贪心选择, 这时候你应该出4了, 实际上咱们会尝试出2, 然后345678起飞~")]),t._v(" "),s("h3",{attrs:{id:"区间调度问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区间调度问题"}},[t._v("#")]),t._v(" 区间调度问题")]),t._v(" "),s("p",[t._v("来看一个经典的贪心算法问题 Interval Scheduling 区间调度.")]),t._v(" "),s("p",[t._v("有许多[start, end]的闭区间, 请设计一个算法, 算出这些区间中, 最多有几个互不相交的区间。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("intervalSchedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("intvs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如intvs = [[1,3], [2,4], [3,6]]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这些区间最多有两个区间互不相交, 即 [1,3], [3,6], intervalSchedule函数此时应该返回2")]),t._v("\n")])])]),s("p",[t._v("这个问题在现实中其实有很多应用场景, 比如你今天有好几个活动可以参加, 每个活动区间用[start, end]表示开始和结束时间, 请问你今天最多能参加几个活动？")]),t._v(" "),s("h3",{attrs:{id:"贪心求解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪心求解"}},[t._v("#")]),t._v(" 贪心求解")]),t._v(" "),s("p",[t._v("大家可以先想一想，有什么思路？")]),t._v(" "),s("ol",[s("li",[t._v("可以每次选择可选区间中开始最早的那个？")])]),t._v(" "),s("p",[t._v("不行, 因为可能有的区间开始很早, 结束很晚, 比如[0,10], 使我们错过了很多短区间比如[1,2],[2,3]")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("可以每次选择可选区间中最短的那个？")])]),t._v(" "),s("p",[t._v("不行, 直接看上面这个例子[[1,3], [2,4], [3,6]], 这样的话会选择出 [1, 3], [2, 4], 并不能保证他们不相交")]),t._v(" "),s("h4",{attrs:{id:"正确思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确思路"}},[t._v("#")]),t._v(" 正确思路")]),t._v(" "),s("ol",[s("li",[t._v("从可选区间intvs里, 选择一个end最小的区间x")]),t._v(" "),s("li",[t._v("把所有与x相交的区间从intvs中剔除")]),t._v(" "),s("li",[t._v("重复1,2, 直到intvs为空, 之前选出的各种区间x， 就是我们要求的结果")])]),t._v(" "),s("p",[t._v("把整个思路转换成代码的话, 因为我们要选出end最小的区间,  所以我们可以先对区间根据end升序排序.")]),t._v(" "),s("ol",[s("li",[t._v("选出end最小的区间")])]),t._v(" "),s("p",[t._v("由于我们已经排过序了, 所以直接选择第一个区间即可")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("剔除与x相交的区间")])]),t._v(" "),s("p",[t._v("这一步就没第一步那么简单了, 这里建议大家画个图看看")]),t._v(" "),s("ul",[s("li",[t._v("代码如下")])]),t._v(" "),s("p",[t._v("看一下区间调度.js")]),t._v(" "),s("h3",{attrs:{id:"区间调度算法的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区间调度算法的应用"}},[t._v("#")]),t._v(" 区间调度算法的应用")]),t._v(" "),s("ol",[s("li",[t._v("无重叠区间")])]),t._v(" "),s("p",[t._v("给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。")]),t._v(" "),s("p",[t._v("注意:")]),t._v(" "),s("p",[t._v("可以认为区间的终点总是大于它的起点。\n区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。\n示例 1:")]),t._v(" "),s("p",[t._v("输入: [ [1,2], [2,3], [3,4], [1,3] ]")]),t._v(" "),s("p",[t._v("输出: 1")]),t._v(" "),s("h2",{attrs:{id:"解释-移除-1-3-后-剩下的区间没有重叠。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释-移除-1-3-后-剩下的区间没有重叠。"}},[t._v("#")]),t._v(" 解释: 移除 [1,3] 后，剩下的区间没有重叠。")]),t._v(" "),s("p",[t._v("示例 2:")]),t._v(" "),s("p",[t._v("输入: [ [1,2], [1,2], [1,2] ]")]),t._v(" "),s("p",[t._v("输出: 2")]),t._v(" "),s("h2",{attrs:{id:"解释-你需要移除两个-1-2-来使剩下的区间没有重叠。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释-你需要移除两个-1-2-来使剩下的区间没有重叠。"}},[t._v("#")]),t._v(" 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。")]),t._v(" "),s("p",[t._v("示例 3:")]),t._v(" "),s("p",[t._v("输入: [ [1,2], [2,3] ]")]),t._v(" "),s("p",[t._v("输出: 0")]),t._v(" "),s("p",[t._v("解释: 你不需要移除任何区间，因为它们已经是无重叠的了。")]),t._v(" "),s("ul",[s("li",[t._v("解答")])]),t._v(" "),s("p",[t._v("刚才咱们已经找到了最多有几个互不相交的区间数n, 那么总数减去n就可以了~")]),t._v(" "),s("p",[t._v("咱们来从头写一遍, 就当是复习了")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("eraseOverlapIntervals")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("intervals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sortArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" intervals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sortArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" intervals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意, 这里题目说了区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠, 所以应该是item[0] >= xEnd")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" xEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            xEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" intervals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("用最少的箭头射爆气球")])]),t._v(" "),s("p",[t._v("在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以y坐标并不重要，因此只要知道开始和结束的x坐标就足够了。开始坐标总是小于结束坐标。平面内最多存在104个气球。")]),t._v(" "),s("p",[t._v("一支弓箭可以沿着x轴从不同点完全垂直地射出。在坐标x处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("p",[t._v("输入:\n[[10,16], [2,8], [1,6], [7,12]]")]),t._v(" "),s("p",[t._v("输出:\n2")]),t._v(" "),s("p",[t._v("解释:\n对于该样例，我们可以在x = 6（射爆[2,8],[1,6]两个气球）和 x = 11（射爆另外两个气球）。")]),t._v(" "),s("ul",[s("li",[t._v("解答")])]),t._v(" "),s("p",[t._v("这个问题和区间调度算法又是非常的类似, 大家稍微转换一下思路即可。")]),t._v(" "),s("p",[t._v("如果最多有n个不重叠的空间, 那么就至少需要n个箭头穿透所有空间，所以我们要求的其实就是最多有几个不重叠的空间。")]),t._v(" "),s("p",[t._v("来看一下这张图")]),t._v(" "),s("p",[t._v("但是这个题里的描述, 边界重叠后, 箭头是可以一起射爆的, 所以两个区间的边界重叠也算是区间重叠。")])])}),[],!1,null,null,null);s.default=r.exports}}]);