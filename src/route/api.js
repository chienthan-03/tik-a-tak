import express from 'express'
import apiController from '../controllers/api'
let router = express.Router()

function initApiRoute(app) {
    router.get('/user', apiController.getAllUsers)
    router.post('/create', apiController.createAllUsers)
    router.put('/edit', apiController.editAllUser)
    router.delete('/delete/:id', apiController.deleteAllUsers)
    return app.use('/api/user', router)
}

export default initApiRoute