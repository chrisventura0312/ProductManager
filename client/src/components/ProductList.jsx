import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { product, setProduct } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    }, [setProduct]);

    return (
        <div className="container mt-5">
            <h2>Product List</h2>
            <div className="row">
                {product?.map((product, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img
                                src="https://via.placeholder.com/150"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Price: ${product.price}</p>
                                <p className="card-text">{product.description}</p>
                                <Link to={`/product/${product._id}`} className="btn btn-primary"> View </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
