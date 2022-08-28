(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{356:function(v,e,t){"use strict";t.r(e);var _=t(3),i=Object(_.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"吾不该止步于此-如何搭建一个-vue3-项目-谁看谁不迷糊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#吾不该止步于此-如何搭建一个-vue3-项目-谁看谁不迷糊"}},[v._v("#")]),v._v(" 吾不该止步于此！如何搭建一个 VUE3 项目? 谁看谁不迷糊")]),v._v(" "),e("h2",{attrs:{id:"脚手架安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架安装"}},[v._v("#")]),v._v(" 脚手架安装")]),v._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[v._v("npm init vite project_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),v._v("template vue\n选择vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("+")]),v._v("ts项目\n确认之后进入根目录，下载依赖\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])]),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[v._v("#")]),v._v(" 初始化")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("安装vue-router")]),v._v(" "),e("ul",[e("li",[v._v("在路由文件下，使用createRouter创建路由实例对象，使用history模式，createWebHashHistory")]),v._v(" "),e("li",[v._v("导出路由对象")]),v._v(" "),e("li",[v._v("在"),e("code",[v._v("main.ts")]),v._v("文件下导入，并且使用app.use(router)挂载到vue实例上")])])]),v._v(" "),e("li",[e("p",[v._v("安装状态管理vuex")]),v._v(" "),e("ul",[e("li",[v._v("在状态管理文件下，使用createStore创建vuex实例对象")]),v._v(" "),e("li",[v._v("导出状态管理对象")]),v._v(" "),e("li",[v._v("在"),e("code",[v._v("main.ts")]),v._v("文件下导入，并且使用app.use(store)挂载到vue实例上")])])]),v._v(" "),e("li",[e("p",[v._v("配置路径别名")]),v._v(" "),e("ul",[e("li",[v._v("在vite.config.js文件下，配置resolve.alias")])])]),v._v(" "),e("li",[e("p",[v._v("配置script中name属性")]),v._v(" "),e("ul",[e("li",[v._v("yarn add vite-plugin-vue-setup-extend -D")])])])]),v._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他")]),v._v(" "),e("ul",[e("li",[v._v("使用node内置模块\n"),e("ul",[e("li",[v._v("@types/node")])])]),v._v(" "),e("li",[v._v("svg\n"),e("ul",[e("li",[v._v("vite-plugin-svg-icons")])])]),v._v(" "),e("li",[v._v("自动导入vue的api\n"),e("ul",[e("li",[v._v("unplugin-auto-import")])])]),v._v(" "),e("li",[v._v("自动导入组件\n"),e("ul",[e("li",[v._v("unplugin-vue-components")])])]),v._v(" "),e("li",[v._v("yapi自动生成接口和响应\n"),e("ul",[e("li",[v._v("yapi-to-typescript")])])])]),v._v(" "),e("h2",{attrs:{id:"question"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[v._v("#")]),v._v(" question")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("vue3-setup中获取dom节点的ref")]),v._v(" "),e("ul",[e("li",[v._v("onMounted中可以获取dom节点")]),v._v(" "),e("li",[v._v("获取dom节点并且修改style")])])]),v._v(" "),e("li",[e("p",[v._v("父组件获取子组件的属性或者方法")]),v._v(" "),e("ul",[e("li",[v._v("子组件需要通过defineExpose把属性或者方法暴露出去")])])]),v._v(" "),e("li",[e("p",[v._v("声明数据时，对于ref数据需要变量.value访问数据，对于reactive数据不能重新赋值，否则会失去响应式")])]),v._v(" "),e("li",[e("p",[v._v("移动端ui组件库的选择")]),v._v(" "),e("ul",[e("li",[v._v("vant支持vue3")]),v._v(" "),e("li",[v._v("同时vant组件的占用大小相对较小")])])]),v._v(" "),e("li",[e("p",[v._v("vant组件按需引入")]),v._v(" "),e("ul",[e("li",[v._v("有些组件需要单独引入(Toast、Dialog)")])])]),v._v(" "),e("li",[e("p",[v._v("更新依赖")]),v._v(" "),e("ul",[e("li",[v._v("npm install -g npm-check-updates")]),v._v(" "),e("li",[v._v("ncu -u")]),v._v(" "),e("li",[v._v("npm i")])])]),v._v(" "),e("li",[e("p",[v._v("typeerror: cannot read properties of null (reading 'contains')")])]),v._v(" "),e("li",[e("p",[v._v("div没有设置大小")])]),v._v(" "),e("li",[e("p",[v._v("VUE如何实现局部刷新")]),v._v(" "),e("ul",[e("li",[v._v("vue2用的foceupdate")]),v._v(" "),e("li",[v._v("provide和inject搭配")])])]),v._v(" "),e("li",[e("p",[v._v("基本数据类型转换")])]),v._v(" "),e("li",[e("p",[v._v("vue3父组件调用子组件方法")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);