import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";
import App from "../App"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "导航1",
        component: App,
        children: [
            {
                path: "/pageOne",
                name: "页面1",
                component: PageOne
            },
            {
                path: '/pageTwo',
                name: '页面2',
                component: PageTwo
            }
        ]
    },
    {
        path: '/navigation',
        name: "导航2",
        component: App,
        children: [
            {
                path: '/pageThree',
                name: '页面3',
                component: PageThree
            },
            {
                path: '/pageFour',
                name: '页面4关于组织开展2020年秋冬学期推荐优秀团员作入党积极分子的通知',
                component: PageFour
            }
        ]
    }


    /*{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    },
    {
      path: '/sample_info',
      name: 'SampleInfo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../views/SampleInfo.vue')
    }*/
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
