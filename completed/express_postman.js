const express = require('express')
const app = express()
let { people } = require('./data')

//static assets
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

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

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }

  res.status(201).send({ success: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => {
    person.id === Number(id)
    return id
  })

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: 'That ID does not exist' })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person.name
  })

  res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server running on PORT 5000')
})
