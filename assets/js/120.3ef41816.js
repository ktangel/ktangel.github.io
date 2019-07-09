(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{309:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义主题")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("主题组件受到同样的 "),a("router-link",{attrs:{to:"/vuepress/guide/using-vue.html#浏览器的-api-访问限制"}},[t._v("浏览器的 API 访问限制")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("VuePress 使用单文件组件来构建自定义主题。想要开发一个自定义主题，首先在你的文档根目录新建一个 "),a("code",[t._v(".vuepress/theme")]),t._v(" 文件夹，然后再创建一个 "),a("code",[t._v("Layout.vue")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n└─ .vuepress\n   └─ theme\n      └─ Layout.vue\n")])])]),a("p",[t._v("从这里开始，就和开发一个平时的 Vue 应用一样了，如何组织你的主题完全取决于你。")]),t._v(" "),a("h2",{attrs:{id:"网站和页面的元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站和页面的元数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站和页面的元数据")]),t._v(" "),a("p",[a("code",[t._v("Layout")]),t._v(" 组件将会对每一个文档目录下的 "),a("code",[t._v(".md")]),t._v(" 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 "),a("code",[t._v("this.$site")]),t._v(" 和 "),a("code",[t._v("this.$page")]),t._v(" 属性，它们将会被注入到每一个当前应用的组件中。")]),t._v(" "),a("p",[t._v("这是你现在看到的这个网站的 "),a("code",[t._v("$site")]),t._v(" 的值：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue 驱动的静态网站生成器"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("title")]),t._v(", "),a("code",[t._v("description")]),t._v(" 和 "),a("code",[t._v("base")]),t._v(" 会从 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中对应的的字段复制过来，而 "),a("code",[t._v("pages")]),t._v(" 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题（明确地通过 "),a("router-link",{attrs:{to:"/vuepress/guide/markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" 指定，或者通过该页面的第一个标题取到），以及所有源文件中的 "),a("code",[t._v("YAML front matter")]),t._v(" 的数据。")],1),t._v(" "),a("p",[t._v("下面的这个对象是你正在看的这个页面的 "),a("code",[t._v("$page")]),t._v(" 的值：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/custom-themes.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"自定义主题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果用户在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 配置了 "),a("code",[t._v("themeConfig")]),t._v("，你将可以通过 "),a("code",[t._v("$site.themeConfig")]),t._v(" 访问到它。如此一来，你可以通过它来对用户开放一些自定义主题的配置 —— 比如指定目录或者页面的顺序，你也可以结合 "),a("code",[t._v("$site.pages")]),t._v(" 来动态地构建导航链接。")]),t._v(" "),a("p",[t._v("最后，别忘了，作为 Vue Router API 的一部分，"),a("code",[t._v("this.$route")]),t._v(" 和 "),a("code",[t._v("this.$router")]),t._v(" 同样可以使用。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("lastUpdated")]),t._v(" 是这个文件最后一次 git 提交的 UNIX 时间戳，更多细节请参考："),a("router-link",{attrs:{to:"/vuepress/default-theme-config/#最后更新时间"}},[t._v("最后更新时间")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"内容摘抄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容摘抄","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容摘抄")]),t._v(" "),a("p",[t._v("如果一个 markdown 文件中有一个 "),a("code",[t._v("\x3c!-- more --\x3e")]),t._v(" 注释，则该注释之前的内容会被抓取并暴露在 "),a("code",[t._v("$page.excerpt")]),t._v(" 属性中。如果你在开发一个博客主题，你可以用这个属性来渲染一个带摘抄的文章列表。")]),t._v(" "),a("h2",{attrs:{id:"获取渲染内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取渲染内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取渲染内容")]),t._v(" "),a("p",[t._v("当前的 "),a("code",[t._v(".md")]),t._v(" 文件渲染的内容，可以作为一个独特的全局组件 "),a("code",[t._v("<Content/>")]),t._v(" 来使用，你可能想要它显示在页面中的某个地方。一个最简单的主题，可以是一个唯一的 "),a("code",[t._v("Layout.vue")]),t._v(" 组件，并包含以下内容：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用配置")]),t._v(" "),a("p",[t._v("自定义主题也可以通过主题根目录下的 "),a("code",[t._v("enhanceApp.js")]),t._v(" 文件来对 VuePress 应用进行拓展配置。这个文件应当 "),a("code",[t._v("export default")]),t._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VuePress 正在使用的 Vue 构造函数")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 附加到根实例的一些选项")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前应用的路由实例")]),t._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 站点元数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...做一些其他的应用级别的优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用来自-npm-的主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用来自-npm-的主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用来自 npm 的主题")]),t._v(" "),a("p",[t._v("主题可以以 Vue 单文件组件的格式，并以 "),a("code",[t._v("vuepress-theme-xxx")]),t._v(" 的名称发布到 npm 上。")]),t._v(" "),a("p",[t._v("如果想使用一个来自 npm 的主题，你需要在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 补充 "),a("code",[t._v("theme")]),t._v(" 选项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("VuePress 将会尝试去加载并使用位于 "),a("code",[t._v("node_modules/vuepress-theme-awesome/Layout.vue")]),t._v(" 的主题组件。")]),t._v(" "),a("h2",{attrs:{id:"修改默认主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改默认主题")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("vuepress eject [targetDir]")]),t._v(" 这个命令来将默认主题的源码复制到 "),a("code",[t._v(".vuepress/theme")]),t._v(" 文件夹下，从而可以对默认主题进行任意的修改。需要注意的是一旦 eject，即使升级 VuePress 你也无法再获得 VuePress 对默认主题的更新。")])])},[],!1,null,null,null);s.default=n.exports}}]);