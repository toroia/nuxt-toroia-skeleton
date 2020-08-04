<!--suppress CssUnusedSymbol, JSUnusedGlobalSymbols, JSUnresolvedVariable -->
<template lang="pug">
    v-card
        v-toolbar.tor-wiki-bar(flat dark)
            v-row
                v-col(cols="12" md="4")
                    v-text-field(
                        filled hide-details prepend-inner-icon="mdi-view-dashboard"
                        dark :value="component" label="Composant" readonly single-line
                    )
                v-col(cols="12" offset-md="4" md="4")
                    tor-field-text(
                        filled hide-details v-model="filter"
                        append-icon="mdi-magnify" clearable
                        placeholder="Rechercher..."
                    )
        template(v-if="wiki.extends")
            v-toolbar(color="transparent")
                v-toolbar-title
                 span.text--capitalize.overline.pl-1.pr-4 Source
                 small
                    a(:href="wiki.extends.href" target="_blank" v-html="wiki.extends.text")
            v-divider
        v-tabs.no-transition(vertical)
            template(v-if="wiki.props")
                v-tab PROPS
                v-tab-item
                    v-card(flat :style="{overflowY: 'auto', maxHeight: '600px'}")
                        template(v-if="Object.keys(props).length === 0")
                            div.text-center.pa-4
                                v-icon(large) mdi-alert
                                h3 Aucun enregistrement correspondant n'a été trouvé
                        template(v-for="(prop, name, index) in props")
                            div.layout.pa-2.wrap(:style="{overflow: 'hidden'}" v-if="prop")
                                div.flex.xs6.md3
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Name
                                    strong.red--text.text--darken-2(v-html="name")
                                div.flex.xs6.md2.text-xs-right
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Type
                                    span(v-html="prop.type || '-'")
                                div.flex.xs12.md7.text-md-right
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Default
                                    span(v-html="prop.default || 'undefined'")
                                div.flex.xs12.mt-2(v-if="prop.description")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Description
                                    div(v-html="prop.description")
                                div.flex.xs12.mt-2(v-if="prop.example")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Example
                                    div.v-markup.v-card.v-sheet.v-sheet--outlined.theme--dark.grey.darken-3
                                        pre.language-js
                                            code.language-js(v-html="prop.example")
                            v-divider(v-if="index !== Object.keys(props).length - 1")
            template(v-if="wiki.slots")
                v-tab SLOTS
                v-tab-item
                    v-card(flat :style="{overflowY: 'auto', maxHeight: '600px'}")
                        template(v-if="Object.keys(slots).length === 0")
                            div.text-center.pa-4
                                v-icon(large) mdi-alert
                                h3 Aucun enregistrement correspondant n'a été trouvé
                        template(v-for="(slot, name, index) in slots")
                            div.layout.pa-2.wrap(:style="{overflow: 'hidden'}")
                                div.flex.xs6.md3
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Name
                                    strong.red--text.text--darken-2(v-html="name")
                                div.flex.xs12.mt-2(v-if="slot.description")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Description
                                    span(v-html="slot.description")
                                div.flex.xs12.mt-2(v-if="slot.description")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Props
                                    div.v-markup.v-card.v-sheet.v-sheet--outlined.theme--dark.grey.darken-3
                                        pre.language-js
                                            code.language-js(v-html="slot.props")
                            v-divider(v-if="index !== Object.keys(slots).length - 1")
            template(v-if="wiki.events")
                v-tab EVENTS
                v-tab-item
                    v-card(flat :style="{overflowY: 'auto', maxHeight: '600px'}")
                        template(v-if="Object.keys(events).length === 0")
                            div.text-center.pa-4
                                v-icon(large) mdi-alert
                                h3 Aucun enregistrement correspondant n'a été trouvé
                        template(v-for="(event, name, index) in events")
                            div.layout.pa-2.wrap(:style="{overflow: 'hidden'}")
                                div.flex.xs6.md3
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Name
                                    strong.red--text.text--darken-2(v-html="name")
                                div.flex.xs12.mt-2(v-if="event.description")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Description
                                    span(v-html="event.description")
                                div.flex.xs12.mt-2(v-if="event.description")
                                    div.text--capitalize.overline.text--secondary.text--darken-3 Value
                                    div.v-markup.v-card.v-sheet.v-sheet--outlined.theme--dark.grey.darken-3
                                        pre.language-js
                                            code.language-js(v-html="event.value")
                            v-divider(v-if="index !== Object.keys(events).length - 1")
</template>

<script>
    export default {
        name: 'TorWikiApi',
        props: {
            component: {
                type: String,
                required: true
            },
            wiki: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                filter: null
            }
        },

        computed: {
            slots() {
                let slots = {}
                _.forEach(this.wiki.slots, (slot, name) => {
                    let regex = new RegExp(this.filter, 'i')
                    if (!this.filter || regex.test(name)) {
                        slots[name] = slot
                    }
                })
                return slots
            },
            events() {
                let events = {}
                _.forEach(this.wiki.events, (event, name) => {
                    let regex = new RegExp(this.filter, 'i')
                    if (!this.filter || regex.test(name)) {
                        events[name] = event
                    }
                })
                return events
            },
            props() {
                let props = {}
                _.forEach(this.wiki.props, (prop, name) => {
                    let regex = new RegExp(this.filter, 'i')
                    if (!this.filter || regex.test(name)) {
                        props[name] = prop
                    }
                })
                return props
            }
        },

        methods: {}
    }
</script>

<style>
    .v-tabs.no-transition .v-window__container .v-window-item {
        transition: none;
    }

    @media only screen and (max-width: 959px) {
        .tor-wiki-bar,
        .tor-wiki-bar > .v-toolbar__content {
            height: 160px !important;
        }
    }

    @media screen and (min-width: 960px) {
        .tor-wiki-bar,
        .tor-wiki-bar .v-toolbar__content {
            height: 80px !important;
        }
    }
</style>

<style scoped>
    .v-markup pre[class*=language-] {
        padding: 1rem;
        margin: 0;
        overflow: auto;
    }

    .v-markup code[class*=language-], .v-markup pre[class*=language-] {
        color: #ccc;
        background: none;
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
        font-size: 1rem;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        tab-size: 4;
        hyphens: none;
    }

    .v-markup code {
        position: relative;
        box-shadow: none;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0;
        word-break: break-word;
        flex-wrap: wrap;
        align-items: center;
        vertical-align: middle;
        white-space: pre-wrap;
    }

    .v-markup code, .v-markup pre {
        margin: 0;
        background: transparent;
        font-family: Inconsolata,monospace;
        font-weight: 300;
        font-size: 15px;
        line-height: 1.55;
    }

    code {
        background-color: #fbe5e1;
        color: #c0341d;
        padding: 0 .4rem;
    }

    code, kbd {
        border-radius: 3px;
        font-size: 85%;
        font-weight: 900;
    }
</style>
