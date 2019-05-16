import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/detail/:title',
            component: BlogDetail
        }
    ]
});