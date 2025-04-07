const Router = require('express')
const router = new Router()

const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const cotygoriesRouter = require('./cotygoriesRouter')

router.use('/user', userRouter)
router.use('/brands', brandRouter)
router.use('/products', productRouter)
router.use('/cotygories', cotygoriesRouter)


module.exports = router