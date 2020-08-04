<!--suppress JSUnusedGlobalSymbols -->
<template lang="pug">
    client-only
        vue-code-highlight.tor-codeblock(:language="language")
            slot
</template>

<script>
    import 'vue-code-highlight'
    import 'prism-es6/components/prism-markup-templating'
    import 'vue-code-highlight/themes/prism-okaidia.css'
    import { component as VueCodeHighlight } from 'vue-code-highlight'

    export default {
        name: 'TorCodeblock',
        props: {
            language: {
                type: String,
                default: 'javascript'
            }
        },
        components: {
            VueCodeHighlight
        },
        mounted() {
            require('prism-es6/components/prism-' + this.language)
        }
    }
</script>

<style>
    .tor-codeblock code {
        background-color: initial;
        padding: initial;
    }
</style>
