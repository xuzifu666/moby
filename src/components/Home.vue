<template>
  <div class="home_root">
    <mt-header fixed :title="this.$store.getters.getTitle"></mt-header>
    <div class="content">
    <router-view></router-view>
    </div>
    <nav class="mui-bar mui-bar-tab" v-if="this.$store.getters.tabStatus">
      <router-link class="mui-tab-item" to="/home/index">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/home/message">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/home/contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="/home/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        data() {
          return {};
        },
        components: {}
    }
</script>

<style scoped>
  body{
    background-color: #fff;
  }
</style>
