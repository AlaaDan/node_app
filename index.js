const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const insultsRouter = require('./routes/insults.js')

app.use(express.json())

app.use('/api/insults', insultsRouter);

app.use((request, response, next) => {
    console.log(`In a middle ware with ${request.url} and ${request.method}`)
    next();
})

app.listen(PORT, ()=>{
    console.log(`Server on ${PORT} started`)
})