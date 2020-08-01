<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-menu(
            v-model="menu"
            :close-on-content-click='false' :return-value.sync="date"
            transition="scale-transition" min-width="290px" offset-y
        )
        template(v-slot:activator="{ on, attrs }")
            v-text-field.unstyled(
                type="date" :prepend-icon="prependIcon"
                v-bind="{...$attrs, ...attrs}" v-on="{...$listeners, ...on}"
                :min="min" :max="max"
            )
        v-date-picker(
            v-model="date"
            v-bind="bindDateProps"
            @input="$emit('input', $event)"
            :min="min" :max="max"
            ref="datePicker"
        )
</template>

<script>
    export default {
        name: 'TorFieldDatepicker',
        props: {
            /**
             * @property {String} prependIcon - Set the datepicker's icon
             */
            prependIcon: {
                type: String,
                default: 'mdi-calendar-blank'
            },

            /**
             * @property {String} min - Min date
             */
            min: {
                type: String,
                default: '1970-01-01'
            },

            /**
             * @property {String} max - Max date
             */
            max: {
                type: String,
                default: '2100-01-01'
            },

            /**
             * @property {String} activePicker - On click on date field -> possibles values (YEAR, MONTH, DATE)
             */
            activePicker: {
                type: String,
                default: null
            },
            dateProps: {
                type: Object,
                default() {
                    return {}
                },
            },
        },
        computed: {
            bindDateProps() {
                return {
                    ...{
                        noTitle: true
                    },
                    ...this.dateProps
                }
            }
        },
        data: () => ({
            date: null,
            menu: false
        }),
        watch: {
            value: {
                handler(date) {
                    this.date = date
                },
                immediate: true
            },
            menu(menu) {
                if (this.activePicker) {
                    menu && setTimeout(() => {
                        this.$refs.datePicker.activePicker = this.activePicker.toUpperCase()
                    })
                }
            }
        }
    }
</script>

<style>
    .unstyled input::-webkit-inner-spin-button,
    .unstyled input::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
</style>
