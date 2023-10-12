import React, { useState } from 'react'
import axios from 'axios'


const ProductForm = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mb2">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group mb2">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default ProductForm;