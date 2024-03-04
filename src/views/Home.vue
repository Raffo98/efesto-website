<template>
    <div class="home">
        <div :class="{
            home__hero: true,
            reduce_size: scrollIncrement > 2,
        }">
            <!-- <img class="home__hero__img" :src="`${$assetsBasePath}backgrounds/asuka.jpg`"> -->
            <img class="home__hero__img" :src="`${$assetsBasePath}backgrounds/placeholder1.jpg`">
        </div>
        <div class="home__h1">
            <h1 v-html="props.content.hero.title"></h1>
        </div>
        <div class="home__discover">
            <p v-html="props.content.hero.cta"></p>
        </div>
        <div class="home__services">
            <h2 class="home__services__title" v-html="props.content.services.title"></h2>
            <div class="home__services__cards">
                <Card v-for="(service, idx) in props.content.services.service" :key="idx" :content="service" />
            </div>
        </div>
        <div class="home__contacts">
            <h2 class="home__contacts__title" v-html="props.content.contact.title"></h2>
            <ctaButtonL :content="props.content.contact.button" />
        </div>
    </div>
</template>

<script setup>
import { useStateStore } from "@/utilities/store/store";
import { ref, watch } from "@vue/runtime-core";
import Card from "@/components/card.vue";
import ctaButtonL from "@/components/ctaButtonL.vue";



const props = defineProps({
    content: Object
});

console.log("HOME", props.content.services)


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
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__hero {
        max-width: 100vw;
        max-height: calc(100vh - 70px);
        height: calc(100vh - 70px);
        transition: height .5s ease;
        transform-origin: bottom center;
        overflow: hidden;



        &__img {
            max-width: 100%;
        }
    }

    &__h1 {
        width: 100%;
        @include h1;
        text-transform: uppercase;
        color: $color-black;
        margin: 0 3rem 0 3rem !important;
    }

    &__discover {
        width: 100%;
        text-align: center;

    }

    &__services {
        width: 100%;
        background-color: $color-black;
        background-size: 100%;
        height: auto;

        &__title {
            @include h2;
            color: $color-white;
            padding: 3rem 3rem 0 3rem !important;
        }

        &__cards {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: space-between;
            padding: 1rem 3rem 3rem 3rem !important;

        }
    }

    &__contacts {
        width: 100%;
        height: 39vh;
        padding: 2.25rem 3rem 0 3rem !important;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title {
            @include h2;
            color: $color-lightgrey;
            text-align: center;
            text-transform: none;
            padding-bottom: 2rem !important;

            &::first-letter {
                text-transform: capitalize;
            }



        }
    }
}

.reduce_size {
    height: calc(70vh - 70px);
}</style>