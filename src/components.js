'use strict'

// noinspection NpmUsedModulesInstalled
import Vue from "vue"

// noinspection JSUnresolvedFunction
const components = require.context('./components/', true, /[A-Z]\w+\.vue$/)

/**
 * Instanciate components plugin
 */
export default () => {
    components.keys().forEach(key => {
        const component = components(key)
        const componentName = 'Tor' + key
            .replace(/^\.\//, '')
            .replace(/\.\w+$/, '')
            .replace(/\//g, '')

        Vue.component(componentName, component.default || component)
    })
}
