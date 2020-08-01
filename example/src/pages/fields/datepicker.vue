<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Datepicker
        v-col(cols="12")
            tor-field-datepicker(
                label="Date de début"
                v-model="myDate"
            )
            tor-field-datepicker(
                label="Date de fin"
                v-model="myDate2"
            )
            tor-field-datepicker(
                label="Date de naissance"
                v-model="myDate3"
                active-picker="year"
            )
</template>

<script>
    export default {
        data() {
            return {
                myDate: null,
                myDate2: null,
                myDate3: null
            }
        }
    }
</script>
