const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8002,
    allowedHosts: ['localhost:9090'],
    webSocketServer: "sockjs"
  },

})
