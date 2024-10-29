<template>
    <div class="computed">
        姓:<input type="text" v-model="firstName">
        <br/>
        名:<input type="text" v-model="lastName">
        <br/>
        全名：<span>{{fullName}}</span>
        <br/>
        <button @click="changeName">更換名字</button>
    </div>
</template>

<script lang="ts" >
export default {
    name:"Computed",
}
</script>

<script lang="ts" setup>
import { ref ,computed } from 'vue';
    let firstName = ref('');
    let lastName = ref('');
    let fullName = computed({
        get() {
            return firstName.value + '-' + lastName.value;
        },
        set(value) {
            const names = value.split('-');
            firstName.value = names[0] || '';
            lastName.value = names[1] || '';
            console.log('setter');
        }
    });

    function changeName(){
        fullName.value= 'Li-Si';
    }

</script>

<style >
    .computed{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>