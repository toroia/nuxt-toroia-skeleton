<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title SamSandbox
        v-col(cols="12")
            client-only
                v-file-input(multiple show-size counter)
</template>

<script>
    export default {
        name: "SamSandbox",
        data(){
            return {
                test: []
            }
        }
    }
</script>
