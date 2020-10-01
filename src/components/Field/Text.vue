<script>
    import {VTextField} from 'vuetify/lib'

    export default {
        name: 'TorFieldText',
        extends: VTextField,
        props: {
            filled: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
