const Router = require('express')
const router = new Router()
const {cotygoriesControllers} = require('../controllers')

router.get('/', cotygoriesControllers.getAll)
router.post('/', cotygoriesControllers.create)


module.exports = router