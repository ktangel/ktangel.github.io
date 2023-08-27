(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{286:function(t,a,s){},326:function(t,a,s){"use strict";var e=s(286);s.n(e).a},476:function(t,a,s){"use strict";s.r(a);s(326);var e=s(33),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"markdown-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展"}},[t._v("#")]),t._v(" Markdown 拓展")]),t._v(" "),s("h2",{attrs:{id:"header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors"}},[t._v("#")]),t._v(" Header Anchors")]),t._v(" "),s("p",[t._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),s("RouterLink",{attrs:{to:"/vuepress/config/#markdown-anchor"}},[s("code",[t._v("markdown.anchor")])]),t._v(" 来配置。")],1),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("h3",{attrs:{id:"内部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[t._v("#")]),t._v(" 内部链接")]),t._v(" "),s("p",[t._v("内部的、并以 "),s("code",[t._v(".md")]),t._v(" or "),s("code",[t._v(".html")]),t._v(" 结尾的链接，将会被转换成 "),s("code",[t._v("<router-link>")]),t._v(" 用于 SPA 导航。")]),t._v(" "),s("p",[t._v("站内的每一个子文件夹都应当有一个 "),s("code",[t._v("README.md")]),t._v(" 文件，它会被自动编译为 "),s("code",[t._v("index.html")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("在链接到一个文件夹的 "),s("code",[t._v("index.html")]),t._v(" 时，确保你的链接以 "),s("code",[t._v("/")]),t._v(" 结尾，否则该链接将导致 404。比如，用 "),s("code",[t._v("/config/")]),t._v(" 而不是 "),s("code",[t._v("/config")]),t._v("。")])]),t._v(" "),s("p",[t._v("如果你想要链接到另一个 markdown 文件：")]),t._v(" "),s("ol",[s("li",[t._v("确保链接以 "),s("code",[t._v(".html")]),t._v(" 或 "),s("code",[t._v(".md")]),t._v(" 结尾；")]),t._v(" "),s("li",[t._v("确保路径大小写正确，因为路径的匹配是大小写敏感的。")])]),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("以如下的文件结构为例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("](/)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("](/foo/)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading anchor")]),t._v("](/foo/#heading)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定 anchor 位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo - one")]),t._v("](/foo/one.html)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .html 结尾 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo - two")]),t._v("](/foo/two.md)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .md --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"外部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部链接"}},[t._v("#")]),t._v(" 外部链接")]),t._v(" "),s("p",[t._v("外部的链接将会被自动地设置为  "),s("code",[t._v('target="_blank" rel="noopener noreferrer"')]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("你可以自定义通过配置 "),s("RouterLink",{attrs:{to:"/vuepress/config/#markdown-externallinks"}},[t._v("config.markdown.externalLinks")]),t._v(" 来自定义外部链接的特性。")],1),t._v(" "),s("h2",{attrs:{id:"front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),s("p",[t._v("VuePress 提供了对 "),s("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),s("OutboundLink")],1),t._v(" 开箱即用的支持:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("这些数据可以在当前页的正文中使用，在任意的自定义或主题组件中，它可以通过 "),s("code",[t._v("$page")]),t._v(" 来访问。")]),t._v(" "),s("p",[s("code",[t._v("title")]),t._v(" 和 "),s("code",[t._v("lang")]),t._v(" 的 meta 将会被自动地注入到当前的页面中，当然你也可以指定一些额外需要注入的 meta：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("h3",{attrs:{id:"其他格式的-front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他格式的-front-matter"}},[t._v("#")]),t._v(" 其他格式的 Front Matter")]),t._v(" "),s("p",[t._v("除了 YAML 之外，VuePress 也支持 JSON 或者 "),s("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),s("OutboundLink")],1),t._v(" 格式的 front matter。")]),t._v(" "),s("p",[t._v("JSON front matter 需要以花括号开头和结尾：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),s("p",[t._v("TOML front matter 需要显式地标注为 TOML：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),s("h2",{attrs:{id:"github-风格的表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格"}},[t._v("#")]),t._v(" GitHub 风格的表格")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tables")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("col 3 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),s("tr",[s("td",[t._v("col 2 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),s("tr",[s("td",[t._v("zebra stripes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),s("h2",{attrs:{id:"emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[t._v("#")]),t._v(" Emoji")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":tada: :100:\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("p",[t._v("🎉 💯")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[[toc]]\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),s("li",[s("a",{attrs:{href:"#链接"}},[t._v("链接")]),s("ul",[s("li",[s("a",{attrs:{href:"#内部链接"}},[t._v("内部链接")])]),s("li",[s("a",{attrs:{href:"#外部链接"}},[t._v("外部链接")])])])]),s("li",[s("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")]),s("ul",[s("li",[s("a",{attrs:{href:"#其他格式的-front-matter"}},[t._v("其他格式的 Front Matter")])])])]),s("li",[s("a",{attrs:{href:"#github-风格的表格"}},[t._v("GitHub 风格的表格")])]),s("li",[s("a",{attrs:{href:"#emoji"}},[t._v("Emoji")])]),s("li",[s("a",{attrs:{href:"#目录"}},[t._v("目录")])]),s("li",[s("a",{attrs:{href:"#自定义容器"}},[t._v("自定义容器")])]),s("li",[s("a",{attrs:{href:"#代码块中的行高亮"}},[t._v("代码块中的行高亮")])]),s("li",[s("a",{attrs:{href:"#行号"}},[t._v("行号")])]),s("li",[s("a",{attrs:{href:"#导入代码段-badge-text-beta-type-warn-badge-text-0-10-1-type-tip"}},[t._v("导入代码段 "),s("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),s("Badge",{attrs:{text:"0.10.1+",type:"tip"}})],1)]),s("li",[s("a",{attrs:{href:"#进阶配置"}},[t._v("进阶配置")])])])]),s("p"),t._v(" "),s("p",[t._v("目录（Table of Contents）的渲染可以通过  "),s("RouterLink",{attrs:{to:"/vuepress/config/#markdown-toc"}},[s("code",[t._v("markdown.toc")])]),t._v(" 选项来配置。")],1),t._v(" "),s("h2",{attrs:{id:"自定义容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[t._v("#")]),t._v(" 自定义容器")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("This is a tip")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[t._v("This is a warning")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("This is a dangerous thing")])]),t._v(" "),s("p",[t._v("你也可以自定义块中的标题：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("STOP")]),t._v(" "),s("p",[t._v("Danger zone, do not proceed")])]),t._v(" "),s("h2",{attrs:{id:"代码块中的行高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮"}},[t._v("#")]),t._v(" 代码块中的行高亮")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"行号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行号"}},[t._v("#")]),t._v(" 行号")]),t._v(" "),s("p",[t._v("你可以通过配置来为每个代码块显示行号：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineNumbers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),t._v(" "),s("ul",[s("li",[t._v("示例:")])]),t._v(" "),s("picture",[s("source",{attrs:{srcset:"/line-numbers-desktop.png",media:"(min-width: 719px)"}}),t._v(" "),s("img",{staticClass:"line-numbers-desktop-snap",attrs:{alt:"Image"}})]),t._v(" "),s("picture",[s("source",{attrs:{srcset:"/line-numbers-mobile.gif",media:"(max-width: 719px)"}}),t._v(" "),s("img",{staticClass:"line-numbers-mobile-snap",attrs:{alt:"Image"}})]),t._v(" "),s("h2",{attrs:{id:"导入代码段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入代码段"}},[t._v("#")]),t._v(" 导入代码段 "),s("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),s("Badge",{attrs:{text:"0.10.1+",type:"tip"}})],1),t._v(" "),s("p",[t._v("你可以通过下述的语法导入已经存在的文件中的代码段：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<<< @/filepath\n")])])]),s("p",[t._v("它也支持 "),s("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE"}},[t._v("行高亮")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<<< @/filepath{highlightLines} \n")])])]),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <<< ·@/test/markdown/fragments/snippet.js{2}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("p",[s("code",[t._v("\x3c!-- <<< @/test\\markdown\\fragments\\snippet.js{2} --\x3e")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 "),s("code",[t._v("@")]),t._v(" 默认值是 "),s("code",[t._v("process.cwd()")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"进阶配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置"}},[t._v("#")]),t._v(" 进阶配置")]),t._v(" "),s("p",[t._v("VuePress 使用 "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 "),s("code",[t._v(".vuepress/config.js")]),t._v(" 的 "),s("code",[t._v("markdown")]),t._v(" 选项，来对当前的 "),s("code",[t._v("markdown-it")]),t._v(" 实例做一些自定义的配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// markdown-it-anchor 的选项")]),t._v("\n    anchor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// markdown-it-toc 的选项")]),t._v("\n    toc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用更多的 markdown-it 插件!")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);