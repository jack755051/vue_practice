<template>
    <div class="tag_ref">
        <h2>台灣省</h2>
        <h2 class="title_01">新北市</h2>
        <h2 ref="title01">新莊區</h2>
        <h2>昌平街19號7樓</h2>
        <button @click="showLog">拿到DOM</button>
        <button @click="changeColor">文字變色</button>
    </div>
</template>

<script lang="ts">
export default {
    name:"TagRef",
}
</script>

<script lang="ts" setup>
    import { ref ,defineExpose} from 'vue';
    let title01 = ref();

    //測試組建暴露的方法
    let test01 = ref();
    let test02 = ref();
    let test03 = ref();

    function showLog(){
        console.warn(title01.value);
    }

    function changeColor(){
        let hexCode:string = generateRandomHexColor();
        title01.value.style.color = hexCode;
    }

    function generateRandomHexColor() {
    // 生成一個 6 位的隨機十六進位數字
    const hexCode = Math.floor(Math.random() * 0xffffff).toString(16);
    // 確保代碼總是 6 位，不足的位數用 0 補齊
    return `#${hexCode.padStart(6, '0')}`;
    }

    defineExpose({
        test01,
        test02,
        test03
    })
</script>

<style scoped>
    .tag_ref{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .title01{
        color:red
    }
    .title_01{
        color:blue
    }
</style>