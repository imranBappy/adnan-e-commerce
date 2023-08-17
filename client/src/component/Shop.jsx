import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div >
            <Navbar />
            <div className="container mt-5">
                <h1>Shop </h1>
                <div className="row gap-5">
                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;