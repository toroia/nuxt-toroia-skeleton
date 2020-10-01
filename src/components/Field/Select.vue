<!--suppress JSUnresolvedVariable, JSUnresolvedFunction, NpmUsedModulesInstalled, JSUnusedLocalSymbols -->
<template lang="pug">
    v-select(
        v-bind="$attrs" v-on="$listeners"
        :items="getItems" :loading="loading"
    )
        slot(v-for="(_, name) in $slots" :name="name" :slot="name")
        template(v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData")
            client-only
                slot(:name="name" v-bind="slotData")
</template>

<script>
    export default {
        name: 'TorFieldSelect',
        props: {
            api: {},
            items: {
                type: Array,
                default: () => ([])
            },
            filled: {
                type: Boolean,
                default: true
            }
        },
        data: () => ({
            loading: false,
            apiItems: []
        }),
        watch: {
            api: {
                handler(api, oldApi) {
                    if (!_.isEqual(api, oldApi)) {
                        // TODO deep target
                        let target = typeof this.api === 'object' && this.api.target
                            ? this.api.target
                            : 'data'

                        this.apiUrl()
                            .then(res => this.apiItems = res[target])
                            .finally(() => this.loading = false)
                    }
                },
                immediate: true,
                deep: true
            }
        },
        computed: {
            getItems () {
                return this.api
                    ? this.apiItems
                    : this.items
            }
        },
        methods: {
            apiUrl () {
                this.loading = true
                if (typeof this.api === 'object') {
                    let verb = this.api.verb || 'get'
                    if (verb.toLowerCase() === 'get') {
                        let url = [this.api.url.replace(/^\/|\/$/g, '')]
                        if (this.api.params) {
                            Object.keys(this.api.params).forEach(key => {
                                url.push(encodeURIComponent(this.api.params[key]))
                            })
                        }

                        return this.$axios.$get(url.join('/'))
                    } else if (verb.toLowerCase() === 'post') {
                        let params = this.api.params || {}
                        let formData = {...params}

                        return this.$axios.$post(this.api.url, formData)
                    }
                }

                return this.$axios.$get(this.api.replace(/^\/|\/$/g, ''))
            }
        }
    }

</script>
