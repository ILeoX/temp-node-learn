//https://course-api.com/react-tabs-project
//http://hn.algolia.com/api/v1/items/

const express = require('express')
const { products } = require('./data.js')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1> Home Page </h1> <a href="api/products">Products </a>')
})

// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((item) => {
//     const { _id, name, email } = item

//     return { _id, name, email }
//   })
//   res.json(newProducts)
// })

// app.get('/api/products/:productID', (req, res) => {
//   const { productID } = req.params

//   const singleProduct = products.find(
//     (product) => product._id === productID.toString()
//   )
//   if (!singleProduct) {
//     return res.status(404).send('Product Does not Exist')
//   }
//   res.json(singleProduct)
// })

app.get('/api/v1/query', (req, res) => {
  //console.log(req.query)

  const { search, limit } = req.query

  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(
        search.toUpperCase() || search.toLowerCase()
      )
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length < 1)
    //res.status(200).send('No Products Matched Your Search')
    return res.status(200).json({ success: true, data: [] })

  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server listening on PORT: 5000')
})
