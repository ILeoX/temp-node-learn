const { createReadStream } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  const stream = createReadStream('./content/big.txt')

  stream.on('open', () => {
    stream.pipe(res)
  })

  stream.on('error', (err) => {
    res.end(err)
  })
})

server.listen(5000, (PORT = 5000) => {
  console.log(`Server running on PORT: ${PORT}`)
})
