<template lang="pug">
    v-row
        v-col(cols="12")
            tor-wiki-api(
                component="TorWikiApi"
                :wiki="wiki"
            )
    //v-row
        v-col(cols="12")
            h1.title
                span Textarea&nbsp;
                small
                    a(href="https://vuetifyjs.com/en/components/textarea/#textareas" target="_blank") (source)
        v-col(cols="12")
            tor-field-textarea(
                label="Un premier test"
            )
</template>

<script>
    export default {
        name: 'OthersWikiApiPage',

        data: () => ({
            wiki: {
                props: {
                    component: {
                        type: 'String',
                        required: true,
                        description: "Nom du composant"
                    },
                    wiki: {
                        type: 'Object',
                        required: true,
                        example: {
                            extends: {
                                href: 'https://vuetifyjs.com/en/components/textarea/',
                                text: 'v-textarea'
                            },
                            props: {
                                filled: {
                                    type: 'Boolean',
                                    default: true,
                                    description: "Rempli le background du composant"
                                }
                            },
                            events: {
                                label: {
                                    description: "Replaces the default label",
                                    value: {
                                        key: 'number',
                                        message: 'string',
                                    }
                                }
                            },
                            slots: {
                                label: {
                                    description: "Replaces the default label",
                                    props: {
                                        key: 'number',
                                        message: 'string',
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
</script>
