const Router = require('express')
const router = new Router()
const {cotygoriesControllers} = require('../controllers')
const checkMiddleware = require('../middleware/authMiddleware')

router.get('/', cotygoriesControllers.getAll)
router.post('/', checkMiddleware('ADMIN'), cotygoriesControllers.create)
router.delete('/', checkMiddleware('SUPER'), cotygoriesControllers.delete)


module.exports = router 