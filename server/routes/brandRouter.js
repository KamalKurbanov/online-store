const Router = require('express')
const router = new Router()
const brandControllers = require('../controllers').brandControllers


console.log('we here', brandControllers)


router.get('/', brandControllers.getAll)
router.post('/', brandControllers.create)


module.exports = router