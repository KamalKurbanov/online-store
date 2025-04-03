const {Brand} = require('../models/models')

class BrandControllers {

    async getAll(req, res) {
        const brands = await Brand.findAll()

        return res.json(brands)
    }

    async create(req, res) {
        const {id, name} = req.body
        const brand = await Brand.create({ id, name })
        return res.json(brand)
    }

} 


module.exports = new BrandControllers()