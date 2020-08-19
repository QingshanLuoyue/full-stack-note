import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [{
            name: 'about',
            path: '/about',
            meta: { title: 'about' },
            component: () => import('@/views/about.vue'),
        },{
            name: 'list',
            path: '/list',
            meta: { title: 'list' },
            component: () => import('@/views/list.vue'),
        },{
            name: 'user',
            path: '/user',
            meta: { title: 'user' },
            component: () => import('@/views/user.vue'),
        }]
})