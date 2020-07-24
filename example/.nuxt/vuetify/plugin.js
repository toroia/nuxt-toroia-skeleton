import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

import options from './options'

Vue.use(Vuetify, {
})

export default (ctx) => {
  const vuetifyOptions = typeof options === 'function' ? options(ctx) : options

  vuetifyOptions.icons = vuetifyOptions.icons || {}
  vuetifyOptions.icons.iconfont = 'mdi'

  vuetifyOptions.preset = preset

  const vuetify = new Vuetify(vuetifyOptions)

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
