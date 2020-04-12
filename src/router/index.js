import Vue from 'vue'
import Router from 'vue-router'
import chat from '@/components/chat'
import sign from '@/components/sign'
import log from '@/components/log'
import history from '@/components/history'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
    {
      path: '/log',
      name: 'log',
      component: log
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: 'history',
      name: 'history',
      component: history
    }
  ]
})
