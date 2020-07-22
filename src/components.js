'use strict'

// noinspection NpmUsedModulesInstalled
import Vue from "vue"

// import TorFormText from "./components/TorFormText.vue"

const Components = {
    // TorFormText
}

export default function () {
    Object.keys(Components).forEach(key => {
        const component = Components[key]
        const componentName = key
            .replace(/^\.\//, '')
            .replace(/\.\w+$/, '')
            .replace(/\//g, '')

        Vue.component(componentName, component.default || component)
    })
}
