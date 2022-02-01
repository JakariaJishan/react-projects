import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart
} from "../../Redux/Actions/Actions";
import "./Cart.css";
const Cart = (props) => {
  const { cart, removeFromCart, incrementCart, decrementCart } = props;
  let totalPrice = 0;
  let cartPrices = cart.map((ele) => ele.price * ele.quantity);
  for (let i = 0; i < cartPrices.length; i++) {
    const element = cartPrices[i];
    totalPrice = totalPrice + element;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "2rem auto",
        width: "60%",
      }}
    >
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Address" variant="standard" />
          <br />
          <TextField id="standard-basic" label="Road No" variant="standard" />
          <br />
          <TextField
            id="standard-basic"
            label="Contact No"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Add delivery instructions"
            variant="filled"
          />
          <br />
          <Button
            variant="contained"
            style={{ width: "96%", background: "rgb(237, 108, 2)" }}
          >
            Save & Continue
          </Button>
        </Box>
      </div>
      <div>
        {cart.map((pd) => (
          <div key={pd.cartId}>
            <h1>{pd.name}</h1>
            <p>{pd.price}</p>
            <p>{pd.price * pd.quantity}</p>
            <button onClick={() => decrementCart(pd.id, pd.quantity)}>-</button>
            <span>{pd.quantity}</span>
            <button onClick={() => incrementCart(pd.id, pd.quantity)}>+</button>
            <button onClick={() => removeFromCart(pd.id)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
  incrementCart: incrementCart,
  decrementCart: decrementCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
