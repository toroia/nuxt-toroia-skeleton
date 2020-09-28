'use strict'

import Vue from 'vue'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'

export default function ({app}) {
    Vue.use(TiptapVuetifyPlugin, {
        vuetify: app.vuetify,
        iconsGroup: 'mdi',
    })
}
