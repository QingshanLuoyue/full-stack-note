// 暗号：村长喊你来搬砖

import Vue from 'vue'
import ToastComponent from './index.vue'

// 构造器
let ToastConstructor = Vue.extend(ToastComponent)

function Toast(data = { msg: 'hello', duration: 3000 }) {
    let el = null

    // 实例化 Vue 实例
    let toastInstance = new ToastConstructor({ data }).$mount()

    // 获取 dom 元素
    el = toastInstance.$el

    // 挂在在 body 上
    document.body.appendChild(el)

    // 销毁
    toastInstance.remove = function() {
        document.body.removeChild(toastInstance.$el)
        toastInstance.$destroy()
    }
    
    return toastInstance
}

export default Toast