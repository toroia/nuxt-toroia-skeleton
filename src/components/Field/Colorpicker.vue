<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-menu(
        v-model="menu"
        :close-on-content-click='false'
        transition="scale-transition" min-width="290px" offset-y
    )
        template(v-slot:activator="{ on, attrs }")
            v-text-field(
                type="text" v-bind="{...$attrs, ...attrs}"
                v-on="{...$listeners, ...on}" :value="(color) ? color.hex : null"
            )
        v-color-picker(
            :hide-canvas="hideCanvas" v-model="color"
            :hide-inputs="hideInputs" @input="emit"
            mode="hexa"
        )
</template>

<script>
    export default {
        name: 'TorFieldColorpicker',

        data: () => ({
            menu: null,
            color: null
        }),
        props: {
            /**
             * @property {Boolean} hideCanvas - Hide the canvas color selector
             */
            hideCanvas: {
                type: Boolean,
                default: true
            },

            /**
             * @property {Boolean} hideInputs - Hide the input color selector types
             */
            hideInputs: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            value: {
                handler(color) {
                    this.color = color
                },
                immediate: true
            }
        },
        methods: {
            emit(event) {
                this.$emit('input', event)
            }
        }
    }
</script>
