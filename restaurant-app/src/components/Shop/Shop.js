import React from "react";
import { Link } from "react-router-dom";
import './Shop.css';

const Shop = (props) => {
  const { products, addToCart, cart } = props;
  return (
    <div className="shop-main">
      <div>
        <Link to={`/details/${products.id}`}>
          <h3>{products.title}</h3>
          <p>{products.price}</p>
        </Link>
      </div>
      {cart.some((ele) => ele.id === products.id) ? (
        <button disabled>cart added</button>
      ) : (
        <button
          onClick={() =>
            addToCart(
              products.id,
              products.title,
              products.price,
              products.quantity
            )
          }
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default Shop;
