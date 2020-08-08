<template>
  <div>
    <div class="channel-type">{{channelType}}</div>
    <Loading v-show="isLoading"></Loading>
    <NewsList :newsList="newsList" v-show="!isLoading"></NewsList>
    <Pagination
      v-show="!isLoading"
      :current-page="currentPage"
      :total="total"
      :panelNumber="panelNumber"
      :limit="limit"
      @handlePageChange="handlePageChange"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "components/common/pagination/Pagination";
import NewsList from "components/content/news/NewsList";
import Loading from "components/common/loading/Loading";

import { getNews } from "services/newsService";

export default {
  name: "ChannelNews",
  components: {
    Pagination,
    NewsList,
    Loading,
  },
  data() {
    return {
      newsList: [],
      total: 0,
      panelNumber: 7,
      limit: 10,
      isLoading: false,
      currentPage: 1,
    };
  },
  computed: {
    channelType() {
      const channels = this.$store.state.channels.channels;
      if (channels.length > 0) {
        const channel = channels.find(
          (item) => item.channelId === this.$route.params.id
        );
        return channel.name;
      }
      return "";
    },
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
      this.$router.push({
        query: {
          page: newPage,
        },
      });
      this.setNews();
    },
    async setNews() {
      this.isLoading = true;
      const data = await getNews(
        this.$route.params.id,
        this.currentPage,
        this.limit
      );
      this.total = data.allNum;
      this.newsList = data.contentlist;
      this.isLoading = false;
    },
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.handlePageChange(1);
      },
    },
  },
};
</script>

<style scoped>
.channel-type {
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>