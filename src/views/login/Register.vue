<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit" @reset="handleReset">
      <div class="form-item">
        <div class="input">
          <label for="nickname">昵称：</label>
          <input
            @input="validate('nickname', '请输入昵称')"
            v-model="userInfo.nickname"
            type="text"
            id="nickname"
          />
        </div>
        <FormError :message="error.nickname"></FormError>
      </div>
      <div class="form-item">
        <div class="input">
          <label for="userId">账号：</label>
          <input
            v-model="userInfo.loginId"
            type="text"
            id="userId"
            @input="validate('loginId', '请输入账号')"
          />
        </div>
        <FormError :message="error.loginId"></FormError>
      </div>
      <div class="form-item">
        <div class="input">
          <label for="password">密码：</label>
          <input
            v-model="userInfo.loginPwd"
            type="password"
            id="password"
            autocomplete="off"
            @input="validate('loginPwd', '请输入密码')"
          />
        </div>
        <FormError :message="error.loginPwd"></FormError>
      </div>
      <div class="form-item">
        <div class="input">
          <label for="rePassword">重复密码：</label>
          <input
            v-model="userInfo.pwsAgain"
            type="password"
            id="rePassword"
            autocomplete="off"
            @blur="validatePwdAgain"
          />
        </div>
        <FormError :message="error.pwsAgain"></FormError>
      </div>
      <div class="form-item">
        <div class="input">
          <label></label>
          <button type="submit">注册</button>
          <button type="reset">重置</button>
        </div>
        <FormError :message="error.server"></FormError>
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "components/common/util/Center";
import FormError from "components/common/form/FormError";

import { reg } from "services/userService";

export default {
  name: "Register",
  components: {
    Center,
    FormError,
  },
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
        pwsAgain: "",
        nickname: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
        pwsAgain: "",
        nickname: "",
        server: "",
      },
    };
  },
  methods: {
    // 非空验证
    validate(field, message) {
      if (this.userInfo[field]) {
        this.error[field] = "";
        return true;
      } else {
        this.error[field] = message;
        return false;
      }
    },
    validatePwdAgain() {
      const valid = this.validate("pwsAgain", "请输入重复密码");
      if (!valid) return false;
      if (this.userInfo.loginPwd === this.userInfo.pwsAgain) {
        this.error.pwsAgain = "";
        return true;
      } else {
        this.error.pwsAgain = "密码不一致";
        return false;
      }
    },
    async handleSubmit() {
      if (
        this.validate("loginId", "账号不能为空！") &
        this.validate("nickname", "昵称不能为空！") &
        this.validate("loginPwd", "密码不能为空！") &
        this.validatePwdAgain()
      ) {
        // 提交数据
        let res = await reg(this.userInfo);
        console.log(res);
        if (res.data) {
          this.error.server = "注册成功！";
          setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 2000);
        } else {
          this.error.loginId = res.msg;
        }
        // console.log(this.userInfo);
      }
    },
    handleReset() {
      for (const value in this.userInfo) {
        // console.log(value);
        this.userInfo[value] = "";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 400px;
}
.form-item {
  margin-bottom: 10px;
}
.form-item .input {
  display: flex;
}
.form-item label {
  width: 100px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}
.form-item input,
.form-item button {
  flex-grow: 1;
}
.form-item button {
  margin: 0 10px;
  background-color: rgb(11, 131, 243);
}
.form-item button:hover {
  background-color: #66b1ff;
}
</style>