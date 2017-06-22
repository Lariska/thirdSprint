import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BookList from '@/components/books/BookList'
import Cart from '@/components/books/Cart'

Vue.use(Router)

export default new Router({
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
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
