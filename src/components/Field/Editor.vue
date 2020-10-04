<template lang="pug">
    client-only
        section.editor
            v-card.tiptap-vuetify-editor
                editor-menu-bar(:editor="editor" v-slot="{ commands, isActive }")
                    v-card-actions
                        template(v-for="action in actions")
                            template(v-if="action.type === 'button'")
                                v-tooltip(v-if="action.tooltip" top)
                                    template(#activator="{ on }")
                                        v-btn(
                                            :color="colorize(isActive, action)"
                                            @click="commanding(commands, action)"
                                            v-on="on" small icon
                                        )
                                            v-icon(small v-text="action.icon")
                                    span(v-text="action.tooltip")
                                v-btn(
                                    :color="colorize(isActive, action)"
                                    @click="commanding(commands, action)"
                                    v-on="on" small icon v-else
                                )
                                    v-icon(small v-text="action.icon")
                            v-divider.mx-1(v-else-if="action.type === 'separator'" vertical)
                            slot(
                                :name="'action.' + action.name"
                                :isActive="isActive"
                                :commands="commands"
                                :action="action"
                                v-else
                            )
                v-divider
                editor-content.tiptap-vuetify-editor__content(:editor="editor")
            div.suggestions-list(ref="suggestions")
                v-list
                    v-list-item
                        v-list-item-title toto
</template>

<script>
    // @see https://tiptap.dev/docs/api/extensions.html
    import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
    import {Mention} from 'tiptap-extensions'

    // noinspection JSUnusedGlobalSymbols
    export default {
        props: {
            value: {
                type: Object,
                default: () => ({}),
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            outputFormat: {
                type: String,
                default: 'JSON',
            },
            extensions: {
                type: Array,
                default: () => ([
                    'History',
                    'Bold',
                    'Italic',
                    'Underline',
                    {
                        'Heading': {
                            levels: [1, 2, 3],
                        },
                    },
                    {
                        'Mention': {
                            items: async () => {
                                debugger
                                await new Promise(resolve => {
                                    setTimeout(resolve, 500)
                                })
                                return [
                                    { id: 1, name: 'Sven Adlung' },
                                    { id: 2, name: 'Patrick Baber' },
                                    { id: 3, name: 'Nick Hirche' },
                                    { id: 4, name: 'Philip Isik' },
                                    { id: 5, name: 'Timo Isik' },
                                    { id: 6, name: 'Philipp Kühn' },
                                    { id: 7, name: 'Hans Pagel' },
                                    { id: 8, name: 'Sebastian Schrama' },
                                ]
                            },
                            onEnter: (enter) => {
                                debugger
                            },
                            onChange: (change) => {
                                debugger
                            },
                            onExit: (exit) => {
                                debugger
                            },
                            // is called on every keyDown event while a suggestion is active
                            onKeyDown: (keydown) => {
                                debugger
                            },
                            onFilter: async (items, query) => {
                                debugger
                            },
                        },
                    },
                ]),
            },
            actions: {
                type: Array,
                default: () => ([
                    {
                        name: 'undo',
                        type: 'button',
                        tooltip: 'Annuler (Ctrl + Z)',
                        icon: 'mdi-undo',
                        command: commands => commands.undo(),
                    },
                    {
                        name: 'redo',
                        type: 'button',
                        tooltip: 'Rétablir (Ctrl + Y)',
                        icon: 'mdi-redo',
                        command: commands => commands.redo(),
                    },
                    {
                        type: 'separator',
                    },
                    {
                        name: 'bold',
                        type: 'button',
                        tooltip: "Gras (Ctrl + B)",
                        icon: 'mdi-format-bold',
                        active: isActive => isActive.bold(),
                        command: commands => commands.bold(),
                    },
                    {
                        name: 'italic',
                        type: 'button',
                        tooltip: "Italique (Ctrl + B)",
                        icon: 'mdi-format-italic',
                        active: isActive => isActive.italic(),
                        command: commands => commands.italic(),
                    },
                    {
                        name: 'underline',
                        type: 'button',
                        tooltip: "Souligné (Ctrl + U)",
                        icon: 'mdi-format-underline',
                        active: isActive => isActive.underline(),
                        command: commands => commands.underline(),
                    },
                    {
                        type: 'separator',
                    },
                    {
                        name: 'header-1',
                        type: 'button',
                        tooltip: 'Titre 1',
                        icon: 'mdi-format-header-1',
                        active: isActive => isActive.heading({level: 1}),
                        command: commands => commands.heading({level: 1}),
                    },
                    {
                        name: 'header-2',
                        type: 'button',
                        tooltip: 'Titre 2',
                        icon: 'mdi-format-header-2',
                        active: isActive => isActive.heading({level: 2}),
                        command: commands => commands.heading({level: 2}),
                    },
                    {
                        name: 'header-3',
                        type: 'button',
                        tooltip: 'Titre 3',
                        icon: 'mdi-format-header-3',
                        active: isActive => isActive.heading({level: 3}),
                        command: commands => commands.heading({level: 3}),
                    },
                ]),
            },
        },

        components: {
            EditorMenuBar,
            EditorContent,
        },

        data() {
            return {
                data: null,
                editor: null,
                showMenu: true
            }
        },

        watch: {
            value: {
                handler(value) {
                    if (!_.isEqual(value, this.data)) {
                        this.editor.setContent(value || {})
                    }
                },
                deep: true,
            }
        },

        methods: {
            colorize(isActive, action) {
                if (_.isFunction(action.active) && action.active(isActive)) {
                    return 'primary'
                }
                return null
            },

            commanding(commands, action) {
                if (_.isFunction(action.command)) {
                    action.command(commands)
                }
            }
        },

        mounted() {
            let extensions = []

            _.forEach(this.extensions, extension => {
                if (_.isString(extension)) {
                    let extName = _.upperFirst(extension)
                    let instance = require('tiptap-extensions')[extName]
                    extensions.push(new instance())
                } else if (_.isObject(extension)) {
                    let key = Object.keys(extension)
                    let args = Object.values(extension)
                    let extName = _.upperFirst(key[0])
                    let instance = require('tiptap-extensions')[extName]
                    extensions.push(new instance(args[0]))
                }
            })

            this.editor = new Editor({
                extensions,
                editable: !this.disabled,
                editorProps: {
                    handleKeyDown: (view, event) => {
                        this.$emit('keydown', event, view)
                    },
                },
                onUpdate: update => {
                    let output = 'get' + _.upperCase(this.outputFormat)
                    this.data = update[output]()
                    this.$emit('input', this.data, update)
                },
                onBlur: ({ event, view }) => {
                    this.$emit('blur', event, view)
                },
                onFocus: ({ event, view }) => {
                    this.$emit('focus', event, view)
                },
            })
            this.editor.setContent(this.value || {})
        },
        beforeDestroy() {
            if (this.editor) {
                this.editor.destroy()
            }
        },
    }
</script>

<style>
    .tiptap-vuetify-editor__action-render-btn {
        margin: 2px 6px
    }

    .tiptap-vuetify-editor__toolbar .v-toolbar {
        display: flex;
        height: auto !important;
        padding: 5px
    }

    .tiptap-vuetify-editor__toolbar .v-toolbar .v-toolbar__content {
        height: auto !important;
        flex-wrap: wrap;
        padding: 0
    }

    .tiptap-vuetify-editor-pop {
        position: fixed;
        z-index: 1;
        opacity: .9 !important;
        transition: transform .1s ease-in-out
    }

    .tiptap-vuetify-editor-pop .tiptap-vuetify-editor-pop__popper {
        background-image: linear-gradient(180deg, rgba(49, 49, 47, .99), #262625);
        background-repeat: repeat-x;
        border-radius: 5px;
        padding: 0 10px;
        color: #fff;
        line-height: 44px;
        display: inline-block;
        visibility: hidden;
        opacity: 0;
        pointer-events: none
    }

    .tiptap-vuetify-editor-pop .tiptap-vuetify-editor-pop__popper--visible {
        visibility: visible;
        pointer-events: auto;
        -webkit-animation: pop-upwards .18s linear forwards;
        animation: pop-upwards .18s linear forwards;
        -webkit-animation-delay: .2s;
        animation-delay: .2s;
        transition: opacity 0s linear .2s
    }

    .tiptap-vuetify-editor-pop[x-placement=top] {
        margin-bottom: 7px
    }

    .tiptap-vuetify-editor-pop[x-placement=bottom] {
        margin-top: 7px
    }

    .tiptap-vuetify-editor-pop[x-placement=bottom] .tiptap-vuetify-editor-pop__popper {
        background-image: linear-gradient(0deg, rgba(49, 49, 47, .99), #262625)
    }

    [x-arrow] {
        position: fixed;
        width: 14px;
        height: 14px;
        background-color: #262625;
        transform: rotate(45deg);
        z-index: -1
    }

    [x-placement=top] [x-arrow] {
        margin-bottom: -7px;
        bottom: 0
    }

    [x-placement=bottom] [x-arrow] {
        margin-top: -7px;
        top: 0
    }

    @-webkit-keyframes pop-upwards {
        0% {
            transform: matrix(.97, 0, 0, 1, 0, 12);
            opacity: 0
        }
        20% {
            transform: matrix(.99, 0, 0, 1, 0, 2);
            opacity: .7
        }
        40% {
            transform: matrix(1, 0, 0, 1, 0, -1);
            opacity: 1
        }
        70% {
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1
        }
        to {
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1
        }
    }

    @keyframes pop-upwards {
        0% {
            transform: matrix(.97, 0, 0, 1, 0, 12);
            opacity: 0
        }
        20% {
            transform: matrix(.99, 0, 0, 1, 0, 2);
            opacity: .7
        }
        40% {
            transform: matrix(1, 0, 0, 1, 0, -1);
            opacity: 1
        }
        70% {
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1
        }
        to {
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1
        }
    }

    .tiptap-vuetify-editor {
        position: relative
    }

    .tiptap-vuetify-editor .ProseMirror {
        outline: 0 !important;
        margin: 20px !important
    }

    .tiptap-vuetify-editor--disabled {
        cursor: not-allowed
    }

    .tiptap-vuetify-editor__content {
        transition: all 2s;
        overflow: auto !important;
        padding: 5px
    }

    .tiptap-vuetify-editor__content a {
        pointer-events: none
    }

    .tiptap-vuetify-editor__content h1 {
        font-size: 28px;
    }

    .tiptap-vuetify-editor__content h1, .tiptap-vuetify-editor__content h2, .tiptap-vuetify-editor__content h3, .tiptap-vuetify-editor__content h4 {
        margin: 10px 0 20px !important
    }

    .tiptap-vuetify-editor__content blockquote {
        border-left: .25em solid #dfe2e5;
        color: #6a737d;
        padding-left: 1em;
        margin: 20px 0 !important
    }

    .tiptap-vuetify-editor__content code {
        padding: 0 4px !important;
        margin: 0 5px !important
    }

    .tiptap-vuetify-editor__content pre code {
        padding: 8px !important;
        margin: 0 5px !important
    }

    .tiptap-vuetify-editor__content code:after, .tiptap-vuetify-editor__content code:before {
        content: none !important;
        letter-spacing: normal !important
    }

    .tiptap-vuetify-editor__content p {
        margin-top: 16px !important;
        margin-bottom: 16px !important;
        min-height: 1rem
    }

    .tiptap-vuetify-editor__content p.tiptap-vuetify-editor__paragraph--is-empty:first-child:before {
        content: attr(data-empty-text);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic
    }

    .tiptap-vuetify-editor__content table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden
    }

    .tiptap-vuetify-editor__content table td, .tiptap-vuetify-editor__content table th {
        min-width: 1em;
        border: 2px solid grey;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative
    }

    .tiptap-vuetify-editor__content table td > *, .tiptap-vuetify-editor__content table th > * {
        margin-bottom: 0
    }

    .tiptap-vuetify-editor__content table th {
        font-weight: 700;
        text-align: left
    }

    .tiptap-vuetify-editor__content table .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(200, 200, 255, .4);
        pointer-events: none
    }

    .tiptap-vuetify-editor__content table .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none
    }

    .tiptap-vuetify-editor__content .tableWrapper {
        margin: 1em 0;
        overflow-x: auto
    }

    .tiptap-vuetify-editor__content .resize-cursor {
        cursor: col-resize
    }

    .tiptap-vuetify-editor__content--disabled {
        color: rgba(0, 0, 0, .38)
    }

    .tiptap-vuetify-editor__content--disabled:after {
        background-color: rgba(0, 0, 0, .06);
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0
    }

    #tiptap-vuetify-image-upload-area__input-file {
        display: none
    }

    .tiptap-vuetify-image-upload-area-holder {
        background-color: #c8dadf;
        height: 400px;
        outline: 2px dashed #92b0b3;
        outline-offset: -10px;
        transition: all .15s ease-in-out;
        display: flex !important;
        justify-content: center;
        align-items: center
    }

    .tiptap-vuetify-image-upload-area-holder--dragover, .tiptap-vuetify-image-upload-area-holder:hover {
        background-color: #a5b7bc;
        outline: 2px dashed #648083;
        color: #444;
        cursor: pointer
    }

    .tiptap-vuetify-image-upload-area-holder--dragover .tiptap-vuetify-image-upload-area-holder__icon, .tiptap-vuetify-image-upload-area-holder:hover .tiptap-vuetify-image-upload-area-holder__icon {
        fill: #5f777a !important
    }

    .tiptap-vuetify-image-upload-area-holder .tiptap-vuetify-image-upload-area-holder__icon {
        width: 100%;
        height: 80px;
        fill: #92b0b3;
        display: block;
        margin-bottom: 40px;
        transition: all .15s ease-in-out
    }

    .tiptap-vuetify-todo-item-view {
        display: flex
    }
</style>
