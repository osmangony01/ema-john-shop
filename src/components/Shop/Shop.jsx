import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    console.log(products)
    const handleAddToCart = (product) =>{
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart />
            </div>
        </div>
    );
};

export default Shop;