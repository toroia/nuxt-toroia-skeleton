export default function (req, res, next) {
    console.log(req.url)

    const Vuedoc = require('@vuedoc/parser')

    const options = {
        filename: 'test/fixtures/checkbox.vue'
    }

    Vuedoc.parse(options)
        .then((component) => console.log(component))
        .catch((err) => console.error(err))
}
