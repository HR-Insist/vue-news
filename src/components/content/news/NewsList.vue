<template>
  <div class="newsList">
    <div class="news-item-normal" v-for="item in newsList" :key="item.id">
      <div class="image" v-if="item.havePic">
        <a :href="item.link">
          <img :src="item.imageurls[0].url" :alt="item.title" />
        </a>
      </div>
      <div class="words">
        <h2 class="title">
          <a :href="item.link">{{item.title}}</a>
        </h2>
        <div class="aside">
          <span>{{item.channelName}}</span>
          <span>来源：{{item.source}}</span>
          <span>发布日期：{{item.pubDate}}</span>
        </div>
        <div class="content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: {
    newsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.newsList {
  width: 1080px;
  margin: 0 auto;
}
.news-item-normal {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 20px 0;
}
.image {
  width: 220px;
  margin-right: 20px;
}
.image img {
  width: 100%;
  object-fit: contain;
}
.words {
  flex: 1;
}
.title {
  font-size: 22px;
}
.aside {
  height: 20px;
  font-size: 14px;
  color: #888;
  line-height: 20px;
  margin-top: 5px;
}
.aside span {
  margin: 0px 15px;
}

.content {
  max-height: 100px;
  overflow: hidden;
  line-height: 2;
  text-overflow: ellipsis;
}
</style>