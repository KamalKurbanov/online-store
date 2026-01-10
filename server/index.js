const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const fileUpload = require('express-fileupload')
const swaggerUi = require('swagger-ui-express');
const router = require('./routes')
const errorHandlerMiddleware = require('./middleware/errorHandlingMiddleware')
const swaggerOptions  = require('./contracts/swaggerOptions').swaggerOptions

const outputPath = path.join(__dirname, '../contracts/openapi.json');

const PORT = process.env.PORT || 5000

const app = express()

const sequelize = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

fs.writeFileSync(outputPath, JSON.stringify(swaggerOptions, null, 2), 'utf8');

app.use('/api/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
//обработчик ошибок регестрируем последним
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Liten to', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()
