<template>
  <!-- 蒙层 -->
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>