import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    let {title, image, category, price, description, rating} = props.product;
    // console.log(props)
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p><strong>Category: </strong> <small>"{category}"</small></p>
                <br />
                <h4> price: $<strong>{price}</strong> </h4>
                <i><p>only {rating.count} in stock. order now...</p></i>
                <button className="cart-btn" onClick={ () =>props.handleCartItem(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div> 
        </div>
    );
};

export default Product;