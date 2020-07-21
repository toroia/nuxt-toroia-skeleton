'use strict'

import modules from 'src/modules'

/**
 * Nuxt Module (Toroia Skeleton)
 *
 * @param {object} moduleOptions
 * @this {{
 *     options: *
 * }}
 * @function {addTemplate, addPlugin}
 */
export default function (moduleOptions) {
    const options = {
        ...this.options.toroiaSkeleton,
        ...moduleOptions
    }

    for (const key in modules) {
        /**
         * Module from modules export
         *
         * @type {object}
         */
        const module = modules[key]
        this.addModule([module.name, {
            ...module.options,
            ...options[key]
        })
    }
}