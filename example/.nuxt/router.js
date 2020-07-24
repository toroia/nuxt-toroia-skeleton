import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b2b99df = () => interopDefault(import('..\\src\\pages\\comments\\commentlist.vue' /* webpackChunkName: "pages/comments/commentlist" */))
const _1bb0fd6f = () => interopDefault(import('..\\src\\pages\\comments\\commentnew.vue' /* webpackChunkName: "pages/comments/commentnew" */))
const _005a60a9 = () => interopDefault(import('..\\src\\pages\\comments\\commentrow.vue' /* webpackChunkName: "pages/comments/commentrow" */))
const _4890ed80 = () => interopDefault(import('..\\src\\pages\\fields\\text.vue' /* webpackChunkName: "pages/fields/text" */))
const _7924b74d = () => interopDefault(import('..\\src\\pages\\fields\\textarea.vue' /* webpackChunkName: "pages/fields/textarea" */))
const _2ac5b0b0 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/comments/commentlist",
    component: _5b2b99df,
    name: "comments-commentlist"
  }, {
    path: "/comments/commentnew",
    component: _1bb0fd6f,
    name: "comments-commentnew"
  }, {
    path: "/comments/commentrow",
    component: _005a60a9,
    name: "comments-commentrow"
  }, {
    path: "/fields/text",
    component: _4890ed80,
    name: "fields-text"
  }, {
    path: "/fields/textarea",
    component: _7924b74d,
    name: "fields-textarea"
  }, {
    path: "/",
    component: _2ac5b0b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
