import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let cart = props.cart;
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    totalPrice = totalPrice + element;
  }

  return (
    <div className="cart-price">
      <h1>total price: ${totalPrice.toFixed(2)}</h1>
      <div className="cart-link">
      <a href="https://www.udemy.com/" target="_blank" rel="noreferrer">Checkout</a>

      </div>
    </div>
  );
};

export default Cart;
