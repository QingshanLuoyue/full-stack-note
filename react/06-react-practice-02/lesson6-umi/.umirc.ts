import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: { type: 'none', },
    routes: [
        {
            path: '/',
            component: '@/pages/layout/index',
            routes: [
                { path: '/', component: '@/pages/index' },
                { path: '/about', component: '@/pages/about' },
                { path: '/more', component: '@/pages/more/index' },
                // { path: '/product/:id', component: '@/pages/product/[id]' },        
                {
                    path: '/product/:id',
                    component: '@/pages/product/_layout',
                    routes: [
                        {
                            path: '/product/:id',
                            component: '@/pages/product/[id]'
                        }
                    ],
                },
            ],
        }
        // { exact: true, path: '/', component: 'index' },
        // { exact: true, path: '/user', component: 'user' },
        // { path: '*', component: '@/pages/404' },
    ],
})