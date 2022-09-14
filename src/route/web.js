const routerHome = require('./home');
const routerActions = require('./actions');
const routerUpload = require('./upload');

function initWebRouter(app) {
    app.use('/', routerHome)
    app.use('/', routerActions)
    app.use('/upload', routerUpload)
}

export default initWebRouter