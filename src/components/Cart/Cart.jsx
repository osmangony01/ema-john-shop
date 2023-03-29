import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <h3>Order summary</h3>
            <p>Total Price: $</p>
            <p>Total Shipping charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;