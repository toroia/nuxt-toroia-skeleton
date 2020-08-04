<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Text
        v-col(cols="12")
            tor-field-text(
                label="Un premier test"
                v-model="example1"
            )
</template>

<script>
    export default {
        data: () => ({
            example1: null
        })
    }
</script>
