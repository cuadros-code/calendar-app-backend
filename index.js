const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectionDB = require('./database/config')

const app = express()

connectionDB()

app.use(cors())

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.use('/api/events', require('./routes/calendar'))

app.listen(process.env.PORT, () => {
    console.log(`server on port ${process.env.PORT}`)
})