import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Markdown from './components/Markdown.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/url/*', component: Markdown }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
