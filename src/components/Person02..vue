<template >
    <div class="person">
        <h2>姓名:{{ person.name }}</h2>
        <h2>年齡:{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年齡</button>
    </div>
</template>

<script lang="ts">
export default {
    name:'Person_02'
}
</script>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
    let isTrue = false;

    let person =reactive({
        name:'張三',
        age: 25,
    })

    let {name, age} = toRefs(person)

    function changeName(){
        person.name +='~'
        console.warn('解構',name.value);
        console.warn('非解構',person.name);
    }

    function changeAge(){}

</script>

<style >
    .person{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>