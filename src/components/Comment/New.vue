<template lang="pug">
    v-card(v-bind="bindCardProps" color="transparent" flat)
        v-card-actions
            v-textarea(placeholder="C'est ici pour parler." auto-grow single-line rows="1")
                template(#prepend)
                    v-badge.ml-1(
                        :color="setColorDispoEntity"
                        top
                        dot
                        offset-x="10"
                        offset-y="10"
                        :style="{marginTop: '-5px'}"
                    )
                        v-avatar(:size="40")
                            img(:src="entity.src")
                template(#append)
                    v-btn.ml-2(icon color="primary" )
                        v-icon mdi-send

</template>

<script>
    export default {
        name: 'TorCommentNew',
        props: {
            placeholder: {
                type: String,
                default: null
            },
            textareaProps: {
                type: Object,
                default: () => ({})
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
        },
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
