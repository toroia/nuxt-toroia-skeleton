<template lang="pug">
    v-row
        v-col(cols="12")
            h1.title FileUpload
        v-col(cols="12")
            client-only
                tor-field-file-upload(label="Insérer un fichier (je suis multiple)" multiple)
</template>

<script>
    export default {
        name: "FileUpload",
    }
</script>
