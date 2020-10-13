<template lang="pug">
    v-card(v-bind="bindCardProps" color="transparent" flat)

        v-toolbar(color="transparent" flat)
            v-badge(
                :color="setColorDispoEntity"
                top
                dot
                offset-x="10"
                offset-y="10"
            )
                v-avatar(:size="40")
                    img(:src="entity.src")
            span.subtitle-2.ml-2(v-text="entity.cn")
            span.caption.ml-4(v-text="metadata.createdAt" class="commentCreatedAt")

            v-spacer

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
                                v-icon(small) mdi-flag
                            v-list-item-title Signaler
                        slot(name="toolbarRightButtonList.right")
                template(v-slot:activator="{on, attrs}")
                    v-btn(icon v-bind="attrs" v-on="on")
                        v-icon mdi-dots-vertical

        v-toolbar(color="transparent" flat height="auto" )
            v-divider.ml-4(vertical)
            v-card-text
                    slot(name="content")
                    span.body-2(v-text="content")

        v-toolbar(color="transparent" :height="toolbarSize" flat)
            v-btn.ml-1(icon small)
                v-icon(small) mdi-emoticon
            v-spacer
            span 😉

</template>

<script>
    export default {
        name: 'TorCommentRow',
        props: {

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
             * @property {Object} metadata - Metadatas
             */
            metadata: {
                type: Object,
                default: () => ({
                    createdAt: null,
                    createdBy: null,
                }),
            },

        },

        data: () => ({
            toolbarSize: 35,
        }),

        computed: {
            bindCardProps() {
                return {
                    ...{
                        width: "100%",
                    },
                    ...this.cardProps
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
    .commentCreatedAt {
        color: #7F828B;
    }
</style>
