import React from "react";
import './Shop.css';
const Shop = (props) => {
  let { title, price, image_240x135, price_detail, visible_instructors } = props.course;
  let handleAddToCart = props.handleAddToCart;
    let [x] = visible_instructors;
  return (
    <div >
      <div className="shop-body">
        <div className="image">
          <img src={image_240x135} alt="" />
        </div>
        <div className="shop-title">
          <h3>{title}</h3>
          <p>{x.display_name}</p>
        </div>
        <div className="shop-price">
          <h2>{price}</h2>
          <button onClick={() => handleAddToCart(price_detail.amount)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
