(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{260:function(e,t,o){"use strict";o.r(t);var s=o(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"visual-studio-code-扩展-extending-visual-studio-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-扩展-extending-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Visual Studio Code 扩展   Extending Visual Studio Code")]),e._v(" "),o("p",[e._v("如果你对扩展VS Code有兴趣，你就应该看看这篇文档。在这篇文档里将对VS Code的插件做一个概括性的描述，并且将教你快速的制作你的第一个vs Code插件。如果你对更深入的插件制作内容有兴趣，那么你可以阅读这篇 "),o("router-link",{attrs:{to:"/docs/extensions/our-approach.html"}},[e._v("文章")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you are interested in extending VS Code, you are in the right place. Here we present an outline of the VS Code extensibility documentation and how to quickly build your first VS Code extension.  If you're curious about our design approach to extensibility for VS Code, you can read about it "),o("router-link",{attrs:{to:"/docs/extensions/our-approach.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("如果你仅仅是想使用已经存在的插件，可以阅读这篇"),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("文档")]),e._v("， 这篇文档将展示如何从VS Code插件"),o("a",{attrs:{href:"https://marketplace.visualstudio.com/VSCode",target:"_blank",rel:"noopener noreferrer"}},[e._v("商店"),o("OutboundLink")],1),e._v("里寻找并安装插件。")],1),e._v(" "),o("p",[e._v("If you just want to use existing extensions, see the "),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(" topic where we show you how to find and install extensions from the VS Code "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/VSCode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marketplace"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("小贴士:")]),e._v(" 别忘了除了插件以外，我们还有很多种方法去 "),o("router-link",{attrs:{to:"/docs/customization/overview.html"}},[e._v("定制")]),e._v(" VS Code而不用写一行代码。包括添加"),o("router-link",{attrs:{to:"/docs/customization/themes.html"}},[e._v("主题")]),e._v(", "),o("router-link",{attrs:{to:"/docs/customization/colorizer.html"}},[e._v("基础语言支持")]),e._v(", 和 "),o("router-link",{attrs:{to:"/docs/customization/userdefinedsnippets.html"}},[e._v("用户定义代码段")]),e._v("。")],1)]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" Don't forget there are several ways to "),o("router-link",{attrs:{to:"/docs/customization/overview.html"}},[e._v("customize")]),e._v(" VS Code without writing an extension.  This includes adding "),o("router-link",{attrs:{to:"/docs/customization/themes.html"}},[e._v("Themes")]),e._v(", "),o("router-link",{attrs:{to:"/docs/customization/colorizer.html"}},[e._v("basic Language Support")]),e._v(", and "),o("router-link",{attrs:{to:"/docs/customization/userdefinedsnippets.html"}},[e._v("Snippets")]),e._v(" without writing a single line of code.")],1)]),e._v(" "),o("p",[e._v("所有的VS Code插件在发布（注册），激活（加载）时共享使用公共的模块去访问VS Code插件API。值得一提的是两种特殊的VS Code插件，语言服务和调试器，他们有自已独有的额外协议，这些协议在他们单独的文档中说明。")]),e._v(" "),o("ol",[o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#extensions"}},[e._v("插件")]),e._v(" - 基础构建模块")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#language-servers"}},[e._v("语言服务")]),e._v(" - 针对于CPU占用率较高和IO占用率较高的加强任务")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#debuggers"}},[e._v("调试器")]),e._v(" - 连接一个外部的调试器")],1)]),e._v(" "),o("p",[e._v("All VS Code extensions share a common model of contribution (registration), activation (loading) and access to the VS Code extensibility API.  There are however two special flavors of VS Code extensions, language servers and debuggers, which have their own additional protocols and are covered in their own sections of the documentation.")]),e._v(" "),o("ol",[o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#extensions"}},[e._v("Extensions")]),e._v(" - the base building block")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#language-servers"}},[e._v("Language Servers")]),e._v(" - for high cost IO or CPU intensive tasks")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/extensions/overview.html#debuggers"}},[e._v("Debuggers")]),e._v(" - wire up an external debugger")],1)]),e._v(" "),o("h2",{attrs:{id:"插件-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#插件-extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件  Extensions")]),e._v(" "),o("p",[e._v("所有的插件在激活时都运行在我们的一个共享的插件宿主进程。这种单独的进程模型能确保VS Code一直保持灵敏的响应")]),e._v(" "),o("p",[e._v("All extensions when activated run in our shared extension host process.  This separate process for extensions ensures that VS Code remains responsive through-out.")]),e._v(" "),o("p",[e._v("插件包含了以下组件的支持：")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("激活")]),e._v(" - 当检测到指定的文件类型，或者指定的文件存在，或者通过命令面板或者键盘快捷键选中一条命令时加载插件")]),e._v(" "),o("li",[o("strong",[e._v("编辑器")]),e._v(" - 用来处理编辑器的内容 - 读和控制文本, 使用选择区域")]),e._v(" "),o("li",[o("strong",[e._v("工作空间")]),e._v(" - 访问打开的文件, 状态栏, 信息提示等")]),e._v(" "),o("li",[o("strong",[e._v("事件")]),e._v(" - 连接编辑器的生命周期，类似：打开，关闭，修改等等")]),e._v(" "),o("li",[o("strong",[e._v("高级编辑器")]),e._v(" - 为高级语言提供包括智能感知，预览, 悬停, 诊断以及更多的支持")])]),e._v(" "),o("p",[e._v("Extensions include support for:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Activation")]),e._v(" - load an extension when a specific file type is detected, when a specific file exists, or when a command is selected via the Command Palette or a key combination")]),e._v(" "),o("li",[o("strong",[e._v("Editor")]),e._v(" - work with the editor's content - read and manipulate text, leverage selection(s)")]),e._v(" "),o("li",[o("strong",[e._v("Workspace")]),e._v(" - access working files, the status bar, information messages and more")]),e._v(" "),o("li",[o("strong",[e._v("Eventing")]),e._v(" - connect to the editor life-cycle events such as: open, close, change, and more")]),e._v(" "),o("li",[o("strong",[e._v("Evolved editing")]),e._v(" - create providers for rich language support including IntelliSense, Peek, Hover, Diagnostics and much, much more")])]),e._v(" "),o("p",[e._v("我们有两个手把手的例子演示来让你学习插件的基础开发")]),e._v(" "),o("ol",[o("li",[o("strong",[o("router-link",{attrs:{to:"/docs/extensions/example-hello-world.html"}},[e._v("Hello World")])],1),e._v(" - 生成一个基础的插件, 理解插件的目录结构, 插件清单, 学习插件怎样激活，运行，调试和在本地安装。")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/docs/extensions/example-word-count.html"}},[e._v("Word Count")])],1),e._v(" - 学习基于指定的文件类型激活插件, 更新状态栏, 响应文本编辑器的修改, 当文件关闭的时候怎样去释放插件。")])]),e._v(" "),o("p",[e._v("We have two end-to-end walkthroughs to get you going on extension basics:")]),e._v(" "),o("ol",[o("li",[o("strong",[o("router-link",{attrs:{to:"/docs/extensions/example-hello-world.html"}},[e._v("Hello World")])],1),e._v(" - generate a basic extension, understand an extension's folder structure, the extension manifest, learn how activation works, run and debug your extension and install it locally.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/docs/extensions/example-word-count.html"}},[e._v("Word Count")])],1),e._v(" - activate based on a specific file type, update the status bar, respond to changes in the text editor, and dispose your extension when moving off the file.")])]),e._v(" "),o("h2",{attrs:{id:"语言服务-language-servers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#语言服务-language-servers","aria-hidden":"true"}},[e._v("#")]),e._v(" 语言服务  Language Servers")]),e._v(" "),o("p",[e._v("语言服务将为你的插件创建一个专用的进程。当你的插件占用了很高的CPU或者IO以至于拖慢了其他插件时，这是一个很有用的设计。那些在所有的文件上做处理的任务通常都有这些特点，例如代码检查或者静态分析。")]),e._v(" "),o("p",[e._v("在这里可以找到更多关于"),o("router-link",{attrs:{to:"/docs/extensions/example-language-server.html"}},[e._v("语言服务")]),e._v("的资料。")],1),e._v(" "),o("p",[e._v("Language servers let you create a dedicated process for your extension.  This is a useful design choice for your extension when your extension runs high cost CPU or IO intensive tasks which could slow other extensions.  This is common for tasks that work across all files in a workspace e.g. linters or static analysis suites.")]),e._v(" "),o("p",[e._v("Find out more about "),o("router-link",{attrs:{to:"/docs/extensions/example-language-server.html"}},[e._v("language servers")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"调试器-debuggers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试器-debuggers","aria-hidden":"true"}},[e._v("#")]),e._v(" 调试器 Debuggers")]),e._v(" "),o("p",[e._v("创建一个调试服务用来连接一个任一语言的调试器到VS Code")]),e._v(" "),o("p",[e._v("在这里可以找到更多关于集成"),o("router-link",{attrs:{to:"/docs/extensions/example-debuggers.html"}},[e._v("调试器")]),e._v("的信息。")],1),e._v(" "),o("p",[e._v("最简单的方法是通过插件"),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("商店")]),e._v("去看已经发布的VS Code插件，你可以找到一些很有用的插件，安装他们并且了解他们来想办法扩展你自己开发环境的VS Code。")],1),e._v(" "),o("p",[e._v("Connecting a debugger written for any language to VS Code is possible through the creation of a debug service.")]),e._v(" "),o("p",[e._v("Find out more about integrating "),o("router-link",{attrs:{to:"/docs/extensions/example-debuggers.html"}},[e._v("debuggers")]),e._v(".")],1),e._v(" "),o("p",[e._v("The easiest way to see VS Code extensions in action is via the "),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(".  You can browse for useful extensions, install them to try them out and get an idea how you might extend VS Code for your own development scenarios.")],1),e._v(" "),o("h2",{attrs:{id:"编写一个插件-writing-an-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#编写一个插件-writing-an-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" 编写一个插件  Writing an Extension")]),e._v(" "),o("p",[e._v("你可以用TypeScript或者JavaScript来编写一个插件。VS Code提供了一个一流的插件开发体验，你可以用VS Code自己完成"),o("router-link",{attrs:{to:"/docs/extensions/debugging-extensions.html"}},[e._v("开发, 构建, 运行, 测试 和 调试")]),e._v("的所有环节。")],1),e._v(" "),o("p",[e._v("Extensions can be written in either TypeScript or JavaScript.  VS Code offers a first class extension development experience where you can "),o("router-link",{attrs:{to:"/docs/extensions/debugging-extensions.html"}},[e._v("develop, build, run, test and debug")]),e._v(" all from within VS Code itself.")],1),e._v(" "),o("h2",{attrs:{id:"安装和分享-install-and-share"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装和分享-install-and-share","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装和分享  Install and Share")]),e._v(" "),o("p",[e._v("一旦你拥有了一个可以正常工作的插件，你可以"),o("router-link",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("安装或者分享给其他人")]),e._v("。我们支持本地安装，私有分享，或者发布到公共的"),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("插件商店")]),e._v("。")],1),e._v(" "),o("p",[e._v("Once you have a working extension, you can "),o("router-link",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("install it or share it with others")]),e._v(".   We support local installation, private sharing, or publishing to the public "),o("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"测试插件-testing-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#测试插件-testing-extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" 测试插件  Testing Extensions")]),e._v(" "),o("p",[e._v("我们也对插件的"),o("router-link",{attrs:{to:"/docs/extensions/testing-extensions.html"}},[e._v("编写、运行和测试")]),e._v("有完美的支持。你可以很容易创建一个针对调用的所有VS Code API的集成测试，并且在一个运行中的VS Code实例中测试你的代码。")],1),e._v(" "),o("p",[e._v("We also have great support for "),o("router-link",{attrs:{to:"/docs/extensions/testing-extensions.html"}},[e._v("writing and running tests")]),e._v(" for your extension.  You can easily create integration tests which call the VS Code APIs and test your code in a running VS Code instance.")],1),e._v(" "),o("h2",{attrs:{id:"下一步-next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下一步-next-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" 下一步  Next Steps")]),e._v(" "),o("ul",[o("li",[o("p",[o("router-link",{attrs:{to:"/docs/extensions/example-hello-world.html"}},[e._v("你的第一个插件")]),e._v(" - 试着去创建一个简单的Hello World插件")],1)]),e._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"/docs/extensionAPI/overview.html"}},[e._v("插件API")]),e._v(" - 学习VS Code插件API")],1)]),e._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"/docs/tools/samples.html"}},[e._v("示例")]),e._v(" - 你可以复习和构建的插件示例列表")],1)]),e._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"/docs/extensions/example-hello-world.html"}},[e._v("Your First Extension")]),e._v(" - Try creating a simple Hello World extension")],1)]),e._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"/docs/extensionAPI/overview.html"}},[e._v("Extension API")]),e._v(" - Learn about the VS Code extensibility APIs")],1)]),e._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"/docs/tools/samples.html"}},[e._v("Samples")]),e._v(" - A list of extension samples you can review and build")],1)])]),e._v(" "),o("h2",{attrs:{id:"常见问题-common-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#常见问题-common-questions","aria-hidden":"true"}},[e._v("#")]),e._v(" 常见问题 Common Questions")]),e._v(" "),o("p",[e._v("无")]),e._v(" "),o("p",[e._v("Nothing yet")])])},[],!1,null,null,null);t.default=n.exports}}]);