<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldTextarea
                v-subheader.pa-0 Composant de message textarea
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldTextarea"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple textarea
            v-col.pb-0(cols="12")
                tor-field-textarea(
                    label="Un premier test"
                    v-model="example1"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Code
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-textarea(
                    |     label="Un premier test"
                    | )
</template>

<script>
    export default {
        name: 'FieldsTextareaPage',

        data: () => ({
            example1: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/textarea/',
                    text: 'v-textarea'
                },
                props: {
                    filled: {
                        type: Boolean,
                        default: true,
                        description: "Rempli le background du composant"
                    },
                    rows: {
                        type: Number,
                        default: 3,
                        description: "Nombre de lignes dans le textarea par défaut"
                    }
                }
            }
        })
    }
</script>
