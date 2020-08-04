<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title Colorpicker
        v-col(cols="12")
            tor-field-colorpicker(v-model="myColor")
        v-col(cols="12")
            span(v-if="!myColor") Sélectionnez une couleur
            span(v-if="myColor") La couleur actuelle en hexadécimal est {{myColor.hex}}
</template>

<script>
    export default {
        name: "myColor",
        data() {
            return {
                myColor: null
            }
        }
    }
</script>
