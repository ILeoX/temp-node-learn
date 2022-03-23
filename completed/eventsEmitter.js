const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`Data Received with ID ${id}: ${name}`)
})

customEmitter.on('response', () => {
  console.log(`Some other logic ${0 + 0}`)
})

customEmitter.on('response', () => {
  console.log(`Another Logic aound the same event ${0 + 0}`)
})

customEmitter.emit('response', 'john', 34)
