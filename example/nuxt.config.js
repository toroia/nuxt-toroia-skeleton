'use strict'

import {exec} from 'child_process'

// noinspection NpmUsedModulesInstalled
import webpack from 'webpack'

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
        // "nuxt-toroia-skeleton"
        '../main'
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
        transpile: ["vue-cli-plugin-vuetify-preset-rally"],
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash'
            })
        ]
    },
    hooks: {
        build: {
            done() {
            }
        }
    }
}
