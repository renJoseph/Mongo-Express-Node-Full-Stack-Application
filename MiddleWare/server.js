require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection
const usersRouter = require('./routes/users')
const compsRouter = require('./routes/comps')

app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.use('/users', usersRouter)

app.use('/comps', compsRouter)

app.listen(8080, () => console.log('Server started'))