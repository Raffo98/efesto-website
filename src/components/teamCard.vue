<template>
    <div class="teamcard">
        <div class="teamcard__image">
            <img :src="props.content.pic">
        </div>
        <div class="teamcard__info">
            <div class="teamcard__info__role">
                <p v-html="props.content.role"></p>
            </div>
            <div class="teamcard__info__name">
                <p v-html="props.content.name"></p>
            </div>
            <div class="teamcard__info__mail">
                <p class="teamcard__info__mail__title" v-html="props.titles[0]"></p>
                <p v-html="props.content.mail"></p>
            </div>
            <div class="teamcard__info__phone">
                <p class="teamcard__info__phone__title" v-html="props.titles[1]"></p>
                <p v-html="props.content.phone"></p>
            </div>
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
    width: 49%;
    padding: 1rem !important;
    display: flex;
    flex-direction: row;

    .mobile & {
        width: 100%;
        flex-direction: column;
    }
    &__image {
        width: 36%;

        .mobile & {
            width: 100%;
        }
        img  {
            object-fit: cover;
            float: left;
            max-width: 100%;
            height: auto; 

            .mobile & {
                float: none;
            }

        }
    }

    &__info {
        width: 64%;
        margin-left: 1rem !important;
        
        .mobile & {
            width: 100%;
            margin-left: 0 !important;

        }

        &__role {
            @include card-role;
            color: $color-black;
            padding-bottom: .25rem !important;


        }

        &__name {
            @include text;
            color: $color-black;
            text-transform: uppercase;
            padding-bottom: .25rem !important;



        }

        &__mail {
            @include section-style;
            color: $color-black;
            padding-bottom: .25rem !important;


            &__title {
                @include paragraph-m;
                color: $color-orange;
                text-transform: uppercase;
                padding-bottom: .25rem !important;

            }

        }

        &__phone {
            @include section-style;
            color: $color-black;

            &__title {
                @include paragraph-m;
                color: $color-orange;
                text-transform: uppercase;
                padding-bottom: .25rem !important;


            }

        }
    }

}
</style>