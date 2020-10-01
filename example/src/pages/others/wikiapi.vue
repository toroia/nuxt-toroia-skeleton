<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorWikiApi
                v-subheader.pa-0
                    | Composant permettant d'afficher une documentation sous forme de
                    | tableau pour les composants VueJS
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorWikiApi"
                    :wiki="wiki"
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
                                    description: "Rempli le background du composant",
                                    example: {},
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
