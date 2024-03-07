<template>
  <div class="carousel">
    <div class="carousel__main">
      <div class="carousel__main__overlay">
        <div class="carousel__main__overlay__arrows" v-for="arrow, index in props.content.button.icons" :key="index"
          @mouseover="handleArrowHover(arrow)" @mouseleave="isHover = false, activeArrow = ''"
          :style="[isHover ? { backgroundPosition: 'left bottom' } : { backgroundPosition: 'right bottom' }]">
          <button class="carousel__main__overlay__arrows__button">
            <div class="carousel__main__overlay__arrows__button__icon"
              :style="[isHover && activeArrow == arrow ? { backgroundColor: 'rgba(247, 247, 247, 1)' } : { backgroundColor: 'rgba(231, 83, 23, 1)' }]">
              <img :src="`${$assetsBasePath}icons/gallery/${arrow}.svg`" :class="{ 'onHover': isHover && activeArrow == arrow }" />
            </div>
          </button>
        </div>
      </div>
      <div class="carousel__main__strip">
        <img v-for="image, index in props.content.length" :key="index"
          :src="`${$assetsBasePath}gallery/${props.content.filename}-${image}.jpg`" alt="">
      </div>
    </div>
    <div class="carousel__thumbnail"></div>
  </div>
</template>

<script setup>
import { ref } from "@vue/runtime-core";

const props = defineProps({
  content: Object
});

const isHover = ref(false);
const activeArrow = ref('');

const handleArrowHover = (arrow) => {
  isHover.value = true;
  activeArrow.value = arrow;
};


</script>

<style lang="scss" scoped>
.carousel {
  height: 100%;
  padding: 3rem !important;

  &__main {
    max-width: 60%;
    height: 100%;
    overflow: hidden;
    position: relative;

    &__overlay {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 50%;
      width: 100%;
      height: auto;
      padding: 0 1rem !important;

      &__arrows {
        border: 1.5px solid $color-white !important;
        position: relative;
        transition: width 0.3s ease;
        background: linear-gradient(to right, $color-orange 50%, $color-white 50%);
        transition: all 0.8s ease;
        width: 41px;

        &:hover {
          border: 1.5px solid $color-orange !important;
        }


        &__button {
          display: flex;
          height: 41px;
          width: 100%;

          &__icon {
            width: 75px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.5s ease;

            img {
              transition: filter 0.3s ease;
              filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(133deg) brightness(1200%) contrast(90%);
            }
          }
        }
      }
    }

    &__strip {
      display: flex;
      flex-direction: row;
      height: 100%;

      img {
        width: 100%;
      }

    }
  }

  &__thumbnail {}
}

.onHover {
  filter: invert(45%) sepia(50%) saturate(2400%) hue-rotate(360deg) brightness(81%) contrast(99%) !important;
}
</style>