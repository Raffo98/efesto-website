<template>
  <div :class="[$tvaMq]" :version="version.version">
    <Header class="header" :sections="$tm('header.sections')" :button="$tm('header.button')"
      @set-lang="setLanguage" />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer :sections="$tm('footer')" />
  </div>
</template>

<script setup>
import version from "@/../package.json";
import { onMounted, provide, ref } from "@vue/runtime-core";
import useTvaMq from "./plugins/tvaMq.js";
import { useI18n } from "vue-i18n";
import { useStateStore } from "@/utilities/store/store";
import { onClickOutside } from '@vueuse/core'
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";



const { $tvaMq } = useTvaMq();
const i18n = useI18n();

console.log(i18n.tm);

provide("$tvaMq", $tvaMq);
provide("version", version);


const modal = ref(null);
const stateModal = useStateStore();
// const isMobile = ref();

// Calling this here is equivalent to calling it in
// beforeCreated / create in Options API
// const instanceAttrs = getCurrentInstance().attrs;
setLanguage();

function logScroll() {
  stateModal.updateScroll(window.scrollY);
}


onMounted(() => {
  setVHProperty();
  window.addEventListener("resize", setVHProperty);
  window.addEventListener("orientationchange", setVHProperty);
  const body = document.body;
  if (body) {
    window.addEventListener('scroll', logScroll)
  }



});

// watch($tvaMq, () => {
//   if ($tvaMq.value === "mobile") isMobile.value = $tvaMq.value;
//   else {
//     isMobile.value = '';
//   }
// });



onClickOutside(modal, () => { if (stateModal.isOpen) { stateModal.changeState(false) } });

function setLanguage(value) {
  const defaultLang = "it";
  let lang;
  const routerLang = null;
  let langFromOutside =
    value ||
    routerLang ||
    process.env.VUE_APP_LANG ||
    document.querySelector("#app").getAttribute("lang");

  if (langFromOutside) {
    lang = langFromOutside;
  } else {
    lang = defaultLang;
  }

  i18n.locale.value = lang.toLowerCase();

  // Set html language attribute
  const htmlEl = document.querySelector("html");
  if (htmlEl) {
    htmlEl.setAttribute("lang", lang.toLowerCase());
  }
}

function setVHProperty() {
  if ($tvaMq.value === "mobile") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

.container {
  margin-top: 70px !important;
  display: flex;
  flex-direction: column;
}

body {
  overflow-y: scroll;
}
</style>
