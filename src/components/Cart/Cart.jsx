import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <h3>Order summary</h3>
            <p>Total Price: $</p>
            <p>Total Shipping charge: $</p>
            <p>Tax: $</p>
            <h5>Grand Total: $</h5>
        </div>
    );
};

export default Cart;