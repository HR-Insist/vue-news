<template>
  <div class="news-channels" v-if="currentChannelId">
    <div
      class="item"
      v-for="item in showChannels"
      :key="item.channelId"
      :class="{active: item.channelId === currentChannelId}"
      @click="switchTo(item.channelId)"
    >
      <span class="name">{{item.name}}</span>
    </div>
    <span class="collapse" @click="isCollapse = !isCollapse">{{isCollapse? '展开' : '收起'}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isCollapse: true, //当前频道是否为折叠状态
      currentChannelId: null,
    };
  },
  computed: {
    ...mapState("channels", ["channels"]),
    showChannels() {
      return this.isCollapse ? this.channels.slice(0, 8) : this.channels;
    },
  },
  methods: {
    switchTo(id) {
      this.currentChannelId = id;
      this.$emit("changeChannel", this.currentChannelId);
    },
  },
  watch: {
    channels: {
      immediate: true,
      handler() {
        if (this.channels.length > 0) {
          this.switchTo(this.channels[0].channelId);
        }
      },
    },
  },
};
</script>

<style scoped>
.news-channels {
  width: 1080px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: rgb(240, 239, 239);
}
.item.active {
  background: #000;
  color: #fff;
}
.collapse {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
  cursor: pointer;
}
</style>