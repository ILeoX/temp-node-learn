const http = require('http')
const { readFileSync, readdirSync } = require('fs')

const homepage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  res.write(homepage)

  res.end()
})

server.listen(5000, () => {
  console.log(`Server started on port: 5000`)
})
