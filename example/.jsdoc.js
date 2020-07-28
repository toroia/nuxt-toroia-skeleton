module.exports = {
    plugins: [
        'node_modules/jsdoc-vuejs'
    ],
    source: {
        include: [
            '../src/components/'
        ],
        includePattern: '\\.(vue|js)$'
    },
    opts: {
        encoding: 'utf8'
    }
}
