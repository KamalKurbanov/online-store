const Router = require('express')
const router = new Router()
const {typeControllers} = require('../controllers')

console.log({typeControllers})
router.get('/', typeControllers.getAll)
router.post('/', typeControllers.create)


module.exports = router