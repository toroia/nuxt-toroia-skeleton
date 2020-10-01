<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldCheckbox
                v-subheader.pa-0 Checkbox default component
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldCheckbox"
                    :wiki="wiki"
                )

        v-row
            v-col.pb-0(cols="12")
                h1.title Simple Checkbox
            v-col.pb-0(cols="12")
                tor-field-checkbox(
                    v-model="myCheckSimple" :label="`On / Off - ${myCheckSimple}`"
                )
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-checkbox(
                    |     v-model="myCheckSimple" :label="`On / Off - ${myCheckSimple}`"
                    | )
            v-col.pb-0(cols="12")
                v-divider

        v-row
            v-col.pb-0(cols="12")
                h1.title Replace checkbox values
            v-col.pb-0(cols="12")
                tor-field-checkbox(
                    v-model="myCheckReplaceValues" :label="`On / Off - ${myCheckReplaceValues}`"
                    :true-value="'Oui'" :false-value="'Non'"
                )
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-checkbox(
                    |     v-model="myCheckReplaceValues" :label="`On / Off - ${myCheckReplaceValues}`"
                    |     :true-value="'Oui'" :false-value="'Non'"
                    | )
</template>

<script>
    export default {
        name: "MyCheck",
        data: () => ({
            myCheckSimple: false,
            myCheckReplaceValues: 'Non',
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/fr-FR/components/selection-controls/',
                    text: 'v-checkbox'
                },
                props: {
                    trueValue: {
                        type: String,
                        default: true,
                        description: 'Value replacement for "true" value'
                    },
                    falseValue: {
                        type: String,
                        default: false,
                        description: 'Value replacement for "false" value'
                    },
                }
            }
        })
    }
</script>

