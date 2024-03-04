<template>
    <div class="quality">
        <div class="quality__certificates">
            <div class="quality__certificates__title">
                <h1 v-html="props.content.title"></h1>
            </div>
            <div class="quality__certificates__text" v-html="props.content.text"></div>
            <div class="quality__certificates__accordion">
                <certificateAccordion />
            </div>
            <div class="quality__certificates__certificate">
                <div class="quality__certificates__certificate__subtitle">
                    <h2 v-html="props.content.certificate.subtitle"></h2>
                </div>
                <div class="quality__certificates__certificate__text" v-html="props.content.certificate.text"></div>
                <div class="quality__certificates__certificate__accordion">
                    <certificateAccordion />
                </div>
                <div class="quality__certificates__certificate__cta">
                    <ctaButtonM :content="props.content.cta.button" />
                </div>
            </div>
        </div>
        <div class="quality__policy">
            <div class="quality__policy__box">
                <div class="quality__policy__box__title">
                    <h2 v-html="props.content.policy.title"></h2>
                </div>
                <div class="quality__policy__box__text" v-html="props.content.policy.text"></div>
                <button class="quality__policy__box__button">
                    <img :src="`${$assetsBasePath}icons/${props.content.policy.button.icon}.svg`" />
                    <p v-html="props.content.policy.button.text"></p>
                    <img :src="`${$assetsBasePath}icons/${props.content.policy.button.iconHover}.svg`" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import certificateAccordion from "@/components/certificateAccordion.vue";
import ctaButtonM from "@/components/ctaButtonM.vue";


const props = defineProps({
    content: Object,
});

</script>

<style lang="scss" scoped>
.quality {
    width: 100%;
    padding: 3rem 3rem 0 3rem !important;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    &__certificates {
        width: 68%;

        &__title {
            h1 {
                @include h1;
                text-transform: uppercase;
                color: $color-black;
            }
        }

        &__text {
            padding-bottom: 2rem !important;
            @include paragraph;
            color: $color-black;
        }

        &__accordion {
            padding-bottom: 3rem !important;
        }

        &__certificate {
            &__subtitle {
                padding-bottom: 2rem !important;

                h2 {
                    @include h2;
                    color: $color-black;
                    text-transform: lowercase;

                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
            }

            &__text {
                padding-bottom: 2rem !important;
                @include paragraph;
                color: $color-black;
            }

            &__cta {
                display: flex;
                justify-content: center;
                padding: 2rem 0 3rem 0 !important;
            }

        }
    }

    &__policy {
        width: 32%;

        &__box {
            background-color: $color-orange;
            padding: 2rem !important;

            &__title {
                padding-bottom: 2rem !important;

                h2 {
                    @include h2;
                    color: $color-white;
                    text-transform: lowercase;

                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
            }

            &__text {
                padding-bottom: 2rem !important;
                @include paragraph;
                color: $color-white;
            }

            &__button {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: .8rem 1.3rem .8rem 1.3rem !important;
                border: 1px solid $color-white !important;
                overflow: hidden;

                p {
                    @include paragraph-m;
                    color: $color-white;
                    transition: transform 0.7s ease;

                }

                img:first-child {
                    padding-right: .4rem !important;
                }

                img:last-child {
                    padding-left: .4rem !important;
                }

                img:last-child {
                    transform: translateX(170%);
                }




                &:hover {
                    img:first-child {
                        transform: translateX(-180%);
                    }

                    p {
                        transform: translateX(-10%);
                    }

                    img:last-child {
                        transform: translateX(-65%);
                    }
                }

                img {
                    transition: transform 0.7s ease;
                }
            }
        }
    }
}
</style>