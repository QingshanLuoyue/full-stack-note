const fs = require('fs')
// const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () => {
    // 获取页面列表
    console.log('fs.readdirSy>> ', fs.readdirSync('./src/views'));
    const list =
        fs.readdirSync('./src/views')
            .map(v => ({
                name: v.replace('.vue', '').toLowerCase(),
                file: v
            }))
    console.log('list :>> ', list);
    productRoutes(list)
    productApp(list)

    // compile({
    //     list
    // }, './src/router.js', './template/router.js.hbs')

    // // 生成菜单
    // compile({
    //     list
    // }, './src/App.vue', './template/App.vue.hbs')



    // /**
    //  * 
    //  * @param {*} meta 
    //  * @param {*} filePath 
    //  * @param {*} templatePath 
    //  */
    // function compile(meta, filePath, templatePath) {
    //     if (fs.existsSync(templatePath)) {
    //         const content = fs.readFileSync(templatePath).toString()
    //         const reslut = handlebars.compile(content)(meta)
    //         fs.writeFileSync(filePath, reslut)
    //     }
    //     console.log(chalk.red(`🚀${filePath} 创建成功`))
    // }
}

// 自动生成 router-link
function productApp(list) {
    let s = ''
    list.forEach(item => {
        s += 
        `<router-link to="/${item.name}">${item.name}</router-link>`
    })
let str = 
`<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
  ${s}
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
name: 'App',
components: {
  HelloWorld
}
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
`
    fs.writeFileSync('./src/App.vue', str)
    console.log(chalk.red(`./src/App.vue 自动构建路由成功`))
}

// 自动生成路由
function productRoutes(list) {
    let routes = []
    let s = ''
    list.forEach(item => {
        s += 
        `{
            name: '${item.name}',
            path: '/${item.name}',
            meta: { title: '${item.name}' },
            component: () => import('@/views/${item.name}.vue'),
        },`
    })
    s = s.slice(0, -1)
let str = 
`import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [${s}]
})`
    fs.writeFileSync('./src/router/index.js', str)
    console.log(chalk.red(`./src/router/index.js 自动构建路由成功`))
}