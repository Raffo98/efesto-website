<template>
    <div class="search">
        <label class="custom-field">
            <input type="text" v-model="input" :placeholder="props.content.text" />
        </label>
    </div>
</template>

<script setup>
// import { ref } from "@vue/runtime-core";

const props = defineProps({
    content: Object,
});

const input = defineModel()

// const isHover = ref(false);

</script>

<style lang="scss" scoped>
.search {
    // border: 1.5px solid $color-orange !important;
    // // background-color: $color-white;
    // position: relative;
    // transition: width 0.3s ease;
    // background: linear-gradient(to right, $color-white 50%, $color-orange 50%);
    // background-size: 200% 100%;
    // // background-position:left bottom;
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
}
</style>