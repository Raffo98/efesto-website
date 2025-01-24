// // const PrerenderSPAPlugin = require("prerender-spa-plugin-next");
// const webpack = require("webpack");
// // const path = require("path");

// module.exports = {
//   // publicPath: process.env.VUE_APP_PATH,
//   publicPath: '',
//   outputDir: "dist",
//   configureWebpack: {
//     plugins: [
//       // Define Bundler Build Feature Flags (This helps for tree shaking)
//       new webpack.DefinePlugin({
//         __VUE_I18N_FULL_INSTALL__: true,
//         __VUE_I18N_LEGACY_API__: true,
//         __INTLIFY_PROD_DEVTOOLS__: true,
//         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
//       }),
//     ],
//     optimization: {
//       splitChunks: false,
//     },
//     output: {
//       filename: "js/app.[hash].js",
//     },
//   },
//   // To load sass files, you have to use this config:
//   css: {
//     extract: false,
//     loaderOptions: {
//       sass: {
//         additionalData: `
//         @import "@/assets/scss/reset.scss"; @import "@/assets/scss/styles.scss";`,
//       },
//     },
//   },
//   productionSourceMap: false
// };


const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  publicPath: '',
  outputDir: "dist",
  configureWebpack: {
    plugins: [
      // Usa dotenv-webpack per caricare le variabili d'ambiente
      new Dotenv(),
      // DefinePlugin per altre configurazioni o variabili se necessarie
      new webpack.DefinePlugin({
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __INTLIFY_PROD_DEVTOOLS__: true,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }),
    ],
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: "js/app.[hash].js",
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/reset.scss"; 
          @import "@/assets/scss/styles.scss";`,
      },
    },
  },
  productionSourceMap: false
};
