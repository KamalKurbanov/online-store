const Router = require('express')
const router = new Router()
const { productControllers } = require('../controllers')

const authMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

router.get(
    '/',
    authMiddleware([Object.values(roles)]),
    productControllers.getAll
)
router.get(
    '/:id',
    authMiddleware([Object.values(roles)]),
    productControllers.getOne
)
router.post(
    '/',
    authMiddleware([Object.values(roles)]),
    productControllers.create
)

module.exports = router
