'use strict'

import fr from "vuetify/lib/locale/fr"

/**
 * Export all skeleton modules in object
 */
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
                'Content-Type': 'application/json',
            },
        },
    },
    moment: {
        name: '@nuxtjs/moment',
        options: {
            defaultLocale: 'fr',
            locales: ['fr'],
            defaultTimezone: 'Europe/Paris',
        },
    },
    vuetify: {
        name: '@nuxtjs/vuetify',
        options: {
            lang: {
                locales: {
                    fr,
                },
                current: 'fr',
            },
        },
    },
    webfontloader: 'nuxt-webfontloader',
}
