const data = require('../Modals/data')



exports.GetAllProducts = (req,res) => {
    res.json(data)
}

exports.SearchProducts = (req,res) => {
    const {minPrice, maxPrice} = req.query
    let copyData = [...data]
    let newArray = copyData.filter(item=>{
        return item.price > parseInt(minPrice) && item.price < parseInt(maxPrice) 
    })
    res.json(newArray)
}

exports.CreateProduct = (req,res) => {
    const newProduct = req.body
    data.push(newProduct)
    res.json(data)
}