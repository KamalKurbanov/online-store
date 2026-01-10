const Router = require('express')
const router = new Router()
const { categoriesControllers } = require('../controllers')
const checkMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

router.get('/', categoriesControllers.getAll)
router.post('/', checkMiddleware(roles.ADMIN), categoriesControllers.create)
router.delete('/', checkMiddleware(roles.SUPER), categoriesControllers.delete)

module.exports = router
