'use strict'

export default class {
    constructor(endpoint = '/', options = {}) {
        this.state = () => ({
            endpoint,
            options,
            loading: false,
            processing: false,
            accumulator: false,
            selected: [],
            page: 1,
            rows: [],
            validations: [],
            action: null,
            search: {},
            data: {},
            sort: {},
            filters: {},
            itemsPerPage: 15,
            total: 0
        })

        this.getters = {
            getEndpoint: state => state.endpoint,
            getOptions: state => state.options,
            getPage: state => state.page,
            getRows: state => state.rows,
            getSelected: state => state.selected,
            getValidations: state => state.validations,
            hasLoading: state => !!state.loading,
            hasProcessing: state => !!state.processing,
            hasAccumulator: state => !!state.accumulator,
            getItemsPerPage: state => state.itemsPerPage,
            getData: state => state.data,
            getSort: state => state.sort,
            getFilters: state => state.filters,
            getTotal: state => state.total
        }

        this.mutations = {
            UPDATE_ROWS(state, payload) {
                state.accumulator = false
                state.page = payload.page || 1
                state.rows = payload.rows || []
                state.total = payload.total || 0
            },

            UPDATE_PAYLOAD(state, payload) {
                state.loading = false
                state.action = 'read'
                state.data = payload.data
            },

            START_ACCUMULATOR(state, payload) {
                state.accumulator = true

                if (payload) {
                    state.page = payload.page || 1
                    state.itemsPerPage = payload.itemsPerPage || 15
                    state.sort = payload.sort || {}
                    state.filters = payload.filters || {}
                }
            },

            START_LOADING(state, payload) {
                state.loading = true
                state.validations = []

                if (payload) {
                    state.selected = [payload.item]
                }
            },

            STOP_ACCUMULATOR(state) {
                state.accumulator = false
            }
        }

        this.actions = {
            async searchAction({commit, state}, data = {}) {
                let payload = {
                    page: state.page,
                    itemsPerPage: state.itemsPerPage,
                    filters: state.filters,
                    sort: state.sort
                }

                commit('START_ACCUMULATOR', payload)

                try {
                    let res = await this.$axios.$post(`${state.endpoint}/search`, payload)
                    commit('UPDATE_ROWS', res)

                    return Promise.resolve(res)
                } catch (err) {
                    commit('STOP_ACCUMULATOR')

                    return Promise.reject(err)
                }
            }
        }
    }
}
