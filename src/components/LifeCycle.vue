<template>
    <div class="lifeCycle">
        
    </div>
</template>

<script lang="ts">
export default {
    name:"LifeCycle",
}
</script>

<script lang="ts" setup>
    import { 
        ref,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
    } from 'vue';

    let sum =ref(0)

</script>

<style>
    .lifeCycle{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>