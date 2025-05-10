const ApiError = require('../error/errorHandlers')
const { User, Basket } = require('../models/models')
const cryptoHash = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
    })
}

class UserControllers {
    async registration(req, res, next) {
        const { password, email, role } = req.body

        if (!password || !email) {
            return next(ApiError.badRequest('Некорректны пароли или email'))
        }

        const candidate = await User.findOne({ where: { email } })

        if (candidate) {
            return next(
                ApiError.badRequest('Пользователь с таким email уже существует')
            )
        }

        const hashPassword = await cryptoHash.hash(password, 5)

        const user = await User.create({ role, email, password: hashPassword })
        await Basket.create({ userId: user.id })

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }

        const comparePassword = cryptoHash.compareSync(password, user.password)

        if (!comparePassword) {
            return next(
                ApiError.internal('Пользователь указан неверный пароль')
            )
        }

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }

    // eslint-disable-next-line no-unused-vars
    async check(req, res, next) {
        return res.json({ message: 'ok!' })
    }
}

module.exports = new UserControllers()
