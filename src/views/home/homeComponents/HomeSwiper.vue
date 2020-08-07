<template>
  <Swiper :pagination="true" :width="1080" :delay="2500" class="swiper">
    <SwiperSlide>
      <img src="~assets/banner/banner4.png" alt="banner4.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="~assets/banner/banner5.png" alt="banner5.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="~assets/banner/banner6.png" alt="banner6.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="~assets/banner/banner7.png" alt="banner7.png" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
</style>