<template>
  <div :class="[$tvaMq]" :version="version.version">
    <!-- Metatags -->
    <teleport to="head"
      ><title>{{ $tm('metaContent').title }}</title>
      <meta name="description" :content="$tm('metaContent').description" />
      <!-- FACEBOOK -->
      <meta property="og:title" :content="$tm('metaContent').title" />
      <meta property="og:description" :content="$tm('metaContent').description" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        :content="$tm('metaContent').image"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <!-- TWITTER -->
      <meta name="twitter:site" :content="$tm('metaContent').title" />
      <meta name="twitter:title" :content="$tm('metaContent').title" />
      <meta name="twitter:description" :content="$tm('metaContent').description" />
      <meta
        name="twitter:image"
        :content="$tm('metaContent').image"
      />
      /></teleport
    >
    <!-- Routes -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import version from "@/../package.json";
import { onMounted, provide, watch } from "@vue/runtime-core";
import useTvaMq from "./plugins/tvaMq.js";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { $tvaMq } = useTvaMq();
const route = useRoute();
const i18n = useI18n();

provide("$tvaMq", $tvaMq);
provide("version", version);

// Calling this here is equivalent to calling it in
// beforeCreated / create in Options API
setLanguage();

onMounted(() => {
  setVHProperty();
  window.addEventListener("resize", setVHProperty);
  window.addEventListener("orientationchange", setVHProperty);
});

watch(
  () => route.params.lang,
  () => {
    if (route.params.lang) {
      i18n.locale.value = route.params.lang.toLowerCase();
    }
  }
);

function setLanguage() {
  const defaultLang = "it";
  let lang;
  const routerLang = route && route.params ? route.params.lang : null;
  let langFromOutside =
    routerLang ||
    process.env.VUE_APP_LANG ||
    document.querySelector("#app").getAttribute("lang");

  if (langFromOutside) {
    lang = langFromOutside;
  } else {
    lang = defaultLang;
    route.params.lang = defaultLang;
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
