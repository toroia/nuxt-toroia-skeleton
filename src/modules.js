'use strict'

export default {
    components: '@nuxt/components',
    proxy: '@nuxtjs/proxy',
    auth: '@nuxtjs/auth',
    axios: {
        name: '@nuxtjs/axios',
        options: {
            proxy: true,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }
    },
    moment: {
        name: '@nuxtjs/moment',
        options: {
            defaultLocale: 'fr',
            locales: ['fr'],
            defaultTimezone: 'Europe/Paris'
        }
    },
    vuetify: '@nuxtjs/vuetify',
    webfontloader: 'nuxt-webfontloader'
}
