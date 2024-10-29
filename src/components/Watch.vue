<template>
    <div class="watch">
        <h2>情況一，監視[ref]</h2>
        <h2>當前求和為：{{ sum }}</h2>
        <button @click="changeSum">點我sum+1</button>
    </div>
    <br/>
</template>

<script lang="ts">
export default {
    name:"Watch_01",
}
</script>

<script lang="ts" setup>
    import { ref ,watch} from 'vue';
    let sum = ref(0);

    function changeSum(){
        sum.value += 1;
    }
    // 監視sum的變化
    const stopWatch = watch(sum,(newVal,oldValue)=>{
        console.warn('sum發生變化了',newVal,oldValue);
        if(newVal >= 9){
            stopWatch();
        }
    })

</script>

<style>
    .watch{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>