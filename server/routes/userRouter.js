const Router = require('express')
const router = new Router()
const userController = require('../controllers').userControllers
const authMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware(roles.USER_ADMIN), userController.check)

module.exports = router
