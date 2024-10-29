<template>
    <div class="watch_04">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年齡：{{ person.age }}</h2>
        <h2>車款：{{ Object.values(person.car) }}</h2>
        <button @click="changeName">改變姓名</button>
        <button @click="changeAge">改變年齡</button>
        <button @click="changeC1">改變第一輛車</button>
        <button @click="changeC2">改變第二輛車</button>
        <button @click="changeCar">改變車</button>
    </div>
</template>

<script lang="ts">
export default {
    name:"Watch_04",
}
</script>

<script lang="ts" setup>
// 監視，情況四：監視響應式對象中的某個屬性，且該屬性是[基本類型]，需要寫成函數式
import { reactive,watch } from 'vue';

    let person = reactive({
        name:'張三',
        age: 25,
        car:{
            c1:'BMW',
            c2:'Benz'
        }
    });

    function changeName(){
        person.name += '~';
    }
    function changeAge(){
        person.age += 1;
    }
    function changeC1(){
        person.car.c1 = 'Vlovo';
    }
    function changeC2(){
        person.car.c2 = 'VW';
    }
    function changeCar(){
        person.car = {
            c1:'Toyota',
            c2:'Ford'
        }
    }

    // watch(()=>{return person.name},(newValue,oldValue)=>{
    //     console.warn('person發生變化了',newValue,oldValue);
    // })

    // watch(person.car,(newValue,oldValue)=>{
    //     console.warn('person發生變化了',newValue,oldValue);
    // },{ deep: true })

    watch(()=>{return person.car},(newValue,oldValue)=>{
        console.warn('person發生變化了',newValue,oldValue);
    },{deep:true})
    
</script>  

<style>
    .watch_04{ 
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>