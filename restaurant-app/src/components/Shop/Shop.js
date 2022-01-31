import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from "@mui/material";
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
          <p style={{ fontSize: "20px",color:'#f49b02', fontWeight: "bold", textTransform:'uppercase' }}>
            {products.title}
          </p>
          <h4>$  {products.price}</h4>
        </Link>
      </div>
      {cart.some((ele) => ele.id === products.id) ? (
        <Link to={"/cart"}>
          <Button variant="contained" size="small" color="warning"  >
             <ShoppingCartCheckoutIcon/>Go to cart
          </Button>
        </Link>
      ) : (
        <Button variant="contained" size="small" style={{background: 'black'}}
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
          <AddShoppingCartIcon/> add
        </Button>
      )}
    </div>
  );
};

export default Shop;
