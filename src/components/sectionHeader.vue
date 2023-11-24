<template>
    <button class="sectionHeader" @click="dropdown()">
        <div class="sectionHeader__text" @mouseover="isHover = true" @mouseleave="isHover = false">
            <p class="sectionHeader__text__title"  v-html="props.content.title"></p>
            <span v-if="isHover" class="underline"></span>
        </div>
        <div class="sectionHeader__arrow">
            <img :src="`${$assetsBasePath}icons/arrow.svg`"
                :class="{ 'sectionHeader__arrow__icon': true, 'rotate': isDown }">
        </div>
    </button>
</template>
<script setup>
import { provide, ref } from "@vue/runtime-core";
import useTvaMq from "@/plugins/tvaMq.js";
// import { ref } from "@vue/reactivity";
// import { useStateStore } from "@/utilities/store/store";

// const bookmark = ref(0);
const props = defineProps({
    content: Object
});

const { $tvaMq } = useTvaMq();
provide("$tvaMq", $tvaMq);
// const stateModal = useStateStore();
// const selectedId = stateModal.activeId;
const isDown = ref(false);
const isHover = ref(false);

// watch(stateModal, () => {
//     if (stateModal.activeId != selectedId.value) {
//         selectedId.value = stateModal.activeId;
//     }
// });

function dropdown() {
    isDown.value = !isDown.value;
}

</script>
<style lang="scss" scoped>
.sectionHeader {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__text {
        @include paragraph-m;
        color: $color-white;
        padding-right: 5px !important;
    }

    &__arrow {
        &__icon {
            transition: transform 0.3s ease;
        }
    }
}

.rotate {
    transform: rotate(180deg);
    /* Applica la rotazione quando l'arrow è "rotated" */
}
.underline {

}

</style>
