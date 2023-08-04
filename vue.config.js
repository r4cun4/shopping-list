const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    dotenv: {
      path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
    }
  }
})
