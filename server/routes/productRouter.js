const Router = require('express')
const router = new Router()
const { productControllers } = require('../controllers')

const authMiddleware = require('../middleware/authMiddleware')
const roles = require('../constants/roles')

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Получение всех продуктов
 *     description: Получение всех продукто
 *     tags: [PRODUCT]
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
router.get(
    '/',
    authMiddleware([Object.values(roles)]),
    productControllers.getAll
)
router.get(
    '/:id',
    authMiddleware([Object.values(roles)]),
    productControllers.getOne
)
router.post(
    '/',
    authMiddleware([Object.values(roles)]),
    productControllers.create
)

module.exports = router
