
<template>
    <div class="watch_effect">
        <h2>當水位高於60CM或者水溫高於80度時，啟動警報</h2>
        <h2>當前水溫：{{ waterTemp }}</h2>
        <h2>當前水位：{{ waterHeigh }}</h2>
        <button @click="changeWaterTemp">提高水溫</button>
        <button @click="changeWaterHeigh">提高水位</button>
    </div>
</template>

<script lang="ts">
export default {
    name:"WatchEffect",
}
</script>

<script lang="ts" setup>
    import { ref,watchEffect } from 'vue';

    let waterTemp = ref(10);
    let waterHeigh = ref(0);

    function changeWaterTemp(){
        waterTemp.value += 10;
    }

    function changeWaterHeigh(){
        waterHeigh.value += 10;
    }

    watchEffect(()=>{
        if(waterTemp.value >= 80 || waterHeigh.value >= 60){
            console.warn('警報：水溫或者水位過高');
        }
    })

</script>

<style>
    .watch_effect{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>