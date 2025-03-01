const {Type} = require('../models/models')

class TypeControllers {

    async getAll(req, res) {
    }

    async create(req, res) {
        const {name} = req.body
        console.log('we here 123', name)
        
        const type = await Type.create({name})

        return res.json(type)
    }

} 


module.exports = new TypeControllers()