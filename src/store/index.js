import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备state——用于存储数据
const state = {
  // 存储 todo 数据
  items: [
    { id: 1, title: '吃饭', done: false },
    { id: 2, title: '睡觉', done: true },
    { id: 3, title: '打豆豆', done: false },
  ],
}
// 准备actions——用于响应组件中的动作，一般用于发送ajax请求
const actions = {}

// 准备mutations——用于操作数据（state）
const mutations = {
  // 添加一条 todo
  ADD(state, item) {
    state.items.push(item)
  },
  // 删除一条 todo
  REMOVE(state, id) {
    state.items = state.items.filter((todo) => todo.id !== id)
  },
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
})
