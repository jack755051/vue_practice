<template>
    <Computed></Computed>
    <!-- <br/>
    <Person></Person>
    <br/>
    <Person02></Person02> -->
</template>

<script lang="ts">
    import Person from "./components/Person.vue"
    import Person02 from "./components/Person02..vue";
    import Computed from "./components/Computed.vue";

    export default {
        name:"App",
        components:{
            Person,
            Person02,
            Computed
        }
    }
</script>

<style>
    
</style>