(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{606:function(t,e,_){"use strict";_.r(e);var v=_(17),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"个人总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#个人总结"}},[t._v("#")]),t._v(" 个人总结")]),t._v(" "),_("p",[t._v("Vue 相关")]),t._v(" "),_("h3",{attrs:{id:"_1-vue-响应式原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-响应式原理"}},[t._v("#")]),t._v(" 1. vue 响应式原理")]),t._v(" "),_("p",[_("code",[t._v("数据劫持")]),t._v(" + "),_("code",[t._v("发布订阅")])]),t._v(" "),_("p",[t._v("涉及到Vue 中的3个核心类")]),t._v(" "),_("ul",[_("li",[t._v("Observer 给data中的各个属性添加getter 和 setter 依赖收集 和 派发更新")]),t._v(" "),_("li",[t._v("Dep  收集 dep.notify() 通知")]),t._v(" "),_("li",[t._v("Watcher 触发更新")])]),t._v(" "),_("h3",{attrs:{id:"_2-diff-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-diff-算法"}},[t._v("#")]),t._v(" 2. diff 算法")]),t._v(" "),_("p",[t._v("diff过程整体策略：深度优先，同层比较。")]),t._v(" "),_("p",[t._v("整体策略：深度优先，同层比较")]),t._v(" "),_("ol",[_("li",[t._v("Vue进行diff时，调用patch打补丁函数，一边比较一边给真实的DOM打补丁")]),t._v(" "),_("li",[t._v("Vue对比节点，当节点元素类型相同，但是className不同时，认为是不同类型的元素，删除重新创建")]),t._v(" "),_("li",[t._v("采用从两端到中间的方式，旧集合和新集合两端各存在两个指针，两两进行比较，如果匹配上了就按照新集合去调整旧集合，每次对比结束后，指针向队列中间移动；")])]),t._v(" "),_("p",[t._v("如果oldVnode有子节点而VNode没有，则删除子节点")]),t._v(" "),_("p",[t._v("如果oldVnode没有子节点而VNode有，则将VNode的子节点插入")]),t._v(" "),_("p",[t._v("如果两者都有子节点，则执行updateChildren函数比较子节点")]),t._v(" "),_("p",[t._v("vue 的diff算法是个深度优先算法。")]),t._v(" "),_("p",[t._v("首先，我们拿到新旧节点的数组，然后初始化四个指针，分别指向新旧节点的开始位置和结束位置，进行两两对比，若是 新的开始节点和旧开始节点相同，则都向后面移动，若是结尾节点相匹配，则都前移指针。若是新开始节点和旧结尾节点匹配上了，则会将旧的结束节点移动到旧的开始节点前。若是旧开始节点和新的结束节点相匹配，则会将旧开始节点移动到旧结束节点的后面。若是上述节点都没配有匹配上，则会进行一个兜底逻辑的判断，判断开始节点是否在旧节点中，若是存在则复用，若是不存在则创建。最终跳出循环，进行裁剪或者新增，若是旧的开始节点小于旧的结束节点，则会删除之间的节点，反之则是新增新的开始节点到新的结束节点。")]),t._v(" "),_("p",[t._v("ps: vue 的diff算法是深度优先遍历还是广度优先算法，在patchVnode过程中会调用updateChildren，所以 vue 的diff算法是个深度优先算法。")]),t._v(" "),_("p",[t._v("https://www.cnblogs.com/wind-lanyan/p/9061684.html")]),t._v(" "),_("h3",{attrs:{id:"_3-key-的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-key-的作用"}},[t._v("#")]),t._v(" 3. key 的作用")]),t._v(" "),_("p",[t._v("key 是给每一个 vnode 的唯一 id,可以依靠 key,更准确,更快的拿到 oldVnode 中对应的 vnode 节点")]),t._v(" "),_("p",[t._v("key 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。")]),t._v(" "),_("p",[t._v("key 的作用主要是 为了实现高效的更新虚拟 DOM，提高性能。其原理是vue在patch的过程中通过key可以精准的判断两个节点是否是同一个，从而避免频繁的更新元素，使得整个patch过程更加高效，减少DOM操作量，提高性能。")]),t._v(" "),_("h3",{attrs:{id:"_4-computed-和-watch-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-computed-和-watch-区别"}},[t._v("#")]),t._v(" 4. computed 和 watch 区别")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("computed 支持缓存， 只有依赖的数据发生改变，才会重新计算")])]),t._v(" "),_("li",[_("p",[t._v("computed 不支持异步")])]),t._v(" "),_("li",[_("p",[t._v("computed 属性值是函数时，默认会走get方法，函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。")])]),t._v(" "),_("li",[_("p",[t._v("watch 不支持缓存，数据发生改变直接触发相应的操作")])]),t._v(" "),_("li",[_("p",[t._v("支持异步")])]),t._v(" "),_("li",[_("p",[t._v("监听的函数接收两个参数，第一个参数是新值；第二个参数是旧值；")])]),t._v(" "),_("li",[_("p",[t._v("监听的数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，\n　　immediate：组件加载立即触发回调函数执行，\n　　deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。")])])]),t._v(" "),_("h3",{attrs:{id:"_5-nexttick"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-nexttick"}},[t._v("#")]),t._v(" 5. nextTick")]),t._v(" "),_("p",[t._v("在下次 DOM 更新之后执行延迟回调。")]),t._v(" "),_("p",[t._v("原理： 异步 + 事件循环")]),t._v(" "),_("h3",{attrs:{id:"_6-单向数据流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-单向数据流"}},[t._v("#")]),t._v(" 6. 单向数据流")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("父级 prop 的更新会向下流动到子组件中，每次父组件发生更新，子组件 所有的 prop 都会刷新为最新的值")])]),t._v(" "),_("li",[_("p",[t._v("数据从父组件传递给子组件，只能单向绑定，子组件内部不能直接修改 父组件传递过来的数据，（可以使用 data 和 computed 解决）")])])]),t._v(" "),_("h3",{attrs:{id:"_7-this-set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-this-set"}},[t._v("#")]),t._v(" 7. this.$set")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("向响应式对象中添加一个属性，并确保这个新属性同样是响应式的")])]),t._v(" "),_("li",[_("p",[t._v("它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性")])])]),t._v(" "),_("h3",{attrs:{id:"_8-双向绑定、组件通信、插槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-双向绑定、组件通信、插槽"}},[t._v("#")]),t._v(" 8. 双向绑定、组件通信、插槽")]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.cn/post/6881907432541552648#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue源码解析之diff原理"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);