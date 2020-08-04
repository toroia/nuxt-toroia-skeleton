<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldText
            v-col.pb-0(cols="12")
                tor-wiki-api(
                    component="TorFieldText"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple text field
            v-col.pb-0(cols="12")
                tor-field-text(
                    label="Un premier texte"
                    v-model="example1"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Code
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-text(
                    |     label="Un premier texte"
                    | )
</template>

<script>
    export default {
        name: 'FieldsTextPage',

        data: () => ({
            example1: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/text-fields/',
                    text: 'v-text-field'
                },
                props: {
                    filled: {
                        type: 'Boolean',
                        default: true,
                        description: "Rempli le background du composant"
                    }
                }
            }
        })
    }
</script>
