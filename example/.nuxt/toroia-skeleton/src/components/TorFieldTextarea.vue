<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-textarea(
        v-bind="$attrs" v-on="$listeners"
        :filled="filled" :rows="rows"
    )
        slot(v-for="(_, name) in $slots" :name="name" :slot="name")
        template(v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData")
            slot(:name="name" v-bind="slotData")
</template>

<script>
    export default {
        name: 'TorFieldTextarea',

        props: {
            /**
             * @vue-prop {Boolean} filled - Initial counter's valueaaaaqqdddssddddd
             */
            filled: {
                type: Boolean,
                description: "Applique un style de saisie rempli",
                default: true
            },
            /**
             * @vue-prop {Number} rows - Initial counter's value
             */
            rows: {
                type: Number,
                default: 3
            }
        }
    }
</script>
