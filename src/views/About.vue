<template>
  <div class="about">
    <div class="about__title">
      <h1 v-html="props.content.title"></h1>
    </div>
    <div class="about__text" v-html="props.content.text"></div>
    <div class="about__image"></div>
    <div class="about__sections" v-for="section, id in props.content.sections" :key="id">
      <div class="about__sections__section">
        <div class="about__sections__section__subtitle">
          <h2 v-html="section.title" :style="{ textTransform: section.id === 'cvsender' ? 'uppercase' : 'lowercase' }"></h2>
        </div>
        <div class="about__sections__section__text" v-html="section.text"></div>
        <div class="about__sections__section__team" v-if="section.id == 'team'">
          <teamCard v-for="(person, idx) in teamDb" :key="idx" :content="person"
            :titles="props.content.sections[1].cards.titles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import airtable from "@/plugins/airtable.js";
import { ref } from "@vue/runtime-core";
// import axios from 'axios';

import teamCard from "@/components/teamCard.vue";


const props = defineProps({
  content: Object,
});

// var app_id = "appVMoyb4khjMiISW";
// var api_key = "keyZ04O2juXZ975sl";

// axios.get(
//   "https://api.airtable.com/v0/" + app_id + "/team?api_key=" + api_key, {
//   headers: {
//     Authorization: "Bearer " + api_key
//   }
// }
// ).then(function (response) {
//   console.log(response.data.records);
//   teamDb.value = response.data.records;

// }).catch(function (error) {
//   console.log(error)
// })

// airtable.base('team').select({}).eachPage(function page(records, fetchNextPage) {

//     records.forEach(function(record) {
//         teamDb.value.push(record.fields); 
//     });

//  fetchNextPage();
// })

// console.log(teamDb.value);
const teamDb = ref([]);

console.log("wniwd")
const fetchTeamData = () => {
  airtable.base('team').select({}).eachPage(function page(records, fetchNextPage) {
    records.forEach(async function (record) {
      await teamDb.value.push({ "name": record.fields.name, "role": record.fields.role, "mail": record.fields.mail, "phone": record.fields.phone, "pic": record.fields.pic[0].url, });
    });

    console.log(teamDb.value)
    fetchNextPage();
  }, function done(err) {
    if (err) { console.error(err); return; }

  });
};
fetchTeamData();


</script>


<style lang="scss" scoped>
.about {
  width: 100%;
  padding: 0 3rem 0 3rem !important;

  &__title {
    h1 {
      @include h1;
      color: $color-black;

    }
  }

  &__text {
    padding-bottom: 2rem !important;
    @include paragraph;
    color: $color-black;
  }

  &__image {
    // Your styles for the image here
  }

  &__sections {
    &__section {
      &__subtitle {
        padding-bottom: 2rem !important;

        h2 {
          @include h2;
          color: $color-black;
          text-transform: lowercase;

          &::first-letter {
            text-transform: capitalize;
          }
        }
      }

      &__text {
        padding-bottom: 2rem !important;
        @include paragraph;
        color: $color-black;
      }

      &__team {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

      }
    }
  }
}
</style>