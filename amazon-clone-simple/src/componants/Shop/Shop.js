import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';
const Shop = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  let handleCartItem = (product) => {
    console.log('btn clicked', product);
    let newCart = [...cart, product];
    setCart(newCart);
  }
  // console.log(typeof products)
  return (
    <div className="shop-container">
      <div className="product-container">
      {
        
          products.map((pro) => (
            <Product
            handleCartItem ={handleCartItem} 
            product ={pro}></Product>
          ))
       
      }
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
      
    </div>
  );
};

export default Shop;
