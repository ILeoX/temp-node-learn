const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.all(`*`, (req, res) => {
  res.status(404).send('404: resource not found')
})

app.listen(5000, () => {
  console.log('Server is listening on PORT: 5000')
})
