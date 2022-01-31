import { Button } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, filterItems } from "../../Redux/Actions/Actions";
import Shop from "../Shop/Shop";
import "./Products.css";

const Products = (props) => {
  const { product, addToCart, cart, filterItems } = props;
  const [count, setCount] = useState(product);
  const handleFilter = (x) => {
    const filOut = product.filter((curEle) => curEle.category === x);
    setCount(filOut);
  };
  filterItems(count);
  return (
    <div className="products-main">
      <div className="products">
        <h1>products</h1>
        <div className="products-filter">
          <div>
            <Button  variant="outlined" onClick={() => setCount(product)}>all</Button>
            <Button variant="outlined" onClick={() => handleFilter("breakfast")}>
              break fast
            </Button>
            <Button variant="outlined" onClick={() => handleFilter("lunch")}>lunch</Button>
            <Button  variant="outlined" onClick={() => handleFilter("shakes")}>dinner</Button>
          </div>
        </div>
        <div className="products-items">
          {count.map((pd) => (
            <Shop
              key={pd.id}
              products={pd}
              cart={cart}
              addToCart={addToCart}
            ></Shop>
          ))}
        </div>
      </div>
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
