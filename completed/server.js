const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') res.end('Welcome to Homepage')
  if (req.url === '/about') res.end('Here is our about page')

  res.end(
    `<h1> Sorry, page does not exist on this website</h1> <br/> <a href='/'>Home</a>`
  )
})

server.listen(5000, (PORT = 5000) => {
  console.log(`server running on port : ${PORT}`)
})
