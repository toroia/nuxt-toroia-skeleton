<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorArticleRow
                v-subheader.pa-0 Article Row
            v-col.pb-0(cols="12")
                tor-other-wikiapi(
                    component="TorArticleRow"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Newsfeed
            v-col(cols="12" v-for="item in items" :key="item.id")
                tor-article-row(v-bind="item")
</template>

<script>
    export default {
        name: 'MyArticleRow',
        data: () => ({
            wiki: {
                props: {
                    title: {
                        type: String,
                        default: null,
                        description: "Tip's title"
                    },
                    entity: {
                        type: Object,
                        default: {},
                        description: "Object entity who posted the tip",
                        example: {
                            id: {
                                type: "Number",
                                default: null,
                                description: "Entity id"
                            },
                            cn: {
                                type: "String",
                                default: null,
                                description: "Common name"
                            },
                            type: {
                                type: "Number",
                                default: null,
                                description: "Type of entity (1 : Physic | 2 : Moral)"
                            },
                            dispo: {
                                type: "String",
                                default: null,
                                description: "Current disponibility of the entity"
                            },
                            src: {
                                type: "String",
                                default: "https://randomuser.me/api/portraits/men/77.jpg",
                                description: "Avatar"
                            },
                        }
                    },
                    content: {
                        type: String,
                        default: null,
                        description: "Article's content"
                    },
                    slug: {
                        type: String,
                        default: null,
                        description: "slug"
                    },
                    category: {
                        type: Object,
                        default: {},
                        description: "Object category of the tip",
                        example: {
                            id: {
                                type: "Number",
                                default: null,
                                description: "Category id"
                            },
                            name: {
                                type: "String",
                                default: null,
                                description: "Category name"
                            },
                            src: {
                                type: "String",
                                default: null,
                                description: "Category icon"
                            }
                        }
                    },
                    appreciation: {
                        type: Number,
                        default: null,
                        description: "Percentage of appreciation"
                    },
                    reactions: {
                        type: Object,
                        default: {},
                        description: "Object reactions of the tip",
                        example: {
                            icon: {
                                type: "String",
                                default: null,
                                description: "Reaction icon"
                            },
                            entities: {
                                type: "Array",
                                default: [],
                                description: "Array of entities who react to the tip"
                            },
                            total: {
                                type: "Number",
                                default: null,
                                description: "Total of reactions"
                            }
                        }
                    },
                    flag: {
                        type: Boolean,
                        default: null,
                        description: "Flag determines if a tip was viewed by the user"
                    },
                    metadata: {
                        type: Object,
                        default: {},
                        description: "Metadatas",
                        example: {
                            createdAt: {
                                type: "Date",
                                default: null,
                                description: "Creation date of the tip"
                            },
                            createdBy: {
                                type: "Number",
                                default: null,
                                description: "Entity id"
                            },
                        }
                    },
                    cardProps: {
                        type: Object,
                        default: {},
                        description: "Props of the card element",
                        example: {
                            width: {
                                type: "String",
                                default: "100%",
                                description: "Card width"
                            },
                            outlined: {
                                type: "Boolean",
                                default: true,
                                description: "Outlined card"
                            }
                        }
                    },
                },
            },
            items: [
                {
                    id: 1,
                    title: "Texte de test",
                    entity: {
                        id: 5,
                        cn: "Jon DOE",
                        type: 1,
                        dispo: "online",
                        src: 'https://randomuser.me/api/portraits/men/77.jpg',
                    },
                    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
                        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
                        'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
                        'sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    category: {
                        id: 19,
                        name: "Programmation",
                        src: "mdi-minus"
                    },
                    metadata: {
                        createdAt: 'Il y a 54s'
                    },
                    appreciation: 65,
                    // time: moment([2020, 9, 9]).fromNow()
                },
                {
                    id: 2,
                    title: "Pourquoi CakePHP est un muavais framework",
                    entity: {
                        id: 6,
                        cn: "Emilio KLARK",
                        type: 2,
                        dispo: "offline",
                        src: 'https://randomuser.me/api/portraits/men/78.jpg',
                    },
                    content: "A mort Cake PHP",
                    category: {
                        id: 19,
                        name: "PHP",
                        src: "mdi-minus"
                    },
                    metadata: {
                        createdAt: 'Il y a 2h'
                    },
                    appreciation: 100,
                    // time: moment([2020, 9, 9]).fromNow()
                },
                {
                    id: 3,
                    title: "SVN est un outil déprécié",
                    entity: {
                        id: 7,
                        cn: "Paul JAK",
                        type: 1,
                        dispo: "online",
                        src: 'https://randomuser.me/api/portraits/men/79.jpg',
                    },
                    content: "Je préfère Git",
                    category: {
                        id: 20,
                        name: "Versionning",
                        src: "mdi-share"
                    },
                    metadata: {
                        createdAt: 'Il y a 1j'
                    },
                    appreciation: 50,
                    // time: moment([2020, 9, 9]).fromNow()
                },
            ]
        }),
    }
</script>
