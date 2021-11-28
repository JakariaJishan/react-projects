import React from 'react';
import image from '../../images/Udemy_logo.svg.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={image} alt="" />
        </div>
    );
};

export default Header;