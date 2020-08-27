import VueRouter from 'vue-router'

import home from '../../components/home.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import buy from '../../components/buy.vue'
import buycat from '../../components/buycat.vue'
import people from '../../components/people.vue'
import login from '../../components/login.vue'
import login_ph from '../../components/login_ph.vue'
import login_em from '../../components/login_em.vue'
import login_ph_m from '../../components/login_ph_m.vue'
import login_em_zc from '../../components/login_em_zc.vue'
import detail from '../../components/detail.vue'
import ad_app from '../../components/ad_app.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:home,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/buy',
                    component:buy
                },
                {
                    path:'/buycat',
                    component:buycat
                },
                {
                    path:'/people',
                    component:people
                },
                
            ],
            redirect:'/index'
        },
        {
            path:'/detail/:id',
            component:detail,
        },
        {
            path:'/ad_app',
            component:ad_app,
        },
        {
            path:'/login',
            component:login,
        },
        {
            path:'/login_ph',
            component:login_ph,
        },
        {
            path:'/login_ph_m',
            component:login_ph_m,
        },
        {
            path:'/login_em',
            component:login_em,
        },
        {
            path:'/login_em_zc',
            component:login_em_zc,
        },
        {
            path:'/*',
            redirect:'/index'
        },
    ]
})