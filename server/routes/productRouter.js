const Router = require('express')
const router = new Router()
const producControllers = require('../controllers').producControllers



router.get('/', producControllers.getAll)
router.get('/:id', producControllers.getOne)
router.post('/', producControllers.create)


module.exports = router