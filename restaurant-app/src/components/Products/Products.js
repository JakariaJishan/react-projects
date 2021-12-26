import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, filterItems } from "../../Redux/Actions/Actions";
import Shop from "../Shop/Shop";

const Products = (props) => {
  const { product, addToCart, cart, filterItems } = props;
  const [count, setCount] = useState(product);
  const handleFilter = (x) => {
    const filOut = product.filter((curEle) => curEle.category === x);
    setCount(filOut);
  };
  filterItems(count);
  return (
    <div>
      products
      <div>
        <div>
          <button onClick={() => setCount(product)}>all</button>
          <button onClick={() => handleFilter("breakfast")}>break fast</button>
          <button onClick={() => handleFilter("lunch")}>lunch</button>
          <button onClick={() => handleFilter("shakes")}>dinner</button>
        </div>
      </div>
      {count.map((pd) => (
        <Shop
          key={pd.id}
          products={pd}
          cart={cart}
          addToCart={addToCart}
        ></Shop>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products,
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
  filterItems: filterItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
