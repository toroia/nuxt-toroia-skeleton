<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Switch
        v-col(cols="6")
            tor-field-switch(
                v-model="mySwitch" :label="`On / Off - ${mySwitch}`"
                :true-value="'Oui'" :false-value="'Non'"
            )
</template>

<script>
    export default {
        name: "MySwitch",
        data(){
            return {
                mySwitch: 'Non',
            }
        }
    }
</script>

