<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Timepicker
        v-col(cols="12")
            tor-field-timepicker(
                label="Temps passés"
                v-model="myTime"
            )
</template>

<script>
    export default {
        data() {
            return {
                myTime: null
            }
        }
    }
</script>
