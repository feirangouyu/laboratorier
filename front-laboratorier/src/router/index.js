import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Account = () => import('views/account/Account')
const HygieneTab = () => import('views/hygienetab/HygieneTab')
const Materials = () => import('views/materials/Materials')
const Seat = () => import('views/seat/Seat')
const UserInfo = () => import('views/userinfo/UserInfo')



const AccoLab = () => import('views/account/childComps/AccoLab')

const Labf608 =()=> import('views/seat/childComps/seatTab/Labf608')
const Labf609 =()=> import('views/seat/childComps/seatTab/Labf609')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
    children: [
      {
        path: ":labId",
        component: AccoLab
      },
      {
        path: "",
        redirect: 'F608'
      }
    ]
  },
  {
    path: '/hygienetab',
    component: HygieneTab
  },
  {
    path: '/materials',
    component:Materials
  },
  {
    path: '/seat',
    component:Seat,
    children:[
      {
        path:'',
        redirect: 'f609'
      },
      {
        path: 'f609',
        component:Labf609
      },
      {
        path: 'f608',
        component:Labf608
      },
    ]

  },
  {
    path: '/userinfo',
    component:UserInfo
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
