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
            v-col(cols="12" v-for="item in items" :key="item.id")
                tor-comment-row(v-bind="item")
</template>

<script>
    export default {
        name: "MyCommentRow",

        data: () => ({
            article: {
                id: 1,
                title: "Texte de test",
                entity: {
                    id: 5,
                    cn: "Jon DOE",
                    type: 1,
                    dispo: "online",
                    src: 'https://randomuser.me/api/portraits/men/77.jpg',
                },
                content: 'VueJS c\'est trop de la balle OMG',
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
            items: [
                {
                    entity: {
                        id: 5,
                        cn: "Jon DOE",
                        type: 1,
                        dispo: "online",
                        src: 'https://randomuser.me/api/portraits/men/77.jpg',
                    },
                    content: "Hé c'est trop de la balle mec",
                    metadata: {
                        createdAt: 'Il y a 5min'
                    },
                },
                {
                    entity: {
                        id: 7,
                        cn: "Pierre KAILOU",
                        type: 1,
                        dispo: "offline",
                        src: 'https://randomuser.me/api/portraits/men/81.jpg',
                    },
                    content: "J'ai rien compris mec.",
                    metadata: {
                        createdAt: 'Il y a 20s'
                    },
                },
                {
                    entity: {
                        id: 7,
                        cn: "Picsou",
                        type: 1,
                        dispo: "offline",
                        src: 'https://randomuser.me/api/portraits/men/82.jpg',
                    },
                    content: "Redonnes la thune",
                    metadata: {
                        createdAt: 'Il y a 15s'
                    },
                },
            ]
        }),


    }
</script>
