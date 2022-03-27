const express = require('express')
const app = express()
const people = require('./people', people)

//static assets
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

app.use('api/people')

app.post('/login', (req, res) => {
  console.log(req.body)

  const { name } = req.body

  if (name) {
    return res.status(201).send({ success: true, person: name })
  } else {
    return res
      .status(400)
      .json({ success: false, msg: 'please privude name value' })
  }
})

app.listen(5000, () => {
  console.log('Server running on PORT 5000')
})
