import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';

const Home = () => import("views/home/Home.vue")
const Login = () => import("views/login/Login.vue")
const Register = () => import("views/login/Register.vue")
const ChannelNews = () => import("views/channelNews/ChannelNews.vue")
const NotFound = () => import("views/404/NotFound.vue")
const Personal = () => import("views/personal/Personal.vue")

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/register",
      name: 'Reg',
      component: Register
    },
    {
      path: '/channel/:id',
      name: "ChannelNews",
      component: ChannelNews,
    },
    {
      path: '/personal/:loginId',
      name: "Personal",
      component: Personal,
      meta: {
        auth: true
      }
    },
    {
      path: '/auth',
      name: "Auth",
      component: () => import("views/personal/Auth.vue")
    },
    {
      path: '/prot',
      name: "Prot",
      component: () => import("views/Protected.vue"),
      meta: {
        auth: true
      }
    },
    {
      path: "*",
      name: '404',
      component: NotFound
    }
  ]
})
// 路由导航
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录验证
    if (store.state.loginUser.isLoading) {
      next({
        name: 'Auth',
        query: {
          toUrl: to.fullPath
        }
      })
    } else if (store.state.loginUser.user) {
      next()
    } else {
      next({
        name: "Login"
      })
    }
  } else {
    next()
  }
})

export default router