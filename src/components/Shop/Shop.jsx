import React from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {


    return (
        <div className='shop-container'>
            <div className='product-container'>

            </div>
            <div className='cart-container'>
                <Cart />
            </div>
        </div>
    );
};

export default Shop;