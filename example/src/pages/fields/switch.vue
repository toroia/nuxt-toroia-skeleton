<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldSwitch
                v-subheader.pa-0 Switch default component
            v-col.pb-0(cols="12")
                tor-wiki-api(
                    component="TorFieldSwitch"
                    :wiki="wiki"
                )

        v-row
            v-col.pb-0(cols="12")
                h1.title Simple Switch
            v-col.pb-0(cols="12")
                tor-field-switch(
                    v-model="mySwitchSimple" :label="`On / Off - ${mySwitchSimple}`"
                )
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-switch(
                    |     v-model="mySwitchSimple" :label="`On / Off - ${mySwitchSimple}`"
                    | )
            v-col.pb-0(cols="12")
                v-divider

        v-row
            v-col.pb-0(cols="12")
                h1.title Replace switch values
            v-col.pb-0(cols="12")
                tor-field-switch(
                    v-model="mySwitchReplaceValues" :label="`On / Off - ${mySwitchReplaceValues}`"
                    :true-value="'Oui'" :false-value="'Non'"
                )
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-switch(
                    |     v-model="mySwitchReplaceValues" :label="`On / Off - ${mySwitchReplaceValues}`"
                    |     :true-value="'Oui'" :false-value="'Non'"
                    | )

</template>

<script>
    export default {
        name: "MySwitch",
        data: () => ({
            mySwitchSimple: false,
            mySwitchReplaceValues: 'Non',
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/fr-FR/components/selection-controls/',
                    text: 'v-switch'
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

