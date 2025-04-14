const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes')
const errorHandlerMiddleware = require('./middleware/errorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

const sequelize = require('./db')

const models = require('./models/models')

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'hello world' })
})

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




