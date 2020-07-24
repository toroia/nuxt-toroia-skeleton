<template lang="pug">
    v-row
        v-col(cols="12")
            tor-wiki-api(:components="components")
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
    import TorFieldTextarea from "../../../../src/components/TorFieldTextarea"

    export default {
        name: 'FieldsTextareaPage',

        data: () => ({
            components: {
                TorFieldTextarea
            }
        })
    }
</script>
