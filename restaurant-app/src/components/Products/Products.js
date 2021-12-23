import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Actions/Actions";
import Shop from "../Shop/Shop";

const Products = (props) => {
  console.log(props);
  const { product, addToCart } = props;
  return (
    <div>
      products
      {product.map((pd) => (
        <Shop key={pd.id} products={pd} addToCart={addToCart}></Shop>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
  return {product : state.products}
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
