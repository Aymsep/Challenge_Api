const express = require('express')
const server = express()
const port = 3000
const data = require('./Modals/data')




server.use(express.json())

server.get('/products',(req, res) => {
    res.json(data)
})



server.get('/products/search',(req, res) => {
    const {minPrice, maxPrice} = req.query
    let copyData = [...data]
    let newArray = copyData.filter(item=>{
        return item.price > parseInt(minPrice) && item.price < parseInt(maxPrice) 
    })
    res.json(newArray)
})



server.post('/products/',(req, res) => {
    const newProduct = req.body
    data.push(newProduct)
    res.json(data)
})



server.put('/products/:id',(req, res) => {
    const {id} = req.params
    const {price,name} = req.body
    let copyData = [...data]
    const updatedProductId = copyData.forEach(item=>{
        if(item.id == id){
            item.price = price
            item.name = name
            return item
        }
        return item
    })
    res.json({
        actualData:data,
    })
   
})



server.get('/products/:id',(req, res) => {
    let copyData = [...data]
    const {id} = req.params
    const newArray = copyData.filter(el=>el.id == id)
    res.status(200).json(newArray)
})

server.delete('/products/:id',(req, res) => {
    const {id} = req.params
    const newArray = [...data].filter(item=>item.id != id)
    res.json(newArray)
})











server.listen(port,()=>{
    console.log('listening on port '+port)
})