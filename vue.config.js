const webpack = require("webpack");

module.exports = {
  publicPath: process.env.VUE_APP_PATH,
  outputDir: "dist" + process.env.VUE_APP_PATH,
  configureWebpack: {
    plugins: [
      // Define Bundler Build Feature Flags (This helps for tree shaking)
      new webpack.DefinePlugin({
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __INTLIFY_PROD_DEVTOOLS__: true,
      })
    ]
  },
  // To load sass files, you have to use this config:
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/reset.scss";`,
      },
    },
  },
};
