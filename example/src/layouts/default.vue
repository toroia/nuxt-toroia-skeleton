<template lang="pug">
    v-app
        v-app-bar(fixed app flat dense color="primary")
            v-toolbar-title.d-none.d-sm-flex Example
        v-main
            v-container
                nuxt
        v-footer.d-none.d-md-flex(fixed app)
            span &copy; {{ new Date().getFullYear() }}
</template>

<script>
    export default {
        name: 'DefaultLayout'
    }
</script>
