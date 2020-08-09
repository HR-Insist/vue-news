<template>
  <div class="error" :style="{visibility: message ? 'visible' : 'hidden'}">{{message}}</div>
</template>

<script>
export default {
  name: "FormError",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.error {
  font-size: 14px;
  color: #a44242;
  padding-left: 100px;
  height: 30px;
  line-height: 30px;
}
</style>