const jwt = require('jsonwebtoken')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            return next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]

            if (!token) {
                return res.status(401).json({ message: 'Не авторизован' })
            }

            const decode = jwt.verify(token, process.env.SECRET_KEY)

            const decodeRole = decode?.role

            //TODO для обратной совместимости
            if (typeof roles === 'string' && roles !== decodeRole) {
                res.status(403).json({ message: 'Нет доступа' })
            }

            if (Array.isArray(roles) && !roles.includes(decodeRole)) {
                res.status(403).json({ message: 'Нет доступа' })
            }
            req.user = decode
            next()
        } catch (e) {
            res.status(401).json({ message: 'Не авторизован' })
            console.error(e)
        }
    }
}
