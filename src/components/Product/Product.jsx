import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img, seller, ratings} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="img" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=> handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;