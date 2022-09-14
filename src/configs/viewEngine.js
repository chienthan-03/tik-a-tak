const partials = require('express-partials')

function configsViewEngine(app) {
    app.set('view engine', 'ejs')
    app.set("views", "./src/views")
    app.use(partials())
}

export default configsViewEngine