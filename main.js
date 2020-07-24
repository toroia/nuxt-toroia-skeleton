'use strict'

import {resolve, join} from "path"

// import modules from "./src/modules"

/**
 * Nuxt Module (Toroia Skeleton)
 *
 * @param {object} moduleOptions
 * @this {object}
 * @function {addTemplate, addPlugin}
 */
export default function (moduleOptions) {
    /**
     * Make global options object
     *
     * @type {{toroiaSkeleton: object}}
     */
    const options = {
        ...this.options.toroiaSkeleton,
        ...moduleOptions
    }

    // for (const key in modules) {
    //     const module = modules[key]
    //
    //     if (typeof module === 'object') {
    //         module.options = typeof module.options === 'object'
    //             ? module.options
    //             : {}
    //
    //         this.addModule(module.name, {
    //             ...module.options,
    //             ...options[key]
    //         })
    //     } else {
    //         this.addModule(module, {
    //             ...options[key]
    //         })
    //     }
    // }

    this.addModule(['@nuxtjs/axios', {
        proxy: true,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        ...options.axios
    }])

    this.addModule(['@nuxtjs/moment', {
        defaultLocale: 'fr',
        locales: ['fr'],
        defaultTimezone: 'Europe/Paris',
        ...options.moment
    }])

    this.addModule(['@nuxt/components', {...options.components}])
    this.addModule(['@nuxtjs/proxy', {...options.proxy}])
    this.addModule(['@nuxtjs/auth', {...options.auth}])
    this.addModule(['@nuxtjs/vuetify', {...options.vuetify}])
    this.addModule(['nuxt-webfontloader', {...options.webfontloader}])

    this.addPlugin({
        src: resolve(__dirname, 'src/components.js'),
        fileName: join('toroia-skeleton', 'src/components.js'),
        options
    })

    // this.addTemplate({
    //     src: resolve(__dirname, 'src/modules.js'),
    //     fileName: join('toroia-skeleton', 'src/modules.js'),
    //     options
    // })

    const {readdirSync} = require('fs')
    const foldersToSync = ['src/components']

    for (const pathString of foldersToSync) {
        const path = resolve(__dirname, pathString)
        for (const file of readdirSync(path)) {
            this.addTemplate({
                src: resolve(path, file),
                fileName: join('toroia-skeleton', pathString, file),
                options
            })
        }
    }

    // this.options.srcDir = this.options.srcDir || 'src/'

    this.options.telemetry = this.options.telemetry || false

    this.options.components = this.options.components || true

    this.options.head.htmlAttrs = this.options.head.htmlAttrs || {}
    this.options.head.htmlAttrs.lang = this.options.head.htmlAttrs.lang || 'fr'

    this.options.head.meta = this.options.head.meta || []
    this.options.head.meta.push({charset: 'utf-8'})
    this.options.head.meta.push({
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
    })

    this.options.head.link = this.options.head.link || []
    this.options.head.link.push({
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
    })
}

export const meta = require('./package.json')
