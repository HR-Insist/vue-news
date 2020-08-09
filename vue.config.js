module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': '@/assets',
        'views': '@/views',
        'services': '@/services'
      }
    }
  },
  devServer: {
    // 针对开发服务器的配置
    proxy: {
      "/api": {
        target: "http://study.yuanjin.tech"
      }
    }
  }
}