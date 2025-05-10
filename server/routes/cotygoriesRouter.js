const Router = require('express')
const router = new Router()
const { cotygoriesControllers } = require('../controllers')
const checkMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

router.get('/', cotygoriesControllers.getAll)
router.post('/', checkMiddleware(roles.ADMIN), cotygoriesControllers.create)
router.delete('/', checkMiddleware(roles.SUPER), cotygoriesControllers.delete)

module.exports = router
