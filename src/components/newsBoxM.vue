<template>
    <div class="box">
        <div class="box__img">
            <img :src="props.content.img">
        </div>
        <div class="box__details">
            <div class="box__details__tag">
                <p v-html="props.content.tag"></p>
            </div>
            <p class="box__details__split">•</p>
            <div class="box__details__date">
                <p v-html="props.content.date"></p>
            </div>
        </div>
        <div class="box__title">
            <p v-html="props.content.title"></p>
        </div>
        <div class="box__text">
            <p v-html="textElement"></p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    content: Object,
});

const textRef = ref(props.content.text);

  const maxLength = 220;
  const textElement = ref(textRef.value);
  if (textElement.value.length > maxLength) {
    textElement.value = textElement.value.substring(0, maxLength) + '...';
  }



</script>

<style lang="scss" scoped>
.box {
    width: 49%;
    border: 1px solid $color-black !important;
    padding: 1rem !important;

    &__img {
        padding-bottom: 1.75rem !important;

        img {
            object-fit: cover;
            max-width: 100%;
            min-width: 100%;
            max-height: 250px;

        }
    }

    &__details {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: .75rem !important;
        @include news-details;

        &__tag {
            color: $color-orange;
        }

        &__split {
            padding: 0 .25rem !important;
        }

        &__date {}
    }

    &__title {
        @include text;
        padding: .75rem !important;

    }

    &__text {
        @include paragraph;
        padding: .75rem !important;

    }
}
</style>