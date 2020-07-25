const path = require('path')
const express = require('express')
const Bird = require('./models/bird')
const birdRouter = require('./routers/bird')
const publicDirectory = path.join(__dirname, '../public')
require('./mongoose')

 
const app = express()
app.use(express.static(publicDirectory))
app.use(express.json())
app.use(birdRouter)
 
app.listen(process.env.PORT, () => {
    console.log('Server is running.')
})