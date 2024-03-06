<template>
    <div class="galleryImages">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="slide in 3" :key="slide">
          <div class="carousel__item">
            <img :src="`${$assetsBasePath}gallery/gallery-0`" alt="">
          </div>
        </Slide>
      </Carousel>
  
      <Carousel id="thumbnails" :items-to-show="3" :wrap-around="true" v-model="currentSlide" ref="carousel">
        <Slide v-for="slide in 3" :key="slide">
          <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }} PORCODIOOOOO</div>
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script setup>
import { ref } from "@vue/runtime-core";
import { Carousel, Slide } from 'vue3-carousel'
  
  const currentSlide = ref(0);
  
  const slideTo = (val) => {
    currentSlide.value = val;
  };
  </script>
  

<style lang="scss" scoped>
@import "@/assets/scss/carousel-custom.css";
// .galleryImages {

// }

</style>