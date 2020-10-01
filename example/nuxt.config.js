'use strict'

import webpack from 'webpack'
import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    srcDir: 'src/',
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    telemetry: false,
    components: true,
    modules: [
        '../main'
    ],
    proxy: {
        '/api/': {
            target: '127.0.0.1',
            xfwd: true,
            ws: false
        }
    },
    links: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Iconfonts for Vuetify. You need to leave only which one you use
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' }
    ],
    vuetify: {
        treeShake: true,
        preset: "vue-cli-plugin-vuetify-preset-rally/preset",
        theme: {
            themes: {
                dark: {
                    primary: colors.lightBlue.base,
                    secondary: colors.teal.base,
                    tertiary: colors.teal.lighten1,
                    accent: colors.cyan.base,
                    error: colors.red.base,
                    warning: colors.orange.base,
                    info: colors.blue.base,
                    success: colors.green.base
                }
            }
        }
    },
    build: {
        transpile: ["vue-cli-plugin-vuetify-preset-rally", "@nuxtjs/moment"],
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash'
            })
        ]
    }
}
