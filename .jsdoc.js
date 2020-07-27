module.exports = {
    plugins: [
        'node_modules/jsdoc-vuejs',
        // 'plugins/markdown'
    ],
    source: {
        include: [
            'src/components/',
            // 'README.md'
        ],
        includePattern: '\\.(vue|js)$'
    },
    opts: {
        encoding: 'utf8',
    }
}
