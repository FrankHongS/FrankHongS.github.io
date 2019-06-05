import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'BlogList',
            component: BlogList
        },
        {
            // path: '/detail',
            path: '/detail/:title',
            name: 'BlogDetail',
            component: BlogDetail
        }
    ]
});