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
                    displayname: "Jon DOE",
                    iconTip: "mdi-minus",
                    categoryTip: "Programmation",
                    titleTip: "Texte de test",
                    image: 'https://randomuser.me/api/portraits/men/77.jpg',
                    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
                        'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
                        'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
                        'sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    time: 'Il y a 54s',
                    appreciation: 65,
                    nbAppreciation: 5
                    // time: moment([2020, 9, 9]).fromNow()
                },
                {
                    id: 2,
                    displayname: "Emilio KLARK",
                    iconTip: "mdi-plus",
                    categoryTip: "PHP",
                    titleTip: "Pourquoi Cake PHP est un framework mauvais",
                    image: 'https://randomuser.me/api/portraits/men/78.jpg',
                    content: 'A mort Cake PHP',
                    time: 'Il y a 2h',
                    appreciation: 100,
                    nbAppreciation: 3
                    // time: moment([2020, 2, 29]).fromNow()
                },
                {
                    id: 3,
                    displayname: "Paul JAK",
                    iconTip: "mdi-share",
                    categoryTip: "Versionning",
                    titleTip: "SVN est un outil déprécié",
                    image: 'https://randomuser.me/api/portraits/men/79.jpg',
                    content: 'La tips de trop',
                    time: 'Il y a 1j',
                    appreciation: 50,
                    nbAppreciation: 2
                    // time: moment([2007, 0, 29]).fromNow()
                },
            ]
        }),
    }
</script>
