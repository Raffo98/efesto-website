<template>
  <!-- @click="dropdown()" -->
  <div class="sectionHeader">
    <button
      class="sectionHeader__text"
      @mouseover="
        isHover = true;
        dropdown();
      "
      @mouseleave="
        isHover = false;
        stateSection.changeSectionId('');
      "
    >
      <p
        class="sectionHeader__text__title"
        :style="[
          isHover || idSection == props.content.title
            ? { color: 'rgba(231, 83, 23, 1)' }
            : { color: 'rgba(247, 247, 247, 1)' },
        ]"
      >
        {{ props.content.title }}
        <span
          :class="{
            underline: true,
            animate_underline: isHover || idSection == props.content.title,
          }"
        ></span>
      </p>
    </button>
    <div
      class="sectionHeader__arrow"
      v-if="props.content.subsections.length > 0"
    >
      <img
        :src="`${$assetsBasePath}icons/arrow.svg`"
        :class="{
          sectionHeader__arrow__icon: true,
          rotate: idSection == props.content.title,
          'active-arrow': idSection == props.content.title || isHover,
        }"
      />
    </div>
    <div
      :class="{
        sectionHeader__dropdown: true,
        'dropdown-active': idSection == props.content.title || isHover,
      }"
      @mouseover="dropdown()"
      @mouseleave="stateSection.changeSectionId('')"
      v-if="props.content.subsections.length > 0"
    >
      <router-link :to="{name: `${idSub}`}">
        <button
          class="sectionHeader__dropdown__btn"
          v-for="(sub, idx) in props.content.subsections"
          :key="idx"
          @mouseover="
            {
              isHoverSub = true;
              idSub = sub.id;
            }
          "
          @mouseleave="
            {
              isHoverSub = false;
              idSub = '';
            }
          "
          :style="{
            backgroundColor:
              isHoverSub && idSub == sub.id && idSection == props.content.title
                ? 'rgba(45, 45, 46, 1)'
                : 'rgba(23, 23, 23, 1)',
          }"
        >
          <p
            class="sectionHeader__dropdown__btn__text"
            v-html="sub.title"
            :style="{
              color:
                isHoverSub && idSub == sub.id
                  ? 'rgba(231, 83, 23, 1)'
                  : 'rgba(247, 247, 247, 1)',
            }"
          ></p>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { provide, ref, watch } from "@vue/runtime-core";
import useTvaMq from "@/plugins/tvaMq.js";
import { useStateStore } from "@/utilities/store/store";
// import { useRouter } from 'vue-router';

// const bookmark = ref(0);
const stateSection = useStateStore();

// const router = useRouter();
// const route = useRoute();

const props = defineProps({
  content: Object,
});

const { $tvaMq } = useTvaMq();
provide("$tvaMq", $tvaMq);

const idSection = ref("");
const isHover = ref(false);
const isHoverSub = ref(false);
const idSub = ref("");

watch(stateSection, () => {
  if (stateSection.activeSectionId != idSection.value) {
    idSection.value = stateSection.activeSectionId;
  }
});

function dropdown() {
  stateSection.changeSectionId(props.content.title);
}


</script>
<style lang="scss" scoped>
.sectionHeader {
  position: relative;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  &__text {
    padding-right: 5px !important;

    &__title {
      @include paragraph-m;
      position: relative;
      display: flex;
      justify-content: center;
      color: $color-white;
      transition: color 0.5s ease;
    }
  }

  &__arrow {
    &__icon {
      filter: invert(10%) sepia(49%) saturate(0%) hue-rotate(330deg)
        brightness(110%) contrast(94%);
      transition: transform 0.3s ease, filter 0.3s ease;
    }
  }

  &__dropdown {
    position: absolute;
    // z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 22px;
    left: -24px;
    background-color: $color-black;
    padding: 8px 16px 16px 16px !important;
    max-height: 0;
    transition: all 0.5s ease;
    // @include effect-style-shadow-section-header;
    box-shadow: 0px 4px 8px 0px rgba(23, 23, 23, 0);
    overflow: hidden;

    &__btn {
      width: 100%;

      &__text {
        padding: 14px 8px 14px 8px !important;
        color: $color-white;
        @include paragraph-m;
        text-align: left;
      }
    }
  }
}

.active-arrow {
  filter: invert(42%) sepia(49%) saturate(2300%) hue-rotate(330deg)
    brightness(83%) contrast(100%);
}

.rotate {
  transform: rotate(180deg);
  color: $color-orange;
  /* Applica la rotazione quando l'arrow è "rotated" */
}

.underline {
  position: absolute;
  bottom: -1px;
  width: 0;
  height: 2px;
  background-color: $color-orange;
  transition: width 0.3s ease, left 0.3s ease;
}

.animate_underline {
  width: 100%;
}

.dropdown-active {
  max-height: 500px;
  box-shadow: 0px 4px 8px 0px rgba(23, 23, 23, 0.5);
  transition: all 0.9s ease;
}
</style>
