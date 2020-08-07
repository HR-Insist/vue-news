<template>
  <div id="app">
    <div class="container">
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Home from "views/home/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import "assets/style/global.css";
@import "assets/style/reset.css";
#app {
  width: 1080px;
  margin: 0 auto;
}
</style>
