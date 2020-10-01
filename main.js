'use strict'

import {resolve, join} from "path"
import modules from "./src/modules"

// noinspection JSUnusedGlobalSymbols
/**
 * Nuxt Module (Toroia Skeleton)
 *
 * @param {object} moduleOptions
 * @this {object}
 */
export default function (moduleOptions) {
    /**
     * Make global options object
     *
     * @type {{toroiaSkeleton: object}}
     */
    const options = {
        ...this.options.toroiaSkeleton,
        ...this.options['toroia-skeleton'],
        ...moduleOptions
    }

    // noinspection JSUnresolvedFunction
    this.addTemplate({
        src: resolve(__dirname, 'src/modules.js'),
            fileName: join('toroia-skeleton', 'src/modules.js'),
            options,
    })

    for (const key in modules) {
        const module = modules[key]

        if (typeof module === 'object') {
            this.addModule(module.name, {
                ...module.options,
                ...options[key],
            })
        } else {
            this.addModule(module, {
                ...options[key],
            })
        }
    }

    const {readdirSync} = require('fs')
    const baseFolders = 'src/components'
    const foldersToSync = [
        'Lib',
        'Field',
        'Comment',
        'Article',
        'Other',
    ]

    for (const pathString of foldersToSync) {
        const path = resolve(__dirname, [baseFolders, pathString].join('/'))
        for (const file of readdirSync(path)) {
            // noinspection JSUnresolvedFunction
            this.addTemplate({
                src: resolve(path, file),
                fileName: join('toroia-skeleton', [baseFolders, pathString].join('/'), file),
                options
            })
        }
    }

    // noinspection JSUnresolvedFunction
    this.addPlugin({
        src: resolve(__dirname, 'src/components.js'),
        fileName: join('toroia-skeleton', 'src/components.js'),
        options,
    })

    // noinspection JSUnresolvedFunction
    this.addPlugin({
        src: resolve(__dirname, 'src/plugins.js'),
        fileName: join('toroia-skeleton', 'src/plugins.js'),
        mode: 'client',
        options
    })

    // this.options.srcDir = this.options.srcDir || 'src/'

    this.options.telemetry = this.options.telemetry || false

    this.options.watchers.webpack = this.options.watchers.webpack || {}
    this.options.watchers.webpack.poll = this.options.watchers.webpack.poll || 5000
    this.options.watchers.webpack.aggregateTimeout = this.options.watchers.webpack.aggregateTimeout || 700
    this.options.watchers.webpack.ignored = this.options.watchers.webpack.ignored || /node_modules/

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

    this.options.build.transpile = this.options.build.transpile || []
    this.options.build.transpile.push('vuetify/lib')
    this.options.build.transpile.push('tiptap-vuetify')
}

/**
 *
 *
 * @type {object}
 */
export const meta = require('./package.json')
