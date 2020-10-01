<template lang="pug">
v-card(v-bind="bindCardProps")
    v-toolbar(color="transparent" :height="toolbarSize + 10" flat)
        slot(name="toolbar" :toolbarSize="toolbarSize")
            slot(name="toolbar.left")
            v-avatar(:size="toolbarSize")
                img(:src="image")
            v-toolbar-title.overline.ml-3(v-text="displayname")
            v-spacer
            span.caption(v-text="time")
            v-divider.ml-4.mr-1(vertical)
            v-menu
                v-list(dense)
                    slot(name="toolbarRightButtonList")
                        slot(name="toolbarRightButtonList.left")
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

    v-card-text
        slot(name="content")
        span.body-2(v-text="content")

    v-divider

    v-card-actions
        slot(name="actions")
            slot(name="actions.left")
            v-btn(icon small)
                v-icon(small) mdi-minus
            v-col(cols="1")
                v-tooltip(top)
                    span {{nbAppreciation}} appréciations
                    template(v-slot:activator="{ on, attrs }")
                        v-progress-linear(
                            background-color="error"
                            color="success"
                            rounded
                            v-bind="attrs"
                            v-on="on"
                            :value="appreciation"
                        )
            v-btn(icon small)
                v-icon(small) mdi-plus
            v-divider.mx-4(vertical)

            v-spacer
            v-btn(icon small)
                v-icon(small) mdi-emoticon
            v-btn(icon small)
                v-icon(small) mdi-comment
            v-btn(icon small)
                v-icon(small) mdi-share
            v-divider.mx-4(vertical)
            v-btn(color="default" text x-small) Afficher les commentaires
            slot(name="actions.right")
</template>

<script>
    export default {
        name: 'TorArticleRow',

        props: {

            /**
             * @property {String} image - Set avatar of the author
             */
            image: {
                type: String,
                default: 'https://randomuser.me/api/portraits/men/77.jpg',
            },

            /**
             * @property {String} content - Set article's content
             */
            content: {
                type: String,
                default: 'Contenu',
            },

            /**
             * @property {String} displayname - Displayname of the author
             */
            displayname: {
                type: String,
                default: 'Jon DOE',
            },

            /**
             * @property {String} time - Time left after the article posted
             */
            time: {
                type: String,
                default: null,
            },

            /**
             * @property {Number} appreciation - Percentage of tip's appreciation
             */
            appreciation: {
                type: Number,
                default: 0,
            },

            /**
             * @property {Number} nbAppreciation - Number of appreciations
             */
            nbAppreciation: {
                type: Number,
                default: 0,
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
            toolbarSize: 40
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
            }
        }
    }
</script>

<!--Emojis : https://emoji.gg/api/-->
