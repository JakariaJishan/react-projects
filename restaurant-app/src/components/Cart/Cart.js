import React from "react";
import { connect } from "react-redux";
import { decrementCart, incrementCart, removeFromCart } from "../../Redux/Actions/Actions";
const Cart = (props) => {
  const { cart, removeFromCart, incrementCart,decrementCart } = props;
  let totalPrice = 0;
  let cartPrices = cart.map((ele) =>  ele.price * ele.quantity);
  for (let i = 0; i < cartPrices.length; i++) {
    const element = cartPrices[i];
    totalPrice = totalPrice + element;
  }
  return (
    <div>
      this is cart {totalPrice.toFixed(2) }
      {cart.map((pd) => (
        <div key={pd.cartId}>
          <h1>{pd.name}</h1>
          <p>{pd.price}</p>
          <p>{pd.price * pd.quantity}</p>
          <button onClick={() => decrementCart(pd.id, pd.quantity)}>-</button>
          <span>{pd.quantity}</span>
          <button onClick={() => incrementCart(pd.id, pd.quantity)}>+</button>
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
  incrementCart: incrementCart,
  decrementCart: decrementCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
