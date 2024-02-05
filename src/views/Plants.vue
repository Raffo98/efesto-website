<template>
    <div class="plants">
        <div class="plants__wrapper">
            <h1 class="plants__wrapper__title" v-html="props.content.title"></h1>
            <p class="plants__wrapper__text" v-html="props.content.text"></p>
        </div>
        <div class="plants__sections">
            <div class="plants__sections__plant" v-for="(plant, index) in props.content.sections" :key="index">
                <div class="plants__sections__plant__text">
                    <h2 class="plants__sections__plant__text__name" v-html="plant.name"></h2>
                    <div class="plants__sections__plant__text__description" v-html="plant.description"></div>
                </div>
                <servicesAccordion :content="plant.accordion" />

            </div>
        </div>

    </div>
</template>

<script setup>
import servicesAccordion from "@/components/servicesAccordion.vue";

const props = defineProps({
    content: Object,
});
</script>

<style lang="scss" scoped>
.plants {
    padding: 3rem 3rem 0 3rem !important;

    &__wrapper {
        width: 100%;
        background-color: $color-softgrey;
        padding: 3rem 9rem !important;
        &__title {
            @include h1;
        }
        &__text {
            @include services-text;
        }
    }
    &__sections {
       &__plant {
        padding-top: 3rem !important;
        &__text {
            display: flex;
            flex-direction: row;
            padding-bottom: 2rem !important;
            &__name {
                width: 30%;
                @include h2;
                text-transform: capitalize;
            }
            &__description {
                width: 70%;

                @include paragraph;
            }
        }
       } 
    }
}

</style>