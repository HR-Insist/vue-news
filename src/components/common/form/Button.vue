<template>
  <button
    class="button"
    :class="[type ? 'button-' + type : '']"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    disabled: {
      type: Boolean,
      defalut: false,
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style scoped>
.button {
  outline: none;
  border: 1px solid #dcdfe6;
  font-size: inherit;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: #fff;
  color: #606266;
  margin-right: 10px;
}
.button-primary {
  background-color: #409eff;
  color: #fff;
}
.button-primary:hover {
  background-color: #66b1ff;
}
.button-success {
  background-color: #67c23a;
  color: #fff;
}
.button-success:hover {
  background-color: #85ce61;
}

.button-info {
  background-color: #909399;
  color: #fff;
}
.button-info:hover {
  background-color: #a6a9ad;
}
.button-danger {
  background-color: #f56c6c;
  color: #fff;
}
.button-danger:hover {
  background-color: #f78989;
}
.button-warning {
  background-color: #e6a23c;
  color: #fff;
}
.button-warning:hover {
  background-color: #ebb563;
}
</style>