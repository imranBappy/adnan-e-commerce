const products = [];

for (let i = 1; i <= 100; i++) {
    const product = {
        id: `p${i}`,
        name: `Product Name ${i}`,
        category: "Category",
        price: Math.floor(Math.random() * 100) + 10,
        description: `Description for Product ${i}`,
        image: `https://picsum.photos/id/${i}/200/300`,

    };
    products.push(product);
}

module.exports = products;