import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import globalVariables from "./plugins/globalVariables";
import { createPinia } from 'pinia';
import { createWebHistory, createRouter } from "vue-router";

// import router from '/src/utilities/store/index.js';


import i18n from "./utilities/language";

// import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'


import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";




// i18n.global.locale.value = lang.lang;


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: ''
  },
  {
    path: "/about",
    name: "about",
    component: About

  },
  {
    path: '/contacts',
    name: "contacts",
    component: Contacts
  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

console.log(i18n.global.tm(`routes`))


// const app = createApp(App).use(VueSvgIconPlugin, { tagName: 'icon' });
const app = createApp(App);
const pinia = createPinia();

app.use(globalVariables);
app.use(i18n);
app.use(pinia);
app.use(router);


// Add mount in DOMContentLoaded listener to be sure JS is executed first before prerendering
document.addEventListener("DOMContentLoaded", function () {
  app.mount("#app");
});


