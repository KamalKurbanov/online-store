const {Product} = require('../models/models')
const uuid =  require('uuid')
const path = require('path')
const ApiError = require('../error/errorHandlers')

class ProductControllers {

    async getAll(req, res) {
        const { brandId: brandIdQuery, productId: productIdQuery} = req.query

        const products = await Product.findAll({ raw: true })


        if(!brandIdQuery && productIdQuery) {
            return res.json(products.filter(({ id }) => id === Number(productIdQuery)))    
        }

        if(brandIdQuery && !productIdQuery) {
            return res.json(products.filter(({ brandId }) => brandId === Number(brandId)))    

        }

        if(brandIdQuery && productIdQuery) {
        
            return res.json(products.filter(
                ({brandId, id}) => brandId === Number(brandIdQuery) && id === Number(productIdQuery)))    
        }

        return res.json(products)
    }

    async create(req, res, next) {
        try {
            const {id, name, price, brandId} = req.body
            const {img} = req.files
            
            const fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({id, name, price, img: fileName, brandId})
            
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