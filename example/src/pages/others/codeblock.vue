<template lang="pug">
    section
        v-row
            v-col.pb-0(cols="12")
                h1.title Component - TorCodeblock
                v-subheader.pa-0 Composant permettant le rendu d'effectuer un rendu visuel sur le code logiciel
            v-col.pb-0(cols="12")
                tor-wiki-api(
                    component="TorCodeblock"
                    :wiki="wiki"
                )
        v-row
            v-col.pb-0(cols="12")
                h1.title Example
            v-col.pb-0(cols="12")
                textarea.pa-2(:style="exampleArea" readonly)
                    | tor-codeblock(language="pug")
                    |   | tor-field-text(
                    |   |     label="Un premier texte"
                    |   | )
            v-col.pb-0(cols="12")
                h1.title Render
            v-col.pb-0(cols="12")
                tor-codeblock(language="pug")
                    | tor-field-text(
                    |   label="Un premier texte"
                    | )
</template>

<script>
    export default {
        name: 'OthersCodeblockPage',

        data: () => ({
            wiki: {
                props: {
                    language: {
                        type: 'String',
                        required: true,
                        description: "Langage de programmation",
                    }
                }
            }
        }),
        computed: {
            exampleArea () {
                return {
                    width: '100%',
                    minHeight: '112px',
                    maxHeight: '112px',
                    color: '#ffffff',
                    backgroundColor: '#272822',
                }
            }
        }
    }
</script>
