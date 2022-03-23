const express = require('express')
const app = express()

//req => middleware => res
//middleware is a function before the response

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()

  console.log(method, url, time)
  next() //pass to the next middle ware
}

app.get('/', logger, (req, res) => {
  res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('Server started at PORT: 5000')
})
