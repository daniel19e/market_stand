const mongoose = require('mongoose');
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/market', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(err => {
        console.log('mongo connection error')
        console.log(err)
    })

const seedProducts = [
    {
        name: 'Apple',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Broccoli',
        price: 2.99,
        category: 'vegetable'
    },
    {
        name: 'Gouda',
        price: 5.99,
        category: 'cheese'
    },

]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
