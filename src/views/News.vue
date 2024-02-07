<template>
    <div class="news">
        <div class="news__header">
            <div class="news__header__title">
            <h1 v-html="props.content.title">
            </h1>
        </div>

            <div class="news__header__buttons">
                <div class="news__header__buttons__search">
                    <searchButton :content="props.content.button" />
                </div>
            </div>
        </div>
        <div class="news__wrapper">
            <newsBoxM v-for="(news, index) in newsDb" :key='index' :content="news"/>
        </div>

    </div>
</template>

<script setup>
import newsBoxM from "@/components/newsBoxM.vue";
import searchButton from "@/components/searchButton.vue";

import { ref } from "@vue/runtime-core";
import airtable from "@/plugins/airtable.js";


const props = defineProps({
    content: Object,
});

const newsDb = ref([]);

const fetchNewsData = () => {
  airtable.base('news').select({}).eachPage(function page(records, fetchNextPage) {
    records.forEach(async function (record) {
      await newsDb.value.push({ "title": record.fields.title, "text": record.fields.text, "tag": record.fields.tag, "date": record.fields.date, "img": record.fields.img[0].url, });
    });

    fetchNextPage();
  }, function done(err) {
    if (err) { console.error(err); return; }

  });
};
fetchNewsData();

</script>

<style lang="scss" scoped>
.news {
    width: 100%;
    padding: 0 3rem 0 3rem !important;

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &__title {
        h1 {
            @include h1;
            color: $color-black;
        }
    }
    &__buttons {
        display: flex;

    }
    }
    &__wrapper {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        padding-bottom: 6rem !important;
    }
}
</style>