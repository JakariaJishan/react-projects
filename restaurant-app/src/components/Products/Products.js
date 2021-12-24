import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Actions/Actions";
import Shop from "../Shop/Shop";

const Products = (props) => {
  const { product, addToCart, cart } = props;
  return (
    <div>
      products
      {product.map((pd) => (
        <Shop key={pd.id} products={pd} cart={cart} addToCart={addToCart}></Shop>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products,
    cart: state.cart
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
