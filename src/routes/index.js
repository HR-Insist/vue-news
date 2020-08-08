import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Login = () => import("views/login/Login.vue")
const Register = () => import("views/login/Register.vue")
const ChannelNews = () => import("views/channelNews/ChannelNews.vue")
const NotFound = () => import("views/404/NotFound.vue")

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
      // props: (route) => ({
      //   query: route.query.page
      // })
    },
    {
      path: "*",
      name: '404',
      component: NotFound
    }
  ]
})

export default router