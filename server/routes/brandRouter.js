const Router = require('express')
const router = new Router()
const brandControllers = require('../controllers').brandControllers
const authMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

router.get(
    '/',
    authMiddleware([...Object.values(roles)]),
    brandControllers.getAll
)
router.post(
    '/',
    authMiddleware([...Object.values(roles)]),
    brandControllers.create
)

module.exports = router
