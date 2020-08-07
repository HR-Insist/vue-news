<template>
  <!-- 水平垂直居中 -->
  <div class="center">
    <slot></slot>
  </div>
</template>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>