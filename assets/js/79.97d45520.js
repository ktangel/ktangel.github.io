(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{400:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),s("p",[t._v("JSON is a data format that is common in configuration files like "),s("code",[t._v("package.json")]),t._v(" or "),s("code",[t._v("project.json")]),t._v(". We also use it extensively in VS Code for our configuration files.  When opening a file that ends with "),s("code",[t._v(".json")]),t._v(", VS Code provides the following set of features that make it simpler to write or modify the file's content.")]),t._v(" "),s("p",[t._v("JSON是一种数据格式，常见于配置文件如"),s("code",[t._v("package.json")]),t._v("或"),s("code",[t._v("project.json")]),t._v("。我们在VS Code中也广泛地使用它作为配置文件。当打开与结尾的文件"),s("code",[t._v(".json")]),t._v("时，VSCode提供了，能更简单地编写或修改文件内容的功能集。")]),t._v(" "),s("h2",{attrs:{id:"json-注释-json-comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-注释-json-comments"}},[t._v("#")]),t._v(" JSON 注释 JSON Comments")]),t._v(" "),s("p",[t._v("Comments in JSON are an extension to JSON specification that is supported by VS Code. You can use single line (//) as well as block comments (/* */) as used in JavaScript.")]),t._v(" "),s("p",[t._v("JSON中的JSON是一种JSON规范的扩展，是被VS Code支持的。在使用JavaScript时，使用单行（//）以及块（/* */）注释。")]),t._v(" "),s("h2",{attrs:{id:"智能感知和验证-intellisense-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智能感知和验证-intellisense-validation"}},[t._v("#")]),t._v(" 智能感知和验证 IntelliSense & Validation")]),t._v(" "),s("p",[t._v("For properties and values ("),s("code",[t._v("kb(editor.action.triggerSuggest)")]),t._v("), both for JSON data with and without schema, we offer up suggestions as you type with IntelliSense.   We also perform structural and value verification based on an associated JSON schema giving you red squigglies.")]),t._v(" "),s("p",[t._v("对于属性和值("),s("code",[t._v("kb(editor.action.triggerSuggest)")]),t._v(")，无论JSON数据是否是使用模式(schema)的JSON数据，智能感知在你输入时，都提供建议。基于关联的JSON模式，还进行了结构和值验证并显示红色标记。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/json/intellisense.png",alt:"IntelliSense"}})]),t._v(" "),s("h3",{attrs:{id:"包及项目依赖-package-and-project-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包及项目依赖-package-and-project-dependencies"}},[t._v("#")]),t._v(" 包及项目依赖 Package and Project Dependencies")]),t._v(" "),s("p",[t._v("We also offer IntelliSense for specific value sets such as package and project dependencies in "),s("code",[t._v("package.json")]),t._v(", "),s("code",[t._v("project.json")]),t._v(" and "),s("code",[t._v("bower.json")]),t._v(".")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("package.json")]),t._v(", "),s("code",[t._v("project.json")]),t._v(" and "),s("code",[t._v("bower.json")]),t._v("，我们还提供智能感知特定值集，如包和项目依赖")]),t._v(" "),s("h2",{attrs:{id:"快速导航-quick-navigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速导航-quick-navigation"}},[t._v("#")]),t._v(" 快速导航 Quick Navigation")]),t._v(" "),s("p",[t._v("JSON files can get pretty large and we support quick navigation to properties "),s("code",[t._v("kb(workbench.action.gotoSymbol)")]),t._v(" ("),s("strong",[t._v("Go to Symbol")]),t._v(") with the Command Palette.")]),t._v(" "),s("p",[t._v("JSON文件可以相当大。通过命令面板的("),s("strong",[t._v("Go to Symbol")]),t._v(")，我们支持快速导航到属性"),s("code",[t._v("kb(workbench.action.gotoSymbol)")])]),t._v(" "),s("p",[s("img",{attrs:{src:"images/json/gotosymbol.png",alt:"Goto Symbol"}})]),t._v(" "),s("h2",{attrs:{id:"悬浮-hovers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#悬浮-hovers"}},[t._v("#")]),t._v(" 悬浮 Hovers")]),t._v(" "),s("p",[t._v("When you hover over properties and values for JSON data with or without schema, we will provide additional context.")]),t._v(" "),s("p",[t._v("当你将鼠标悬停在JSON数据的属性和值时，我们将提供更多的上下文。无论JSON数据是否有模式（schema）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images/json/hoverandtoggle.png",alt:"Hover"}})]),t._v(" "),s("h2",{attrs:{id:"格式化-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化-formatting"}},[t._v("#")]),t._v(" 格式化 Formatting")]),t._v(" "),s("p",[t._v("You can format your JSON document (or just a part of it) using "),s("code",[t._v("kb(editor.action.format)")]),t._v(" or "),s("strong",[t._v("Format")]),t._v(" from the context menu.")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("kb(editor.action.format)")]),t._v(" 或上下文菜单的"),s("strong",[t._v("Format")]),t._v("，你能够格式化你的JSON文档。")]),t._v(" "),s("h2",{attrs:{id:"json模式和设置-json-schemas-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json模式和设置-json-schemas-settings"}},[t._v("#")]),t._v(" JSON模式和设置 JSON Schemas & Settings")]),t._v(" "),s("p",[t._v("To understand the structure of JSON files, we use "),s("a",{attrs:{href:"http://spacetelescope.github.io/understanding-json-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON schemas"),s("OutboundLink")],1),t._v(". JSON schemas describe the shape of the JSON file, as well as value sets, default values, and descriptions.")]),t._v(" "),s("p",[t._v("要了解的 JSON 文件结构，我们使用了 "),s("a",{attrs:{href:"http://spacetelescope.github.io/understanding-json-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON模式"),s("OutboundLink")],1),t._v("。JSON模式描述了 JSON 文件的构成，以及值集、 默认值和说明。")]),t._v(" "),s("p",[t._v("Servers like "),s("a",{attrs:{href:"http://schemastore.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema Store"),s("OutboundLink")],1),t._v(" provide schemas for most of the common JSON based configuration files. However, schemas can also be defined in a file in the VS Code workspace, as well as the VS Code settings files.")]),t._v(" "),s("p",[t._v("像 "),s("a",{attrs:{href:"http://schemastore.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON模式存储"),s("OutboundLink")],1),t._v(" 服务，提供最常见的基于配置文件的JSON模式。尽管如此，模式也可以在VSCode工作区的文件，以及在VS Code设置文件中被定义。")]),t._v(" "),s("p",[t._v("The association of a JSON file to a schema can be done either in the JSON file itself using the "),s("code",[t._v("$schema")]),t._v(" attribute, or in the User or Workspace "),s("RouterLink",{attrs:{to:"/docs/customization/userandworkspace.html"}},[t._v("Settings")]),t._v(" ("),s("strong",[t._v("File")]),t._v(" > "),s("strong",[t._v("Preferences")]),t._v(" > "),s("strong",[t._v("User Settings")]),t._v(" or "),s("strong",[t._v("Workspace Settings")]),t._v(") under the property "),s("code",[t._v("json.schemas")]),t._v(".")],1),t._v(" "),s("p",[t._v("一个JSON文件可以关联到一个模式。通过该JSON文件本身使用相应"),s("code",[t._v("$schema")]),t._v("属性，或者通过用户或工作区 "),s("RouterLink",{attrs:{to:"/docs/customization/userandworkspace.html"}},[t._v("设置")]),t._v("("),s("strong",[t._v("文件")]),t._v(" > "),s("strong",[t._v("首选项")]),t._v(" > "),s("strong",[t._v("用户设置")]),t._v(" 或 "),s("strong",[t._v("工作区设置")]),t._v(")下的属性"),s("code",[t._v("json.schemas")]),t._v("。")],1),t._v(" "),s("p",[t._v("VS Code extensions can also define schemas and schema mapping. That's why VS Code already knows about the schema of some well known JSON files such as "),s("code",[t._v("package.json")]),t._v(", "),s("code",[t._v("bower.json")]),t._v(" and "),s("code",[t._v("tsconfig.json")]),t._v(".")]),t._v(" "),s("p",[t._v("VS Code 扩展也可以定义模式到模式的映射。这就是为什么VS Code已经知道了一些知名的JSON文件，如"),s("code",[t._v("package.json")]),t._v("，"),s("code",[t._v("bower.json")]),t._v("和"),s("code",[t._v("tsconfig.json")]),t._v("的模式。")]),t._v(" "),s("h3",{attrs:{id:"在json中映射-mapping-in-the-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在json中映射-mapping-in-the-json"}},[t._v("#")]),t._v(" 在JSON中映射 Mapping in the JSON")]),t._v(" "),s("p",[t._v("In the following example, the JSON file specifies that its contents follow the "),s("a",{attrs:{href:"http://www.coffeelint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoffeeLint"),s("OutboundLink")],1),t._v(" schema.")]),t._v(" "),s("p",[t._v("下面的例子是，指定一个JSON文件的内容遵循"),s("a",{attrs:{href:"http://www.coffeelint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoffeeLint"),s("OutboundLink")],1),t._v(" 模式")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json.schemastore.org/coffeelint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"line_endings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unix"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"在用户设置中映射-mapping-in-the-user-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在用户设置中映射-mapping-in-the-user-settings"}},[t._v("#")]),t._v(" 在用户设置中映射 Mapping in the User Settings")]),t._v(" "),s("p",[t._v("The following excerpt from the User Settings shows how "),s("code",[t._v(".babelrc")]),t._v(" files are mapped to the "),s("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("babelrc"),s("OutboundLink")],1),t._v(" schema located on http://json.schemastore.org/babelrc.")]),t._v(" "),s("p",[t._v("下面，从用户设置中摘录的内容显示如何将 "),s("code",[t._v(".babelrc")]),t._v("文件映射到位于http://json.schemastore.org/babelrc 的 "),s("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("babelrc"),s("OutboundLink")],1),t._v("的模式。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"json.schemas"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileMatch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.babelrc"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(' "http'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//json.schemastore.org/babelrc")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" Additionally to defining a schema for "),s("code",[t._v(".babelrc")]),t._v(", also make sure that "),s("code",[t._v(".babelrc")]),t._v(" is associated to the JSON language mode. This is also done in the settings using the "),s("code",[t._v("files.association")]),t._v(" array setting.")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("小贴士:")]),t._v(" 此外，以定义一个模式"),s("code",[t._v(".babelrc")]),t._v("，也要确保"),s("code",[t._v(".babelrc")]),t._v("关联到JSON语言。这也可以使用"),s("code",[t._v("files.associative")]),t._v("数组设置的设置来完成。")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip:")]),t._v(" For an overview on settings, see "),s("RouterLink",{attrs:{to:"/docs/customization/userandworkspace.html"}},[t._v("User and Workspace Settings")]),t._v(".")],1)]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("小贴士:")]),t._v(" 有关设置的概述，参考"),s("RouterLink",{attrs:{to:"/docs/customization/userandworkspace.html"}},[t._v("用户和工作区设置")]),t._v("。")],1)]),t._v(" "),s("h3",{attrs:{id:"在工作区中映射到模式-mapping-to-a-schema-in-the-workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在工作区中映射到模式-mapping-to-a-schema-in-the-workspace"}},[t._v("#")]),t._v(" 在工作区中映射到模式  Mapping to a Schema in the Workspace")]),t._v(" "),s("p",[t._v("To map a schema that is located in the workspace, use a relative path. In this example, a file in the workspace root called "),s("code",[t._v("myschema.json")]),t._v(" will be used as the schema for all files ending with "),s("code",[t._v(".foo.json")]),t._v(".")]),t._v(" "),s("p",[t._v("要映射位于工作区中的模式，请使用相对路径。在这个例子中，位于工作空间中的根的"),s("code",[t._v("myschema.json")]),t._v("文件，被用来当作所有"),s("code",[t._v(".foo.json")]),t._v("结尾的文件的模式。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"json.schemas"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileMatch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/*.foo.json"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./myschema.json"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"在设置中定义映射到模式-mapping-to-a-schema-defined-in-settindgs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在设置中定义映射到模式-mapping-to-a-schema-defined-in-settindgs"}},[t._v("#")]),t._v(" 在设置中定义映射到模式  Mapping to a Schema Defined in Settindgs")]),t._v(" "),s("p",[t._v("To map a schema that is defined in the User or Workspace Settings, use the "),s("code",[t._v("schema")]),t._v(" property. In this example, a schema is defined that will be used for all files named "),s("code",[t._v(".myconfig")]),t._v(".")]),t._v(" "),s("p",[t._v("要映射在用户或工作区设置中定义一个模式，使用"),s("code",[t._v("schema")]),t._v("属性。在这个例子中，定义一个模式用于所有"),s("code",[t._v(".myconfig")]),t._v("的文件。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"json.schemas"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileMatch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.myconfig"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the entry"')]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"在扩展中映射一个模式-mapping-a-schema-in-an-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在扩展中映射一个模式-mapping-a-schema-in-an-extension"}},[t._v("#")]),t._v(" 在扩展中映射一个模式 Mapping a Schema in an Extension")]),t._v(" "),s("p",[t._v("Schemas and schema associations can also be defined by an extension. Check out the "),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-points.html#contributesjsonvalidation"}},[t._v("jsonValidation contribution point")]),t._v(".")],1),t._v(" "),s("p",[t._v("模式和模式关联也可以通过一个扩展来定义，查看"),s("RouterLink",{attrs:{to:"/docs/extensionAPI/extension-points.html#contributesjsonvalidation"}},[t._v("jsonValidation contribution point")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"下一步-next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步-next-steps"}},[t._v("#")]),t._v(" 下一步  Next Steps")]),t._v(" "),s("p",[t._v("Read on to find out about:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/docs/customization/overview.html"}},[t._v("Customization")]),t._v(" - Customize VS Code to work the way you want")],1)]),t._v(" "),s("p",[t._v("请仔细阅读，了解：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/docs/customization/overview.html"}},[t._v("定制")]),t._v(" - 根据你所希望的工作方式，自定义 VS Code")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);