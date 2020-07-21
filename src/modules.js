'use strict'

module.exports = {
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
    }
}