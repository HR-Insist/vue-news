<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <router-link :to="{name: 'Home'}">
          <img src="~assets/logo/logo.png" alt="vue-news" />
        </router-link>
      </div>
      <ul class="nav">
        <li>
          <router-link :to="{name: 'Home'}">首页</router-link>
        </li>
        <li v-for="item in channels.slice(0,5)" :key="item.channelId">
          <router-link :to="{name: 'ChannelNews', params: {id: item.channelId}}">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="user">
        <router-link :to="{name: 'Login'}">登录</router-link>
        <router-link :to="{name: 'Reg'}">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState("channels", ["channels"]),
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: center;
}
.header-container {
  width: 1080px;
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
}
.logo img {
  width: 42px;
  height: 42px;
}
.nav {
  display: flex;
  flex-grow: 1;
  margin: 0 60px;
  align-items: center;
}
.nav a {
  display: block;
  padding: 0 30px;
  font-size: 16px;
}
.nav .router-link-exact-active,
.user .router-link-exact-active {
  color: #fcb85f;
}
.user {
  font-size: 14px;
  color: #fff;
}
.user * {
  margin-left: 10px;
}

a {
  color: #fff;
}
</style>