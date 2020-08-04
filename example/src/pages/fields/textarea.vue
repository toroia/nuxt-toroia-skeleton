<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Textarea
            v-col(cols="12")
                tor-wiki-api(
                    component="TorFieldTextarea"
                    :wiki="wiki"
                )
        v-divider
        v-row
            v-col(cols="12")
                h1.title Textarea
            v-col(cols="12")
                tor-field-textarea(
                    label="Un premier test"
                )
</template>

<script>
    export default {
        name: 'FieldsTextareaPage',

        data: () => ({
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/textarea/',
                    text: 'v-textarea'
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
