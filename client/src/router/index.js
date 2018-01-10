import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Movies from '@/components/Movies'
import CreateMovie from '@/components/CreateMovie'
import ViewMovie from '@/components/ViewMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies/create',
      name: 'movies-create',
      component: CreateMovie
    },
    {
      path: '/movies/:movieId',
      name: 'movie',
      component: ViewMovie
    }
  ]
})
