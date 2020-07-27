<!--suppress CssUnusedSymbol, JSUnusedGlobalSymbols -->
<template lang="pug">
    v-card
        v-toolbar(:height="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '160px' : '80px'" flat dark)
            v-row
                v-col(cols="12" md="4")
                    v-select(
                        filled hide-details :menu-props="{ bottom: true, offsetY: true }"
                        prepend-inner-icon="mdi-view-dashboard" dark v-model="component"
                        label="Liste des composant(s)" :items="getAvailableItems" single-line
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
                    template(v-for="(prop, index) in currentProps")
                        div.layout.pa-2.wrap(:style="{overflow: 'hidden'}")
                            div.flex.xs6.md3
                                div.text--capitalize.overline.text--secondary.text--darken-3 Name
                                strong.red--text.text--darken-2(v-html="prop.name")
                            div.flex.xs6.md2.text-xs-right
                                div.text--capitalize.overline.text--secondary.text--darken-3 Type
                                span(v-html="prop.type ? prop.type.names.join(', ') : '-'")
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
    const moduleOfSearchRegex = /:([a-zA-Z]+)./

    export default {
        name: 'TorWikiApi',
        props: {
            items: {
                type: Array,
                required: true
            },
            jsdoc: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                component: this.items[0] || null,
                filter: null
            }
        },

        computed: {
            getItems() {
                return this.jsdoc.filter(el => {
                    let matches = moduleOfSearchRegex.exec(el.memberof)

                    return matches.length > 0 && matches[1] === this.getCurrentItem
                    // this.items.includes(el.name)
                })
            },
            getAvailableItems() {
                let items = []

                this.jsdoc.forEach(el => {
                    let matches = moduleOfSearchRegex.exec(el.memberof)

                    if (matches.length > 0
                        && matches[1] === this.getCurrentItem
                        && !items.includes(matches[1])) {
                        items.push(matches[1])
                    }
                })

                return items
            },
            getCurrentItem() {
                if (this.jsdoc && this.jsdoc.length > 0 && this.jsdoc[0].memberof) {
                    let matches = moduleOfSearchRegex.exec(this.jsdoc[0].memberof)

                    if (matches.length > 0) {
                        return matches[1]
                    }
                }

                return null
            },
            currentProps() {
                // if (this.getCurrentItem) {
                //     return this.getCurrentItem._vueProps
                // }
                return []
            },
            currentSlots() {
                return []
            }
        },

        methods: {}
    }
</script>

<style>
    .v-tabs.no-transition .v-window__container .v-window-item {
        transition: none;
    }
</style>
