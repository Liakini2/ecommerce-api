const express = require('express')
const getProducts = require('./getProducts')

const app = express()
app.use(express.json())

const port = 3000


app.get(`/api/products`, getProducts)
app.get('/api/products/:id', getProducts)

app.listen(port, ()=>console.log(`Our server is working on ${port}.`))