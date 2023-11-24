import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import globalVariables from "./plugins/globalVariables";
import { createPinia } from 'pinia';

import i18n from "./utilities/language";
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'


const app = createApp(App).use(VueSvgIconPlugin, { tagName: 'icon' });
const pinia = createPinia();

app.use(globalVariables);
app.use(i18n);
app.use(pinia);

// Add mount in DOMContentLoaded listener to be sure JS is executed first before prerendering
document.addEventListener("DOMContentLoaded", function () {
  app.mount("#app");
});

