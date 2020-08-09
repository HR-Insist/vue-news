<template>
  <div class="form-item">
    <div class="input">
      <label>{{lable}}</label>
      <slot></slot>
    </div>
    <FormError></FormError>
  </div>
</template>

<script>
import FormError from "components/common/form/FormError";

export default {
  name: "FormItem",
  props: {
    lable: String,
  },
  components: {
    FormError,
  },
};
</script>

<style scoped>
.form-item {
  position: relative;
  margin-bottom: 5px;
}
.form-item .input {
  display: flex;
}
.form-item label {
  display: inline-block;
  text-align: right;
  line-height: 41px;
  padding-right: 15px;
}
.form-item input {
  flex-grow: 1;
}
.form-item input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
/* .form-item button {
  background-color: #499df7;
}
.form-item button {
  outline: none;
  border: none;
  font-size: inherit;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  padding: 12px;
}

.form-item button:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}*/
</style> 