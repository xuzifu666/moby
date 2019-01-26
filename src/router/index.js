import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Contact from '@/components/Contact'
import Setting from '@/components/Setting'
import Message from '@/components/Message'
import NewsList from '@/components/NewsList'
import store from '../store'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name : 'Home',
      component: Home,
      children : [
        {
          name : '主页',
          path : 'index',
          component : Index
        },
        {
          name : '联系人',
          path : 'contact',
          component : Contact
        },
        {
          name : '消息',
          path : 'message',
          component : Message
        },
        {
          name : '设置',
          path : 'setting',
          component : Setting
        },
        {
          path : 'newsList',
          name : '新闻',
          component : NewsList
        }
      ],
      redirect : '/home/index'
    }
  ],
  linkActiveClass:'mui-active'
})

router.beforeEach((to,from,next)=>{
  store.commit('ope_tab',false)
  if(to.path === '/home/index' || to.path === '/home/message' || to.path === '/home/contact' || to.path === '/home/setting'){
    store.commit('ope_tab',true);
  }
  next();
})

export default router
