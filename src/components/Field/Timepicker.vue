<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-menu(
            v-model="menu"
            :close-on-content-click='false' :return-value.sync="time"
            transition="scale-transition" min-width="290px" offset-y
        )
        template(v-slot:activator="{ on, attrs }")
            v-text-field.unstyled(
                type="time" :prepend-icon="prependIcon" :value="value"
                v-bind="{...$attrs, ...attrs}" v-on="{...$listeners, ...on}"
            )
        v-time-picker(
            v-model="time"
            @input="$emit('input', $event)"
            full-width
            v-bind="bindTimeProps"
        )
</template>

<script>
    export default {
        name: 'TorFieldTimepicker',
        props: {
            /**
             * @property {String} prependIcon - Set the datepicker's icon
             */
            prependIcon: {
                type: String,
                default: 'mdi-clock-time-eight-outline'
            },

            /**
             * @property {String} value - Display the time in the component
             */
            value: {
                type: String,
                default: null
            },

            timeProps: {
                type: Object,
                default() {
                    return {}
                },
            },
        },
        computed: {
            bindTimeProps() {
                return {
                    ...{
                        format: '24hr',
                        color: 'primary'
                    },
                    ...this.timeProps
                }
            }
        },
        data: () => ({
            time: null,
            menu: false
        }),
        watch: {
            value: {
                handler(time) {
                    this.time = time
                },
                immediate: true
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
