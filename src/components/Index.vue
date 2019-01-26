<template>
    <div class="index_root">
      <div class="swipe-wrapper">
        <mt-swipe :auto="3000" ref="swipeWrapper">
          <mt-swipe-item class="swip-item-1 item">
            <img src="../assets/muwu.jpg">
          </mt-swipe-item>
          <mt-swipe-item class="swip-item-2 item">
            <img src="../assets/shuijiao.jpg">
          </mt-swipe-item>
          <mt-swipe-item class="swip-item-3 item">
            <img src="../assets/yuantiao.jpg">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">Email</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div></router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
          return {}
        },
        components: {},
      created:function () {
        this.$store.commit('changeTitle',this.$route.name)
        console.log(this.$route.path)
      }
    }
</script>

<style scoped>
  .swipe-wrapper{
    height: 200px;
    margin-top: -20px;
  }
  .swipe-wrapper img{
    width: 100%;
    height:100%;
  }
  .mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
  }
  body{
    background-color: #fff;
  }
</style>
