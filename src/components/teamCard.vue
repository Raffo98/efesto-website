<template>
    <div class="teamcard">
        <div class="teamcard__image">
            <img src="" alt="">
        </div>
        <div class="teamcard__role">
            <p v-html="props.content.fields.role"></p>
        </div>
        <div class="teamcard__name">
            <p v-html="props.content.fields.name"></p>
        </div>
        <div class="teamcard__mail">
            <p class="teamcard__mail__title" v-html="props.titles[0]"></p>
            <p v-html="props.content.fields.mail"></p>
        </div>
        <div class="teamcard__phone">
            <p class="teamcard__mail__title" v-html="props.titles[1]"></p>
            <p v-html="props.content.fields.phone"></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object,
    titles: Array
});

</script>

<style lang="scss" scoped>
.teamcard {
    border: 1px solid $color-black !important;

    &__role {
        @include card-role;
        color: $color-black;

    }
    &__name {
        @include text;
        color: $color-black;


    }
    &__mail {
        @include section-style;
        color: $color-black;


    }
    &__phone {
        @include section-style;
        color: $color-black;


    }

}

</style>