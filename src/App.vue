<template>

    <Parents>
    </Parents>

    <!-- <TypescriptReview></TypescriptReview> -->

    <!-- ------ -->

    <!-- <TagRef ref="test"></TagRef>
    <br/>
    <button @click="testDefineExpose">測試組建暴露</button> -->

    <!-- ------ -->

    <!-- <WatchEffect></WatchEffect> -->
    <!-- <Watch_04></Watch_04> -->
    <!-- <Watch></Watch> -->
    <!-- <Computed></Computed> -->

    <!-- <br/>
    <Person></Person>
    <br/>
    <Person02></Person02> -->
</template>

<script lang="ts">
export default {
    name:"App",
    components:{
        Person,
        Person02,
        Computed,
        Watch,
        Watch_04,
        WatchEffect,
        TagRef,
        TypescriptReview,
        Parents,
        LifeCycle
    }
    }
</script>

<script lang="ts" setup>
    import Person from "./components/Person.vue"
    import Person02 from "./components/Person02..vue";
    import Computed from "./components/Computed.vue";
    import Watch from "./components/Watch.vue";
    import Watch_04 from "./components/Watch_04.vue";
    import WatchEffect from "./components/WatchEffect.vue";
    import TagRef from "./components/TagRef.vue";
    import TypescriptReview from "./components/Typescript.vue";
    import Parents from "./components/Parents.vue";
    import LifeCycle from "./components/LifeCycle.vue";


    import { ref } from "vue";

    let test = ref();

    function testDefineExpose() {
        console.log(test.value);
    }

</script>

<style>
    
</style>