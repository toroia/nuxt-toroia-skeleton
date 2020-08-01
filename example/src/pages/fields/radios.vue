<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Radio buttons
        v-col(cols="6")
            v-radio-group(v-model="radioModel" column)
                tor-field-radios(
                    v-for="item in items" :key="item.text"
                    :label="item.text" :value="item.value"
                )
            span(v-if="radioModel") La valeur sélectionnée est {{radioModel}}
            span(v-if="!radioModel") Pas de valeur sélectionnée
</template>

<script>
    export default {
        name: "MyRadio",
        data(){
            return {
                items: [
                    {
                        text: "Radio Un",
                        value: 1
                    },
                    {
                        text: "Radio Deux",
                        value: 2
                    },
                    {
                        text: "Radio Trois",
                        value: 3
                    },
                ]
            }
        },
        props: {
            radioModel: null
        }
    }
</script>

