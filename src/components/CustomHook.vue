<template>
    <div class="customHook">
        <img 
        v-for="(img ,index) in dogList"
        :key="index"
        :src = img
        >
        <br/>
        <button @click="getDog(5)">生成照片</button>
    </div>
</template>

<script lang="ts">
export default {
    name:"CustomHook",
}
</script>

<script lang="ts" setup>
    import { ref } from 'vue';
    import axios from 'axios';

    let dogList = ref<string[]>([]);

    async function getDog(imageAmount:number) {
        let url = 'https://dog.ceo/api/breeds/image/random/' + imageAmount;
        try {
            const response = await axios.get(url);
            // dogList.value = response.data.message;
            dogList.value.push(...response.data.message)
        } catch (error) {
            console.error(error);
        }
    }
</script>

<style>
    .customHook{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    img{
        height: 100px;
    }
</style>