<template>
  <Center>
    <img src="~assets/404/404.gif" alt />
  </Center>
</template>

<script>
import Center from "components/common/util/Center";
export default {
  name: "NotFound",
  components: {
    Center,
  },
};
</script>

<style scoped>
img {
  width: 500px;
}
</style>