<template>
  <div id="home">
    <HomeSwiper></HomeSwiper>
    <Channels @changeChannel="handleChannelChange"></Channels>
    <Loading v-show="isLoading"></Loading>
    <NewsList :newsList="newsList" v-show="!isLoading"></NewsList>
  </div>
</template>

<script>
import HomeSwiper from "./homeComponents/HomeSwiper";
import Channels from "./homeComponents/Channels";
import NewsList from "./homeComponents/NewsList";

import Loading from "components/common/loading/Loading";

import { getNews } from "services/newsService.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    Channels,
    NewsList,
    Loading,
  },
  data() {
    return {
      newsList: [],
      isLoading: true,
    };
  },
  methods: {
    async handleChannelChange(channelId) {
      this.isLoading = true;
      const res = await getNews(channelId, 1, 10);
      this.newsList = res.contentlist;
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>