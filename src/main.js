import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";

// Plugins
import globalVariables from "./plugins/globalVariables";
import router from "./utilities/router";

import i18n from "./utilities/language";

import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";


const pinia = createPinia()

const el = document.querySelector('#app')

const app = createApp(App, {
  section: el.getAttribute('section'),
  lang: el.getAttribute('lang'),
})

app.use(VueSvgIconPlugin, { tagName: "icon" });
app.use(globalVariables, { assetsBasePath: el.getAttribute('assets-base-path') });
app.use(router);
app.use(i18n);
app.use(pinia)

app.mount(el);