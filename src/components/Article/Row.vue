<template lang="pug">
v-card(v-bind="bindCardProps")
    v-toolbar(color="transparent" :height="toolbarHeadSize" flat)
        slot(name="toolbar" :toolbarHeadSize="toolbarHeadSize")
            slot(name="toolbar.left")
            template
                v-tooltip(top)
                    span(v-text="category.name")
                    template(v-slot:activator="{ on, attrs }")
                        v-icon(v-text="category.src" small v-bind="attrs" v-on="on")

            v-divider.ml-4.mr-1(vertical)

            v-toolbar-title.overline.ml-3(v-text="title")

            v-spacer

            v-divider.ml-4.mr-1(vertical)
            v-menu
                v-list(dense)
                    slot(name="toolbarRightButtonList")
                        slot(name="toolbarRightButtonList.left")
                        v-list-item(@click="")
                            v-list-item-icon
                                v-icon(small) mdi-account-plus
                            v-list-item-title Suivre {{entity.cn}}
                        v-list-item(@click="")
                            v-list-item-icon
                                v-icon(small) mdi-block-helper
                            v-list-item-title Bloquer {{entity.cn}}
                        v-divider
                        v-list-item(@click="")
                            v-list-item-icon
                                v-icon(small) mdi-content-copy
                            v-list-item-title Copier le lien
                        v-list-item(@click="")
                            v-list-item-icon
                                v-icon(small) mdi-flag
                            v-list-item-title Signaler
                        slot(name="toolbarRightButtonList.right")
                template(v-slot:activator="{on, attrs}")
                    v-btn(icon v-bind="attrs" v-on="on")
                        v-icon mdi-dots-vertical
            slot(name="toolbar.right")

    v-divider

    v-toolbar(color="transparent" :height="toolbarAvatarSize" flat)
        slot(name="toolbarAvatar" :toolbarAvatarSize="toolbarAvatarSize")
            slot(name="toolbarAvatar.left")
            v-badge(
                :color="setColorDispoEntity"
                top
                dot
                offset-x="8"
                offset-y="8"
            )
                v-avatar(:size="30")
                    img(:src="entity.src")
            span.subtitle-2.ml-1(v-text="entity.cn")
            v-badge(color="primary darken-2" :icon="setIconTypeEntity" inline)
            slot(name="toolbarAvatar.right")

    v-card-text
        slot(name="content")
        span.body-2(v-html="content")

    v-toolbar(color="transparent" :height="toolbarTimeSize" flat)
        slot(name="toolbarTimer" :toolbarTimeSize="toolbarTimeSize")
            slot(name="toolbarTimer.left")
            v-spacer
            span.caption(v-text="metadata.createdAt")
            slot(name="toolbarTimer.right")

    v-divider

    v-card-actions
        slot(name="actions" :toolbarFootSize="toolbarFootSize")
            slot(name="actions.left")
            v-btn(icon small)
                v-icon(small) mdi-thumb-down
            template
                v-tooltip(top)
                    span Appréciée par {{appreciation}}% des utilisateurs
                    template(v-slot:activator="{ on, attrs }")
                        v-progress-linear(
                            background-color="error"
                            color="success"
                            rounded
                            v-bind="attrs"
                            v-on="on"
                            :value="appreciation"
                            class="appreciationWidth"
                        )
            v-btn(icon small)
                v-icon(small) mdi-thumb-up

            v-spacer

            v-btn(icon small)
                v-icon(small) mdi-emoticon
            v-btn(icon small)
                v-icon(small) mdi-comment
            v-btn(icon small)
                v-icon(small) mdi-share
            slot(name="actions.right")
</template>

<script>
    export default {
        name: 'TorArticleRow',
        props: {

            /**
             * @property {String} title - Tip's title
             */
            title: {
                type: String,
                default: null,
            },

            /**
             * @property {Object} entity - Entity
             */
            entity: {
                type: Object,
                default: () => ({
                    id: null,
                    cn: null,
                    type: null,
                    dispo: null,
                    src: 'https://randomuser.me/api/portraits/men/77.jpg',
                }),
            },

            /**
             * @property {String} content - Set article's content
             */
            content: {
                type: String,
                default: null,
            },

            /**
             * @property {String} slug - Slug
             */
            slug: {
                type: String,
                default: null,
            },

            /**
             * @property {Object} category - Category
             */
            category: {
                type: Object,
                default: () => ({
                    id: null,
                    name: null,
                    src: null
                }),
            },

            /**
             * @property {Number} appreciation - Percentage of appreciation
             */
            appreciation: {
                type: Number,
                default: null,
            },

            /**
             * @property {Object} reactions - Reactions
             */
            reactions: {
                type: Object,
                default: () => ({
                    icon: null,
                    entities: [],
                    total: null
                }),
            },

            /**
             * @property {Boolean} flag - Flag determines if a tip was viewed by the user
             */
            flag: {
                type: Boolean,
                default: null,
            },

            /**
             * @property {Object} metadata - Metadatas
             */
            metadata: {
                type: Object,
                default: () => ({
                    createdAt: null,
                    createdBy: null,
                }),
            },

            /**
             * @property {String} cardProps - Props of the card element
             */
            cardProps: {
                type: Object,
                default() {
                    return {}
                },
            },
        },

        data: () => ({
            toolbarHeadSize: 50,
            toolbarAvatarSize: 50,
            toolbarTimeSize: 30,
            toolbarFootSize: 40,
        }),

        computed: {
            bindCardProps() {
                return {
                    ...{
                        width: "100%",
                        outlined: true
                    },
                    ...this.cardProps
                }
            },
            setIconTypeEntity() {
                switch (this.entity.type) {
                    case 1:
                        return "mdi-account"
                    case 2:
                        return "mdi-city"
                }
            },
            setColorDispoEntity() {
                switch (this.entity.dispo) {
                    case "online":
                        return "green accent-4"
                    case "offline":
                        return "grey accent-4"
                }
            }
        }
    }
</script>

<style>
    .appreciationWidth {
        max-width: 80px;
    }
</style>


<!--Emojis : https://emoji.gg/api/-->

