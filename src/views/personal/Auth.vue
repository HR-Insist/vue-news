<template>
  <Center>
    <Loading></Loading>
  </Center>
</template>

<script>
import Center from "components/common/util/Center";
import Loading from "components/common/loading/Loading";

import { mapState } from "vuex";

export default {
  components: {
    Center,
    Loading,
  },
  computed: {
    ...mapState("loginUser", ["user", "isLoading"]),
  },
  methods: {
    handleLogin() {
      if (this.isLoading) return;
      if (this.user) {
        if (this.$route.query.toUrl) {
          this.$router.push(this.$route.query.toUrl);
        } else {
          this.$router.push({
            name: "Personal",
            params: { loginId: this.user.loginId },
          });
        }
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  },
  watch: {
    isLoading: {
      immediate: true,
      handler() {
        this.handleLogin();
      },
    },
    user: {
      immediate: true,
      handler() {
        this.handleLogin();
      },
    },
  },
};
</script>

<style scoped>
</style>