const { Cotygories } = require('../models/models')

class CotygoryiesControllers {
    async getAll(req, res) {
        const types = await Cotygories.findAll()

        return res.json(types)
    }

    async create(req, res) {
        const { name } = req.body

        const type = await Cotygories.create({ name })

        return res.json(type)
    }

    async delete(req, res) {
        const { name } = req.body
        const cotygory = await Cotygories.findOne({ where: { name } })
        await cotygory.destroy()

        return res.json({ message: `${name} успешно удален` })
    }
}

module.exports = new CotygoryiesControllers()
