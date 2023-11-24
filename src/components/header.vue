<template>
  <div class="header">
    <div class="header__box">
      <div class="header__box__logo">
        <img :src="`${$assetsBasePath}icons/logo.svg`">
      </div>
      <sectionHeader v-for="(section, idx) in props.sections" :key="idx" :content="section" />
    </div>
  </div>
</template>
<script setup>
import { provide, watch } from "@vue/runtime-core";
import useTvaMq from "@/plugins/tvaMq.js";
// import { ref } from "@vue/reactivity";
import { useStateStore } from '@/utilities/store/store';
import sectionHeader from "@/components/sectionHeader.vue";


// const bookmark = ref(0);
const props = defineProps({
    sections: Array
});

const { $tvaMq } = useTvaMq();
provide("$tvaMq", $tvaMq);
const stateModal = useStateStore();
const selectedId = stateModal.activeId;




watch(
  stateModal, () => {
    if (stateModal.activeId != selectedId.value) {
      selectedId.value = stateModal.activeId;
    }
  },
);
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;

  &__box {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: $color-black;
  }
}
</style>
