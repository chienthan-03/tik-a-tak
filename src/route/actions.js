import actionController from '../controllers/action'
import express from 'express'
const router = express.Router()

router.post('/delete-user/:userId', actionController.delete)
router.post('/update', actionController.update)
router.get('/detail/user/:userId', actionController.deltals)
router.get('/edit-user/:userId', actionController.edit)

module.exports = router 