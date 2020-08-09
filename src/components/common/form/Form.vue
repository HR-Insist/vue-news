<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    lableWidth: {
      type: String,
      default: "80px",
    },
  },
  mounted() {
    const labels = document.getElementsByTagName("label");
    if (labels.length > 0) {
      labels.forEach((item) => {
        item.style.width = this.lableWidth;
      });
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.form {
  /* width: 430px; */
  padding: 10px 15px;
  position: relative;
}
</style>