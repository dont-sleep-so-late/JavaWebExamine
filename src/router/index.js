import Vue from 'vue'
// 该文件专门用于创建整个应用的路由器
import Router from 'vue-router'
//引入组件
import Login from '../pages/login'
import Index from '../pages/index'
import Banner from '../components/Banner'
import Share from '../pages/Share'
import lijiacheng from '../pages/lijiacheng'
import mahuateng from '../pages/mahuateng'
import aiaiguo from '../pages/aiaiguo'
import jobs from '../pages/jobs'


//创建并暴露一个路由器
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: Banner,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            meta: {
                title: '工匠精神 | 登录',
            }
        },
        {
            path: '/Banner',
            component: Banner,
            name: 'Banner',
            redirect: 'Banner/Index',
            children: [
                {
                    path: 'Index',
                    name: 'Index',
                    component: Index,
                    meta: {
                        title: '工匠精神',
                    }
                },
                {
                    path: 'Share',
                    name: 'Share',
                    component: Share,
                    meta: {
                        title: '工匠精神 | 人物分享',
                    }
                },
                {
                    path: 'lijiacheng',
                    name: 'lijiacheng',
                    component: lijiacheng,
                    meta: {
                        title: '工匠精神 | 李嘉诚',
                    }
                },
                {
                    path: 'mahuateng',
                    name: 'mahuateng',
                    component: mahuateng,
                    meta: {
                        title: '工匠精神 | 马化腾',
                    }
                },
                {
                    path: 'aiaiguo',
                    name: 'aiaiguo',
                    component: aiaiguo,
                    meta: {
                        title: '工匠精神 | 艾爱国',
                    }
                },
                {
                    path: 'jobs',
                    name: 'jobs',
                    component: jobs,
                    meta: {
                        title: '工匠精神 | 史蒂夫·乔布斯',
                    }
                },
            ]
        },


    ]
})
Vue.use(Router)

// 挂载路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) { // 判断是否有标题
        document.title = to.meta.title;
    }
    if (to.path === '/Login' || to.path === '/' || to.path === '/Banner/Index') return next()
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (tokenStr === null || tokenStr === "") {
        return next('/Login')
    }
    next()
})

export default router