const express = require('express');
const products = require('./data');
var cors = require('cors')


const app = express();

// GET POST PUT DELETE PATCH

app.use(cors({
    origin: 'http://localhost:5173',
}))

app.get('/', (req, res) => {
    res.json(products)
})

app.get('/home', (req, res) => {
    // const products10 = products.filter(product => product.price >= 90)

    const products10 = []

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price >= 90) {
            products10.push(product)
        }
    }

    res.json(products10)
})



app.listen(5000, () => {
    console.log('Server is running on port 5000');
})