import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Actions/Actions";
const Cart = (props) => {
  const { cart, removeFromCart, addToCart } = props;

  let totalPrice = 0;
  let cartPrices = cart.map((ele) => ele.price);
  for (let i = 0; i < cartPrices.length; i++) {
    const element = cartPrices[i];
    totalPrice = totalPrice + element;
  }

  return (
    <div>
      this is cart {totalPrice}
      {cart.map((pd) => (
        <div key={pd.cartId}>
          <h1>{pd.name}</h1>
          <p>{pd.price}</p>
          <button onClick={() => removeFromCart(pd.cartId)}>remove</button>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
  addToCart: addToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
