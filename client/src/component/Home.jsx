
import Product from './Product';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const Home = ({ handleCard, cart }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <Navbar cart={cart} />
            <div className="container mt-5">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{ height: 500 }} src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: 500 }} src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: 500 }} src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Products */}
            <div className="container mt-5">
                <div className="row gap-5">
                    {
                        products.map(product => <Product handleCard={handleCard} key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;