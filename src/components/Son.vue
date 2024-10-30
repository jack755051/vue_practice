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
import { PersonInit } from '../Types';

    const props = defineProps<{ dataList: Array<PersonInit> }>();
    let x = props.dataList;

</script>

<style>
    .son{
        background-color: #dc2424;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>