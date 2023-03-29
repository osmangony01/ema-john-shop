import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice += product.price*product.quantity;
        totalShipping += product.shipping*product.quantity;
        quantity += product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = tax + totalPrice + totalShipping;

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;