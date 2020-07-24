<template lang="pug">
    v-row
        v-col(cols="12")
            tor-comment-row(
                v-for="(row, key) in rows" :key="key"
            )
</template>

<script>
    export default {
        name: 'TorCommentList',

        props: {
            rows: {
                type: Array,
                default: () => ([])
            }
        },

        provide() {
            return {
                'comments': this
            }
        }
    }
</script>
