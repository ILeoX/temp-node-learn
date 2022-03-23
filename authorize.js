const authorize = (req, res, next) => {
  const { user } = req.query

  if (user === 'Marie') {
    req.user = { name: 'Marie', id: 3 }
    next()
  } else {
    res.status(401).send('Unauthorized')
    next()
  }

  console.log('Hello Authorize')
  next()
}

module.exports = authorize
