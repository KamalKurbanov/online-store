const Router = require('express')
const router = new Router()
const userController = require('../controllers').userControllers
const authMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')


/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management API
 */




router.post('/registration', userController.registration)
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Авторизация пользователя
 *     description: Принимает email и пароль, возвращает JWT-токен при успешной аутентификации.
 *     tags: [USER]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: mySecretPassword123
 *     responses:
 *       200:
 *         description: Успешная авторизация
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT access token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       403:
 *         $ref: '#/components/responses/Forbidden'

 */
router.post('/login', userController.login)
router.get('/auth', authMiddleware(roles.USER_ADMIN), userController.check)

module.exports = router
