<template lang="pug">
    v-card(v-bind="bindCardProps" color="transparent" flat)
        v-badge(
            :color="setColorDispoEntity"
            top
            dot
            offset-x="10"
            offset-y="10"
        )
            v-avatar(:size="40")
                img(:src="entity.src")
        span.subtitle-2.ml-1(v-text="entity.cn")
        span.caption.ml-4(v-text="metadata.createdAt" class="commentCreatedAt")
        v-card-text
            slot(name="content")
            span.body-2(v-text="content")






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
            toolbarSize: 50,
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
