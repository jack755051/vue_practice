<template>
    <WatchEffect></WatchEffect>
    <!-- <Watch_04></Watch_04> -->
    <!-- <Watch></Watch> -->
    <!-- <Computed></Computed> -->

    <!-- <br/>
    <Person></Person>
    <br/>
    <Person02></Person02> -->
</template>

<script lang="ts">
    import Person from "./components/Person.vue"
    import Person02 from "./components/Person02..vue";
    import Computed from "./components/Computed.vue";
    import Watch from "./components/Watch.vue";
    import Watch_04 from "./components/Watch_04.vue";
    import WatchEffect from "./components/WatchEffect.vue";

    export default {
        name:"App",
        components:{
            Person,
            Person02,
            Computed,
            Watch,
            Watch_04,
            WatchEffect
        }
    }
</script>

<style>
    
</style>