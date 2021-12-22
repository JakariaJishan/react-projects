import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      
      <Link to='/preview' >this is cart {cart.length}</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
