'use strict'

// noinspection NpmUsedModulesInstalled
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
        "nuxt-toroia-skeleton"
        // '../main'
    ],
    proxy: {
        '/api/': {
            target: '127.0.0.1',
            xfwd: true,
            ws: false
        }
    },
    vuetify: {
        treeShake: true,
        themes: {
            light: {
                primary: colors.lightGreen.base,
                secondary: colors.teal.base,
                accent: colors.cyan.base,
                error: colors.red.base,
                warning: colors.orange.base,
                info: colors.blue.base,
                success: colors.green.base
            },
            dark: {
                primary: colors.lightGreen.base,
                secondary: colors.teal.base,
                accent: colors.cyan.base,
                error: colors.red.base,
                warning: colors.orange.base,
                info: colors.blue.base,
                success: colors.green.base
            }
        }
    },
    build: {
        extend(config, ctx) {
        }
    }
}
