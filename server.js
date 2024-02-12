const express = require('express')
const server = express()
const port = 3000
const productRouter = require('./Routes/Produts')

const {color:{red,green}} = require('./Config/config')


server.use(express.json())


server.use('/products',productRouter)









server.listen(port,()=>{
    console.log(green,'listening on port '+port)
})