<template>
  <div class="pagination" v-if="total > 0">
    <button
      class="pagination-item"
      :disabled="currentPage===1"
      @click.prevent="handlePageChange(1)"
    >首页</button>
    <button
      class="pagination-item"
      :disabled="currentPage===1"
      @click.prevent="handlePageChange(currentPage - 1)"
    >上一页</button>
    <button
      :class="['pagination-item',{'active': item === currentPage}]"
      :disabled="currentPage===item"
      v-for="item in pageList"
      :key="item"
      @click.prevent="handlePageChange(item)"
    >{{item}}</button>
    <span class="goPage">
      GO
      <input
        v-model.number="goPage"
        type="number"
        class="goInput"
        @keyup.enter="handleGoPage(goPage)"
        @blur="handleGoPage(goPage)"
      />
    </span>
    <button
      class="pagination-item"
      :disabled="currentPage===pageNumber"
      @click.prevent="handlePageChange(currentPage + 1)"
    >下一页</button>
    <button
      class="pagination-item"
      :disabled="currentPage===pageNumber"
      @click.prevent="handlePageChange(pageNumber)"
    >尾页</button>
    <span class="page-text">
      <i>{{currentPage}}</i>/
      <i>{{pageNumber}}</i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      // 当前页码
      type: Number,
      default: 1,
      required: true,
    },
    total: {
      // 数据总量
      type: Number,
      default: 0,
      required: true,
    },
    limit: {
      // 页容量  每页显示多少条数据
      type: Number,
      default: 10,
    },
    panelNumber: {
      // 最多显示多少个页数选项
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      goPage: null,
    };
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 计算当前显示的最小页码数字
    minPage() {
      let n = this.currentPage - Math.floor(this.panelNumber / 2);
      // 解决末尾几页显示数量问题
      n =
        n + this.panelNumber - 1 > this.pageNumber
          ? this.pageNumber - this.panelNumber + 1
          : n;
      return n >= 1 ? n : 1;
    },
    // 计算当前显示的最大页码数字
    maxPage() {
      let n = this.minPage + this.panelNumber - 1;
      return n > this.pageNumber ? this.pageNumber : n;
    },
    // 显示的页码
    pageList() {
      let num = [];
      for (let i = this.minPage; i <= this.maxPage; i++) {
        num.push(i);
      }
      return num;
    },
  },
  methods: {
    handlePageChange(newPage) {
      // console.log(this.minPage, this.maxPage);
      this.$emit("handlePageChange", newPage);
    },
    handleGoPage(newPage) {
      if (newPage && newPage > 0 && newPage <= this.pageNumber) {
        this.handlePageChange(newPage);
      }
      this.goPage = "";
    },
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
  margin: 20px 0;
}

.pagination .pagination-item {
  /* width: 30px; */
  padding: 5px 9px;
  border: 1px solid #ccc;
  margin: 5px;
  cursor: pointer;
  background-color: #fff;
  color: rgb(96, 96, 224);
}

.pagination .pagination-item[disabled] {
  color: #ccc;
  cursor: not-allowed;
}

.pagination .pagination-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}

.goPage {
  color: rgb(96, 96, 224);
  font-size: 15px;
  margin: 0 8px;
}
.goPage .goInput {
  width: 55px;
  height: 26px;
  padding: 0;
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>