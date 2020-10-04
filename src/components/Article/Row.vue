<template lang="pug">
v-card(v-bind="bindCardProps")
    v-toolbar(color="transparent" :height="toolbarHeadSize" flat)
        slot(name="toolbar" :toolbarHeadSize="toolbarHeadSize")
            slot(name="toolbar.left")
            template
                v-tooltip(top)
                    span(v-text="categoryTip")
                    template(v-slot:activator="{ on, attrs }")
                        v-icon(v-text="iconTip" small v-bind="attrs" v-on="on")

            v-divider.ml-4.mr-1(vertical)

            v-toolbar-title.overline.ml-3(v-text="titleTip")

            v-spacer


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

    v-toolbar(color="transparent" :height="toolbarAvatarSize" flat)
        slot(name="toolbarAvatar" :toolbarAvatarSize="toolbarAvatarSize")
            slot(name="toolbarAvatar.left")
            v-avatar(:size="30")
                img(:src="image")
            span.subtitle-2.ml-3(v-text="displayname")
            slot(name="toolbarAvatar.right")

    v-card-text
        slot(name="content")
        span.body-2(v-text="content")

    v-toolbar(color="transparent" :height="toolbarTimeSize" flat)
        slot(name="toolbarTimer" :toolbarTimeSize="toolbarTimeSize")
            slot(name="toolbarTimer.left")
            v-spacer
            span.caption(v-text="time")
            slot(name="toolbarTimer.right")

    v-divider

    v-card-actions
        slot(name="actions" :toolbarFootSize="toolbarFootSize")
            slot(name="actions.left")

            template(class="appreciationWidth")
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
             * @property {String} categorieTip - Name of the tip's category
             */
            categoryTip: {
                type: String,
                default: 'Test',
            },

            /**
             * @property {String} iconTip - Icon of the tip's categorie
             */
            iconTip: {
                type: String,
                default: 'mdi-minus',
            },

            /**
             * @property {String} titleTip - Tip's title
             */
            titleTip: {
                type: String,
                default: 'Title',
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
            toolbarTimeSize: 30,
            toolbarAvatarSize: 50,
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
            }
        }
    }
</script>

<style>
    .appreciationWidth {
        width: 40px;
    }
</style>


<!--Emojis : https://emoji.gg/api/-->

