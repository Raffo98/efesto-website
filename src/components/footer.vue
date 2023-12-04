<template>
    <div class="footer">
        <div class="footer__box">
            <div class="footer__box__sections">
                <div class="footer__box__sections__info">
                    <p class="footer__box__sections__info__title" v-html="sections.info.title"></p>
                    <ul class="footer__box__sections__info__list">
                        <li class="footer__box__sections__info__list__contacts"
                            v-for="(contact, idx) in sections.info.subsections" :key="idx" v-html="contact"></li>
                    </ul>
                </div>
                <div class="footer__box__sections__container">
                    <div class="footer__box__sections__container__section" v-for="(section, idx) in props.sections.sections"
                        :key="idx">
                        <p class="footer__box__sections__container__section__title" v-html="section.title"></p>
                        <ul class="footer__box__sections__container__section__list">
                            <li class="footer__box__sections__container__section__list__subsection"
                                v-for="(sub, idx) in section.subsections" :key="idx" v-html="sub"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__box__sections__social">
                <p class="footer__box__sections__social__title" v-html="sections.social.title"></p>
                <div class="footer__box__sections__social__icons">
                    <div class="footer__box__sections__social__icons__icon"
                        v-for="(icon, idx) in props.sections.social.subsections" :key="idx">
                        <img :src="`${$assetsBasePath}icons/${icon}.svg`">
                    </div>
                </div>
            </div>
            <div class="footer__box__sections__details">
                <p class="footer__box__sections__details__detail" v-for="(detail, idx) in props.sections.details.subsections" :key="idx" v-html="detail"></p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    sections: Object,
});

</script>

<style lang="scss" scoped>
.footer {
    position: absolute;
    bottom: 0;
    background-color: $color-black;
    height: auto;
    width: 100%;

    &__box {
        width: 100%;
        height: 100%;
        padding: 3rem 3rem !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;

        &__sections {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &__info {
                width: 38.2%;
                border-right: 1px solid $color-white !important;

                &__title {
                    @include body-large;
                    color: $color-orange;
                    padding-bottom: .5rem !important;

                    &::first-letter {
                        text-transform: capitalize;
                    }

                }

                &__list {
                    &__contacts {
                        @include paragraph;
                        color: $color-white;
                        text-decoration: underline;
                        text-underline-offset: 4px;
                        padding-bottom: .5rem !important;

                    }
                }
            }

            &__container {
                width: 54%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;

                &__section {


                    &__title {
                        @include paragraph-m;
                        color: $color-orange;
                        padding-bottom: .5rem !important;


                    }

                    &__list {
                        &__subsection {
                            @include section-style;
                            color: $color-white;
                            padding-bottom: .5rem !important;



                            &::first-letter {
                                text-transform: capitalize !important;
                            }

                        }
                    }
                }
            }

            &__social {
                &__title {
                    @include section-style;
                    color: $color-orange;
                    padding-bottom: .5rem !important;


                    &::first-letter {
                        text-transform: capitalize !important;
                    }
                }

                &__icons {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;

                    &__icon {
                        padding-right: .5rem !important;

                    }

                }
            }

            &__details {
                &__detail {
                    @include section-style;
                    color: $color-grey;
                }
            }
        }
    }
}
</style>