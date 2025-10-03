
const swaggerJSDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 5000
const swaggerOptions = swaggerJSDoc({
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'My Express API',
        version: '1.0.0',
        description: 'A sample API documented with Swagger',
      },
      servers: [
        {
          url: `http://localhost:${PORT}`, // Adjust to your server URL
        },
      ],
      components: {
        responses: {
          BadRequest: {
            description: '400 Bad Request — Некорректный запрос — не хватает обязательных полей или неверный формат',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Email and password are required',
                    },
                    errors: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                      example: ['email is required', 'password must be at least 6 characters'],
                    },
                  },
                },
              },
            },
          },
          Unauthorized: {
            description: '401 Unauthorized — Не авторизован — неверные учетные данные или отсутствует токен',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Invalid email or password',
                    },
                  },
                },
              },
            },
          },
          Forbidden: {
            description: '403 Forbidden — Доступ запрещен — недостаточно прав',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'You do not have permission to access this resource',
                    },
                  },
                },
              },
            },
          },
          NotFound: {
            description: '404 - Not found: Ресурс не найден',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'User not found',
                    },
                  },
                },
              },
            },
          },
          ServerError: {
            description: '500 Internal server error - Внутренняя ошибка сервера',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Internal Server Error',
                    },
                  },
                },
              },
            },
          },
          Conflict: {
            description: '409 Conflict — Конфликт: например, пользователь с таким email уже существует',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorModel',
                },
              },
            },
          },
  
        },
      },
    },
    apis: ['./routes/*.js'],

});

module.exports = { swaggerOptions }