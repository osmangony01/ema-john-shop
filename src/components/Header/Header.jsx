import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src="./images/Logo.svg" alt="" />
            </div>
            <div className='nav-link'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;