(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{222:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"node-js-applications-with-vs-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-js-applications-with-vs-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js Applications with VS Code")]),e._v(" "),o("h1",{attrs:{id:"用vs-code开发node-js应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#用vs-code开发node-js应用","aria-hidden":"true"}},[e._v("#")]),e._v(" 用VS Code开发Node.js应用")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" is a platform for building fast and scalable server applications using JavaScript. Node.js is the runtime and "),o("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM"),o("OutboundLink")],1),e._v(" is the Package Manager for Node.js modules.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v("是一个使用JavaScript开发和部署快速且规模化的服务端应用的平台。Node.js是运行时，而"),o("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM"),o("OutboundLink")],1),e._v(" 是Node.js模块的包管理器。")]),e._v(" "),o("p",[e._v("To get started, "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Node.js for your platform"),o("OutboundLink")],1),e._v(". The Node Package Manager is included in the Node.js distribution. You'll need to open a new terminal (command prompt) for "),o("code",[e._v("npm")]),e._v(" to be on your PATH.")]),e._v(" "),o("p",[e._v("开始之前，你需要先"),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装一个适合你的操作系统的Node.js"),o("OutboundLink")],1),e._v("。Node包管理器（即npm）已经内置在了这个Node.js发行版中。你需要打开终端（控制台）设置"),o("code",[e._v("npm")]),e._v("的环境变量。")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip!")]),e._v(" You can download both the TypeScript and JavaScript versions of the sample application created in this walkthrough from the "),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-samples/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-samples"),o("OutboundLink")],1),e._v(" repository.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip!")]),e._v(" 你可以从"),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-samples/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode-samples"),o("OutboundLink")],1),e._v(" 这个仓库里下载JavaScript和TypeScript的示例程序。")])]),e._v(" "),o("h2",{attrs:{id:"express"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#express","aria-hidden":"true"}},[e._v("#")]),e._v(" Express")]),e._v(" "),o("p",[o("a",{attrs:{href:"http://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),o("OutboundLink")],1),e._v(" is a very popular application framework for building and running Node.js applications. You can scaffold a new Express application using the Express Generator tool, which is typically installed globally on your computer.")]),e._v(" "),o("p",[o("a",{attrs:{href:"http://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),o("OutboundLink")],1),e._v("是一个用于构建和运行Node.js应用的非常流行的框架。你可以用Express Generator Tool去创建一个新的Node.js应用，这个脚手架通常全局安装在你的计算机上。")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g express-generator\n")])])]),o("p",[e._v("We can now scaffold a new Express application called "),o("code",[e._v("myExpressApp")]),e._v(".")]),e._v(" "),o("p",[e._v("我们可以创建一个新的名为"),o("code",[e._v("myExpressApp")]),e._v("的Express应用")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("express myExpressApp\n")])])]),o("p",[e._v("This creates a new folder called "),o("code",[e._v("myExpressApp")]),e._v(" with the contents of your application.  To install all of the application's dependencies, go to the new folder and execute "),o("code",[e._v("npm install")]),e._v(":")]),e._v(" "),o("p",[e._v("这条命令将创建一个新的叫做"),o("code",[e._v("myExpressApp")]),e._v("的目录，里面是你的应用。为了安装这个应用所有的依赖项，你需要进入这个新创建的目录然后运行："),o("code",[e._v("npm install")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" myExpressApp\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),o("p",[e._v("At this point, we should test that our application runs. The generated Express application has a "),o("code",[e._v("package.json")]),e._v(" file which includes a "),o("code",[e._v("start")]),e._v(" script to run "),o("code",[e._v("node ./bin/www")]),e._v(".  This will start the Node.js application running.")]),e._v(" "),o("p",[e._v("这时候，你应该测试一下你的应用能否跑起来。Express应用都有一个"),o("code",[e._v("package.json")]),e._v("文件，里面包含了"),o("code",[e._v("start")]),e._v("脚本，用来运行"),o("code",[e._v("node ./bin/www")]),e._v("。这将让你的Node.js应用跑起来。")]),e._v(" "),o("p",[e._v("From a terminal in the Express application folder, run:")]),e._v(" "),o("p",[e._v("在这个Express应用的目录里打开一个终端，运行：")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n")])])]),o("p",[e._v("The Node.js web server will start and you can browse to "),o("code",[e._v("http://localhost:3000")]),e._v(" to see the running application.")]),e._v(" "),o("p",[e._v("Node.js Web服务器将会开启，你可以通过访问"),o("code",[e._v("http://localhost:3000")]),e._v("看到这个跑起来的应用。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/express.png",alt:"Your first Node Express App"}})]),e._v(" "),o("h2",{attrs:{id:"great-code-editing-experiences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#great-code-editing-experiences","aria-hidden":"true"}},[e._v("#")]),e._v(" Great Code Editing Experiences")]),e._v(" "),o("h2",{attrs:{id:"极好的代码编辑体验"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#极好的代码编辑体验","aria-hidden":"true"}},[e._v("#")]),e._v(" 极好的代码编辑体验")]),e._v(" "),o("p",[e._v("Close the browser and from a terminal in the "),o("code",[e._v("myExpressApp")]),e._v(" folder, stop the Node.js server by pressing "),o("code",[e._v("kbstyle(CTRL+C)")]),e._v(".")]),e._v(" "),o("p",[e._v("关掉你的浏览器，在"),o("code",[e._v("myExpressApp")]),e._v("目录的终端里用"),o("code",[e._v("kbstyle(CTRL+C)")]),e._v("停止Node.js服务器。")]),e._v(" "),o("p",[e._v("Now launch VS Code:")]),e._v(" "),o("p",[e._v("现在打开VS Code:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("code "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" You can open files or folders directly from the command line.  The period '.' refers to the current folder, therefore VS Code will start and open the "),o("code",[e._v("myExpressApp")]),e._v(" folder.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" 你可以直接通过命令行打开文件或者目录。这时候，'.'指向整个当前目录，因此VS Code将会运行，并且打开''myExpressApp'目录。")])]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://nodejs.org/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"http://expressjs.com/api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),o("OutboundLink")],1),e._v(" documentation does a great job explaining how to build rich applications using the platform and framework. Visual Studio Code will make you more productive developing these types of applications by providing great code editing and navigation experiences.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://nodejs.org/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" 和 "),o("a",{attrs:{href:"http://expressjs.com/api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),o("OutboundLink")],1),e._v("的文档非常清晰的阐述了如何用这两者去构建富应用。而Visual Studio Code会通过提供极好的编辑体验和提示体验，来帮助你提高对这些富应用的生产力。")]),e._v(" "),o("p",[e._v("VS Code uses the TypeScript compiler to drive its JavaScript language service, which means we can take advantage of what the compiler can infer about your code. For example, let's create a simple string variable in "),o("code",[e._v("app.js")]),e._v(" and send the contents of the string to the console.")]),e._v(" "),o("p",[e._v("VS Code使用TypeScript编译器去驱动其JavaScript语言服务，这意味着我们可以利用TypeScript编译器的能力去分析、推断你的代码。举个栗子，我们可以创建一个简单的字符串变量，然后将这个字符串在控制台中打印出来。")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" msg "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hello world'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nconsole"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("msg"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("Note that when you typed "),o("code",[e._v("console.")]),e._v(" IntelliSense on the "),o("code",[e._v("console")]),e._v(" object was automatically presented to you. When editing JavaScript files, VS Code will automatically provide you with IntelliSense for the DOM.")]),e._v(" "),o("p",[e._v("注意，当你打出了"),o("code",[e._v("console.")]),e._v("的时候，"),o("code",[e._v("console")]),e._v("对象的智能提示就自动的出现在你眼前了。在编辑JavaScript程序的时候，VS Code将自动为你提供DOM的智能提示。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/consoleintellisense.png",alt:"console IntelliSense"}})]),e._v(" "),o("p",[e._v("Also notice that VS Code knows that "),o("code",[e._v("msg")]),e._v(" is a string based on the initialization to "),o("code",[e._v("'hello world'")]),e._v(".  Type "),o("code",[e._v("msg.")]),e._v(" to bring up IntelliSense and you'll see all of the string functions available on "),o("code",[e._v("msg")]),e._v(".")]),e._v(" "),o("p",[e._v("另外你可以注意到，VS Code知道"),o("code",[e._v("msg")]),e._v("是一个字符串，因为你之前用"),o("code",[e._v("'hello world'")]),e._v("来初始化了它。输入"),o("code",[e._v("msg.")]),e._v("可以呼出智能提示，你会看到"),o("code",[e._v("msg")]),e._v("的所有可用的字符串方法。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/stringintellisense.png",alt:"string IntelliSense"}})]),e._v(" "),o("h2",{attrs:{id:"adding-a-jsconfig-json-configuration-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-jsconfig-json-configuration-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding a jsconfig.json Configuration File")]),e._v(" "),o("h2",{attrs:{id:"添加-jsconfig-json-配置文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#添加-jsconfig-json-配置文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加 jsconfig.json 配置文件")]),e._v(" "),o("p",[e._v("You can give even more hints to Visual Studio Code through a configuration file for the workspace (the root folder). Add a new file and name it "),o("code",[e._v("jsconfig.json")]),e._v(" with the following contents:")]),e._v(" "),o("p",[e._v("你可以利用工作空间（项目的根目录）中的配置文件来为VS Code添加更多的提示。创建一个名叫"),o("code",[e._v("jsconfig.json")]),e._v("的新文件，内容如下：")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"compilerOptions"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"target"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"es5"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"module"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"commonjs"')]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("The presence of this file lets VS Code know that it should treat all the files under this root as part of the same project.  The specific "),o("code",[e._v("compilerOptions")]),e._v(" tells VS Code you are writing ES5 compliant code and you want to use the "),o("strong",[e._v("CommonJS")]),e._v(" "),o("a",{attrs:{href:"http://www.commonjs.org/specs/modules/1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("module system"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("这个配置文件可以让VS Code把根目录下的所有文件当做同一个项目的一部分来对待。"),o("code",[e._v("compilerOptions")]),e._v("字段告诉了VS Code：你在编写兼容ES5规范的代码，并且使用"),o("strong",[e._v("CommonJS")]),o("a",{attrs:{href:"http://www.commonjs.org/specs/modules/1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("模块系统"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"typings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#typings","aria-hidden":"true"}},[e._v("#")]),e._v(" Typings")]),e._v(" "),o("p",[e._v("VS Code can use TypeScript definition files (for example "),o("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("node.d.ts")]),o("OutboundLink")],1),e._v(") to provide metadata to VS Code about the JavaScript based frameworks you are consuming in your application. Because TypeScript definition files are written in TypeScript, they can express the data types of parameters and functions, allowing VS Code to provide not only a rich IntelliSense experience, but also warnings when an API is being used incorrectly.")]),e._v(" "),o("p",[e._v("VS Code能够使用TypeScript定义文件（例如"),o("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("node.d.ts")]),o("OutboundLink")],1),e._v("），为VS Code提供你的应用所使用的框架的元数据。由于TypeScript定义文件是用TypeScript编写的，所以它们可以分辨参数数据的类型和函数的类型，这允许了VS Code不仅提供智能提示功能，还可以在你错误的使用了API的时候发出警告。")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/typings/typings",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typings"),o("OutboundLink")],1),e._v(", the type definition manager for TypeScript, makes it easy to search for and install TypeScript definition files into your workspace. This tool can download the requested definitions from a variety of sources, including the "),o("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[e._v("DefinitelyTyped repository"),o("OutboundLink")],1),e._v(". As we did with the express generator, we will install Typings globally using NPM so that you can use the tool in any application you create.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/typings/typings",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typings"),o("OutboundLink")],1),e._v("是TypeScript的类型定义管理器，它可以让我们更容易地搜索和在工作空间中安装TypeScript定义文件。这个工具可以从一个海量源中下载定义文件，包括"),o("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[e._v("DefinitelyTyped repository"),o("OutboundLink")],1),e._v("。就像我们之前安装Express生成器一样，我们将用NPM全局安装Typings，这样你就可以在你的任何应用中使用这个工具。")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g typings\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" Typings has a number of options for configuring where and how definition files are downloaded, from the terminal run "),o("code",[e._v("typings --help")]),e._v(" for more information.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" Typings有许多的配置选项，用于配置定义文件在哪里、通过何种方式下载。在终端中运行："),o("code",[e._v("typings --help")]),e._v("可以看到更多信息。")])]),e._v(" "),o("p",[e._v("Go back to the file "),o("code",[e._v("app.js")]),e._v(" and notice that if you hover over the Node.js global object "),o("code",[e._v("__dirname")]),e._v(", VS Code does not know the type and displays "),o("code",[e._v("any")]),e._v(".")]),e._v(" "),o("p",[e._v("回到"),o("code",[e._v("app.js")]),e._v("这个文件，你会注意到，当鼠标悬浮在Node.js的全局对象"),o("code",[e._v("__dirname")]),e._v("上的时候，VS Code并不知道它的类型，并且显示"),o("code",[e._v("any")]),e._v("。")]),e._v(" "),o("p",[e._v("Now, using the Typings command line, pull down the Node and Express definition files.")]),e._v(" "),o("p",[e._v("现在，使用Typings的命令行，拉取Node和Express的定义文件。")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("typings "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" node --ambient\ntypings "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" express serve-static express-serve-static-core --ambient\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" You can download multiple definition files by combining them on the command line, as you can see from the Express typings above.  We need to install the typings for Express and also it's references.")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip:")]),e._v(" 你可以在一行命令中安装多个类型定义文件，就像上面我们做的那样。我们不仅需要为Express安装类型定义文件，还要为它的引用安装。")])]),e._v(" "),o("p",[e._v("Notice how VS Code now understands what "),o("code",[e._v("__dirname")]),e._v(" is, based on the metadata from the "),o("code",[e._v("node.d.ts")]),e._v(" file. Even more exciting, you can get full IntelliSense against the Node.js framework. For example, you can require "),o("code",[e._v("http")]),e._v(" and get full IntelliSense against the "),o("code",[e._v("http")]),e._v(" class as you type in Visual Studio Code.")]),e._v(" "),o("p",[e._v("你会发现利用"),o("code",[e._v("node.s.ts")]),e._v("文件，VS Code现在已经明白了"),o("code",[e._v("__dirname")]),e._v("是什么类型的。更让人激动的是，你可以在使用Node.js框架的情况下获得完整的智能提示了，当你"),o("code",[e._v("require")]),e._v("一个"),o("code",[e._v("http")]),e._v("模块的时候，你刚在VS Code里输入，一个完整的智能提示就会出现在"),o("code",[e._v("http")]),e._v("旁边。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/intellisense.png",alt:"http IntelliSense"}})]),e._v(" "),o("p",[e._v("You can also write code that references modules in other files. For example, in "),o("code",[e._v("app.js")]),e._v(" we require the "),o("code",[e._v("./routes/index")]),e._v(" module, which exports an "),o("code",[e._v("Express.Router")]),e._v(" class. If you bring up IntelliSense on "),o("code",[e._v("routes")]),e._v(", you can see the shape of the "),o("code",[e._v("Router")]),e._v(" class.")]),e._v(" "),o("p",[e._v("你也可以编写代码，引用在其他文件中的模块试试。举个栗子，在"),o("code",[e._v("app.js")]),e._v("中，我们require了"),o("code",[e._v("./routes/index")]),e._v("模块，这个模块输出了一个"),o("code",[e._v("Express.Router")]),e._v("的类。如果你在"),o("code",[e._v("routes")]),e._v("上呼出智能提示，你就会看到"),o("code",[e._v("Router")]),e._v("类的大致结构。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/moduleintellisense.png",alt:"Express.Router IntelliSense"}})]),e._v(" "),o("h2",{attrs:{id:"debugging-your-node-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-your-node-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Debugging your Node Application")]),e._v(" "),o("h2",{attrs:{id:"为你的node应用debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#为你的node应用debug","aria-hidden":"true"}},[e._v("#")]),e._v(" 为你的Node应用Debug")]),e._v(" "),o("p",[e._v("In order to run and debug your Node.js application from within VS Code, you need to configure how the application will be started. To do this, click on the Debug icon in the View Bar on the left of Visual Studio Code.")]),e._v(" "),o("p",[e._v("为了在VS Code中运行和调试你的Node.js应用，你需要设置应该以何种方式被启动。在VS Code左侧的View这一栏中点击Debug图标。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/debugicon.png",alt:"Debug icon"}})]),e._v(" "),o("p",[e._v("Click on the Configure gear icon at the top of the Debug view to create a default "),o("code",[e._v("launch.json")]),e._v(' file and select "Node.js" as the Debug Environment. This configuration file lets you specify how to start the application, what arguments to pass in, the working directory, and more. When the file is first created, VS Code will look in '),o("code",[e._v("package.json")]),e._v(" for a "),o("code",[e._v("start")]),e._v(" script and will use that value as the "),o("code",[e._v("program")]),e._v(" (which in this case is "),o("code",[e._v("${workspaceRoot}/bin/www")]),e._v(") for the "),o("code",[e._v("Launch")]),e._v(" configuration. A second "),o("code",[e._v("Attach")]),e._v(" configuration is also created to show you how to attach to a running Node application.")]),e._v(" "),o("p",[e._v("在Debug视图上点击齿轮形的图标，创建一个默认的"),o("code",[e._v("launch.json")]),e._v("文件，选择“Node.js”作为调试环境。这个配置文件让你能够设置如何去启动应用、启动的参数、工作目录等等。当文件第一次被创建的时候VS Code会在"),o("code",[e._v("package.json")]),e._v("中寻找"),o("code",[e._v("start")]),e._v("脚本，并且会把"),o("code",[e._v("start")]),e._v("的值当做"),o("code",[e._v("Launch")]),e._v("配置文件的"),o("code",[e._v("program")]),e._v("（当前情况下是"),o("code",[e._v("${workspaceRoot}/bin/www")]),e._v("）。第二个名为"),o("code",[e._v("Attach")]),e._v("的配置文件也会被创建，用于配置连接到运行的Node应用的方式。")]),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/launchjson.png",alt:"launch.json configuration file"}})]),e._v(" "),o("p",[e._v("Take the defaults for everything else. If you do not have "),o("router-link",{attrs:{to:"/docs/editor/codebasics.html#saveauto-save"}},[e._v("Auto Save")]),e._v(" on, save the file by pressing "),o("code",[e._v("kb(workbench.action.files.save)")]),e._v(", and make sure "),o("code",[e._v("Launch")]),e._v(" is selected in the configuration dropdown at the top of the Debug view. Open "),o("code",[e._v("app.js")]),e._v(" and set a breakpoint on the line of code we wrote earlier "),o("code",[e._v("var msg = 'hello world';")]),e._v(" by clicking in the gutter to the left of the line number. Press "),o("code",[e._v("kb(workbench.action.debug.start)")]),e._v(" to start debugging the application. VS Code will start the server in a new terminal and hit the breakpoint we set. From there you can inspect variables, create watches, and step through your code.")],1),e._v(" "),o("p",[e._v("对于其余的选项，使用默认配置即可。如果你没有开启 "),o("router-link",{attrs:{to:"/docs/editor/codebasics.html#saveauto-save"}},[e._v("自动保存")]),e._v(" ，通过输入"),o("code",[e._v("kb(workbench.action.files.save)")]),e._v("来保存文件，并且确保Debug视图中的下拉菜单里的"),o("code",[e._v("Launch")]),e._v("被正确的选择了。打开"),o("code",[e._v("app.js")]),e._v("在"),o("code",[e._v("var msg = 'hello world';")]),e._v("的行号处设置一个断点。 输入"),o("code",[e._v("kb(workbench.action.debug.start)")]),e._v("，开始调试应用。VS Code将会在一个新的终端里开启服务器并在我们设置的断点处暂停。这里你可以审查变量、创建watcher，以及分部调试代码。")],1),e._v(" "),o("p",[o("img",{attrs:{src:"images/nodejs/debugsession.png",alt:"Debug session"}})]),e._v(" "),o("h2",{attrs:{id:"extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),o("h2",{attrs:{id:"扩展"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#扩展","aria-hidden":"true"}},[e._v("#")]),e._v(" 扩展")]),e._v(" "),o("p",[e._v("The community is continually developing more and more valuable extensions for Node.js. Here are some popular extensions that you might find useful.")]),e._v(" "),o("p",[e._v("VS Code的社区正在为Node.js不断开发越来越多的有价值的扩展。\n这里有一些你可能会觉得有用的，同时也很流行的扩展。")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dkundel.vscode-npm-source",target:"_blank",rel:"noopener noreferrer"}},[e._v("View Node Package"),o("OutboundLink")],1),e._v(" - Open a Node.js package repository/documentation straight from VS Code.（直接用VS Code打开Node.js包的仓库/文档）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript (ES6) code snippets"),o("OutboundLink")],1),e._v(" - Snippets for JavaScript in ES6 syntax.（支持ES6语法的JavaScript代码高亮插件）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),o("OutboundLink")],1),e._v(" - Integrates ESLint into VS Code.（在VS Code中集成了ESLint）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSHint"),o("OutboundLink")],1),e._v(" - Integrates JSHint into VS Code.（在VS Code中集成了ESHint）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add JSDoc comments"),o("OutboundLink")],1),e._v(" - Adds "),o("strong",[e._v("JSDoc")]),e._v(" @param and @return tags for selected function signatures in JS and TS.（用于添加包含@param和@return的注释）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettify JSON"),o("OutboundLink")],1),e._v(" - Prettify ugly JSON inside VS Code.（在VS Code里实现JSON的格式化和压缩）")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beautify"),o("OutboundLink")],1),e._v(" - This extension enables running "),o("a",{attrs:{href:"http://jsbeautifier.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("js-beautify"),o("OutboundLink")],1),e._v(" in VS Code.（这个插件允许在VS Code中运行 "),o("a",{attrs:{href:"http://jsbeautifier.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("js-beautify"),o("OutboundLink")],1),e._v("）")])]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("h2",{attrs:{id:"下一步"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下一步","aria-hidden":"true"}},[e._v("#")]),e._v(" 下一步")]),e._v(" "),o("p",[e._v("There is much more to explore with Visual Studio Code, please try the following topics:")]),e._v(" "),o("p",[e._v("Visual Studio Code还有很多地方可以去探索，可以看看下面的几个话题：")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/docs/editor/debugging.html"}},[e._v("Debugging")]),e._v(" - This is where VS Code really shines")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/editor/editingevolved.html"}},[e._v("Editing Evolved")]),e._v(" - Lint, IntelliSense, Lightbulbs, Peek and Goto Definition and more")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/runtimes/ASPnet5.html"}},[e._v("ASP.NET Core")]),e._v(" - End to end sample showing off our ASP.NET Core and .NET Core support with a sample app")],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/docs/editor/tasks.html"}},[e._v("Tasks")]),e._v(" - Running tasks with Gulp, Grunt and Jake.  Showing Errors and Warnings")],1)])])},[],!1,null,null,null);t.default=s.exports}}]);