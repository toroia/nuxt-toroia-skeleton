<template lang="pug">
    v-row
        v-col(cols="12")
            tor-wiki-api(:jsdoc="jsdoc" :items="['TorFieldTextarea']")
    //v-row
        v-col(cols="12")
            h1.title
                span Textarea&nbsp;
                small
                    a(href="https://vuetifyjs.com/en/components/textarea/#textareas" target="_blank") (source)
        v-col(cols="12")
            tor-field-textarea(
                label="Un premier test"
            )
</template>

<script>
    import jsdoc from "~/assets/jsdoc.json"

    export default {
        name: 'FieldsTextareaPage',

        data: () => ({
            jsdoc: jsdoc.filter(el => el._isVueDoc)
        })
    }
</script>
