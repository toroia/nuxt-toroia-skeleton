<!--suppress JSUnusedLocalSymbols -->
<template lang="pug">
    v-file-input(v-bind="$attrs" :multiple="multiple")
</template>

<script>
    export default {
        name: "TorFieldFileUpload",
        props: {
            /**
             * @vue-prop {Boolean} multiple - Set multiple
             */
            multiple: {
                type: Boolean
            },

            /**
             * @vue-prop {Boolean} filled - Initial counter's value
             */
            filled: {
                type: Boolean,
                default: true
            }

        }
    }
</script>
