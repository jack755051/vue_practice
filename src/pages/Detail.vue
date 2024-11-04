<template>
    <div class="detail">
        <!-- <h2 class="title">{{ query.newsTitle }}</h2>
        <p class="time">{{ query.publishDate }}</p>
        <p class="content">{{ query.newsContent }}</p> -->

        <h2 class="title">{{ route.params.newsTitle }}</h2>
        <p class="time">{{ route.params.publishDate }}</p>
        <!-- <p class="content">{{ route.params.newsContent }}</p> -->
        <p class="content">{{ decodedContent }}</p>
    </div>
</template>

<script lang="ts">
export default {
    name: "Detail",
}
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed, toRefs } from 'vue';

let route = useRoute();
// let { query } = toRefs(route);


// const modifiedContent = computed(() => {
//     const content = query.value.newsContent;
//     return content ? content.slice(1, -1) : '';
// });


const decodedContent = computed(() => {
    return decodeURIComponent(route.params.newsContent as string);
});

</script>

<style>
    .detail {
        background-color: #ffffff;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        height: 100%;
    }

    .title, .time, .content { 
        width: 100%;
        height: auto;
    }

    .title {
        text-align: center;
    }

    .time {
        text-align: right;
    }

    .content {
        text-align: left;
    }
</style>
