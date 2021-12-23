import React from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <div>
      <div>
        <Link to={`/details/${products.id}`} >
          <h1>{products.title}</h1>
          <p>{products.price}</p>
        </Link>
      </div>
      <button onClick={() => addToCart(products.id, products.title, products.price)}>
        add to cart
      </button>
    </div>
  );
};

export default Shop;
