<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldTimepicker
                v-subheader.pa-0 Timepicker default component
            v-col.pb-0(cols="12")
                tor-wiki-api(
                    component="TorFieldTimepicker"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple Timepicker
            v-col.pb-0(cols="12")
                tor-field-timepicker(
                    label="Temps passés"
                    v-model="myTimeSimple"
                )
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-timepicker(
                    |     label="Temps passés"
                    | )
            v-col.pb-0(cols="12")
                v-divider

        v-row
            v-col.pb-0(cols="12")
                h1.title Prepend an icon "check"
            v-col.pb-0(cols="12")
                tor-field-timepicker(
                    label="Temps passés"
                    v-model="myTimePrependIcon"
                    prepend-icon="mdi-check"
                )
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-timepicker(
                    |     label="Temps passés"
                    |     prepend-icon="mdi-check"
                    | )
</template>

<script>
    export default {
        data: () => ({
            myTimeSimple: null,
            myTimePrependIcon: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/en/components/time-pickers/',
                    text: 'v-time-picker'
                },
                props: {
                    prependIcon: {
                        type: String,
                        default: 'mdi-clock-time-eight-outline',
                        description: 'Set the timepicker\'s input icon'
                    },
                }
            }
        })
    }
</script>
