<template>
    <div class="news">
        <div class="news__header">
            <div class="news__header__title">
                <h1 v-html="props.content.title">
                </h1>
            </div>

            <div class="news__header__buttons">
                <div class="news__header__buttons__search">
                    <searchButton :content="props.content.buttons[0]" @update-input="updateInput" />
                </div>
                <div class="news__header__buttons__order">
                    <orderButton :content="props.content.buttons[1]" @update-choice="updateChoice" />
                </div>
                <div class="news__header__buttons__filter">
                    <filterButton :content="props.content.buttons[2]" :tags="tagsList" @update-tags="updateTags" />
                </div>
            </div>
        </div>
        <div class="news__wrapper">
            <newsBoxM v-for="(news, index) in selectedNews" :key='index' :content="news" />
        </div>

    </div>
</template>

<script setup>
import newsBoxM from "@/components/newsBoxM.vue";
import searchButton from "@/components/searchButton.vue";
import orderButton from "@/components/orderButton.vue";
import filterButton from "@/components/filterButton.vue";

import { ref } from "@vue/runtime-core";
import airtable from "@/plugins/airtable.js";


const props = defineProps({
    content: Object,
});

//array with filtered news by search bar input
const selectedNews = ref([]);

// loads all the news
const newsDb = ref([]);

//tags list
const tagsList = ref([]);


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
                    newsDb.value = newsDb.value.sort((a, b) => new Date(b.date) - new Date(a.date));
                    selectedNews.value = newsDb.value;
                    resolve(newsDb.value);
                }
            }
        );
    });
};


const fetchData = async () => {
    try {
        await fetchNewsData();
        //get tags
        newsDb.value.forEach(news => {
            news.tag.map(tag => {
                if (!tagsList.value.includes(tag)) {
                    tagsList.value.push(tag);
                }
            })
        });
        
    } catch (error) {
        console.error(error);
    }
};

fetchData();


//filter by input searchbar
const updateInput = (inputText) => {
    if (inputText == null) {
        return newsDb.value;
    }
    selectedNews.value = newsDb.value.filter(text => {
        return text.text.toLowerCase().includes(inputText)
    });
}

//order by date
const updateChoice = (choice) => {
    if (choice == 'recent') {
        selectedNews.value = selectedNews.value.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    else {
        selectedNews.value = selectedNews.value.sort((a, b) => new Date(a.date) - new Date(b.date));

    }
}

//filter by tag
const updateTags = (tags) => {
    console.log(tags);
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
            gap: 1.375rem;

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