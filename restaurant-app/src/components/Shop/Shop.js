import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = (props) => {
  const { products, addToCart, cart } = props;
  return (
    <div className="shop-main">
      <div>
        <Link to={`/details/${products.id}`}>
          <img src={products.img} alt="" style={{ width: "70%" }} />
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {products.title}
          </p>
          <p>${products.price}</p>
        </Link>
      </div>
      {cart.some((ele) => ele.id === products.id) ? (
        <Link to={"/cart"}>
          <button style={{ border: "1px solid white", padding: "5px 15px" , backgroundColor:'orange', color:'white', borderRadius:'15px' }}>
            Go to cart
          </button>
        </Link>
      ) : (
        <button
          className="shop-main-btn"
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
