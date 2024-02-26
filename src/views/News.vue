<template>
    <div class="news">
        <div class="news__header">
            <div class="news__header__title">
                <h1 v-html="props.content.title">
                </h1>
            </div>

            <div class="news__header__buttons">
                <div class="news__header__buttons__search">
                    <searchButton :content="props.content.button" @update-input="updateInput" />
                </div>
            </div>
        </div>
        <div class="news__wrapper">
            <newsBoxM v-for="(news, index) in searchDb" :key='index' :content="news" />
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

//array with filtered news by search bar input
const searchDb = ref([]);


// loads all the news
const newsDb = ref([]);



const fetchNewsData = async () => {
    return new Promise((resolve, reject) => {
        airtable.base('news').select({}).eachPage(
            (records, fetchNextPage) => {
                records.forEach(async (record) => {
                    newsDb.value.unshift({
                        title: record.fields.title,
                        text: record.fields.text,
                        tag: record.fields.tag,
                        date: record.fields.date,
                        img: record.fields.img[0].url
                    });
                });
                fetchNextPage();
            },
            (err) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    searchDb.value = newsDb.value;
                    resolve(newsDb.value);
                }
            }
        );
    });
};


const fetchData = async () => {
    try {
        await fetchNewsData();
    } catch (error) {
        console.error(error);
    }
};

fetchData();


const updateInput = (inputText) => {
    if(inputText == null) {
        return newsDb.value;
    }
    searchDb.value = newsDb.value.filter(text => {
        return text.text.toLowerCase().includes(inputText)
    });
}

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