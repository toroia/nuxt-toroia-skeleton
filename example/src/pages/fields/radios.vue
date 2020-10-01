<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldRadio
                v-subheader.pa-0 Radio default component
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldRadio"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple Radio buttons list
            v-col.pb-0(cols="2")
                v-radio-group(v-model="radioModel" column)
                    tor-field-radios(
                        v-for="item in items" :key="item.text"
                        :label="item.text" :value="item.value"
                    )
                span(v-if="radioModel") La valeur sélectionnée est {{radioModel}}
                span(v-if="!radioModel") Pas de valeur sélectionnée
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | v-radio-group(v-model="radioModel" column)
                    |     tor-field-radios(
                    |         v-for="item in items" :key="item.text"
                    |         :label="item.text" :value="item.value"
                    |     )
                    | span(v-if="radioModel") La valeur sélectionnée est {{radioModel}}
                    | span(v-if="!radioModel") Pas de valeur sélectionnée
                    |
                    |
                    | items: [
                    |     {
                    |         text: "Radio Un",
                    |         value: 1
                    |     },
                    |     {
                    |         text: "Radio Deux",
                    |         value: 2
                    |     },
                    |     {
                    |         text: "Radio Trois",
                    |         value: 3
                    |     },
                    | ]
</template>

<script>
    export default {
        name: "MyRadio",
        data: () => ({
            items: [
                {
                    text: "Radio Un",
                    value: 1
                },
                {
                    text: "Radio Deux",
                    value: 2
                },
                {
                    text: "Radio Trois",
                    value: 3
                },
            ],
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/fr-FR/components/selection-controls/',
                    text: 'v-switch'
                }
            }
        }),
        props: {
            radioModel: null
        }
    }
</script>

