<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldAutocomplete
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldAutocomplete"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple autocomplete
            v-col.pb-0(cols="12")
                tor-field-autocomplete(
                    label="Recherche à la nimp" :api="{}"
                    v-model="example1"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Code
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-autocomplete(
                    |     label="Effectuer une recherche"
                    | )
</template>

<script>
    export default {
        name: 'FieldsSelectPage',

        data: () => ({
            example1: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/autocompletes/',
                    text: 'v-autocomplete'
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
