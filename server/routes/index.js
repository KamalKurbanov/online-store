const Router = require('express')
const router = new Router()

const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/products', productRouter)
router.use('/type', typeRouter)


module.exports = router