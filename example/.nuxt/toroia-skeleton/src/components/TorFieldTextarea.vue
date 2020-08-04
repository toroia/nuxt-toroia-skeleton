<script>
    import {VTextarea} from 'vuetify/lib'

    export default {
        name: 'TorFieldTextarea',
        extends: VTextarea,
        props: {
            filled: {
                type: Boolean,
                description: "Applique un style de saisie rempli",
                default: true
            },
            rows: {
                type: Number,
                default: 3
            }
        }
    }
</script>
