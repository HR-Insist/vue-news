<template>
  <Center>
    <h1>个人中心 {{$route.params.loginId}}</h1>
  </Center>
</template>

<script>
import Center from "@/components/common/util/Center";
export default {
  components: {
    Center,
  },
};
</script>

<style scoped>
</style>