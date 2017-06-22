import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Email from '@/components/email/Email'

Vue.use(Router)

export default new Router({
  components:{
    Email
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/email',
      name: 'Email',
      component: Email
    }
  ]
})
