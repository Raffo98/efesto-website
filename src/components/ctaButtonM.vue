<template>
    
    <div class="cta" @mouseover="isHover = true" @mouseleave="isHover = false" :style="[ isHover ? { width: '100%' } : { width: '0%' } ]">
        <button :class="{
            cta__button: true,
            hover: isHover,
        }">
            <div class="cta__button__box">
                <p class="cta__button__box__text" v-html="props.info.text"></p>
            </div>
            <div class="cta__button__box__icon">
                <img :src="`${$assetsBasePath}icons/${props.info.icon}.svg`" />
            </div>
        </button>
    </div>
</template>

<script setup>
import { ref } from "@vue/runtime-core";

const props = defineProps({
    info: Object,
});

const isHover = ref(false);

</script>

<style lang="scss" scoped>
.cta {
    border: 1.5px solid $color-orange !important;
    background-color: $color-orange;
    background: $color-white;
    position: relative;
    transition: width 0.3s ease;

    &__button {
        display: flex;
        align-items: center;
        height: 41px;
        width: fit-content;



        &__box {
            display: flex;
            align-items: center;

            &__text {
                white-space: nowrap;
                padding: 8px 16px !important;
                @include paragraph-m;
                color: $color-white;
                text-transform: uppercase;
            }

            &__icon {
                width: 41px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $color-white;
            }
        }
    }
}</style>