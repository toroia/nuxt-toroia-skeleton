<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorCommentRow
                v-subheader.pa-0 Comment Row
        v-row
            v-col(cols="12")
                tor-article-row(v-bind="article")
        v-row
            v-col(cols="12")
                div(v-for="item in items" :key="item.id")
                    tor-comment-row(v-bind="item")
        v-row
            v-col(cols="12")
                tor-comment-new(v-bind="newComment" background-color="transparent")
        br
</template>

<script>
    export default {
        name: "MyCommentRow",
        data: () => ({
            newArticle: {
                entity: {
                    id: 7,
                    cn: "Samsaoule",
                    type: 1,
                    dispo: "online",
                    src: 'https://randomuser.me/api/portraits/men/82.jpg',
                },
            },
            newComment: {
                entity: {
                    id: 7,
                    cn: "Samsaoule",
                    type: 1,
                    dispo: "online",
                    src: 'https://randomuser.me/api/portraits/men/82.jpg',
                },
            },
            article: {
                id: 1,
                title: "Int to Bool",
                entity: {
                    id: 5,
                    cn: "Jon DOE",
                    type: 1,
                    dispo: "online",
                    src: 'https://randomuser.me/api/portraits/men/77.jpg',
                },
                content: "Astuce pour convertir facilement un integer en boolean en JS : <br><br><i>let myBool = !!1 // myBool = true</i>",
                category: {
                    id: 19,
                    name: "Programmation",
                    src: "mdi-minus"
                },
                metadata: {
                    createdAt: 'Il y a 10min'
                },
                appreciation: 100,
                // time: moment([2020, 9, 9]).fromNow()
            },
            items: [
                {
                    entity: {
                        id: 7,
                        cn: "Pierre LALLEMAND",
                        type: 1,
                        dispo: "offline",
                        src: 'https://randomuser.me/api/portraits/men/81.jpg',
                    },
                    content: "Je ne connaissais pas, pratique comme syntaxe !",
                    metadata: {
                        createdAt: 'Il y a 5min'
                    },
                },
                {
                    entity: {
                        id: 5,
                        cn: "Jon DOE",
                        type: 1,
                        dispo: "online",
                        src: 'https://randomuser.me/api/portraits/men/77.jpg',
                    },
                    content: "Pas de soucis, on est là pour ça !",
                    metadata: {
                        createdAt: 'Il y a 2min'
                    },
                },
                {
                    entity: {
                        id: 7,
                        cn: "Samsaoule",
                        type: 1,
                        dispo: "online",
                        src: 'https://randomuser.me/api/portraits/men/82.jpg',
                    },
                    content: "Je pense que myBool!=0?true:false; serait plus simple à comprendre, explique-moi pourquoi ta syntaxe est meilleure ?",
                    metadata: {
                        createdAt: 'Il y a 45s'
                    },
                },
            ]
        }),


    }
</script>
