<template lang="pug">
    section
        v-row
            v-col(cols="12")
                h1.title Article Row & List
                v-subheader.pa-0 Article Component (List)
        v-row
            v-col(cols="12" v-for="item in items" :key="item.id")
                tor-article-row(v-bind="item")
</template>

<script>
    export default {
        name: 'MyArticleRow',
        data: () => ({
            items: [
                {
                    id: 1,
                    title: "Texte de test",
                    entity: {
                        id: 5,
                        cn: "Jon DOE",
                        type: 1,
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
