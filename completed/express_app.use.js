const express = require('express')
const app = express()

const logger = require('./logger')

//app.use('api/', logger)

app.use('api/', logger)

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
