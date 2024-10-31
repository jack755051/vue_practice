<template>
    <div class="header">
        <div class="word-space">
            <span>Router的分支</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"Header",
}
</script>

<script lang="ts" setup>
    
</script>

<style>
    .header{
        width: 100vw;
        height: 10vh;
        margin: 2.5vh 0;
        background-color: brown;
        display: flex;
    }

    .word-space{
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .word-space span{
        font-weight: 800;
        font-size: 50px;
    }
</style>