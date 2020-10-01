<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorFieldDatepicker
                v-subheader.pa-0 Datepicker default component
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorFieldDatepicker"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Simple Datepicker
            v-col.pb-0(cols="12")
                tor-field-datepicker(
                    label="Date"
                    v-model="myDateSimple"
                )
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-datepicker(
                    |     label="Date"
                    | )
            v-col.pb-0(cols="12")
                v-divider
        v-row
            v-col.pb-0(cols="12")
                h1.title Active picker "year" on Datepicker
            v-col.pb-0(cols="12")
                tor-field-datepicker(
                    label="Date"
                    v-model="myDateActiveDatepicker"
                    active-picker="year"
                )
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-datepicker(
                    |     label="Date"
                    |     active-picker="year"
                    | )
            v-col.pb-0(cols="12")
                v-divider
        v-row
            v-col.pb-0(cols="12")
                h1.title Prepend an icon "check"
            v-col.pb-0(cols="12")
                tor-field-datepicker(
                    label="Date"
                    v-model="myDatePrependIcon"
                    prepend-icon="mdi-check"
                )
            v-col.pb-0(cols="12")
                tor-other-codeblock(language="pug")
                    | tor-field-datepicker(
                    |     label="Date"
                    |     prepend-icon="mdi-check"
                    | )
</template>

<script>
    export default {
        data: () => ({
            myDateSimple: null,
            myDateActiveDatepicker: null,
            myDatePrependIcon: null,
            wiki: {
                extends: {
                    href: 'https://vuetifyjs.com/fr-FR/components/date-pickers/',
                    text: 'v-date-picker'
                },
                props: {
                    prependIcon: {
                        type: String,
                        default: 'mdi-calendar-blank',
                        description: 'Set the datepicker\'s icon'
                    },
                    min: {
                        type: String,
                        default: '1970-01-01',
                        description: 'Min date'
                    },
                    max: {
                        type: String,
                        default: '2100-01-01',
                        description: 'Max date'
                    },
                    activePicker: {
                        type: String,
                        default: null,
                        description: 'On click on date field -> possibles values (YEAR, MONTH, DATE)'
                    },
                }
            }
        })
    }
</script>
