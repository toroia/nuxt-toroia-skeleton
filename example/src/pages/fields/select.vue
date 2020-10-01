<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldSelect
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldSelect"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Empty select
            v-col.pb-0(cols="12")
                tor-field-select(
                    label="Une liste probablement vide"
                    v-model="example1"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple select
            v-col.pb-0(cols="12")
                tor-field-select(
                    label="Une liste simple et locale"
                    v-model="example2" :items="['a', 'b', 'c']"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Code
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-select(
                    |     label="Une simple liste"
                    | )
</template>

<script>
    export default {
        name: 'FieldsSelectPage',

        data: () => ({
            example1: null,
            example2: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/selects/',
                    text: 'v-select'
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
