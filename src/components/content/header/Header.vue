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
          <router-link
            :to="{name: 'ChannelNews', params: {id: item.channelId}, query:{page: $route.query.page}}"
          >{{item.name}}</router-link>
        </li>
        <li class="more" @click="showMore">
          <span :class="{'color' : isShowMore}">更多</span>
          <div class="showMore" v-show="isShowMore">
            <li v-for="item in channels.slice(5)" :key="item.channelId">
              <router-link
                :to="{name: 'ChannelNews', params: {id: item.channelId}, query:{page: $route.query.page}}"
              >{{item.name}}</router-link>
            </li>
          </div>
        </li>
      </ul>
      <div class="user">
        <span v-if="isLoading">Loading...</span>
        <template v-else-if="user">
          <router-link :to="{name: 'Personal', params: {loginId: user.loginId}}">{{user.nickname}}</router-link>
          <a @click.prevent="handleLoginOut">退出登录</a>
        </template>
        <template v-else>
          <router-link :to="{name: 'Login'}">登录</router-link>
          <router-link :to="{name: 'Reg'}">注册</router-link>
        </template>
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
    ...mapState("loginUser", ["user", "isLoading"]),
  },
  data() {
    return {
      isShowMore: false,
    };
  },
  methods: {
    showMore() {
      this.isShowMore = !this.isShowMore;
    },
    handleLoginOut() {
      this.$store.dispatch("loginUser/loginOut");
      this.$router.push({ name: "Login" });
    },
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
.more {
  position: relative;
  padding: 0 15px;
  color: #fff;
  cursor: pointer;
}
.more span:hover {
  color: #66b1ff;
}
.more .color {
  color: #66b1ff;
}
.more .showMore {
  position: absolute;
  top: 40px;
  left: -830px;
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  background-color: #fff;
  z-index: 10;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px 20px;
}
.more .showMore::before {
  content: "";
  position: absolute;
  top: -11px;
  left: 850px;
  width: 20px;
  height: 20px;
  border: solid #ccc;
  border-width: 1px 1px 0px 0px;
  transform: rotate(-45deg);
  background-color: #fff;
}
.showMore a {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
  color: #000;
}
.showMore a:hover {
  background-color: rgb(224, 222, 222);
}
a {
  color: #fff;
}
</style>