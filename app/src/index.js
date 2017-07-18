import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import Users from './pages/Users.vue'
import Posts from './pages/Posts.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/posts', component: Posts }
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
