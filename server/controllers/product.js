const {Product} = require('../models/models')
const uuid =  require('uuid')
const path = require('path')
const ApiError = require('../error/errorHandlers')

class ProductControllers {

    async getAll(req, res) {
        const products = await Product.findAll()

        return res.json(products)
    }

    async create(req, res, next) {
        try {
            const {id, name, price} = req.body
            const {img} = req.files
            
            const fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({id, name, price, img: fileName})
            
            return res.json(product)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res) {
        const {id} = req.body

        const product = await Product.findOne({
            where: { id }
        })

        return res.json(product)
    }

} 


module.exports = new ProductControllers()