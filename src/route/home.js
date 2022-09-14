import homeController from '../controllers/home'
import express from 'express'

const router = express.Router()

router.get('/home', homeController.show)
router.post('/create-new-user', homeController.create)  
router.get('/', homeController.show)

module.exports = router