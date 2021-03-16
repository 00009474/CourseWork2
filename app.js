const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const app = express()

const port = 3000 

// connect to MongoDB
const dbSource = 'mongodb+srv://student00009474:00009474@todoapp.rfilj.mongodb.net/todo-db?retryWrites=true&w=majority'
mongoose.connect(dbSource, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => console.log('connected to db'))
    .catch ((err) => console.log(err))

const indexRoutes = require('./routes/index')
app.use ('/', indexRoutes)

app.use('/assets', express.static('./public'))

app.use (bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')


app.listen(port, () => console.log(`Server Started ${port}.` ));

