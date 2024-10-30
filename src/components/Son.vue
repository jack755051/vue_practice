<template>
    <div class="son">
        <h2
        v-for="p in dataList"
        :key=" p.id "
        >{{ p.name }}</h2>
    </div>
</template>

<script lang="ts">
export default {
    name:"Son",
}
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PersonInit } from '../Types';

withDefaults(
    defineProps<{ dataList?: PersonInit[] }>(), {
        dataList:()=> [
            {
                id: '11eeffe',
                name: 'Dick',
                age: 40
            }
        ] as PersonInit[]
    }
)

</script>

<style>
    .son{
        background-color: #dc2424;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>