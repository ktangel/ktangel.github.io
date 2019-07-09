(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{335:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"向-vsc-添加代码段-adding-snippets-to-visual-studio-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向-vsc-添加代码段-adding-snippets-to-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" 向 VSC 添加代码段(Adding Snippets to Visual Studio Code)")]),e._v(" "),s("p",[e._v("Code snippets are ready-made snippets of code you can quickly insert into your source code. For example, a "),s("code",[e._v("for")]),e._v(" code snippet creates an empty "),s("code",[e._v("for")]),e._v(" loop.")]),e._v(" "),s("p",[e._v("代码段是一种可以快速插入到源代码中的代码片段。例如，对于代码片段创建一个空的for循环。")]),e._v(" "),s("p",[e._v("Each snippet defines a prefix under which it will appear in IntelliSense via ("),s("code",[e._v("kb(editor.action.triggerSuggest)")]),e._v(") as well as a body inserted when the snippet is selected. The snippet syntax follows the "),s("a",{attrs:{href:"https://manual.macromates.com/en/snippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("TextMate snippet syntax"),s("OutboundLink")],1),e._v(" with the exception of 'regular expression replacements', 'interpolated shell code' and 'transformations', which are not supported.")]),e._v(" "),s("p",[e._v("每个代码段定义时有一个前缀，只要该前缀出现，它就会出现在 "),s("code",[e._v("IntelliSense via（kb（editor.action.triggerSuggest））")]),e._v(" 中，以及在选择代码段时插入的主体。代码段语法遵循 "),s("code",[e._v("TextMate代码段")]),e._v(" 语法，但不支持 "),s("code",[e._v("“正则表达式替换”")]),e._v(" ， "),s("code",[e._v("“插入的shell代码”和“转换”")]),e._v("。")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/userdefinedsnippets/usersnippets.png",alt:"User Snippets"}})]),e._v(" "),s("h2",{attrs:{id:"从扩展市场添加代码段-add-snippets-from-the-marketplace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从扩展市场添加代码段-add-snippets-from-the-marketplace","aria-hidden":"true"}},[e._v("#")]),e._v(" 从扩展市场添加代码段(Add Snippets from the Marketplace)")]),e._v(" "),s("p",[e._v("Many snippets have been uploaded to the VS Code "),s("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("Extension Marketplace")]),e._v(" by the community.  If you find one you want to use, simply install it and restart VS Code and the new snippet will be available.")],1),e._v(" "),s("p",[e._v("许多片段已被社区上传到VS Code扩展市场。如果你发现了一个代码段并且想要使用，你只需安装它，并重新启动VS Code，这个代码段就可以用了。")]),e._v(" "),s("p",[s("img",{attrs:{src:"images/userdefinedsnippets/snippetgallery.gif",alt:"Add some snippets from the Marketplace"}})]),e._v(" "),s("p",[e._v("You can also browse the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/vscode/Snippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Marketplace"),s("OutboundLink")],1),e._v(" site directly to find available snippets.")]),e._v(" "),s("p",[e._v("您还可以直接浏览"),s("a",{attrs:{href:"https://marketplace.visualstudio.com/vscode/Snippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code 扩展市场"),s("OutboundLink")],1),e._v("的网站，来查找可用的代码段。")]),e._v(" "),s("h2",{attrs:{id:"创建自己的代码段-creating-your-own-snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建自己的代码段-creating-your-own-snippets","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建自己的代码段(Creating your Own Snippets)")]),e._v(" "),s("p",[e._v("You can define your own snippets for specific languages.  Snippets are defined in a JSON format.")]),e._v(" "),s("p",[e._v("您可以为特定语言定义自己的代码段。代码段以JSON格式定义。")]),e._v(" "),s("p",[e._v("The example below is a "),s("code",[e._v("For Loop")]),e._v(" snippet for "),s("code",[e._v("JavaScript")]),e._v(".")]),e._v(" "),s("p",[e._v("下面的示例是一个 "),s("code",[e._v("JavaScript")]),e._v(" 的 "),s("code",[e._v("For")]),e._v(" 循环代码段。")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"For Loop"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"prefix"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"for"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"for (var ${index} = 0; ${index} < ${array}.length; ${index}++) {"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\tvar ${element} = ${array}[${index}];"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\t$0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"}"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"For Loop"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),s("p",[e._v("In the example above:")]),e._v(" "),s("p",[e._v("在上面的实例中：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("For Loop")]),e._v(" is the snippet name")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("prefix")]),e._v(" defines a prefix used in the IntelliSense drop down.  In this case "),s("code",[e._v("for")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("body")]),e._v(" is the snippet content.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("For Loop")]),e._v(" 是这个代码段的名称。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("prefix")]),e._v(" 在这种情况下定义了在 "),s("code",[e._v("IntelliSense下拉列表")]),e._v(" 中使用的前缀。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("body")]),e._v(" 是这个代码段的额内容。")])])]),e._v(" "),s("p",[e._v("Possible variables are:")]),e._v(" "),s("p",[e._v("可能的变量有：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("$1, $2 for tab stops")])]),e._v(" "),s("li",[s("p",[e._v("${id} and ${id:label} and ${1:label} for variables")])]),e._v(" "),s("li",[s("p",[e._v("Variables with the same id are connected.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("description")]),e._v(" is the description used in the IntelliSense drop down")])]),e._v(" "),s("li",[s("p",[e._v("$1, $2 用于制表符。")])]),e._v(" "),s("li",[s("p",[e._v("${id} ， ${id:label} 和 ${1:label} 是变量。")])]),e._v(" "),s("li",[s("p",[e._v("有相同 id 的变量相互关联。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("description")]),e._v(" 是在 "),s("code",[e._v("IntelliSense 下拉列表")]),e._v("中的描述。")])])]),e._v(" "),s("p",[e._v("To open up a snippet file for editing, open "),s("strong",[e._v("User Snippets")]),e._v(" under "),s("strong",[e._v("File")]),e._v(" > "),s("strong",[e._v("Preferences")]),e._v(" and select the language for which the snippets should appear.")]),e._v(" "),s("p",[e._v("打开要编辑的代码段文件，请在 "),s("code",[e._v("文件>首选项")]),e._v(" 下打开用户代码段，然后选择 "),s("code",[e._v("代码段应显示的语言")]),e._v(" 。")]),e._v(" "),s("blockquote",[s("p",[e._v("In case your snippet should contain "),s("code",[e._v("{")]),e._v(" or "),s("code",[e._v("}")]),e._v(", it is possible to escape them, in JSON as "),s("code",[e._v("\\\\{")]),e._v(" and "),s("code",[e._v("\\\\}")])])]),e._v(" "),s("blockquote",[s("p",[e._v("如果您的代码片段应包含 "),s("code",[e._v("{")]),e._v(" 或 "),s("code",[e._v("}")]),e._v(" ，可以转义它们，在 "),s("code",[e._v("JSON")]),e._v(" 中为 "),s("code",[e._v("\\\\{")]),e._v(" 和 "),s("code",[e._v("\\\\}")]),e._v(" 。")])]),e._v(" "),s("p",[e._v("Once you have added a new snippet, you can try it out right away, no restart needed.")]),e._v(" "),s("p",[e._v("添加新代码段后，您可以立即尝试，无需重新启动。")]),e._v(" "),s("h2",{attrs:{id:"使用textmate代码段-using-textmate-snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用textmate代码段-using-textmate-snippets","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用TextMate代码段(Using TextMate Snippets)")]),e._v(" "),s("p",[e._v("You can also add TextMate snippets (.tmSnippets) to your VS Code installation using the "),s("router-link",{attrs:{to:"/docs/tools/yocode.html"}},[e._v("yo code")]),e._v(" extension generator. The generator has an option "),s("code",[e._v("New Code Snippets")]),e._v(" which lets you point to a folder containing multiple .tmSnippets files and they will be packaged into a VS Code snippet extension.  The generator also supports Sublime snippets (.sublime-snippets).")],1),e._v(" "),s("p",[e._v("您还可以使用 "),s("code",[e._v("yo代码扩展生成器")]),e._v(" 将 "),s("code",[e._v("TextMate代码段（.tmSnippets）")]),e._v(" 添加到VS Code 安装。生成器有一个 "),s("code",[e._v("选择新代码片段")]),e._v(" ，它允许您指向包含多个 "),s("code",[e._v(".tmSnippets")]),e._v(" 文件的文件夹，它们将打包到VS Code代码段代码扩展中。生成器还支持 "),s("code",[e._v("Sublime代码段（.sublime-snippets）")]),e._v("。")]),e._v(" "),s("p",[e._v("The final generator output has two files: an extension manifest "),s("code",[e._v("package.json")]),e._v(" which has metadata to integrate the snippets into VS Code and a "),s("code",[e._v("snippets.json")]),e._v(" file which includes the snippets converted to the VS Code snippet format.")]),e._v(" "),s("p",[e._v("最终的生成器输出有两个文件："),s("code",[e._v("扩展清单")]),e._v(" "),s("code",[e._v("package.json")]),e._v("，其将会把代码集成到VS Code的元默认数据以及 "),s("code",[e._v("snippets.json")]),e._v(" 文件中，其包括被转换为VS Code 代码片段格式的片段。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n├── snippets                    // VS Code integration\n│   └── snippets.json           // The JSON "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" w/ the snippets\n└── package.json                // extension's manifest\n")])])]),s("p",[e._v("Copy the generated snippets folder to a new folder under "),s("router-link",{attrs:{to:"/docs/extensions/install-extension.html#your-extensions-folder"}},[e._v("your "),s("code",[e._v(".vscode/extensions")]),e._v(" folder")]),e._v(" and restart VS Code.")],1),e._v(" "),s("p",[e._v("将生成的 "),s("code",[e._v("snippets")]),e._v(" 文件夹复制到 "),s("code",[e._v(".vscode/extensions")]),e._v(" 文件夹下的新文件夹中，然后重新启动VS Code。")]),e._v(" "),s("h2",{attrs:{id:"在扩展市场中共享您的代码段-sharing-your-snippets-in-the-marketplace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在扩展市场中共享您的代码段-sharing-your-snippets-in-the-marketplace","aria-hidden":"true"}},[e._v("#")]),e._v(" 在扩展市场中共享您的代码段(Sharing Your Snippets in the Marketplace)")]),e._v(" "),s("p",[e._v("Once you have created your snippets and tested them out, you can share them with the community.")]),e._v(" "),s("p",[e._v("一旦您创建了代码段并对其进行测试，就可以与社区共享。")]),e._v(" "),s("p",[e._v("To do this, you need to create a snippet extension.  If you've used the "),s("code",[e._v("yo code")]),e._v(" extension generator, your snippet extension is ready to be published.")]),e._v(" "),s("p",[e._v("为此，您需要创建一个代码段扩展。如果您已使用"),s("code",[e._v("yo code")]),e._v("扩展程序生成器，则您的代码段扩展程序已经可以发布。")]),e._v(" "),s("p",[e._v("If you want to share user snippets, you'll need to package your snippet json file along with an extension manifest which has the necessary metadata to integrate the snippets into VS Code.")]),e._v(" "),s("p",[e._v("如果您想要共享你的代码段，则需要打包您的代码段json文件以及具有必要默认数据的扩展清单，以将代码段集成到VS Code中。")]),e._v(" "),s("p",[e._v("Depending on your plaform, your user snippets file is located here:")]),e._v(" "),s("p",[e._v("根据您的操作系统，您的用户代码段文件位于以下几处：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Windows")]),e._v(" "),s("code",[e._v("%APPDATA%\\Code\\User\\snippets\\(language).json")])]),e._v(" "),s("li",[s("strong",[e._v("Mac")]),e._v(" "),s("code",[e._v("$HOME/Library/Application Support/Code/User/snippets/(language).json")])]),e._v(" "),s("li",[s("strong",[e._v("Linux")]),e._v(" "),s("code",[e._v("$HOME/.config/Code/User/snippets/(language).json")])])]),e._v(" "),s("p",[e._v("where "),s("code",[e._v("(language).json")]),e._v(" depends on the targeted language of the snippets (e.g. "),s("code",[e._v("markdown.json")]),e._v(" for Markdown snippets).  Create a new folder for your extension and copy your snippet file to a "),s("code",[e._v("snippets")]),e._v(" subdirectory.")]),e._v(" "),s("p",[s("code",[e._v("（language）.json")]),e._v(" 的位置取决于片段的目标语言（例如Markdown片段的markdown.json）。为扩展程序创建一个新文件夹，并将您的代码段文件复制到 "),s("code",[e._v("snippets")]),e._v(" 子目录。")]),e._v(" "),s("p",[e._v("Now add an extension manifest package.json file to the extension folder.  The snippet extension manifest follows the structure defined in the "),s("router-link",{attrs:{to:"/docs/extensionAPI/extension-manifest.html"}},[e._v("Extension Manifest")]),e._v(" reference and provides a "),s("router-link",{attrs:{to:"/docs/extensionAPI/extension-points.html#contributessnippets"}},[s("code",[e._v("snippets")]),e._v(" contribution")]),e._v(".")],1),e._v(" "),s("p",[e._v("现在，将扩展清单 "),s("code",[e._v("package.json")]),e._v(" 文件添加到扩展文件夹。代码段扩展清单遵循 "),s("code",[e._v("“扩展清单”")]),e._v(" 参考中定义的结构，并提供了代码段贡献。")]),e._v(" "),s("p",[e._v("Below is an example manifest for Markdown snippets:")]),e._v(" "),s("p",[e._v("以下是Markdown片段的示例清单：")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DM-Markdown"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"publisher"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mscott"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Dunder Mifflin Markdown snippets"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"engines"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vscode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.10.x"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"categories"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Snippets"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"contributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"snippets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"language"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"markdown"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./snippets/markdown.json"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Note that snippets need to be associated with a "),s("code",[e._v("language")]),e._v(" identifier.  This can be a "),s("router-link",{attrs:{to:"/docs/languages/overview.html"}},[e._v("language supported")]),e._v(" directly by VS Code or a language provided by an extension.  Make sure the "),s("code",[e._v("language")]),e._v(" identifier is correct.")],1),e._v(" "),s("p",[e._v("请注意，代码段需要与 "),s("code",[e._v("语言标识符")]),e._v(" 相关联。这是被 VS Code 默认支持的语言，或由扩展提供的语言。请确保语言标识符正确。")]),e._v(" "),s("p",[e._v("You then use the "),s("router-link",{attrs:{to:"/docs/tools/vscecli.html"}},[e._v("vsce publishing tool")]),e._v(" to publish the snippet extension to the "),s("router-link",{attrs:{to:"/docs/editor/extension-gallery.html"}},[e._v("VS Code Extension Marketplace")]),e._v(".")],1),e._v(" "),s("p",[e._v("然后使用vsce发布工具将代码段扩展名发布到VS Code扩展市场。")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip:")]),e._v(' To make it easy for users to find your snippet, include the word "snippet" in the extension description and set the '),s("code",[e._v("Category")]),e._v(" to "),s("code",[e._v("Snippets")]),e._v(" in your "),s("code",[e._v("package.json")]),e._v(".")])]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("提示：")]),e._v(" 为了方便用户查找您的代码段，请在扩展说明中包含 "),s("code",[e._v("“snippet”")]),e._v(" 一词，并将"),s("code",[e._v("package")]),e._v("中的"),s("code",[e._v("Category")]),e._v("设置为"),s("code",[e._v("Snippets")]),e._v("。")])]),e._v(" "),s("p",[e._v("We also have recommendations on how to make your extension look great on the VS Code Marketplace, see "),s("router-link",{attrs:{to:"/docs/extensionAPI/extension-manifest.html#marketplace-presentation-tips"}},[e._v("Marketplace Presentation Tips")]),e._v(".")],1),e._v(" "),s("p",[e._v("我们还有一些建议如何使您的扩展在VS代码市场发展壮大，请参阅市场演示提示。")]),e._v(" "),s("h2",{attrs:{id:"下一步-next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步-next-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" 下一步(Next Steps)")]),e._v(" "),s("p",[e._v("Snippets are just one way to extend VS Code. If you'd like to learn more about VS Code extensibility, try these topics:")]),e._v(" "),s("p",[e._v("代码片段只是扩展VS Code的一种方法。如果您想了解有关VS代码可扩展性的更多信息，请尝试以下信息：")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/docs/customization/colorizer.html"}},[e._v("Colorizers and Bracket Matchers")]),e._v(" - Learn how to import TextMate colorizers")],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/customization/themes.html"}},[e._v("Custom themes")]),e._v(" - Learn how to import existing TextMate themes.")],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/extensions/overview.html"}},[e._v("Extending Visual Studio Code")]),e._v(" - Learn about other ways to extend VS Code")],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/docs/editor/editingevolved.html"}},[e._v("Editing Evolved")]),e._v(" - Learn more about the VS Code editor's capabilities")],1)]),e._v(" "),s("h2",{attrs:{id:"common-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-questions","aria-hidden":"true"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),s("p",[s("strong",[e._v("Q: I created a snippets extension but they aren't showing up in the VS Code editor?")])]),e._v(" "),s("p",[s("strong",[e._v("A:")]),e._v(" Be sure you have correctly specified the "),s("code",[e._v("language")]),e._v(" identifier for your snippet (e.g. "),s("code",[e._v("markdown")]),e._v(" for Markdown .md files, "),s("code",[e._v("plaintext")]),e._v(" for Plain Text .txt files).  Also verify that the relative path to the snippets json file is correct.")])])},[],!1,null,null,null);t.default=a.exports}}]);