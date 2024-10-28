<template>
    <div class="person">
        <h2>這個班級是{{ classGender }}年{{classNumber}}班，老師是{{ teacher }}</h2>
        <h2>學生人數為{{ classmateAmount }}人</h2>
        <ul>
            <li v-for="p in classmateName" :key="p.number">{{p.name}}</li>
        </ul>
        <button @click="changeTeacher">老師姓名調整</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Person'
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
    let isNewTeacher = false

    let teacher = ref('Lily');
    let classGender = 3;
    let classNumber = 1;
    let classmateAmount = 5;
    let classmateName = reactive([
        {number:1, name:'Alice'},
        {number:2, name:'Bob'},
        {number:3, name:'Charlie'},
        {number:4, name:'David'},
        {number:5, name:'Eve'}
    ]);

    function changeTeacher() {
        if(!isNewTeacher){
            teacher.value = 'Locker Lee';
        }else{
            teacher.value = 'Lily';
        }
        isNewTeacher =!isNewTeacher;

    }

</script>

<style>
    .person{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>