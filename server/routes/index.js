const Router = require('express')
const router = new Router()

const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const categoriesRouter = require('./categoriesRouter')

router.use('/user', userRouter)
router.use('/brands', brandRouter)
router.use('/products', productRouter)
router.use('/categories', categoriesRouter)

module.exports = router
