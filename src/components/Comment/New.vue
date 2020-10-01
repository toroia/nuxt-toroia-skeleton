<template lang="pug">
    tor-field-textarea(
        v-bind="textareaProps"
        :placeholder="placeholder"
    )
</template>

<script>
    export default {
        name: 'TorCommentNew',

        props: {
            placeholder: {
                type: String,
                default: null
            },
            textareaProps: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>
