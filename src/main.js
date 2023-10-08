import Vue from 'vue'
import App from './App.vue'
import store from './store'

const app = new Vue({
  store,
  render: function (createElement) {
    return createElement(App)
  },
})

app.$mount('#app')

// 将Vue实例挂载到window上
window.VueApp = app
