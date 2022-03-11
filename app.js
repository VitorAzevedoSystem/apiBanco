const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
var consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app)

const server = app.listen(8080, () => {
    const port = server.address().port
    console.log('Express started at http://localhost:8080')
})