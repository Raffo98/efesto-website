export default {
  install: (app, options) => {
    app.config.globalProperties.$retina = window.devicePixelRatio > 1
    app.config.globalProperties.$touchDevice = "ontouchstart" in document.documentElement
    app.config.globalProperties.$baseUrl = process.env.BASE_URL
    app.config.globalProperties.$assetsBasePath = options.assetsBasePath || process.env.VUE_APP_PATH || ''

    app.provide('$retina', app.config.globalProperties.$retina)
    app.provide('$touchDevice', app.config.globalProperties.$touchDevice)
    app.provide('$baseUrl', app.config.globalProperties.$baseUrl)
    app.provide('$assetsBasePath', app.config.globalProperties.$assetsBasePath)
  }

}