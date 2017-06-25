import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BookList from '@/components/books/BookList'
// import Cart from '@/components/books/Cart'
import EmailApp from '@/components/email/EmailApp'
import PlaceApp from '@/components/places/PlaceApp'

import about from '@/components/main/about'


Vue.use(Router)

export default new Router({
  components:{
    EmailApp
  },
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/book-list',
      name: 'book-list',
      component: BookList
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart
    // },
    {
      path: '/email',
      name: 'email',
      component: EmailApp

    },
    {
      path: '/place',
      name: 'place',
      component: PlaceApp
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
