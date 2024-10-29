<template>
    <div class="watch">
        <h2>情況一，監視[ref]定義的[基本類型]數據</h2>
        <h2>當前求和為：{{ sum }}</h2>
        <button @click="changeSum">點我sum+1</button>
    </div>
    <br/>
    <div class="watch">
        <h2>情況二，監視[ref]定義的[對象類型]數據</h2>        
        <h2>姓名：{{ person.name }}</h2>
        <h2>年齡：{{ person.age }}</h2>
        <button 
        v-for="(btn, index) in watch_02_btn"
        :key="index"
        @click="changePerson(btn.en)"
        >
        更改{{ btn.ch }}
        </button>
    </div>
    <br/>
    <div class="watch">
        <h2>情況三，監視[reactive]定義的[對象類型]數據，且默認開啟深度監視</h2>        
        <h2>姓名：{{ person_watch_03.name }}</h2>
        <h2>年齡：{{ person_watch_03.age }}</h2>
        <button @click="changeName_watch_03">更改姓名</button>
        <button @click="changeAge_watch_03">更改年齡</button>
        <button @click="change_watch_03">更改全部</button>
    </div>
</template>

<script lang="ts">
export default {
    name:"Watch_01",
}
</script>

<script lang="ts" setup>
    import { ref ,reactive, watch } from 'vue';

    let watch_02_btn:{ch:string,en:string}[] = [
        {ch:'姓名',en:'name'},
        {ch:'年齡',en:'age'},
    ];
    let watch_02_bool = false

    // 情況一，監視[ref]定義的[基本類型]數據
    let sum = ref(0);

    function changeSum(){
        sum.value += 1;
    }
    // 監視sum的變化
    // const stopWatch = watch(sum,(newVal,oldValue)=>{
    //     console.warn('sum發生變化了',newVal,oldValue);
    //     if(newVal >= 9){
    //         stopWatch();
    //     }
    // })

    // 情況二，監視[ref]定義的[對象類型]數據

    let person = ref({
        name:'張三',
        age: 25
    });

    // 暫存初始值
    let previousName = person.value.name;

    // watch(person,(newValue,oldValue)=>{
    //     console.warn('person發生變化了',newValue.name,oldValue.name);
    // },{ deep: true })

    function changePerson(type: string){
        //先改變布爾值
        watch_02_bool = !watch_02_bool;

        if(type === 'name'){
            console.warn('更改_name',watch_02_bool);
            person.value.name = watch_02_bool ? '李四' : previousName;
        }else if(type === 'age'){
            person.value.age +=1;
        }
    }

    // 情況三，監視[reactive]定義的[對象類型]數據，且默認開啟深度監視

    let person_watch_03 = reactive({
        name:'王五',
        age: 30
    });

    function changeName_watch_03(){
        person_watch_03.name += '~';
    }

    function changeAge_watch_03(){
        person_watch_03.age += 1;
    }

    function change_watch_03(){
        Object.assign(person_watch_03,{
            name:'李六',
            age: 42
        })
    }

    watch(person_watch_03,(newValue,oldValue)=>{
        console.warn('person_watch_03發生變化了');
        console.warn('新值',newValue,oldValue);
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