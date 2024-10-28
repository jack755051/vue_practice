<template>
    <Person></Person>
    <br/>
    <Person02></Person02>
</template>

<script lang="ts">
    import Person from "./components/Person.vue"
import Person02 from "./components/Person02..vue";

    export default {
        name:"App",
        components:{Person,Person02}
    }
</script>

<style>
    
</style>