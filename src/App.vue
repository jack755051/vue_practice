<template>
    <div class="app">
        <Header></Header>
        <div class="btnBox">

            <router-link :to="{ path:'/' }" custom v-slot="{ navigate }">
                <button @click="navigate">首頁</button>
            </router-link>

            <router-link :to="{ path:'/about' }" custom v-slot="{ navigate }">
                <button @click="navigate">關於</button>
            </router-link>

            <router-link :to="{path:'/news'}" custom v-slot="{ navigate }">
                <button @click="navigate">新聞</button>
            </router-link>

        </div>

        <RouterView></RouterView>
    </div>
</template>

<script lang="ts">
    // import third party libraries
    import { RouterView } from "vue-router";
    
    // from my components
    import  Header  from "./components/Header.vue";
    
    export default {
        name:"App",
        components: {
            RouterView,
            Header
        }
    }

</script>

<style>
    .app{
        width: 100vw;
        height: 100vh;
        background-color: aquamarine;
        display: flex;
        flex-direction: column;
        align-items: center
    }

    .btnBox{
        width: inherit;
        margin: 40px 0 7.5vh 0 ;
        display: flex;
        justify-content: space-around;
    }
    .btnBox button{
        width: 15vw;
        height: 5vh;
        background-color: beige;
        border-radius: 7.5px;
        border: solid 1.5px rgb(106, 63, 199);
        font-size: 20px;
        font-weight: bold;
        box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);
    }
</style>