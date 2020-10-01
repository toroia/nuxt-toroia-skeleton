<!--suppress JSUnresolvedVariable, JSUnusedGlobalSymbols, JSUnresolvedFunction, JSUnusedLocalSymbols -->
<template lang="pug">
    v-autocomplete(
        :search-input.sync="search" @change="change" @click:clear="clear" return-object
        v-bind="$attrs" v-on="$listeners" clearable hide-no-data :readonly="readonly"
        :items="items" :loading="loading" :item-text="itemText" :value="value"
    )
        slot(v-for="(_, name) in $slots" :name="name" :slot="name")
        template(v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData")
            client-only
                slot(:name="name" v-bind="slotData")
</template>

<script>
    export default {
        name: 'TorFieldAutocomplete',
        props: {
            value: {},
            api: {
                required: true
            },
            itemText: {
                type: String,
                default: 'text'
            },
            filled: {
                type: Boolean,
                default: true
            }
        },
        data: () => ({
            loading: false,
            readonly: false,
            search: undefined,
            items: [],
            timer: null
        }),
        watch: {
            value: {
                handler(value) {
                    if (value) {
                        this.readonly = true
                        this.search = value[this.itemText]
                        this.items.push(value)
                    }
                },
                immediate: true,
                deep: true
            },
            api: {
                handler() {
                    clearTimeout(this.timer)
                    this.loading = true

                    this.apiUrl()
                },
                deep: true
            },
            search(search) {
                if (!search || search.length < 3) return
                if (this.loading || search === this.value) return
                this.loading = true

                this.timer = setTimeout(() => {
                    this.apiUrl(search)
                }, 500)
            }
        },
        computed: {
        },
        methods: {
            change(event) {
                this.$emit('input', event)
                event && setTimeout(() => (this.readonly = true), 500)
            },
            clear() {
                this.readonly = false
            },
            apiUrl(search = '') {
                if (typeof this.api === 'object') {
                    let verb = this.api.verb || 'get'
                    if (verb.toLowerCase() === 'get') {
                        if (!search) {
                            this.loading = false
                            return
                        }

                        let url = [
                            this.api.url.replace(/^\/|\/$/g, ''),
                            encodeURIComponent(search)
                        ].join('/')

                        // noinspection JSUnresolvedFunction
                        return this.$axios.$get(url)
                            .then(res => this.items = res.data)
                            .finally(() => this.loading = false)
                    } else if (verb.toLowerCase() === 'post') {
                        let params = this.api.params || {}
                        let searchKey = this.api.searchKey || 'search'
                        let formData = {...params}
                        formData[searchKey] = search

                        // noinspection JSUnresolvedFunction
                        return this.$axios.$post(this.api.url, formData)
                            .then(res => this.items = res.data)
                            .finally(() => this.loading = false)
                    }
                }

                if (!search) {
                    this.loading = false
                    return
                }

                let url = [
                    this.api.replace(/^\/|\/$/g, ''),
                    encodeURIComponent(search)
                ].join('/')

                return this.$axios.$get(url)
                    .then(res => this.items = res.data)
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
