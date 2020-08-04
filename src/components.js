'use strict'

// noinspection NpmUsedModulesInstalled
import Vue from "vue"

import TorFieldText from "./components/TorFieldText.vue"
import TorFieldTextarea from "./components/TorFieldTextarea.vue"
import TorFieldSelect from "./components/TorFieldSelect.vue"
import TorFieldAutocomplete from "./components/TorFieldAutocomplete.vue"

import TorCommentNew from "./components/TorCommentNew.vue"
import TorCommentList from "./components/TorCommentList.vue"
import TorCommentRow from "./components/TorCommentRow.vue"

import TorWikiApi from "./components/TorWikiApi.vue"
import TorCodeblock from "./components/TorCodeblock.vue"

const Components = {
    TorFieldText,
    TorFieldTextarea,
    TorFieldSelect,
    TorFieldAutocomplete,

    TorCommentNew,
    TorCommentList,
    TorCommentRow,

    TorWikiApi,
    TorCodeblock,
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
