<template>
    <div>
        we
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute();


router.replace({ query: {} }) 

console.log(JSON.parse(route.query.content));


</script>

<style lang="scss" scoped>

</style>