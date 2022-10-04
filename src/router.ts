
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import PostDetail from './views/PostDetail.vue'
import store from './store'
import UserProfile from './components/UserProfile.vue'

import TestColumnList from './views/TestColumnList.vue'
import TestPostList from './views/TestPostList.vue'
import TestColumn from './views/TestColumn.vue'
import TestPost from './views/TestPost.vue'

// process.env.BASE_URL参数用于解决部署后页面空白
const routerHistory = createWebHistory(process.env.BASE_URL)

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost,
      meta: { requiredLogin: true }
    },
    // {
    //   path: '/column/:id',
    //   name: 'column',
    //   component: ColumnDetail
    // },
    // {
    //   path: '/posts/:id',
    //   name: 'post',
    //   component: PostDetail
    // },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/testColumnList',
      name: 'testColumnList',
      component: TestColumnList
    },
    {
      path: '/testPostList',
      name: 'estPostList',
      component: TestPostList
    },
    {
      path: '/column/:id',
      name: 'column',
      component: TestColumn
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: TestPost
    }
  ]
})
router.beforeEach((to, from, next) => {
  const { user, token } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      store.dispatch('fetchCurrentUser').then(() => {
        if (redirectAlreadyLogin) {
          next('/')
        } else {
          next()
        }
      }).catch(e => {
        console.error(e)
        store.commit('logout')
        next('login')
      })
    } else {
      if (requiredLogin) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
