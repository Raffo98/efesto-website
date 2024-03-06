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
        <div class="home__news">
            <div class="home__news__wrapper">
                <div class="home__news__wrapper__latest">
                    <div class="home__news__wrapper__latest__textbox">
                        <h2 class="home__news__wrapper__latest__textbox__title" v-html="props.content.news.title"></h2>
                        <div class="home__news__wrapper__latest__textbox__newstitle">
                            <p v-html="props.preview.latest.title"></p>
                        </div>
                        <div class="home__news__wrapper__latest__textbox__details">
                            <div class="home__news__wrapper__latest__textbox__details__tags">
                                <div class="home__news__wrapper__latest__textbox__details__tags__tag"
                                    v-for="(tag, index) in props.preview.latest.tag" :key="index" v-html="tag"></div>
                            </div>
                            <p class="home__news__wrapper__latest__textbox__details__split">•</p>
                            <div class="home__news__wrapper__latest__textbox__details__date">
                                <p v-html="props.preview.latest.date"></p>
                            </div>
                        </div>
                        <div class="home__news__wrapper__latest__textbox__text">
                            <p v-html="textElement"></p>
                        </div>
                    </div>
                    <div class="home__news__wrapper__latest__cta">
                        <ctaButtonM :content="props.content.news.button" />
                    </div>
                </div>
                <div class="home__news__wrapper__img">
                    <img :src="props.preview.latest.img" alt="">
                </div>
            </div>
            <div class="home__news__recents">
                <newsBoxS v-for="news, index in props.preview.recent" :key="index" :content="news" />
            </div>

        </div>
        <div class="home__carousel">
            <galleryImages />
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
import ctaButtonM from "@/components/ctaButtonM.vue";
import newsBoxS from "@/components/newsBoxS.vue";
import GalleryImages from "@/components/galleryImages.vue";




const props = defineProps({
    content: Object,
    preview: Object
});

const isScrolling = useStateStore();
const scrollIncrement = ref(0);
const textRef = ref(props.preview.latest.text);

//maxlength for preview news
const maxLength = 300;
const textElement = ref(textRef.value);
if (textElement.value.length > maxLength) {
    textElement.value = textElement.value.substring(0, maxLength) + '...';
}


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

    &__news {
        width: 100%;
        padding: 0 3rem 0 3rem !important;
        height: 100vh;


        &__wrapper {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            min-height: 58%;
            gap: 1rem;


            &__latest {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                &__textbox {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    // justify-content: space-between;
                    gap: 1rem;
                    height: 100%;

                    &__title {
                        @include h2;
                        text-transform: uppercase;
                        color: $color-lightgrey;
                        line-height: 100%;
                    }

                    &__newstitle {
                        @include h1;
                        line-height: 100%;

                    }

                    &__details {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        @include news-details;

                        &__tags {
                            color: $color-orange;
                        }

                        &__split {
                            padding: 0 .25rem !important;
                        }

                        &__date {}
                    }

                    &__text {
                        @include paragraph;
                    }
                }

                &__cta {
                    width: fit-content;
                }
            }

            &__img {
                width: 50%;
                min-height: 100%;
                overflow: hidden;

                & img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

        }

        &__recents {
            padding: 3rem 0 0 0 !important;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
}
</style>