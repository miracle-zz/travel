import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const City = () => import('../views/city/City.vue')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: 'home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/city',
  component: City
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
