const express = require('express')
const router = express.Router()

let { people } = require('./data')

router.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

router.post('/api/postman/people', (req, res) => {
  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }

  res.status(201).send({ success: true, data: [...people, name] })
})

router.put('/api/people/:id', (req, res) => {
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

module.exports = router
