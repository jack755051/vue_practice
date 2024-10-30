<template>
    <div class="parents">
        <Son :dataList = personList ></Son>
    </div>
</template>

<script lang="ts">
import Son from "./Son.vue";

export default {
    name:"Parents",
    components: {
        Son,
    },
}

</script>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { type PersonInit } from '../Types/index';

    let personList = ref<Array<PersonInit>>([
        { id: idMaker(), name: nameMaker(), age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: nameMaker(), age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: nameMaker(), age: Number(getRandomNumber(2)) },
        { id: idMaker(), name: nameMaker(), age: Number(getRandomNumber(2)) },
    ])
    
    function idMaker():string{
        let engPart:string = getRandomLetter();
        let numberPart:string = getRandomNumber(9)

        return engPart + "-" +  numberPart;
    }

    function makeRandom():number{
        let randomAmount = Math.floor(Math.random() * 10);
        while (randomAmount === 0) {
            randomAmount = Math.floor(Math.random() * 10);
        };

        return randomAmount;
    }

    function nameMaker():string{
        let firstName:string ='';
        let lastName:string = '';
        const letterAmount = [0,0];

        // 產生字元數量
        letterAmount[0] = makeRandom();
        letterAmount[1] = makeRandom();
        
        //產生文字
        for(let i=0;i<letterAmount[0];i++){
            firstName += getRandomLetter();
        }

        for(let i=0;i<letterAmount[1];i++){
            lastName += getRandomLetter();
        }

        // 將 firstName 首字母大寫
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

        return firstName + '-' + lastName.toLowerCase();
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

        // 檢查是否為全 0 的情況，如果是，重新生成
        if (/^0+$/.test(random)) {
            return getRandomNumber(times);
        }

        return random;
    }

</script>

<style>
    .parents{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>