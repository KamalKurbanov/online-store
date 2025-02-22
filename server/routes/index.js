const Router = require('express')
const router = new Router()

const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)



module.exports = router