<template>
    <div class="ts">
        <h2 
        v-for="(entry, index) in Object.entries(person)"
        :key="index"
        > {{ entry[0] }}: {{ entry[1] }} </h2>

        <h3
        v-for="(p, indexList) in personList"
        :key="indexList"
        >{{ p }}</h3>
    </div>
</template>

<script lang="ts">
export default {
    name:"TypescriptReview",
}
</script>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { type PersonInit } from '../Types/index';

    let newId = idMaker();

    let person = ref<PersonInit>({
        id: newId,
        name: "John Doe",
        age: 30,
    })

    let personList = ref<Array<PersonInit>>([
        { id: idMaker(), name: "Alice Johnson", age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: "Bob Smith", age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: "Charlie Wilson", age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: "David Johnson", age: Number(getRandomNumber(2)) },
    ])

    function idMaker():string{
        let engPart:string = getRandomLetter();
        let numberPart:string = getRandomNumber(7)

        return engPart + "-" +  numberPart;
    }

    function getRandomLetter(){
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index =  Math.floor(Math.random() * letters.length);
        return letters[index];
    }

    function getRandomNumber(times:number){
        let random = '';
        // const initialValue = 0;

        for(let i = 0;i <times;i++){
            random += Math.floor(Math.random() * 10);
        }

        // 如果開頭為0
        // if(random.startsWith('0')){
        //     //拆分成陣列
        //     const a  = random
        //     .split('')
        //     .reduce((b, c) => b + Number(c), initialValue);

        //     if (a == 0){
        //         return getRandomNumber(times);
        //     }
        //     return random
        // }

        // 檢查是否為全 0 的情況，如果是，重新生成
        if (/^0+$/.test(random)) {
            return getRandomNumber(times);
        }

        return random;
    }
</script>

<style>
    .ts{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>