const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const first = await readFile('./content/text.txt', 'utf-8')
    await writeFile('./content/reply.txt', `Hello World! ${first}\n`, {
      flag: 'a',
    })

    console.log(first)
  } catch (err) {
    console.log(err)
  }
}

start()
