'use strict'

// noinspection NpmUsedModulesInstalled
import Vue from "vue"

import TorFieldText from "./components/TorFieldText.vue"
import TorFieldTextarea from "./components/TorFieldTextarea.vue"
import TorFieldFileUpload from "./components/TorFieldFileUpload.vue"
import TorFieldCheckbox from "./components/TorFieldCheckbox.vue"
import TorFieldSwitch from "./components/TorFieldSwitch.vue"

import TorCommentNew from "./components/TorCommentNew.vue"
import TorCommentList from "./components/TorCommentList.vue"
import TorCommentRow from "./components/TorCommentRow.vue"

import TorWikiApi from "./components/TorWikiApi.vue"

const Components = {
    TorFieldText,
    TorFieldTextarea,
    TorFieldFileUpload,
    TorFieldCheckbox,
    TorFieldSwitch,

    TorCommentNew,
    TorCommentList,
    TorCommentRow,

    TorWikiApi
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
