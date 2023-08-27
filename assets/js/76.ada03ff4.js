(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{399:function(e,o,r){"use strict";r.r(o);var t=r(33),c=Object(t.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"使用docker工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用docker工作"}},[e._v("#")]),e._v(" 使用Docker工作")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" 是现今十分热门的容器引擎，可以让你轻松地打包、部署和使用应用程序以及服务。无论你是一个经验丰富的Docker开发者还是刚刚开始学习它，Visual Studio Code都可以让你轻松地创造"),r("code",[e._v("Dockerfile")]),e._v("和"),r("code",[e._v("docker-compose.yml")]),e._v("两个文件到你的开发目录中。")]),e._v(" "),r("h2",{attrs:{id:"安装docker扩展插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装docker扩展插件"}},[e._v("#")]),e._v(" 安装Docker扩展插件")]),e._v(" "),r("p",[e._v("VS Code通过插件的方式支持Docker的使用。安装这一扩展插件，只需要按下"),r("code",[e._v("kb(workbench.action.showCommands)")]),e._v('，然后输入"ext install"并且运行'),r("strong",[e._v("Extensions: Install Extension")]),e._v("命令来获得目前支持的插件列表。现在输入docker搜索所需插件然后选择"),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile and Docker Compose File (yml) Support"),r("OutboundLink")],1),e._v("插件。")]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/installdockerextension.png",alt:"Select Docker extension"}})]),e._v(" "),r("h2",{attrs:{id:"dockerfiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dockerfiles"}},[e._v("#")]),e._v(" Dockerfiles")]),e._v(" "),r("p",[e._v("通过Docker，你可以指定一系列的命令，通过它们在"),r("code",[e._v("Dockerfile")]),e._v("中建立镜像。一个Dockerfile是包含着一系列安装指令的文本脚本。")]),e._v(" "),r("p",[e._v("VS Code 很清楚Dockerfiles的结构以及可以使用的指令集，这意味着当你使用VS Code编辑这些文件时它可以给予你很多的经验指导。")]),e._v(" "),r("ol",[r("li",[e._v("在你的工作目录中创建一个新的文件命名为"),r("code",[e._v("Dockerfile")])]),e._v(" "),r("li",[e._v("按下"),r("code",[e._v("kb(editor.action.triggerSuggest)")]),e._v("来获得"),r("code",[e._v("Dockerfile")]),e._v("中命令的补全")])]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockerfileintellisense.png",alt:"Dockerfile snippets"}})]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("按下"),r("code",[e._v("kbstyle(Tab)")]),e._v("在段落中不同的区域移动。比如说，在"),r("code",[e._v("COPY")]),e._v("部分你可以输入"),r("code",[e._v("source")]),e._v("，接着按下"),r("code",[e._v("kbstyle(Tab)")]),e._v("移动到"),r("code",[e._v("dest")]),e._v("部分。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockerfiletemplate.png",alt:"Dockerfile snippet navigation"}})]),e._v(" "),r("p",[e._v("除了编辑"),r("code",[e._v("Dockerfile")]),e._v("时的各种功能，当你放置鼠标在一个Docker命令上的时候，Visual Studio Code将会提供关于这个命令的描述。比如说，当你的鼠标放到"),r("code",[e._v("WORKDIR")]),e._v("上面的时候你将可以看到以下描述。")]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockerfiletooltip.png",alt:"Dockerfile hover tooltip"}})]),e._v(" "),r("p",[e._v("想要获取更多关于Dockerfiles的信息，可以进入在"),r("a",{attrs:{href:"http://docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker.com"),r("OutboundLink")],1),e._v("上面的"),r("a",{attrs:{href:"https://docs.docker.com/articles/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile best practices"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"docker-compose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker compose")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),r("OutboundLink")],1),e._v("让你可以通过Docker定义以及运行多容器应用。你可以通过一个叫做"),r("code",[e._v("docker-compose.yml")]),e._v("的文件来定义容器的外形。")]),e._v(" "),r("p",[e._v("对于"),r("code",[e._v("docker-compose.yml")]),e._v("，Visual Studio Code的功能同样也是十分丰富的。它可以为合法的Docker compose指令提供IntelliSense,以及帮助你查询Docker Hub找到适合的镜像。")]),e._v(" "),r("ol",[r("li",[e._v("在你的工作目录中创建一个名为"),r("code",[e._v("docker-compose.yml")]),e._v("的新文件")]),e._v(" "),r("li",[e._v("定义一个新的服务成为"),r("code",[e._v("web:")])]),e._v(" "),r("li",[e._v("在第二行，通过"),r("code",[e._v("kb(editor.action.triggerSuggest)")]),e._v("引入IntelliSense来查看所有合法的指令列表")])]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockercomposeintellisense.png",alt:"Docker Compose IntelliSense"}})]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("对于"),r("code",[e._v("image")]),e._v("指令，你可以再次输入"),r("code",[e._v("kb(editor.action.triggerSuggest)")]),e._v("来完成，而且VS Code会帮你在Docker Hub上查询公开的镜像。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockercomposeimageintellisense.png",alt:"Docker Compose image suggestions"}})]),e._v(" "),r("p",[e._v("VS Code 第一次使用会根据一些元数据比如说star的数量和描述去为你显示一系列热门的镜像。如果你继续输入，VS code会查询Docker Hub的索引去找到更加符合的镜像，包括搜索公开的profiles。比如说，搜索"),r("code",[e._v("Microsoft")]),e._v("会显示所有微软的镜像。")]),e._v(" "),r("p",[r("img",{attrs:{src:"images/docker/dockercomposesearch.png",alt:"Docker Compose Microsoft image suggestions"}})])])}),[],!1,null,null,null);o.default=c.exports}}]);