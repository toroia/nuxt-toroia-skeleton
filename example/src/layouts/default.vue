<template lang="pug">
    v-app
        v-navigation-drawer(app clipped v-model="active" :permanent="!$vuetify.breakpoint.mobile")
            template(v-for="entry in menu")
                v-subheader(v-html="entry.text")
                v-list-item(
                    v-for="item in entry.list" dense
                    :key="item.to" :to="item.to" nuxt
                )
                    v-list-item-icon
                        v-icon mdi-format-list-bulleted
                    v-list-item-content
                        v-list-item-title(v-html="item.text")
        v-app-bar(fixed app flat dense clipped-left color="primary")
            v-btn.d-md-none(icon @click="active = !active")
                v-icon mdi-menu
            v-toolbar-title.pl-1 Toroia Nuxt Skeleton
        v-main
            v-container.py-0
                nuxt
        v-footer.d-none.d-md-flex(fixed inset app)
            span &copy; {{ new Date().getFullYear() }}
</template>

<script>
    export default {
        name: 'DefaultLayout',
        data: () => ({
            active: false,
            menu: [
                {
                    text: 'Fields',
                    list: [
                        {
                            text: 'Text',
                            to: '/fields/text'
                        },
                        {
                            text: 'Textarea',
                            to: '/fields/textarea'
                        },
                        {
                            text: 'Select',
                            to: '/fields/select'
                        },
                        {
                            text: 'Autocomplete',
                            to: '/fields/autocomplete'
                        },
                        {
                            text: 'Checkbox',
                            to: '/fields/checkbox'
                        },
                        {
                            text: 'Colorpicker',
                            to: '/fields/colorpicker'
                        },
                        {
                            text: 'Datepicker',
                            to: '/fields/datepicker'
                        },
                        {
                            text: 'Fileupload',
                            to: '/fields/fileupload'
                        },
                        {
                            text: 'Switch',
                            to: '/fields/switch'
                        },
                        {
                            text: 'Timepicker',
                            to: '/fields/timepicker'
                        },
                    ]
                },
                {
                    text: 'Comments',
                    list: [
                        {
                            text: 'CommentNew',
                            to: '/comments/commentnew'
                        },
                        {
                            text: 'CommentList',
                            to: '/comments/commentlist'
                        },
                        {
                            text: 'CommentRow',
                            to: '/comments/commentrow'
                        },
                    ]
                },
                {
                    text: 'Others',
                    list: [
                        {
                            text: 'WikiApi',
                            to: '/others/wikiapi'
                        },
                        {
                            text: 'Codeblock',
                            to: '/others/codeblock'
                        },
                    ]
                }
            ]
        })
    }
</script>

<style>
    body::-webkit-scrollbar-thumb {
        background-color: #b34b03;
        outline: 1px solid #b34b03;
    }
</style>
