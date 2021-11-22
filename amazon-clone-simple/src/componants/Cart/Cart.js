import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart.length)
    let cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice = totalPrice+element.price;
    }
    let shipping = 0;
     if(totalPrice > 200){
        shipping = 50.99;
    }else if(totalPrice>100){
        shipping = 39.99;
    }
    else if(totalPrice>50){
        shipping = 12.99;
    }
    let total = (totalPrice+shipping).toFixed(2);
    return (
        <div>
            <h1>order summery</h1>
            <p>items ordered: {cart.length}</p>
            <p>shipping charge: ${shipping}</p>
            <p className="total">total price: ${total}</p>
            <button className="cart-btn" ><FontAwesomeIcon icon={faComment} /> review your order</button>
        </div>
    );
};

export default Cart;