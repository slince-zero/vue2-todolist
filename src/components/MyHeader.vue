<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称" v-model="title" />
    <button @click="add">添加</button>
  </div>
</template>

<script>
  import { nanoid } from 'nanoid' // 用于生成id
  export default {
    name: 'MyHeader',
    // props: ['addTodo'],
    data() {
      return {
        title: '', // 收集用户输入的内容
      }
    },

    methods: {
      add() {
        if (this.title.trim()) {
          // 添加一个todo
          const todoObj = { id: nanoid(), title: this.title, done: false }
          // this.addTodo(todoObj)
          this.$store.commit('ADD', todoObj) // 调用mutations中的方法
          // 清空输入框
          this.title = ''
        } else {
          return alert('输入不能为空')
        }
      },
    },
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
