<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Checkbox
        v-col(cols="6")
            tor-field-checkbox(
                v-model="myCheck" :label="`On / Off - ${myCheck}`"
                :true-value="'Oui'" :false-value="'Non'"
            )
</template>

<script>
    export default {
        name: "MyCheck",
        data(){
            return {
                myCheck: 'Non',
            }
        }
    }
</script>

