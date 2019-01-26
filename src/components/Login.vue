<template>
  <div class="login_content">
    <h1>登录页面</h1>
    <mt-search v-model="value" :placeholder="'请输入搜索关键词'" :cancel="'取消'">
    </mt-search>
    <mt-button icon="back" @click="testClick()">测试</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
        data() {
          return {
            value : ''
          }
        },
        components: {
        },
        methods :{
          testClick(){
            Toast({
              message : '成功',
              iconClass: 'icon icon-success',
              position : 'top'
            })
          }
        },
      created:function () {
        this.$store.commit('changeTitle',this.$route.name)
        console.log(this.$route.path)
      }
    }
</script>

<style scoped>
</style>
