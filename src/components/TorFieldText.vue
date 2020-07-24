<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-text-field(
        v-bind="$attrs" v-on="$listeners"
        :filled="filled"
    )
        slot(v-for="(_, name) in $slots" :name="name" :slot="name")
        template(v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData")
            slot(:name="name" v-bind="slotData")
</template>

<script>
    export default {
        name: 'TorFieldText',

        props: {
            filled: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
