<!--suppress JSUnusedLocalSymbols -->
<script>
    import {VFileInput} from 'vuetify/lib'
    export default {
        name: "TorFieldFileUpload",
        extends: VFileInput,
        props: {
            /**
             * @vue-prop {Boolean} filled - Initial counter's value
             */
            filled: {
                type: Boolean,
                default: true
            },

            /**
             * @vue-prop {Boolean} chips - Display a chips around the filename
             */
            chips: {
                type: Boolean,
                default: true
            },

            /**
             * @vue-prop {Boolean} smallchips - Set the chips width to small
             */
            smallChips: {
                type: Boolean,
                default: true
            },

            /**
             * @vue-prop {Boolean} showsize - Define selected files weight
             */
            showSize: {
                type: Boolean,
                default: true
            },

            /**
             * @vue-prop {Boolean} counter - Count selected files
             */
            counter: {
                type: Boolean,
                default: true
            },
        }
    }
</script>
