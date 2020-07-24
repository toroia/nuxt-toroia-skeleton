<template lang="pug">
    v-card
        v-card-text
            span tp
</template>

<script>
    export default {
        name: 'TorCommentRow',

        props: {

        },

        inject: {
            comments: {
                default: null
            }
        }
    }
</script>
