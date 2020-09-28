'use strict'

// noinspection NpmUsedModulesInstalled
import Vue from "vue"

import TorFieldText from "./components/TorFieldText.vue"
import TorFieldTextarea from "./components/TorFieldTextarea.vue"
import TorFieldSelect from "./components/TorFieldSelect.vue"
import TorFieldAutocomplete from "./components/TorFieldAutocomplete.vue"
import TorFieldFileUpload from "./components/TorFieldFileUpload.vue"
import TorFieldDatepicker from "./components/TorFieldDatepicker.vue"
import TorFieldTimepicker from "./components/TorFieldTimepicker.vue"
import TorFieldCheckbox from "./components/TorFieldCheckbox.vue"
import TorFieldRadios from "./components/TorFieldRadios.vue"
import TorFieldSwitch from "./components/TorFieldSwitch.vue"
import TorFieldColorpicker from "./components/TorFieldColorpicker.vue"

import TorCommentNew from "./components/TorCommentNew.vue"
import TorCommentList from "./components/TorCommentList.vue"
import TorCommentRow from "./components/TorCommentRow.vue"
import TorArticleRow from "./components/TorArticleRow.vue"

import TorWikiApi from "./components/TorWikiApi.vue"
import TorCodeblock from "./components/TorCodeblock.vue"
import Editor from "./components/Editor.vue"

const Components = {
    TorFieldText,
    TorFieldTextarea,
    TorFieldSelect,
    TorFieldAutocomplete,
    TorFieldFileUpload,
    TorFieldDatepicker,
    TorFieldTimepicker,
    TorFieldCheckbox,
    TorFieldRadios,
    TorFieldSwitch,
    TorFieldColorpicker,

    TorCommentNew,
    TorCommentList,
    TorCommentRow,
    TorArticleRow,

    TorWikiApi,
    TorCodeblock,
    Editor,
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
