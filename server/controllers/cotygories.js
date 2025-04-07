const {Cotygories} = require('../models/models')

class CotygoryiesControllers {

    async getAll(req, res) {
    
        const types = await Cotygories.findAll()

        return res.json(types)
    }

    async create(req, res) {
        const {name} = req.body
        
        const type = await Cotygories.create({name})

        return res.json(type)
    }

} 


module.exports = new CotygoryiesControllers()