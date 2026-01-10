const { Categories } = require('../models/models')

class CategoriesControllers {
    async getAll(req, res) {
        const types = await Categories.findAll()

        return res.json(types)
    }

    async create(req, res) {
        const { name } = req.body

        const type = await Categories.create({ name })

        return res.json(type)
    }

    async delete(req, res) {
        const { name } = req.body
        const category = await Categories.findOne({ where: { name } })
        await category.destroy()

        return res.json({ message: `${name} успешно удален` })
    }
}

module.exports = new CategoriesControllers()
