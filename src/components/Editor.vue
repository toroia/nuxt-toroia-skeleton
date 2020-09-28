<template lang="pug">
    client-only
        tiptap-vuetify(:extensions="extensions")
</template>

<script>
    import {
        TiptapVuetify,
        // Heading,
        // Bold,
        // Italic,
        // Strike,
        // Underline,
        // Code,
        // Paragraph,
        // BulletList,
        // OrderedList,
        // ListItem,
        // Link,
        // Blockquote,
        // HardBreak,
        // HorizontalRule,
        History
    } from "tiptap-vuetify"

    export default {
        components: { TiptapVuetify },
        data: () => ({
            extensions: [
                History,
                // Blockquote,
                // Link,
                // Underline,
                // Strike,
                // Italic,
                // ListItem,
                // BulletList,
                // OrderedList,
                // [
                //     Heading,
                //     {
                //         options: {
                //             levels: [1, 2, 3]
                //         }
                //     }
                // ],
                // Bold,
                // Link,
                // Code,
                // HorizontalRule,
                // Paragraph,
                // HardBreak
            ],
        })
    };
</script>
