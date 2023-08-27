(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{354:function(e,t,s){"use strict";s.r(t);var a=s(33),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vsce-publishing-tool-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vsce-publishing-tool-reference"}},[e._v("#")]),e._v(" vsce - Publishing Tool Reference")]),e._v(" "),s("h1",{attrs:{id:"vsce-发布工具推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vsce-发布工具推荐"}},[e._v("#")]),e._v(" vsce - 发布工具推荐")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Microsoft/vsce",target:"_blank",rel:"noopener noreferrer"}},[e._v("vsce"),s("OutboundLink")],1),e._v(" is the command line tool you'll use to publish extensions to the "),s("RouterLink",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(".  You can also load extensions locally and share them via email or a UNC drive."),s("br"),e._v(" "),s("a",{attrs:{href:"https://github.com/Microsoft/vsce",target:"_blank",rel:"noopener noreferrer"}},[e._v("vsce"),s("OutboundLink")],1),e._v("是你用于在"),s("RouterLink",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v("发布扩展的命令行工具。你也可以在本地加载扩展并通过邮件或UNC drive分享它们。")],1),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("Make sure you have "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js"),s("OutboundLink")],1),e._v(" installed. Then simply run:"),s("br"),e._v("\n确保你已经安装了"),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js"),s("OutboundLink")],1),e._v("。然后便可以简单的运行下方的命令：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g vsce\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),s("p",[e._v("You'll use the "),s("code",[e._v("vsce")]),e._v(" command directly from the command line. For example, here's how you can quickly publish an extension:"),s("br"),e._v("\n你可以直接在命令行使用"),s("code",[e._v("vsce")]),e._v("命令。例如，你可以像这样快速发布一个扩展：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ vsce publish\nPublishing uuid@0.0.1...\nSuccessfully published uuid@0.0.1!\n")])])]),s("p",[e._v("For a reference on all the available commands, run "),s("code",[e._v("vsce --help")]),e._v("."),s("br"),e._v("\n想了解所有可用命令，运行"),s("code",[e._v("vsce --help")]),e._v("即可。")]),e._v(" "),s("h2",{attrs:{id:"publishing-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publishing-extensions"}},[e._v("#")]),e._v(" Publishing Extensions")]),e._v(" "),s("h2",{attrs:{id:"发布扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布扩展"}},[e._v("#")]),e._v(" 发布扩展")]),e._v(" "),s("p",[e._v("Visual Studio Code leverages "),s("a",{attrs:{href:"https://www.visualstudio.com/products/visual-studio-team-services-vs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Team Services"),s("OutboundLink")],1),e._v(" for its Marketplace services. This means that authentication, hosting and management of extensions is provided through that service."),s("br"),e._v("\nVisual Studio Code 使用 "),s("a",{attrs:{href:"https://www.visualstudio.com/products/visual-studio-team-services-vs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Team Services"),s("OutboundLink")],1),e._v(" 为它的商店提供服务。 这意味着可以通过这个服务验证、托管和管理扩展。")]),e._v(" "),s("p",[s("code",[e._v("vsce")]),e._v(" can only publish extensions using "),s("a",{attrs:{href:"https://www.visualstudio.com/en-us/news/2015-jul-7-vso.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Personal Access Tokens"),s("OutboundLink")],1),e._v(". You need to create at least one in order to publish an extension."),s("br"),e._v(" "),s("code",[e._v("vsce")]),e._v(" 只可以使用"),s("a",{attrs:{href:"https://www.visualstudio.com/en-us/news/2015-jul-7-vso.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Personal Access Tokens"),s("OutboundLink")],1),e._v("进行发布。为了发布扩展，你至少需要创建一个token。")]),e._v(" "),s("h3",{attrs:{id:"get-a-personal-access-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-personal-access-token"}},[e._v("#")]),e._v(" Get a Personal Access Token")]),e._v(" "),s("h3",{attrs:{id:"获取一个个人访问标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取一个个人访问标识"}},[e._v("#")]),e._v(" 获取一个个人访问标识")]),e._v(" "),s("p",[e._v("First, login to or sign up for "),s("a",{attrs:{href:"https://www.visualstudio.com/en-us/get-started/setup/sign-up-for-visual-studio-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Team Services"),s("OutboundLink")],1),e._v("."),s("br"),e._v("\n首先，使用"),s("a",{attrs:{href:"https://www.visualstudio.com/en-us/get-started/setup/sign-up-for-visual-studio-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Team Services"),s("OutboundLink")],1),e._v("进行登录或注册。")]),e._v(" "),s("p",[e._v("Then, from your account's home page "),s("code",[e._v("https://ACCOUNT.visualstudio.com")]),e._v(", go to the "),s("strong",[e._v("My Profile")]),e._v(" page:"),s("br"),e._v("\n然后, 从你的账户首页 "),s("code",[e._v("https://ACCOUNT.visualstudio.com")]),e._v(", 进入"),s("strong",[e._v("My Profile")]),e._v("页面:")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/vscecli/publishers1.png",alt:"My Profile page"}})]),e._v(" "),s("p",[e._v("Switch to the "),s("strong",[e._v("Security")]),e._v(" tab and "),s("strong",[e._v("Add")]),e._v(" a new Personal Access Token:"),s("br"),e._v("\n切换到"),s("strong",[e._v("Security")]),e._v("标签并且"),s("strong",[e._v("Add")]),e._v("一个新的Personal Access Token:")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/vscecli/publishers2.png",alt:"Add personal access token"}})]),e._v(" "),s("p",[e._v("Give the Personal Access Token a nice description, optionally extend its expiration date to 1 year and make it access every account:"),s("br"),e._v("\n给Personal Access Token添加一个nice的描述, 可以选择扩展它的过期时间最多到一年并且用它访问所有账号:")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/vscecli/publishers3.png",alt:"Personal access token details"}})]),e._v(" "),s("p",[e._v("The next screen will display your newly created Personal Access Token. "),s("strong",[e._v("Copy")]),e._v(" it, you'll need it to create a publisher."),s("br"),e._v("\n下一个屏幕将展示一个新创建的Personal Access Token. "),s("strong",[e._v("Copy")]),e._v(" 它, 你需要创建一个publisher.")]),e._v(" "),s("h3",{attrs:{id:"create-a-publisher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-publisher"}},[e._v("#")]),e._v(" Create a Publisher")]),e._v(" "),s("h3",{attrs:{id:"创建一个publisher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个publisher"}},[e._v("#")]),e._v(" 创建一个Publisher")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("publisher")]),e._v(" is an identity who can publish extensions to the Visual Studio Code Marketplace. Every extension needs to include a "),s("code",[e._v("publisher")]),e._v(" name in its "),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[s("code",[e._v("package.json")]),e._v(" file")]),e._v("."),s("br"),e._v(" "),s("strong",[e._v("publisher")]),e._v("用于验证是否能在Visual Studio Code Marketplace上发布扩展。每一个扩展需要在"),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[s("code",[e._v("package.json")]),e._v(" 文件")]),e._v("中包含"),s("code",[e._v("publisher")]),e._v("名称。")],1),e._v(" "),s("p",[e._v("Once you have a "),s("RouterLink",{attrs:{to:"/docs/tools/vscecli.html#get-a-personal-access-token"}},[e._v("Personal Access Token")]),e._v(", you can create a new publisher using "),s("code",[e._v("vsce")]),e._v(":"),s("br"),e._v("\n一旦你有了一个"),s("RouterLink",{attrs:{to:"/docs/tools/vscecli.html#get-a-personal-access-token"}},[e._v("Personal Access Token")]),e._v(",你就可以使用"),s("code",[e._v("vsce")]),e._v("创建一个新的publisher:")],1),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce create-publisher "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("publisher name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("code",[e._v("vsce")]),e._v(" will remember the provided Personal Access Token for future references to this publisher."),s("br"),e._v(" "),s("code",[e._v("vsce")]),e._v("会保存这个publisher的Personal Access Token。")]),e._v(" "),s("h3",{attrs:{id:"login-to-a-publisher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-to-a-publisher"}},[e._v("#")]),e._v(" Login to a Publisher")]),e._v(" "),s("h3",{attrs:{id:"登录publisher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录publisher"}},[e._v("#")]),e._v(" 登录Publisher")]),e._v(" "),s("p",[e._v("If you already created a publisher before and simply want to use it with "),s("code",[e._v("vsce")]),e._v(":"),s("br"),e._v("\n如果你在使用"),s("code",[e._v("vsce")]),e._v("之前就已经创建了一个publisher：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce login "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("publisher name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("Similarly to the "),s("code",[e._v("create-publisher")]),e._v(" command, "),s("code",[e._v("vsce")]),e._v(" will ask you for the Personal Access Token and remember it for future commands."),s("br"),e._v("\n与y"),s("code",[e._v("create-publisher")]),e._v("命令很相似, "),s("code",[e._v("vsce")]),e._v("将会要求你提供Personal Access Token并为接下来的命令保存它。")]),e._v(" "),s("p",[e._v("You can also enter your Personal Access Token as you publish with an optional parameter "),s("code",[e._v("-p <token>")]),e._v("."),s("br"),e._v("\n你也可以使用一个可选参数"),s("code",[e._v("-p <token>")]),e._v("输入你的Personal Access Token进行发布。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce publish -p "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h2",{attrs:{id:"auto-incrementing-the-extension-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-incrementing-the-extension-version"}},[e._v("#")]),e._v(" Auto-incrementing the Extension Version")]),e._v(" "),s("h2",{attrs:{id:"扩展版本号自动增长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展版本号自动增长"}},[e._v("#")]),e._v(" 扩展版本号自动增长")]),e._v(" "),s("p",[e._v("You can auto-increment an extension's version number when you publish by specifying the "),s("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SemVer"),s("OutboundLink")],1),e._v(" compatible number to increment: "),s("code",[e._v("major")]),e._v(", "),s("code",[e._v("minor")]),e._v(", or "),s("code",[e._v("patch")]),e._v("."),s("br"),e._v("\n当你通过指定"),s("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SemVer"),s("OutboundLink")],1),e._v("兼容号码增加"),s("code",[e._v("major")]),e._v(", "),s("code",[e._v("minor")]),e._v(", or "),s("code",[e._v("patch")]),e._v("的时候，你的扩展版本号将自动递增。")]),e._v(" "),s("p",[e._v("For example, if you want to update an extension's version from 1.0.0 to 1.1.0, you would specify "),s("code",[e._v("minor")]),e._v(":"),s("br"),e._v("\n例如, 如果你想将扩展的版本从1.0.0更新到1.1.0，你需要指定"),s("code",[e._v("minor")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce publish minor\n")])])]),s("p",[e._v("This will modify the extension's "),s("code",[e._v("package.json")]),e._v(" "),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html#fields"}},[e._v("version")]),e._v(" attribute before publishing the extension."),s("br"),e._v("\n在发布扩展之前，这么做将会修改扩展的"),s("code",[e._v("package.json")]),e._v(" "),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html#fields"}},[e._v("version")]),e._v("的属性。")],1),e._v(" "),s("p",[e._v("You can also specify a complete SemVer compatible version on the command line:"),s("br"),e._v("\n你也可以在命令行中指定一个完整的deSemVer兼容版本。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce publish "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),e._v(".1\n")])])]),s("h2",{attrs:{id:"packaging-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packaging-extensions"}},[e._v("#")]),e._v(" Packaging Extensions")]),e._v(" "),s("h2",{attrs:{id:"包扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包扩展"}},[e._v("#")]),e._v(" 包扩展")]),e._v(" "),s("p",[e._v("You may want to simply package extensions without publishing them to the store. Extensions will always be packaged into a "),s("code",[e._v(".vsix")]),e._v(" file. Here's how:"),s("br"),e._v("\n你可能想要简单的包扩展而不把他们发布到商店。扩展总是会被打包到"),s("code",[e._v(".vsix")]),e._v("文件。方法如下：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vsce package\n")])])]),s("p",[e._v("This will package your extension into a "),s("code",[e._v(".vsix")]),e._v(" file and place it in the current directory. It's possible to install "),s("code",[e._v(".vsix")]),e._v(" files into Visual Studio Code. See "),s("RouterLink",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("Installing Extensions")]),e._v(" for more details."),s("br"),e._v("\n这条命令会将你的扩展打包到"),s("code",[e._v(".vsix")]),e._v("文件中并放到当前目录下。它可能会安装"),s("code",[e._v(".vsix")]),e._v("文件到Visual Studio Code. 查看"),s("RouterLink",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("安装扩展")]),e._v("获取更多细节。")],1),e._v(" "),s("h2",{attrs:{id:"advanced-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[e._v("#")]),e._v(" Advanced Usage")]),e._v(" "),s("h2",{attrs:{id:"高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[e._v("#")]),e._v(" 高级用法")]),e._v(" "),s("h3",{attrs:{id:"marketplace-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#marketplace-integration"}},[e._v("#")]),e._v(" Marketplace Integration")]),e._v(" "),s("h3",{attrs:{id:"商店整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#商店整合"}},[e._v("#")]),e._v(" 商店整合")]),e._v(" "),s("p",[e._v("You can customize how your extension looks in the Visual Studio Marketplace. See the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items/lukehoban.Go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go extension"),s("OutboundLink")],1),e._v(" for an example."),s("br"),e._v("\n你可以自定义你的扩展在Visual Studio Marketplace中的样式。 请查看"),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items/lukehoban.Go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go extension"),s("OutboundLink")],1),e._v("这个例子。")]),e._v(" "),s("p",[e._v("Here are some tips for making your extension look great on the Marketplace:"),s("br"),e._v("\n这里有一些让你的扩展在商店中看起来更棒的小提示：")]),e._v(" "),s("ul",[s("li",[e._v("Any "),s("code",[e._v("README.md")]),e._v(" file at the root of your extension will be used to populate the extension's Marketplace page's contents. "),s("code",[e._v("vsce")]),e._v(" can fix this for you in two different ways:")]),e._v(" "),s("li",[e._v("在你的扩展根目录下的"),s("code",[e._v("README.md")]),e._v("文件中的内容会显示在扩展商店页面上。"),s("code",[e._v("vsce")]),e._v("可以使用两种不同的方式为你修复这个问题:")]),e._v(" "),s("li",[e._v("Likewise, any "),s("code",[e._v("LICENSE")]),e._v(" file at the root of your extension will be used as the contents for the extension's license.")]),e._v(" "),s("li",[e._v("同样的，你的扩展根目录下的"),s("code",[e._v("LICENSE")]),e._v("文件也被作为这个扩展的证书。")]),e._v(" "),s("li",[e._v("If you add a "),s("code",[e._v("repository")]),e._v(" field to your "),s("code",[e._v("package.json")]),e._v(" and if it is a public GitHub repository, "),s("code",[e._v("vsce")]),e._v(" will automatically detect it and adjust the links accordingly.")]),e._v(" "),s("li",[e._v("如果你添加一个"),s("code",[e._v("repository")]),e._v("字段到"),s("code",[e._v("package.json")]),e._v("文件中并且他是一个公开的GitHub仓库，"),s("code",[e._v("vsce")]),e._v("将会自动自动检测到并且根据它来调整链接。")]),e._v(" "),s("li",[e._v("You can override that behavior and/or set it by using the "),s("code",[e._v("--baseContentUrl")]),e._v(" and "),s("code",[e._v("--baseImagesUrl")]),e._v(" flags when running "),s("code",[e._v("vsce package")]),e._v(". Then publish the extension by passing the path to the packaged "),s("code",[e._v(".vsix")]),e._v(" file as an argument to "),s("code",[e._v("vsce publish")]),e._v(".")]),e._v(" "),s("li",[e._v("在运行"),s("code",[e._v("vsce package")]),e._v("命令的时候，你可以通过使用"),s("code",[e._v("--baseContentUrl")]),e._v("和"),s("code",[e._v("--baseImagesUrl")]),e._v("参数覆盖或者设置这种行为。")]),e._v(" "),s("li",[e._v("You can set the banner background color by setting "),s("code",[e._v("galleryBanner.color")]),e._v(" to the intended hex value in "),s("code",[e._v("package.json")]),e._v(".")]),e._v(" "),s("li",[e._v("你可以在"),s("code",[e._v("package.json")]),e._v("中设置"),s("code",[e._v("galleryBanner.color")]),e._v("的16进制值来改变banner的背景色。")]),e._v(" "),s("li",[e._v("You can set an icon by setting "),s("code",[e._v("icon")]),e._v(" to a relative path to a squared "),s("code",[e._v("128px")]),e._v(" PNG file included in your extension, in "),s("code",[e._v("package.json")]),e._v(".")]),e._v(" "),s("li",[e._v("你可以在"),s("code",[e._v("package.json")]),e._v("设置"),s("code",[e._v("icon")]),e._v("的值为一个在你的扩展目录中的边长"),s("code",[e._v("128px")]),e._v("的正方形PNG文件的相对路径来配置你的扩展图标。")])]),e._v(" "),s("p",[e._v("Also see "),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html#marketplace-presentation-tips"}},[e._v("Marketplace Presentation Tips")]),e._v("."),s("br"),e._v("\n也可以看这个"),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-manifest.html#marketplace-presentation-tips"}},[e._v("商店演示提示")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"vscodeignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vscodeignore"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vscodeignore")])]),e._v(" "),s("p",[e._v("You can create a "),s("code",[e._v(".vscodeignore")]),e._v(" file to exclude some files from being included in your extension's package. This file is a collection of "),s("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob"),s("OutboundLink")],1),e._v(" patterns, one per line."),s("br"),e._v("\n你可以创建"),s("code",[e._v(".vscodeignore")]),e._v("文件来忽略掉你不想打包到扩展包的文件。 这个文件是"),s("a",{attrs:{href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob"),s("OutboundLink")],1),e._v("样式的集合，每行一个。")]),e._v(" "),s("p",[e._v("For example:"),s("br"),e._v("\n例子：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("**/*.ts\n**/tsconfig.json\n!file.ts\n")])])]),s("p",[e._v("You should ignore all files not needed at runtime. For example, if your extension is written in TypeScript, you should ignore all "),s("code",[e._v("**/*.ts")]),e._v(" files, like in the previous example."),s("br"),e._v("\n你应该忽略所有运行时不需要的文件。例如，如果你的扩展是用TypeScript写的，你应该忽略所有的"),s("code",[e._v("**/*.ts")]),e._v("文件，就就像上面的例子那样。")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Development dependencies listed in "),s("code",[e._v("devDependencies")]),e._v(" will be automatically ignored, you don't need to add them to the "),s("code",[e._v(".vscodeignore")]),e._v(" file."),s("br"),e._v(" "),s("strong",[e._v("注意:")]),e._v(" 罗列在"),s("code",[e._v("devDependencies")]),e._v("中的开发依赖会被自动忽略，你不需要把他们添加到"),s("code",[e._v(".vscodeignore")]),e._v("文件中。")]),e._v(" "),s("h3",{attrs:{id:"pre-publish-step"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-publish-step"}},[e._v("#")]),e._v(" Pre-publish step")]),e._v(" "),s("h3",{attrs:{id:"预发布步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预发布步骤"}},[e._v("#")]),e._v(" 预发布步骤")]),e._v(" "),s("p",[e._v("It's possible to add a pre-publish step to your manifest file. The command will be called every time the extension is packaged."),s("br"),e._v("\n添加预发布步骤到你的manifest文件中是可行的。扩展的每次打包都会调用到这个命令。")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"uuid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"publisher"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"joaomoreno"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"engines"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vscode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.10.x"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vscode:prepublish"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tsc"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("This will always invoke the "),s("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript"),s("OutboundLink")],1),e._v(" compiler whenever the extension is packaged."),s("br"),e._v("\n只要扩展被打包"),s("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript"),s("OutboundLink")],1),e._v("编译器总是会被调用。")]),e._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),s("h2",{attrs:{id:"接下来的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接下来的步骤"}},[e._v("#")]),e._v(" 接下来的步骤")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(" - Learn more about VS Code's public extension Marketplace.")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("扩展商店")]),e._v(" - 可以学习更多VSCode公共扩展相关内容的商店。")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("Installing Extensions")]),e._v(" - Learn about other options for installing and sharing extensions.")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/docs/extensions/install-extension.html"}},[e._v("安装扩展")]),e._v(" - 学习安装和分享扩展等其他操作。")],1)]),e._v(" "),s("h2",{attrs:{id:"common-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),s("p",[s("strong",[e._v("Q: I get 403 Forbidden (or 401 Unauthorized) error when I try to publish my extension?")]),s("br"),e._v(" "),s("strong",[e._v("问题：当我尝试发布我的扩展的时候收到了403禁止的错误。")])]),e._v(" "),s("p",[s("strong",[e._v("A:")]),e._v(" One easy mistake to make when creating the PAT (Personal Access Token) is to not select "),s("code",[e._v("all accessible accounts")]),e._v(" in the Accounts field dropdown (instead selecting a specific account). You should also set the Authorized Scopes to "),s("code",[e._v("All scopes")]),e._v(" for the publish to work."),s("br"),e._v(" "),s("strong",[e._v("回答：")]),e._v(" 创建PAT (Personal Access Token)的时候在账户下拉框没有选择"),s("code",[e._v("all accessible accounts")]),e._v("（而是选择了指定账户）很容易造成这个错误。为了让发布能正常工作，你还应该将Authorized Scopes设置为"),s("code",[e._v("All scopes")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("Q: I can't unpublish my extension through the "),s("code",[e._v("vsce")]),e._v(" tool?")]),s("br"),e._v(" "),s("strong",[e._v("问题：我不能通过"),s("code",[e._v("vsce")]),e._v("工具取消发布我的扩展吗？")])]),e._v(" "),s("p",[s("strong",[e._v("A:")]),e._v(" You may have changed your extension ID or publisher name. You can also manage your extensions directly on the Marketplace by going to the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/manage",target:"_blank",rel:"noopener noreferrer"}},[e._v("manage page"),s("OutboundLink")],1),e._v(".  You can update or unpublish your extension from your publisher manage page."),s("br"),e._v(" "),s("strong",[e._v("回答：")]),e._v(" 你可能修改了你的扩展ID或者publisher名称。你也可以通过"),s("a",{attrs:{href:"https://marketplace.visualstudio.com/manage",target:"_blank",rel:"noopener noreferrer"}},[e._v("manage page"),s("OutboundLink")],1),e._v("来直接管理你的扩展。你可以从发布者管理页面更新或者取消发布你的扩展。")])])}),[],!1,null,null,null);t.default=n.exports}}]);