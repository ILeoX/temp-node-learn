const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/text.txt', 'utf-8')

const newFile = writeFileSync(
  './content/result.txt',
  `Here is the result: ${first} \n`,
  { flag: 'a' },
  (err, res) => {
    if (err) console.log(err)
  }
)

const second = readFileSync('./content/result.txt', 'utf-8')

console.log(first, second)
