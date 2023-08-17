
const Product = (props) => {
    const { name, price, description, image } = props.product

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img height={150} src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">Price : {price}</h6>

                <p className="card-text">{description}</p>
                <button onClick={() => props.handleCard(props.product)} className="btn btn-primary">Add TO Cart</button>
            </div>
        </div>
    );
};

export default Product;