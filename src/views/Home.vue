<template>
    <div class="home">
        <div :class="{
            home__hero: true,
            reduce_size: scrollIncrement > 2,
        }">
            <img class="home__hero__img" :src="`${$assetsBasePath}backgrounds/asuka.jpg`">

        </div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>
        <div>WEEEEEE</div>

    </div>
</template>

<script setup>
import { useStateStore } from "@/utilities/store/store";
import { ref, watch } from "@vue/runtime-core";

const isScrolling = useStateStore();
const scrollIncrement = ref(0);

watch(isScrolling, () => {
    scrollIncrement.value = isScrolling.scrollState;
});

</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: auto;

    &__hero {
        max-width: 100vw;
        max-height: calc(100vh - 70px);
        height: calc(100vh - 70px);
        transition: height .5s ease;
        transform-origin: bottom center;
        overflow: hidden;
        padding: 3rem 3rem 0 3rem !important;



        &__img {
            max-width: 100%;

        }
    }
}

.reduce_size {
    height: calc(80vh - 70px);
}
</style>