<!--suppress CssUnusedSymbol, JSUnusedGlobalSymbols -->
<template lang="pug">
    v-card
        v-toolbar(:height="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '160px' : '80px'" flat dark)
            v-row
                v-col(cols="12" md="4")
                    v-select(
                        filled hide-details :menu-props="{ bottom: true, offsetY: true }"
                        prepend-inner-icon="mdi-view-dashboard" dark v-model="component"
                        label="Liste des composant(s)" :items="getItems" single-line
                    )
                v-col(cols="12" offset-md="4" md="4")
                    tor-field-text(
                        filled hide-details v-model="filter"
                        append-icon="mdi-magnify" clearable
                        placeholder="Rechercher..."
                    )
        v-tabs.no-transition(vertical)
            v-tab PROPS
            v-tab FROM
            v-tab SLOTS
            v-tab-item
                v-card(flat :style="{overflowY: 'auto', maxHeight: '600px'}")
                    template(v-if="Object.keys(currentProps).length === 0")
                        div.text-center.pa-4
                            v-icon(large) mdi-alert
                            h3 Aucun enregistrement correspondant n'a été trouvé
                    template(v-for="(prop, name, index) in currentProps")
                        div.layout.pa-2.wrap(:style="{overflow: 'hidden'}")
                            div.flex.xs6.md3
                                div.text--capitalize.overline.text--secondary.text--darken-3 Name
                                strong.red--text.text--darken-2(v-html="name")
                            div.flex.xs6.md2.text-xs-right
                                div.text--capitalize.overline.text--secondary.text--darken-3 Type
                                span(v-html="prop.type ? prop.type.name : '-'")
                            div.flex.xs12.md7.text-md-right
                                div.text--capitalize.overline.text--secondary.text--darken-3 Default
                                span(v-html="prop.default || 'undefined'")
                            div.flex.xs12.mt-2(v-if="prop.description")
                                div.text--capitalize.overline.text--secondary.text--darken-3 Description
                                span(v-html="prop.description")
                        v-divider(v-if="index !== Object.keys(currentProps).length - 1")
                v-card(flat :style="{overflowY: 'auto', maxHeight: '600px'}")
                    template(v-if="Object.keys(currentProps).length === 0")
</template>

<script>
    export default {
        name: 'TorWikiApi',
        props: {
            components: {
                type: Object,
                default: () => ({})
            }
        },

        data() {
            return {
                filter: null,
                component: null
            }
        },

        computed: {
            getItems() {
                return Object.keys(this.components)
            },
            currentProps() {
                let props = {}
                const item = this.components[this.component]

                if (item) {
                    for (const prop in item.props) {
                        if (item.props.hasOwnProperty(prop)) {
                            let re = new RegExp(`${this.filter}`, 'gi')

                            if (!this.filter || re.test(prop)) {
                                props[prop] = item.props[prop]
                            }
                        }
                    }
                }

                return props
            },
            currentSlots() {
                let slots = {}
                const item = this.components[this.component]

                if (item) {
                    for (const slot in item.$slots) {
                        if (item.$slots.hasOwnProperty(slot)) {
                            let re = new RegExp(`${this.filter}`, 'gi')

                            if (!this.filter || re.test(slot)) {
                                slots[slot] = item.$slots[slot]
                            }
                        }
                    }
                }

                return slots
            }
        },

        methods: {
            getProps(component) {
                return component.props
            }
        },

        mounted() {
            this.component = this.getItems[0]
        }
    }
</script>

<style>
    .v-tabs.no-transition .v-window__container .v-window-item {
        transition: none;
    }
</style>
