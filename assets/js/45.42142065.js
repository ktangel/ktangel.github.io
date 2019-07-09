(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{267:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"扩展（以下简称插件）编写的基本方法和原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展（以下简称插件）编写的基本方法和原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展（以下简称插件）编写的\b基本方法和原则")]),t._v(" "),s("p",[t._v("VS Code 的插件 API 遵循一些会贯穿到整个 API 的基本方法和原则。")]),t._v(" "),s("h2",{attrs:{id:"promises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promises","aria-hidden":"true"}},[t._v("#")]),t._v(" Promises")]),t._v(" "),s("p",[t._v("VS Code API 采用 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("promises"),s("OutboundLink")],1),t._v("来进行异步操作.在插件当中，可以返回任何类型的 promise，比如ES6, WinJS, A+ 等等。")]),t._v(" "),s("p",[t._v("API当中，"),s("code",[t._v("Thenable")]),t._v("类型用以依赖某个 promise 库。"),s("code",[t._v("Thenable")]),t._v(" 是"),s("code",[t._v("then")]),t._v("属性的“公分母”。")]),t._v(" "),s("p",[t._v("大部分的promise\b使用都不是必要的，当 VS Code 运行一个插件时，可以像处理 "),s("em",[t._v("result type")]),t._v(" 的一个"),s("code",[t._v("Thenable")]),t._v("来处理\b "),s("em",[t._v("result type")]),t._v(" 他本身。当 promise 没必要\b用上时，API 会通过"),s("code",[t._v("or")]),t._v("-types 给出提示。")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("provideNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Thenable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"cancellationtoken-取消标志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cancellationtoken-取消标志","aria-hidden":"true"}},[t._v("#")]),t._v(" CancellationToken 取消标志")]),t._v(" "),s("p",[t._v("不稳定的状态经常触发操作\b异步操作，\b\b状态有可能在异步操作结束前改变。举个例子，智能感知开始计算，但是用户继续输入使得异步操作“过期“了。")]),t._v(" "),s("p",[t._v("给此类行为的API都会被传递"),s("code",[t._v("CancellationToken")]),t._v("参数，我们可以通过"),s("code",[t._v("isCancellationRequested")]),t._v("来检查取消状态，或者取消时通过"),s("code",[t._v("onCancellationRequested")]),t._v("得到通知。\b取消标志通常是函数调用的最后\b一个可选参数。")]),t._v(" "),s("h2",{attrs:{id:"disposalibity-释放模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disposalibity-释放模式","aria-hidden":"true"}},[t._v("#")]),t._v(" Disposalibity 释放模式")]),t._v(" "),s("p",[t._v("VS Code API \b在其内部资源上使用 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Dispose_pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("释放模式"),s("OutboundLink")],1),t._v("。这涉及到事件监听，命令行，UI交互，还有各种语言贡献。")]),t._v(" "),s("p",[t._v("在实例内部，"),s("code",[t._v("setStatusBarMessage(value: string)")]),t._v("返回一个可释放类型"),s("code",[t._v("Disposable")]),t._v("，在调用"),s("code",[t._v("dispose")]),t._v("方法的时候它再一次移除了消息。")]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("VS Code API 内的事件是通过调用监听器函数来订阅的函数。订阅函数返回一个可释放类型"),s("code",[t._v("Disposable")]),t._v("，他会把 dispose 方法上的监听器给移除掉。\nEvents in the VS Code API are exposed as functions which you call with a listener-function to subscribe. Calls to subscribe return a "),s("code",[t._v("Disposable")]),t._v(" which removes the event listener upon dispose.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("listener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“It happened”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始监听")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" subscription "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fsWatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDidDelete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更多")]),t._v("\nsubscriptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止监听")]),t._v("\n")])])]),s("p",[t._v("事件名采用"),s("code",[t._v("on[Will|Did]VerNoun")]),t._v("结构，意思是事件是否将要发生 "),s("em",[t._v("(onWill)")]),t._v(" 或者已经发生 "),s("em",[t._v("(onDid)")]),t._v(" ，现在发生 "),s("em",[t._v("(verb)")]),t._v(" ，还有上下文 "),s("em",[t._v("(noun)")]),t._v(" （除非上下文明确）。")]),t._v(" "),s("p",[t._v("一个 VS Code API 的例子是"),s("code",[t._v("window.onDidChangeActiveTextEditor")]),t._v("事件会在活动文本编辑器 "),s("em",[t._v("（noun）")]),t._v(" 已经（"),s("em",[t._v("onDid")]),t._v("）改变了（"),s("em",[t._v("verb")]),t._v("）")]),t._v(" "),s("h2",{attrs:{id:"使用-node-js-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-node-js-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Node.js 模块")]),t._v(" "),s("p",[t._v("你的插件允许在运行时依赖"),s("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v("模块。和一个 node 模块本身相似，还可以增加一些依赖到 "),s("router-link",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[s("code",[t._v("package.json")]),t._v(" 插件清单")]),t._v("的"),s("code",[t._v("dependencies")]),t._v("字段上去。")],1),t._v(" "),s("h3",{attrs:{id:"安装和打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和打包","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装和打包")]),t._v(" "),s("p",[t._v("你安装VS Code插件的时候，VS Code "),s("strong",[t._v("不会")]),t._v(" 自动安装其依赖，所以你必须在发布前执行"),s("code",[t._v("npm install")]),t._v("。插件的安装包会包含他内在的所有依赖。你可以运行"),s("code",[t._v("vsce ls")]),t._v("去枚举出所有"),s("code",[t._v("vsce")]),t._v("将会包含进安装包的文件。")]),t._v(" "),s("h2",{attrs:{id:"下一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步","aria-hidden":"true"}},[t._v("#")]),t._v(" 下一步")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[t._v("插件清单文件")]),t._v(" - VS Code package.json 插件清单文件指南")],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/extensionAPI/extension-points.html"}},[t._v("贡献关键点")]),t._v(" - VS Code 贡献关键点 指南")],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/extensionAPI/activation-events.html"}},[t._v("激活事件")]),t._v(" - VS Code 激活事件 指南")],1)]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h4",{attrs:{id:"问：我可以使用原生-node-js模块吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问：我可以使用原生-node-js模块吗","aria-hidden":"true"}},[t._v("#")]),t._v(" 问：我可以使用原生 Node.js模块吗")]),t._v(" "),s("p",[s("strong",[t._v("答：")]),t._v(" 一个 VS Code 插件安装包包含许多依赖。意味着如果你在 Windows 开发插件而且发布插件时依赖原生 Node.js 模块，那么你的插件会包含 Windows 上编译好的原生依赖。OS X 、Linux用户就不能使用该插件。")]),t._v(" "),s("p",[t._v("此刻奏效的唯一办法是把四个平台（Windows X86, X64, Linux, OSX）的二进制文件都放进插件，并且插件包含动态加载正确二进制文件的代码。")])])},[],!1,null,null,null);e.default=n.exports}}]);