<template>
  <div
    class="swiper-container"
    :style="{width: width+'px'}"
    @mouseenter="stopPlay"
    @mouseleave="autoPlay"
  >
    <div class="swiper-wrapper" :style="transformStyle">
      <slot></slot>
    </div>
    <div class="arrow-l" @click="scrollLeft">&lt;</div>
    <div class="arrow-r" @click="scrollRight">&gt;</div>
    <ol class="pagination" v-if="pagination">
      <li
        v-for="(_, index) in slideCount"
        :key="index"
        class="dots"
        :class="{active: index+1 === currentIndex}"
        @click="clickDot(index)"
      ></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    pagination: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      required: true,
    },
    delay: {
      type: Number,
      default: 2000,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      slideCount: 0,
      timer: null,
      currentIndex: 1,
      transformStyle: {},
      isScroll: false,
    };
  },
  computed: {},
  async mounted() {
    await this.handleDom();
    this.$nextTick(() => {
      this.autoPlay();
    });
  },
  methods: {
    handleDom() {
      // 复制第一个节点到最后，复制最后的一个节点到最前面
      const swiper = document.querySelector(".swiper-wrapper");
      const slides = document.querySelectorAll(".slide");
      this.slideCount = slides.length;
      if (this.slideCount > 1) {
        const cloneFirstSlide = slides[0].cloneNode(true);
        const cloneLastSlide = slides[this.slideCount - 1].cloneNode(true);
        swiper.insertBefore(cloneLastSlide, slides[0]);
        swiper.appendChild(cloneFirstSlide);
        // 初始时显示原来的第一个图片
        this.setTransformStyle(1);
      }
    },
    // 设置过渡动画
    setTransformStyle(index, duration = this.duration) {
      this.transformStyle.transition = "transform " + duration + "ms";
      this.transformStyle.transform = "translateX(" + -index * 100 + "%)";
    },
    autoPlay() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        this.scrollRight();
      }, this.delay);
    },
    stopPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
    clickDot(index) {
      this.currentIndex = index + 1;
      this.setTransformStyle(index + 1);
    },
    // 向左移动
    scrollLeft() {
      // 判断当前是否处于第一张图片，
      // 如果是的话，去掉动画，直接跳到复制的最后一张
      if (this.currentIndex === 1) {
        this.currentIndex = this.slideCount + 1;
        this.setTransformStyle(this.currentIndex, 0);
      }
      // *****关键一步*****
      // 由于vue响应式原理是异步的，所以一定要等到DOM改变后才一定
      setTimeout(() => {
        this.currentIndex--;
        this.setTransformStyle(this.currentIndex);
      });
    },
    scrollRight() {
      if (this.currentIndex === this.slideCount) {
        this.currentIndex = 0;
        this.setTransformStyle(this.currentIndex, 0);
      }
      setTimeout(() => {
        this.currentIndex++;
        this.setTransformStyle(this.currentIndex);
      });
    },
  },
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
.swiper-container {
  position: relative;
  overflow: hidden;
}
.swiper-wrapper {
  display: flex;
  /* transition: 0.5s; */
  /* transform: translateX(); */
}
.arrow-l,
.arrow-r {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  z-index: 2;
}
.arrow-l {
  left: 0;
  border-radius: 0 8px 8px 0;
}
.arrow-r {
  right: 0;
  border-radius: 8px 0 0 8px;
}
.swiper-container:hover .arrow-l,
.swiper-container:hover .arrow-r {
  display: block;
}
.pagination {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 10px;
  justify-content: center;
  z-index: 1;
}

.dots {
  width: 10px;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  background-color: #fff;
}
.dots.active {
  background: #eb4d4b;
  border-color: #eb4d4b;
}
</style>