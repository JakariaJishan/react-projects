import React from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products, addToCart, cart } = props;
  return (
    <div>
      <div>
        <Link to={`/details/${products.id}`}>
          <h1>{products.title}</h1>
          <p>{products.price}</p>
        </Link>
      </div>
      {cart.some((ele) => ele.id === products.id) ? (
        <button disabled>cart added</button>
      ) : (
        <button
          onClick={() => addToCart(products.id, products.title, products.price, products.quantity)}
          
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default Shop;
