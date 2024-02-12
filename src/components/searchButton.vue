<template>
    <div class="search">
        <label class="input-lb" @mouseover="isHover = true" @mouseleave=" isHover = false">
            <input class="input-box" type="text" :placeholder="props.content.text" @focusin="isFocused = true" @focusout="isFocused = false"
                :style="[isHover || isFocused ? { backgroundPosition: 'left bottom' } : { backgroundPosition: 'right bottom' }]" />
        </label>
    </div>
</template>

<script setup>
import { ref, watch } from "@vue/runtime-core";

const props = defineProps({
    content: Object,
});

// const inputBox = document.querySelector('.input-box');
const isHover = ref(false);
const isFocused = ref(false);




watch(isFocused, (e) => {
    console.log(e);
});


</script>

<style lang="scss" scoped>
.search {
    input[type=text] {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        height: 41px;
        border: 1.5px solid $color-orange !important;
        background: linear-gradient(to right, $color-white 50%, $color-orange 50%);
        background-size: 200% 100%;
        padding: 8px 16px !important;
        transition: all 0.8s ease;
        color: $color-orange;
        @include paragraph-m;
        text-transform: lowercase !important;

        &:hover {
            &::placeholder {
                color: $color-orange;
            }
        }


        &:focus {
            outline: none;
        }

        &::placeholder {
            @include paragraph-m;
            color: $color-white;
            white-space: nowrap;
            transition: color 0.5s ease;
        }


    }
}
</style>


<!-- .search {
    // border: 1.5px solid $color-orange !important;
    // background-color: $color-white;
    // position: relative;
    // transition: width 0.3s ease;
    // background: linear-gradient(to right, $color-white 50%, $color-orange 50%);
    // background-size: 200% 100%;
    // background-position:left bottom;
    // transition: all 0.8s ease;

    &__button {
        display: flex;
        align-items: center;
        height: 41px;
        width: fit-content;

        // background-color: $color-orange !important;
        &__box {
            display: flex;
            align-items: center;


            &__text {
                white-space: nowrap;
                padding: 8px 16px !important;
                @include paragraph-m;
                color: $color-white;
                text-transform: uppercase;
                transition: color 0.5s ease;
            }

            &__icon {
                border-left: 1.5px solid $color-orange !important;
                width: 41px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.5s ease;

                img {
                    filter: invert(45%) sepia(50%) saturate(2400%) hue-rotate(360deg) brightness(81%) contrast(99%);
                    transition: filter 0.3s ease;

                }
            }
        }
    }
}

.onHover {
    filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(133deg) brightness(1200%) contrast(90%) !important;
} -->