<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "components/content/header/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import "assets/style/global.css";
@import "assets/style/reset.css";

.container {
  margin-top: 20px;
}
</style>
