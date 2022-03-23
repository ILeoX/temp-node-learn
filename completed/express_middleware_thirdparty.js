const express = require('express')
const morgan = require('morgan')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

//app.use('api/', logger)
//using third party middlewares

app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/products', (req, res) => {
  res.send('Products')
})

app.get('/api/v1', (req, res) => {
  res.send('API')
})

app.listen(5000, () => {
  console.log('Server started at PORT: 5000')
})
