const ApiError = require('../error/errorHandlers')

class UserControllers {

    async registration(req, res) {
        const { login, password, email } = req.query

        if(!login) {
            next(ApiError.badRequest('Отсутвует login'))
        }

        if(!password) {
            next(ApiError.badRequest('Отсутвует password'))
        }

        if(!email) {
            next(ApiError.badRequest('Отсутвует email'))
        }
    }

    async login(req, res, next) {
        const { login, password } = req.query

        if(!login) {
            next(ApiError.badRequest('Отсутвует login'))
        }

        if(!password) {
            next(ApiError.badRequest('Отсутвует password'))
        }
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