const ApiError = require('../error/errorHandlers')

class UserControllers {

    async registration(req, res) {

    }

    async login(req, res) {

    }


    async check(req, res, next) {
        const { id } = req.query

        if(!id) {
            next(ApiError.badRequest('Отсутствует ID'))
            return
        }

        res.json(id)
    }


} 


module.exports = new UserControllers()