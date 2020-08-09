<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit">
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
          <label></label>
          <button type="submit">登录</button>
        </div>
        <FormError :message="error.server"></FormError>
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "components/common/util/Center";
import FormError from "components/common/form/FormError";

export default {
  name: "Login",
  components: {
    Center,
    FormError,
  },
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
        server: "",
      },
    };
  },
  methods: {
    validate(field, message) {
      if (this.userInfo[field]) {
        this.error[field] = "";
        return true;
      } else {
        this.error[field] = message;
        return false;
      }
    },
    async handleSubmit() {
      if (this.$store.state.loginUser.isLoading) return;
      if (
        this.validate("loginId", "账号不能为空！") &
        this.validate("loginPwd", "密码不能为空！")
      ) {
        // 提交数据
        const res = await this.$store.dispatch(
          "loginUser/login",
          this.userInfo
        );
        if (res) {
          this.$router.push({ name: "Home" });
        } else {
          this.error.server = "账号或密码不正确！";
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 400px;
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
  background-color: rgb(11, 131, 243);
  color: #fff;
}
.form-item button:hover {
  background-color: #66b1ff;
}

/* .form-container {
  width: 400px;
}
.right {
  position: absolute;
  right: -10px;
} */
</style>