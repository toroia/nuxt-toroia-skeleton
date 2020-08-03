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
    TorFieldFileUpload,
    TorFieldDatepicker,
    TorFieldTimepicker,
    TorFieldCheckbox,
    TorFieldRadios,
    TorFieldSwitch,

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
