import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import preview from '@/components/preview'
import confirm from '@/components/confirm'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home Page',
            component: HomePage
        },
        {
            path: '/preview/:id',
            name: 'preview',
            component: preview
        },
        {
            path: '/confirm/:id',
            name: 'confirm',
            component: confirm
        }
    ]
})
