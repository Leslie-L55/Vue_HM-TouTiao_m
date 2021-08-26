/* 覆盖webpack的配置 */
module.exports = {
  devServer: {
    // 自定义服务配置
    open: true, // 自动打开浏览器
    port: 8888
  },
  lintOnSave: false // 关闭eslint代码检查工具
}
